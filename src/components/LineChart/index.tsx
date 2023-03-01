import { Box, Typography } from "@mui/material";
import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  defaults,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  Point,
  PointElement,
  Title,
  Tooltip,
  TooltipModel,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import React, { KeyboardEventHandler, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

import infoIcon from "../../assets/info.svg";
import { TooltipPortal } from "../Tooltip";
import defaultOptions, { defaultColors } from "./config/defaultOptions";
import hoverLine, { ChartOptionsWithHoverLine } from "./plugins/hoverLine";
import showTooltipOnLoad from "./plugins/showTooltipOnLoad";

export interface ChartTheme {
  chart?: {
    font?: string;
    fontSize?: number;
    colors?: {
      pointBackgroundColor?: string;
      pointBorderColor?: string;
      pointHoverBackgroundColor?: string;
      pointHoverBorderColor?: string;
      lineBackgroundColor?: string;
      lineBorderColor?: string;
      fill?: string;
    }[];
  };
}

export interface LineChartProps {
  data: ChartData<"line", { label: string; value: number; updated: string }[]>;
  options?: ChartOptions;
  chartTheme?: ChartTheme;
  theme?: ThemeOptions & ChartTheme;
  hideLegend?: boolean;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin,
);

export const ActiveIndex = React.createContext(-1);

export const LineChart = ({ data, options, theme, hideLegend }: LineChartProps) => {
  const chartRef = useRef<ChartJS>(null);

  const [currentHeroNumber, setCurrentHeroNumber] = useState<number | string>("$ —");

  defaults.font = {
    family: theme?.chart?.font || "'Nunito Sans', sans-serif",
    size: 14,
  };

  const dataWithColors = {
    labels: data.labels,
    datasets: [
      ...data.datasets.map((set, i) => {
        return {
          backgroundColor:
            theme?.chart?.colors?.[i].lineBackgroundColor ||
            options?.elements?.line?.backgroundColor ||
            defaultColors.line.backgroundColors[i],
          borderColor:
            theme?.chart?.colors?.[i].lineBorderColor ||
            options?.elements?.line?.borderColor ||
            defaultColors.line.borderColors[i],
          pointBorderColor:
            theme?.chart?.colors?.[i].pointBorderColor ||
            options?.elements?.point?.borderColor ||
            defaultColors.point.borderColors[i],
          pointHoverBorderColor:
            theme?.chart?.colors?.[i].pointHoverBorderColor ||
            options?.elements?.point?.borderColor ||
            defaultColors.point?.hoverBorderColors[i],
          pointHoverBackgroundColor:
            theme?.chart?.colors?.[i].pointHoverBackgroundColor ||
            options?.elements?.point?.hoverBackgroundColor ||
            defaultColors.point.hoverBackgroundColors[i],
          pointBackgroundColor:
            theme?.chart?.colors?.[i].pointBackgroundColor ||
            options?.elements?.point?.backgroundColor ||
            defaultColors.point.backgroundColor,
          ...set,
        };
      }),
    ],
  };

  const optionOverrides: ChartOptions = {
    plugins: {
      ...defaultOptions.plugins,
      ...options?.plugins,
      legend: {
        ...defaultOptions.plugins?.legend,
        ...options?.plugins?.legend,
        display: !hideLegend,
      },
      tooltip: {
        ...defaultOptions.plugins?.tooltip,
        ...options?.plugins?.tooltip,
        titleFont: {
          family: theme?.chart?.font || "'Nunito Sans', sans-serif",
        },
        bodyFont: {
          family: theme?.chart?.font || "'Nunito Sans', sans-serif",
        },
      },
    },
  };

  const [chartOptions] = useState<ChartOptions>({
    ...defaultOptions,
    ...options,
    ...optionOverrides,
  });

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    setActiveIndex(
      Math.max(
        chartRef.current?.data.datasets[0].data.length - 1,
        chartRef.current?.data.datasets[1].data.length - 1,
      ),
    );
  }, []);

  useEffect(() => {
    if (chartRef.current == null || activeIndex === -1) {
      return;
    }

    const chart = chartRef.current;
    chart.setActiveElements([
      {
        datasetIndex: 0,
        index: activeIndex,
      },
      {
        datasetIndex: 1,
        index: activeIndex,
      },
    ]);
    const chartOptions = chart.options as ChartOptionsWithHoverLine;
    const activeElements = chart.getActiveElements();
    if (chartOptions.mouseLine && activeElements[0]) {
      chartOptions.mouseLine.x = activeElements[0].element.x;
    }
    if (data && data.datasets[0] && data.datasets[1]) {
      const datapoint0 = data.datasets[0].data[activeIndex].value as number;
      const datapoint1 = data.datasets[1].data[activeIndex].value as number;
      if (datapoint0 !== null && datapoint1 !== null) {
        setCurrentHeroNumber(Math.abs(datapoint0 - datapoint1));
      }
    }
    chart.update();
  }, [activeIndex]);

  //
  // dispatch click event on chart
  //
  const dispatchClick = function (chart: ChartJS, point: Point) {
    const node = chart.canvas;
    const rect = node.getBoundingClientRect();
    const event = new MouseEvent("click", {
      clientX: rect.left + point.x,
      clientY: rect.top + point.y,
      cancelable: true,
      bubbles: true,
      //view: window
    });
    node.dispatchEvent(event);
  };

  const handleKeyup: KeyboardEventHandler<HTMLCanvasElement> = ({ code }) => {
    const chart = chartRef.current;
    if (chart == null) {
      return;
    }
    const activeElements = chart.getActiveElements();
    if (code === "ArrowRight") {
      const pos = activeIndex + 1;
      const index = pos === chart.data.datasets[0].data.length ? 0 : pos;
      setActiveIndex(index);
    } else if (code === "ArrowLeft") {
      const pos = activeIndex - 1;
      const index = pos < 0 ? chart.data.datasets[0].data.length - 1 : pos;
      setActiveIndex(index);
    } else if (code === "Enter" && activeElements.length) {
      const el = activeElements[0];
      const meta = chart.getDatasetMeta(el.datasetIndex);
      const data = meta.data[el.index];
      dispatchClick(chart, data);
    }
  };

  const handleMouseMove = () => {
    if (chartRef.current?.getActiveElements()[0]) {
      setActiveIndex(chartRef.current?.getActiveElements()[0].index || 0);
    }
  };

  const currentDataPoints = [
    (data.datasets[0].data[activeIndex]?.value || "unavailable").toString(),
    (data.datasets[1].data[activeIndex]?.value || "unavailable").toString(),
  ];
  const currentXLabel =
    chartRef.current?.data.labels != null ? chartRef.current?.data.labels[activeIndex] : "null";

  const currentYLabels = [
    chartRef.current?.data.datasets[0].label,
    chartRef.current?.data.datasets[1].label,
  ];

  const ariaLabel =
    activeIndex > -1
      ? `${currentXLabel} ${currentYLabels[0]} ${currentDataPoints[0]}. ${currentYLabels[1]} ${currentDataPoints[1]}.`
      : "";

  return (
    <ThemeProvider theme={theme as ThemeOptions}>
      <ActiveIndex.Provider value={activeIndex}>
        <Box className="text" sx={{ position: "relative", width: "100%" }}>
          <span>Your home equity estimate</span>
          {currentHeroNumber && (
            <Typography variant="h3" component="h1" sx={{ marginTop: "8px", marginBottom: "10px" }}>
              {typeof currentHeroNumber === "number"
                ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  }).format(currentHeroNumber)
                : currentHeroNumber}
            </Typography>
          )}

          <Box sx={{ fontSize: "14px", marginBottom: "24px" }}>
            Updated on{" "}
            {activeIndex > -1 && data.datasets[0].data[activeIndex].updated ? (
              <>
                {data.datasets[0].data[activeIndex].updated}{" "}
                <img style={{ width: "20px", verticalAlign: "text-bottom" }} src={infoIcon} />
              </>
            ) : (
              "—/—/—"
            )}
          </Box>
          <Box sx={{ position: "relative" }}>
            <Line
              data={dataWithColors}
              options={chartOptions}
              plugins={[hoverLine, showTooltipOnLoad]}
              aria-label={ariaLabel}
              aria-live="assertive"
              ref={chartRef}
              onKeyUp={handleKeyup}
              tabIndex={0}
              onMouseMove={handleMouseMove}
              onMouseOver={() => setActiveIndex(0)}
              onMouseOut={() => {
                setActiveIndex(data.datasets[0].data.length - 1);
                // chartRef.current?.setActiveElements([
                //   {
                //     datasetIndex: 0,
                //     index: data.datasets[0].data.length - 1,
                //   },
                //   {
                //     datasetIndex: 1,
                //     index: data.datasets[0].data.length - 1,
                //   },
                // ]);
              }}
            />
            <TooltipPortal
              chart={chartRef.current as ChartJS}
              tooltip={chartRef.current?.tooltip as TooltipModel<"line">}
            />
          </Box>
        </Box>
        {/* {data.datasets.map((set, i) => (
        <table key={`dataset-${i}`}>
          <thead>
            <tr>
              {data.labels &&
                data.labels.map((label, i) => (
                  <td key={`label-${i}`} aria-label={label as string}>
                    {label as string}
                  </td>
                ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {set.data.map((datum, i) => (
                <td key={`datum-${i}`} aria-label={datum === 0 ? 'empty' : datum?.toString()}>
                  {datum === 0 ? 'empty' : datum?.toString()}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      ))} */}
      </ActiveIndex.Provider>
    </ThemeProvider>
  );
};

LineChart.displayName = "LineChart";

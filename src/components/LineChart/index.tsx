import { Box } from "@mui/material";
import {
  ActiveElement,
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
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { KeyboardEventHandler, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

import defaultOptions, { defaultColors } from "./config/defaultOptions";
import hoverLine, { ChartOptionsWithHoverLine } from "./plugins/hoverLine";

export interface ChartTheme {
  font?: string;
  fontSize?: number;
  colors?: {
    point?: string;
    line?: string;
    fill?: string;
  }[];
}

export interface LineChartProps {
  data: ChartData<"line">;
  options?: ChartOptions;
  chartTheme?: ChartTheme;
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

export const LineChart = ({ data, options, chartTheme }: LineChartProps) => {
  const chartRef = useRef<ChartJS>(null);

  defaults.font = {
    family: chartTheme?.font || "'Nunito Sans', sans-serif",
    size: 14,
  };

  const dataWithColors = {
    labels: data.labels,
    datasets: [
      ...data.datasets.map((set, i) => {
        return {
          backgroundColor:
            chartTheme?.colors?.[i].fill ||
            options?.elements?.line?.backgroundColor ||
            defaultColors.line.backgroundColors[i],
          borderColor:
            chartTheme?.colors?.[i].line ||
            options?.elements?.line?.borderColor ||
            defaultColors.line.borderColors[i],
          pointBorderColor:
            chartTheme?.colors?.[i].point ||
            options?.elements?.point?.borderColor ||
            defaultColors.point.borderColors[i],
          pointHoverBorderColor:
            chartTheme?.colors?.[i].point ||
            options?.elements?.point?.borderColor ||
            defaultColors.point?.hoverBorderColors[i],
          pointHoverBackgroundColor:
            chartTheme?.colors?.[i].point ||
            options?.elements?.point?.backgroundColor ||
            defaultColors.point.hoverBackgroundColors[i],
          pointBackgroundColor:
            chartTheme?.colors?.[i].point ||
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
      tooltip: {
        ...defaultOptions.plugins?.tooltip,
        ...options?.plugins?.tooltip,
        titleFont: {
          family: chartTheme?.font || "'Nunito Sans', sans-serif",
        },
        bodyFont: {
          family: chartTheme?.font || "'Nunito Sans', sans-serif",
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
    chart.update();
  }, [activeIndex]);

  const currentActiveElement = function (elements: ActiveElement[]) {
    if (elements.length) {
      return elements[0].index;
    }
    return -1;
  };
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
      const pos = currentActiveElement(activeElements) + 1;
      const index = pos === chart.data.datasets[0].data.length ? 0 : pos;
      setActiveIndex(index);
    } else if (code === "ArrowLeft") {
      const pos = currentActiveElement(activeElements) - 1;
      const index = pos < 0 ? chart.data.datasets[0].data.length - 1 : pos;
      setActiveIndex(index);
    } else if (code === "Enter" && activeElements.length) {
      const el = activeElements[0];
      const meta = chart.getDatasetMeta(el.datasetIndex);
      const data = meta.data[el.index];
      dispatchClick(chart, data);
    }
  };

  const currentDataPoints = [
    (chartRef.current?.data.datasets[0].data[activeIndex] || "unavailable").toString(),
    (chartRef.current?.data.datasets[1].data[activeIndex] || "unavailable").toString(),
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
    <>
      <Box className="text" sx={{ position: "relative", width: "100%" }}>
        <Line
          data={dataWithColors}
          options={chartOptions}
          plugins={[hoverLine]}
          aria-label={ariaLabel}
          aria-live="assertive"
          ref={chartRef}
          onKeyUp={handleKeyup}
          onBlur={() => setActiveIndex(-1)}
          onFocus={() => setActiveIndex(0)}
          tabIndex={0}
        />
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
    </>
  );
};

LineChart.displayName = "LineChart";

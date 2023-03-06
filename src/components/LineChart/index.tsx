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
  PointElement,
  Title,
  Tooltip,
  TooltipModel,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import React, { KeyboardEventHandler, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

import infoIcon from "../../assets/info.svg";
import defaultOptions, { defaultColors } from "./config/defaultOptions";
import { Disclosure } from "./Disclosure";
import hoverLine, { ChartOptionsWithHoverLine } from "./plugins/hoverLine";
import showTooltipOnLoad from "./plugins/showTooltipOnLoad";
import { TooltipPortal } from "./Tooltip";
import { getLongestDatasetLength } from "./utils";

export interface ChartTheme extends ThemeOptions {
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
  theme?: ChartTheme;
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
  // Ref used to manipulate the underlying Chart.js instance.
  const chartRef = useRef<ChartJS>(null);

  const [currentHeroNumber, setCurrentHeroNumber] = useState<number | string>("$ —");

  defaults.font = {
    family: theme?.chart?.font || "'Nunito Sans', sans-serif",
    size: 14,
  };

  // Inject our theme's custom colors into the various chart elements.
  // The key names map to the properties' names in the Chart.js config.
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

  // Override the defaults with values from the theme and passed in options object.
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
          family: theme?.chart?.font,
        },
        bodyFont: {
          family: theme?.chart?.font,
        },
      },
    },
  };

  // Merge all of the options together
  const [chartOptions] = useState<ChartOptions>({
    ...defaultOptions,
    ...options,
    ...optionOverrides,
  });

  const [activeIndex, setActiveIndex] = useState(
    getLongestDatasetLength({ chart: chartRef.current }) - 1 || -1,
  );

  useEffect(() => {
    if (chartRef.current?.data.datasets[0].data) {
      setActiveIndex(getLongestDatasetLength({ chart: chartRef.current }) - 1);
    }
  }, []);

  useEffect(() => {
    if (chartRef.current == null) {
      return;
    }

    const chart = chartRef.current;

    chart.setActiveElements([
      {
        datasetIndex: 0,
        index: activeIndex === -1 ? getLongestDatasetLength({ chart }) - 1 : activeIndex,
      },
      {
        datasetIndex: 1,
        index: activeIndex === -1 ? getLongestDatasetLength({ chart }) - 1 : activeIndex,
      },
    ]);

    const chartOptions = chart.options as ChartOptionsWithHoverLine;

    // Move the hover line when the activeIndex changes
    if (chartOptions.mouseLine && activeIndex > -1) {
      chartOptions.mouseLine.x = chart.getDatasetMeta(0).data.at(activeIndex)?.x;
    }

    // Do the math for the hero number
    if (
      data &&
      activeIndex > -1 &&
      data.datasets[0].data[activeIndex].value &&
      data.datasets[1].data[activeIndex].value
    ) {
      const datapoint0 = data.datasets[0].data[activeIndex].value as number;
      const datapoint1 = data.datasets[1].data[activeIndex].value as number;
      if (datapoint0 !== null && datapoint1 !== null) {
        setCurrentHeroNumber(Math.abs(datapoint0 - datapoint1));
      }
    } else {
      setCurrentHeroNumber("—");
    }
    // Refresh the chart
    chart.update();
  }, [activeIndex]);

  const handleMouseMove = () => {
    setActiveIndex(
      chartRef.current?.getActiveElements()[0]
        ? chartRef.current?.getActiveElements()[0].index
        : getLongestDatasetLength({ chart: chartRef.current }) - 1,
    );
  };

  // A11y stuff for keyboard controls

  const handleKeyup: KeyboardEventHandler<HTMLCanvasElement> = ({ code }) => {
    const chart = chartRef.current;

    if (chart == null) {
      return;
    }

    if (code === "ArrowRight") {
      const pos = activeIndex + 1;
      const index = pos === getLongestDatasetLength({ chart: chartRef.current }) ? 0 : pos;
      setActiveIndex(index);
    } else if (code === "ArrowLeft") {
      const pos = activeIndex - 1;
      const index = pos < 0 ? getLongestDatasetLength({ chart: chartRef.current }) - 1 : pos;
      setActiveIndex(index);
    }
  };

  const currentDataPoints = [
    (data.datasets[0].data[activeIndex]?.value || "unavailable").toString(),
  ];

  if (data.datasets[1]) {
    currentDataPoints.push(
      data.datasets[1].data[activeIndex]?.value != null
        ? data.datasets[1].data[activeIndex]?.value.toString()
        : "unavailable",
    );
  }

  const currentXLabel =
    data.datasets[0].data[activeIndex] != null
      ? data.datasets[0].data[activeIndex].label.toString()
      : "null";

  const currentYLabels = [data.datasets[0].label, data.datasets[1] ? data.datasets[1].label : ""];

  const ariaLabel =
    activeIndex > -1
      ? `${currentXLabel} ${currentYLabels[0]} ${currentDataPoints[0]}.${
          data.datasets[1] ? ` ${currentYLabels[1]} ${currentDataPoints[1]}.` : ""
        }`
      : "";

  const [showDisclosure, setShowDisclosure] = useState(false);

  const supportsContainerQueries = "container" in document.documentElement.style;
  // Container query polyfill
  if (!supportsContainerQueries) {
    require("https://cdn.skypack.dev/container-query-polyfill");
  }

  return (
    <ThemeProvider theme={theme as ChartTheme}>
      <ActiveIndex.Provider value={activeIndex}>
        <Box sx={{ height: "100%", containerType: "inline-size" }}>
          {showDisclosure && <Disclosure setShowDisclosure={setShowDisclosure} />}
          <Box sx={{ position: "relative", padding: "2rem" }}>
            <Typography fontWeight={600} fontSize={18}>
              Your home equity estimate
            </Typography>
            {currentHeroNumber && (
              <Typography
                variant="h3"
                component="h1"
                sx={{ marginTop: "8px", marginBottom: "10px" }}
              >
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
              <Typography fontSize={14}>
                Updated on{" "}
                {activeIndex > -1 && data.datasets[0].data.at(activeIndex)?.updated ? (
                  <>
                    {data.datasets[0].data.at(activeIndex)?.updated}{" "}
                    <button
                      onClick={() => setShowDisclosure(true)}
                      style={{
                        padding: 0,
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <img style={{ width: "20px", verticalAlign: "text-bottom" }} src={infoIcon} />
                    </button>
                  </>
                ) : (
                  "—/—/—"
                )}
              </Typography>
            </Box>
            <Box
              sx={(theme) => {
                return {
                  position: "relative",
                  // This is to line up the left edge of the Y scale with the type above, since
                  // Chart.js enforces uniform padding on both left and right, and we only want
                  // it on the right.
                  marginLeft: "-10px",
                  height: "236px",
                  [`@container (min-width: ${theme?.breakpoints?.values.sm}px)`]: {
                    height: "324px",
                  },
                };
              }}
            >
              <Line
                data={dataWithColors}
                options={chartOptions}
                plugins={[hoverLine, showTooltipOnLoad]}
                aria-label={ariaLabel}
                aria-live="assertive"
                ref={chartRef}
                onKeyUp={handleKeyup}
                tabIndex={0}
                onTouchMove={handleMouseMove}
                onMouseMove={handleMouseMove}
                onMouseOver={() => {
                  setActiveIndex(getLongestDatasetLength({ chart: chartRef.current }) - 1);
                }}
                onMouseOut={() => {
                  setActiveIndex(getLongestDatasetLength({ chart: chartRef.current }) - 1);
                }}
              />
              <TooltipPortal
                chart={chartRef.current as ChartJS}
                tooltip={chartRef.current?.tooltip as TooltipModel<"line">}
              />
            </Box>
          </Box>
        </Box>
      </ActiveIndex.Provider>
    </ThemeProvider>
  );
};

LineChart.displayName = "LineChart";

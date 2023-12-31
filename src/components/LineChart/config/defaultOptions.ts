import { ChartOptions, Color } from "chart.js";
import { externalTooltipHandler } from "src/components/LineChart/Tooltip";

export interface ChartOptionsWithHoverLine extends ChartOptions<"line"> {
  mouseLine: {
    x?: number;
    color: Color;
  };
}

const defaultColors = {
  point: {
    backgroundColor: "rgb(255, 255, 255)",
    hoverBackgroundColors: ["rgb(77, 76, 76)", "rgb(2, 77, 73)"],
    hoverBorderColors: ["rgb(77, 76, 76)", "rgb(2, 77, 73)"],
    borderColors: ["rgb(77, 76, 76)", "rgb(0, 77, 73)"],
  },
  line: {
    backgroundColors: ["rgb(215, 213, 210)", "rgb(125, 162, 158)"],
    borderColors: ["rgb(77, 76, 76)", "rgb(2, 77, 73)"],
  },
};

const chartOptions: ChartOptionsWithHoverLine = {
  mouseLine: {
    color: "rgb(77, 76, 76)",
  },
  maintainAspectRatio: false,
  elements: {
    line: {
      ...defaultColors.line,
      borderWidth: 2,
      fill: "start",
    },
    point: {
      ...defaultColors.point,
      borderWidth: 2,
      hoverRadius: 4.5,
      radius: 3,
    },
  },
  interaction: {
    includeInvisible: false,
    intersect: false,
    mode: "index",
  },
  parsing: {
    xAxisKey: "label",
    yAxisKey: "value",
  },
  plugins: {
    annotation: {
      annotations: [],
    },
    filler: {
      // @ts-ignore-line
      drawTime: "beforeDraw",
    },
    legend: {
      labels: {
        boxHeight: 12,
        boxWidth: 12,
      },
      position: "bottom",
    },
    tooltip: {
      bodyAlign: "center",
      titleFont: {
        family: "'Nunito Sans', sans-serif",
      },
      bodyFont: {
        family: "'Nunito Sans', sans-serif",
      },
      callbacks: {
        label: (context) => {
          let label = "";
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(context.parsed.y);
          }
          return [context.dataset.label || "", label];
        },
        title: () => "",
      },
      cornerRadius: 0,
      caretPadding: 10,
      caretSize: 0,
      displayColors: false,
      enabled: false,
      external: externalTooltipHandler,
    },
  },
  resizeDelay: 100,
  scales: {
    x: {
      grace: "5%",
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grace: "5%",
      ticks: {
        callback: (label) =>
          Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          }).format(label as number),
        padding: 10,
      },
      type: "linear",
    },
  },
};

export default chartOptions;
export { defaultColors };

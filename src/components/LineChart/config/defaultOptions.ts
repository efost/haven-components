import { ChartOptions, Color } from "chart.js";

import externalTooltipHandler from "../plugins/customTooltips";

export interface ChartOptionsWithHoverLine extends ChartOptions<"line"> {
  mouseLine: {
    x?: number;
    color: Color;
  };
}

const chartOptions: ChartOptionsWithHoverLine = {
  aspectRatio: 1.33,
  mouseLine: {
    color: "rgb(77, 76, 76)",
  },
  responsive: true,
  elements: {
    line: {
      backgroundColor: ["rgb(125, 162, 158)", "rgb(215, 213, 210)"],
      borderColor: "rgb(77, 76, 76)",
      borderWidth: 2,
      fill: "start",
    },
    point: {
      backgroundColor: "rgb(255, 255, 255)",
      hoverBackgroundColor: "rgb(1, 57, 54)",
      hoverBorderColor: "rgb(1, 57, 54)",
      borderColor: ["rgb(0, 77, 73)", "rgb(77, 76, 76)"],
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
        pointStyle: "circle",
      },
      position: "bottom",
    },
    tooltip: {
      bodyAlign: "center",
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

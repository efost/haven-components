import { ChartOptions, Color, TooltipModel } from "chart.js";

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
      borderWidth: 1,
      fill: "start",
    },
    point: {
      backgroundColor: ["rgb(0, 77, 73)", "rgb(77, 76, 76)"],
      hoverRadius: 6,
      radius: 4.5,
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
      callbacks: {
        label: (context) => {
          let label = `${context.dataset.label}: `;
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(context.parsed.y);
          }
          return label;
        },
      },
      cornerRadius: 0,
      caretPadding: 10,
      caretSize: 0,
      displayColors: false,
      external: (context) => {
        const tooltipModel = context.tooltip as TooltipModel;
        // console.log(tooltipModel)
        // if (tooltipModel.opacity !== 0 && data?.labels?.length && data.datasets.length) {
        //   const dataSetIndex = tooltipModel.dataPoints[0].datasetIndex
        //   const color = tooltipBackgroundColors[dataSetIndex]
        //   tooltipModel.options.backgroundColor = color
        // }
      },
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

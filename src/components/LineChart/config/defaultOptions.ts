import { ChartOptions, Color, TooltipModel } from "chart.js";

export interface ChartOptionsWithHoverLine extends ChartOptions<"line"> {
  mouseLine: {
    x?: number;
    color: Color;
  };
}

const chartOptions: ChartOptionsWithHoverLine = {
  aspectRatio: 1.33,
  font: {
    family: "'Nunito Sans', sans-serif",
  },
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
      annotations: [
        {
          display: (chart, options) => {
            // console.log('chart', chart.chart.isDatasetVisible(0));
            // your logic, for instance the annoatation is shown
            // only if a dataset (in this case the first one) is not hidden
            return chart.chart.isDatasetVisible(1);
          },
          type: "label",
          xValue: 1.25,
          yMax: 60000,
          yValue: 90000,
          backgroundColor: "transparent",
          content: ["Estated.com", "home value"],
          font: {
            family: "'Nunito Sans', sans-serif",
            size: 14,
          },
        },
        {
          display: (chart, options) => {
            // console.log('chart', chart.chart.isDatasetVisible(0));
            // your logic, for instance the annoatation is shown
            // only if a dataset (in this case the first one) is not hidden
            return chart.chart.isDatasetVisible(0);
          },
          type: "label",
          xValue: 4.5,
          yMax: 60000,
          yValue: 90000,
          backgroundColor: "transparent",
          content: ["Appraised home", "value"],
          font: {
            family: "'Nunito Sans', sans-serif",
            size: 14,
          },
        },
      ],
    },
    filler: {
      // @ts-ignore-line
      drawTime: "beforeDraw",
    },
    legend: {
      labels: {
        font: {
          family: "'Nunito Sans', sans-serif",
        },
        usePointStyle: true,
      },
      position: "bottom",
    },
    tooltip: {
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
      titleFont: {
        family: "'Nunito Sans', sans-serif",
      },
      bodyFont: {
        family: "'Nunito Sans', sans-serif",
        size: 14,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grace: "5%",
      type: "linear",
    },
  },
};

export default chartOptions;

import { Chart as ChartJS, ChartEvent, ChartOptions, Color, Plugin } from "chart.js";

export interface ChartOptionsWithHoverLine extends ChartOptions<"line"> {
  mouseLine: {
    x?: number;
    color: Color;
  };
}

const hoverLine: Plugin<"line"> = {
  id: "hoverLine",
  afterEvent: function (chart: ChartJS<"line">, { event }: { event: ChartEvent }) {
    const chartOptions = chart.options as ChartOptionsWithHoverLine;
    const chartArea = chart.chartArea;
    if (
      event.x &&
      event.y &&
      event.x >= chartArea.left &&
      event.y >= chartArea.top &&
      event.x <= chartArea.right &&
      event.y <= chartArea.bottom &&
      chart.getActiveElements().length
    ) {
      const activeElement = chart.getActiveElements()[0];
      chartOptions.mouseLine.x = activeElement.element.x;
    } else {
      chartOptions.mouseLine.x = -100;
    }
  },
  afterDatasetsDraw: function (chart: ChartJS<"line">) {
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;

    const chartOptions = chart.options as ChartOptionsWithHoverLine;

    const x = chartOptions.mouseLine.x;

    if (x != null && x > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = chartOptions.mouseLine.color;
      ctx.lineWidth = 2;
      ctx.moveTo(chartOptions.mouseLine.x || 0, chartArea.bottom);
      ctx.lineTo(chartOptions.mouseLine.x || 0, chartArea.top);
      ctx.setLineDash([2, 1]);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, chartArea.bottom, 6, 0, 2 * Math.PI);
      ctx.fillStyle = chartOptions.mouseLine.color;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, chartArea.top, 6, 0, 2 * Math.PI);
      ctx.fillStyle = chartOptions.mouseLine.color;
      ctx.fill();
      ctx.restore();
    }
  },
};

export default hoverLine;

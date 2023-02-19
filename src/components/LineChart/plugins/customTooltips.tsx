import { Chart, FontSpec, TooltipModel } from "chart.js";
import { toFont } from "chart.js/helpers";

const getOrCreateTooltip = (chart: Chart) => {
  let tooltipEl = chart.canvas.parentNode?.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "chartjs-tooltip";
    tooltipEl.style.borderRadius = "3px";
    tooltipEl.style.color = "white";
    tooltipEl.style.opacity = "1";
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.top = "0";
    tooltipEl.style.transition = "all .1s ease";

    chart.canvas.parentNode?.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context: { chart: Chart; tooltip: TooltipModel<"line"> }) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = "0";
    return;
  }

  // Set Text
  if (tooltip.body) {
    Array.from(tooltipEl.children).forEach((child) => child.remove());
    tooltip.body.forEach((b: { lines: string[] }, idx) => {
      const bodyLines = b.lines;
      const table = document.createElement("table");
      table.style.borderRadius = "2px";
      table.style.marginBottom = "20px";
      table.style.position = "absolute";
      tooltipEl.appendChild(table);
      const tableBody = document.createElement("tbody");
      bodyLines.forEach((body: string, lineIdx: number) => {
        const node = document.createTextNode(body);
        const tr = document.createElement("tr");
        tr.style.backgroundColor = "inherit";
        tr.style.borderWidth = "0";
        const td = document.createElement("td");
        td.style.borderWidth = "0";
        td.style.whiteSpace = "nowrap";
        td.appendChild(node);
        const activeIndex = chart.getActiveElements()[idx].index;
        const pointData = chart.data.datasets[idx].data.at(activeIndex);
        const prevPointData = chart.data.datasets[idx].data.at(activeIndex - 1);
        if (![pointData, prevPointData].includes(null)) {
          const pointValue = (pointData as number) || 0;
          const prevPointValue = (prevPointData as number) || 0;
          const valueDiff = pointValue - prevPointValue;
          if (activeIndex > -1 && lineIdx === 1 && valueDiff !== 0) {
            const diffSpan = document.createElement("span");
            const arrow = document.createElement("img");
            arrow.src = "/arrow.png";
            arrow.style.width = "14px";
            arrow.style.height = "14px";
            arrow.style.position = "relative";
            arrow.style.top = "2px";
            if (valueDiff > 0) {
              arrow.style.transform = "rotate(180deg)";
            }
            diffSpan.style.color = "rgb(206, 228, 212)";
            diffSpan.style.display = "inline-block";
            diffSpan.appendChild(arrow);
            diffSpan.appendChild(document.createTextNode(Math.abs(valueDiff).toString()));
            td.appendChild(diffSpan);
          }
        }
        tr.appendChild(td);
        if (tableBody) {
          tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
      });
    });
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  const tooltips = tooltipEl.querySelectorAll("table");

  tooltips.forEach((tip, idx) => {
    const width = tooltipEl.querySelectorAll("table")[idx].getBoundingClientRect().width;
    tip.style.top =
      chart.getActiveElements()[idx].element.y - tip.getBoundingClientRect().height / 2 + "px";
    tip.style.left =
      tooltip.caretX > positionX + chart.canvas.getBoundingClientRect().width / 2
        ? `${-1 * width - 20}px`
        : "0";
  });

  Array.from(tooltipEl.querySelectorAll("table")).forEach((table, idx) => {
    table.style.backgroundColor = chart.getActiveElements()[idx].element.options.borderColor;
  });

  // Display, position, and set styles for font
  const bodyFont = toFont(tooltip.options.bodyFont as Partial<FontSpec>);
  tooltipEl.style.opacity = "1";
  tooltipEl.style.left = positionX + tooltip.caretX + 10 + "px";
  tooltipEl.style.height = "100%";
  tooltipEl.style.fontFamily = bodyFont.family;
  tooltipEl.style.fontSize = `${bodyFont.size}px` || "14px";
  tooltipEl.style.lineHeight = `${bodyFont.lineHeight}px` || "120%";
  tooltipEl.style.padding = tooltip.options.padding + "px " + tooltip.options.padding + "px";
};

export default externalTooltipHandler;

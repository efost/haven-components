import Box from "@mui/material/Box/Box";
import { Chart, FontSpec, TooltipModel } from "chart.js";
import { toFont } from "chart.js/helpers";

export interface TooltipProps {
  children?: React.ReactNode;
  chart?: Chart | null;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, chart }) => {
  return (
    <Box
      id="chartjs-tooltip-react"
      sx={{
        borderRadius: "3px",
        color: "white",
        opacity: chart?.getActiveElements().length === 0 ? "0" : "1",
        pointerEvents: "none",
        position: "absolute",
        top: "0",
        transition: "all .2s ease-in-out",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

const renderArrow = (parent: HTMLElement, valueDiff: number) => {
  const diffSpan = document.createElement("span");
  const arrow = document.createElement("img");
  arrow.src = "/arrow.png";
  arrow.style.display = "inline-block";
  arrow.style.marginLeft = "0.5em";
  arrow.style.width = "14px";
  arrow.style.height = "14px";
  arrow.style.position = "relative";
  arrow.style.top = "2px";
  if (valueDiff > 0) {
    arrow.style.transform = "rotate(180deg)";
  }
  const formattedDiff = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    notation: "compact",
  })
    .format(Math.abs(valueDiff))
    .toString();
  diffSpan.style.color = "rgb(206, 228, 212)";
  diffSpan.style.display = "inline-block";
  diffSpan.appendChild(arrow);
  diffSpan.appendChild(document.createTextNode(formattedDiff));
  parent.appendChild(diffSpan);
};

const Arrow: React.FC = ({ valueDiff }: { valueDiff: number }) => {
  const formattedDiff = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    notation: "compact",
  })
    .format(Math.abs(valueDiff))
    .toString();
  return (
    <span
      style={{
        color: "rgb(206, 228, 212)",
        display: "inline-block",
      }}
    >
      {formattedDiff}
      <img
        src="/arrow.png"
        style={{
          display: "block",
          marginLeft: "0.5em",
          width: "14px",
          height: "14px",
          position: "relative",
          top: "2px",
          transform: valueDiff > 0 ? "rotate(180deg)" : "none",
        }}
      ></img>
    </span>
  );
};

// Markup

/* 
<div id="chartjs-tooltip">
  <table>
    <tr>
      <td>{Label}</td>
    </tr>
    <tr>
      <td>{Datum}</td>
    </tr>
  </table>
</div>


*/

// const getOrCreateTooltipContainer = (chart: Chart) => {
//   let tooltipEl = chart.canvas.parentNode?.querySelector("div");

//   if (!tooltipEl) {
//     tooltipEl = document.createElement("div");
//     tooltipEl.id = "chartjs-tooltip";
//     tooltipEl.style.borderRadius = "3px";
//     tooltipEl.style.color = "white";
//     tooltipEl.style.opacity = "1";
//     tooltipEl.style.pointerEvents = "none";
//     tooltipEl.style.position = "absolute";
//     tooltipEl.style.top = "0";
//     tooltipEl.style.transition = "all .2s ease-in-out";
//     tooltipEl.style.height = "100%";

//     chart.canvas.parentNode?.appendChild(tooltipEl);
//   }

//   return tooltipEl;
// };

const TooltipPortal = ({ chart }: { chart: Chart | null }) => (
  <Tooltip chart={chart}>From the portal</Tooltip>
);

const externalTooltipHandler = (context: { chart: Chart; tooltip: TooltipModel<"line"> }) => {
  // Tooltip Element
  const { chart, tooltip } = context;

  console.log("CPE", chart.canvas.parentElement);

  const tooltipEl = getOrCreateTooltipContainer(chart);

  if (chart.getActiveElements().length === 0) {
    tooltipEl.style.opacity = "0";
  } else {
    tooltipEl.style.opacity = "1";
  }

  const { offsetLeft: positionX } = chart.canvas;

  tooltipEl.style.left = positionX + tooltip.caretX + 10 + "px";
  const bodyFont = toFont(tooltip.options.bodyFont as Partial<FontSpec>);
  tooltipEl.style.fontFamily = bodyFont.family;
  tooltipEl.style.fontSize = `${bodyFont.size}px` || "14px";
  tooltipEl.style.lineHeight = `${bodyFont.lineHeight}px` || "120%";
  tooltipEl.style.padding = tooltip.options.padding + "px " + tooltip.options.padding + "px";

  // Set Text
  if (tooltip.body) {
    Array.from(tooltipEl.children).forEach((child) => child.remove());
    // Line 1 is the dataset label
    // Line 2 is the dataset datum
    tooltip.body.forEach((b: { lines: string[] }, idx) => {
      if (!chart.getActiveElements()[idx] && tooltip.opacity === 0) {
        return;
      }
      const bodyLines = b.lines;
      const table = document.createElement("table");
      table.style.backgroundColor = chart.getActiveElements()[idx].element.options.borderColor;
      table.style.borderRadius = "2px";
      table.style.marginBottom = "20px";
      table.style.padding = "0 2px";
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
          if (activeIndex > -1 && lineIdx === 1) {
            if (valueDiff === 0) {
              // Should decide if we want to put anything in place of the arrow if no change
            } else {
              renderArrow(td, valueDiff);
            }
          }
        }
        tr.appendChild(td);
        if (tableBody) {
          tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
      });
      const width = table.getBoundingClientRect().width;
      table.style.top =
        chart.getActiveElements()[idx].element.y - table.getBoundingClientRect().height / 2 + "px";
      table.style.left =
        tooltip.caretX > chart.canvas.getBoundingClientRect().width / 2
          ? `${-1 * width - 20}px`
          : "0";
    });
  }
};

export default Tooltip;
export { externalTooltipHandler, TooltipPortal };

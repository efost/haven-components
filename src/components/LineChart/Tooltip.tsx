import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { Chart, FontSpec, TooltipModel } from "chart.js";
import { toFont } from "chart.js/helpers";
import { useContext, useEffect, useRef, useState } from "react";

import { ActiveIndex } from ".";
import { useWindowSize } from "./hooks";
import { getLongestDatasetLength } from "./utils";

export interface TooltipProps {
  children?: JSX.Element[];
  chart?: Chart | null;
  tooltip?: TooltipModel | null;
}

export const Tooltip: React.FC<TooltipProps> = ({ chart, tooltip }) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const bodyFont = toFont(tooltip?.options.bodyFont as Partial<FontSpec>);
  const activeIndex = useContext(ActiveIndex);

  const [xPosition, setXPosition] = useState(
    chart?.getDatasetMeta(0).data.at(getLongestDatasetLength({ chart }) - 1)?.x || -100,
  );

  const [isResizing, setIsResizing] = useState(false);

  // This hook provides height too, but that's not super important for this particular usage.
  const { width } = useWindowSize();

  // Due to rerender time, the tooltip needs to wait a bit longer to calculate its new position.
  const tooltipRepositionDelay =
    typeof chart?.options.resizeDelay === "number" ? 2 * chart.options.resizeDelay : 400;

  useEffect(() => {
    setIsResizing(true);
    setTimeout(() => {
      setXPosition(chart?.getDatasetMeta(0).data.at(activeIndex)?.x || -100);
      setIsResizing(false);
    }, tooltipRepositionDelay);
  }, [width]);

  return (
    <Box
      id="chartjs-tooltip-react"
      sx={{
        borderRadius: "3px",
        color: "white",
        pointerEvents: "none",
        position: "absolute",
        top: "0",
        transition: `all .5s cubic-bezier(0.230, 1.000, 0.320, 1.000)`,
        height: "100%",
        left: `${
          // We only want to use the effect-coupled value if the window has resized, otherwise we recompute below
          isResizing ? xPosition : chart?.getDatasetMeta(0).data.at(activeIndex)?.x || -100
        }px`,
        fontFamily: bodyFont.family,
        fontSize: `${bodyFont.size}px` || "14px",
        lineHeight: `${bodyFont.lineHeight}px` || "120%",
        opacity: activeIndex === -1 ? 0 : 1,
        padding: tooltip?.options.padding + "px ",
      }}
    >
      {chart &&
        tooltip?.body &&
        tooltip?.body.map((b: { lines: string[] }, idx) => {
          const bodyLines = b.lines;

          const currentDatasetIndex = tooltip?.dataPoints[idx].datasetIndex;

          if (chart.data.datasets[currentDatasetIndex].data.at(activeIndex).value === null) {
            return <></>;
          }

          const currentPointMeta = chart
            .getDatasetMeta(currentDatasetIndex)
            .data.at(activeIndex) || {
            x: 0,
            y: 0,
            tooltipPosition: () => ({ x: 0, y: 0 }),
          };

          return (
            <table
              key={`table-${idx}`}
              ref={tableRef}
              style={{
                backgroundColor: chart.getDatasetMeta(currentDatasetIndex).data.at(activeIndex)
                  ?.options.borderColor,
                borderRadius: "2px",
                marginBottom: "20px",
                padding: "0 2px",
                position: "absolute",
                top: `${
                  currentPointMeta.tooltipPosition(true).y -
                  tooltip?.height / (tooltip.body.length * 2)
                }px`,
                left:
                  currentPointMeta.x >
                  chart.chartArea.left + chart.chartArea.width - tooltip?.width - 12
                    ? `${-1 * tooltip?.width - 12}px`
                    : "10px",
              }}
            >
              <tbody>
                <tr style={{ backgroundColor: "inherit", borderWidth: "0" }} key={`tr-0`}>
                  <td style={{ borderWidth: "0", whiteSpace: "nowrap" }}>
                    <>{bodyLines[0]}</>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "inherit", borderWidth: "0" }} key={`tr-1`}>
                  <td style={{ borderWidth: "0", whiteSpace: "nowrap" }}>
                    {(() => {
                      const pointData =
                        // @ts-ignore For some reason, the correct type for these is not being inferred
                        chart.data.datasets[currentDatasetIndex].data.at(activeIndex)?.value;
                      const prevPointData = chart.data.datasets[currentDatasetIndex].data.at(
                        activeIndex - 1,
                        // @ts-ignore For some reason, the correct type for these is not being inferred
                      )?.value;
                      let arrow = <></>;
                      let pointValue: number | null = null;
                      if (pointData != null) {
                        pointValue = pointData as number;
                        if (prevPointData != null) {
                          const prevPointValue = prevPointData as number;
                          const valueDiff = pointValue - prevPointValue;
                          arrow =
                            activeIndex > 0 && valueDiff !== 0 ? (
                              <Arrow {...{ valueDiff }} />
                            ) : (
                              <></>
                            );
                        }
                      }
                      return (
                        <>
                          {typeof pointValue === "number"
                            ? new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 0,
                              }).format(pointValue)
                            : pointValue}{" "}
                          {arrow}
                        </>
                      );
                    })()}
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
    </Box>
  );
};

const Arrow: React.FC<{ valueDiff: number }> = ({ valueDiff }: { valueDiff: number }) => {
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
      <img
        src="/arrow.png"
        style={{
          display: "inline-block",
          marginLeft: "0.5em",
          width: "14px",
          height: "14px",
          position: "relative",
          top: "2px",
          transform: valueDiff > 0 ? "rotate(180deg)" : "none",
        }}
      />
      {formattedDiff}
    </span>
  );
};

const TooltipPortal = ({ chart, tooltip }: { chart: Chart; tooltip: TooltipModel<"line"> }) => {
  const activeIndex = useContext(ActiveIndex);
  return (
    <>
      {chart && tooltip && activeIndex > -1
        ? externalTooltipHandler({ chart, tooltip, activeIndex })
        : null}
    </>
  );
};

const externalTooltipHandler = ({
  chart,
  tooltip,
  activeIndex,
}: {
  chart: Chart;
  tooltip: TooltipModel<"line">;
  activeIndex: number;
}) => {
  const activeElements = chart.getActiveElements();
  if (activeElements.length === 0) {
    const newActiveElements = chart.data.datasets.map((_, idx) => {
      return {
        datasetIndex: idx,
        index: getLongestDatasetLength({ chart }) - 1,
      };
    });
    chart.setActiveElements(newActiveElements);
    chart.update();
  }

  if (activeIndex === -1 /* chart has just initialized */) {
    const newActiveElements = chart.data.datasets.map((_, idx) => {
      return {
        datasetIndex: idx,
        index: getLongestDatasetLength({ chart }) - 1,
      };
    });
    chart.setActiveElements(newActiveElements);
    chart.update();
  }

  return (
    <Typography component="div">
      <Tooltip chart={chart} tooltip={tooltip} />
    </Typography>
  );
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
export { externalTooltipHandler, TooltipPortal };

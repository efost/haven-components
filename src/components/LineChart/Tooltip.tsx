import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { Chart, FontSpec, TooltipModel } from "chart.js";
import { toFont } from "chart.js/helpers";
import { useContext, useRef } from "react";

import { ActiveIndex } from ".";

export interface TooltipProps {
  children?: JSX.Element[];
  chart?: Chart | null;
  tooltip?: TooltipModel | null;
  style?: React.CSSProperties;
}

export const Tooltip: React.FC<TooltipProps> = ({ chart, tooltip }) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const { offsetLeft: positionX } = chart?.canvas as HTMLCanvasElement;
  const bodyFont = toFont(tooltip?.options.bodyFont as Partial<FontSpec>);
  const activeElements = chart?.getActiveElements();
  const activeIndex = useContext(ActiveIndex);
  return (
    <Box
      id="chartjs-tooltip-react"
      sx={{
        borderRadius: "3px",
        color: "white",
        pointerEvents: "none",
        position: "absolute",
        top: "0",
        transition: "all .5s cubic-bezier(0.230, 1.000, 0.320, 1.000)",
        height: "100%",
        left: `${
          activeElements && activeElements.length > 0
            ? activeElements[0].element.x + 10
            : tooltip
            ? positionX + tooltip.caretX + 10
            : 0
        }px`,
        fontFamily: bodyFont.family,
        fontSize: `${bodyFont.size}px` || "14px",
        lineHeight: `${bodyFont.lineHeight}px` || "120%",
        opacity: chart?.getActiveElements().length === 0 ? 0 : 1,
        padding: tooltip?.options.padding + "px ",
      }}
    >
      {chart &&
        tooltip?.body &&
        tooltip?.body.map((b: { lines: string[] }, idx) => {
          if (!chart.getActiveElements()[idx] && tooltip.opacity === 0) {
            return;
          }
          const bodyLines = b.lines;
          const xPosition = chart.getActiveElements()[0]
            ? chart.getActiveElements()[0].element.x
            : tooltip.caretX;

          return (
            <table
              key={`table-${idx}`}
              ref={tableRef}
              style={{
                backgroundColor: chart.getActiveElements()[idx].element.options.borderColor,
                borderRadius: "2px",
                marginBottom: "20px",
                padding: "0 2px",
                position: "absolute",
                top: tableRef.current
                  ? `${
                      chart.getActiveElements()[idx].element.tooltipPosition(true).y -
                      tableRef.current?.getBoundingClientRect().height / 2
                    }px`
                  : 0,
                left:
                  xPosition > chart.chartArea.left + chart.chartArea.width / 2 - 20
                    ? `${
                        tableRef.current?.getBoundingClientRect().width
                          ? -1 * tableRef.current?.getBoundingClientRect().width - 20
                          : -20
                      }px`
                    : "0",
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
                      // @ts-ignore For some reason, the correct type for these is not being inferred
                      const pointData = chart.data.datasets[idx].data.at(activeIndex)?.value;
                      const prevPointData = chart.data.datasets[idx].data.at(
                        activeIndex - 1,
                        // @ts-ignore For some reason, the correct type for these is not being inferred
                      )?.value;
                      let arrow = <></>;
                      let pointValue = 0;
                      if (![pointData, prevPointData].includes(null)) {
                        pointValue = (pointData as number) || 0;
                        const prevPointValue = (prevPointData as number) || 0;
                        const valueDiff = pointValue - prevPointValue;
                        arrow =
                          activeIndex > -1 && valueDiff !== 0 ? (
                            <Arrow {...{ valueDiff }} />
                          ) : (
                            <></>
                          );
                      }
                      return (
                        <>
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                          }).format(pointValue)}{" "}
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
  if (chart && tooltip) {
    return <>{externalTooltipHandler({ chart, tooltip })}</>;
  } else {
    return <></>;
  }
};

const externalTooltipHandler = ({
  chart,
  tooltip,
}: {
  chart: Chart;
  tooltip: TooltipModel<"line">;
}) => {
  const activeElements = chart.getActiveElements();
  if (activeElements.length === 0 && chart.data.datasets[0] && chart.data.datasets[1]) {
    chart.setActiveElements([
      {
        datasetIndex: 0,
        index: Math.max(
          chart.data.datasets[0].data.length - 1,
          chart.data.datasets[1].data.length - 1,
        ),
      },
      {
        datasetIndex: 1,
        index: Math.max(
          chart.data.datasets[0].data.length - 1,
          chart.data.datasets[1].data.length - 1,
        ),
      },
    ]);
    chart.update();
  }
  return (
    <Typography component="div">
      <Tooltip
        chart={chart}
        tooltip={tooltip}
        style={{
          // opacity: activeElements.length === 0 ? 0 : 1,
          left: `${
            (activeElements[0]
              ? activeElements[0].element.x
              : chart.getDatasetMeta(0).data[chart.data.datasets[0].data.length - 1].x) + 20
          }px`,
        }}
      />
    </Typography>
  );
};

export default Tooltip;
export { externalTooltipHandler, TooltipPortal };

/// <reference types="react" />
import { Chart, TooltipModel } from "chart.js";
export interface TooltipProps {
    children?: JSX.Element[];
    chart?: Chart | null;
    tooltip?: TooltipModel | null;
}
export declare const Tooltip: React.FC<TooltipProps>;
declare const TooltipPortal: ({ chart, tooltip }: {
    chart: Chart;
    tooltip: TooltipModel<"line">;
}) => JSX.Element;
declare const externalTooltipHandler: ({ chart, tooltip, activeIndex, }: {
    chart: Chart;
    tooltip: TooltipModel<"line">;
    activeIndex: number;
}) => JSX.Element;
export default Tooltip;
export { externalTooltipHandler, TooltipPortal };
//# sourceMappingURL=Tooltip.d.ts.map
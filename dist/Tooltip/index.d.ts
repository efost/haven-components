/// <reference types="react" />
import { Chart, TooltipModel } from "chart.js";
export interface TooltipProps {
    children?: React.ReactNode;
    chart?: Chart | null;
}
export declare const Tooltip: React.FC<TooltipProps>;
declare const TooltipPortal: ({ chart }: {
    chart: Chart | null;
}) => JSX.Element;
declare const externalTooltipHandler: (context: {
    chart: Chart;
    tooltip: TooltipModel<"line">;
}) => void;
export default Tooltip;
export { externalTooltipHandler, TooltipPortal };
//# sourceMappingURL=index.d.ts.map
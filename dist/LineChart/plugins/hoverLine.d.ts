import { ChartOptions, Color, Plugin } from "chart.js";
export interface ChartOptionsWithHoverLine extends ChartOptions<"line"> {
    mouseLine: {
        x?: number;
        color: Color;
    };
}
declare const hoverLine: Plugin<"line">;
export default hoverLine;
//# sourceMappingURL=hoverLine.d.ts.map
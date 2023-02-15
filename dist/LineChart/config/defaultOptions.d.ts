import { ChartOptions, Color } from "chart.js";
export interface ChartOptionsWithHoverLine extends ChartOptions<"line"> {
    mouseLine: {
        x?: number;
        color: Color;
    };
}
declare const chartOptions: ChartOptionsWithHoverLine;
export default chartOptions;
//# sourceMappingURL=defaultOptions.d.ts.map
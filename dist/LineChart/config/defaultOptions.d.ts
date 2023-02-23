import { ChartOptions, Color } from "chart.js";
export interface ChartOptionsWithHoverLine extends ChartOptions<"line"> {
    mouseLine: {
        x?: number;
        color: Color;
    };
}
declare const defaultColors: {
    point: {
        backgroundColor: string;
        hoverBackgroundColors: string[];
        hoverBorderColors: string[];
        borderColors: string[];
    };
    line: {
        backgroundColors: string[];
        borderColors: string[];
    };
};
declare const chartOptions: ChartOptionsWithHoverLine;
export default chartOptions;
export { defaultColors };
//# sourceMappingURL=defaultOptions.d.ts.map
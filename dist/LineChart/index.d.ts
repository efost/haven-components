/// <reference types="react" />
import { ChartData, ChartOptions } from "chart.js";
export interface ChartTheme {
    font?: string;
    fontSize?: number;
    colors: {
        point?: string;
        line?: string;
        fill?: string;
    }[];
}
export interface LineChartProps {
    data: ChartData<"line">;
    options?: ChartOptions;
    chartTheme?: ChartTheme;
}
export declare const LineChart: ({ data, options, chartTheme }: LineChartProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map
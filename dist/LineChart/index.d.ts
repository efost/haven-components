import { ThemeOptions } from "@mui/material/styles";
import { ChartData, ChartOptions } from "chart.js";
import React from "react";
export interface ChartTheme extends ThemeOptions {
    chart?: {
        font?: string;
        fontSize?: number;
        colors?: {
            pointBackgroundColor?: string;
            pointBorderColor?: string;
            pointHoverBackgroundColor?: string;
            pointHoverBorderColor?: string;
            lineBackgroundColor?: string;
            lineBorderColor?: string;
            fill?: string;
        }[];
    };
}
export interface LineChartProps {
    data: ChartData<"line", {
        label: string;
        value: number;
        updated: string;
    }[]>;
    options?: ChartOptions;
    theme?: ChartTheme;
    hideLegend?: boolean;
}
export declare const ActiveIndex: React.Context<number>;
export declare const LineChart: {
    ({ data, options, theme, hideLegend }: LineChartProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=index.d.ts.map
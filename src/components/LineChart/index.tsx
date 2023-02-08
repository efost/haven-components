import Box from "@mui/material/Box/Box";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  defaults,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { useRef, useState } from "react";
import { Line } from "react-chartjs-2";

import defaultOptions from "./config/defaultOptions";
import hoverLine from "./plugins/hoverLine";
import keyboardNav from "./plugins/keyboardNav";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin,
);

// [
//   {
//     elements: {
//       point: {
//         backgroundColor: 'rgb(0, 77, 73)',
//       },
//     },
//   },
//   {
//     elements: {
//       point: {
//         backgroundColor: 'rgb(77, 76, 76)',
//       },
//     },
//   },
// ];

export const LineChart = ({ data, options, chartTheme }: LineChartProps) => {
  const chartRef = useRef<ChartJS>(null);

  defaults.font = {
    family: chartTheme?.font || "'Nunito Sans', sans-serif",
    size: 14,
  };

  const dataWithColors = {
    labels: data.labels,
    datasets: [
      ...data.datasets.map((set, i) => {
        return {
          backgroundColor:
            chartTheme?.colors[i].fill ||
            options?.elements?.line?.backgroundColor ||
            defaultOptions.elements?.line?.backgroundColor,
          borderColor:
            chartTheme?.colors[i].line ||
            options?.elements?.line?.borderColor ||
            defaultOptions.elements?.line?.borderColor,
          pointBackgroundColor:
            chartTheme?.colors[i].point ||
            options?.elements?.point?.backgroundColor ||
            defaultOptions.elements?.point?.backgroundColor,
          ...set,
        };
      }),
    ],
  };

  const optionOverrides: ChartOptions = {
    // elements: {
    //   ...defaultOptions.elements,
    //   ...options?.elements,
    //   line: {
    //     ...defaultOptions.elements?.line,
    //     ...options?.elements?.line,
    //     backgroundColor:
    //       chartTheme?.colors[0].fill ||
    //       options?.elements?.line?.backgroundColor ||
    //       defaultOptions.elements?.line?.backgroundColor,
    //     borderColor:
    //       chartTheme?.colors[0].line ||
    //       options?.elements?.line?.borderColor ||
    //       defaultOptions.elements?.line?.borderColor,
    //   },
    //   point: {
    //     backgroundColor:
    //       chartTheme?.colors[0].point ||
    //       options?.elements?.point?.backgroundColor ||
    //       defaultOptions.elements?.point?.backgroundColor,
    //   },
    // },
    plugins: {
      ...defaultOptions.plugins,
      ...options?.plugins,
      tooltip: {
        ...defaultOptions.plugins?.tooltip,
        ...options?.plugins?.tooltip,
        titleFont: {
          family: chartTheme?.font || "'Nunito Sans', sans-serif",
        },
        bodyFont: {
          family: chartTheme?.font || "'Nunito Sans', sans-serif",
        },
      },
      annotation: {
        annotations: [
          // ...data.datasets.map((set, i): AnnotationOptions => {
          //   const data = set.data;
          //   return {
          //     type: "label",
          //     xValue: 1.25 * (i + 1),
          //     yMax: 60000,
          //     yValue: Math.max(...(data as number[])) / 2,
          //     backgroundColor: "transparent",
          //     content: ["Estated.com", "home value"],
          //     font: {
          //       family: "'Nunito Sans', sans-serif",
          //       size: 14,
          //       style: "normal",
          //       weight: "400",
          //       lineHeight: "normal",
          //     },
          //   };
          // }),
        ],
      },
    },
  };

  const [chartOptions] = useState<ChartOptions>({
    ...defaultOptions,
    ...options,
    ...optionOverrides,
  });

  return (
    <>
      <Box className="text" style={{ width: "100%" }}>
        <Line
          data={{ ...dataWithColors }}
          options={chartOptions}
          plugins={[keyboardNav, hoverLine]}
          aria-label="foobar"
          ref={chartRef}
          tabIndex={1}
        />
      </Box>
      {/* {data.datasets.map((set, i) => (
        <table key={`dataset-${i}`}>
          <thead>
            <tr>
              {data.labels &&
                data.labels.map((label, i) => (
                  <td key={`label-${i}`} aria-label={label as string}>
                    {label as string}
                  </td>
                ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {set.data.map((datum, i) => (
                <td key={`datum-${i}`} aria-label={datum === 0 ? 'empty' : datum?.toString()}>
                  {datum === 0 ? 'empty' : datum?.toString()}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      ))} */}
    </>
  );
};

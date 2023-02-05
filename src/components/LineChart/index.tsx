import Box from "@mui/material/Box/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { useRef } from "react";
import { Line } from "react-chartjs-2";

import defaultOptions from "./config/defaultOptions";
import hoverLine from "./plugins/hoverLine";
import keyboardNav from "./plugins/keyboardNav";

export interface LineChartProps {
  data: ChartData<"line">;
  options?: ChartOptions;
  title?: string;
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

ChartJS.defaults.font = {
  family: "'Nunito Sans', sans-serif",
  size: 12,
};

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

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito Sans', sans-serif;",
  },
});

export const LineChart = ({ data, title }: LineChartProps) => {
  const chartRef = useRef<ChartJS>(null);

  console.log("fpo");

  // useEffect(() => {
  //   const chart = chartRef.current;
  //   chart?.canvas.focus();
  //   console.log('fpo', chart?.canvas);
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"
        rel="stylesheet"
      />
      <Box className="text" style={{ width: "100%" }}>
        {title && (
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
        )}
        <Line
          data={data}
          options={defaultOptions}
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
    </ThemeProvider>
  );
};

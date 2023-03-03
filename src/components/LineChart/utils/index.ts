import { Chart } from "chart.js";

export const getLongestDatasetLength = ({ chart }: { chart: Chart<"line"> | null }) => {
  if (!chart) {
    return 0;
  }
  let longestDataset = 0;
  chart.data.datasets.map(
    (set, i) => (longestDataset = set.data.length > longestDataset ? i : longestDataset),
  );
  return chart.data.datasets[longestDataset].data.length || 0;
};

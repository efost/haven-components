import { Chart } from "chart.js";

import { getLongestDatasetLength } from "../utils";

const showTooltipOnLoad = {
  id: "showTooltip",
  afterDatasetUpdate: (chart: Chart) => {
    if (!chart.tooltip?.getActiveElements().length) {
      chart.tooltip?.setActiveElements(
        [
          ...chart.data.datasets.map((_, idx) => {
            return {
              datasetIndex: idx,
              index: getLongestDatasetLength({ chart }) - 1,
            };
          }),
        ],
        { x: 0, y: 0 },
      );
      chart.update();
    }
  },
};

export default showTooltipOnLoad;

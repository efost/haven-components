import { Chart } from "chart.js";

const showTooltipOnLoad = {
  id: "showTooltip",
  afterDatasetUpdate: (chart: Chart) => {
    if (!chart.tooltip?.getActiveElements().length) {
      chart.tooltip?.setActiveElements(
        [
          {
            datasetIndex: 0,
            index: chart.data.datasets[0].data.length - 1,
          },
          {
            datasetIndex: 1,
            index: chart.data.datasets[1].data.length - 1,
          },
        ],
        {},
      );
      chart.update();
    }
  },
};

export default showTooltipOnLoad;

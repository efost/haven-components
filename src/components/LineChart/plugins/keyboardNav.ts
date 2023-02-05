import { ActiveElement, Chart, Plugin, Point } from "chart.js";
import { AnyObject } from "chart.js/dist/types/basic";

const currentActiveElement = function (elements: ActiveElement[]) {
  console.log("1");
  if (elements.length) {
    return elements[0].index;
  }
  return -1;
};
//
// set active element on chart
//
const setActiveElements = function (chart: Chart, index: number) {
  console.log("2");
  chart.setActiveElements([
    {
      datasetIndex: 0,
      index,
    },
  ]);
  chart.update();
};
//
// dispatch click event on chart
//
const dispatchClick = function (chart: Chart, point: Point) {
  console.log("3");
  const node = chart.canvas;
  const rect = node.getBoundingClientRect();
  const event = new MouseEvent("click", {
    clientX: rect.left + point.x,
    clientY: rect.top + point.y,
    cancelable: true,
    bubbles: true,
    //view: window
  });
  node.dispatchEvent(event);
};
//
// plugin to manage key up
//
const keyboardNav: Plugin<"line"> = {
  id: "keyboardNav",
  defaults: {
    events: ["keyup"],
  },
  beforeEvent(chart: Chart, args: AnyObject) {
    console.log("4");
    const event = args.event;
    const code = event.native.code;
    const activeElements = chart.getActiveElements();
    if (code === "ArrowRight") {
      const pos = currentActiveElement(activeElements) + 1;
      const index = pos === chart.data.datasets[0].data.length ? 0 : pos;
      setActiveElements(chart, index);
    } else if (code === "ArrowLeft") {
      const pos = currentActiveElement(activeElements) - 1;
      const index = pos < 0 ? chart.data.datasets[0].data.length - 1 : pos;
      setActiveElements(chart, index);
    } else if (code === "Enter" && activeElements.length) {
      const el = activeElements[0];
      const meta = chart.getDatasetMeta(el.datasetIndex);
      const data = meta.data[el.index];
      dispatchClick(chart, data);
    }
  },
};

export default keyboardNav;

import { Meta, StoryFn } from "@storybook/react";

import { LineChart } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: LineChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta<typeof LineChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof LineChart> = (args) => <LineChart {...args} />;

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  data: {
    labels,
    datasets: [
      {
        label: "Principal balance",
        data: [
          { label: "Jan", value: 140000, updated: "1/15/22" },
          { label: "Feb", value: 138000, updated: "2/15/22" },
          { label: "Mar", value: 135000, updated: "3/15/22" },
          { label: "Apr", value: 133000, updated: "4/15/22" },
          { label: "May", value: 132000, updated: "5/15/22" },
          { label: "Jun", value: 131000, updated: "6/15/22" },
          { label: "Jul", value: 130000, updated: "7/15/22" },
        ],
      },
      {
        label: "Est. home value",
        data: [
          { label: "Jan", value: 150000, updated: "1/15/22" },
          { label: "Feb", value: 152000, updated: "2/15/22" },
          { label: "Mar", value: 155000, updated: "3/15/22" },
          { label: "Apr", value: 157000, updated: "4/15/22" },
          { label: "May", value: 158000, updated: "5/15/22" },
          { label: "Jun", value: 159000, updated: "6/15/22" },
          { label: "Jul", value: 160000, updated: "7/15/22" },
        ],
      },
    ],
  },
};

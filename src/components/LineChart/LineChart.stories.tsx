import { ThemeProvider } from "@mui/material/styles";
import { Meta, StoryFn } from "@storybook/react";

import { LineChart } from ".";
import { defaultData, defaultTheme } from "./utils/testFixtures";

export default {
  component: LineChart,
} as Meta<typeof LineChart>;

const Template: StoryFn<typeof LineChart> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <LineChart {...args} />
  </ThemeProvider>
);

const MobileTemplate: StoryFn<typeof LineChart> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <div style={{ width: "380px" }}>
      <LineChart {...args} />
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});

export const Mobile = MobileTemplate.bind({});

const args = {
  data: defaultData,
};

Default.args = args;
Mobile.args = args;

import { ThemeProvider } from "@mui/material/styles";

import { LineChart } from "./index";
import { defaultData, defaultTheme } from "./utils/testFixtures";

describe("<LineChart />", () => {
  it("renders", () => {
    const data = defaultData;
    const theme = {
      ...defaultTheme,
    };

    cy.mount(
      <ThemeProvider theme={theme}>
        <LineChart data={data} />
      </ThemeProvider>,
    );
    cy.matchImageSnapshot("LineChart");
  });
});

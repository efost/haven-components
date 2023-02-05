import { faker } from "@faker-js/faker";

import { LineChart } from "./index";

describe("<LineChart />", () => {
  it("renders", () => {
    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const data = {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        },
        {
          label: "Dataset 2",
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        },
      ],
    };
    cy.mount(<LineChart title="Cypress Chart" data={data} />);
    cy.findByText("Cypress Chart").should("exist");
  });
});

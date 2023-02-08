import "./App.css";

import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { LineChart } from "src/components/LineChart";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Box sx={{ width: "380px", margin: "0 auto" }}>
        <LineChart data={data} />
      </Box>
    </div>
  );
}

export default App;

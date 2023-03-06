export const defaultTheme = {
  typography: {
    body1: {
      fontFamily: "'Nunito Sans', sans-serif",
    },
    h3: {
      fontFamily: "'Lora', serif",
      fontWeight: 600,
    },
  },
  chart: {
    // Sample theme colors
    colors: [
      {
        pointBackgroundColor: "#FF0000",
        pointBorderColor: "#00FF00",
        pointHoverBackgroundColor: "#FA0000",
        pointHoverBorderColor: "#00CC00",
        lineBorderColor: "#00FF00",
        lineBackgroundColor: "#0000FF",
      },
      {
        pointBackgroundColor: "purple",
        pointBorderColor: "pink",
        pointHoverBackgroundColor: "yellow",
        pointHoverBorderColor: "salmon",
        lineBorderColor: "orange",
        lineBackgroundColor: "yellow",
      },
    ],
  },
};

export const defaultData = {
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
};

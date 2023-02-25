import { ComponentProps } from "react";
import { Typography } from "../../components";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    family: {
      control: {
        type: "select",
        options: ["Roboto", "Baloo 2"],
      },
    },
    size: {
      control: {
        type: "select",
        options: [10, 12, 14, 16, 18, 20, 24, 32, 48],
      },
    },
    weight: {
      control: {
        type: "select",
        options: [400, 700, 800],
      },
    },
    height: {
      control: {
        type: "select",
        options: ["130%", "160%"],
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
  },
};

export const Default = (args: ComponentProps<typeof Typography>) => (
  <Typography {...args} />
);

Default.args = {
  children: "PD Coffee",
  family: "Baloo 2",
  size: 16,
  weight: 400,
  height: "130%",
  color: "#000",
};

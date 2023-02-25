import { ComponentProps } from "react";
import { Spinner } from "../../components";
import { defaultTheme } from "../../styles/themes";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: "range",
        min: 10,
        max: 100,
        step: 1,
      },
    },

    color: {
      control: {
        type: "color",
      },
    },
  },
};

export const Default = (args: ComponentProps<typeof Spinner>) => (
  <Spinner {...args} />
);

Default.args = {
  size: 40,
  color: defaultTheme.colors.purple.default,
};

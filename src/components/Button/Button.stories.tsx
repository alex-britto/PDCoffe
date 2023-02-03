import { ComponentProps } from "react";
import { Button } from ".";
import { defaultTheme } from "../../styles/themes";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    bgColor: {
      control: {
        type: "color",
      },
    },
    bgHoverColor: {
      control: {
        type: "color",
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    maxWidth: {
      control: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
    },
    css: {
      control: {
        type: "object",
      },
    },
  },
};

export const Default = (args: ComponentProps<typeof Button>) => (
  <Button {...args} />
);

Default.args = {
  bgColor: defaultTheme.colors.yellow.default,
  bgHoverColor: defaultTheme.colors.yellow.dark,
  color: defaultTheme.colors.white,
  label: "Confirmar",
  width: "100%",
  maxWidth: "400px",
  onClick: () => console.log("Button clicked"),
};

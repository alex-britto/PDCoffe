import "../src/styles/global.css";
import { styledComponentsTheme } from "../src/styles/themes/styledComponentsTheme";
import WithThemeProvider from "storybook-addon-styled-components-themes/preview";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  styledComponentsThemes: {
    themes: [styledComponentsTheme],
  },
};

export const decorators = [WithThemeProvider];

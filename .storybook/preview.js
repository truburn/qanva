import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";
import { ThemeProvider } from "react-jss";
import { theme, GlobalStyles } from "utils/theme";

export const decorators = [
  withTests({ results }),
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

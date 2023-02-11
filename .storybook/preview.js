import { withTests } from "@storybook/addon-jest";
import { withRouter } from "storybook-addon-react-router-v6";
import { ThemeProvider } from "react-jss";
import results from "../.jest-test-results.json";
import { theme, GlobalStyles } from "utils/theme";

export const decorators = [
  withRouter,
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

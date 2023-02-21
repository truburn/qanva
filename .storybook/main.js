const path = require("path");
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-coverage",
    "@storybook/addon-a11y",
    "@storybook/addon-jest",
    "storybook-addon-pseudo-states",
    "storybook-fixtures",
    "storybook-addon-react-router-v6",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "../src/components/"),
      library: path.resolve(__dirname, "../src/library/"),
      pages: path.resolve(__dirname, "../src/pages/"),
      utils: path.resolve(__dirname, "../src/utils/"),
    };
    return config;
  },
  docs: {
    autodocs: true,
    defaultName: "Overview",
  },
  staticDirs: ["../public"],
};

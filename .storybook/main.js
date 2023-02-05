const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
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
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
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
};

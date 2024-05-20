const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  typescript: { reactDocgen: "react-docgen", skipBabel: true, check: false },

  addons: [
    "@ljcl/storybook-addon-cssprops",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials"
  ],

  docs: { autodocs: "tag", defaultName: "readme" },

  framework: { name: "@storybook/html-webpack5", options: {} },

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
    });

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};

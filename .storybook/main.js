module.exports = {
  stories: [
    // "../customtypes/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../slices/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ].map((storyPath) => storyPath.replace(/\\/g, "/")),
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
};

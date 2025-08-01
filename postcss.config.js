module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};

module.exports = {
  plugins: ["./node_modules/prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: true,
  htmlWhitespaceSensitivity: "ignore",
  astroAllowShorthand: true,
}

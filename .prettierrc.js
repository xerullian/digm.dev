// @type {import("prettier").Config}

export default {
  bracketSpacing: true,
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
  overrides: [
    {
      files: ['.*', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
      rules: {
        astroSkipFrontmatter: true,
      }
    },
  ],
};

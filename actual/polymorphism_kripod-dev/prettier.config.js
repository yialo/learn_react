// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
export default {
  quoteProps: 'consistent',
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  plugins: [
    '@awmottaz/prettier-plugin-void-html',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '',
    '^(react$|react-dom/.*$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '^[./]',
    '',
    '.css$',
  ],
  importOrderTypeScriptVersion: '5.4.5',
};

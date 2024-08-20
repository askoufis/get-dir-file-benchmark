export const shortPath = "node_modules/my_package/dist/ButtonDir/Button.css.ts";

export const longPath =
  "node_modules/.pnpm/braid-design-system@32.23.0_@types+react@18.3.3_babel-plugin-macros@3.1.0_react-dom@18.3.1_re_ctndskkf4y74v2qksfjwfz6ezy/node_modules/braid-design-system/dist/lib/components/ButtonDir/Button.css.mjs";

export const emojiPath =
  "node_modules/my_package/dist/👨‍👩‍👦Test🎉Dir👨‍🚀/Test🎉File👨‍🚀.css.ts";

export const loneSurrogates =
  "node_modules/my_package/dist/Test\uD801Dir/Test\uDC01File.css.ts";

export const shortWorstCase = "b/aaaaaaaaaaaa.css.mjs";

export const longWorstCase =
  "b/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.css.mjs";

export const testCases = [
  {
    name: "shortPath",
    input: shortPath,
    expected: { dir: "ButtonDir", file: "Button" },
  },
  {
    name: "longPath",
    input: longPath,
    expected: { dir: "ButtonDir", file: "Button" },
  },
  {
    name: "emojiPath",
    input: emojiPath,
    expected: { dir: "👨‍👩‍👦Test🎉Dir👨‍🚀", file: "Test🎉File👨‍🚀" },
  },
  {
    name: "loneSurrogates",
    input: loneSurrogates,
    expected: { dir: "Test\uD801Dir", file: "Test\uDC01File" },
  },
  {
    name: "shortWorstCase",
    input: shortWorstCase,
    expected: {
      dir: "b",
      file: "aaaaaaaaaaaa",
    },
  },
  {
    name: "longWorstCase",
    input: longWorstCase,
    expected: {
      dir: "b",
      file: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  },
];

const forwardSlash = 47;
const backSlash = 92;

const getLastSlashBeforeIndex = (path, index) => {
  let i = index;

  while (i >= 0) {
    let codeUnit = path.charCodeAt(i);

    if (codeUnit === forwardSlash || codeUnit === backSlash) {
      return i;
    }

    // Check for surrogate pairs
    if (codeUnit >= 0xd800 && codeUnit <= 0xdbff) {
      // High surrogate
      if (i > 0) {
        let lowSurrogate = path.charCodeAt(i - 1);
        if (lowSurrogate >= 0xdc00 && lowSurrogate <= 0xdfff) {
          // It's a surrogate pair
          reversed = path.fromCharCode(lowSurrogate, codeUnit) + reversed;
          i -= 2; // Skip the low surrogate as well
          continue;
        }
      }
    }

    i--;
  }
};

export const customSplit3 = (path) => {
  let file = "";
  let dir = "";

  const lastIndexOfDotCss = path.lastIndexOf(".css");
  let i = lastIndexOfDotCss - 1;

  const lastSlashIndex = getLastSlashBeforeIndex(path, i);
  const secondLastSlashIndex = getLastSlashBeforeIndex(
    path,
    lastSlashIndex - 1,
  );

  dir = path.slice(secondLastSlashIndex + 1, lastSlashIndex);
  file = path.slice(lastSlashIndex + 1, lastIndexOfDotCss);

  return { dir, file };
};

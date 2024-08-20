const forwardSlash = "/".charCodeAt(0);

const getLastSlashBeforeIndex = (path, index) => {
  let i = index;

  while (i >= 0) {
    let codeUnit = path.charCodeAt(i);

    if (codeUnit === forwardSlash) {
      return i;
    }

    // Check if codeUnit is a low surrogate
    if (codeUnit >= 0xdc00 && codeUnit <= 0xdfff) {
      // Ensure there's a previous character
      if (i > 0) {
        let maybeHighSurrogate = path.charCodeAt(i - 1);
        // Check if the previous code unit is a high surrogate
        if (maybeHighSurrogate >= 0xd800 && maybeHighSurrogate <= 0xdbff) {
          // Move past the high surrogate and continue
          i -= 2;
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

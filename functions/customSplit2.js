const forwardSlash = 47;
const backSlash = 92;

export const customSplit2 = (path) => {
  let file = "";
  let dir = "";

  let i = path.lastIndexOf(".css") - 1;

  let firstSlashFound = false;

  while (i >= 0) {
    let codeUnit = path.charCodeAt(i);

    if (codeUnit === forwardSlash || codeUnit === backSlash) {
      if (firstSlashFound) {
        // We've found the second slash, so we have all the information we need
        break;
      }

      firstSlashFound = true;
      i--;
      continue;
    }

    let char = path.charAt(i);

    // Check if codeUnit is a low surrogate
    if (codeUnit >= 0xdc00 && codeUnit <= 0xdfff) {
      // Ensure there's a previous character
      if (i > 0) {
        let maybeHighSurrogate = path.charCodeAt(i - 1);
        // Check if the previous code unit is a high surrogate
        if (maybeHighSurrogate >= 0xd800 && maybeHighSurrogate <= 0xdbff) {
          // Move to the high surrogate
          char = String.fromCharCode(maybeHighSurrogate, codeUnit);
          i--;
        }
      }
    }

    if (firstSlashFound) {
      dir = char + dir;
    } else {
      file = char + file;
    }

    i--;
  }

  return { file, dir };
};

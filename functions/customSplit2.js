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

    if (firstSlashFound) {
      dir = path.charAt(i) + dir;
    } else {
      file = path.charAt(i) + file;
    }

    i--;
  }

  return { file, dir };
};

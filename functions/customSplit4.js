const forwardSlash = "/".charCodeAt(0);

const getLastSlashBeforeIndex = (path, startingIndex) => {
  let pathIndex = startingIndex;

  while (pathIndex >= 0) {
    let codeUnit = path.charCodeAt(pathIndex);

    if (codeUnit === forwardSlash) {
      return pathIndex;
    }

    // UTF-16 surrogate pair handling
    // Check if codeUnit is a low surrogate
    if (codeUnit >= 0xdc00 && codeUnit <= 0xdfff) {
      // Ensure there's a previous character
      if (pathIndex > 0) {
        let maybeHighSurrogate = path.charCodeAt(pathIndex - 1);

        // Check if the previous code unit is a high surrogate
        if (maybeHighSurrogate >= 0xd800 && maybeHighSurrogate <= 0xdbff) {
          // Move past the high surrogate and continue
          pathIndex -= 2;
          continue;
        }
      }
    }

    // At this point, we know we either have a regular character or a lone surrogate, which is
    // valid in windows file paths
    pathIndex--;
  }

  return -1;
};

/**
 * Assumptions:
 * - The path is always normalized to use posix file separators (see `addFileScope`)
 * - The path is always relative to the project root (see `addFileScope`)
 * - There's no need to validate the file extension as we know that we only run this function if the
 *   path was inside a VE file
 * */
export const customSplit4 = (path) => {
  let file;
  let dir;

  const lastIndexOfDotCss = path.lastIndexOf(".css");

  if (lastIndexOfDotCss === -1) {
    return;
  }

  let i = lastIndexOfDotCss - 1;

  const lastSlashIndex = getLastSlashBeforeIndex(path, i);
  if (lastSlashIndex === -1) {
    return { file: path.slice(0, lastIndexOfDotCss) };
  }

  let secondLastSlashIndex = getLastSlashBeforeIndex(path, lastSlashIndex - 1);
  // If secondLastSlashIndex is -1, it means that the path looks like `directory/file.css.ts`,
  // in which case dir will still be sliced starting at 0, which is what we want

  dir = path.slice(secondLastSlashIndex + 1, lastSlashIndex);
  file = path.slice(lastSlashIndex + 1, lastIndexOfDotCss);

  return { dir, file };
};

const forwardSlash = "/".charCodeAt(0);

const getLastSlashBeforeIndex = (path, index) => {
  let pathIndex = index - 1;

  while (pathIndex >= 0) {
    let codeUnit = path.charCodeAt(pathIndex);

    if (codeUnit === forwardSlash) {
      return pathIndex;
    }

    pathIndex--;
  }

  return -1;
};

/**
 * Assumptions:
 * - The path is always normalized to use posix file separators (see `addFileScope`)
 * - The path is always relative to the project root, i.e. there's no leading slash (see `addFileScope`)
 * - There's no need to validate the file extension as we know that we only run this function if the
 *   path is already a VE file
 * */
export const customSplit4 = (path) => {
  let file;
  let dir;

  const lastIndexOfDotCss = path.lastIndexOf(".css");

  if (lastIndexOfDotCss === -1) {
    return;
  }

  const lastSlashIndex = getLastSlashBeforeIndex(path, lastIndexOfDotCss);
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

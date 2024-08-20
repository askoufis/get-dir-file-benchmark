const getLastSlashBeforeIndex = (path, index) => {
  let pathIndex = index - 1;

  while (pathIndex >= 0) {
    if (path[pathIndex] === "/") {
      return pathIndex;
    }

    pathIndex--;
  }

  return -1;
};

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

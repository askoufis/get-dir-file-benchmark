export const customSplit1 = (path) => {
  const s = path.split("/");
  let dir = "";

  if (s.length > 1) {
    dir = s[s.length - 2];
  }

  const fileName = s[s.length - 1];
  const lastIndexOfDotCss = fileName.lastIndexOf(".css");

  const file = fileName.slice(0, lastIndexOfDotCss);
  return { dir, file };
};

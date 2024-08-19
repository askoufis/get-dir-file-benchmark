const regex =
  /(?<dir>[^\/\\]*)?[\/\\]?(?<file>[^\/\\]*)\.css\.(ts|js|tsx|jsx|cjs|mjs)$/;

export const originalRegex = (path) => {
  return path.match(regex).groups;
};

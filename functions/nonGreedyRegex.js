const nonGreedy =
  /(?<dir>[^\/\\]*?)?[\/\\]?(?<file>[^\/\\]*?)\.css\.(ts|js|tsx|jsx|cjs|mjs)$/;

export const nonGreedyRegex = (path) => {
  return path.match(nonGreedy).groups;
};

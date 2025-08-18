import LRUMap from "mnemonist/lru-map.js";
import { customSplit4 } from "./customSplit4.js";

const cache = new LRUMap(500);

export const withMnemonist = (path) => {
  const cacheValue = cache.get(path);
  if (cacheValue) {
    return cacheValue;
  }

  const result = customSplit4(path);

  cache.set(path, result);

  return result;
};

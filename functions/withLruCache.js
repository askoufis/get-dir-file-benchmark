import { LRUCache } from "lru-cache";
import { customSplit4 } from "./customSplit4.js";

const cache = new LRUCache({ max: 500 });

export const withLruCache = (path) => {
  const cacheValue = cache.get(path);
  if (cacheValue) {
    return cacheValue;
  }

  const result = customSplit4(path);

  cache.set(path, result);

  return result;
};

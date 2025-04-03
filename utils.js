import { createRequire } from "node:module";

export function readJSON(path) {
  const require = createRequire(import.meta.url);
  return require(path);
}

export function findIndexById({ id, arr }) {
  const movieIndex = arr.findIndex((m) => m.id === id);
  if (movieIndex === -1) return false;
  return movieIndex;
}

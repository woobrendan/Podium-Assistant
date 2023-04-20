import Fuse from "fuse.js";

const options = {
  keys: [
    "driver1.name",
    "driver2.name",
    "vehicle",
    "team",
    "driver1.rating",
    "driver1.nationality",
    "driver2.rating",
    "driver2.nationality",
    "series",
    "number",
    "classification",
  ],
};

export const searchEntries = (entries, searchVal) => {
  if (!searchVal.trim()) {
    return entries;
  }
  const fuse = new Fuse(entries, options);
  const results = fuse.search(searchVal);
  return results;
};

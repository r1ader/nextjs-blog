export function cloneDeep(origin) {
  if (typeof origin !== "object") return origin;
  const result = {};
  Object.keys(origin)
    .forEach(key => {
      result[key] = cloneDeep(origin[key]);
    });
  return result;
}

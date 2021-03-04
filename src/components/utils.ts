export const extractKeys = (
  obj: Record<string, any>,
  keys: string[]
): Record<string, any> => {
  const result: Record<string, any> = {};
  for (const key in obj) {
    if (!keys.includes(key)) result[key] = obj[key];
  }
  return result;
};

export function groupBy<T, K extends keyof T>(
  array: T[],
  key: K,
  modifier?: (value: T[K]) => string
): Record<string, T[]> {
  if (array === undefined || array.length === 0)
    return {} as Record<string, T[]>;

  return array.reduce((group, item) => {
    const rawKey = item[key];
    const groupKey = modifier ? modifier(rawKey) : String(rawKey);
    (group[groupKey] ||= []).push(item);
    return group;
  }, {} as Record<string, T[]>);
}

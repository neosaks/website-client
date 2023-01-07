export function isEmpty(object: Record<string, unknown>): boolean {
  return !Object.keys(object).length;
}

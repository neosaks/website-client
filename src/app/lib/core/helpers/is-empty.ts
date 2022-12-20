export function isEmpty(object: Record<string, any>): boolean {
  return !Object.keys(object).length;
}

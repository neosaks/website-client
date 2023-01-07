export function flatten<T>(array: T[][]): T[] {
  return Array.prototype.concat(...array);
}

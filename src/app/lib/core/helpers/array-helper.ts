export class ArrayHelper {
  /** Description */
  static flatten<T>(array: T[][]): T[] {
    return Array.prototype.concat(...array);
  }
}

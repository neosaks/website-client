export class TimeHelper {
  /** Description. */
  static unixtime(timestamp: number = Date.now()): number {
    return Math.round(timestamp / 1000);
  }
}

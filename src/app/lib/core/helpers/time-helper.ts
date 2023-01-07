export class TimeHelper {
  static unixtime(timestamp: number = Date.now()): number {
    return Math.trunc(timestamp / 1000);
  }
}

export class UrlHelper {
  /** Description */
  static encodeQueryParams(
    url: string,
    queryParams: { [key: string]: string }
  ): string {
    let queryString = '';

    Object.entries(queryParams).forEach(([key, value]) => {
      queryString += `${queryString ? '&' : ''}${key}=${encodeURIComponent(
        value
      )}`;
    });

    return queryString ? `${url}?${queryString}` : url;
  }

  /** Returns a value indicating whether a URL is relative. */
  static isRelative(url: string): boolean {
    return url.slice(0, 2) !== '//' && !url.includes('://');
  }
}

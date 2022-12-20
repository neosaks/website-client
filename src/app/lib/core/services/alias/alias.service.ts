import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AliasService {
  /** Description. */
  readonly aliasMap = new Map<string, string | Record<string, any>>();

  /** Description. */
  getAlias(alias: string, throwException?: true): string;

  getAlias(alias: string, throwException?: false): string | false;

  getAlias(alias: string, throwException: boolean = true): any {
    if (alias[0] !== '@') {
      // not an alias
      return alias;
    }
    const pos = alias.indexOf('/');
    const root = pos === -1 ? alias : alias.slice(0, pos);

    if (this.aliasMap.has(root)) {
      if (typeof this.aliasMap.get(root) === 'string') {
        return (pos === -1
          ? this.aliasMap.get(root)
          : (this.aliasMap.get(root) as string) + alias.slice(pos)) as string;
      }

      const rootAlias: any = this.aliasMap.get(root);
      // eslint-disable-next-line no-restricted-syntax
      for (const name in rootAlias) {
        if (`${alias}/`.indexOf(`${name}/`) === 0) {
          return (
            (this.aliasMap.get(root) as { [key: string]: string })[name] +
            alias.slice(name.length)
          );
        }
      }
    }

    if (throwException) {
      throw new Error(`Invalid path alias: ${alias}`);
    }

    return false;
  }

  /** Description. */
  setAlias(alias: string, path?: string): void {
    if (alias[0] !== '@') {
      // eslint-disable-next-line no-param-reassign
      alias = `@${alias}`;
    }
    const pos = alias.indexOf('/');
    const root = pos === -1 ? alias : alias.slice(0, pos);
    if (path !== undefined && path !== null) {
      // eslint-disable-next-line no-param-reassign
      path = path[0] !== '@' ? path.replace(/\/+$/, '') : this.getAlias(path);
      if (!this.aliasMap.has(root)) {
        if (pos === -1) {
          this.aliasMap.set(root, path);
        } else {
          this.aliasMap.set(root, { alias: path });
        }
      } else if (typeof this.aliasMap.get(root) === 'string') {
        if (pos === -1) {
          this.aliasMap.set(root, path);
        } else {
          this.aliasMap.set(root, {
            alias: path,
            root: this.aliasMap.get(root),
          });
        }
      } else {
        (this.aliasMap.get(root) as { [key: string]: string })[alias] = path;
        // sort
        const unsorted = this.aliasMap.get(root) as { [key: string]: string };
        const sorted = {} as { [key: string]: string };
        Object.keys(unsorted)
          .sort()
          .reverse()
          // eslint-disable-next-line no-return-assign
          .forEach((key) => (sorted[key] = unsorted[key]));

        this.aliasMap.set(root, sorted);
      }
    } else if (typeof this.aliasMap.get(root) === 'object') {
      delete (this.aliasMap.get(root) as { [key: string]: string })[alias];
    } else {
      this.aliasMap.delete(root);
    }
  }
}

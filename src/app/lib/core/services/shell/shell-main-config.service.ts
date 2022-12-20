import { Injectable } from '@angular/core';

function fetch<S extends Record<string, any>>(
  source: S,
  needleProps: Partial<S>
): Partial<S> {
  const result: Partial<S> = {};

  Object.keys(source).forEach((property: keyof S) => {
    if (property in needleProps) {
      result[property] = source[property];
    }
  });

  return result;
}

/**
 * @todo
 */
@Injectable({
  providedIn: 'root',
})
export class ShellMainConfig {
  /**
   * The name of the application is displayed on the toolbar.
   * The space character is the default value. This is necessary for
   * the state mechanism to work properly using the state property.
   */
  appName = ' ';

  /**
   * @todo
   */
  changeState(
    newState: Partial<this> = {},
    returnOnlyChangedValues = true
  ): Partial<this> {
    return returnOnlyChangedValues
      ? fetch({ ...this }, Object.assign(this, newState))
      : { ...this };
  }
}

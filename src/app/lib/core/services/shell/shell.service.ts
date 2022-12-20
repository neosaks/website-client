import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ShellMainConfig } from './shell-main-config.service';
import { IShellConfig } from './shell-config.interface';

/** Description */
@Injectable({
  providedIn: 'root',
})
export class ShellService {
  /** Emitted when service status changes. */
  readonly stateChanged$ = new Subject<void>();

  /** Service constructor. */
  constructor(readonly main: ShellMainConfig) {}

  /** Description */
  changeState(
    newState: IShellConfig,
    returnOnlyChangedValues?: true
  ): Partial<IShellConfig>;

  /** Description */
  changeState(
    newState: IShellConfig,
    returnOnlyChangedValues?: false
  ): IShellConfig;

  /** Description */
  changeState(
    newState: IShellConfig = {},
    returnOnlyChangedValues = true
  ): IShellConfig | Partial<IShellConfig> {
    const oldState: IShellConfig = {
      main: this.main.changeState(newState.main || {}, returnOnlyChangedValues),
    };

    this.stateChanged$.next();

    return oldState;
  }
}

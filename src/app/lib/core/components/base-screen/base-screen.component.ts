import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IShellState } from '../../interfaces/shell-state/shell-state.interface';
import { ShellService } from '../../services/shell/shell.service';

/** Базовый класс компонента экрана */
@Component({
  template: '',
})
export abstract class BaseScreenComponent implements OnInit, OnDestroy {
  /** Заголовок экрана. Передается в сервис оболочки `ShellService`. */
  protected abstract title: string;

  /** `ShellService` экземпляр сервиса оболочки */
  protected readonly _shell = inject(ShellService);

  /** Событие возникает перед деструктуризацией компонента */
  protected readonly _ngUnsubscribe$ = new Subject<void>();

  /**
   * Предыдущее состояние оболочки. Используется для возвращения оболочки
   * в исходное состоянии перед деструктуризацией компонента экрана.
   */
  private _shellState?: IShellState | Partial<IShellState>;

  /** @inheritdoc */
  ngOnInit(): void {
    this._shellState = this._updateShell();
  }

  /** @inheritdoc */
  ngOnDestroy(): void {
    if (this._shellState) {
      this._shell.changeState(this._shellState);
    }

    this._ngUnsubscribe$.next();
    this._ngUnsubscribe$.complete();
  }

  /** Обновляет состояние оболочки */
  private _updateShell(): IShellState | Partial<IShellState> {
    return this._shell.changeState({ appName: this.title });
  }
}

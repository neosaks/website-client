import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ShellService, IShellState } from '../../services/shell';

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
  private _shellConfig?: IShellState | Partial<IShellState>;

  /** @inheritdoc */
  ngOnInit(): void {
    this._shellConfig = this._updateShell();
  }

  /** @inheritdoc */
  ngOnDestroy(): void {
    if (this._shellConfig) {
      this._shell.changeState(this._shellConfig);
    }

    this._ngUnsubscribe$.next();
    this._ngUnsubscribe$.complete();
  }

  /** Обновляет состояние оболочки */
  private _updateShell(): IShellState | Partial<IShellState> {
    return this._shell.changeState({ appName: this.title });
  }
}

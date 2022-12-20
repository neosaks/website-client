import { Component, Injector, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ShellService, IShellConfig } from '../../services/shell';

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
  private _shellConfig!: IShellConfig;

  /** @inheritdoc */
  ngOnInit(): void {
    this._shellConfig = this._updateShell();
  }

  /** @inheritdoc */
  ngOnDestroy(): void {
    this._shell.changeState(this._shellConfig);

    this._ngUnsubscribe$.next();
    this._ngUnsubscribe$.complete();
  }

  /** Обновляет состояние оболочки */
  private _updateShell(): IShellConfig {
    return this._shell.changeState({
      main: { appName: this.title },
    });
  }
}

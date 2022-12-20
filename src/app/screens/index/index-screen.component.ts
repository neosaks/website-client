import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseScreenComponent } from '@lib/core';

@Component({
  selector: 'app-index-screen',
  templateUrl: './index-screen.component.html',
  styleUrls: ['./index-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент домашней страницы */
export class IndexScreenComponent extends BaseScreenComponent implements AfterViewInit {
  /** Заголовок */
  readonly title = 'neosaks.com';

  constructor(private _router: Router) {
    super();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this._router.navigate(['/resume']), 8000);
  }
}

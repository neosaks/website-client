import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Карточка блока "О себе" */
export class AboutCardComponent {
  @Input()
  html?: string;
}

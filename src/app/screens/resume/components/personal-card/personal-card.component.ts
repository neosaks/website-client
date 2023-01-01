import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IResumeButton } from '@http/backend/resume/interfaces/resume-button.interface';

import * as moment from 'moment';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент карточки с персональными данными пользователя */
export class PersonalCardComponent {
  @Input()
  public name?: string;

  @Input()
  public profession?: string;

  @Input()
  public address?: string;

  @Input()
  public dob?: number;

  @Input()
  public phoneNumber?: string;

  @Input()
  public email?: string;

  @Input()
  public salary?: string;

  @Input()
  public buttons?: IResumeButton[];

  @Input()
  public imageUrl?: string;

  @Output()
  readonly toPDF = new EventEmitter<void>();

  get age(): string | null {
    if (!this.dob) {
      return null;
    }

    const diff = moment()
      .diff(this.dob * 1000, 'years');

    return moment
      .duration({ years: diff })
      .locale('ru')
      .humanize();
  }

  protected _toPDF(): void {
    this.toPDF.emit();
  }
}

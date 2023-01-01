import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IResumeExperience } from '@http/backend/resume/interfaces/resume-experience.interface';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент карточки с описанием предыдущего опыта работы */
export class ExperienceScreenComponent {
  @Input()
  experience?: IResumeExperience[];
}

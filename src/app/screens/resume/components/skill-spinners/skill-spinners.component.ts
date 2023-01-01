import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IResumeSkill } from '@http/backend/resume/interfaces/resume-skill.interface';

@Component({
  selector: 'app-skill-spinners',
  templateUrl: './skill-spinners.component.html',
  styleUrls: ['./skill-spinners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент карточки с навыками пользователя */
export class SkillSpinnersComponent {
  @Input()
  skills?: IResumeSkill[];
}

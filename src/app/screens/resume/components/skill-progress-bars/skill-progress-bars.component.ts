import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ResumeSkill } from '@http/backend/resume/interfaces/resume-skill.interface';

@Component({
  selector: 'app-skill-progress-bars',
  templateUrl: './skill-progress-bars.component.html',
  styleUrls: ['./skill-progress-bars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент карточки с навыками пользователя */
export class SkillProgressBarsComponent {
  @Input()
  skills?: ResumeSkill[];
}

import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ResumeTool } from '@http/backend/resume/interfaces/resume-tool.interface';

@Component({
  selector: 'app-tool-progress-bars',
  templateUrl: './tool-progress-bars.component.html',
  styleUrls: ['./tool-progress-bars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент карточки со списком инструментов пользователя */
export class ToolProgressBarsComponent {
  @Input()
  tools?: ResumeTool[];
}

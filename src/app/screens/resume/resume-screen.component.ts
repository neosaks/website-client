import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BaseScreenComponent } from '@lib/core';
import { ResumeService } from '@http/backend/resume/services/resume.service';
import { IResume } from '@http/backend/resume/interfaces/resume.interface';

@Component({
  selector: 'app-resume-screen',
  templateUrl: './resume-screen.component.html',
  styleUrls: ['./resume-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент экрана "Резюме" */
export class ResumeScreenComponent extends BaseScreenComponent {
  /** Заголовок */
  protected title = 'Резюме - Загрузка данных...';

  /** Резюме */
  protected resume?: IResume;

  constructor(private _cdr: ChangeDetectorRef, private _resumeService: ResumeService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this._resumeService
      .getMyResume()
      .subscribe((resume) => {
        const title = `Резюме - ${resume.personalData.name_ru}`;

        this.resume = resume;
        this.title = title;

        super.ngOnInit();

        this._cdr.detectChanges();
      });
  }

  toPDF(): void {
    window.open('/assets/maxim-chichkanov-resume.pdf');
  }
}

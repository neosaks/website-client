import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResumeDto } from '../interfaces/resume-dto.interface';
import { MAXIM_CHICHKANOV_RESUME } from '../mock/maxim-chichkanov-resume.const';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  /** Возвращает модель данных резюме Максима Чичканова (автора приложения) */
  getMyResume(): Observable<ResumeDto> {
    return of<ResumeDto>(MAXIM_CHICHKANOV_RESUME);
  }
}
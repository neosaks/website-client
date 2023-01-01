import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IResume } from '../interfaces/resume.interface';
import { MAXIM_CHICHKANOV_RESUME } from '../mock/maxim-chichkanov-resume.const';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  /** Возвращает модель данных резюме Максима Чичканова (автора приложения) */
  getMyResume(): Observable<IResume> {
    return of<IResume>(MAXIM_CHICHKANOV_RESUME);
  }
}
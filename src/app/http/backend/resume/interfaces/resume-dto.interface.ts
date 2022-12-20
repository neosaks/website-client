import { ResumePersonalData } from './resume-personal-data.interface';
import { ResumeSkill } from './resume-skill.interface';
import { ResumeButton } from './resume-button.interface';
import { ResumeBrand } from './resume-brand.interface';
import { ResumeExperience } from './resume-experience.interface';

export interface ResumeDto {
  /** Персональная информации о пользователе */
  personalData: ResumePersonalData;
  /** Массив основных ссылок-кнопок */
  buttons: ResumeButton[];
  /** Профессиональные навыки */
  skills: ResumeSkill[];
  /** Профессиональные инструменты */
  tools: ResumeSkill[];
  /** Информация о себе (пользователе) */
  about: string;
  /** Список брендов используемых технологий */
  brands: ResumeBrand[];
  /** Информация о опыте работы */
  experience: ResumeExperience[];
}
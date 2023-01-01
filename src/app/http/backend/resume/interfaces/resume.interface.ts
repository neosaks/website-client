import { IResumePersonalData } from './resume-personal-data.interface';
import { IResumeSkill } from './resume-skill.interface';
import { IResumeTool } from './resume-tool.interface';
import { IResumeButton } from './resume-button.interface';
import { IResumeBrand } from './resume-brand.interface';
import { IResumeExperience } from './resume-experience.interface';

export interface IResume {
  /** Персональная информации о пользователе */
  personalData: IResumePersonalData;
  /** Массив основных ссылок-кнопок */
  buttons: IResumeButton[];
  /** Профессиональные навыки */
  skills: IResumeSkill[];
  /** Профессиональные инструменты */
  tools: IResumeTool[];
  /** Информация о себе (пользователе) */
  about: string;
  /** Список брендов используемых технологий */
  brands: IResumeBrand[];
  /** Информация о опыте работы */
  experience: IResumeExperience[];
}
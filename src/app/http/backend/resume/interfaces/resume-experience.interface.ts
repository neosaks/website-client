export interface IResumeExperience {
  /** Ссылка на изображение ассоциированное с опытом */
  imageUrl: string;
  /** Место работы (город или адрес) */
  placeJob: string;
  /** Название компании */
  companyName: string;
  /** Дата начала работы */
  startDate: number;
  /** Дата окончания работы */
  endDate: number;
  /** Описание опыта работы */
  description: string;
}
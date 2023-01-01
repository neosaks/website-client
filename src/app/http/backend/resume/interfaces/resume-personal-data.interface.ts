export interface IResumePersonalData {
  /** Имя на русском языке */
  name_ru: string;
  /** Имя на английском языке */
  name_en: string;
  /** Профессия на русском языке */
  profession_ru: string;
  /** Профессия на английском языке */
  profession_en: string;
  /** Ссылка на фотографию пользователя */
  imageUrl: string;
  /** Адрес */
  address: string;
  /** Дата рождения */
  dob: number;
  /** Контактный номер телефона */
  phoneNumber: string;
  /** Контактный email адрес */
  email: string;
  /** Информация о зарплате */
  salary: string;
}
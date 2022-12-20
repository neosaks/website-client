import { ResumeDto } from '../interfaces/resume-dto.interface';

/**
 * ABOUT
 */

const ABOUT = `
<p>
  Свой первый опыт в <b>IT</b> я получил в <b>12 лет</b> будучи администратором в компьютерном клубе.
  Уже в <b>14 лет</b> стал работать как <b>фриланс</b> разработчик. Свой первый заказ получил в <b>2008 году</b>.
</p>

<p>
  В <b>2020 году</b> начал работу над стартапом в небольшой продуктовой команде.
  Тогда я был единственным разработчиком в компании, отвечающим за <b>frontend</b> всех веб-приложений компании.
  Благодаря сильной и опытной команде стартап быстро обрёл успех и стал популярным, а бренд узнаваемым.
</p>

<p>
  Я видел, как небольшой проект, где основной центр коммуникации — это <b>небольшой чат в телеграмме</b>,
  растёт и превращается в <b>высоконагруженный и востребованный</b> продукт. Появились новые разработчики,
  множество различных команд, <b>DevOps'ы</b>, <b>продуктовые менеджеры</b> и <b>дизайнеры</b>.
</p>

<p>
  <b>Видел как растёт и меняется компания</b>, подходы и решения, как меняется моя команда и я вместе с ней.
  Тогда у меня и появился совершенно новый взгляд на разработку — <b>"С точки зрения бизнеса"</b>.
</p>

<p>
  Этот взгляд открыл мне глаза на многие вещи, которые раньше оставались незамеченными или
  без должного внимания. В тоже время меня особо сильно стала волновать <b>архитектура</b> моих приложений,
  я хотел найти идеальный баланс между скоростью поставки кода и его потенциалу к <b>масштабируемости</b>.
</p>

<p>
  За время работы в команде мне довелось <b>поддерживать</b> и <b>улучшать</b> уже существующие проекты,
  с нуля разрабатывать новые, создавать аналоги <b>android</b> приложений для <b>веба</b>,
  писать консольные утилиты автоматизирующие рутинные задачи, строить бесшовный <b>CI/CD</b> и многое другое.
</p>
`;

/**************************************************
 * SHAREING_EXP_DESCRIPTION
 **************************************************/

const SHAREING_EXP_DESCRIPTION = `
<p>
  Разрабатывал <b>архитектуру</b> и базовые компоненты для клиентской части <b>CRM</b>
  нового поколения на базе <b>Android 12</b>.
  В этом проекте я успешно применил архитектурный подход <b>"микрофронтендов"</b> на основе
  <b>ModuleFederation</b>
</p>

<p>
  Новый подход позволил командам сконцентрироваться над своей, изолированной от других команд,
  частью кодовой базы.
</p>

<p>
  Одним из самых интересных проектов был <b>веб-аналог</b> андроид приложения для аренды велосипедов
  и самокатов.
</p>
`;

/**************************************************
 * URENT_EXP_DESCRIPTION
 **************************************************/

const URENT_EXP_DESCRIPTION = `
<p>
  В <b>2020 году</b> я присоединился к команде <b>urentbike</b>. Основная задача -
  <b>добавление нового</b> функционала в CRM и <b>рефакторинг</b> уже <b>существующего</b>.
</p>

<p>
  С ростом популярности сервиса <b>увеличивались требования</b> к
  производительности приложения.
</p>

<p>
  Вскоре на базе <b>Angular 11</b> я разработал быстрое приложение для операторов
  и сотрудников первой линии поддержки, что позволило <b>увеличить скорость</b>
  обработки обращений и <b>снизить расходы</b> на операционный блок.
</p>
`;

/**************************************************
 * FREELANCE_EXP_DESCRIPTION
 **************************************************/

const FREELANCE_EXP_DESCRIPTION = `
<p>
  Как фрилансер работал с самыми различными проектами и задачами,
  от лендингов до интернет магазинов, от копирайтера до маркетолога.
</p>
<p>
  Продолжительное время была направленность на применение IT технологий
  в сфере туризма.
</p>
`;

/**************************************************
 * MAXIM_CHICHKANOV_RESUME
 **************************************************/

export const MAXIM_CHICHKANOV_RESUME: ResumeDto = {
  personalData: {
    name_ru: 'Максим Чичканов',
    name_en: 'Maxim Chichkanov',
    profession_ru: 'Веб-разработчик',
    profession_en: 'Web Developer',
    address: 'Россия, Пятигорск',
    dob: 728600400, // 02.02.1993
    phoneNumber: '+79064704479',
    email: 'neosaks1@gmail.com',
    salary: 'от 150 000₽',
    imageUrl: '/assets/images/photo_0829.webp'
  },
  buttons: [
    {
      label: 'GitHub',
      link: 'https://github.com/neosaks',
      icon: 'fa-brands fa-github',
      hint: 'GitHub'
    },
    {
      label: 'Telegram',
      link: 'https://t.me/neosaks',
      icon: 'fa-brands fa-telegram',
      hint: 'Telegram'
    },
    {
      label: 'WhatsApp',
      link: 'https://wa.me/79064704479',
      icon: 'fa-brands fa-whatsapp',
      hint: 'WhatsApp'
    },
    {
      label: 'ВКонтакте',
      link: 'https://vk.com/neosaks',
      icon: 'fa-brands fa-vk',
      hint: 'ВКонтакте'
    },
    {
      label: 'Веб-сайт',
      link: '/',
      icon: 'fa-solid fa-globe',
      hint: 'Веб-сайт'
    }
  ],
  skills: [
    {
      title: 'TypeScript',
      progress: 95
    },
    {
      title: 'PHP',
      progress: 75
    },
    {
      title: 'HTML/CSS',
      progress: 85
    }
  ],
  tools: [
    {
      title: 'Angular 15',
      progress: 95
    },
    {
      title: 'Yii 2',
      progress: 98
    },
    {
      title: 'Bootstrap 5',
      progress: 90
    }
  ],
  about: ABOUT,
  brands: [
    {
      cssClass: 'fa-brands fa-html5'
    },
    {
      cssClass: 'fa-brands fa-css3'
    },
    {
      cssClass: 'fa-brands fa-sass'
    },
    {
      cssClass: 'fa-brands fa-bootstrap'
    },
    {
      cssClass: 'fa-brands fa-js'
    },
    {
      cssClass: 'fa-brands fa-npm'
    },
    {
      cssClass: 'fa-brands fa-node'
    },
    {
      cssClass: 'fa-brands fa-angular'
    },
    {
      cssClass: 'fa-brands fa-php'
    },
    {
      cssClass: 'fa-brands fa-docker'
    },
    {
      cssClass: 'fa-brands fa-slack'
    },
    {
      cssClass: 'fa-brands fa-linux'
    },
    {
      cssClass: 'fa-brands fa-windows'
    }
  ],
  experience: [
    {
      imageUrl: '/assets/images/shareconomy.webp',
      placeJob: 'Инновационный центр «Сколково»',
      companyName: 'Шеринговые технологии',
      startDate: 1609448400, // 2021
      endDate: 1640984400, // 2022
      description: SHAREING_EXP_DESCRIPTION
    },
    {
      imageUrl: '/assets/images/sharing.webp',
      placeJob: 'г. Москва',
      companyName: 'Юрентбайк.ру',
      startDate: 1577826000, // 2020
      endDate: 1609448400, // 2021
      description: URENT_EXP_DESCRIPTION
    },
    {
      imageUrl: '/assets/images/notebook.webp',
      placeJob: '∞',
      companyName: 'Фриланс',
      startDate: 1199134800, // 2008
      endDate: 1577826000, // 2020
      description: FREELANCE_EXP_DESCRIPTION
    }
  ]
};
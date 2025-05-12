import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Интерфейс для типа языка
export type LanguageType = 'en' | 'ru';

// Интерфейс для контекста языка
interface LanguageContextType {
  language: LanguageType;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isChangingLanguage: boolean;
}

// Словари для перевода
const translations: Record<LanguageType, Record<string, string>> = {
  en: {
    // Заголовки меню
    'menu.services': 'Services',
    'menu.how_it_works': 'How it Works',
    'menu.pricing': 'Pricing',
    'menu.testimonials': 'Testimonials',
    'menu.contact': 'Contact Us',
    'menu.language': 'RU',
    
    // Hero секция
    'hero.title': 'Professional care for your loved ones\' <gradient>final resting place</gradient>',
    'hero.description': 'We provide professional maintenance services for graves and create digital memorials when you can\'t be there in person.',
    'hero.button.explore': 'Explore Services',
    'hero.button.contact': 'Contact Us',
    
    // Problems секция
    'problems.title': 'Problems We Solve',
    'problems.description': 'Many people face challenges when it comes to maintaining the graves of their loved ones. We\'re here to help.',
    'problems.card1.title': 'Busy Modern Lifestyle',
    'problems.card1.text': 'Urban living, packed schedules, and lack of time make it difficult to regularly visit and maintain graves.',
    'problems.card2.title': 'Geographic Distance',
    'problems.card2.text': 'People living abroad or far from where their relatives are buried face distance challenges for grave visits.',
    'problems.card3.title': 'Physical Limitations',
    'problems.card3.text': 'Elderly people, those with disabilities, or health issues often cannot maintain graves themselves.',
    
    // Services секция
    'services.title': 'Our Services',
    'services.description': 'We provide comprehensive care for memorial sites and create digital memories to help you honor your loved ones.',
    'services.button': 'View Pricing Packages',
    
    // How it works секция
    'how.title': 'How It Works',
    'how.description': 'We\'ve made the process simple and transparent. Here\'s how we help you honor your loved ones.',
    'how.step1.title': 'Contact Us',
    'how.step1.description': 'Fill out our simple form with details about the location and the service you need. We\'ll get back to you within 24 hours.',
    'how.step2.title': 'Personalized Plan',
    'how.step2.description': 'We\'ll create a customized service plan based on your needs, preferences, and budget, with clear pricing.',
    'how.step3.title': 'Service & Documentation',
    'how.step3.description': 'We perform the agreed services and provide detailed photo reports so you can see the results remotely.',
    'how.cta.title': 'Ready to get started?',
    'how.cta.description': 'Contact us today for a free consultation and let us help you honor the memory of your loved ones with dignity and care.',
    'how.cta.button': 'Request a Service',
    
    // Pricing секция
    'pricing.title': 'Pricing Packages',
    'pricing.description': 'We offer flexible packages to accommodate different needs and budgets. Choose what works best for you.',
    'pricing.cta.title': 'Need a custom solution?',
    'pricing.cta.description': 'We understand that each situation is unique. Contact us for a personalized quote tailored to your specific needs.',
    'pricing.cta.button': 'Request Custom Quote',
    'pricing.button': 'Select Package',
    'pricing.popular': 'Most Popular',
    
    // Testimonials секция
    'testimonials.title': 'What Our Clients Say',
    'testimonials.description': 'Hear from families who have trusted us to care for their loved ones\' memorial sites.',
    'testimonials.items.0.text': 'Living abroad, I was worried about my grandmother\'s grave. MemoryCare has been a blessing. They send me regular updates with photos, and the grave has never looked better. Highly recommend their annual package.',
    'testimonials.items.0.name': 'Marina T.',
    'testimonials.items.0.position': 'Annual Care Client',
    'testimonials.items.0.initials': 'MT',
    'testimonials.items.1.text': 'As a busy professional, I simply don\'t have time to maintain my parents\' graves properly. MemoryCare has been exceptional—professional, respectful, and thorough. Their digital memorial option is a wonderful touch.',
    'testimonials.items.1.name': 'Alexander K.',
    'testimonials.items.1.position': 'Complete Care Client',
    'testimonials.items.1.initials': 'AK',
    'testimonials.items.2.text': 'At my age, it\'s difficult to visit my husband\'s grave as often as I\'d like. MemoryCare has been a godsend. Their seasonal services keep his grave beautiful all year round, and their staff is kind and compassionate.',
    'testimonials.items.2.name': 'Elena V.',
    'testimonials.items.2.position': 'Three-Year Plan Client',
    'testimonials.items.2.initials': 'EV',
    
    // Contact секция
    'contact.title': 'Contact Us',
    'contact.description': 'Reach out to discuss how we can help you maintain the memory of your loved ones.',
    'contact.info.title': 'Get in Touch',
    'contact.info.address.title': 'Address',
    'contact.info.address.content': 'Gospodarskaya St. 23, Grodno, Belarus',
    'contact.info.phone.title': 'Phone',
    'contact.info.phone.content': '+375 29 836 96 55',
    'contact.info.email.title': 'Email',
    'contact.info.email.content': 'info@svecha-care.by',
    'contact.info.hours.title': 'Business Hours',
    'contact.info.hours.weekdays': 'Mon-Fri: 9:00 AM - 7:00 PM',
    'contact.info.hours.weekend': 'Sat-Sun: By appointment only',
    'contact.info.social': 'Follow Us',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name.label': 'Your Name',
    'contact.form.name.placeholder': 'Enter your name',
    'contact.form.email.label': 'Email Address',
    'contact.form.email.placeholder': 'Enter your email',
    'contact.form.service.label': 'Service Interested In',
    'contact.form.service.placeholder': 'Select a service',
    'contact.form.service.options.basic': 'One-time grave cleaning',
    'contact.form.service.options.complete': 'Comprehensive grave care',
    'contact.form.service.options.annual': 'Annual care contract',
    'contact.form.service.options.three_year': 'Long-term contract (3 years)',
    'contact.form.service.options.custom': 'Custom service',
    'contact.form.message.label': 'Your Message',
    'contact.form.message.placeholder': 'Describe your needs or ask a question',
    'contact.form.sending': 'Sending...',
    'contact.form.submit': 'Send Message',
    'contact.toast.success.title': 'Message Sent',
    'contact.toast.error.title': 'Error Sending Message',
    'contact.toast.error.message': 'There was an error sending your message. Please try again.',
    
    // Footer
    'footer.description': 'Professional grave maintenance and digital memorial services for those who can\'t regularly visit their loved ones\' resting places.',
    'footer.services.title': 'Services',
    'footer.services.basic': 'One-time cleaning',
    'footer.services.complete': 'Comprehensive care',
    'footer.services.restoration': 'Monument restoration',
    'footer.services.digital': 'Digital memorial',
    'footer.services.annual': 'Annual contract',
    'footer.services.seasonal': 'Seasonal care',
    'footer.company.title': 'Company',
    'footer.company.about': 'About us',
    'footer.company.howItWorks': 'How it works',
    'footer.company.testimonials': 'Testimonials',
    'footer.company.careers': 'Careers',
    'footer.company.privacy': 'Privacy policy',
    'footer.company.terms': 'Terms of service',
    'footer.contact.title': 'Contact',
    'footer.contact.address': 'Gospodarskaya St. 23, Grodno, Belarus',
    'footer.contact.phone': '+375 29 836 96 55',
    'footer.contact.email': 'info@svecha-care.by',
    'footer.newsletter.title': 'Newsletter',
    'footer.newsletter.placeholder': 'Your email',
    'footer.rights': 'All rights reserved.',
  },
  ru: {
    // Заголовки меню
    'menu.services': 'Услуги',
    'menu.how_it_works': 'Как это работает',
    'menu.pricing': 'Цены',
    'menu.testimonials': 'Отзывы',
    'menu.contact': 'Связаться с нами',
    'menu.language': 'EN',
    
    // Hero секция
    'hero.title': 'Профессиональный уход за <gradient>местами упокоения</gradient> <gradient>ваших близких</gradient>',
    'hero.description': 'Мы предоставляем профессиональные услуги по уходу за могилами и создаем цифровые мемориалы, когда вы не можете быть там лично.',
    'hero.button.explore': 'Изучить услуги',
    'hero.button.contact': 'Связаться с нами',
    
    // Problems секция
    'problems.title': 'Проблемы, которые мы решаем',
    'problems.description': 'Многие люди сталкиваются с трудностями при уходе за могилами своих близких. Мы здесь, чтобы помочь.',
    'problems.card1.title': 'Занятый современный образ жизни',
    'problems.card1.text': 'Городская жизнь, плотное расписание и нехватка времени затрудняют регулярное посещение и уход за могилами.',
    'problems.card2.title': 'Географическая удаленность',
    'problems.card2.text': 'Люди, живущие за границей или вдали от мест захоронения родственников, сталкиваются с проблемами посещения.',
    'problems.card3.title': 'Физические ограничения',
    'problems.card3.text': 'Пожилые люди, лица с ограниченными возможностями или проблемами со здоровьем часто не могут сами ухаживать за могилами.',
    
    // Services секция
    'services.title': 'Наши услуги',
    'services.description': 'Мы обеспечиваем комплексный уход за мемориальными местами и создаем цифровые воспоминания, чтобы помочь вам почтить память ваших близких.',
    'services.button': 'Посмотреть пакеты услуг',
    
    // How it works секция
    'how.title': 'Как это работает',
    'how.description': 'Мы сделали процесс простым и прозрачным. Вот как мы помогаем вам почтить память ваших близких.',
    'how.step1.title': 'Свяжитесь с нами',
    'how.step1.description': 'Заполните нашу простую форму с деталями о местоположении и услуге, которая вам нужна. Мы свяжемся с вами в течение 24 часов.',
    'how.step2.title': 'Персональный план',
    'how.step2.description': 'Мы создадим индивидуальный план обслуживания, основанный на ваших потребностях, предпочтениях и бюджете, с четкими ценами.',
    'how.step3.title': 'Услуга и документация',
    'how.step3.description': 'Мы выполняем согласованные услуги и предоставляем подробные фотоотчеты, чтобы вы могли видеть результаты удаленно.',
    'how.cta.title': 'Готовы начать?',
    'how.cta.description': 'Свяжитесь с нами сегодня для бесплатной консультации, и мы поможем вам почтить память ваших близких с достоинством и заботой.',
    'how.cta.button': 'Запросить услугу',
    
    // Pricing секция
    'pricing.title': 'Пакеты услуг',
    'pricing.description': 'Мы предлагаем гибкие пакеты для удовлетворения различных потребностей и бюджетов. Выберите то, что вам подходит.',
    'pricing.cta.title': 'Нужно индивидуальное решение?',
    'pricing.cta.description': 'Мы понимаем, что каждая ситуация уникальна. Свяжитесь с нами для получения персонализированного предложения, адаптированного к вашим конкретным потребностям.',
    'pricing.cta.button': 'Запросить индивидуальное предложение',
    'pricing.button': 'Выбрать пакет',
    'pricing.popular': 'Самый популярный',
    
    // Testimonials секция
    'testimonials.title': 'Что говорят наши клиенты',
    'testimonials.description': 'Послушайте семьи, которые доверили нам заботу о мемориальных местах их близких.',
    'testimonials.items.0.text': 'Живя за границей, я беспокоилась о могиле моей бабушки. MemoryCare стал настоящим благословением. Они регулярно присылают мне обновления с фотографиями, и могила никогда не выглядела лучше. Очень рекомендую их годовой пакет.',
    'testimonials.items.0.name': 'Марина Т.',
    'testimonials.items.0.position': 'Клиент годового ухода',
    'testimonials.items.0.initials': 'МТ',
    'testimonials.items.1.text': 'Как занятый профессионал, у меня просто нет времени должным образом ухаживать за могилами родителей. MemoryCare оказался исключительным – профессиональным, уважительным и тщательным. Их опция цифрового мемориала – замечательное дополнение.',
    'testimonials.items.1.name': 'Александр К.',
    'testimonials.items.1.position': 'Клиент полного ухода',
    'testimonials.items.1.initials': 'АК',
    'testimonials.items.2.text': 'В моем возрасте трудно посещать могилу мужа так часто, как хотелось бы. MemoryCare стал настоящим спасением. Их сезонные услуги поддерживают красоту его могилы круглый год, а их персонал добрый и сострадательный.',
    'testimonials.items.2.name': 'Елена В.',
    'testimonials.items.2.position': 'Клиент трехлетнего плана',
    'testimonials.items.2.initials': 'ЕВ',
    
    // Contact секция
    'contact.title': 'Связаться с нами',
    'contact.description': 'Обратитесь к нам, чтобы обсудить, как мы можем помочь вам сохранить память о ваших близких.',
    'contact.info.title': 'Наши контакты',
    'contact.info.address.title': 'Адрес',
    'contact.info.address.content': 'ул. Господарчая 23, г. Гродно, Беларусь',
    'contact.info.phone.title': 'Телефон',
    'contact.info.phone.content': '+375 29 836 96 55',
    'contact.info.email.title': 'Электронная почта',
    'contact.info.email.content': 'info@svecha-care.by',
    'contact.info.hours.title': 'Часы работы',
    'contact.info.hours.weekdays': 'Пн-Пт: 9:00 - 19:00',
    'contact.info.hours.weekend': 'Сб-Вс: По предварительной записи',
    'contact.info.social': 'Наши социальные сети',
    'contact.form.title': 'Отправьте нам сообщение',
    'contact.form.name.label': 'Ваше имя',
    'contact.form.name.placeholder': 'Введите ваше имя',
    'contact.form.email.label': 'Электронная почта',
    'contact.form.email.placeholder': 'Введите ваш email',
    'contact.form.service.label': 'Интересующая услуга',
    'contact.form.service.placeholder': 'Выберите услугу',
    'contact.form.service.options.basic': 'Разовая уборка могилы',
    'contact.form.service.options.complete': 'Комплексный уход за могилой',
    'contact.form.service.options.annual': 'Годовой контракт по уходу',
    'contact.form.service.options.three_year': 'Долгосрочный контракт (3 года)',
    'contact.form.service.options.custom': 'Индивидуальный заказ',
    'contact.form.message.label': 'Ваше сообщение',
    'contact.form.message.placeholder': 'Опишите ваши пожелания или задайте вопрос',
    'contact.form.sending': 'Отправка...',
    'contact.form.submit': 'Отправить сообщение',
    'contact.toast.success.title': 'Сообщение отправлено',
    'contact.toast.error.title': 'Ошибка отправки',
    'contact.toast.error.message': 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
    
    // Footer
    'footer.description': 'Профессиональные услуги по уходу за могилами и цифровые мемориальные сервисы для тех, кто не может регулярно посещать места захоронения своих близких.',
    'footer.services.title': 'Услуги',
    'footer.services.basic': 'Разовая уборка',
    'footer.services.complete': 'Комплексный уход',
    'footer.services.restoration': 'Реставрация памятников',
    'footer.services.digital': 'Цифровой мемориал',
    'footer.services.annual': 'Годовой контракт',
    'footer.services.seasonal': 'Сезонный уход',
    'footer.company.title': 'Компания',
    'footer.company.about': 'О нас',
    'footer.company.howItWorks': 'Как это работает',
    'footer.company.testimonials': 'Отзывы клиентов',
    'footer.company.careers': 'Вакансии',
    'footer.company.privacy': 'Политика конфиденциальности',
    'footer.company.terms': 'Условия использования',
    'footer.contact.title': 'Контакты',
    'footer.contact.address': 'ул. Господарчая 23, г. Гродно, Беларусь',
    'footer.contact.phone': '+375 29 836 96 55',
    'footer.contact.email': 'info@svecha-care.by',
    'footer.newsletter.title': 'Подписка на новости',
    'footer.newsletter.placeholder': 'Ваш email',
    'footer.rights': 'Все права защищены.',
  },
};

// Создание контекста с значением по умолчанию
const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  toggleLanguage: () => {},
  t: (key: string) => key,
  isChangingLanguage: false
});

// Хук для использования контекста языка
export const useLanguage = () => useContext(LanguageContext);

// Провайдер контекста языка
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('ru');
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  // Функция для переключения языка с анимацией
  const toggleLanguage = () => {
    setIsChangingLanguage(true);
    
    // Добавляем анимацию выхода
    document.body.classList.add('language-transition-out');
    
    // Задержка перед сменой языка, чтобы анимация выхода успела проиграться
    setTimeout(() => {
      setLanguage(prevLang => (prevLang === 'en' ? 'ru' : 'en'));
      
      // Убираем класс анимации выхода и добавляем анимацию входа
      document.body.classList.remove('language-transition-out');
      document.body.classList.add('language-transition-in');
      
      // Убираем класс анимации входа после её завершения
      setTimeout(() => {
        document.body.classList.remove('language-transition-in');
        setIsChangingLanguage(false);
      }, 800);
    }, 400);
  };

  // Функция для получения перевода по ключу
  const t = (key: string): string => {
    // Получаем перевод из словаря или используем ключ если перевод не найден
    const translation = translations[language][key] || key;
    
    // Заменяем тег <gradient> на span с классом gradient-text
    return translation.replace(/<gradient>(.*?)<\/gradient>/g, '<span class="gradient-text">$1</span>');
  };

  // Добавляем стили для анимации смены языка при инициализации
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .language-transition-out {
        animation: fadeOut 0.4s ease-out forwards;
      }
      
      .language-transition-in {
        animation: fadeIn 0.8s ease-in forwards;
      }
      
      /* Добавляем стили для русских шрифтов - корректировка кернинга */
      [lang='ru'] {
        font-family: 'Inter', Arial, sans-serif;
        letter-spacing: -0.02em;
      }
    `;
    document.head.appendChild(style);
    
    // Устанавливаем язык документа
    document.documentElement.setAttribute('lang', language);
    
    // Обновляем атрибут lang при изменении языка
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // Обновляем атрибут lang при изменении языка
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isChangingLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
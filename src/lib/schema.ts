import { CONTACTS } from './constants'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Vega Legal',
  url: 'https://vegalegal.kz',
  logo: 'https://vegalegal.kz/og-image.png',
  description:
    'Готовые юридические решения для малого и среднего бизнеса. Защита бренда, юридическая упаковка, коммерческие споры, юридический аутсорсинг.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'пр. Мангилик ел 55/7, блок 3.5',
    addressLocality: 'Астана',
    addressCountry: 'KZ',
  },
  telephone: CONTACTS.phone,
  email: CONTACTS.email,
  openingHours: 'Mo-Fr 09:00-16:00',
  areaServed: {
    '@type': 'Country',
    name: 'Kazakhstan',
  },
  priceRange: '$$',
  sameAs: [CONTACTS.whatsapp],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Юридические услуги',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Комплексная защита бренда',
          description:
            'Регистрация бренда, оформление прав на контент, NDA и договоры с подрядчиками.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Юридическая упаковка бизнеса',
          description:
            'Устав, договоры, политика и соглашения с учётом налогов, инвестиций и рисков.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Коммерческие споры',
          description:
            'Претензии, переговоры, защита в суде.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Регистрация в МФЦА (AIFC)',
          description:
            'Регистрация компании в МФЦА за 5-10 рабочих дней. Налоговые льготы до 2066 года.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Регистрация в Astana Hub',
          description:
            'Регистрация в Astana Hub за 7-14 дней. Гранты до $300 000, 0% налоги на 3 года.',
        },
      },
    ],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'С какими стартапами вы работаете?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Мы сопровождаем технологические стартапы на любых стадиях — от идеи и pre-seed до масштабирования и выхода на рынок. Работаем с IT-компаниями, маркетплейсами, финтехами, EdTech, LegalTech и другими инновационными проектами.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько времени занимает регистрация в МФЦА или Astana Hub?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В среднем регистрация в МФЦА занимает от 5 до 10 рабочих дней, в Astana Hub — от 7 до 14 дней. Мы берём на себя всю коммуникацию и подготовку документов.',
      },
    },
    {
      '@type': 'Question',
      name: 'Вы работаете только в Казахстане?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Мы специализируемся на казахстанской юрисдикции и юрисдикции МФЦА, но помогаем с международной структурой, IP-защитой и подготовкой документов для иностранных инвесторов. У нас есть партнёры в ОАЭ, США, Катаре.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли перевести действующее ТОО в МФЦА?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, через структурирование холдинга. Мы помогаем создать оптимальную корпоративную структуру.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что входит в юридическую поддержку на аутсорсе?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Проверка договоров, консультации, подготовка шаблонов, сопровождение споров и юридическая аналитика. Минимальный срок — от 3 месяцев.',
      },
    },
    {
      '@type': 'Question',
      name: 'Есть ли гарантия?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Если отказ по нашей вине — возвращаем оплату полностью. За более чем 200 кейсов такого не случалось.',
      },
    },
  ],
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
})

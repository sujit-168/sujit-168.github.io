const site = 'https://blog.sujie-168.top';

export const metaData = {
  lang: 'zh-CN',
  locale: 'zh_CN',
  title: 'sujie-168',
  description: '我的个人技术博客',
  site,
  image: `${site}/logo.jpg`,
  base: 'docs/',
  // 多语言
  locales: {
    root: {
        label: '简体中文',
        lang: 'Zh_CN',
    },
    en: {
        label: 'English',
        lang: 'en',
        link: '/en/',
    },
  },
};
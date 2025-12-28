import type { DefaultTheme } from 'vitepress';
import { nav } from './nav';
import { sidebar } from './sidebar';
import { algoliaSearchOptions } from './search/algolia-search';
import { localSearchOptions } from './search/local-search';

export const themeConfig: DefaultTheme.Config = {
  nav, // 导航栏配置
  sidebar, // 侧边栏配置

  logo: '/logo.jpg',
  outline: {
    level: 'deep', // 右侧大纲标题层级
    label: '目录', // 右侧大纲标题文本配置
  },
  darkModeSwitchLabel: '切换日光/暗黑模式',
  sidebarMenuLabel: '文章',
  returnToTopLabel: '返回顶部',
  lastUpdatedText: '最后更新', // 最后更新时间文本配置，需先配置 lastUpdated 为 true
  // 文档页脚文本配置
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
  // 编辑链接配置
  editLink: {
    pattern: 'https://github.com/sujit-168/sujit-168.github.io/edit/main/docs/:path',
    text: '不妥之处，敬请雅正'
  },
  // 搜索配置（二选一）
  search: {
    // provider: 'algolia',
    // options: algoliaSearchOptions,
    // 本地离线搜索
    provider: 'local',
    options: localSearchOptions
  },
  // 导航栏右侧社交链接配置
  socialLinks: [
    { icon: 'github', link: 'https://github.com/sujit-168/' },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"/></svg>'
      },
      link: '/feed.xml'
    },
    {
      icon: {
        svg: '<img src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63860225045ce50e33d20eb3_Logo.svg" height="24" width="24" title="我的 Bento"></img>'
      },
      link: 'https://bento.me/jitsu'
    }
  ],

  // 自定义扩展：文章元数据配置
  // @ts-ignore
  articleMetadataConfig: {
    author: '甦傑', // 文章全局默认作者名称
    authorLink: '/about/me', // 点击作者名时默认跳转的链接
    showViewCount: false, // 是否显示文章阅读数，需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
  },
  // 自定义扩展：文章版权配置
  copyrightConfig: {
    license: '署名 - 非商业性使用 - 相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)',
    licenseLink: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en'
  },
  // 自定义扩展：评论配置
  commentConfig: {
    type: 'gitalk',
    showComment: false // 是否显示评论
  },
  // 自定义扩展：页脚配置
  footerConfig: {
    showFooter: true, // 是否显示页脚
    // icpRecordCode: '', // ICP 备案号
    publicSecurityRecordCode: '', // 联网备案号
    copyright: `Copyright © 2019-${new Date().getFullYear()} sujit-168` // 版权信息
  }
}
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
  lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
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
    provider: 'algolia',
    options: algoliaSearchOptions,
    // 本地离线搜索
    // provider: 'local',
    // options: localSearchOptions
  },
  // 导航栏右侧社交链接配置
  socialLinks: [
    { icon: 'github', link: 'https://github.com/sujit-168/sujit-168.github.io' },
    {
      icon: {
        svg: `<svg width="33" height="33" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.8 204">
                <title>ContiNew Admin</title>
                <path fill="#307AF2" d="M86.7,0l88,51v.2l-16.3,9.4v-.2L86.7,18.9Zm71.8,143.5,16.3,9.4v.2L86.8,204h0l-16.3-9.4,16.3-9.4h0l71.7-41.5v-.2Z"/>
                <path fill="#12D2AC" d="M16.3,143.5v.2L58,167.8l-16.3,9.4L0,153.1v-.2Z"/>
                <path fill="#12D2AC" d="M104.1,93,15.9,143.8l-.2-.1V124.9l.2.1L87.7,83.6,104.1,93Z"/>
                <path fill="#0057FE" d="M88.1,0,.1,51v.2l16.3,9.4v-.2L88.1,18.9Z"/>
                <path fill="#307AF2" d="M.1,50.9.2,152.6l.2.1,16.3-9.4-.2-.1-.1-82.9L.1,50.9Z"/>
                <path fill="#0057FE" d="M174.7,50.9l-.1,101.7-.2.1-16.3-9.4.2-.1.1-82.9Z"/>
                <path fill="#12D2AC" d="M41.7,158.5l16.1,9.4,100.6-58.7V90.4Z"/>
              </svg>`
      },
      link: 'https://bento.me/jitsu'
    }
  ],

  // 自定义扩展: 文章元数据配置
  // @ts-ignore
  articleMetadataConfig: {
    author: '甦傑', // 文章全局默认作者名称
    authorLink: '/about/me', // 点击作者名时默认跳转的链接
    showViewCount: true, // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
  },
  // 自定义扩展: 文章版权配置
  copyrightConfig: {
    license: '署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)',
    licenseLink: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en'
  },
  // 自定义扩展: 评论配置
  commentConfig: {
    type: 'gitalk',
    showComment: false // 是否显示评论
  },
  // 自定义扩展: 页脚配置
  footerConfig: {
    showFooter: true, // 是否显示页脚
    // icpRecordCode: '', // ICP备案号
    publicSecurityRecordCode: '', // 联网备案号
    copyright: `Copyright © 2019-${new Date().getFullYear()} sujit-168` // 版权信息
  }
}
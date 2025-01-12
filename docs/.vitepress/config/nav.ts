import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '我的分类',
    items: [
      { text: '随笔', link: '/note/index', activeMatch: '/note/' },
      { text: 'cpp' , link: '/cpp/index', activeMatch: '/cpp/' },
      { text: 'ROS', link: '/ros/index', activeMatch: '/ros/' },
      { text: 'Blender', link: '/blender/index', activeMatch: '/blender/' }
    ],
    activeMatch: '/'
  },
  {
    text: '我的笔记',
    items: [
      { text: '跟着开源项目学 vslam', link: '/vslam/index', activeMatch: '/vslam/'},
      { text: '基于 ROS 学习机器人学', link: '/robot/index', activeMatch: '/robot/'},
    ],
    activeMatch: '/'
  },
  {
    text: '标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '归档',
    link: '/archives',
    activeMatch: '/archives'
  },
  {
    text: '关于',
    items: [
      { text: '关于人生', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/' 
  },
];
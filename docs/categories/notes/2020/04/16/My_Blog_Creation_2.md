---
title: 我的博客创建之路
date: 2020-04-16 13:22:24
categories: [hexo,yilia]
tags: [hexo,yilia]
copyright: true
---

# 教你免费搭建个人博客 (Hexo&Github)  2

上一期教程我们已经搭建好 Blog 的基础框架，准备工作应该进行得很顺利，在接下来的基础框架完善中，会分为两个部分：

<!-- more -->

## 创建本地仓库

首先，在你电脑空间多的地方创建一个存放博客程序，主题和文章的文件夹，可以起名为 Blog，

记住文件路径中最好不要有中文。

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/blog.jpg)

建好之后打开文件夹 Blog，鼠标右击，选择【Git Bash Here】进入 Git 命令行窗口。

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/Git命令.jpg)

## 安装 HEXO 脚手架
输入以下代码使用 npm 安装 Hexo 博客程序

```
npm install -g hexo-cli
```

如果出现报错

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/npm-install-error1.jpg)

使用下面这段代码安装淘宝源 npm

```
npm install -g hexo-cli --registry=https://registry.npm.taobao.org
```

安装完成

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/npm-install-success.jpg)

继续输入下面的代码安装淘宝源 cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/npm-install-cnpm.jpg)

```
hexo init
```

安装初始化组件

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-init.jpg)


```
hexo clean 
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-clean.jpg)

继续输入：

```
hexo g
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-g&&gulp.jpg)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-g&&gulp-else.jpg)

```
hexo s  # 在http://localhost:4000/进行本地预览
```

## 解决缺失组件

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-s.jpg)

如果执行 hexo d 命令出现下图错误是因为缺少 hexo-deployer-git 插件

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-d-error.jpg)

执行以下命令即可解决

```
npm uninstall hexo-deployer-git
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/error-saving.jpg)

继续执行

```
npm install -- save hexo-deployer-git
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/npm-reinstall.jpg)

问题解决

```
hexo g && gulp
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-g&&gulp.jpg)



![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-g&&gulp-else.jpg)

## 本地预览
```
hexo s
```

打开浏览器按照提示输入 `http://localhost:4000` 进行预览

预览完成后 按下 Ctrl + C 结束预览

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-s.jpg)

```
hexo d
```

## 部署到 Github

将写好的博客进行部署 Github 仓库

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/hexo-d-success.jpg)

打开   https://用户名.github.io    进行查看

最后列举一些博客常用命令

```
hexo new "博客标题"
hexo clean       清除静态缓存
hexo g           生成博客文章
hexo s           生成页面进行本地预览
hexo d           部署博客文章
hexo g && gulp   博客压缩以提高访问速率
```

## 致谢

OK！这一期期关于 Hexo 以及本地环境的配置就到此为止。接下来后续内容会分几期更新。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！(注明：本文中的方法在撰写过程中得益于对各位前辈大佬的经验进行借鉴和吸收)


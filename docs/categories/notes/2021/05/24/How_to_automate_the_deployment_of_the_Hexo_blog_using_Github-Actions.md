---
title: 如何使用 Github+Actions 实现 Hexo 博客自动化部署
date: 2021-05-24 20:27:32
categories: [note]
tags: [Actions,github,CI/CD]
---

# 如何使用 Github+Actions 为自己的个人博客实现 CI/CD 的自动化部署

之前为了更好的学习前端技术，也就在 Github 仓库上来建立了自己的个人博客。在使用了一段时间之后，我也发现了一种新的玩法，可以使用 Github 的 Actions 来对自己的博客站点内容进行持续集成和持续部署，也就是说，根据本篇的内容，你只需要 3 个 git 命令就能实现 Hexo 博客的部署，强烈建议小伙伴们积极动手试一试，在提升上线效率上极有帮助。

<!-- more -->

## 准备工作

#### 什么是 Devops 和 CI/CD

这里引用 B 站大佬 up 主[遇见狂神说](https://space.bilibili.com/95256449)的视频为大家解读，大家可以了解一下整个的应用流程。

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=285879510&bvid=BV1zf4y127vu&cid=200860220&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

#### 什么是 Github+Actions

大家可以查看这篇文章简单了解一下  [所有开源项目免费使用，GitHub 内置 CI/CD 终于来了！](https://www.infoq.cn/article/d0mtapbgpbhf3r-cuvf3)

这里附上 Github 官方的介绍文档  [GitHub Actions](https://docs.github.com/en/actions)

## 具体步骤

整体步骤分为两个部分

###  将博客部署到 Github page

#### 创建 Github page 仓库

首先你需要拥有一个存储渲染文件的博客 repository

将仓库名命名为 your_username.github.io，这个仓库用来存储 Hexo 渲染的 Html 文件

具体操作可以参考我之前的两篇文章

1.[我的博客创建之路 1](http://sujie-168.top/2020/04/11/我的博客创建之路1/)    

2.[我的博客创建之路 2](http://sujie-168.top/2020/04/16/我的博客创建之路2/)

也可以参考管家小 e 的[网站搭建](https://mp.weixin.qq.com/mp/homepage?__biz=MzU4NDcxNjQ2Ng==&hid=1&sn=debf3376e6c934da259097b1886297d7&scene=18#wechat_redirect)专栏的前三篇来解决

#### 博客目标效果

打开`http://localhost:4000`行预览，即可得到与下图相似的结果

![](https://d33wubrfki0l68.cloudfront.net/5997a40576f3beca7bbbd86fe79a795e9d520d8e/87f88/themes/screenshots/landscape.png)



### 配置博客文件存储仓库

#### 创建博客仓库

新建博客文章存储的 public 仓库 (公开)

可以将仓库名命名为 My_Blog，这个仓库将被用来存储你的所有博客文章

#### 创建 token


这一步可以完全根据 github 官方给出的[创建个人访问令牌](https://docs.github.com/cn/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)教程操作

#### 配置密钥 secret

将创建好的 Personal Access Token 添加到仓库的 Secrets 中，并设置名称，如下图：

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/7.jpg)

- 创建 workflow 脚本

在项目根目录下创建 `.github/workflows` 文件夹，并在文件夹下创建 YAML 文件用于编写任务执行脚本。

点击项目下的 Actions

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/8.jpg)

点击 Set up this workflow

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/9.jpg)

配置 main.yml 文件，设置工作流

```
name: Deploy My_Blog  #自动化的名称

on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push: # push的时候触发
    branches: [ main ]  # 哪些分支需要触发
  pull_request:  
    branches: [ dev ]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  Blog_CI-CD:
    runs-on: ubuntu-latest  # 服务器环境
    # Steps represent a sequence of tasks that will be executed as part of the job
    
    steps:
      # 检查代码
      - name: Checkout
        uses: actions/checkout@v2  #软件市场的名称
        with: # 参数
          submodules: true
          persist-credentials: false
          
      - name: Setup Node.js
       # 设置 node.js 环境
        uses: actions/setup-node@v1
        with:
          node-version: '12'
          
      - name: Cache node modules
      # 设置包缓存目录，避免每次下载
        uses: actions/cache@v1
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          
      # 配置Hexo环境 
      - name: Setup Hexo
        env:
          ACTION_DEPLOY_KEY: ${{ secrets.ACCESS_TOKEN }}
        run: |
          npm install hexo-cli -g
          npm install
           
      
      # 生成静态文件
      - name: Build
        run: |
          hexo clean 
          hexo g
        
      # 2、部署到 GitHub Pages
      - name: upload GitHub repository
        env: 
          # Github 仓库
          GITHUB_REPO: github.com/username/username.github.io
         # 将编译后的博客文件推送到指定仓库
        run: |
          cd ./public && git init && git add .
          git config user.name "username"       #username改为你github的用户名
          git config user.email "your_Email"     #username改为你github的注册邮箱
          git add .
          git commit -m "GitHub Actions Auto Builder at $(date +'%Y-%m-%d %H:%M:%S')"
          git push --force --quiet "https://${{ secrets.ACCESS_TOKEN }}@$GITHUB_REPO" master:master
```

然后点击 commit new file 即可。

最后，我们只需要将源码推送到指定分支，GitHub Actions 就会自动帮我们部署项目啦。

## 流程展示

```
# 在本地写好博客文章
git checkout -b dev   #切换到dev分支
git add .
git commit -m "add a new article"
git push origin dev
```

在本地推送完成后，即可在 My_Blog 的 Actions 页面查看到部署情况，然后打开自己博客站点域名 http://your_username.github.io 查看即可。

1.初始化云端 Ubuntu 服务器的部署环境

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/11.jpg)

2.将本次提交推送到 Github 远端仓库

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/12.jpg)

3.workflow 流程概览

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/13.jpg)

4.工作流 workflow 运行成功，本次部署成功

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/10.jpg)

## 参考

[1].知乎 star  [使用 GitHub Actions 自动部署 Hexo 博客到 GitHub Pages](https://zhuanlan.zhihu.com/p/161969042)

[2].知乎 Tommy  [GitHub Actions 来自动部署 Hexo](https://zhuanlan.zhihu.com/p/170563000)

[3].简书 VictorHong  [HUGO + Github + Github Action 持续集成部署个人博客](https://www.jianshu.com/p/2a5c77b4d683)

## 致谢

OK！本期关于如何使用 Github+Actions 为自己的个人博客实现 CI/CD 的自动化部署就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！


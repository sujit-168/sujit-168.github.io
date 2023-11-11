---
title: '如何解决来自 github 的警告:Dependabot alerts'
date: 2021-01-22 17:06:01
categories: [github]
tags: [github]
copyright: true
---

# 如何解决来自 github 的警告:Dependabot alerts

最近没有怎么注意我的博客，今天准备到 github 上学习，发现来自 github 的警告，作为一个稍微有点强迫症的人，这怎么受得了这些[Dependabot alerts](https://docs.github.com/en/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)警告

<!-- more-->

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E6%9D%A5%E8%87%AAgithub%E7%9A%84%E8%AD%A6%E5%91%8A-Dependabot-alerts/1.jpg)

发现诸如下图的多个官方警告

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E6%9D%A5%E8%87%AAgithub%E7%9A%84%E8%AD%A6%E5%91%8A-Dependabot-alerts/2.jpg)


## 更新依赖配置

打开 yarn.lock

将其中代码复制到新建的 yarn.txt 文件中，然后使用 yarn.txt 文件通过更改后缀名的方式，将项目的原 yarn.lock 文件替换。

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E6%9D%A5%E8%87%AAgithub%E7%9A%84%E8%AD%A6%E5%91%8A-Dependabot-alerts/3.jpg)

## 更新远端依赖

再将项目文件[使用 git 推送部署到 github](https://blog.csdn.net/Lucky_LXG/article/details/77849212)的远端服务器上

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E6%9D%A5%E8%87%AAgithub%E7%9A%84%E8%AD%A6%E5%91%8A-Dependabot-alerts/5.jpg)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E6%9D%A5%E8%87%AAgithub%E7%9A%84%E8%AD%A6%E5%91%8A-Dependabot-alerts/6.jpg)

好了，问题终于解决了

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E6%9D%A5%E8%87%AAgithub%E7%9A%84%E8%AD%A6%E5%91%8A-Dependabot-alerts/7.jpg)

## 致谢

OK！本期关于如何解决来自 github 的警告:Dependabot alerts 就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！


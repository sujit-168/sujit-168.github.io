---
title: 如何为自己的博客添加 Https
date: 2021-03-05 19:45
categories: [note]
tags: [https]
---

# 在本文中主要介绍我是如何为自己的个人博客添加 Https 协议通讯

之前为了更好的学习，也就在 Github 仓库上来建立了自己的个人博客。在使用了一段时间之后，我也发现了一个致命的缺陷，自己的网站使用 http 协议来进行通讯，安全性有待提升。所以今天花了一点时间将自己的博客成功的转换成支持 https 协议进行通讯，这样就比较 Nice 了。

<!-- more -->

##  准备工作

### 注册账号

注册一个[Github 账号](https://github.com/join?source=login)或[Google 账号](https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1&hl=zh-CN&flowName=GlifWebSignIn&flowEntry=SignUp)

这里附上一篇如何注册 Google 账号的[大佬文章](https://zhuanlan.zhihu.com/p/133530671)

### 建设博客

建立一个例如  XXX.github.io 这样的个人站点

关于如何建立自己的个人博客，这里我推荐微信公众号管家小 e 的[网站搭建系列文章](https://mp.weixin.qq.com/mp/homepage?__biz=MzU4NDcxNjQ2Ng==&hid=1&sn=debf3376e6c934da259097b1886297d7&scene=18#wechat_redirect)，个人觉得很方便，很细节。

当然也可看一下我的[博客文章](https://sujie-168.top/tags/hexo/)

### 购买域名

[购买阿里云的域名](https://wanwang.aliyun.com/?spm=5176.12901015.0.i12901015.24f1525cA4YEMD)无法单独 ICP 备案，也就是如果仅你买了阿里云的域名，而没有买服务器或者主机，那么域名没法单独 ICP 备案。

域名前缀可以是带自己名字的站点，后缀推荐购买.com 和.cn 类型。我购买了一个.top 类型的（主要是便宜），购买了三年不到一百元。

### 实名认证

购买后进行实名认证，否则无法使用域名。

## 具体操作

之前以为无法使用 https 解析，现在才发现是自己太菜了，不过好在这次一次就弄成功了。所以想将自己的经验分享给大家，希望能对大家有所帮助。

在阿里开发者社区中找到了一篇与自己博客部署情况基本一致的文章[GitHub/Gitee 静态页托管页部署 SSL 证书](https://developer.aliyun.com/article/715576)这里供大家作为参考

### 申请免费的 SSL 证书

在搜索框中搜索 CA 证书

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/5.jpg)

找到 DV 单域名证书，证书个数为 20，选点击购买

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/6.jpg)

### 域名 DNS 解析

首先打开终端 cmd 或者 git bash 或者 terminal 

执行如下代码

```
ping XXXX.github.io   # xxx为你在github的用户名，也是你的Github page 仓库名
```

红框位置处的数字就是你博客的 ip 地址

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/8.jpg)

在框内填入得到的 ip 地址即可

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/4.jpg)

此时的域名已经解析成功。

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/9.jpg)

### 在 Github 上配置 Https

此时开始配置，打开仓库，选择 settings，向下滑动鼠标，滑到下图位置。

下图说明此时的域名解析是有问题的，需要返回阿里域名控制台重新设置域名解析

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/1.jpg)

如下图显示，则证明已配置好域名解析

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/2.jpg)

勾选 Enforce HTTPS 选项即可

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/3.jpg)

此时再对你的站点进行访问发现已经支持 https 协议解析

这是之前的不安全页面，信息有被监听，被修改的风险

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/0.jpg)

这是现在的安全页面，信息不会被监听，被修改，通信过程全程加密

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/01.jpg)

这里附上[我的博客](https://sujie-168.top/)效果以供参考

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_add_HTTPS_to_your_blog/10.jpg)

## 致谢

OK！本期关于如何为自己的个人博客添加 Https 协议通讯就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！
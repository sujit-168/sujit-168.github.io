---
title: 如何解决 SSH 免密连接 Github 的连接超时问题
date: 2024-02-23 15:28:37
categories: [note]
tags: [Git]
copyright: true
---

# 如何解决 SSH 免密连接 Github 的连接超时问题

## 问题描述

事情是这样的，前些天的早上，我醒来想起还有一个昨天的 commit 还没有提交，准备使用 SSH 免密登录并 git push 到 Github 时，在终端中输入命令，然后等待....

就没有然后了，哦，连接超时了。

自从 Github 开始要求 https 需要通过 token 进行认证后，我便放弃了之前一直使用的 https 方式进行认证，没想到今天使用 SSH 结果连接超时了，但我又不想转回到 https 方式上。

😂所以事情开始变得有趣起来了。

## 问题分析

首先，我尝试了以下方法：

1. 检查了网络连接是否正常，包括 DNS 解析是否正常，ping 是否正常，发现 ping 正常返回数据包，说明网络连接是正常的。

难道是概率问题？，在终端中输入命令，然后等待....
```shell
ssh -T git@github.com
```
还是没有反应，还是先 `bing` 一下

2. 搜索了相关的问题，发现前人已经遇到过同样的问题，搓搓手开试。

- [connecting github.com timed out](https://stackoverflow.com/questions/73866112/connecting-github-com-timed-out)
- [Port 22 is blocked, how can I push to Git with SSH?](https://amesbury.it/git/github/2018/05/15/port22-blocked-github.html)

根据他们的经验，我先尝试了一下：

```shell
ssh -T -p 443 git@ssh.github.com
```
输出
```shell
Hi sujit-168! You've successfully authenticated, but GitHub does not provide shell access.
```
OK，看起来确实奏效了，`StackOverflow` **YYDS**

## 解决方法

首先
```shell
sudo vi .ssh/config
```
然后

```shell
在 config 文件中添加以下内容
Host github.com
    HostName ssh.github.com
    User git
    Port 443
```

然后 `ESC`，输入`:wq` 保存并退出。

## 验证

```shell
(.ros1) tianbot@ros2go:~$ ssh -T git@github.com
Hi sujit-168! You've successfully authenticated, but GitHub does not provide shell access.
```

再次运行 `git push` 即可成功。
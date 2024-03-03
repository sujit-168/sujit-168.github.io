---
title: 我的博客创建之路
date: 2020-04-11 13:14:58
categories: [note]
tags: [hexo,github]
copyright: true
---

# 教你免费搭建个人博客 (Hexo&Github)

在基本完成搭建自己博客的过程中，花费了一天时间看各种教程，试图并从中找出搭建博客的最优办法。在一天半的时间里，通过在与各种 ERROE 的角逐中不断取胜，共计花费 60 小时成功创建了自己的第一个博客。

<!-- more -->

## 准备工作（搭建 Blog 基础框架）：

Hexo 基于 Node.js，在搭建过程中还需要安装 npm 和 git，安装 Node.js 和 Git 构建本地环境。

### Node.js 安装

Node.js 官网：http://nodejs.org/zh-cn/

进入官网后下载 Windows（x64）长期支持版。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/node.js1.png)

安装位置最好选择默认，其他均选择默认，之后点击下一步。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/Node.js.png)

之后按照提示操作安即可，这里就不再赘述了。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/Node.js0.jpg)

如果在安装过程中出现 Warning 1909，无法创建快捷方式的问题，（如下图的问题）

请自行参考百度文库：《win7 安装程序警告 1909 无法创建快捷方式》

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/CSDN_1909.jpg)

https://wenku.baidu.com/view/4ad59110964bcf84b9d57ba5.html

### Git 安装

Git 下载官网：https://git-scm.com/downloads

选择适用自己的平台，由于我的电脑是 Windows10 系统，所以我选择 Windows，点击下载。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/git.png)

之后选择自己电脑对应的位数下载，我的是 X64 位电脑。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/git1.png)

安装位置选择默认，之后点击下一步 Next。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/git2.png)

安装很简单，不再赘述

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/git5.png)

### 验证 Node.js 和 Git 是否安装成功

win 建+R 打开运行。输入 cmd，进入命令提示符。

(在英文输入法下)     依次输入：

```
node -v

npm -v

git --version
```

如果出现下图，即表示本地环境搭建成功。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/win1.png)

### 打开 GitHub 官网

GitHub 官网：https://github.com/

点击 Sign Up 注册账户

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub1.jpg)

注册用户名，绑定邮箱

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub0.jpg)

选择免费的账户

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub13.jpg)

进入如下界面

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub14.jpeg)

点击 Skip this step 跳过，进入如下界面

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub20.jpeg)

进入邮箱验证

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub16.jpeg)

登录 GitHub 账户

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub11.jpeg)

进入邮箱查看验证码

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub17.jpeg)

输入验证码

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub18.jpeg)

登陆后

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub19.jpeg)

## 设置 SSH Keys

接下来在桌面或者在哪都行，右击鼠标，点击 Git Bash Here

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/Git_Bash.jpg)

依次输入

```
git config --global user.name "GitHub用户名"
git config --global user.email "GitHub邮箱"
```

再输入

```
ssh-keygen -t rsa -C "Github邮箱"
```

让后回首回车，创建 SSH 密钥

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/1586608444863.jpeg)

进入如下路径用记事本打开 id_rsa.pub 文件，复制文件内容。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/1586608450608.jpeg)

登录 GitHub，进入 setting

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/1586608439053.jpeg)

选择左边 SSH and GPG Keys 选项，添加密钥。点击 New SSH Key 添加

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/CSDN_1586607944334.jpg)

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/CSDN_1586607561800.jpg)

Title 可以随便起，把刚才复制的密钥粘贴到 Key 中，点击 Add SSH Key 添加完成

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/CSDN_1586607565940.jpg)

### ssh 权限验证

再次打开 Git Bash 并输入

```
ssh -T git@github.com
```

出现 Are you sure.......输入 yes 回车。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/CSDN_1586607577804.jpg)

最后显示 You 've successfully......表示连接成功。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/CSDN_1586607582440.jpg)

点击右上角加号，点击 New repository 新建 GitHub Pages 仓库，创建后默认启用 HTTPS。

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub5.jpg)

新建的仓库如下，是否让你眼前一亮

![](https://cn-sy1.rains3.com/dfdfgf/blog/My_Blog_Creation_1/GitHub19.jpeg)

如果操作中有问题请点开下面的链接根据教程安装

https://blog.csdn.net/weixin_43729943/article/details/103838650?utm_source=app

其中包括接下来的一些步骤，可以参考借鉴教程。

### 致谢

OK！本期关于 GitHub 的注册以及本地环境的搭建就到此为止。接下来后续系列会分几期更新。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！(注明：本文中的方法在撰写过程中得益于对各位前辈大佬的经验进行借鉴和吸收)

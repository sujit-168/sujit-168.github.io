---
title: Git 食用的一揽子方法
date: 2024-03-14 11:31
isTop: True
categories: [note]
tags: [Git]
copyright: true
---

# Git 食用的一揽子方法 <Badge text="持续更新" type="warning" />

## 什么是 Git

很多人都知道，Linus 在 1991 年创建了开源的 Linux，从此，Linux 系统不断发展，已经成为最大的服务器系统软件了。

Linus 虽然创建了 Linux，但 Linux 的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为 Linux 编写代码，那 Linux 的代码是如何管理的呢？

事实是，在 2002 年以前，世界各地的志愿者把源代码文件通过 diff 的方式发给 Linus，然后由 Linus 本人通过手工方式合并代码！

你也许会想，为什么 Linus 不把 Linux 代码放到版本控制系统里呢？不是有 CVS、SVN 这些免费的版本控制系统吗？因为 Linus 坚定地反对 CVS 和 SVN，这些集中式的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比 CVS、SVN 好用，但那是付费的，和 Linux 的开源精神不符。

不过，到了 2002 年，Linux 系统已经发展了十年了，代码库之大让 Linus 很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是 Linus 选择了一个商业的版本控制系统 BitKeeper，BitKeeper 的东家 BitMover 公司出于人道主义精神，授权 Linux 社区免费使用这个版本控制系统。

安定团结的大好局面在 2005 年就被打破了，原因是 Linux 社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发 Samba 的 Andrew 试图破解 BitKeeper 的协议（这么干的其实也不只他一个），被 BitMover 公司发现了（监控工作做得不错！），于是 BitMover 公司怒了，要收回 Linux 社区的免费使用权。

Linus 可以向 BitMover 公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：

Linus 花了两周时间自己用 C 写了一个分布式版本控制系统，这就是 Git！一个月之内，Linux 系统的源码已经由 Git 管理了！牛是怎么定义的呢？大家可以体会一下。

Git 迅速成为最流行的分布式版本控制系统，尤其是 2008 年，GitHub 网站上线了，它为开源项目免费提供 Git 存储，无数开源项目开始迁移至 GitHub，包括 jQuery，PHP，Ruby 等等。

历史就是这么偶然，如果不是当年 BitMover 公司威胁 Linux 社区，可能现在我们就没有免费而超级好用的 Git 了。

## 安装和配置 git

```shell
sudo apt-get install git
```

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

## 常用 git 命令

### git clone

如何 git clone 带有子模块的 Github 仓库？
```shell
git clone --recurse-submodules https://github.com/yourname/yourproject.git
```

如何 git clone 仓库的特定分支？
```shell
git clone -b master https://github.com/yourname/yourproject.git
```

### git remote

如何修改 remote 的地址？
```shell
git remote set-url origin git@github.com:yourname/yourproject.git
```

如何添加 remote 的地址？
```shell
git submodule add -b master https://github.com/othername/otherproject.git
```

### git branch

如何查看当前所处 git 分支？
```shell
git brnach -a
```

如何从当前所处 git 分支切换到新分支？
```shell
git checkout -b newbranch
```

```shell
git switch newbranch
```

## 常用 git 场景

### 场景一（本地与远程仓库关联）

假如你现在有一个本地项目，需要使用`git`进行版本管理，此时你想把项目上传到`github`，那么你就可以使用采用以下几步


#### 1. 在 GitHub 上创建一个新的仓库

-  打开 GitHub 的网站（https://github.com）并登录到您的帐户。

-  在页面右上角的下拉菜单中，选择“New repository”。

-  输入仓库的名称和描述，并选择其他选项，如公开/私有、README 文件等。

-  点击“Create repository”来创建新的仓库。

#### 2. 在本地设置 Git
-  打开终端或命令行界面。

-  进入您的项目文件夹，使用 cd 命令切换到项目目录。、

-  运行以下命令来初始化本地 Git 仓库 
```shell
git init
```

#### 3. 关联本地仓库与远程仓库
-  复制刚才在 GitHub 上创建的仓库的 URL。
-  运行以下命令来将本地仓库与远程仓库关联起来 
```shell
git remote add origin <仓库 URL>
```
例如   
```shell    
git remote add origin https://github.com/yourname/yourproject.git
```

#### 4. 添加文件到本地仓库
- 使用 git add 命令将要提交的文件添加到暂存区。例如，若要添加所有文件，可以运行
```shell
git add .                 # 不要漏了这个.
```

#### 5. 提交文件到本地仓库
运行以下命令将暂存区的文件提交到本地仓库 
```shell
git commit -m "提交信息"   # 提交信息可自定义
```

#### 6. 推送代码到远程仓库
运行以下命令将本地仓库的代码推送到 GitHub 远程仓库 
```shell
git push origin master
```

完成以上步骤后，您的本地项目就会被上传到 GitHub，并开始进行版本管理。您可以在 GitHub 仓库页面上看到您的上传的文件和提交历史。

::: tip 提示
如果您之前已经将文件添加到.gitignore 中排除版本控制，则需要先从.gitignore 中移除这些文件，才能将它们添加到本地仓库中。
:::

### 场景二（如何给开源项目修 bug）

当您发现一个开源项目的代码存在 bug 并且已经找到了解决方法，想要为该项目提交您修改过的代码，您可以按照以下步骤进行操作 

#### 1.克隆项目 
打开终端或命令行界面。
使用 git clone <项目 URL> 命令来克隆项目到本地。
```shell
git clone https://github.com/yourname/yourproject.git
```
这将在当前目录下创建一个与项目同名的文件夹，并将项目代码下载到该文件夹中。

#### 2.创建分支 
运行以下命令创建一个新的分支，以便您可以在该分支上进行修复 
```shell
git checkout -b bug-fix
```
将 bug-fix 替换为一个描述性的分支名称。

::: tip 小技巧
[大厂的 Git 代码管理规范是怎样的？](https://mp.weixin.qq.com/s/LWQolvFQQndBhFQ2lP2vhQ)
:::

#### 3.应用修复 
找到包含 bug 的代码文件，并进行相应的修改。使用您的解决方案来修复该问题。

#### 4.提交修改 
运行以下命令将修改后的文件添加到暂存区：git add <修改的文件>
替换 <修改的文件> 为您修复的实际文件名。如果有多个文件需要添加，可以重复运行该命令或使用通配符 * 来添加所有文件。

#### 5.提交说明 
运行以下命令来提交修改，并提供有意义的提交说明信息：
```shell
git commit -m "修复了一个 bug，原因是..."
```

#### 6.推送分支 
运行以下命令将您的修复分支推送到远程仓库：
```shell
git push origin bug-fix
```
替换 bug-fix 为您创建的实际分支名称。

#### 7.创建 Pull Request 
打开该项目的 GitHub 页面。
点击 "Compare & pull request" 按钮来开始创建一个 Pull Request。
确保 base 分支是正确的，选择您的修复分支作为 compare 分支。
提供一个有意义的标题和详细的描述，解释您的修复方案。

#### 8.等待审核并讨论 
项目维护者会收到您的 Pull Request，并对您的代码进行审核和讨论。
根据反馈，您可能需要进一步修改代码或回答问题。

::: warning Tips
提交代码是为开源社区做贡献的重要方式
:::

### 场景三（如何合并多个 commit 为一个 commit）

git squash 命令可以用来将多个连续的 commit 合并成一个 commit。

```shell   
git rebase -i HEAD~n
```

- [[Git] 两种方法合并多个 commit 为一个](https://blog.csdn.net/Spade_/article/details/108698036)
- [合并多个 commit](https://blog.csdn.net/ZYY_ONLY/article/details/127411741)

### 场景四（如何修改不合规的 commit 信息）

```shell
tianbot@ros2go:~/tianbot-doc/Tianbot-vitepress$ git log
commit b9ae8adbdacacedf5e3dd6bcf80080354df43a4a (HEAD)
Author: 甦傑 <62122305+sujit-168@users.noreply.github.com>
Date:   Thu Sep 21 09:43:31 2023 +0800

    feat: update deploy.yml and add grammar check command

commit 1d0412d1cabc804fef5876c372fa2001d9b6cbf0
Author: 甦傑 <62122305+sujit-168@users.noreply.github.com>
Date:   Wed Sep 20 17:38:31 2023 +0800

    Create deploy.yml
    
    create action workflow to deploy Tianbot-Doc

commit 7e482f0d272317332c6f29671d1aebbf1ab6bb59
Author: sujit-168 <su2054552689@gmail.com>
Date:   Wed Sep 20 17:08:53 2023 +0800

    feat: update Readme.md and Contribute.md

commit 2815452fbb4eb2a574bfde043e4a7ba3909f0986
Author: sujit-168 <su2054552689@gmail.com>
Date:   Wed Sep 20 16:33:03 2023 +0800

    feat: init Tianbot-Doc framework
tianbot@ros2go:~/tianbot-doc/Tianbot-vitepress$ git rebase -i HEAD~2
Successfully rebased and updated detached HEAD.
tianbot@ros2go:~/tianbot-doc/Tianbot-vitepress$ git rebase -i HEAD~2
停止在 1d0412d... Create deploy.yml
您现在可以修补这个提交，使用

  git commit --amend 

当您对变更感到满意，执行

  git rebase --continue
tianbot@ros2go:~/tianbot-doc/Tianbot-vitepress$ git commit --amend 
[分离头指针 5a4c414] feat: create action workflow (deploy.yml) to deploy Tianbot-Doc
 Author: 甦傑 <62122305+sujit-168@users.noreply.github.com>
 Date: Wed Sep 20 17:38:31 2023 +0800
 1 file changed, 48 insertions(+)
 create mode 100644 .github/workflows/deploy.yml
tianbot@ros2go:~/tianbot-doc/Tianbot-vitepress$ git rebase --continue
Successfully rebased and updated detached HEAD.
tianbot@ros2go:~/tianbot-doc/Tianbot-vitepress$ 
```

修改后

```shell
tianbot@ros2go:~/tianbot-doc/Tianbot-vitepress$ git log
commit babc8524629556acd66525b97e1ea74429a19da7 (HEAD)
Author: sujit-168 <su2054552689@gmail.com>
Date:   Thu Sep 21 10:32:48 2023 +0800

    bug: fixed .gitignore avoid to upload *.zip

commit a4b5d3220a29cfbba20e01783060c94f22523f89
Author: 甦傑 <62122305+sujit-168@users.noreply.github.com>
Date:   Thu Sep 21 09:43:31 2023 +0800

    feat: update deploy.yml and add grammar check command

commit 5a4c4143606ebf67cc579b89c5ceffdf0d9c8b0d
Author: 甦傑 <62122305+sujit-168@users.noreply.github.com>
Date:   Wed Sep 20 17:38:31 2023 +0800

    feat: create action workflow (deploy.yml) to deploy Tianbot-Doc

commit 7e482f0d272317332c6f29671d1aebbf1ab6bb59
Author: sujit-168 <su2054552689@gmail.com>
Date:   Wed Sep 20 17:08:53 2023 +0800

    feat: update Readme.md and Contribute.md

commit 2815452fbb4eb2a574bfde043e4a7ba3909f0986
Author: sujit-168 <su2054552689@gmail.com>
Date:   Wed Sep 20 16:33:03 2023 +0800

    feat: init Tianbot-Doc framework
```



- [git 修改历史提交 (commit) 信息（超详细，图文并茂）](https://blog.csdn.net/qq_17011423/article/details/104648075)



### 场景五（如何编写.gitignore 文件）

如果你使用`vscode`编写`C++`代码，大概率会使用到`.vscode`文件夹，显然这个文件只对本机器来说有用，所以它并不应该被上传到仓库之中

如果你编写`ROS`代码，想要将整个工作空间上传，你当然不想将 build、devel（ROS1）,build、install、log 文件夹也一起上传上去。

如果你基于`Node.js`来写技术文档、或者个人博客，你也当然不想将 node_modules 文件一起传到 Github 上面去

- [Git 忽略文件.gitignore 详解](https://blog.csdn.net/ThinkWon/article/details/101447866)

创建一个`.gitignore`文件，然后将需要忽略的文件名或文件夹名写入其中，Git 就会自动忽略这些文件或文件夹。文件中的规则是按照行来匹配的，每一行都是一个规则。如果某一行以`#`开头，则表示该行是一个注释，不会被 Git 忽略。

**.gitignore**

```shell
# Prerequisites
*.d

# Compiled Object files
*.slo
*.lo
*.o
*.obj

# Precompiled Headers
*.gch
*.pch

# Compiled Dynamic libraries
*.so
*.dylib
*.dll

# Fortran module files
*.mod
*.smod

# Compiled Static libraries
*.lai
*.la
*.a
*.lib

# Executables
*.exe
*.out
*.app

# Something else
*.DS_Store
*.swp

# python compiled
*.pyc

# map file
*.pgm

# speciic cfg
 
# unused file
__pycache__
imgui.ini
.history
.vscode
.idea

```

### 场景六（如何删除远程仓库中不想要的文件）

比如我不想要`docs.zip`文件，即可采用下面的方法

```shell
git rm -r --cached docs.zip
```

### 场景七（撤销最新的一次 commit）

**使用 git reset 命令取消最近的 commit**

1. 打开终端或命令行窗口，进入你的项目目录。
2. 运行命令 git reset HEAD~ ，这会将 HEAD 指向上一次 commit，同时撤销最近的一次 commit。
3. 如果你不希望保留该 commit 的更改，可以使用 `git reset --hard HEAD~` 命令。

如果你仅仅是想要撤销最近两次的 commit，你可以运行 `git reset HEAD~` 

- [**Git 如何取消本地 git commit**](https://geek-docs.com/git/git-questions/280_git_how_to_cancel_a_local_git_commit.html)



### 场景八（在该分支上拿去其他分支的提交）

- [详解 git cherry-pick 用法](https://blog.csdn.net/a1056244734/article/details/112908080)

::: tip 提示
```shell
git cherry-pick 'f038d7ffb1685af7d4f870ad0b798670b6f760e8'
```
:::

### 场景九（git status 出现大量文件修改）

当从 NTFS 卷或者其他 EXT4 中拷贝 git 项目时，可能会遇到这种情况，拷贝前后文件的内容无差，只是其文件权限发生变化，仓库下的所有文件会显示有修改。

解决方法：

1. 进入项目目录，执行 `cat .git/config` 命令。
```shell
tianbot@ros2go:~/Workspace/Website/sujit-168.github.io$ cat .git/config 
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
[remote "origin"]
        url = git@github.com:sujit-168/sujit-168.github.io.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
        remote = origin
        merge = refs/heads/main
```

2. 执行 `git config core.filemode false` 命令。

```shell
git config core.filemode false
```

- [git status 出现大量文件修改](https://blog.csdn.net/biglamp/article/details/113073345)

### 场景十（本地同步远端分支变动）

```shell
tianbot@ros2go:~/tianbot_ws/src/tianracer/tianracer_gazebo/scripts/judge_system$ git remote update --prune 
Fetching origin
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 5 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), 1.13 KiB | 1.13 MiB/s, done.
From github.com:tianbot/judge_system_dev
   6d74f97..0368d12  main       -> origin/main
   6d74f97..0368d12  dev        -> origin/dev
```

<p style="font-size:30px ;font-weight: bolder">References</p>

- [廖雪峰：Git 的诞生](https://www.liaoxuefeng.com/wiki/896043488029600/896202815778784)
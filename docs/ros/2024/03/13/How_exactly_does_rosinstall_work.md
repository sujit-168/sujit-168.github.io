---
title: rosinstall 究竟是如何工作的？
isOriginal: false
author: answers.ros.org
date: 2024-03-13 18:08
articleTitle: How exactly does .rosinstall work?
articleLink: https://answers.ros.org/question/9213/how-exactly-does-rosinstall-work/
categories: [ROS]
tags: [ROS1, .rosinstall]
---

# .rosinstall 究竟是如何工作的？

## 问题

::: code-group

``` [en]
I'm a bit unclear on how .rosinstall works.

I realize that a standard version gets installed when I first installed ros (though I'm not sure whether easyinstall or rosinstall does that). A couple of things I don't quite understand:

1. How do upgrades work? Do the .rosinstall file need to be manually edited to change a version number? (Some of the packages in .rosinstall don't have version numbers, so how does that work?) Or does the rosinstall command somehow take care of updates? I can also use svn directly to upgrade certain packages, but then will re-running rosinstall not revert those upgrades by over-writing the svn ugrades?

2. If I want to use rosinstall to install other packages, how should I do that? Create another .rosinstall file with a different name or add new lines to the existing .rosinstall? And if I do make another .rosinstall, can I use the rosinstall command for one and not adversely affect the other set of installed packages?
```

``` [zh-cn]
我有点不清楚 .rosinstall 是如何工作的。

我意识到当我第一次安装ros时会安装标准版本（尽管我不确定easyinstall还是rosinstall是否会这样做）。 有几件事我不太明白：

1. 升级如何进行？ 是否需要手动编辑 .rosinstall 文件来更改版本号？ （.rosinstall 中的某些软件包没有版本号，那么它是如何工作的？）或者 rosinstall 命令是否以某种方式处理更新？ 我还可以直接使用 svn 来升级某些软件包，但是重新运行 rosinstall 不会通过覆盖 svn ugrades 来恢复这些升级吗？

2. 如果我想使用rosinstall安装其他软件包，我该怎么做？ 创建另一个具有不同名称的 .rosinstall 文件或向现有 .rosinstall 添加新行？ 如果我确实制作了另一个 .rosinstall，我可以使用 rosinstall 命令而不会对另一组已安装的软件包产生不利影响吗？
```
:::

## 回答

::: code-group
``` [en]
The .rosinstall file is generated when rosinstall is executed. (Except the .rosinstall files in /opt/ros/*/.rosinstall are generated by the debbuilding infrastructure.)

1) When executed rosinstall will generate a new .rosinstall which is the union of the existing .rosinstall and rosinstall files on the command line. Before writing out the .rosinstall file the entries will be deduplicated based on local-name. If you run rosinstall . it will make sure that you have exactly what's listed in the .rosinstall file, with the same version as listed. If you change the .rosinstall file manually before executing it will follow the edited version. If you have changed an svn checkout manually it will try to return the checkout to the version in the .rosinstall file, unless you change the .rosinstall file to correspond. (PS rosinstall version 0.5.15 has an interactive skip option to not change a locally changed checkout)

The recommended way to update is to call `rosinstall . "updated_rosinstall_file"

where updated_rosinstall_file would be something manually maintained or a generated file like "http://packages.ros.org/cgi-bin/gen_rosinstall.py?rosdistro=diamondback&variant=desktop-full&overlay=no" The new rules for each local-name will override the corresponding old rules.

2) Similarly to updating to add a package or stacks to an existing rosinstalled directory, just pass a rosinstall file with those packages to rosinstall rosinstall . new_packages.rosinstall and they will be added to the .rosinstall in directory "."

Adding the lines to .rosinstall is also valid. Then rerun rosinstall like this rosinstall .

To add build a rosinstall on top of another one without changing an existing checkout you will want to use another directory. Then you can use rosinstall . /other_checkout/path local.rosinstall as long as /other_checkout/path contains a .rosinstall file. This will add the contents of the /othere_checkout/path as "other" elements in the .rosinstall file in "."

As always later arguments will be earlier on the ROS_PACKAGE_PATH.
```

``` [zh-cn]
执行 rosinstall 时会生成 .rosinstall 文件。 （除了 /opt/ros/*/.rosinstall 中的 .rosinstall 文件是由 debbuilding 基础设施生成的。）

1）执行 rosinstall 时，将生成一个新的.rosinstall，它是命令行上现有的.rosinstall 和 rosinstall 文件的并集。在写出 .rosinstall 文件之前，将根据本地名称对条目进行重复数据删除。如果您运行 rosinstall。它将确保您拥有 .rosinstall 文件中列出的内容，并且版本与列出的版本相同。如果您在执行之前手动更改 .rosinstall 文件，它将遵循编辑后的版本。如果您手动更改了 svn checkout，它将尝试将签出返回到 .rosinstall 文件中的版本，除非您更改 .rosinstall 文件以进行对应。 （PS rosinstall 版本 0.5.15 有一个交互式跳过选项，不会更改本地更改的结帐）

推荐的更新方法是调用 `rosinstall。 “updated_rosinstall_file”

其中 Updated_rosinstall_file 将是手动维护的文件或生成的文件，例如“http://packages.ros.org/cgi-bin/gen_rosinstall.py?rosdistro=diamondback&variant=desktop-full&overlay=no”每个本地名称的新规则将 覆盖相应的旧规则。

2) 与更新以将软件包或堆栈添加到现有的 rosinstalled 目录类似，只需将包含这些软件包的 rosinstall 文件传递给 rosinstall rosinstall。new_packages.rosinstall 并且它们将被添加到目录“.”中的 .rosinstall 中

将这些行添加到 .rosinstall 也是有效的。然后像这样重新运行 rosinstall rosinstall。

要在另一个目录之上添加构建 rosinstall 而不更改现有的签出，您将需要使用另一个目录。然后您可以使用 rosinstall。 /other_checkout/path local.rosinstall 只要 /other_checkout/path 包含 .rosinstall 文件。这会将 /othere_checkout/path 的内容添加为 .rosinstall 文件中“.”中的“其他”元素。

与往常一样，后面的参数将在 ROS_PACKAGE_PATH 上更早出现。
```

:::
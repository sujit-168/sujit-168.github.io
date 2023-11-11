---
title: 如何将ROS安装到Windows下的非系统盘中
date: 2023-03-05 14:21:49
cateiories: [ROS、Windows]
tags: [ROS、Windows]
copyright: true
---

# 如何将ROS安装到Windows下的非系统盘中

## 准备工作(离线安装)

1.挂个梯子,没有的话，可以参考张老师的[这篇文章](https://blog.csdn.net/ZhangRelay/article/details/112173851)，离线安装ROS。

2.确认一下自己C盘的剩余空间是否>30GB,如果大于，请点击右上角的关闭按钮，不要折腾，早点开始后续的[ROS](https://microsoft.github.io/Win-RoS-Landing-Page/)学习。如果你同我一样，C盘剩余空间<20GB,则请接着往下看。

<!-- more -->

## 在线安装

4.设置chocolateyInstall,但ROS安装时还是会安装到C盘!,没事，稍后解决
```
set ChocolateyInstall=F:\opt\chocolatey  # 我的F盘空间足够，故选择F盘
```
5.添加ROS安装源
```
choco source add -n=ros-win -s="https://aka.ms/ros/public" --priority=1
```
6.安装桌面版
```
choco upgrade ros-melodic-desktop_full -y --execution-timeout=0
```
7.将安装的ros剪切到目标目录下

## 修改盘符路径

### 第一步

![](https://ghproxy.com/https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202303052228184.png)

### 第二步
![](https://ghproxy.com/https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202303052232891.png)


### 第三步
![](https://ghproxy.com/https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202303052233966.png)

创建功能包,会报错用户邮箱不合法，应该是用户名为中文的问题，所以，参考[这篇文章](https://answers.microsoft.com/zh-hans/windows/forum/all/%E6%80%8E%E4%B9%88%E6%A0%B7%E5%BD%BB%E5%BA%95/89cf7d46-2c15-41b0-81a7-2fcf80a496a8)中的netplwiz部分进行修改
![](https://ghproxy.com/https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202303052235037.png)
完成修改后，重新启动电脑,成功解决无法正常创建功能包的问题
![](https://ghproxy.com/https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202303052236251.png)
catkin_make编译工作空间后,rosrun运行hello_world测试功能包的效果
![](https://ghproxy.com/https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202303052238227.png)
配置环境变量
``` cmd
F: && cd \catkin_ws\devel && .\setup.bat
```

```cmd
**********************************************************************
** Visual Studio 2019 Developer Command Prompt v16.11.24
** Copyright (c) 2021 Microsoft Corporation
**********************************************************************

F:\catkin_ws>C:

C:\Program Files (x86)\Microsoft Visual Studio\Installer>F: && cd \catkin_ws\devel && .\setup.bat

F:\catkin_ws\devel>rosrun my_first_ros_pkg hello_world_node
```

- [如何优雅地在windows上玩ROS（一个紧致的解决方案）](https://zhuanlan.zhihu.com/p/414874250)
- [ROS for Windows](https://microsoft.github.io/Win-RoS-Landing-Page/)
- [ROS机器人操作系统Windows10离线安装包](https://blog.csdn.net/ZhangRelay/article/details/112173851)
- [在Windows系统安装ROS机器人操作系统（2020年10月25日更新）](https://zhangrelay.blog.csdn.net/article/details/82899582)
- [Windows 10下安装ROS系统并执行ROS功能包](https://blog.csdn.net/weixin_41802388/article/details/112865672)
- [windows10下将ROS安装到D盘](https://blog.csdn.net/yxmlhc/article/details/114868479)
- [怎么样彻底修改用户名 win10](https://answers.microsoft.com/zh-hans/windows/forum/all/%E6%80%8E%E4%B9%88%E6%A0%B7%E5%BD%BB%E5%BA%95/89cf7d46-2c15-41b0-81a7-2fcf80a496a8)
- [catkin_create_pkg failure](https://answers.ros.org/question/240628/catkin_create_pkg-failure/)


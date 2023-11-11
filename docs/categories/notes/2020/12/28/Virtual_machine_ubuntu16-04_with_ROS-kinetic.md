---
title: 虚拟机 ubuntu16.04 与 ROS-kinetic
date: 2020-12-28 19:52:06
categories: [ubuntu16.04,ROS-kinetic]
tags: [ubuntu16.04,ROS-kinetic]
copyright: true
---

# 虚拟机 ubuntu16.04 与 ROS-kinetic 的安装

### 背景介绍

​最近由于要做的一个项目涉及到 ROS 与机器视觉以及一些 SLAM 技术，所以学习了一下机器人操作系统 ROS 在 ubuntu 上的安装，由于开始时经验不足，为了能有更高的容错率，我选择在 Virtual Box 上安装 Ubuntu16.04 虚拟机，得益于虚拟机可以轻松进行备份和恢复的优势，我在进行 ROS 的安装时更有信心。

<!-- more -->

## 本机环境

​Windows10 家庭版 + Ubuntu16.04 虚拟机 + ROS kinetic

## 方案选择

### 方案 1.VMware 虚拟机安装 ubuntu16.04

可以参考火耳软件安装的[这篇文章](http://mp.weixin.qq.com/s?__biz=MzU0MTg5NDkzNA==&amp;mid=2247498154&amp;idx=1&amp;sn=a2947b925ffb530d7690149c3b3f2232&amp;chksm=fb2049d3cc57c0c5743da147a8b8408eb73ce61262f833eb6ecca7fb433a347241a08e2273c7&amp;mpshare=1&amp;scene=23&amp;srcid=1228eMZg5msv2v0islQnklYv&amp;sharer_sharetime=1609158326393&amp;sharer_shareid=970e485b437aa6a7a3cae61fe48119bd#rd)

### 方案 2.Virtual Box 虚拟机安装 ubuntu16.04

可以参考博客园上的[这篇文章](https://www.cnblogs.com/luengmingbiao/p/10859905.html)

## 安装流程

[ROS 官方安装教程](http://wiki.ros.org/melodic/Installation/Ubuntu)

### 1.注意对应好版本

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/ROS_Installation_Options.jpg)

### 2.配置软件源

ROS 官方默认安装源：
```shell
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```

国内 ROS 源：

重庆大学镜像源
```shell
sudo sh -c '. /etc/lsb-release && echo "deb https://mirrors.cernet.edu.cn/ros/ubuntu/ `lsb_release -cs` main > /etc/apt/sources.list.d/ros-latest.list'
```

清华的安装源
```shell
sudo sh -c '. /etc/lsb-release && echo "deb http://mirrors.tuna.tsinghua.edu.cn/ros/ubuntu/ `lsb_release -cs` main" > /etc/apt/sources.list.d/ros-latest.list'
```

中科大的安装源
```shell
sudo sh -c '. /etc/lsb-release && echo "deb http://mirrors.ustc.edu.cn/ros/ubuntu/ `lsb_release -cs` main" > /etc/apt/sources.list.d/ros-latest.list'
```

使用`alinyun`镜像软件源即可


![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/apply_install_sources.jpg)

### 3.添加密钥

```
sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
```



![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/add_key.jpg)

### 4.安装 ROS（桌面完整版 Desktop-Full）

```
sudo apt install ros-melodic-desktop-full
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/install_ros_kentic_full1.jpg)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/install_ros_kentic_full11.jpg)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/install_ros_kentic_full2.jpg)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/install_ros_kentic_full3.jpg)

独立功能包的安装，其中 PACKAGE 代表功能包的名称

```
sudo apt install ros-melodic-PACKAGE
```

例如安装机器人 SLAM 地图建模 gmapping 功能包时，可以使用以下命令进行安装

```
sudo apt install ros-melodic-slam-gmapping
```

### 5.初始化 ROS

```
sudo rosdep init
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/sudo_rosdep_init_error.jpg)

直接创建一个 sources.list.d 文件夹，在目录下新建一个 20-default.list 文件

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/init_error_save.jpg)

```
rosdep update
```



![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/rosdep_update_error.jpg)

如遇到 rosdep update 时出现错误，可以参考[CSDN 大佬文章](https://blog.csdn.net/mrh1714348719/article/details/103803110?utm_source=app)



![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/rosdep_update.jpg)

### 6.配置环境变量

```
echo "source /opt/ros/kinetic/setup.bash" >> ~/.bashrc
```

```
source ~/.bashrc
```

### 7.使用测试

打开 terminal 输入

```
roscore
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/roscore.jpg)

运行 turtlesim 程序

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/rosrun_rurtlesim.jpg)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E8%99%9A%E6%8B%9F%E6%9C%BAubuntu16-04%E4%B8%8EROS-kinetic/rosrun_turtlesim_turtle_teleop_key.jpg)

## 致谢

OK！本期关于虚拟机 ubuntu16.04 与 ROS-kinetic 的安装就到此为止。接下来后续内容会分几期更新。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！

(注明：本文中的方法在撰写过程中得益于对各位前辈大佬的经验进行借鉴和吸收)




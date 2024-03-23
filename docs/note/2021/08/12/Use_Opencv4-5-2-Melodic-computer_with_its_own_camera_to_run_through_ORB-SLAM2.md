---
title: 用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2
date: 2021-08-12 23:38
categories: [note]
tags: [Opencv4.5.2,ORB-SLAM2]
copyright: true
---

# 如何在 Ubuntu18.04 上用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2

## 前言

最近研究了一下如何在 Ubuntu18.04 上用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2，摸索的过程也踩了不少坑，所以写下这篇文章来总结整个过程。

<!-- more -->

## 安装环境

1. Ubuntu18.04
   Linux 发展至今，已经发布了多种版本，镜像文件可以 Ubuntu 官网上下载[安装版本选择](https://ubuntu.com/download/alternative-downloads)
   对于虚拟机，就不再这里推荐了，建议直接上双系统，这里可能又会出现两个问题：
   1. 需不需要再加装一块固态硬盘？
   2. 之后万一系统崩了，怎么快速恢复？
   我个人建议，如果可以，就再加装一块固态硬盘，关于拆机的问题，可以参考[这篇文章](https://sujie-168.top/2021/01/22/%E5%A6%82%E4%BD%95%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E7%88%B1%E6%9C%BA%E7%A5%9E%E8%88%9FTX6-CT5DA%E5%8A%A0%E8%A3%85%E5%9B%BA%E6%80%81%E7%A1%AC%E7%9B%98/)
   关于双系统的安装，可以[参考这篇文章](https://mp.weixin.qq.com/s/gL0nbF1x1-F5B6-M_9nFkQ)

2. Melodic
   关于 Melodic 的安装，可以参考我之前的一篇文章[ROS 是什么及 ROS 的安装](https://blog.csdn.net/qq_45857922/article/details/113355960)

3. [ORB-SLAM2](https://github.com/raulmur/ORB_SLAM2)
   想要将 ORB-SLAM2[^1]跑起来，还需要安装一些必要的依赖库，如 Pangolin、OpenCV、Eigen3 等，这里推荐参考这篇文章[ORB-SLAM2“工具安装 和 系统运行“详细过程](https://blog.csdn.net/hltt3838/article/details/113962104)

以上的安装过程，可能会消耗大量的时间，坑会比较多，但我希望大家在安装时都可以没有报错

### 构建功能包

第一：首先确定自己有一个 ROS 的工作空间，并对其进行初始化，为下一步创建功能包作准备。

```c
mkdir  -p ~/catkin_ws/src
cd ~/catkin_ws/
catkin_make
```

第二：开始构建发布话题的摄像头调用功能包，这里建议直接借用官方给出的 usb_cam 功能包

```c
cd catkin_ws／src

//git 拉取代码，如果速度很慢，使用方法 2 拉取，如果没有安装 git，请根据提示安装 git 即可，或者自行百度一下
git clone https://github.com/bosch-ros-pkg/usb_cam usb_cam   //方法 1
git clone https://hub.fastgit.org/bosch-ros-pkg/usb_cam usb_cam		//方法 2
cd usb_cam
mkdir build 
cd build 
cmake ..   //Cmake 编译
make 	   //make 编译
```

### 检查测试

```c
roscore
roslaunch usb_cam usb_cam-test.launch
```

如果得到如下图的效果即为正常
![在这里插入图片描述](https://img-blog.csdnimg.cn/03dab6f8cf3f4dab8f7a1123e5e296bb.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODU3OTIy,size_16,color_FFFFFF,t_70)
其余的一些操作可以参考这篇文章[用电脑自带的摄像头跑 orb_slam2](https://zhuanlan.zhihu.com/p/29629824)

## 遇到问题
![在这里插入图片描述](https://img-blog.csdnimg.cn/2c318a42c86d408e806729ab5ee6239c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODU3OTIy,size_16,color_FFFFFF,t_70)

我在安装 Opencv 时没有指定安装的版本，所以最后安装 Opencv 的版本为 Opencv4.5.2，而在 ROS 中集成的 Opencv 为 Opencv3.2.0。

开始时由于对 Opencv 了解比较少，所以在这里卡了很久，在查了一些资料之后，发现可能是 Opencv 版本冲突的问题，在 ORB-SLAM2 中 Cmakelist 中我并没有指定 Opencv 库的调用位置，所以，在运行 ORB-SLAM2 时，会自动的指向 ROS(Melodic) 中自带的 Opencv 版本。

在明白了这一点之后，我经过查找资料，找到了一个比较合适的解决方法。

在解决这个问题过程中所参考的资料
1. [OpenCV 4.3.0 引入的错误 TlsStorage releaseSlot 导致 crash](https://www.codenong.com/js19ccc3972768/)
2. [ROS 下使用 Opencv4.4.0，并且使用 cv_bridge 转换 msgs 与 opencv 图像](https://blog.csdn.net/weixin_43436587/article/details/107711866)
3. [解决 ROS 配置中 cv_bridge 问题](https://zhuanlan.zhihu.com/p/347455336)
4. [ORB-SLAM2——（十一）ORBSLAM2 在 ROS 下运行](https://zhuanlan.zhihu.com/p/306029349)


### 解决过程

1. 下载最新的 vision_opencv，复制文件夹到 cakin_ws/src 目录下

```c
git clone https://github.com/ros-perception/vision_opencv.git  方法 1
git clone https://hub.fastgit,.org/ros-perception/vision_opencv.git  方法 2

cd vision_opencv
cp cv_bridge home/xxx/catkin_ws/src   //xxx 为你的用户名
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/b3f7cc1f88be43ba9c8a1fe64b417d35.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODU3OTIy,size_16,color_FFFFFF,t_70)

2.更改 cv_bridge 中的 Opencv 版本，改成与自己安装版本一至，如我安装的版本为 4.5.2，则需要对 cv_bridge 下的 CMakeLists.txt 文件中的这一部分进行修改。

```c
find_package(OpenCV 4 REQUIRED
  COMPONENTS
    opencv_core
    opencv_imgproc
    opencv_imgcodecs
  CONFIG
)
```

3.编译 cv_bridge

```c
cd cv_bridge
mkdir build
cd build
cmake ..
make
```

然后在 ORB-SLAM2 下修改 CMakeLists.txt，添加第一句 set() 来指定在运行 ORB-SLAM2 时，cv_bridge 的路径，这样应该就可以避免多个 Opencv 版本之间的冲突问题。

```c
set(cv_bridge_DIR /usr/local/share/cv_bridge/cmake)   //在 find_package 前面

find_package(OpenCV 4 QUIET)
if(NOT OpenCV_FOUND)
   find_package(OpenCV 2.4.3 QUIET)
   if(NOT OpenCV_FOUND)
      message(FATAL_ERROR "OpenCV > 2.4.3 not found.")
   endif()
endif()
```

4.重新编译整个工作空间

```c
cd catkin_ws
catkin_make
```

如果遇到报错，先解决报错，如果编译没有报错，则运行 ORB-SLAM2

## 运行效果

首先启动 ROS

```c
roscore
```

按住 Ctrl+Alt+T 可以快速创建新的终端
创建一个新终端

```c
roslaunch usb_cam usb_cam-test.launch
```

再创建一个新终端

```c
rosrun ORB_SLAM2 Mono Vocabulary/ORBvoc.txt Examples/Monocular/TUM2.yaml
```

<font color=#999AAA >需要先对相机进行初始化，获取到一定数量的关键帧，然后才能进行 SLAM 点云建图。</font>
![在这里插入图片描述](https://img-blog.csdnimg.cn/9c412df2bbd24ce19c62b4086fc6e954.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODU3OTIy,size_16,color_FFFFFF,t_70)

这里是单目相机情况下的[具体演示效果](https://www.bilibili.com/video/BV1iM4y157oY)

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=932224585&bvid=BV1iM4y157oY&cid=385019541&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

以上就是本文的全部内容，本文写的比较粗糙，之后会补上缺失的部分重要内容。

## 参考

[^1]: [ORB-SLAM2](https://github.com/raulmur/orb_slam2.)

## 致谢

OK！本期关于如何在 Ubuntu18.04 上用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2 就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！
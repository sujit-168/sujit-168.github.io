---
title: 用 Opencv4.5.2+Melodic+USB 双目摄像头跑通 ORB-SLAM2
date: 2021-11-02 11:00:12
categories: [Opencv4.5.2,ORB-SLAM2,Melodic]
tags: [Opencv4.5.2,ORB-SLAM2,Melodic]
copyright: true
---

# 用 Opencv4.5.2+Melodic+USB 双目摄像头跑通 ORB-SLAM2

## 前言

在实现的具体过程也踩了不少坑，所以写下这篇文章来总结整个过程。

<!-- more -->

入门 SLAM 需要深度相机和激光雷达这些基础硬件，但是考虑到自己的经济实力实在不允许，所以就入手了下面这个摄像头。这个摄像头的具体长这样，是我在淘宝 35 元买来练手的。

![在这里插入图片描述](https://img-blog.csdnimg.cn/99b3342d31fa4312baa7745be7a9ca2c.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA55Sm5YKR,size_20,color_FFFFFF,t_70,g_se,x_16)
在商家提供的资料外，也发现了不少值得再延申的内容，比如如何在 ROS 下进行双目测距算法，PCL 三维重建，如何联系 ORB-SLAM2 的双目建图等等。一个 idea 有了，接下来就是开始实践。但实践的道路并不像想的那样平坦，也遇到了不少问题，在查资料的过程中，也发现了不少前辈的精辟总结，所以在此处做一下整理

 - [ubuntu 下 如何与 usb 设备摄像头通信](https://bbs.csdn.net/topics/392285857)
 - [ros 学习最便宜的双目 Chusei 3d webcam 在 linux 下用 uvcdynctrl 命令控制 结贴](https://blog.csdn.net/qq_38288618/article/details/91474026)
 - [hack 一个 3D 摄像头来解闷](https://www.jianshu.com/p/2ce302d588a0)
 - [Ubuntu 下读取 CHUSEI 3D Webcam 双目摄像头 C++ 版本（调用 python 脚本进行配置）](https://blog.csdn.net/Y_15751004297/article/details/88878200)
 - [双目摄像头的标定及测距（Ubuntu16.04 + OpenCV）](https://blog.csdn.net/qq_41433316/article/details/99118495)
 - [在 linux/Ubuntu 下调试最便宜的双目摄像头（含 Linux 版本上位机）CAM5031/CHUSEI 3D WEBCAM 解决只能开单目的问题](https://blog.csdn.net/hbwhzc/article/details/109136776)
 - [windows + python + opencv 打开双目摄像头 chusei3d 踩坑](https://blog.csdn.net/weixin_44242403/article/details/115749860)
   在前辈的经验加持下，也解决了一些问题。

## 问题

### 问题一：Ubuntu 下的双目模式切换问题

商家提供的资料中有 shell 脚本可以使用，但是个人感觉在使用过程中体验并不友好。
所以自己也对脚本进行了一定的改进。注意在使用前需要提权

```c
user@ubuntu:~/Stereo_cam/Camera_switch$ chmod +x ./camera_switch.sh
```

camera_switch.sh

```bash
#!/bin/bash
# user@ubuntu:~/Stereo_cam/Camera_switch$ chmod +x ./camera_switch.sh      提升执行权限
# author : ruoxi

printf "%-10s\n"请输入相机通道
read id     # 选取相机通道
echo -e "It is switch to $id \n"        # -e 开启转义

printf "1.左单目模式：LEFT_EYE_MODE\n"
printf "2.右单目模式：RIGHT_EYE_MODE\n"
printf "3.红蓝模式：RED_BLUE_MODE\n"
printf "4.双目模式：BINOCULAR_MODE\n"

printf "%-10s\n"请输入相机输出模式序号
read mode   # 切换相机输出模式

printf "\n"

uvcdynctrl -d /dev/video${id} -S 6:8  '(LE)0x50ff'
uvcdynctrl -d /dev/video${id} -S 6:15 '(LE)0x00f6'
uvcdynctrl -d /dev/video${id} -S 6:8  '(LE)0x2500'
uvcdynctrl -d /dev/video${id} -S 6:8  '(LE)0x5ffe'
uvcdynctrl -d /dev/video${id} -S 6:15 '(LE)0x0003'
uvcdynctrl -d /dev/video${id} -S 6:15 '(LE)0x0002'
uvcdynctrl -d /dev/video${id} -S 6:15 '(LE)0x0012'
uvcdynctrl -d /dev/video${id} -S 6:15 '(LE)0x0004'
uvcdynctrl -d /dev/video${id} -S 6:8  '(LE)0x76c3'
uvcdynctrl -d /dev/video${id} -S 6:10 "(LE)0x0${mode}00"           # 切换相机输出模式

printf "\n"
echo -e "It is camera_mode $mode \n"
```

在 cpp 文件中直接使用 system("") 调用即可，关于相对路径，这里就不介绍了

```cpp
system("../../sh/camera_switch.sh");  //Ubuntu 系统下，此处改成你的脚本存放相对路径
```

这里附上一款好用的配套上位机：[https://github.com/ruoxi521/Stereo_QT/releases/tag/v1.0.0](https://github.com/ruoxi521/Stereo_QT/releases/tag/v1.0.0)

### 问题二：如何在 ROS 中使用节点调用摄像头显示双目图像

这里附上一篇文章[ROS&OpenCV 下单目和双目摄像头的标定与使用](https://blog.csdn.net/shenyan0712/article/details/102483466)

这里是我的小伙伴提供的[节点文件](https://github.com/ruoxi521/Stereo_camera.git)，提供给大家参考。

```bash
git clone -b melodic https://github.com/ruoxi521/Stereo_camera.git
```

启动 camera_split 节点

```bash
user@ubuntu:~$ roslaunch camera_split stereo.launch
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/5c47b091bad540a38482fbfb06792102.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA55Sm5YKR,size_20,color_FFFFFF,t_70,g_se,x_16)
运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/a1fc5ddcb4ea46b58f748ae4c2149038.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA55Sm5YKR,size_20,color_FFFFFF,t_70,g_se,x_16)


### 问题三：如何测试双目摄像头跑通 ORB-SLAM2

修改 ORB_SLAM2/Examples/ROS/ORB_SLAM2/src/ros_stereo.cc 的两段代码，改为订阅 camera_split 节点/left_cam 和/right_cam 的/image_raw 话题

```cpp
message_filters::Subscriber<sensor_msgs::Image> left_sub(nh, "/left_cam/image_raw", 1);
message_filters::Subscriber<sensor_msgs::Image> right_sub(nh, "/right_cam/image_raw", 1);

//message_filters::Subscriber<sensor_msgs::Image> left_sub(nh, "/camera/left/image_raw", 1);
//message_filters::Subscriber<sensor_msgs::Image> right_sub(nh, "camera/right/image_raw", 1);
```

```bash
cd SLAM/src/ORB_SLAM2/Examples/ROS/ORB_SLAM2/
mkdir build
cd build
cmake ..
make 
```

启动 camera_split 节点

```bash
user@ubuntu:~$ roslaunch camera_split stereo.launch
```

```bash
user@ubuntu:~$ roscore
```

启动 Stereo 双目建图

```bash
user@ubuntu:~/SLAM/src/ORB_SLAM2$ rosrun ORB_SLAM2 Stereo Vocabulary/ORBvoc.txt Examples/Stereo/EuRoC.yaml true
```

运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/adf7197f376948ad81d1051f8a5a3f78.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA55Sm5YKR,size_20,color_FFFFFF,t_70,g_se,x_16)
细心的朋友可能发现，似乎只订阅了左边相机发布的话题，但是我们是设置其订阅左右两个相机发布的话题，
**这是为什么呢？**
我想可能是对于双目 USB 相机，其输出的图像是经过合成的，我们通过软件方法分割左右相机的图像，同时对于需要同时订阅两个话题，需要对其作同步合并处理，之后作为参数进行传参。这里就不介绍具体过程，同学们可以自行探索解决。
可以参考这篇文章的思路[ROS 之订阅多个话题并对其进行同步处理 (多传感器融合)](https://blog.csdn.net/orange_littlegirl/article/details/97425696)

## 总结

以上就是本文的内容，本文介绍了如何在 Ubuntu18.04 上用 Opencv4.5.2+Melodic+USB 双目摄像头跑通 ORB-SLAM2，本文写的比较粗糙，如有不足，还请指正。

## 参考

参考资料：
1. [raulmur](https://github.com/raulmur) ORB-SLAM2 https://github.com/raulmur/orb_slam2
2. ROS http://wiki.ros.org/melodic/Installation/Ubuntu)



## 致谢

OK！本期关于如何在 Ubuntu18.04 上用 Opencv4.5.2+Melodic+USB 双目摄像头跑通 ORB-SLAM2 就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！

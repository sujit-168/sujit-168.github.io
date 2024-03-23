---
title: 如何修复 roscore 加载共享库时的错误：libroscpp.so
date: 2024-02-22 09:58
categories: 
    - ROS
tags: 
    - ROS
copyright: true
---

# 如何修复 roscore 加载共享库时的错误：libroscpp.so

前天折腾了一下在 [X3pi](https://www.waveshare.net/wiki/Horizon_Sunrise_X3_PI) 上安装 ROS Noetic 时，遇到的一个问题，在 roscore 加载共享库时出错，之前没遇到过，记录一下。




## 问题描述

在执行 `roscore` 时，出现了如下错误：

```bash
$ roscore
....
process[rosout-1]: started with pid [9673]
[rosout-1] process has died [pid 9673, exit code 127, cnd /opt/ros/noetic/lib/rosout/rosout nane =rosout_ log:=/hone/ouc/.ros/log/0753254-d0a1-11ea8ecb-1c1b6d253d41/rosout-1*.log].
log file: /hone/ouc/.ros/log/0753254-d0a1-11ea8ecb-1c1b6d253d41/rosout-1*.log
[ rosout-1] restarting process
/opt/ros/noetic/lib/rosout/rosout: error while loading shared libraries: libroscpp.so: cannot open shared object file: No such file or directory
```

## 问题分析

根据错误提示，应该是 `libroscpp.so` 加载失败。

### 1. 检查共享库是否存在

```shell
find /opt/ros -name "libroscpp.so"
```

输出：
```shell
/opt/ros/noetic/lib/libroscpp.so
```

发现共享库存在，说明共享库的路径是正确的，接下来就需要查看一下环境变量是否正确了。

### 2. 检查环境变量是否正确

```shell
echo $LD_LIBRARY_PATH
```

输出：
```shell
/opt/ros/noetic/lib
```
发现环境变量是正确的，这就奇怪了。

## 解决方案
参考文章[error while loading shared libraries: libroscpp.so: cannot open shared object file](https://blog.csdn.net/weixin_46639310/article/details/133024546)

### 1.添加路径到配置文件

```shell
sudo cat /etc/ld.so.conf
```

然后将共享库的路径添加到配置文件中：
```shell
include /etc/ld.so.conf.d/*.conf
/opt/ros/noetic/lib
```

然后 `ESC`，输入`:wq` 保存并退出。

### 2. 重新加载配置文件

```shell
sudo ldconfig
```

再次运行 `roscore` 即可成功。
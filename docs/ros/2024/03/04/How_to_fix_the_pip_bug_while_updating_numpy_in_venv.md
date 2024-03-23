---
title: 修复在 venv 虚拟环境中无法升级 numpy 的 pip 错误
date: 2024-03-04 17:39
categories: [ROS]
tags: [venv,  ROS,  pip]
copyright: true
---

# 修复在 venv 虚拟环境中无法升级 numpy 的 pip 错误


## 前情回顾

当时公司大佬使用 `venv` 虚拟环境对 ROS1 和 ROS2 的分割，主要是避免一些恶心、不合理的路径引用问题。在不引入系统 Python 环境变量时，测试时常会出现缺少一些与 ROS 相关的 `.so` 路径缺失的问题，通过软链接到系统 Python 环境中的同名 `.so` 可以解决

为了方便，我们便将系统 Python 环境中的 `site-packages` 路径软链接到 `venv` 虚拟环境中的 `site-packages` 路径，对.ros1 中的 `site-packages` 进行覆盖

## 问题描述

在安装 f1tenth-gym 的 python 环境时，遇到了 numpy 版本过低的问题，需要升级 numpy 版本

- 原来 numpy 版本为 1.17.4
- 需要升级 numpy 版本到 1.22.0

### 升级 numpy 版本
- 首先，在虚拟环境中安装 numpy 1.22.0
```bash
pip install numpy==1.22.0
```

显示 successfully installed 然后，开心继续下一步，（继续是不可能的，要能继续不就没有这篇博客了）

### 检查一下 numpy 版本
```shell
(.ros1) tianbot@ros2go:~$ pip3 list | grep numpy
numpy                         1.17.4

[notice] A new release of pip is available: 23.3.1 -> 24.0
[notice] To update, run: pip install --upgrade pip
(.ros1) tianbot@ros2go:~$ 
```

**好家伙，简直不讲武德！！！！！！**

## 问题解决

### **1. 先检查 pip 路径**
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_the_pip_bug_while_updating_numpy_in_venv/20240304181122.png)

### **2. 修改环境变量 PYTHONPATH**
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_the_pip_bug_while_updating_numpy_in_venv/20240304181210.png)

### **3. 重新更新 numpy**
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_the_pip_bug_while_updating_numpy_in_venv/20240304181249.png)

关键命令

```shell
(.ros1) tianbot@ros2go:~$ echo $PYTHONPATH
/home/tianbot/study_ws/devel/lib/python3/dist-packages:/home/tianbot/manipulation_ws/devel/lib/python3/dist-packages:/home/tianbot/tianbot_mini_ws/devel/lib/python3/dist-packages:/home/tianbot/tianbot_ws/devel/lib/python3/dist-packages:/home/tianbot/catkin_ws/devel/lib/python3/dist-packages:/opt/ros/noetic/lib/python3/dist-packages
```

### **4. 总结一下**
关键就是要将`/usr/lib/python3/dist-packages`的系统路径从 `PYTHONPATH` 中移除。否则会一直干扰.ros1 中的 pip 命令。
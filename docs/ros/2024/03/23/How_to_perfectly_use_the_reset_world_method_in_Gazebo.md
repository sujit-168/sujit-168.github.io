---
title: 如何在 Gazebo 中完美使用 reset_world 方法
date: 2024-03-23 16:32
categories: [ros]
tags: [ROS,  Gazebo]
copyright: true
---

# 如何在 Gazebo 中完美使用 reset_world 方法

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_perfectly_use_the_reset_world_method_in_Gazebo/gazebo_reset_world.gif)

## 前提条件

在你的`.world` 文件中，你所添加的模型应当避免在重置时发生任何角度的旋转，除非是有特殊的需求。

- 基准参考模型的几何中心应该位于`Gazebo`的原点处。
- 基准参考模型的各参考轴与`Gazebo`的各个坐标轴平行，无任何`Euler`角上旋转。

## 如何使用 reset_world 方法

在 Gazebo 中，使用 reset_world 方法可以重置仿真环境。该方法可以接受一个参数，用于指定重置的方式。

```shell
rosservice call /gazebo/reset_world
```

## 需要 care 的 detail

在使用 reset_world 方法时，需要注意以下几点：

1. 重置后的仿真环境将恢复到初始状态。
2. 不要在 Gazebo 中有物体处于运动状态时调用 reset_world 方法，否则可能会导致物体模型被损坏或运动关节不可用等等。
3. 重置后的仿真环境将保持当前的仿真时间。
---
title: 使用 Blender 绘制墙体
date: 2024-04-13 20:49
categories: [Blender, ros, Gazebo]
tags: [ROS,  Gazebo,  .STL]
copyright: true
---

# 使用 Blender 绘制墙体

## 调高曲线坐标

![image-20240412234147373](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240412234147373.png)

## 曲线折点位置

**注意**

- 如果需要调整曲线的折弯点的位置，需要点击所属曲线，然后 Tab 键进入编辑模式，然后 N 键配置其位置
- 而在物体模式下按下 N 键，配置的是该曲线的中心点的位置

## 合并曲线

![image-20240413171650044](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413171650044.png)

合并的具体原因，主要是为了方便曲线挤出后的面实体化

## 沿着法线挤出

![image-20240413172541058](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413172541058.png)

注意此时墙壁仍然还只是一个平面，并不是一个具有厚度的实体，所以继续下一步

## 面的实体化

![image-20240413173950815](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413173950815.png)

![image-20240413174111007](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413174111007.png)

## 设置物体原点

![image-20240413155152191](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413155152191.png)

## 缩放尺度归一化

![image-20240413155526863](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413155526863.png)

应用变换后的结果

![image-20240413155855036](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413155855036.png)

在选取中选择部分显示后，确认没有墙体 wall 与地板 base 没有重叠的问题后

## 导出实体模型

在物体模式下选择需要导出的部分，无贴图时导出 STL 模型，有贴图时是导出 DAE 模型

### 导出 STL

![image-20240413174531341](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413174531341.png)

![image-20240413174744582](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413174744582.png)

### 导出 DAE

![image-20240413175330818](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413175330818.png)

![image-20240413175143433](https://cn-sy1.rains3.com/dfdfgf/blog/how_to_build_wall_for_gazebo_with_blender/image-20240413175143433.png)

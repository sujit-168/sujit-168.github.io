---
title: 如何将 map 和 world 文件的坐标轴进行对齐
date: 2024-03-24 14:06
categories: [ros]
tags: [ROS, Gazebo, .world, .pgm, .yaml]
copyright: true
---

# 如何将 map 和 world 文件的坐标轴进行对齐


## Rviz 显示对齐后的模型

```yaml
image: tianracer_racetrack.pgm                  # 注意：最好去除 map_server 保存该文件时在该行使用的绝对路径，降低了可移植性
resolution: 0.025000
origin: [-12.200000, -12.500000, 0.000000]      # 这里的 3 个数比较关键，在 map frame_id 下的 x(m),y,theta（rad）3 个关键参数    
negate: 0
occupied_thresh: 0.65
free_thresh: 0.196
```

## .pgm 文件

在`ROS`中，`.pgm`文件是 Rviz 显示地图时使用的文件，它保存了地图的像素信息。

::: tip TIPS
那么`.pgm`文件是什么呢？

PGM 文件是以便携式灰度图（PGM）格式保存的灰度图像文件，每个像素用一个或两个字节（8 或 16 位）进行编码。它包含标题信息和数字网格，这些网格表示从黑色（0）到白色（最多 65,536）的不同灰色阴影。PGM 文件通常存储在 ASCII 码 文本格式，但也有二进制表示形式。
:::

### 旋转图像

#### ImageViewer

一般情况下在`ImageViewer`中，可以对图像进行旋转操作。

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/image_view_rotate_defeat.gif)

::: info 提示
但是不支持`.pgm`格式哈
:::

#### GIMP

在`GIMP`中，可以对图像进行旋转操作。

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/gimp_rotate_success.gif)

#### 效果展示
map_server 导入旋转过后图片
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324155110.png)

## 如何检查

### axes

选择 axes 类型
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324151932.png)

可以看到，默认状态下的坐标轴朝向
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324152143.png)

然后手动选择参考系为`map`
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324152628.png)

可以看到，`axis` 参考为`map`,仍然符合预期。
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324152753.png)


## 坐标系对齐

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/align_the_origin_point_of_reading_picture.png)
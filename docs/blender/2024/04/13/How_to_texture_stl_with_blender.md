---
title: 使用 Blender 给 stl 文件贴图
date: 2024-04-13 21:45
categories: [Blender, ros, Gazebo]
tags: [ROS,  Gazebo,  .STL]
copyright: true
---

# 使用 Blender 给 stl 文件贴图

## 绘制地面

![image-20240412223203930](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412223203930.png)

## 贴图
选择图像纹理，然后选择你需要的贴图

![image-20240412223903045](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412223903045.png)

### 选择材质预览

![image-20240412224251312](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412224251312.png)

- 将**实体化后**的平面和曲线挤出 (**实体化**) 单独导出为 stl 模型
- 将具有深度值，封闭的贝赛尔曲线同样导出为 stl 模型
- 继续使用 blender，将刚才导出的两个 stl 文件再次导入，然后进行 UV 贴图
- 进入 model 模式，在编辑模式下切换至面选择模式

![image-20240412224834513](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412224834513.png)

框选平面

![image-20240412225023966](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412225023966.png)

点击 UV，再点击展开

![image-20240412225138684](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412225138684.png)

点击确定

![image-20240412225350576](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412225350576.png)

选择 UV Editing 模式

![image-20240412225449093](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412225449093.png)

- 在切换至 UV Editor 模式，查看，展开图是否对应，然后将展开图以图片格式进行导出

![image-20240412225819832](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412225819832.png)

### 合并三角面

![image-20240412230144518](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412230144518.png)


![image-20240412230510544](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412230510544.png)

此时 UV 贴图比较符合预期

![image-20240412230659510](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412230659510.png)

平面映射倒是完整，但是映射方向不对

![image-20240412231559365](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412231559365.png)


![image-20240412232130583](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240412232130583.png)

## 编辑贴图

- 使用 gimp 对图片进行编辑

![image-20240413180920188](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_texture_stl_with_blender/image-20240413180920188.png)

- 然后导出时将原来的.png 文件进行覆盖

- 注意，展开图与模型表面为顺时针旋转 180°(或者调整 UV 映射也可以)

- 此时在 blender 中添加材质，基础色选择为图像纹理，然后路径选择到刚才导出的图片，即可看到效果

## 导出

然后再导出.dae 文件即可

## 常见问题

### 贴图比例不正确
- UV 贴图时发现比例不对，则按下 A 键全选，Ctrl+A 键，点击应用变换，将 x,y,z 3 个方向的比例恢复为 1.
- 再次重复上述步骤直到满意为止
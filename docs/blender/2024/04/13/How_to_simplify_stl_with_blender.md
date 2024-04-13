---
title: 使用 Blender 简化 STL 文件
date: 2024-04-13 22:58
categories: [Blender, ros, Gazebo]
tags: [ROS,  Gazebo,  .STL]
copyright: true
---
# 使用 Blender 简化 STL 文件

- [Blender 模型轻量化教程](http://www.bimant.com/blog/simplify-mesh-with-blender/)

## 导入网格模型

首先导入需要精简的 STL 模型

![image-20240413175819129](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_simplify_stl_with_blender/image-20240413175819129.png)

## 使用精简几何体功能

在编辑模式下选择精简几何体

![image-20240413180125992](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_simplify_stl_with_blender/image-20240413180125992.png)

## 调整比率

改变比率即可控制网格模型的面数

![image-20240413180332335](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_simplify_stl_with_blender/image-20240413180332335.png)

一般建议这个值减少的 0.3 左右会比较合适，再低会丢失太多网格细节

## 导出精简后的模型
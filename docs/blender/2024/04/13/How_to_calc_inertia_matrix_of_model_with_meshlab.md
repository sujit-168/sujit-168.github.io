---
title: 如何使用 meshlab 计算模型的惯性矩阵
date: 2024-04-13 23:06
categories: [Blender, Meshlab, ros, Gazebo]
tags: [.STL ,.dae, Meshlab]
copyright: true
---

# 如何使用 Meshlab 计算 inertia Matrix

## 导入 DAE 模型

根据**gazebo**的官方文档，惯性系数矩阵需要借助**meshlab**工具来进行计算

- 使用**import mesh**功能时，导入 `.stl` 这种网格实体格式，或者 `.dae` 格式 (这个文件是将平面的`stl`网格模型导入，贴图后，再导出 `.dae` 后得到的)

如果遇到这种报错，则需要注意你导出的**DAE**文件存在问题

```bash
 'vcount'
****** LoadTriangularMesh (initial mesh size 8 0)
******    material id 'Material_002-material' -> '#Material_002-material'
====== searching among library_effects the effect with id 'Material_002-effect' 
******   but we were not able to find the corresponding image node
****** LoadTriangularMesh (final  mesh size 8 8 - 12 12)
**** Loading a Geometry Mesh **** (final   mesh size 8 8 - 12 12)
Segmentation fault (core dumped)
```

- 导入的`.stl`文件应为闭合的网格文件，否则会触发`waterlight`的不防水问题，导致无法正确计算惯性系数矩阵。解决方法为，将未封闭的网格封闭后重新导出。
- [Issue with volume calculation](https://stackoverflow.com/questions/45685571/issue-with-volume-calculation)

## 惯性矩阵各自计算

- 每个实体模型 (`stl`) 导出各自的惯性矩阵，不要图省事，导入一个 `.dae` 模型，整体计算，这种极容易出现抖动的问题

![image-20240413201440958](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_calc_inertia_matrix_of_model_with_meshlab/image-20240413201440958.png)

- 使用**Filter**下的**Quilty Measure and Computations**中的**compute Geometric Measures**功能

![image-20240403170542166](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_calc_inertia_matrix_of_model_with_meshlab/image-20240403170542166.png)

- 得到惯性张量矩阵即可使用

![image-20240403170214047](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_calc_inertia_matrix_of_model_with_meshlab/image-20240403170214047.png)

## 常见问题

### Segmentation Fault

导入 .**dae**格式的 mesh，软件直接**segmentation fault**，最后发现是应为该`.dae`文件包含了有重叠部分的文件，删除一个，再次导出 `.dae` 即可

### 没有惯性矩阵

没有计算出惯性矩阵，检查你的模型是否是一个封闭的实体

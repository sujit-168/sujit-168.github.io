---
title: 如何使用 Blender 构建 Gazebo 的赛道
date: 2024-04-06 11:23
categories: [Blender, ros, Gazebo]
tags: [ROS,  Gazebo,  .world,  .dae,  .STL]
copyright: true
---

# 如何正确导出一个 gazebo 的 world 文件

## 准备工作

- 一个带有 UV 贴图纹理的`.dae`文件
- 基于**Ubuntu 18.04**的**gazebo9** (兼容性好一些)

## 操作流程

### 进入 Model Editor 模式

1. 打开 gazebo，进入 Model Editor 模式

### 导入模型文件

1. 添加路径导入贴好 uv 贴图的.dae 文件，（此时导入进来的文件并无贴图效果）

### 手动对齐坐标轴

1. 对其坐标轴

### **SDF**模型保存

1. 此时需要先 save as 一个 gazebo 的 model 文件，此时仍然没有贴图效果
2. 保存时可以选择 Advanced 模式，填写上模型的版本，作者等信息

最后 exit 退出该模式，否则会丢失先前的工作。

### 保存 world 文件

1. 此时来到主页面，无需多余的其他操作，保存为一个.world 为后缀的 sdf 文件。

### 查看 world 文件

```shell
gazebo xxxx/xxx.world
```

## 常见问题

### 在 gazebo 主界面导入带贴图的 sdf 模型时

可以正常添加，但是挪动视角时，Gazebo 会卡死。自然无法继续创建.world 文件。如需创建.world 文件，参考上面的方法

::: info 原因分析
这个多半是你的实体模型文件网格面数过多，比如一个曲面 (通常它的体积会在远在 100kb 之上),此时建议考虑使用 blender 或者其他软件对模型进行精简，以减少网格的面数
:::

### 使用 gazebo 命令无法启动窗口

```shell
pkill -9 gzserver
```

### 保存.world 文件时卡住

保存时间比较久，需要等一会



### Gazebo 加载 world 很慢

这个问题通常是由于 **world** 文件中 模型的路径问题导致的

- 将`<uri>`标签的全局路径修改为 `model:// + 相对路径`

```xml
  <mesh>
      <uri>test/meshes/base_link.dae</uri>
      <scale>1 1 1</scale>
  </mesh>
```

### 贴图不显示问题

打开先前保存的 **world** 文件，删除其中包含的所有`<material>`标签，即可正常显示

```xml
    <material>
      <lighting>1</lighting>
      <script>
        <uri>file://media/materials/scripts/gazebo.material</uri>
        <name>Gazebo/Grey</name>
      </script>
      <shader type='pixel'/>
    </material>
```



blender 导出的.dae 文件在 gazebo 中加载时，颜色会特别暗淡，需要修改一些文件中的参数

```xml
    <emission>
        <color sid="emission">1 1 1 1</color>
    </emission>
    <ambient>
        <color sid="ambient">1 1 1 1</color>
    </ambient>
```

- [Gazebo 贴图模型制作与导入](https://zhuanlan.zhihu.com/p/454908515)



### 贴图闪烁问题

这个问题，需要切换观察视角到地板的下方，看地板模型是否是一个实体，通常仅仅是一个悬空的平面会出现这样的问题


### 模型出现掉落，抖动问题

这个问题通常是惯性系数不正确引起，根据 gazebo 的官方文档，惯性系数矩阵需要借助 meshlab 工具来进行计算


::: tip 注意
- 使用 import mesh 功能时，导入.stl 这种网格实体格式，不要导入.dae 格式
- 导入的.stl 文件应为闭合的网格，否则会触发 waterlight 的不防水问题，导致无法正确计算惯性系数矩阵。解决方法为，将未封闭的网格封闭后重新导出。参考[Issue with volume calculation](https://stackoverflow.com/questions/45685571/issue-with-volume-calculation)
- 每个实体模型 (stl) 导出各自的惯性矩阵，不要图省事，导入一个 dae 模型，整体计算，这种极容易出现抖动的问题
- 使用 Filter 下的 Quilty Measure and Computations 中的 compute Geometric Measures 功能
:::

具体操作细节参考[如何使用 meshlab 计算模型的惯性矩阵](../../04/13/How_to_calc_inertia_matrix_of_model_with_meshlab.md)



### Reset_world 后模型出现抖动

1. 首先确保惯性系数与 meshlab 计算一致
2. gazebo 加载 world 时没有问题，但是 reset world 后赛道模型一直抖动，原因多半是地板 base_link 与 wall_link 模型中的放置位置有重叠部分.(解决方法是在 blender 中重新设置两模型的位置，避免有重叠部分，然后重新导出 stl)

::: tip 原因
gazebo 首次加载时，模型自上而下掉落放置，而使用 reset_world 时，模型则是按照 world 文件中的预设位置，直接放置，此时如果模型之间有重合部分，即出现刚体之间的 collapse 问题。
:::
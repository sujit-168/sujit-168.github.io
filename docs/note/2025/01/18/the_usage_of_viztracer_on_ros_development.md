---
title: VizTracer 在 ROS 开发中的使用
date: 2025-01-18 13:08
categories: [VizTracer,  Python]
tags: [VizTracer,  Python]
copyright: true
---

# viztracer 在 ROS 开发中的使用

VizTracer 是一种低开销的日志记录/调试/分析工具，可以跟踪和可视化您的 python 代码执行。

![](https://mirror.ghproxy.com/https://github.com/gaogaotiantian/viztracer/raw/master/img/example.png)

前端 `UI` 由 `Perfetto` 提供支持。使用`A`、`W`、`S`、`D`缩放/导航。

感谢 `VizTracer` 的作者[大佬高天](https://github.com/gaogaotiantian/)开发的 python 调试、分析利器[VizTracer](https://github.com/gaogaotiantian/viztracer)

## 特点

- 在时间轴上详细记录了函数进入/退出信息以及完整源代码
- 超级易于使用，大多数功能无需更改源代码，无包依赖性
- 性能开销低，可能是市场上最快的跟踪器
- 支持线程、多处理、子进程、异步和 PyTorch 的调试
- 使用了强大的前端框架，能够流畅渲染 GB 量级的跟踪数据
- 良好的跨平台特性，适用于 Linux/MacOS/Windows

##  基本环境安装

- pip 安装 VizTracer

```bash
pip install viztracer
```

## VSCode 安装及配置
- 安装 VizTracer

vscode 插件市场搜索 `VizTracer` 安装即可

![](https://cn-sy1.rains3.com/dfdfgf/blog/the_usage_of_viztracer_on_ros_development/viztracer_install_vsocde.png)

- 配置 VizTracer 扩展
![](https://cn-sy1.rains3.com/dfdfgf/blog/the_usage_of_viztracer_on_ros_development/viztracer_vsocde_setting.png)

这样，就可以在运行时，自动生成 VizTracer 的追踪文件，并自动打开浏览器进行查看


## 在命令行中运行 VizTracer

在命令行中运行 VizTracer，并指定要跟踪的 python 文件
- [命令行使用](https://viztracer.readthedocs.io/en/latest/basic_usage.html)


### 无需传参运行 VizTracer
生成 VizTracer 的可视化文件`result.json`
```bash
python3 -m viztracer my_script.py
```

在浏览器中打开 VizTracer 的可视化文件
```bash
vizviewer result.json
```

::: tip 技巧
可以在使用时添加`--open`参数，这样就可以在运行时自动打开浏览器进行查看，完整命令如下：
```bash
python3 -m viztracer --open my_script.py
```
:::


### 传参运行 VizTracer

```bash
python3 -m viztracer my_script.py arg1 arg2
```

## VSCode 中运行 VizTracer

![](https://mirror.ghproxy.com/https://github.com/gaogaotiantian/VizTracer-vscode/raw/master/assets/demo.gif)


### VizTracer 追踪 ROS 程序

![](https://cn-sy1.rains3.com/dfdfgf/blog/the_usage_of_viztracer_on_ros_development/cam_img_display.png)

可以详细看到，程序在运行时的调用栈，以及函数的执行时间等关键细节信息

#### 完整的时间线追踪

![](https://cn-sy1.rains3.com/dfdfgf/blog/the_usage_of_viztracer_on_ros_development/all_timeline.png)

#### `create_subscription` 函数调用栈

可以看到订阅者创建的调用栈持续了 30 ms
![](https://cn-sy1.rains3.com/dfdfgf/blog/the_usage_of_viztracer_on_ros_development/create_sub.png)

#### `spin_once` 函数调用栈

而 `spin_once` 函数调用栈单次持续了 124ms 秒，与订阅者创建的调用栈相比，两者相差约 4 倍。
![](https://cn-sy1.rains3.com/dfdfgf/blog/the_usage_of_viztracer_on_ros_development/spin_once.png)

有了这些信息，我们就可以非常容易得可视化的找到性能瓶颈位置，并针对程序进行优化。

## 限制

- VizTracer 使用 sys.setprofile() （Python3.12 之前）和 sys.monitoring（Python3.12 之后）作为其分析器功能，因此它会与也使用这些机制的其他分析工具发生冲突。使用 VizTracer 时要注意这一点

- WSL1 上的时钟分辨率和延迟非常糟糕，因此如果您使用 WSL1，您可能会遇到额外的开销。除了升级到 WSL2 之外，没有其他解决方案。

- VizTracer 与其他需要在模块内执行任意代码的 Python 工具一样，可能会与检查顶层模块或具有其他结构要求的代码发生冲突。例如，如果您从命令行使用 VizTracer，unittest.main() 将不起作用。有一些方法可以避免它。您可以使用内联 VizTracer，它始终有效。或者您可以将模块指定为 unittest.main() ，这不是通用解决方案，但无需进行太多代码更改即可工作。

## 参考

<div id="refer-anchor-1"></div>

- [1] [VizTracer](https://viztracer.readthedocs.io/en/latest/)

<div id="refer-anchor-2"></div>

- [2] [VizTracer VSCode 插件](https://github.com/gaogaotiantian/viztracer-vscode)
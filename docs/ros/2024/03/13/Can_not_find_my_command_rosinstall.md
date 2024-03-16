---
title: 找不到命令 rosinstall
date: 2024-03-13 18:37:19
categories: [ROS]
tags: [ROS1, .rosinstall]
copyright: true
---

# 找不到命令 rosinstall

## 如何安装
参考文章[Can't find my command "rosinstall"](https://answers.ros.org/question/32329/cant-find-my-command-rosinstall/)，rosinstall 并未作为 debian 软件包的一部分安装。可以使用 pip 安装，方法如下
```shell
pip install -U rosinstall
```
等待片刻，安装完成。

## 问题重现

执行如下命令
```shell
tianbot@ros2go:~/turtlebot_ws/src/turtlebot$ rosinstall . turtlebot.rosinstall 
```

终端显示`yaml.load(f) typeerror load() missing 1 required positional argument 'loader'`,然后进程意外退出。

搜索一番后，参考文章[解决报错：TypeError: load() missing 1 required positional argument: ‘Loader‘](https://blog.csdn.net/qq_44824148/article/details/122337056)，找到了解决问题的思路，问题出在`PyYAML`这个`Python`模块上。

## 解决方法

### 确认 PyYAML 版本

```shell
tianbot@ros2go:~$ pip3 list | grep PyYAML
PyYAML                        6.0.1

[notice] A new release of pip is available: 23.3.1 -> 24.0
[notice] To update, run: pip install --upgrade pip
```
当前版本为`6.0.1`，需要修改代码调用

### 修改代码调用

修改报错脚本文件
```shell
sudo vi /usr/lib/python3.8/site-packages/wstool/config_yaml.py
```

将有问题的代码段，对报错提示的 74 行代码进行修改
```python
将 yamldata = yaml.load(stream)
# 替换为下面这行
yamldata = yaml.load(stream, Loader = yaml.FullLoader)
```


再次执行如下命令
```shell
tianbot@ros2go:~/turtlebot_ws/src/turtlebot$ rosinstall . turtlebot.rosinstall 
```

```shell
rosinstall operating on /home/tianbot/turtlebot_ws/src/turtlebot from specifications in rosinstall files  turtlebot.rosinstall
(Over-)Writing /home/tianbot/turtlebot_ws/src/turtlebot/.rosinstall
Prepare updating https://github.com/turtlebot/turtlebot.git (version indigo) to /home/tianbot/turtlebot_ws/src/turtlebot/turtlebot
Failed to detect git presence at /home/tianbot/turtlebot_ws/src/turtlebot/turtlebot.
  (d)elete and replace, (a)bort, (b)ackup and replace, (s)kip: 
```
输入`s`跳过，问题解决。
---
title: Ubuntu 开机自动启动 Vino Server
date: 2024-05-30 09:39
categories: [note]
tags: [linux,  vino,  startup application]
copyright: true
---

# Ubuntu 开机自动启动 Vino Server

## Auto Login

`Vino Server`和`Startup Application`，在用户没有`login`到桌面 , 是不会启动的。

- 自动登录和输入密码登录桌面在使用体验上还是不一样的

### 设置自动登录

![img](https://cn-sy1.rains3.com/dfdfgf/blog/Automatically_start_Vino_Server_on_Ubuntu_startup/66d2f5fcb5cef67010f058bdb1e8c9a1.png)

### 可能的报错解决

终端输入

```
gnome-control-center
```

遇到报错

```bash
can't load /usr/lib/x86_64-linux-gnu/spa/support/libspa-support.so: /usr/lib/x86_64-linux-gnu/spa/support/libspa-support.so: cannot open shared object file: No such file or directory
```

解决方式：

```bash
sudo apt install pipewire
```

- [Ubuntu 设置无法打开提示 libspa-support.so: cannot open shared object file: No such file or directory](https://blog.csdn.net/qq_37580586/article/details/131793835)

## Solution

具体的解决方案

### 1. 创建自启动脚本

创建脚本 **start_vino.sh**

```bash
#optional
pkill vino
export DISPLAY=:0.0
/usr/lib/vino/vino-server &
```

### 2. 脚本提权

```bash
chmod a+x start_vino.sh
```

### 3. 添加自启动项目

搜索 `Startup Applications` , 把 `start_vino.sh` 加到自动启动项目

![image-20240529145744718](https://cn-sy1.rains3.com/dfdfgf/blog/Automatically_start_Vino_Server_on_Ubuntu_startup/image-20240529145744718-17169659150991.png)

### 4. 自动登录

把这个账户设置成 `Automatic Login`

![img](https://cn-sy1.rains3.com/dfdfgf/blog/Automatically_start_Vino_Server_on_Ubuntu_startup/66d2f5fcb5cef67010f058bdb1e8c9a1.png)

## Reference

- [ROS 节点开机自启动](http://admin.guyuehome.com/18734)
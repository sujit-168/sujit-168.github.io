---
title: 如何清除 Ubuntu 中的 journal、VScode 和 pip 缓存
date: 2024-03-03 11:51:20
categories: [note]
tags: [VScode,  pip, journal, Ubuntu]
copyright: true
---

# 如何清除 Ubuntu 中的 journal、VScode 和 pip 缓存

## 1. 清理 journal 缓存

清除缓存和日志

```
(base) user@ubuntu:~$ journalctl --disk-usage 
Archived and active journals take up 2.2G in the file system.

(base) user@ubuntu:~$ cd /var/log/journal/
(base) user@ubuntu:~$ sudo rm -rf fa1bd666c72b41db99ad421752842c3f/
```

以下三个命令主要清理升级缓存以及无用包

```
sudo apt-get autoclean                # 删除旧版本软件缓存
sudo apt-get clean                    # 删除系统内所有软件缓存
sudo apt-get autoremove             # 删除系统不再使用的孤立软件
```

- [ubuntu 清理空间技巧 包含【系统日志、缓存、无用包、内核、VScode、conda、snap、pip】](https://blog.csdn.net/m0_50181189/article/details/119855107)

## 2. 清理 VSCode 缓存

### workspaceStorage
- [清理 Vscode 的缓存以及完全删除 Vscode](https://zhuanlan.zhihu.com/p/378226947)

- [【Linux】36.ubuntu 删除 vscode 的缓存，可清理出几十 G 空间](https://blog.csdn.net/u011754972/article/details/120764945)

- [Linux 下清理 VScode 缓存 ms-vscode.cpptools](https://blog.csdn.net/p1279030826/article/details/119774474)

切换到 VS code 的插件目录下

```
(base) user@ubuntu:~$ cd ~/.config/Code/User/workspaceStorage/
```

查看该插件目录及其文件的大小

```
(base) user@ubuntu:~/.config/Code/User$ du workspaceStorage/ -h
(base) user@ubuntu:~/.config/Code/User/workspaceStorage$ du -h
```

删除当前目录下的所有文件及目录

```
(base) user@ubuntu:~/.config/Code/User/workspaceStorage$ rm -rf *
```

一篇不错的环境配置教程：[Ubuntu20.04 下安装 VSCode（配置 C/C++ 开发环境）](https://blog.csdn.net/fangshuo_light/article/details/123635576)

### ms-vscode.cpptools

根据这篇 [discussions](https://github.com/microsoft/vscode-cpptools/discussions/10637) 的提示，我尝试清理了 VSCode 的缓存，发现并没有影响 VScode 的使用。
```shell

cd ~/.cache/ && du vscode-cpptools/ -h     # 查看vscode-cpptools 目录大小
cd vscode-cpptools/ && rm -rf *            # 删除vscode-cpptools 目录下所有文件及目录
cd .. && du vscode-cpptools/ -h            # 验证vscode-cpptools 目录大小
```

**cpp-tools**

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_clear_VScode_and_pip_cache_in_Ubuntu/cpp-tool.png)

.**cache**

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_clear_VScode_and_pip_cache_in_Ubuntu/disk_usage_analysis.png)

## 3. 清理 pip 缓存

- [How to Clear pip Cache Correctly in Python](https://www.youtube.com/watch?v=svZlF8euOfk)
- [[Python] pip 清除缓存](https://blog.csdn.net/weixin_43742643/article/details/113547401)
- [**pip 清理 cache 缓存**](https://parker2020.gitee.io/blogs/2021/03/15/pip%E6%B8%85%E7%90%86cache%E7%BC%93%E5%AD%98/)

```shell
ruoxi@ruoxi:~$ pip uninstall PythonTurtle
Found existing installation: PythonTurtle 0.3.2
Uninstalling PythonTurtle-0.3.2:
  Would remove:
    /home/ruoxi/.local/bin/PythonTurtle
    /home/ruoxi/.local/lib/python3.6/site-packages/PythonTurtle-0.3.2.dist-info/*
    /home/ruoxi/.local/lib/python3.6/site-packages/pythonturtle/*
Proceed (Y/n)? y
  Successfully uninstalled PythonTurtle-0.3.2
ruoxi@ruoxi:~$ pip install --no-cache-dir PythonTurtle
Defaulting to user installation because normal site-packages is not writeable
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple, https://pypi.ngc.nvidia.com
^CERROR: Operation cancelled by user

```

清除 pip cache

```shell
ruoxi@ruoxi:~$ pip cache purge
ERROR: pip cache commands can not function since cache is disabled.   # 显示该功能已关闭

ruoxi@ruoxi:~$ pip config set global.cache-dir false                  # 使用pip命令关闭cache dir
Writing to /home/ruoxi/.config/pip/pip.conf
ruoxi@ruoxi:~$ cat /home/ruoxi/.config/pip/pip.conf
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
no-cache-dir = true
extra-index-url = 
	https://pypi.ngc.nvidia.com
trusted-host = 
	pypi.ngc.nvidia.com
cache-dir = false

ruoxi@ruoxi:~$ gedit /home/ruoxi/.config/pip/pip.conf
ruoxi@ruoxi:~$ cat /home/ruoxi/.config/pip/pip.conf
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
# no-cache-dir = true  # 这行是原来的，即导致ERROR: pip cache commands can not function since cache is disabled.
extra-index-url = 
	https://pypi.ngc.nvidia.com
trusted-host = 
	pypi.ngc.nvidia.com
cache-dir = false      # 新添加的命令，可以正常使用

ruoxi@ruoxi:~$ pip cache purg
WARNING: No matching packages
Files removed: 0
```

再次验证，已关闭 pip cache 存储，成功

```shell
ruoxi@ruoxi:~$ pip install PythonTurtle
Defaulting to user installation because normal site-packages is not writeable
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple, https://pypi.ngc.nvidia.com
Collecting PythonTurtle
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/5e/df/b83ffcf5626d59af2247d257cb252996df0559f2e07bec3de1bad9a619f0/PythonTurtle-0.3.2-py3-none-any.whl (518 kB)
     |████████████████████████████████| 518 kB 1.0 MB/s            
Installing collected packages: PythonTurtle
Successfully installed PythonTurtle-0.3.2
ruoxi@ruoxi:~$ pip uninstall PythonTurtle
Found existing installation: PythonTurtle 0.3.2
Uninstalling PythonTurtle-0.3.2:
  Would remove:
    /home/ruoxi/.local/bin/PythonTurtle
    /home/ruoxi/.local/lib/python3.6/site-packages/PythonTurtle-0.3.2.dist-info/*
    /home/ruoxi/.local/lib/python3.6/site-packages/pythonturtle/*
Proceed (Y/n)? y
  Successfully uninstalled PythonTurtle-0.3.2
ruoxi@ruoxi:~$ pip install PythonTurtle
Defaulting to user installation because normal site-packages is not writeable
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple, https://pypi.ngc.nvidia.com
^CERROR: Operation cancelled by user
ruoxi@ruoxi:~$ 
```

```shell
ruoxi@ruoxi:~$ pip cache info
Package index page cache location: /home/ruoxi/false/http
Package index page cache size: 542 kB
Number of HTTP files: 7
Wheels location: /home/ruoxi/false/wheels
Wheels size: 0 bytes
Number of wheels: 0
ruoxi@ruoxi:~$ pip cache list
Nothing cached.
```
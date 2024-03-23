---
title: 如何在 VScode 中跑一个从 github 上 fork 下来的前后端项目
date: 2024-02-21 14:24
categories: [note, app]
tags: [VScode,github,fork,frontend,backend,TkinterDesign]
copyright: true
---

# 如何在 VScode 中跑一个从 github 上 fork 下来的前后端项目

## 前言
Tkinter Designers 是基于 Tkinter 的桌面 UI 设计工具，使用它可以快速创建桌面应用程序的 UI 界面。常用的 GUI 框架有 QT、wxPython、Tkinter，Electon、，它们各有优劣。

韦神的回答：https://www.zhihu.com/question/32703639/answer/2311119286
（省流，推荐 PyQT）

怎么说呢，确实很有道理，选一个趁手的框架，能快速开发出产品级别的桌面应用，那真的是太棒了。

## 为什么要运行这个项目

1. 因为最近有个基于 Tkinter 的项目，需要一个美观的前端界面，也需要后端的业务逻辑处理，所以准备找个轮子作为参考。
2. 这个项目是一个桌面端项目，前端是使用 [Tkinter-Design](https://github.com/ParthJadhav/Tkinter-Designer) 设计的，后端是使用 Python 编写的，使用了 mysql 数据库存储业务数据。

## 直击主题

### 1. 下载项目

```bash
git clone https://github.com/Just-Moh-it/HotinGo.git
```

### 2. 安装依赖

查看 README.md，安装依赖
```bash
pip install -r requirements.txt
```

### 3. 配置数据库

主要是安装 mysql 数据库，并创建数据库表。
这就有点尴尬了，因为我的电脑上没有安装 mysql，所以需要先安装 mysql，并创建数据库表。
```bash
sudo apt install mysql-server
```

然后运行 mysql 服务
```bash
sudo service mysql start
```

接着以 root 用户身份登录 mysql
```bash
sudo mysql
```

新手朋友可以参考 https://www.lanmper.cn/mysql/t7457

并创建新用户
```sql
CREATE USER 'user'@'localhost' 
IDENTIFIED BY '123456';

然后授权
GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost';

刷新权限
FLUSH PRIVILEGES;
```

最后退出 mysql 服务
```bash
exit;
```

然后根据提示，将 sql/hms.sql 的内容直接复制粘贴到 MySQL 命令行中配置数据库，无报错，即完成配置。

### 4. 运行

运行项目只需要简单的 1 行命令
```bash
python3 main.py
```
此时运行会输出如下的报错
```bash
(.ros1) tianbot@ros2go:~/Workspace/HotinGo$ python main.py 
Traceback (most recent call last):
  File "/home/tianbot/.ros1/lib/python3.8/site-packages/mysql/connector/connection_cext.py", line 323, in _open_connection
    self._cmysql.connect(**cnx_kwargs)
_mysql_connector.MySQLInterfaceError: Access denied for user 'password'@'localhost' (using password: NO)

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "main.py", line 2, in <module>
    from gui.login.gui import loginWindow
  File "/home/tianbot/Workspace/HotinGo/gui/login/gui.py", line 4, in <module>
    from controller import *
  File "/home/tianbot/Workspace/HotinGo/controller.py", line 14, in <module>
    connection = mysql.connector.connect(
  File "/home/tianbot/.ros1/lib/python3.8/site-packages/mysql/connector/pooling.py", line 322, in connect
    return CMySQLConnection(*args, **kwargs)
  File "/home/tianbot/.ros1/lib/python3.8/site-packages/mysql/connector/connection_cext.py", line 140, in __init__
    self.connect(**kwargs)
  File "/home/tianbot/.ros1/lib/python3.8/site-packages/mysql/connector/abstracts.py", line 1363, in connect
    self._open_connection()
  File "/home/tianbot/.ros1/lib/python3.8/site-packages/mysql/connector/connection_cext.py", line 328, in _open_connection
    raise get_mysql_exception(
mysql.connector.errors.ProgrammingError: 1045 (28000): Access denied for user 'password'@'localhost' (using password: NO)
```

## 解决方案

查看**controller.py**，发现需要配置数据库用户和数据库密码。
```python
# SQL Connection
connection = mysql.connector.connect(
    host=config.get("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=config.get("DB_NAME"),
    port="3306",
    autocommit=config.get("DB_AUTOCOMMIT"),
)
```
解决方法
```shell
export DB_USER=tianbot
export DB_PASSWORD=sujie-168
python main.py 
```

## 效果展示

**登录页**
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_run_a_front_backend_project_forked_from_github/HOTINGO.png)

**首页**
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_run_a_front_backend_project_forked_from_github/HOTINGO-1.png)

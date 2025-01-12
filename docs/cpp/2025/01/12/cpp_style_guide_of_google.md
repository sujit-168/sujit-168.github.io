---
title: Google C++ 风格指南概述
date: 2025-01-12 20:42
categories: [cpp]
tags: [cpp,  google]
copyright: true
---

# Google C++ 风格指南概述

### 命名约定

函数命名，变量命名、文件命名要有描述性，少用缩写

### 文件命名

文件名要全部小写，用下划线 (`_`) 连起来，c++ 文件要以 `.cc` 结尾，头文件以 `.h` 结尾，专门插入文本的文件以 `.inc` 结尾

### 类命名

类的每个单词首字母均大写，不包含下划线，比如：`MyExcitingClass`

### 变量命名

变量名一律小写，单词之间用下划线连接

类的成员变量以下划线 (`_`) 结尾

结构体成员变量和类一样

### 常量命名

在全局或类里的常量名称前加 k: `kDaysInAWeek`. 且除去开头的 `k` 之外每个单词开头字母均大写。

所有编译时常量，无论是局部的，全局的还是类中的，和其他变量稍微区别一下。k 后接大写字母开头的单词：

`const int kDaysInAWeek = 7;`

### 函数命名

常规函数使用大小写混合，如 `MyExcitingFunction()`

如果您的某函数出错时就要直接 crash, 那么就在函数名加上 `OrDie`.

取值（`Accessors`）和设值（`Mutators`）函数要与存取的变量名匹配，用小写：`int num_entries() const { return num_entries_; }`

### 函数参数

跟变量命名一样

### 宏命名

全部大写，像这样命名：`MY_MACRO_THAT_SCARES_SMALL_CHILDREN`

### 总结

Google 的命名约定很高明，比如写了简单的类 `QueryResult`, 接着又可以直接定义一个变量 `query_result`, 区分度很好；再次，类内变量以下划线结尾，那么就可以直接传入同名的形参，比如 `TextQuery::TextQuery(std::string word) : word_(word) {}` , 其中 `word_` 自然是类内私有成员。

## 图解

[voidccc](https://blog.csdn.net/voidccc/article/details/37599203)制作了一个图解，可以参考一下
![](https://img-blog.csdn.net/20140713220242000)

- [Google C++ 风格指南](https://zh-google-styleguide.readthedocs.io/en/latest/google-cpp-styleguide/)
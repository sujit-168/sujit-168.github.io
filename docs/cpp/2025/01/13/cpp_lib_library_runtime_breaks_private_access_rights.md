---
title: 我的黑科技，让 C++ 可以访问 private 成员
isOriginal: false
author: zencodex
date: 2015/03/23 17:19
articleTitle: 我的黑科技，让 C++ 可以访问 private 成员
articleLink: https://www.yinqisen.cn/blog-530.html
categories:
 - cpp
tags:
 - cpp
---

# C++ lib 库运行期突破 private 访问权限

严格说，C++ 的禁止外部类访问 private 是指在编译期，运行期都是在内存中的数据，是可以做任何修改的。本文的方式讲的就是针对运行期如何修改。

这个方案源于 N 年前有个第三方实现的静态库，我们没有代码，只有库的头文件声明和编译好的 `lib` 库。在一个类的头文件中，有个私有变量存储的是 `Color` 值，但库的开放接口却没有能力修改这个值。

### 方法

通过头文件的类定义，算出该私有变量在内存中的偏移值，有了偏移值，就可以通过获取该类实例在内存中的地址，从而算出私有变量的内存地址。需要对 class 内存结构有所了解，如图：

- [浅析 C++ 类的内存布局](https://www.zhihu.com/tardis/zm/art/380147337?source_id=1003)
- [C++ 对象内存模型](https://tangocc.github.io/2018/03/20/cpp-class-memory-struct/)
- [C++ 类的内存结构](https://www.cnblogs.com/sinpo828/p/13156042.html)

具体实现代码：

```bash
        // 获取开始内存地址
        volatile char *pThis = (char *)&pRichEditChatLogEx;

        volatile CHARFORMAT2 cf;
        ZeroMemory((char *)&cf, sizeof(CHARFORMAT2));
        cf.cbSize          = sizeof(CHARFORMAT2);
        cf.crTextColor     = RGB(0, 0, 0);
        cf.yHeight         = 20 * 10;
        cf.dwMask          = CFM_COLOR | CFM_FACE | CFM_SIZE | CFM_PROTECTED;
        cf.dwEffects       = 0;
        cf.bCharSet        = 134;
        cf.bPitchAndFamily = 34;

        // 算偏移地址，篇幅原因，不贴出具体类的定义了
        // 下面的公式是取基类最后结束的偏移，仔细想想，是从屁股开始往前推...
        int endOffset = sizeof(CRichEditChatLogEx) * 2 - sizeof(CRichEditChatLog);

        // 通过调试内存看出，DEBUG下，内存多4个字节
    #if _DEBUG
        volatile int offset = endOffset - sizeof(CHARFORMAT2) - 20;
    #else
        volatile int offset = endOffset - sizeof(CHARFORMAT2) - 24;
    #endif

        // 内存写入要修改的值，注意千万不要超出数据长度哦，否则就是场灾难
        memcpy((char *)&pThis[offset], (char *)&cf, sizeof(CHARFORMAT2));
```
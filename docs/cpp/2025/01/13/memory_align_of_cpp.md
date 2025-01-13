---
title: cpp 中的内存对齐
date: 2025-01-14 00:01
categories: [cpp]
tags: [cpp]
copyright: true
---

# cpp 中的内存对齐

## 为什么需要内存对齐

需要字节对齐的根本原因在于 CPU 访问数据的效率问题。假如没有字节对齐，那么一个 `double` 类型的变量可能存储在 4-11 上（正常是 0-7），这样计算机在取这个数据时，会取两次，降低效率。而如果变量在自然对齐位置上，则只要一次就可以取出数据。一些系统对对齐要求非常严格，比如 sparc 系统，如果取未对齐的数据会发生错误。

内存对齐是编译器对程序中数据的内存分配的一种优化方式。内存对齐的目的是为了提高内存系统的性能，减少内存访问的次数，从而提高程序的性能。

- `sizeof` 运算符用于计算一个对象或类型所占的内存空间大小（以字节为单位）。在 `C++` 中，为了提高访问内存的效率，编译器会对结构体中的成员进行内存对齐。
- 提高访问内存的速度：现代处理器对内存的访问往往是按块进行的，如果数据按对齐方式存放，可以减少访问次数，提高效率。
- 兼容不同的硬件平台：不同的硬件平台对数据对齐的要求可能不同，内存对齐可以保证程序在不同平台上的兼容性。

## struct 内存对齐代码示例

### 编译器优化
**main.cpp**
```cpp
#include <iostream>
using namespace std;

struct X1
{
  int i;    //4 个字节
  char c1;  //1 个字节
  char c2;  //1 个字节
};

struct X2
{
  char c1;  //1 个字节
  int i;    //4 个字节
  char c2;  //1 个字节
};

struct X3
{
  char c1;  //1 个字节
  char c2;  //1 个字节
  int i;    //4 个字节
};

int main()
{   
    cout<<"long "<<sizeof(long)<<"\n";
    cout<<"float "<<sizeof(float)<<"\n";
    cout<<"int "<<sizeof(int)<<"\n";
    cout<<"char "<<sizeof(char)<<"\n";

    X1 x1;
    X2 x2;
    X3 x3;

    cout<<"x1 的大小 "<<sizeof(x1)<<"\n";
    cout<<"x2 的大小 "<<sizeof(x2)<<"\n";
    cout<<"x3 的大小 "<<sizeof(x3)<<"\n";
    return 0;
}
```

**输出**
```
long 8
float 4
int 4
char 1
x1 的大小 8
x2 的大小 12
x3 的大小 8
```

#### 内存对齐规则
- 由于在 `x86` 下，`GCC` 默认按 4 字节对齐，但是可以使用`__attribute__`选项改变对齐规则，`vs studio` 上用`#pragma pack (n)` 方式改变
- 结构体成员的地址必须是其类型大小的整数倍。例如，int 型变量的地址必须是 4 的倍数。
- 基本数据类型：`long、float、int、char` 在 32 位系统中通常分别占用 `4、4、4、1` 字节。

### 输出结果分析
为什么会出现这样的输出？
是由于在 C++ 中，为了提高访问内存的效率，编译器会对结构体中的成员进行内存对齐。
- 内存对齐是导致结构体大小与成员类型大小之和不一致的主要原因。
- 编译器会根据不同的数据类型和系统设置进行内存对齐，以优化程序性能。
- 结构体`成员的排列顺序`会影响结构体的大小。

#### 结构体 `X1`、`X3`

- `x1`：int 占 4 字节，每个 `char` 各占 1 字节。为了对齐，编译器会在 `char c2` 后面再填充 2 个字节，使得 `int i` 的地址是 4 的倍数。因此，整个结构体占 $4+(1+1+2) = 8$ 字节。

- `x3`：与 `x1` 类似，在 `char c2` 后面填充 2 个字节，总共也是 $(1+1+2)+4 = 8$ 字节。

#### 结构体 X2
- `x2`：`char c1` 占 1 字节，int i 占 4 字节。为了对齐，编译器会在 `int i` 后面填充 3 个字节，使得 `char ch2` 的地址是 1 的倍数。然后，为了使整个结构体的长度是 4 的倍数，又在 `char c2` 后面再填充 3 个字节。因此，整个结构体占 $(1+3) + 4 + (1+3) = 12$ 字节。

### 代码优化建议
合理安排成员顺序：将占用字节数大的成员放在前面，可以减少填充字节的数量，从而减小结构体的大小。

### 取消内存对齐
在某些情况下，可以使用`#pragma pack` 指令来控制结构体的对齐方式，但过度使用可能会降低程序性能。
示例：

```C++
#include <iostream>
using namespace std;

struct X1
{
  int i;    //4个字节
  char c1;  //1个字节
  char c2;  //1个字节
};

#pragma pack(1)
struct X2
{
  char c1;  //1个字节
  int i;    //4个字节
  char c2;  //1个字节
};
#pragma pack()

struct X3
{
  char c1;  //1个字节
  char c2;  //1个字节
  int i;    //4个字节
};

int main()
{   
    cout<<"long "<<sizeof(long)<<"\n";
    cout<<"float "<<sizeof(float)<<"\n";
    cout<<"int "<<sizeof(int)<<"\n";
    cout<<"char "<<sizeof(char)<<"\n";

    X1 x1;
    X2 x2;
    X3 x3;
    cout<<"x1 的大小 "<<sizeof(x1)<<"\n";
    cout<<"x2 的大小 "<<sizeof(x2)<<"\n";
    cout<<"x3 的大小 "<<sizeof(x3)<<"\n";
    return 0;
}
```

输出为
```bash
long 8
float 4
int 4
char 1
x1 的大小 8
x2 的大小 6
x3 的大小 8
```
上面的代码会强制将结构体 `X2` 中的成员按 1 字节对齐，从而减少结构体的大小。但是，需要注意的是，这种方式可能会降低程序性能，因此需要谨慎使用。

::: info
内存对齐的具体规则可能因编译器和系统而异。
过度关注内存对齐可能会导致代码可读性降低，因此在优化时需要权衡利弊。
:::

- [struct 的内存对齐规则](https://github.com/guaguaupup/cpp_interview/blob/main/C%2B%2B.md#struct%E7%9A%84%E5%86%85%E5%AD%98%E5%AF%B9%E9%BD%90%E8%A7%84%E5%88%99)
- [内存对齐](https://github.com/gonglei007/cpp-bugs-killer/blob/main/mds/C%2B%2B%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.md#%E5%86%85%E5%AD%98%E5%AF%B9%E9%BD%90)
---
title: C++ 突破 private 访问权限的黑科技
isOriginal: false
author: 鹅厂程序小哥
date: 2019/04/04 17:19
articleTitle: C++ 突破 private 访问权限的黑科技
articleLink: https://blog.csdn.net/qq826364410/article/details/89029192
categories:
 - cpp
tags:
 - cpp
---

# C++ 突破 private 访问权限的黑科技

如何突破 class 的[private](https://so.csdn.net/so/search?q=private&spm=1001.2101.3001.7020)属性限制——试图破坏 class 的封装性，有点“逆天而行”的感觉。

### 方法 1. 添加友元函数

```cpp
#include<iostream>
using namespace std;
 
class X
{
private:
	int m_Age;
 
public:
	X() : m_Age(1){}
 
	template<typename T>
	void Func(const T &t){}
 
	const int GetValue()
	{
		return m_Age;
	}
 
	friend void Func(X* xPtr);
};
 
 
void Func(X* xPtr)
{
	xPtr->m_Age = 2;
}
 
int main() {
	X x;
	cout << x.GetValue() << endl;// 输出 1
 
	Func(&x);
	cout << x.GetValue() << endl;// 输出 2
 
	getchar();
	return 0;
}
```

使用友元函数，应该是最先想到的解决方案。

类的友元函数是定义在类外部，但有权访问类的所有私有（private）成员和保护（protected）成员。

### 方法 2. 使用指针类型转换——偷天换日

```cpp
#include<iostream>
using namespace std;
 
class X
{
private:
	int m_Age;
 
public:
	X()	: m_Age(1){}
 
	template<typename T>
	void Func(const T &t){}
 
	const int GetValue()
	{
		return m_Age;
	}
};
 
// 同 X 的内存布局，将变量的类型定义改为 public
class Y
{
public:
	int m_Age;
};
 
void Func(X* xPtr)
{
	// reinterpret_cast 用于进行各种不同类型的指针之间、
	// 不同类型的引用之间以及指针和能容纳指针的整数类型之间的转换。
	(reinterpret_cast<Y*>(xPtr))->m_Age = 2;
}
 
int main() {
	X x;
	cout << x.GetValue() << endl;// 输出 1
 
	Func(&x);
	cout << x.GetValue() << endl;// 输出 2
 
	getchar();
	return 0;
}
```

首先我们将 X 类型的指针转换为 Y 类型的指针，在编译器看来，我们访问的是 Y 类型的 public 成员 m\_Age，因此编译通过，然而事实上该指针是 X 类型的，由于 Y 跟 X 的内存布局是完全一样，因此访问 Y 的 m\_Age 成员实际上也就是在访问 X 的 m\_Age 成员。

关于类的内存布局，有兴趣的可以看这里：[https://blog.csdn.net/qq826364410/article/details/88917375](https://blog.csdn.net/qq826364410/article/details/88917375)

### 方法 3：利用模板合法钻空子

如果 X 中存在一个成员模板，那么可以这样子：

```cpp
#include<iostream>
using namespace std;
 
class X
{
private:
	int m_Age;
 
public:
	X() : m_Age(1){}
 
	template<typename T>
	void Func(const T &t){}
 
	const int GetValue()
	{
		return m_Age;
	}
};
 
struct Y {};
 
template<>
void X::Func(const Y&) //特化
{
	m_Age = 2;
}
 
int main() {
	X x;
	cout << x.GetValue() << endl;// 输出 1
 
	x.Func(Y());
	cout << x.GetValue() << endl;// 输出 2
 
	getchar();
	return 0;
}
```

这种方法利用了 X 具有一个成员模板的事实，通过特化函数模板，来打入敌人内部。代码完全符合标准，标准也确保这种行为会按照编码者的意图行事。`boost` 和 `loki` 中大量运用此手法。
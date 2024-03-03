---
title: 如何快速使用 Latex 完成论文
date: 2022-03-11 19:41:34
categories: [note]
tags: [Latex]
copyright: true
---

# 如何快速使用 Latex 完成论文

## 原始需求

需要写自己的技术报告时，我想到了曾经被安利的 Latex，它的优点是你不需要注重页面的排版样式，只需关注文本内容，特别是它还可以轻松书写众多数学公式。如果你的需求并不是太频繁，使用[www.overleaf.com](www.overleaf.com)这个网站就可以，它支持在线编译 Latex 文档，存储，还内置了不少论文模板，简直就是科研文档神器。

<!-- more -->

## 安利视频

在这里安利一波大佬[软绵绵的小熊猫](https://space.bilibili.com/16241326/?spm_id_from=333.999.0.0)关于 Latex 的一波介绍。


<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=710548809&bvid=BV1eQ4y1N7oS&cid=187009665&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

看完是不是心动不已。



## 实操体验

这里以 Overleaf 为例来进行演示

![image-20220311200006995](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_quickly_complete_a_thesis_using_Latex/202203112026908.png)

可以看到编写 Latex 语法的界面还是很清爽的

![image-20220311200245640](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_quickly_complete_a_thesis_using_Latex/202203112026816.png)

还有就是最令人头疼的参考文献，这里也只需要两步即可解决。

- 第一步，以 BibTex 形式导出参考文献

  ![image-20220311200908618](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_quickly_complete_a_thesis_using_Latex/202203112026160.png)

- 将导出的文献粘贴到.bib 文件中，添加一行 ref03, 删除 2018Natural,

  ```latex
  @article{ref03,
    title={Natural Order of Non-native Phonology in L2 English Produced by L1 Korean and Chinese Adults},
    author={ Kim, J. M.  and  Go, U. R. },
    journal={ENGLISH TEACHING},
    volume={73},
    year={2018},
  }
  ```


![image-20220311201350130](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_quickly_complete_a_thesis_using_Latex/202203112026288.png)

- 第二步，将参语法添加在对应位置，重新编译即可。

![image-20220311201559536](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_quickly_complete_a_thesis_using_Latex/202203112026969.png)



## Tips

1. 不太熟悉数学公式语法怎么办，可以使用[myscript](https://webdemo.myscript.com/views/math/index.html)的网页版，手写生成数学公式，之后复制粘贴即可。

![image-20220311202224091](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_quickly_complete_a_thesis_using_Latex/202203112026436.png)



暂时想到的问题就是这些，之后有使用方面的小技巧也会及时更新......

## 致谢

OK！本期关于如何快速使用 Latex 完成论文就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！


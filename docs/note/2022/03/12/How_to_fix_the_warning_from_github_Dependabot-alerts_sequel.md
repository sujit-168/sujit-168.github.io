---
title: 如何解决来自 github 的警告 Dependabot-alerts 续篇
date: 2022-03-12 06:42:02
categories: [note]
tags: [github]
copyright: true
---

# 如何解决来自 github 的警告-Dependabot-alerts 续篇

首先解释一下，什么是[Dependabot](https://dependabot.com/)

<!--more-->

- 为什么会收到警告

这是因为 Dependabot 可以帮助我们处理漏洞，同时检测已有依赖是否有新版本发布

[Dependabot 的作用](https://juejin.cn/post/6873454712427905032)

- 如何解决这些警告

[npm 更新依赖包](https://blog.51cto.com/u_15091660/2603984)

```
npm outdated  # 检查是否有可更新的依赖项
```

然后在 package.json 中修改需要升级的依赖版本

```
npm update    # 根据package.json来更新已有依赖
```

之后重新 git push 即可解决大部分的警告信息

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_the_warning_from_github_Dependabot-alerts_sequel/202110131645193.jpg)

- 修改后再推送到远端，即可解决警告

## 致谢

OK！本期关于如何解决来自 github 的警告-Dependabot-alerts 续篇就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！


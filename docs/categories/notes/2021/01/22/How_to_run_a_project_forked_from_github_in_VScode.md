---
title: 如何在 VScode 中跑一个从 github 上 fork 下来的项目
date: 2021-01-22 13:24:04
categories: [note]
tags: [VScode,github,fork]
copyright: true
---

# 如何在 VS code 中运行从 github 上 fork 下来的项目

在学习 VS code 的使用的过程中，花费了一个白天时间看各种教程，试图并从中找出快速上手项目基配置的具体步骤。在一天半的时间里不断试错，最后，共计花费 20 小时成功在 VS code 中运行了自己的第一个项目，虽然这个项目不是我完成的，但这次经历对于现在的我来说还是至关重要的。

<!-- more -->

## 拉取源码

首先我们需要在 VS code 中 git clone 下来一整个项目，本次教程以[PicGO 项目](https://github.com/Molunerfinn/PicGo)为例

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/11.jpg)

打开一个新终端，使用如下命令 clone 下整个项目。

```
git clone https://github.com/Molunerfinn/PicGo.git
```

## 阅读 README.md 文件

首先，查看开发文档 README.md 文件

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/12.jpg)

## 开始运行
直接执行命令

```
npm run electron:serve
```

会产生下图报错，解法可参考[npm ERR! code ELIFECYCLE](https://www.jianshu.com/p/db2ac92842d5)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/14.jpg)

## 安装依赖
发现是没有执行 npm install 命令安装必要的插件

在开发文档中可以看到直接使用 npm install 命令会导致报错，解法可以参考[npm 设置阿里云镜像并使用 npm 安装 yarn](https://blog.csdn.net/sinat_24140965/article/details/112867445)

### 更换镜像源
所以我们首先执行以下命令更改镜像源为淘宝源

```
npm config set registry https://registry.npm.taobao.org --global    # npm设置阿里云镜像
npm config set disturl https://npm.taobao.org/dist --global
```

```
npm config get registry   # 查看已设置的结果
```

### 再次安装依赖

```
yarn -v   # 查看安装的版本
```

然后再执行

```
npm install   # 安装所需的插件
```

如果命令执行过程中卡在这个页面，解法可以参考[解决 npm 一直停在"node ./download-chromedriver.js"的问题](https://blog.csdn.net/weixin_38722500/article/details/105435699)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/13.jpg)

先执行

```shell
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
```

再执行

```shell
npm install
```

应该不会再卡住了

之后执行

```shell
npm run electron:build     #生产模式  对项目文件进行编译
```

对项目文件进行编译，产生如下报错，解法可以参考[Electron-Builder 打包时报错 could not find](https://blog.csdn.net/kyq0417/article/details/111266776)

在目录 node_module/app-builder-lib/out/targets/nsis/NsisTarget.js 下

```js
//node_module/app-builder-lib/out/targets/nsis/NsisTarget.js
async executeMakensis(defines, commands, script) {
    const args = this.options.warningsAsErrors === false ? [] : ["-WX"];
    //此处新增如下代码
    args.push("-INPUTCHARSET", "UTF8");
    //结束
    for (const name of Object.keys(defines)) {
      const value = defines[name];

      if (value == null) {
        args.push(`-D${name}`);
      } else {
        args.push(`-D${name}=${value}`);
      }
    }
```



![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/1.jpg)

再次使用如下命令对项目重新进行编译

```
npm run electron:build     #生产模式  对项目文件进行编译
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/2.jpg)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/3.jpg)

执行如下命令，可以看到项目终于运行起来了。

```
npm run electron:serve     #开发模式  让项目运行起来
```

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/4.jpg)

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/5.jpg)

## 查看预览

查看一下项目跑起来的页面

第一个页面

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/6.jpg)

第二个页面

![](https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E5%9C%A8VScode%E4%B8%AD%E8%B7%91%E4%B8%80%E4%B8%AA%E4%BB%8Egithub%E4%B8%8Afork%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A1%B9%E7%9B%AE/7.jpg)

可以看到这个项目虽然跑起来了，但是并没有一些内容显示出来，这算是一点缺憾的地方吧。



## 致谢

OK！本期关于如何在 VScode 中跑一个从 github 上 fork 下来的项目就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！


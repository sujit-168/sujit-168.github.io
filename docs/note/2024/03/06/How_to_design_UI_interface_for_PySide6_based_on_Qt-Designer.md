---
title: 如何基于 Qt-Designer 设计 PySide6 的 UI 界面
date: 2024-03-06 17:50
categories: [note, app]
tags: [PySide6,  Qt Designer]
copyright: true
---

# 如何基于 Qt-Designer 设计 PySide6 的 UI 界面

## 1. 安装 Qt-Designer
```bash
sudo apt install qttools5-dev-tools
```

- [linux(Ubuntu 18.04) 下安装 Qt designer 的方式](https://blog.csdn.net/weixin_49700990/article/details/118469676)

如果想基于 PyCharm 开发，可以参考文章[Ubuntu+Pycharm+QtDesigner，并配置 Pyqt5](https://blog.csdn.net/huanxiajioabu/article/details/131263077?)

安装完成后，在命令行输入 `designer` 即可启动 Qt-Designer。

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_design_UI_interface_for_PySide6_based_on_Qt-Designer/20240306180423.png)

## 2. 创建 .ui 文件

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_design_UI_interface_for_PySide6_based_on_Qt-Designer/20240306180734.png)

::: tip QTextLabel 如何滚动显示日志信息？

- [Qlabel 添加滚动条显示过多内容](https://blog.csdn.net/flfihpv259/article/details/52958129)
- [QLabel 做为 QScrollArea 子组件，QLabel 尺寸适应滚动条内部尺寸过早显示滚动条问题解决办法](https://blog.csdn.net/kangjiabei/article/details/134713896?)

:::


## 3. 保存 .ui 文件

终于到这一步了，保存 .ui 文件，Ctrl+S 即可，跳出了一个弹窗。

显示 `the file contains top level spacers. They will not be saved.`

可以，那就搜一下，参考[这篇文章](https://blog.csdn.net/WINDRUNNER360/article/details/124528311)解决

## 3. 转换 .ui 文件为 .py 文件

那么如何查看 `ui_main.h` 文件的内容呢？,参考下图
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_design_UI_interface_for_PySide6_based_on_Qt-Designer/20240306184147.png)

这样就可以看到该文件的内容了。

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_design_UI_interface_for_PySide6_based_on_Qt-Designer/20240306183855.png)

保存 `ui_main.h` 头文件，然后复制其中内容，打开 [https://www.codeconvert.ai/c++-to-python-converter](https://www.codeconvert.ai/c++-to-python-converter),
粘贴 `ui_main.h` 文件内容，点击转换，等待转换完成。

然后将转换后的内容复制到 `ui_main.py` 文件中，保存该文件。

## 4. 运行 .py 文件

转换过后的 .py 文件，包含了一个类，类名为 `Ui_MainWindow`，该类继承自 `PySide6.QtWidgets.QMainWindow`，

那么我们就可以在代码中将之实例化并调用，

```bash
class MainWindow(QMainWindow, Ui_MainWindow):
    def __init__(self, parent=None):
        super(MainWindow, self).__init__(parent)
        self.setupUi(self)

if __name__ == "__main__":
    import sys
    app = QApplication(sys.argv)
    MainWindow = MainWindow()
    MainWindow.show()
    sys.exit(app.exec_())
```

然后运行该文件，运行后，会弹出一个窗口，嗯，乱码了：

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_design_UI_interface_for_PySide6_based_on_Qt-Designer/crash_unicode.png)

### 问题：为什么会出现乱码？


通过查看`ui_main.h`中的代码，发现控件的标签设置主要是 `retranslateUi` 函数完成，
```bash
    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(QApplication.translate("MainWindow", "\345\261\200\345\237\237\347\275\221\346\226\207\344\273\266\344\274\240\350\276\223\345\212\251\345\212\251\346\211\213  \345\242\236\345\274\272\347\211\210", None))
        self.pushButton_scan_ip.setText(QApplication.translate("MainWindow", "IP\346\211\253\346\217\217", None))
        self.lineEdit_password.setPlaceholderText(QApplication.translate("MainWindow", "\350\257\267\350\276\223\345\205\245\344\270\273\346\234\272\347\253\257\347\231\273\345\275\225\345\257\206\347\240\201\357\274\214\351\273\230\350\256\244\344\270\272ros", None))
        self.lineEdit_ip_subnet.setPlaceholderText(QApplication.translate("MainWindow", "\350\257\267\350\276\223\345\205\245IP \347\275\221\346\256\265\357\274\214\345\246\202192.168.0.0/255", None))
        self.label_52.setText(QApplication.translate("MainWindow", "IP \347\275\221\346\256\265", None))
        self.label_51.setText(QApplication.translate("MainWindow", "\344\270\273\346\234\272\345\257\206\347\240\201", None))
        self.label_53.setText(QApplication.translate("MainWindow", "\344\274\240\350\276\223\350\267\257\345\276\204", None))
        self.lineEdit_transfer_path.setPlaceholderText(QApplication.translate("MainWindow", "\350\257\267\350\276\223\345\205\245\344\274\240\350\276\223\345\210\260\344\270\273\346\234\272\347\232\204\350\267\257\345\276\204", None))
        self.lineEdit_username.setPlaceholderText(QApplication.translate("MainWindow", "\350\257\267\350\276\223\345\205\245\344\270\273\346\234\272\347\253\257\347\231\273\345\275\225\347\224\250\346\210\267\345\220\215\357\274\214\351\273\230\350\256\244\344\270\272tianbot", None))
        self.label_50.setText(QApplication.translate("MainWindow", "\344\270\273\346\234\272\347\224\250\346\210\267\345\220\215", None))
        self.pushButton_save.setText(QApplication.translate("MainWindow", "\344\277\235\345\255\230", None))
        self.label_param_area.setText(QApplication.translate("MainWindow", "\345\217\202\346\225\260\351\205\215\347\275\256\345\214\272", None))
        self.label_param_area.setProperty("class", QVariant(QApplication.translate("MainWindow", "h2", None)))
        self.checkBox_all_ip.setText(QApplication.translate("MainWindow", "IP\345\205\250\351\200\211", None))
        self.pushButton_add.setText(QApplication.translate("MainWindow", "\346\267\273\345\212\240", None))
        self.pushButton_send.setText(QApplication.translate("MainWindow", "\345\217\221\351\200\201", None))
        self.pushButton_del.setText(QApplication.translate("MainWindow", "\345\210\240\351\231\244", None))
        self.pushButton_zip.setText(QApplication.translate("MainWindow", "\345\216\213\347\274\251", None))
        self.label_operate_area.setText(QApplication.translate("MainWindow", "\347\224\250\346\210\267\346\223\215\344\275\234\345\214\272", None))
        self.label_operate_area.setProperty("class", QVariant(QApplication.translate("MainWindow", "h2", None)))
        self.label_log.setText("")

```

看起来是中文字符的编码问题，参考[文章](https://durant35.github.io/2016/02/02/programPearls_Qt_%E5%80%9FQt%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E8%B0%88%E8%B0%88Coding%E4%B8%AD%E7%9A%84%E7%BC%96%E7%A0%81%E9%97%AE%E9%A2%98/)，手动将中文字符逐个转换为 unicode 编码，然后重新编译即可。

为了加快效率，通过[字符转换网站](https://www.w3cschool.cn/tools/index?name=unicode_chinese)直接将中文字符转换为 unicode 编码，然后将文件中的所有中文字符替换为 unicode 编码。

虽然有点不优雅，但是方法确实有效。

```bash
    def retranslateUi(self, MainWindow):
        """
           zh-ans 2 unicode
        """
        MainWindow.setWindowTitle(QApplication.translate("MainWindow", "\u5c40\u57df\u7f51\u6587\u4ef6\u4f20\u8f93\u52a9\u624b\u0020\u0020\u589e\u5f3a\u7248", None))
        self.pushButton_scan_ip.setText(QApplication.translate("MainWindow", "IP \u626b\u63cf", None))
        self.lineEdit_password.setPlaceholderText(QApplication.translate("MainWindow", "\u8bf7\u8f93\u5165\u4e3b\u673a\u7aef\u767b\u5f55\u5bc6\u7801\uff0c\u9ed8\u8ba4\u4e3a ros", None))
        self.lineEdit_ip_subnet.setPlaceholderText(QApplication.translate("MainWindow", "\u8bf7\u8f93\u5165\u0049\u0050\u0020\u7f51\u6bb5\uff0c\u5982 192.168.0.0/255", None))
        self.label_52.setText(QApplication.translate("MainWindow", "IP \u7f51\u6bb5", None))
        self.label_51.setText(QApplication.translate("MainWindow", "\u4e3b\u673a\u5bc6\u7801", None))
        self.label_53.setText(QApplication.translate("MainWindow", "\u4f20\u8f93\u8def\u5f84", None))
        self.lineEdit_transfer_path.setPlaceholderText(QApplication.translate("MainWindow", "\u8bf7\u8f93\u5165\u4f20\u8f93\u5230\u4e3b\u673a\u7684\u8def\u5f84", None))
        self.lineEdit_username.setPlaceholderText(QApplication.translate("MainWindow", "\u8bf7\u8f93\u5165\u4e3b\u673a\u7aef\u767b\u5f55\u7528\u6237\uff0c\u9ed8\u8ba4\u4e3a tianbot", None))
        self.label_50.setText(QApplication.translate("MainWindow", "\u4e3b\u673a\u7528\u6237\u540d", None))
        self.pushButton_save.setText(QApplication.translate("MainWindow", "\u67e5\u770b", None))
        self.label_param_area.setText(QApplication.translate("MainWindow", "\u53c2\u6570\u914d\u7f6e\u533a", None))
        self.label_param_area.setProperty("class", QVariant(QApplication.translate("MainWindow", "h2", None)))
        self.checkBox_all_ip.setText(QApplication.translate("MainWindow", "SCP", None))
        self.pushButton_add.setText(QApplication.translate("MainWindow", "\u6dfb\u52a0", None))
        self.pushButton_send.setText(QApplication.translate("MainWindow", "\u53d1\u9001", None))
        self.pushButton_del.setText(QApplication.translate("MainWindow", "\u5220\u9664", None))
        self.pushButton_zip.setText(QApplication.translate("MainWindow", "\u538b\u7f29", None))
        self.label_operate_area.setText(QApplication.translate("MainWindow", "\u7528\u6237\u64cd\u4f5c\u533a", None))
        self.label_operate_area.setProperty("class", QVariant(QApplication.translate("MainWindow", "h2", None)))
        # self.label_log.setText("")
```
## 5. 解决乱码问题
![](https://cn-sy1.rains3.com/dfdfgf/blog/How_to_design_UI_interface_for_PySide6_based_on_Qt-Designer/20240309204109.png)


可以看到，界面已经成功显示出来了，符合预期。
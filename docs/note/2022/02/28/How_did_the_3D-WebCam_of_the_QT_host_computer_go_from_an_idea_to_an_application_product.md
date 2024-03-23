---
title: QT 上位机之 3D_WebCam 我是如何从一个想法变为一款应用
date: 2022-02-28 10:15
categories: [note]
tags: [QT]
---

# QT 上位机之 3D_WebCam 我是如何从一个想法变为一款应用

## 前言

大家好，我是一款~~练习时长两周半~~名为 webcam_Stereo 的上位机，由 C++ 炼制而成，以 QT5 工艺躯体框架，并且正在学习 Opencv 功法。我喜欢~~唱跳、rap、篮球~~换脸、拍照和录像，介绍一下，这就是我的硬件兄弟，一块 40 大洋的双目摄像头。

<!-- more -->

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_did_the_3D-WebCam_of_the_QT_host_computer_go_from_an_idea_to_an_application_product/1.png)

## 想法

在 terminal 中调用脚本是非常不优雅的，而且经常需要修改一些可变参数，而我也是一个怕麻烦的人。所以我开发了这款上位机。它应该具备以下的功能

1. 切换相机
2. 切换相机输出模式
3. 拍照
4. 录像



## 技术选择

考虑到比较熟悉 C++，并且它最好是跨平台的应用，所以选择了 QT5 作为脚手架来加速开发，通过引入第三方 Opencv 库来简化代码。

GCC 5.3.1

Ubuntu18.04 64 bit

[QT Creator](https://www.qt.io/zh-cn/product/ui-design-tools)基于 Qt 5.15.1

![img](https://pica.zhimg.com/80/v2-ca47d032dcbdaba96a6f7fa6c08ad03f_720w.png)

[Opencv](https://opencv.org/)基于 Opencv4.5.2

## UI 部分

需要 1 个输出框 (QTextEdit)，1 个下拉页 (Type Here)，2 个输入框 (QLineEdit)，4 个按钮 (QPushButton)

| UI 组件 (MainWindow) | 数量 |
| :----------------: | :--: |
|     QTextEdit      |  1   |
|     QLineEdit      |  2   |
|    QPushButton     |  4   |

| UI 组件 (menubar) | 数量 |
| :-------------: | :--: |
|     QAction     |  4   |

这就是我的素颜照，唉，长相一般

![img](https://pica.zhimg.com/80/v2-bf70cf497bcd7ed7f05b1d7517fff5b4_720w.png)

美颜后的 UI 界面

![](https://cn-sy1.rains3.com/dfdfgf/blog/How_did_the_3D-WebCam_of_the_QT_host_computer_go_from_an_idea_to_an_application_product/stereo_01.png)

## 功能模块

### 1.显示画面

```c++
void MainWindow::readFrame()
{
    cap.read(src_image);
    QImage imag = MatImageToQt(src_image);
    ui->cameraView->setScaledContents(true);
    ui->cameraView->setPixmap(QPixmap::fromImage(imag));
}

//Mat 转成 QImage
QImage MainWindow::MatImageToQt(const Mat &src)
{
    //CV_8UC1 8 位无符号的单通道---灰度图片
    if(src.type() == CV_8UC1)
    {
        //使用给定的大小和格式构造图像
        //QImage(int width, int height, Format format)
        QImage qImage(src.cols,src.rows,QImage::Format_Indexed8);
        //扩展颜色表的颜色数目
        qImage.setColorCount(256);

        //在给定的索引设置颜色
        for(int i = 0; i < 256; i ++)
        {
            //得到一个黑白图
            qImage.setColor(i,qRgb(i,i,i));
        }
        //复制输入图像，data 数据段的首地址
        uchar *pSrc = src.data;
        //
        for(int row = 0; row < src.rows; row ++)
        {
            //遍历像素指针
            uchar *pDest = qImage.scanLine(row);
            //从源 src 所指的内存地址的起始位置开始拷贝 n 个
            //字节到目标 dest 所指的内存地址的起始位置中
            memcpy(pDest,pSrc,src.cols);
            //图像层像素地址
            pSrc += src.step;
        }
        return qImage;
    }
    //为 3 通道的彩色图片
    else if(src.type() == CV_8UC3)
    {
        //得到图像的的首地址
        const uchar *pSrc = (const uchar*)src.data;
        //以 src 构造图片
        QImage qImage(pSrc,src.cols,src.rows,src.step,QImage::Format_RGB888);
        //在不改变实际图像数据的条件下，交换红蓝通道
        return qImage.rgbSwapped();
    }
    //四通道图片，带 Alpha 通道的 RGB 彩色图像
    else if(src.type() == CV_8UC4)
    {
        const uchar *pSrc = (const uchar*)src.data;
        QImage qImage(pSrc, src.cols, src.rows, src.step, QImage::Format_ARGB32);
        //返回图像的子区域作为一个新图像
        return qImage.copy();
    }
    else
    {
        return QImage();
    }
}
```

- 如何用 OpenCV 来获取到图像输出？

1. 首先需要定义一个 Mat 数据容器，用来存放摄像头的实时画面数据；
2. 然后使用 VideoCapture() 函数来获取摄像头的实时画面数据，将读取到的每帧摄像头数据，写到 Mat 数据容器 (frame)；
3. 判断 frame 是否为空，如果不为空，用一个窗口来显示摄像头的画面。

### 2.模式切换

```c++
void MainWindow::on_modeswitch_clicked()
{
    process->start("bash");                      //启动终端 (Windows 下改为 cmd)
    process->waitForStarted();                   //等待启动完成
    // 切换相机输出模式
    //QString 的 arg() 方法用于填充字符串中的%1,%2...为给定的参数
    QString str1=tr("uvcdynctrl -d /dev/video%1 -S 6:8  '(LE)0x50ff' ").arg(device);
    QString str2=tr("uvcdynctrl -d /dev/video%1 -S 6:15 '(LE)0x00f6' ").arg(device);
    QString str3=tr("uvcdynctrl -d /dev/video%1 -S 6:8  '(LE)0x2500' ").arg(device);
    QString str4=tr("uvcdynctrl -d /dev/video%1 -S 6:8  '(LE)0x5ffe' ").arg(device);
    QString str5=tr("uvcdynctrl -d /dev/video%1 -S 6:15 '(LE)0x0003' ").arg(device);
    QString str6=tr("uvcdynctrl -d /dev/video%1 -S 6:15 '(LE)0x0002' ").arg(device);
    QString str7=tr("uvcdynctrl -d /dev/video%1 -S 6:15 '(LE)0x0012' ").arg(device);
    QString str8=tr("uvcdynctrl -d /dev/video%1 -S 6:15 '(LE)0x0004' ").arg(device);
    QString str9=tr("uvcdynctrl -d /dev/video%1 -S 6:8  '(LE)0x76c3' ").arg(device);
    QString str10=tr("uvcdynctrl -d /dev/video%1 -S 6:10 '(LE)0x0%200'").arg(device).arg(mode);  //可变参数
    QString array[10]={str1,str2,str3,str4,str5,str6,str7,str8,str9,str10};
    char *n;
    for(int i=0;i<10;i++){
        QByteArray m=array[i].toLatin1();
        n=m.data();
        process->write(n);
        process->write("\n");	//不可省略
    }
}
```

- 如何解决切换相机输出模式的问题？

  在之前也提到了，在 terminal 中执行 sh 脚本不够优雅，但是又不想写更多的代码，所以怎么办呢？这里的解决思路是这样的。我们通过上位机通过按钮，触发一个分离线程启动 bash 终端，通过读取数组中的字符串命令 (由 shell 脚本中的 uvc 命令改写而来)，将之按照执行顺序存入数组中，再依次读出并写入到 bash 终端中即可实现。

- 如何解决在 Linux 下设备号经常变更而造成命令执行失败的问题？

  我们希望可以向分离进程中传入可变参数，我们通过 QString 的 arg() 方法用于填充字符串中的%1,%2为给定的实参，这样就可以解决这一问题。

- 如何实现自动识别是否有可读取的摄像头设备？

  我们在使用一些其他应用时，比如 cheese 时，无需输入任何参数就可以自动的读取视频数据流，需要用到获取常用硬件设备 GUID。

### 3.拍照

```c++
void MainWindow::on_Photograph_clicked()
{
    QString timeStr = QDateTime::currentDateTime().toString("yyyy-MM-hh hh_mm_ss");
    QString dirName = "Pictures";
    QString homepath = QDir::homePath();
    QImage image = MatImageToQt(src_image);
    if(!QFile::exists(dirName))
    {
       QDir dir;
       if(!dir.mkdir(dirName))
       {
           ui->label_state->setText("创建文件夹 " + dirName + "失败!!!");
       }
    }
    QString filePath = QString("%1/%2/%3.png").arg(homepath).arg(dirName).arg(timeStr);
    if(image.save(filePath))
    {
        ui->label_state->setText("保存照片至：" + filePath);
    }else{
        ui->label_state->setText("保存照片失败!!!");
    }
}
```

- 如何实现存储图片到不同 Linux 主机的 Pictures 目录下？

  首先，这里需要获取一下主文件夹名称，判断系统中是否存在对应目录（比如这里就是 Pictures）下的文件夹，通常情况下我们存储的图片都是以按下拍照按键的时刻来为图片命名，所以还需要获取一下系统的当前时间，最后，我们希望在按下按键后有一个反馈信号，以便知道是否成功保存图片和图片保存的位置。

### 4.录像

```c++
void MainWindow::on_record_clicked()
{
    QString timeStr = QDateTime::currentDateTime().toString("yyyy-MM-hh hh_mm_ss");
    QString dirName = "Videos";
    QString homepath = QDir::homePath();
    double fps = 25.0;  // framerate of the created video stream
    if(!QFile::exists(dirName))
    {
       QDir dir;
       if(!dir.mkdir(dirName))
       {
           ui->label_state->setText("创建文件夹 " + dirName + "失败!!!");
       }
    }
    QString filePath = QString("%1/%2/%3.avi").arg(homepath).arg(dirName).arg(timeStr);
    cap.open(device.toInt());
    writer.open(filePath.toStdString(), VideoWriter::fourcc('M', 'J', 'P', 'G'), fps, Size(640, 480), true);
    // check if we succeeded
    if(!writer.isOpened()) {
            cerr << "Could not open the output video file for write\n";
        }
    while(!src_image.empty())
       {
           // check if we succeeded
           if (!cap.read(src_image)) {
               cerr << "ERROR! blank frame grabbed\n";
               break;
           }
           cap >> src_image;
           //设置保存视频的格式为 AVI，编码为 MJPG
           writer.write(src_image);
           imshow("VideoPlay", src_image);
           if (waitKey(5) >= 0)
               break;
           if(!writer.isOpened()) {
               ui->label_state->setText("保存视频至：" + filePath);
               break;
             }
       }
}
```

- 如何实现存储视频到不同 Linux 主机的 Videos 目录下？

  大致思路与保存图片差不多，这里就不详细介绍了，有兴趣的小伙伴自行研究一下。
  
  

这是我的应用链接，欢迎种草：

[3D_WebCam 上位机](https://github.com/ruoxi521/Stereo_QT)



## 致谢

OK！本期关于如何使用 Git、PicGo、Typora3 个工具快速撰写、部署文章就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！


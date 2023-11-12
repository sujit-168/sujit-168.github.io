---
title: 科沃斯激光雷达 LDS-006 的使用
date: 2022-04-15 20:41:15
categories: [note]
tags: [激光雷达，LDS-006]
copyright: true
---

# 科沃斯激光雷达 LDS-006 的使用

## 准备工作

需要提前准备的软件和硬件如下

<!--more-->

#### 硬件环境

- 电脑 1 台
- USB 转 TTL1 个
- 杜邦线若干
- 科沃斯 LDS-006 激光雷达（在咸鱼或者某宝可以淘到）

#### 软件环境

- Ubuntu 及对应版本的 ROS 环境，Windows10
- XCOM，Linux 下的串口调试工具软件

#### 硬件连接方式

LDS-006 使用 5V 供电，电脑的 USB3.0 可以提供 5V 电压，使用 USB 转 TTL 模块直接连接到 USB 口即可

![USB 转 TTL 连线](https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221334.png)

## 连接示图

该激光雷达的四根传输线中，红线为 VCC，黑线为 GND，与 USB 转 TTL 模块的 RXD 与 TXD 接口要交叉连接，若无法正常收发数据，检查一下接线是否有问题，交换一下 RXD 与 TXD。

![实物](https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221039.jpg)

## 模块介绍

科沃斯 LDS-006 设备采用串口通信，波特率为 115200，测量范围大致在 0-10m 左右

设备的启动指令为

```
startlds$
```

停止指令为

```
stoplds$
```

启动设备之后，就能通过串口获得传感器数据，下图为 Windows 下使用 XCOM 得到的数据效果

![XCOM](https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221795.png)

由于其通信协议是闭源的，根据 X 包网友提供的信息，可以得出其激光雷达的通讯协议是基于标准通讯协议略微修改得到的，具体如下图

![image-20220414183549007](https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221196.png)

### 通信参数

|  波特率   | 数据检验 | 检验位 | 数据位 | 停止位 |   数据格式    |
| :-------: | :------: | :----: | :----: | :----: | :-----------: |
| 230400bps |  2bytes  |  NONE  | 8 bits | 1 bits | 十六进制 (HEX) |

### 数据格式

|  起始  |  索引  |  速度  |   数据   |  校验   |
| :----: | :----: | :----: | :------: | :-----: |
| 1 byte | 1 byte | 2bytes | 4*4bytes | 2 bytes |

上而请求数据格式是 HEX 形式，详细说明如下：

#### 起始：1byte

标志数据包传输开始，当前默认为 0xFA；

#### 索引：1byte

- 本协议传输是采用以 4 个点数据为一包传输，当前协议以角度分割，
- 0-3°为第一包，索引为 0xA0:
- 356-359”为一圈的最后一包，索引为 0xF9;

#### 速度：2bytes

速度 speed 采用转/分钟 (RPM) 为单位。数据为 16bits 定点数。
其中低 6bits 为小数部分，传输时分割为两个字节。先传输低八位数据 speed[7:0]. 再传输高八位数据 speed[15:8];

#### 数据：16bytes

包含 4 个点的距离信息 distance[13:0] 和强度信息 strength[15:0]. 
数据 0 为第 i 点数据。
敖据 1 为第 i-1 点数据。
数据 2 为第 i-2 点数据。
数据 3 为第 i-3 点数据：
每个点数据为 4bytes. 传输顺序为 BYTE0 >BYTE3;
BYTE0 = distance[7:0]:
BYTE1= (flag0, flag1, distance[13:8]} ;其中
flag0: 1bit，为'I' 表示距离数据无效
flag1: 1bit，为 'I'表示强度信息异常
BYTE2 = strength[7:0]
BYTE3 = strength[15:8]

#### 数据校验：2bytes

对前 20bytes 校验，校验 checksum[15:0]，先传输低位，
​**校验公式如下：**
​chk32= 32' d0;
​chk16= 16' d0;
​for( i-0; i<10; i=i+1)
​chk32 = (chk32 << 1) + (mem[2 * i+1]<<8 +mem[2 * i])；
​chk16 = (chk32 & 16'h7fff) + (chk32 >> 15);
​chk16 = chk16 & 16’ h7fff;
​checksum = chk16 ;
其中 mem 中存的是数据包前 20 字节数据。

### 示例如下：

angle = 0; 	//角度为 0-3
distance = (I' b0, I'b0, 14 d5000);	//单位为毫米
strength = 16' d1024;
speed = 16' d20832; 	//5. 425rad/st325.5RPM--->转定点数
则数据如下：
FA A0 60 51 88 13 00 01 88 13 00 01 88 13 00 01 88 13 00 01 93 23

| 起始 | 索引 | 速度  |    数据 0    |    数据 1    |    数据 2    |    数据 3    | 校验  |
| :--: | :--: | :---: | :---------: | :---------: | :---------: | :---------: | :---: |
|  FA  |  A0  | 60 51 | 88 13 00 01 | 88 13 00 01 | 88 13 00 01 | 88 13 00 01 | 93 23 |

**全图如下**

![LDS-006 激光雷达通讯协议](https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221719.jpg)



返回的串口数据

![image-20220414183848619](https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142222633.png)



ROS 驱动功能包：[xv_ 11_ laser. _driver-hydro-devel.zip](https://pan.baidu.com/s/16UpOsM5V8vjHWAsz4YnRWw)

提取码：rnna



### Reference

- [ROS 与激光雷达入门教程-ROS 中使用激光雷达 (RPLIDAR)](https://www.ncnynl.com/archives/201611/1100.html)
- [ROS 与激光雷达入门教程-ROS 中使用激光雷达 (Neato XV-11)](https://www.ncnynl.com/archives/201611/1090.html)
- [旗帜](https://www.zhihu.com/people/qi-zhi-80-55)的视频链接：[从扫地机器人的激光雷达到 ROS，从 MPU6050 到 IMU 姿态 - 旗帜的视频 - 知乎](https://www.zhihu.com/zvideo/1483908276357779457) 
- [旗帜](https://www.zhihu.com/people/qi-zhi-80-55)的视频链接：[科沃斯扫地机激光雷达 LDS-006 通信协议与 ROS 驱动分享 - 旗帜的视频 - 知乎]( https://www.zhihu.com/zvideo/1488421522355818496)



## 致谢

OK！本期关于介绍了如何使用科沃斯激光雷达 LDS-006 的教程就到此为止，喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！

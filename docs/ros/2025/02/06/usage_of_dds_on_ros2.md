---
title: DDS 在 ROS2 中的使用
date: 2025-02-06 21:43
categories: [ros]
tags: [ros]
copyright: true
---

# DDS 在 ROS2 中的价值及使用

为了减少篇幅，会在某些内容上引用 B 站 2021 ROS 暑期学校由 `ADLINK 凌华科技的 Rino 先生分享的《ROS2 的核心：DDS 导论》`精彩回放

## DDS 的历史

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=675322873&bvid=BV1sU4y1P7yn&cid=402001126&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## DDS 的关键价值

::: info 省流

主要讲述了 DDS 通讯的以下关键价值
- 分散式架构、时空解耦
- 可进化性和可扩展性
- 稳定可靠的通信
- 随插随用及互操作性
- 容错和冗余
- 关键任务和业务取向
:::

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=675322873&bvid=BV1sU4y1P7yn&cid=402001126&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## DDS 的组成

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=675322873&bvid=BV1sU4y1P7yn&cid=402001697&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## DDS QOS

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=675322873&bvid=BV1sU4y1P7yn&cid=402002033&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## DDS 应用的参考模型

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=675322873&bvid=BV1sU4y1P7yn&cid=402002255&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## Reference

- [https://design.ros2.org/articles/ros_on_dds.html](https://design.ros2.org/articles/ros_on_dds.html)
- [Response-Time Analysis of ROS 2 Processing Chains under Reservation-Based Scheduling](https://t-blass.de/papers/response-time-analysis-of-ros2.pdf)
- [Current Status of ROS 2](https://static1.squarespace.com/static/51df34b1e4b08840dcfd2841/t/5ce6c85ca4222fe0ccbd5309/1558628472094/2019-05-07_Current_Status_of_ROS_2.pdf)
- [QoS 的介绍](https://gitee.com/gwmunan/ros2/wikis/pages?sort_id=12341454&doc_id=4855084)
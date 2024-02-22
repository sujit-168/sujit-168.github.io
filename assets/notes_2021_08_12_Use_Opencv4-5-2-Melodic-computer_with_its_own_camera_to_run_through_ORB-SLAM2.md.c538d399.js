import{_ as u}from"./chunks/ArticleMetadata.4a1a58d6.js";import{_ as y,C as p,o,c as m,H as c,w as r,k as s,a as n,Q as t,b as h,e as A}from"./chunks/framework.144d84a9.js";import"./chunks/md5.3e7612d8.js";const L=JSON.parse('{"title":"用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2","description":"","frontmatter":{"title":"用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2","date":"2021-08-12T23:38:30.000Z","categories":["note"],"tags":["Opencv4.5.2","ORB-SLAM2"],"copyright":true},"headers":[],"relativePath":"notes/2021/08/12/Use_Opencv4-5-2-Melodic-computer_with_its_own_camera_to_run_through_ORB-SLAM2.md","filePath":"notes/2021/08/12/Use_Opencv4-5-2-Melodic-computer_with_its_own_camera_to_run_through_ORB-SLAM2.md","lastUpdated":1708577859000}'),_={name:"notes/2021/08/12/Use_Opencv4-5-2-Melodic-computer_with_its_own_camera_to_run_through_ORB-SLAM2.md"},g=s("h1",{id:"如何在-ubuntu18-04-上用-opencv4-5-2-melodic-电脑自带摄像头跑通-orb-slam2",tabindex:"-1"},[n("如何在 Ubuntu18.04 上用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2 "),s("a",{class:"header-anchor",href:"#如何在-ubuntu18-04-上用-opencv4-5-2-melodic-电脑自带摄像头跑通-orb-slam2","aria-label":'Permalink to "如何在 Ubuntu18.04 上用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2"'},"​")],-1),v=t(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>最近研究了一下如何在 Ubuntu18.04 上用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2，摸索的过程也踩了不少坑，所以写下这篇文章来总结整个过程。</p><h2 id="安装环境" tabindex="-1">安装环境 <a class="header-anchor" href="#安装环境" aria-label="Permalink to &quot;安装环境&quot;">​</a></h2><ol><li><p>Ubuntu18.04 Linux 发展至今，已经发布了多种版本，镜像文件可以 Ubuntu 官网上下载<a href="https://ubuntu.com/download/alternative-downloads" target="_blank" rel="noreferrer">安装版本选择</a> 对于虚拟机，就不再这里推荐了，建议直接上双系统，这里可能又会出现两个问题：</p><ol><li>需不需要再加装一块固态硬盘？</li><li>之后万一系统崩了，怎么快速恢复？ 我个人建议，如果可以，就再加装一块固态硬盘，关于拆机的问题，可以参考<a href="https://sujie-168.top/2021/01/22/%E5%A6%82%E4%BD%95%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E7%88%B1%E6%9C%BA%E7%A5%9E%E8%88%9FTX6-CT5DA%E5%8A%A0%E8%A3%85%E5%9B%BA%E6%80%81%E7%A1%AC%E7%9B%98/" target="_blank" rel="noreferrer">这篇文章</a> 关于双系统的安装，可以<a href="https://mp.weixin.qq.com/s/gL0nbF1x1-F5B6-M_9nFkQ" target="_blank" rel="noreferrer">参考这篇文章</a></li></ol></li><li><p>Melodic 关于 Melodic 的安装，可以参考我之前的一篇文章<a href="https://blog.csdn.net/qq_45857922/article/details/113355960" target="_blank" rel="noreferrer">ROS 是什么及 ROS 的安装</a></p></li><li><p><a href="https://github.com/raulmur/ORB_SLAM2" target="_blank" rel="noreferrer">ORB-SLAM2</a> 想要将 ORB-SLAM2<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>跑起来，还需要安装一些必要的依赖库，如 Pangolin、OpenCV、Eigen3 等，这里推荐参考这篇文章<a href="https://blog.csdn.net/hltt3838/article/details/113962104" target="_blank" rel="noreferrer">ORB-SLAM2“工具安装 和 系统运行“详细过程</a></p></li></ol><p>以上的安装过程，可能会消耗大量的时间，坑会比较多，但我希望大家在安装时都可以没有报错</p><h3 id="构建功能包" tabindex="-1">构建功能包 <a class="header-anchor" href="#构建功能包" aria-label="Permalink to &quot;构建功能包&quot;">​</a></h3><p>第一：首先确定自己有一个 ROS 的工作空间，并对其进行初始化，为下一步创建功能包作准备。</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">mkdir  </span><span style="color:#F47067;">-</span><span style="color:#ADBAC7;">p </span><span style="color:#F47067;">~/</span><span style="color:#ADBAC7;">catkin_ws</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">src</span></span>
<span class="line"><span style="color:#ADBAC7;">cd </span><span style="color:#F47067;">~/</span><span style="color:#ADBAC7;">catkin_ws</span><span style="color:#F47067;">/</span></span>
<span class="line"><span style="color:#ADBAC7;">catkin_make</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">mkdir  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#D73A49;">~/</span><span style="color:#24292E;">catkin_ws</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">src</span></span>
<span class="line"><span style="color:#24292E;">cd </span><span style="color:#D73A49;">~/</span><span style="color:#24292E;">catkin_ws</span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">catkin_make</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第二：开始构建发布话题的摄像头调用功能包，这里建议直接借用官方给出的 usb_cam 功能包</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">cd catkin_ws／src</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">//git 拉取代码，如果速度很慢，使用方法 2 拉取，如果没有安装 git，请根据提示安装 git 即可，或者自行百度一下</span></span>
<span class="line"><span style="color:#ADBAC7;">git clone https:</span><span style="color:#768390;">//github.com/bosch-ros-pkg/usb_cam usb_cam   //方法 1</span></span>
<span class="line"><span style="color:#ADBAC7;">git clone https:</span><span style="color:#768390;">//hub.fastgit.org/bosch-ros-pkg/usb_cam usb_cam		//方法 2</span></span>
<span class="line"><span style="color:#ADBAC7;">cd usb_cam</span></span>
<span class="line"><span style="color:#ADBAC7;">mkdir build </span></span>
<span class="line"><span style="color:#ADBAC7;">cd build </span></span>
<span class="line"><span style="color:#ADBAC7;">cmake ..</span><span style="color:#768390;">   //Cmake 编译</span></span>
<span class="line"><span style="color:#ADBAC7;">make</span><span style="color:#768390;"> 	   //make 编译</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cd catkin_ws／src</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//git 拉取代码，如果速度很慢，使用方法 2 拉取，如果没有安装 git，请根据提示安装 git 即可，或者自行百度一下</span></span>
<span class="line"><span style="color:#24292E;">git clone https:</span><span style="color:#6A737D;">//github.com/bosch-ros-pkg/usb_cam usb_cam   //方法 1</span></span>
<span class="line"><span style="color:#24292E;">git clone https:</span><span style="color:#6A737D;">//hub.fastgit.org/bosch-ros-pkg/usb_cam usb_cam		//方法 2</span></span>
<span class="line"><span style="color:#24292E;">cd usb_cam</span></span>
<span class="line"><span style="color:#24292E;">mkdir build </span></span>
<span class="line"><span style="color:#24292E;">cd build </span></span>
<span class="line"><span style="color:#24292E;">cmake ..</span><span style="color:#6A737D;">   //Cmake 编译</span></span>
<span class="line"><span style="color:#24292E;">make</span><span style="color:#6A737D;"> 	   //make 编译</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="检查测试" tabindex="-1">检查测试 <a class="header-anchor" href="#检查测试" aria-label="Permalink to &quot;检查测试&quot;">​</a></h3><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">roscore</span></span>
<span class="line"><span style="color:#ADBAC7;">roslaunch usb_cam usb_cam</span><span style="color:#F47067;">-</span><span style="color:#ADBAC7;">test.launch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">roscore</span></span>
<span class="line"><span style="color:#24292E;">roslaunch usb_cam usb_cam</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">test.launch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果得到如下图的效果即为正常 <img src="https://img-blog.csdnimg.cn/03dab6f8cf3f4dab8f7a1123e5e296bb.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODU3OTIy,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"> 其余的一些操作可以参考这篇文章<a href="https://zhuanlan.zhihu.com/p/29629824" target="_blank" rel="noreferrer">用电脑自带的摄像头跑 orb_slam2</a></p><h2 id="遇到问题" tabindex="-1">遇到问题 <a class="header-anchor" href="#遇到问题" aria-label="Permalink to &quot;遇到问题&quot;">​</a></h2><p><img src="https://img-blog.csdnimg.cn/2c318a42c86d408e806729ab5ee6239c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODU3OTIy,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p><p>我在安装 Opencv 时没有指定安装的版本，所以最后安装 Opencv 的版本为 Opencv4.5.2，而在 ROS 中集成的 Opencv 为 Opencv3.2.0。</p><p>开始时由于对 Opencv 了解比较少，所以在这里卡了很久，在查了一些资料之后，发现可能是 Opencv 版本冲突的问题，在 ORB-SLAM2 中 Cmakelist 中我并没有指定 Opencv 库的调用位置，所以，在运行 ORB-SLAM2 时，会自动的指向 ROS(Melodic) 中自带的 Opencv 版本。</p><p>在明白了这一点之后，我经过查找资料，找到了一个比较合适的解决方法。</p><p>在解决这个问题过程中所参考的资料</p><ol><li><a href="https://www.codenong.com/js19ccc3972768/" target="_blank" rel="noreferrer">OpenCV 4.3.0 引入的错误 TlsStorage releaseSlot 导致 crash</a></li><li><a href="https://blog.csdn.net/weixin_43436587/article/details/107711866" target="_blank" rel="noreferrer">ROS 下使用 Opencv4.4.0，并且使用 cv_bridge 转换 msgs 与 opencv 图像</a></li><li><a href="https://zhuanlan.zhihu.com/p/347455336" target="_blank" rel="noreferrer">解决 ROS 配置中 cv_bridge 问题</a></li><li><a href="https://zhuanlan.zhihu.com/p/306029349" target="_blank" rel="noreferrer">ORB-SLAM2——（十一）ORBSLAM2 在 ROS 下运行</a></li></ol><h3 id="解决过程" tabindex="-1">解决过程 <a class="header-anchor" href="#解决过程" aria-label="Permalink to &quot;解决过程&quot;">​</a></h3><ol><li>下载最新的 vision_opencv，复制文件夹到 cakin_ws/src 目录下</li></ol><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">git clone https:</span><span style="color:#768390;">//github.com/ros-perception/vision_opencv.git  方法 1</span></span>
<span class="line"><span style="color:#ADBAC7;">git clone https:</span><span style="color:#768390;">//hub.fastgit,.org/ros-perception/vision_opencv.git  方法 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">cd vision_opencv</span></span>
<span class="line"><span style="color:#ADBAC7;">cp cv_bridge home</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">xxx</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">catkin_ws</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">src</span><span style="color:#768390;">   //xxx 为你的用户名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git clone https:</span><span style="color:#6A737D;">//github.com/ros-perception/vision_opencv.git  方法 1</span></span>
<span class="line"><span style="color:#24292E;">git clone https:</span><span style="color:#6A737D;">//hub.fastgit,.org/ros-perception/vision_opencv.git  方法 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">cd vision_opencv</span></span>
<span class="line"><span style="color:#24292E;">cp cv_bridge home</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">xxx</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">catkin_ws</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">src</span><span style="color:#6A737D;">   //xxx 为你的用户名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://img-blog.csdnimg.cn/b3f7cc1f88be43ba9c8a1fe64b417d35.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODU3OTIy,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p><p>2.更改 cv_bridge 中的 Opencv 版本，改成与自己安装版本一至，如我安装的版本为 4.5.2，则需要对 cv_bridge 下的 CMakeLists.txt 文件中的这一部分进行修改。</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#DCBDFB;">find_package</span><span style="color:#ADBAC7;">(OpenCV </span><span style="color:#6CB6FF;">4</span><span style="color:#ADBAC7;"> REQUIRED</span></span>
<span class="line"><span style="color:#ADBAC7;">  COMPONENTS</span></span>
<span class="line"><span style="color:#ADBAC7;">    opencv_core</span></span>
<span class="line"><span style="color:#ADBAC7;">    opencv_imgproc</span></span>
<span class="line"><span style="color:#ADBAC7;">    opencv_imgcodecs</span></span>
<span class="line"><span style="color:#ADBAC7;">  CONFIG</span></span>
<span class="line"><span style="color:#ADBAC7;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">find_package</span><span style="color:#24292E;">(OpenCV </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> REQUIRED</span></span>
<span class="line"><span style="color:#24292E;">  COMPONENTS</span></span>
<span class="line"><span style="color:#24292E;">    opencv_core</span></span>
<span class="line"><span style="color:#24292E;">    opencv_imgproc</span></span>
<span class="line"><span style="color:#24292E;">    opencv_imgcodecs</span></span>
<span class="line"><span style="color:#24292E;">  CONFIG</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>3.编译 cv_bridge</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">cd cv_bridge</span></span>
<span class="line"><span style="color:#ADBAC7;">mkdir build</span></span>
<span class="line"><span style="color:#ADBAC7;">cd build</span></span>
<span class="line"><span style="color:#ADBAC7;">cmake ..</span></span>
<span class="line"><span style="color:#ADBAC7;">make</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cd cv_bridge</span></span>
<span class="line"><span style="color:#24292E;">mkdir build</span></span>
<span class="line"><span style="color:#24292E;">cd build</span></span>
<span class="line"><span style="color:#24292E;">cmake ..</span></span>
<span class="line"><span style="color:#24292E;">make</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后在 ORB-SLAM2 下修改 CMakeLists.txt，添加第一句 set() 来指定在运行 ORB-SLAM2 时，cv_bridge 的路径，这样应该就可以避免多个 Opencv 版本之间的冲突问题。</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#DCBDFB;">set</span><span style="color:#ADBAC7;">(cv_bridge_DIR </span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">usr</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">local</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">share</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">cv_bridge</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">cmake)</span><span style="color:#768390;">   //在 find_package 前面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCBDFB;">find_package</span><span style="color:#ADBAC7;">(OpenCV </span><span style="color:#6CB6FF;">4</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">QUIET</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#F47067;">if</span><span style="color:#ADBAC7;">(NOT OpenCV_FOUND)</span></span>
<span class="line"><span style="color:#ADBAC7;">   </span><span style="color:#DCBDFB;">find_package</span><span style="color:#ADBAC7;">(OpenCV </span><span style="color:#FF938A;font-style:italic;">2.4.3</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">QUIET</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">   </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;">(NOT OpenCV_FOUND)</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#DCBDFB;">message</span><span style="color:#ADBAC7;">(FATAL_ERROR </span><span style="color:#96D0FF;">&quot;OpenCV &gt; 2.4.3 not found.&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">   </span><span style="color:#DCBDFB;">endif</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#DCBDFB;">endif</span><span style="color:#ADBAC7;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(cv_bridge_DIR </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">usr</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">local</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">share</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">cv_bridge</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">cmake)</span><span style="color:#6A737D;">   //在 find_package 前面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">find_package</span><span style="color:#24292E;">(OpenCV </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#E36209;">QUIET</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(NOT OpenCV_FOUND)</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">find_package</span><span style="color:#24292E;">(OpenCV </span><span style="color:#B31D28;font-style:italic;">2.4.3</span><span style="color:#24292E;"> </span><span style="color:#E36209;">QUIET</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(NOT OpenCV_FOUND)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">message</span><span style="color:#24292E;">(FATAL_ERROR </span><span style="color:#032F62;">&quot;OpenCV &gt; 2.4.3 not found.&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">endif</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">endif</span><span style="color:#24292E;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>4.重新编译整个工作空间</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">cd catkin_ws</span></span>
<span class="line"><span style="color:#ADBAC7;">catkin_make</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cd catkin_ws</span></span>
<span class="line"><span style="color:#24292E;">catkin_make</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果遇到报错，先解决报错，如果编译没有报错，则运行 ORB-SLAM2</p><h2 id="运行效果" tabindex="-1">运行效果 <a class="header-anchor" href="#运行效果" aria-label="Permalink to &quot;运行效果&quot;">​</a></h2><p>首先启动 ROS</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">roscore</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">roscore</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>按住 Ctrl+Alt+T 可以快速创建新的终端 创建一个新终端</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">roslaunch usb_cam usb_cam</span><span style="color:#F47067;">-</span><span style="color:#ADBAC7;">test.launch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">roslaunch usb_cam usb_cam</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">test.launch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再创建一个新终端</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">rosrun ORB_SLAM2 Mono Vocabulary</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">ORBvoc.txt Examples</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">Monocular</span><span style="color:#F47067;">/</span><span style="color:#ADBAC7;">TUM2.yaml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">rosrun ORB_SLAM2 Mono Vocabulary</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">ORBvoc.txt Examples</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">Monocular</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">TUM2.yaml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,40),C=s("p",null,[s("img",{src:"https://img-blog.csdnimg.cn/9c412df2bbd24ce19c62b4086fc6e954.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODU3OTIy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"})],-1),k=s("p",null,[n("这里是单目相机情况下的"),s("a",{href:"https://www.bilibili.com/video/BV1iM4y157oY",target:"_blank",rel:"noreferrer"},"具体演示效果")],-1),D=s("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[s("iframe",{src:"//player.bilibili.com/player.html?aid=932224585&bvid=BV1iM4y157oY&cid=385019541&page=1&autoplay=0",frameborder:"no",scrolling:"no",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),B=t('<p>以上就是本文的全部内容，本文写的比较粗糙，之后会补上缺失的部分重要内容。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>OK！本期关于如何在 Ubuntu18.04 上用 Opencv4.5.2+Melodic+ 电脑自带摄像头跑通 ORB-SLAM2 就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://github.com/raulmur/orb_slam2." target="_blank" rel="noreferrer">ORB-SLAM2</a> <a href="#fnref1" class="footnote-backref">👈🏻</a></p></li></ol></section>',6);function E(a,f,O,F,M,R){const i=u,d=p("ClientOnly"),b=p("font");return o(),m("div",null,[g,c(d,null,{default:r(()=>{var e,l;return[(((e=a.$frontmatter)==null?void 0:e.aside)??!0)&&(((l=a.$frontmatter)==null?void 0:l.showArticleMetadata)??!0)?(o(),h(i,{key:0,article:a.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),v,c(b,{color:"#999AAA"},{default:r(()=>[n("需要先对相机进行初始化，获取到一定数量的关键帧，然后才能进行 SLAM 点云建图。")]),_:1}),C,k,D,B])}const T=y(_,[["render",E]]);export{L as __pageData,T as default};
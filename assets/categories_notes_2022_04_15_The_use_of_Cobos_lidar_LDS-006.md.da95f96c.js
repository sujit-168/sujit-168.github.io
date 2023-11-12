import{_ as i}from"./chunks/ArticleMetadata.fa7eca87.js";import{_ as o,C as h,o as r,c,H as d,w as p,k as l,a as b,Q as g,b as u,e as y}from"./chunks/framework.daca35a3.js";import"./chunks/md5.3e7612d8.js";const B=JSON.parse('{"title":"科沃斯激光雷达 LDS-006 的使用","description":"","frontmatter":{"title":"科沃斯激光雷达 LDS-006 的使用","date":"2022-04-15T20:41:15.000Z","tags":["激光雷达，LDS-006"],"categories":["激光雷达，LDS-006"],"copyright":true},"headers":[],"relativePath":"categories/notes/2022/04/15/The_use_of_Cobos_lidar_LDS-006.md","filePath":"categories/notes/2022/04/15/The_use_of_Cobos_lidar_LDS-006.md","lastUpdated":1699715502000}'),m={name:"categories/notes/2022/04/15/The_use_of_Cobos_lidar_LDS-006.md"},_=l("h1",{id:"科沃斯激光雷达-lds-006-的使用",tabindex:"-1"},[b("科沃斯激光雷达 LDS-006 的使用 "),l("a",{class:"header-anchor",href:"#科沃斯激光雷达-lds-006-的使用","aria-label":'Permalink to "科沃斯激光雷达 LDS-006 的使用"'},"​")],-1),f=g('<h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>需要提前准备的软件和硬件如下</p><h4 id="硬件环境" tabindex="-1">硬件环境 <a class="header-anchor" href="#硬件环境" aria-label="Permalink to &quot;硬件环境&quot;">​</a></h4><ul><li>电脑 1 台</li><li>USB 转 TTL1 个</li><li>杜邦线若干</li><li>科沃斯 LDS-006 激光雷达（在咸鱼或者某宝可以淘到）</li></ul><h4 id="软件环境" tabindex="-1">软件环境 <a class="header-anchor" href="#软件环境" aria-label="Permalink to &quot;软件环境&quot;">​</a></h4><ul><li>Ubuntu 及对应版本的 ROS 环境，Windows10</li><li>XCOM，Linux 下的串口调试工具软件</li></ul><h4 id="硬件连接方式" tabindex="-1">硬件连接方式 <a class="header-anchor" href="#硬件连接方式" aria-label="Permalink to &quot;硬件连接方式&quot;">​</a></h4><p>LDS-006 使用 5V 供电，电脑的 USB3.0 可以提供 5V 电压，使用 USB 转 TTL 模块直接连接到 USB 口即可</p><p><img src="https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221334.png" alt="USB 转 TTL 连线"></p><h2 id="连接示图" tabindex="-1">连接示图 <a class="header-anchor" href="#连接示图" aria-label="Permalink to &quot;连接示图&quot;">​</a></h2><p>该激光雷达的四根传输线中，红线为 VCC，黑线为 GND，与 USB 转 TTL 模块的 RXD 与 TXD 接口要交叉连接，若无法正常收发数据，检查一下接线是否有问题，交换一下 RXD 与 TXD。</p><p><img src="https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221039.jpg" alt="实物"></p><h2 id="模块介绍" tabindex="-1">模块介绍 <a class="header-anchor" href="#模块介绍" aria-label="Permalink to &quot;模块介绍&quot;">​</a></h2><p>科沃斯 LDS-006 设备采用串口通信，波特率为 115200，测量范围大致在 0-10m 左右</p><p>设备的启动指令为</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;">startlds$</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">startlds$</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>停止指令为</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;">stoplds$</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">stoplds$</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动设备之后，就能通过串口获得传感器数据，下图为 Windows 下使用 XCOM 得到的数据效果</p><p><img src="https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221795.png" alt="XCOM"></p><p>由于其通信协议是闭源的，根据 X 包网友提供的信息，可以得出其激光雷达的通讯协议是基于标准通讯协议略微修改得到的，具体如下图</p><p><img src="https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221196.png" alt="image-20220414183549007"></p><h3 id="通信参数" tabindex="-1">通信参数 <a class="header-anchor" href="#通信参数" aria-label="Permalink to &quot;通信参数&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">波特率</th><th style="text-align:center;">数据检验</th><th style="text-align:center;">检验位</th><th style="text-align:center;">数据位</th><th style="text-align:center;">停止位</th><th style="text-align:center;">数据格式</th></tr></thead><tbody><tr><td style="text-align:center;">230400bps</td><td style="text-align:center;">2bytes</td><td style="text-align:center;">NONE</td><td style="text-align:center;">8 bits</td><td style="text-align:center;">1 bits</td><td style="text-align:center;">十六进制 (HEX)</td></tr></tbody></table><h3 id="数据格式" tabindex="-1">数据格式 <a class="header-anchor" href="#数据格式" aria-label="Permalink to &quot;数据格式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">起始</th><th style="text-align:center;">索引</th><th style="text-align:center;">速度</th><th style="text-align:center;">数据</th><th style="text-align:center;">校验</th></tr></thead><tbody><tr><td style="text-align:center;">1 byte</td><td style="text-align:center;">1 byte</td><td style="text-align:center;">2bytes</td><td style="text-align:center;">4*4bytes</td><td style="text-align:center;">2 bytes</td></tr></tbody></table><p>上而请求数据格式是 HEX 形式，详细说明如下：</p><h4 id="起始-1byte" tabindex="-1">起始：1byte <a class="header-anchor" href="#起始-1byte" aria-label="Permalink to &quot;起始：1byte&quot;">​</a></h4><p>标志数据包传输开始，当前默认为 0xFA；</p><h4 id="索引-1byte" tabindex="-1">索引：1byte <a class="header-anchor" href="#索引-1byte" aria-label="Permalink to &quot;索引：1byte&quot;">​</a></h4><ul><li>本协议传输是采用以 4 个点数据为一包传输，当前协议以角度分割，</li><li>0-3°为第一包，索引为 0xA0:</li><li>356-359”为一圈的最后一包，索引为 0xF9;</li></ul><h4 id="速度-2bytes" tabindex="-1">速度：2bytes <a class="header-anchor" href="#速度-2bytes" aria-label="Permalink to &quot;速度：2bytes&quot;">​</a></h4><p>速度 speed 采用转/分钟 (RPM) 为单位。数据为 16bits 定点数。 其中低 6bits 为小数部分，传输时分割为两个字节。先传输低八位数据 speed[7:0]. 再传输高八位数据 speed[15:8];</p><h4 id="数据-16bytes" tabindex="-1">数据：16bytes <a class="header-anchor" href="#数据-16bytes" aria-label="Permalink to &quot;数据：16bytes&quot;">​</a></h4><p>包含 4 个点的距离信息 distance[13:0] 和强度信息 strength[15:0]. 数据 0 为第 i 点数据。 敖据 1 为第 i-1 点数据。 数据 2 为第 i-2 点数据。 数据 3 为第 i-3 点数据： 每个点数据为 4bytes. 传输顺序为 BYTE0 &gt;BYTE3; BYTE0 = distance[7:0]: BYTE1= (flag0, flag1, distance[13:8]} ;其中 flag0: 1bit，为&#39;I&#39; 表示距离数据无效 flag1: 1bit，为 &#39;I&#39;表示强度信息异常 BYTE2 = strength[7:0] BYTE3 = strength[15:8]</p><h4 id="数据校验-2bytes" tabindex="-1">数据校验：2bytes <a class="header-anchor" href="#数据校验-2bytes" aria-label="Permalink to &quot;数据校验：2bytes&quot;">​</a></h4><p>对前 20bytes 校验，校验 checksum[15:0]，先传输低位， ​<strong>校验公式如下：</strong> ​chk32= 32&#39; d0; ​chk16= 16&#39; d0; ​for( i-0; i&lt;10; i=i+1) ​chk32 = (chk32 &lt;&lt; 1) + (mem[2 * i+1]&lt;&lt;8 +mem[2 * i])； ​chk16 = (chk32 &amp; 16&#39;h7fff) + (chk32 &gt;&gt; 15); ​chk16 = chk16 &amp; 16’ h7fff; ​checksum = chk16 ; 其中 mem 中存的是数据包前 20 字节数据。</p><h3 id="示例如下" tabindex="-1">示例如下： <a class="header-anchor" href="#示例如下" aria-label="Permalink to &quot;示例如下：&quot;">​</a></h3><p>angle = 0; //角度为 0-3 distance = (I&#39; b0, I&#39;b0, 14 d5000); //单位为毫米 strength = 16&#39; d1024; speed = 16&#39; d20832; //5. 425rad/st325.5RPM---&gt;转定点数 则数据如下： FA A0 60 51 88 13 00 01 88 13 00 01 88 13 00 01 88 13 00 01 93 23</p><table><thead><tr><th style="text-align:center;">起始</th><th style="text-align:center;">索引</th><th style="text-align:center;">速度</th><th style="text-align:center;">数据 0</th><th style="text-align:center;">数据 1</th><th style="text-align:center;">数据 2</th><th style="text-align:center;">数据 3</th><th style="text-align:center;">校验</th></tr></thead><tbody><tr><td style="text-align:center;">FA</td><td style="text-align:center;">A0</td><td style="text-align:center;">60 51</td><td style="text-align:center;">88 13 00 01</td><td style="text-align:center;">88 13 00 01</td><td style="text-align:center;">88 13 00 01</td><td style="text-align:center;">88 13 00 01</td><td style="text-align:center;">93 23</td></tr></tbody></table><p><strong>全图如下</strong></p><p><img src="https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142221719.jpg" alt="LDS-006 激光雷达通讯协议"></p><p>返回的串口数据</p><p><img src="https://raw.githubusercontent.com/sujit-168/Blog-Picture/master/Typora/202204142222633.png" alt="image-20220414183848619"></p><p>ROS 驱动功能包：<a href="https://pan.baidu.com/s/16UpOsM5V8vjHWAsz4YnRWw" target="_blank" rel="noreferrer">xv_ 11_ laser. _driver-hydro-devel.zip</a></p><p>提取码：rnna</p><h3 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h3><ul><li><a href="https://www.ncnynl.com/archives/201611/1100.html" target="_blank" rel="noreferrer">ROS 与激光雷达入门教程-ROS 中使用激光雷达 (RPLIDAR)</a></li><li><a href="https://www.ncnynl.com/archives/201611/1090.html" target="_blank" rel="noreferrer">ROS 与激光雷达入门教程-ROS 中使用激光雷达 (Neato XV-11)</a></li><li><a href="https://www.zhihu.com/people/qi-zhi-80-55" target="_blank" rel="noreferrer">旗帜</a>的视频链接：<a href="https://www.zhihu.com/zvideo/1483908276357779457" target="_blank" rel="noreferrer">从扫地机器人的激光雷达到 ROS，从 MPU6050 到 IMU 姿态 - 旗帜的视频 - 知乎</a></li><li><a href="https://www.zhihu.com/people/qi-zhi-80-55" target="_blank" rel="noreferrer">旗帜</a>的视频链接：<a href="https://www.zhihu.com/zvideo/1488421522355818496" target="_blank" rel="noreferrer">科沃斯扫地机激光雷达 LDS-006 通信协议与 ROS 驱动分享 - 旗帜的视频 - 知乎</a></li></ul><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>OK！本期关于介绍了如何使用科沃斯激光雷达 LDS-006 的教程就到此为止，喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！</p>',50);function x(t,k,S,q,T,w){const s=i,n=h("ClientOnly");return r(),c("div",null,[_,d(n,null,{default:p(()=>{var e,a;return[(((e=t.$frontmatter)==null?void 0:e.aside)??!0)&&(((a=t.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(r(),u(s,{key:0,article:t.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),f])}const L=o(m,[["render",x]]);export{B as __pageData,L as default};

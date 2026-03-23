---
layout: home

title: 甦傑的博客
titleTemplate: 欢迎来到我的博客，在这里你可以看到很多内容

hero:
  name: 甦傑的博客
  text: Talk is cheap. Show me the code.
  tagline: 专注 C++ 底层、ROS/Gazebo 仿真与 VSLAM。在物理世界与段错误 (Segfaults) 中寻找秩序。
  image:
    src: /avatar.jpg
    alt: Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /note/index
    - theme: alt
      text: 在 GitHub 查看
      link: https://github.com/sujit-168/
---

<div style="max-width: 800px; margin: 0 auto; padding: 2rem;">
  <div class="language-cpp">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">cpp</span>
    <pre><code><span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#F07178;"> &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#F07178;"> &lt;ros/ros.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#82AAFF;"> main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> argc</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;"> char</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ros</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">argc</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> "</span><span style="color:#C3E88D;">sujie_168_brain</span><span style="color:#89DDFF;">");</span></span>
<span class="line"><span style="color:#676E95;">    // Warning: Breakthrough private access rights activated</span></span>
<span class="line"><span style="color:#A6ACCD;">    Memory</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">align_to_hardcore</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    while</span><span style="color:#89DDFF;"> (</span><span style="color:#A6ACCD;">ros</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">ok</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> &amp;&amp;</span><span style="color:#A6ACCD;"> still_alive</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">        std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#89DDFF;"> "</span><span style="color:#C3E88D;">Debugging the chaos of real world...</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;"> &lt;&lt;</span><span style="color:#A6ACCD;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">        code</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#82AAFF;">        sleep</span><span style="color:#89DDFF;">();</span><span style="color:#676E95;"> // occasionally</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">    return</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;"> // Never reached</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre>
  </div>
</div>

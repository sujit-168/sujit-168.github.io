import{_ as p}from"./chunks/ArticleMetadata.4a1a58d6.js";import{_ as r,C as c,o,c as i,H as d,w as _,k as n,a as m,Q as h,b as y,e as g}from"./chunks/framework.144d84a9.js";import"./chunks/md5.3e7612d8.js";const q=JSON.parse('{"title":"如何将 map 和 world 文件的坐标轴进行对齐","description":"","frontmatter":{"title":"如何将 map 和 world 文件的坐标轴进行对齐","date":"2024-03-24 14:06","categories":["ros"],"tags":["ROS","Gazebo",".world",".pgm",".yaml"],"copyright":true},"headers":[],"relativePath":"ros/2024/03/24/How_to_align_map_and_dot_world_in_launch_and_yaml_file.md","filePath":"ros/2024/03/24/How_to_align_map_and_dot_world_in_launch_and_yaml_file.md","lastUpdated":1711766188000}'),f={name:"ros/2024/03/24/How_to_align_map_and_dot_world_in_launch_and_yaml_file.md"},u=n("h1",{id:"如何将-map-和-world-文件的坐标轴进行对齐",tabindex:"-1"},[m("如何将 map 和 world 文件的坐标轴进行对齐 "),n("a",{class:"header-anchor",href:"#如何将-map-和-world-文件的坐标轴进行对齐","aria-label":'Permalink to "如何将 map 和 world 文件的坐标轴进行对齐"'},"​")],-1),b=h(`<div class="tip custom-block"><p class="custom-block-title">TIPS</p><ol><li>在建图过程中，假设你的 gazebo 中的世界坐标系是<code>world</code>，进行 slam 建图时的地图坐标系是<code>map</code></li><li>在 <code>SLAM</code> 建图时，map_server 会以<code>机器人坐标系</code>下的<code>x</code>轴和<code>y</code>轴对齐为标准建立 map 坐标系。</li><li>如果你希望 gazebo 中的 <code>model_state</code> 与估算的 <code>odom 里程计</code>保证对齐时，则需要保证<code>world</code>坐标系下的<code>x</code>轴和<code>y</code>轴与<code>map</code>坐标系下的<code>x</code>轴和<code>y</code>轴对齐。</li></ol></div><h2 id="rviz-显示对齐后的模型" tabindex="-1">Rviz 显示对齐后的模型 <a class="header-anchor" href="#rviz-显示对齐后的模型" aria-label="Permalink to &quot;Rviz 显示对齐后的模型&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#8DDB8C;">image</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">tianracer_racetrack.pgm</span><span style="color:#ADBAC7;">                  </span><span style="color:#768390;"># 注意：最好去除 map_server 保存该文件时在该行使用的绝对路径，降低了可移植性</span></span>
<span class="line"><span style="color:#8DDB8C;">resolution</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">0.025000</span></span>
<span class="line"><span style="color:#8DDB8C;">origin</span><span style="color:#ADBAC7;">: [</span><span style="color:#6CB6FF;">-12.200000</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">-12.500000</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">0.000000</span><span style="color:#ADBAC7;">]      </span><span style="color:#768390;"># 这里的 3 个数比较关键，在 map frame_id 下的 x(m),y,theta（rad）3 个关键参数    </span></span>
<span class="line"><span style="color:#8DDB8C;">negate</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">0</span></span>
<span class="line"><span style="color:#8DDB8C;">occupied_thresh</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">0.65</span></span>
<span class="line"><span style="color:#8DDB8C;">free_thresh</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">0.196</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">tianracer_racetrack.pgm</span><span style="color:#24292E;">                  </span><span style="color:#6A737D;"># 注意：最好去除 map_server 保存该文件时在该行使用的绝对路径，降低了可移植性</span></span>
<span class="line"><span style="color:#22863A;">resolution</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.025000</span></span>
<span class="line"><span style="color:#22863A;">origin</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">-12.200000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">-12.500000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.000000</span><span style="color:#24292E;">]      </span><span style="color:#6A737D;"># 这里的 3 个数比较关键，在 map frame_id 下的 x(m),y,theta（rad）3 个关键参数    </span></span>
<span class="line"><span style="color:#22863A;">negate</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#22863A;">occupied_thresh</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.65</span></span>
<span class="line"><span style="color:#22863A;">free_thresh</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.196</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="如何修改地图" tabindex="-1">如何修改地图 <a class="header-anchor" href="#如何修改地图" aria-label="Permalink to &quot;如何修改地图&quot;">​</a></h2><p>在<code>ROS</code>中，<code>.pgm</code>文件是 Rviz 显示地图时使用的文件，它保存了地图的像素信息。</p><div class="tip custom-block"><p class="custom-block-title">TIPS</p><p>那么<code>.pgm</code>文件是什么呢？</p><p>PGM 文件是以便携式灰度图（PGM）格式保存的灰度图像文件，每个像素用一个或两个字节（8 或 16 位）进行编码。它包含标题信息和数字网格，这些网格表示从黑色（0）到白色（最多 65,536）的不同灰色阴影。PGM 文件通常存储在 ASCII 码 文本格式，但也有二进制表示形式。</p></div><h3 id="旋转图像" tabindex="-1">旋转图像 <a class="header-anchor" href="#旋转图像" aria-label="Permalink to &quot;旋转图像&quot;">​</a></h3><h4 id="imageviewer" tabindex="-1">ImageViewer <a class="header-anchor" href="#imageviewer" aria-label="Permalink to &quot;ImageViewer&quot;">​</a></h4><p>一般情况下在<code>ImageViewer</code>中，可以对图像进行旋转操作。</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/image_view_rotate_defeat.gif" alt=""></p><div class="info custom-block"><p class="custom-block-title">提示</p><p>但是不支持<code>.pgm</code>格式哈</p></div><h4 id="gimp" tabindex="-1">GIMP <a class="header-anchor" href="#gimp" aria-label="Permalink to &quot;GIMP&quot;">​</a></h4><p>在<code>GIMP</code>中，可以对图像进行旋转操作。</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/gimp_rotate_success.gif" alt=""></p><h4 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h4><p>map_server 导入旋转过后图片 <img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324155110.png" alt=""></p><h2 id="如何检查" tabindex="-1">如何检查 <a class="header-anchor" href="#如何检查" aria-label="Permalink to &quot;如何检查&quot;">​</a></h2><h3 id="添加-axes" tabindex="-1">添加 axes <a class="header-anchor" href="#添加-axes" aria-label="Permalink to &quot;添加 axes&quot;">​</a></h3><p>选择 axes 类型 <img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324151932.png" alt=""></p><p>可以看到，默认状态下的坐标轴朝向 <img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324152143.png" alt=""></p><p>然后手动选择参考系为<code>map</code><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324152628.png" alt=""></p><p>可以看到，<code>axis</code> 参考为<code>map</code>,仍然符合预期。 <img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240324152753.png" alt=""></p><h3 id="world-与-map-对齐" tabindex="-1">world 与 map 对齐 <a class="header-anchor" href="#world-与-map-对齐" aria-label="Permalink to &quot;world 与 map 对齐&quot;">​</a></h3><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/20240330103032.png" alt=""></p><h2 id="不同地图坐标系对齐" tabindex="-1">不同地图坐标系对齐 <a class="header-anchor" href="#不同地图坐标系对齐" aria-label="Permalink to &quot;不同地图坐标系对齐&quot;">​</a></h2><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_align_map_and_dot_world_in_launch_and_yaml_file/align_the_origin_point_of_reading_picture.png" alt=""></p>`,26);function w(a,C,A,v,k,B){const l=p,t=c("ClientOnly");return o(),i("div",null,[u,d(t,null,{default:_(()=>{var s,e;return[(((s=a.$frontmatter)==null?void 0:s.aside)??!0)&&(((e=a.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(o(),y(l,{key:0,article:a.$frontmatter},null,8,["article"])):g("",!0)]}),_:1}),b])}const F=r(f,[["render",w]]);export{q as __pageData,F as default};
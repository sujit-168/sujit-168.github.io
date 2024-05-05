import{_ as n}from"./chunks/ArticleMetadata.1f2d3a8b.js";import{_ as s,C as d,o as r,c,H as _,w as h,k as o,a as b,Q as m,b as p,e as u}from"./chunks/framework.4303053c.js";import"./chunks/md5.3e7612d8.js";const V=JSON.parse('{"title":"gazebo 中的小车溜坡问题","description":"","frontmatter":{"title":"gazebo 中的小车溜坡问题","date":"2024-05-04 11:23","categories":["Gazebo","ros","Meshlab","Blender"],"tags":["Interia Matrix"],"copyright":true},"headers":[],"relativePath":"blender/2024/05/04/Car_sliding_problem_in_Gazebo.md","filePath":"blender/2024/05/04/Car_sliding_problem_in_Gazebo.md","lastUpdated":1714872977000}'),f={name:"blender/2024/05/04/Car_sliding_problem_in_Gazebo.md"},g=o("h1",{id:"gazebo-中的小车溜坡问题",tabindex:"-1"},[b("gazebo 中的小车溜坡问题 "),o("a",{class:"header-anchor",href:"#gazebo-中的小车溜坡问题","aria-label":'Permalink to "gazebo 中的小车溜坡问题"'},"​")],-1),z=m('<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>在 Gazebo 中，小车在运动过程中可能会出现溜坡的情况。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>可以通过调整小车的模型参数或添加额外的物理约束来解决小车溜坡的问题。 主要是 <code>mass</code> 和 <code>inertial</code> 参数的调整。</p><h2 id="参数调整" tabindex="-1">参数调整 <a class="header-anchor" href="#参数调整" aria-label="Permalink to &quot;参数调整&quot;">​</a></h2><h3 id="mass" tabindex="-1">mass <a class="header-anchor" href="#mass" aria-label="Permalink to &quot;mass&quot;">​</a></h3><p><code>mass</code> 参数用于指定小车的质量。调整 <code>mass</code> 参数可以改变小车的惯性，从而影响小车的运动行为。整车各部分的质量分布不均，会容易导致小车出现溜坡的情况。所以，调整调整质量分布可以有效解决这个问题。</p><h3 id="inertial" tabindex="-1">inertial <a class="header-anchor" href="#inertial" aria-label="Permalink to &quot;inertial&quot;">​</a></h3><p><code>inertial</code> 参数用于指定小车的惯性矩阵。调整 <code>inertial</code> 参数可以改变小车的惯性张量，从而影响小车的运动行为。</p><ul><li><p>简化模型 Meshlab 仅计算闭合形状（所以可以将所有零件合并后导出为一个整体）的正确惯性参数。如果你的链接是开放的，或者它是一个非常复杂或凹形的，在计算惯性参数之前，最好简化模型（例如在搅拌机中）。或者，如果您的模型具有碰撞形状，请使用它们代替完全分辨率模型。</p></li><li><p>非均匀体 对于强非齐次体，本教程可能不起作用。有两个问题。第一个问题是，Meshlab 假设均匀密度体。另一种方法是，Meshlab 计算相对于计算质心的惯性张量。然而，对于强非齐次体，计算的质心将远离实际质心，因此计算的惯性张量可能是错误的。 一种解决方案是将链接细分为更均匀的部分，并用固定接头连接它们，但这并不总是可能的。唯一的解决办法是通过实验找出惯性张量，这肯定需要花费大量的时间和精力。</p></li></ul><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/weixin_55937915/article/details/126873520?" target="_blank" rel="noreferrer">已解决（一分钟）gazebo 生成 urdf 小车模型后出现原地打转&amp;x、y 轴方向偏移问题的解决参考方案</a></li><li><a href="https://blog.csdn.net/xp1994816/article/details/100568004" target="_blank" rel="noreferrer">Gazebo 中模型自行滑动（后溜）的原因探究</a></li><li><a href="https://blog.csdn.net/lzzzzzzm/article/details/119899598?" target="_blank" rel="noreferrer">ROS 漫漫长路（一）——Gazebo 中机器人圆柱，球，长方体惯性矩阵推导与代码实现</a></li></ul>',12);function k(e,x,q,C,P,G){const l=n,i=d("ClientOnly");return r(),c("div",null,[g,_(i,null,{default:h(()=>{var a,t;return[(((a=e.$frontmatter)==null?void 0:a.aside)??!0)&&(((t=e.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(r(),p(l,{key:0,article:e.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),z])}const $=s(f,[["render",k]]);export{V as __pageData,$ as default};

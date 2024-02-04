import{_ as d}from"./chunks/ArticleMetadata.4a1a58d6.js";import{_ as u,C as e,o as _,c as f,H as n,w as r,k as s,a as l,Q as i,b as m,e as T}from"./chunks/framework.144d84a9.js";import"./chunks/md5.3e7612d8.js";const k=JSON.parse('{"title":"如何为自己的爱机神舟 TX6-CT5DA 加装固态硬盘","description":"","frontmatter":{"title":"如何为自己的爱机神舟 TX6-CT5DA 加装固态硬盘","date":"2021-01-22T14:19:19.000Z","categories":["note"],"tags":["神舟战神 TX6-CT5DA，固态硬盘"],"toc":true,"copyright":true},"headers":[],"relativePath":"categories/notes/2021/01/22/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA.md","filePath":"categories/notes/2021/01/22/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA.md","lastUpdated":1707057975000}'),S={name:"categories/notes/2021/01/22/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA.md"},g=s("h1",{id:"我是如何为自己的爱机神舟-tx6-ct5da-加装固态硬盘",tabindex:"-1"},[l("我是如何为自己的爱机神舟 TX6-CT5DA 加装固态硬盘 "),s("a",{class:"header-anchor",href:"#我是如何为自己的爱机神舟-tx6-ct5da-加装固态硬盘","aria-label":'Permalink to "我是如何为自己的爱机神舟 TX6-CT5DA 加装固态硬盘"'},"​")],-1),D=i('<p>在学习 Linux 系统的使用的过程中，在学习了一段时间之后，我觉得有必要为自己的战神（TX6-CT5DA）加装一块 128G 的固态硬盘用于安装 ubuntu18.04 系统，本文属于 Ubuntu 与 ROS 系列。</p><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>如果你想使用 Windows 与 Linux 两种系统，比如 Ubuntu 之类的，同时你追求更高的性能，那么显然双系统可能是你更好的选择。</p><h3 id="前期准备" tabindex="-1">前期准备 <a class="header-anchor" href="#前期准备" aria-label="Permalink to &quot;前期准备&quot;">​</a></h3><p>1.提前下载好自己需要的 Linux 安装镜像，比如 Ubuntu16.04</p><p>2.准备一个大小至少为 32G 的 U 盘</p><p>3.准备一块不小于 128G 的固态硬盘，不建议机械硬盘，这里就不多解释了。</p><p>这里附上我所购买的<a href="https://m.tb.cn/h.488QMNG?sm=429b6e" target="_blank" rel="noreferrer">宏想固态</a></p><p>4.准备必要的拆机工具，比如螺丝刀。</p><h3 id="具体步骤" tabindex="-1">具体步骤 <a class="header-anchor" href="#具体步骤" aria-label="Permalink to &quot;具体步骤&quot;">​</a></h3><p>1.首先将笔记本电脑关机，如果是 Win10 家庭版可以使用快捷组合键 Win+X，U，U 即可快速关机。</p><p>2.取下笔记本的电池</p><p>3.将笔记本后盖的螺丝拧下来</p><p>4.使用专用的撬棒沿着后盖的纹路一点一点撬开，过程中要胆大心细，每撬开一处可以听到清脆的响声，注意过程中不要太过着急，卡扣比较脆弱，很容易弄断。</p>',14),C=i('<p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA/1.jpg" alt=""></p><p>这个是我拆机后的图片，神舟战神 T 系列可以看到，英特尔 i5 9400 CPU 芯片并不是直接焊在主板上的，也就是说，之后有可能可以更换更高性能的 CPU 芯片，比如 i5 10400，当然这还是需要考虑功耗与散热方面的影响。</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA/2.jpg" alt=""></p><p>因为是蓝天公模，所以后盖也很有特点。</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA/3.jpg" alt=""></p><p>这是加上固态硬盘后的图片，直接将其对应好接口插入即可</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA/4.jpg" alt=""></p><p>可以看到，还有一个内存条接口和 M.2 固态硬盘接口</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA/5.jpg" alt=""></p><p>难得自己拆机一次，建议备好清灰工具之类的，可以为自己的电脑清清灰。</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA/6.jpg" alt=""></p><p>清灰完成后先不要着急合上后盖，先装上电池，开机检查新的固态硬盘能否正常进行读写操作。避免返工。</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_install_an_SSD_for_your_love_machine_Shenzhou_TX6-CT5DA/7.jpg" alt=""></p><p>检查完成后没有问题，先进行关机，因为不取下电池，无法安装后盖。</p><p>之后按照正常流程装回所有部分即可。</p><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>OK！本期关于如何为自己的爱机神舟 TX6-CT5DA 加装固态硬盘就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！</p>',17);function A(t,b,y,X,w,v){const p=d,c=e("ClientOnly"),h=e("font");return _(),f("div",null,[g,n(c,null,{default:r(()=>{var o,a;return[(((o=t.$frontmatter)==null?void 0:o.aside)??!0)&&(((a=t.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(_(),m(p,{key:0,article:t.$frontmatter},null,8,["article"])):T("",!0)]}),_:1}),D,n(h,{color:"#999AAA"},{default:r(()=>[l("注意：不建议大力出奇迹的想法，出问题的看客责任自负，还有请小白同学慎重考虑是否要亲力亲为。")]),_:1}),C])}const z=u(S,[["render",A]]);export{k as __pageData,z as default};
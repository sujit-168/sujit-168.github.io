import{_ as s}from"./chunks/ArticleMetadata.fa7eca87.js";import{_ as l,C as c,o,c as p,H as h,w as d,k as i,a as g,Q as _,b as u,e as b}from"./chunks/framework.daca35a3.js";import"./chunks/md5.3e7612d8.js";const A=JSON.parse('{"title":"如何提高在 github 上 git clone 的效率","description":"","frontmatter":{"title":"如何提高在 github 上 git clone 的效率","date":"2021-04-13T08:17:00.000Z","categories":["github"],"tags":["github"],"copyright":true},"headers":[],"relativePath":"categories/notes/2021/04/13/How_to_improve_the_efficiency_of_git-clone_on_github.md","filePath":"categories/notes/2021/04/13/How_to_improve_the_efficiency_of_git-clone_on_github.md","lastUpdated":1699715502000}'),m={name:"categories/notes/2021/04/13/How_to_improve_the_efficiency_of_git-clone_on_github.md"},f=i("h1",{id:"如何提高在-github-上-git-clone-的效率",tabindex:"-1"},[g("如何提高在 github 上 git clone 的效率 "),i("a",{class:"header-anchor",href:"#如何提高在-github-上-git-clone-的效率","aria-label":'Permalink to "如何提高在 github 上 git clone 的效率"'},"​")],-1),k=_('<h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>最近在 github 上<code>clone</code>一些项目时，发现下载速度很慢，只有几 kB/s，需要等待很久，才能下载完整个项目，并且途中时长出现断连的情况，非常影响用户体验。 鉴于难以忍受这种操作体验，所以就四处寻找解决办法，这次运气不错，在这两篇文章里，很容易就找到了。</p><ul><li><a href="https://blog.csdn.net/a1405/article/details/115438017" target="_blank" rel="noreferrer">提高国内访问 GitHub 的速度的 9 种方案</a></li><li><a href="https://www.secn.net/article/1562784.html" target="_blank" rel="noreferrer">GitHub 下载慢？可以试试下面的方法提升速度</a></li></ul><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>平时使用的话，推荐使用<code>ghproxy</code>镜像源，这个 github 镜像源的使用体验个人感觉很不错。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;">git clone https://github.com/XXXX/仓库名.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git clone https://github.com/XXXX/仓库名.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用方法也非常简单，在 <a href="https://github.com/%EF%BC%8C%E4%B9%8B%E5%89%8D%E6%B7%BB%E5%8A%A0" target="_blank" rel="noreferrer">https://github.com/，之前添加</a> <a href="https://ghproxy.com" target="_blank" rel="noreferrer">https://ghproxy.com</a> 即可</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;">git clone  https://ghproxy.com/https://github.com/XXXX/仓库名.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git clone  https://ghproxy.com/https://github.com/XXXX/仓库名.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>有时也会遇到将项目 push 到 github 远端速度慢的问题，这里也可以逆向思维，切换镜像源的方法，来提升上传速度。</p><p>最后这里在附上 Segmentfault 大佬民工哥的文章<a href="https://segmentfault.com/a/1190000023734704" target="_blank" rel="noreferrer">三年 Git 使用心得 &amp; 常见问题整理</a>，希望有所帮助。</p><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>OK！本期关于如何解决来自 github 的警告:Dependabot alerts 就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！</p>',12);function v(e,y,X,C,w,x){const r=s,n=c("ClientOnly");return o(),p("div",null,[f,h(n,null,{default:d(()=>{var t,a;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((a=e.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(o(),u(r,{key:0,article:e.$frontmatter},null,8,["article"])):b("",!0)]}),_:1}),k])}const E=l(m,[["render",v]]);export{A as __pageData,E as default};

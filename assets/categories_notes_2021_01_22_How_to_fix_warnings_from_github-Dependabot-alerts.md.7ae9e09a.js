import{_ as i}from"./chunks/ArticleMetadata.e115931a.js";import{_ as l,C as _,o as r,c as p,H as d,w as c,k as o,a as g,Q as b,b as h,e as f}from"./chunks/framework.09228d5a.js";import"./chunks/md5.3e7612d8.js";const V=JSON.parse('{"title":"如何解决来自 github 的警告:Dependabot alerts","description":"","frontmatter":{"title":"如何解决来自 github 的警告:Dependabot alerts","date":"2021-01-22T17:06:01.000Z","categories":["note"],"tags":["github"],"copyright":true},"headers":[],"relativePath":"categories/notes/2021/01/22/How_to_fix_warnings_from_github-Dependabot-alerts.md","filePath":"categories/notes/2021/01/22/How_to_fix_warnings_from_github-Dependabot-alerts.md","lastUpdated":1707057975000}'),m={name:"categories/notes/2021/01/22/How_to_fix_warnings_from_github-Dependabot-alerts.md"},u=o("h1",{id:"如何解决来自-github-的警告-dependabot-alerts",tabindex:"-1"},[g("如何解决来自 github 的警告:Dependabot alerts "),o("a",{class:"header-anchor",href:"#如何解决来自-github-的警告-dependabot-alerts","aria-label":'Permalink to "如何解决来自 github 的警告:Dependabot alerts"'},"​")],-1),w=b('<p>最近没有怎么注意我的博客，今天准备到 github 上学习，发现来自 github 的警告，作为一个稍微有点强迫症的人，这怎么受得了这些<a href="https://docs.github.com/en/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies" target="_blank" rel="noreferrer">Dependabot alerts</a>警告</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_warnings_from_github-Dependabot-alerts/1.jpg" alt=""></p><p>发现诸如下图的多个官方警告</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_warnings_from_github-Dependabot-alerts/2.jpg" alt=""></p><h2 id="更新依赖配置" tabindex="-1">更新依赖配置 <a class="header-anchor" href="#更新依赖配置" aria-label="Permalink to &quot;更新依赖配置&quot;">​</a></h2><p>打开 yarn.lock</p><p>将其中代码复制到新建的 yarn.txt 文件中，然后使用 yarn.txt 文件通过更改后缀名的方式，将项目的原 yarn.lock 文件替换。</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_warnings_from_github-Dependabot-alerts/3.jpg" alt=""></p><h2 id="更新远端依赖" tabindex="-1">更新远端依赖 <a class="header-anchor" href="#更新远端依赖" aria-label="Permalink to &quot;更新远端依赖&quot;">​</a></h2><p>再将项目文件<a href="https://blog.csdn.net/Lucky_LXG/article/details/77849212" target="_blank" rel="noreferrer">使用 git 推送部署到 github</a>的远端服务器上</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_warnings_from_github-Dependabot-alerts/5.jpg" alt=""></p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_warnings_from_github-Dependabot-alerts/6.jpg" alt=""></p><p>好了，问题终于解决了</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_warnings_from_github-Dependabot-alerts/7.jpg" alt=""></p><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>OK！本期关于如何解决来自 github 的警告:Dependabot alerts 就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！</p>',16);function x(t,D,y,k,H,C){const n=i,s=_("ClientOnly");return r(),p("div",null,[u,d(s,null,{default:c(()=>{var e,a;return[(((e=t.$frontmatter)==null?void 0:e.aside)??!0)&&(((a=t.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(r(),h(n,{key:0,article:t.$frontmatter},null,8,["article"])):f("",!0)]}),_:1}),w])}const $=l(m,[["render",x]]);export{V as __pageData,$ as default};

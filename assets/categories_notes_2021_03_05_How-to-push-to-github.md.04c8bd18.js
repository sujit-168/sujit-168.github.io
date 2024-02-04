import{_ as i}from"./chunks/ArticleMetadata.e115931a.js";import{_ as l,C as r,o as e,c,H as u,w as h,k as o,a as d,Q as g,b,e as m}from"./chunks/framework.09228d5a.js";import"./chunks/md5.3e7612d8.js";const N=JSON.parse('{"title":"How to push to github","description":"","frontmatter":{"title":"How to push to github","date":"2021-03-05T21:39:09.000Z","categories":["note"],"tags":["git","github"]},"headers":[],"relativePath":"categories/notes/2021/03/05/How-to-push-to-github.md","filePath":"categories/notes/2021/03/05/How-to-push-to-github.md","lastUpdated":1707057975000}'),f={name:"categories/notes/2021/03/05/How-to-push-to-github.md"},_=o("h1",{id:"本文将介绍如何将自己的项目-push-到-github-上-如何及时发布自己项目的每次更新",tabindex:"-1"},[d("本文将介绍如何将自己的项目 push 到 github 上，如何及时发布自己项目的每次更新 "),o("a",{class:"header-anchor",href:"#本文将介绍如何将自己的项目-push-到-github-上-如何及时发布自己项目的每次更新","aria-label":'Permalink to "本文将介绍如何将自己的项目 push 到 github 上，如何及时发布自己项目的每次更新"'},"​")],-1),y=g(`<p>之前刚开始接触 Github 的时候，有太多需要注意的点需要 care，所以很多时候都畏手畏脚，这次就记录一下如何 push 自己的项目到 github 仓库上</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How-to-push-to-github/2.jpg" alt=""></p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How-to-push-to-github/push%20to%20github.jpg" alt=""></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;">git checkout -b dev #创建一个名为dev的新分支并切换到该分支，如已有dev分支，去掉-b即可切换到dev分支</span></span>
<span class="line"><span style="color:#adbac7;">git add .  # 增加改动</span></span>
<span class="line"><span style="color:#adbac7;">git commit -m &quot;first commit&quot;  # 提交本次名为first commit的修改</span></span>
<span class="line"><span style="color:#adbac7;">git pull  # 如果出现冲突，则需要执行此代码</span></span>
<span class="line"><span style="color:#adbac7;">git log -p # 查看本次提交所进行的修改，确认无误即可进行下一步操作</span></span>
<span class="line"><span style="color:#adbac7;">git push origin dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git checkout -b dev #创建一个名为dev的新分支并切换到该分支，如已有dev分支，去掉-b即可切换到dev分支</span></span>
<span class="line"><span style="color:#24292e;">git add .  # 增加改动</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &quot;first commit&quot;  # 提交本次名为first commit的修改</span></span>
<span class="line"><span style="color:#24292e;">git pull  # 如果出现冲突，则需要执行此代码</span></span>
<span class="line"><span style="color:#24292e;">git log -p # 查看本次提交所进行的修改，确认无误即可进行下一步操作</span></span>
<span class="line"><span style="color:#24292e;">git push origin dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="发起合并请求" tabindex="-1">发起合并请求 <a class="header-anchor" href="#发起合并请求" aria-label="Permalink to &quot;发起合并请求&quot;">​</a></h2><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How-to-push-to-github/Screenshot%202021-03-05%20221546.jpg" alt=""></p><p>然后就会在你所提交的仓库中出现一个新的 New pull request 请求（也就是分支合并请求）</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How-to-push-to-github/pullrequest.jpg" alt=""></p><p>拉取本次 pull request 请求</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How-to-push-to-github/request.jpg" alt=""></p><p>设置 assigners，label 等信息</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How-to-push-to-github/set.jpg" alt=""></p><h2 id="如何合并" tabindex="-1">如何合并 <a class="header-anchor" href="#如何合并" aria-label="Permalink to &quot;如何合并&quot;">​</a></h2><p>点击 merge（合并）本次 pull request</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How-to-push-to-github/merge.jpg" alt=""></p><p>本次 push to github 完成</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How-to-push-to-github/ok.jpg" alt=""></p><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>OK！本期关于如何将自己的项目 Push 到 github 上就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！</p>`,19);function v(s,w,k,q,H,C){const n=i,p=r("ClientOnly");return e(),c("div",null,[_,u(p,null,{default:h(()=>{var t,a;return[(((t=s.$frontmatter)==null?void 0:t.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(e(),b(n,{key:0,article:s.$frontmatter},null,8,["article"])):m("",!0)]}),_:1}),y])}const V=l(f,[["render",v]]);export{N as __pageData,V as default};

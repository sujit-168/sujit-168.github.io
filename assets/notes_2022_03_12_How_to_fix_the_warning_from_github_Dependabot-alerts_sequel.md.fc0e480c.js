import{_ as e,o as a,c as t,Q as s}from"./chunks/framework.144d84a9.js";const b=JSON.parse('{"title":"如何解决来自 github 的警告 Dependabot-alerts 续篇","description":"","frontmatter":{"title":"如何解决来自 github 的警告 Dependabot-alerts 续篇","date":"2022-03-12T06:42:02.000Z","categories":["note"],"tags":["github"],"copyright":true},"headers":[],"relativePath":"notes/2022/03/12/How_to_fix_the_warning_from_github_Dependabot-alerts_sequel.md","filePath":"notes/2022/03/12/How_to_fix_the_warning_from_github_Dependabot-alerts_sequel.md","lastUpdated":1708577859000}'),n={name:"notes/2022/03/12/How_to_fix_the_warning_from_github_Dependabot-alerts_sequel.md"},o=s('<h1 align="center"><strong>如何解决来自 github 的警告-Dependabot-alerts 续篇</strong></h1><p>首先解释一下，什么是<a href="https://dependabot.com/" target="_blank" rel="noreferrer">Dependabot</a></p><ul><li>为什么会收到警告</li></ul><p>这是因为 Dependabot 可以帮助我们处理漏洞，同时检测已有依赖是否有新版本发布</p><p><a href="https://juejin.cn/post/6873454712427905032" target="_blank" rel="noreferrer">Dependabot 的作用</a></p><ul><li>如何解决这些警告</li></ul><p><a href="https://blog.51cto.com/u_15091660/2603984" target="_blank" rel="noreferrer">npm 更新依赖包</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;">npm outdated  # 检查是否有可更新的依赖项</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm outdated  # 检查是否有可更新的依赖项</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后在 package.json 中修改需要升级的依赖版本</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;">npm update    # 根据package.json来更新已有依赖</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm update    # 根据package.json来更新已有依赖</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>之后重新 git push 即可解决大部分的警告信息</p><p><img src="https://cn-sy1.rains3.com/dfdfgf/blog/How_to_fix_the_warning_from_github_Dependabot-alerts_sequel/202110131645193.jpg" alt=""></p><ul><li>修改后再推送到远端，即可解决警告</li></ul><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>OK！本期关于如何解决来自 github 的警告-Dependabot-alerts 续篇就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！</p>',15),p=[o];function r(l,i,d,c,_,u){return a(),t("div",null,p)}const g=e(n,[["render",r]]);export{b as __pageData,g as default};

import{_ as c}from"./chunks/ArticleMetadata.0cbf937d.js";import{_ as r,C as i,o as l,c as b,H as u,w as d,k as s,a as h,Q as p,b as m,e as y}from"./chunks/framework.09228d5a.js";import"./chunks/md5.3e7612d8.js";const H=JSON.parse('{"title":"如何使用 Github+Actions 实现 Hexo 博客自动化部署","description":"","frontmatter":{"title":"如何使用 Github+Actions 实现 Hexo 博客自动化部署","date":"2021-05-24T20:27:32.000Z","categories":["note"],"tags":["Actions","github","CI/CD"]},"headers":[],"relativePath":"categories/notes/2021/05/24/How_to_automate_the_deployment_of_the_Hexo_blog_using_Github-Actions.md","filePath":"categories/notes/2021/05/24/How_to_automate_the_deployment_of_the_Hexo_blog_using_Github-Actions.md","lastUpdated":1699787345000}'),g={name:"categories/notes/2021/05/24/How_to_automate_the_deployment_of_the_Hexo_blog_using_Github-Actions.md"},E=s("h1",{id:"如何使用-github-actions-为自己的个人博客实现-ci-cd-的自动化部署",tabindex:"-1"},[h("如何使用 Github+Actions 为自己的个人博客实现 CI/CD 的自动化部署 "),s("a",{class:"header-anchor",href:"#如何使用-github-actions-为自己的个人博客实现-ci-cd-的自动化部署","aria-label":'Permalink to "如何使用 Github+Actions 为自己的个人博客实现 CI/CD 的自动化部署"'},"​")],-1),A=p('<p>之前为了更好的学习前端技术，也就在 Github 仓库上来建立了自己的个人博客。在使用了一段时间之后，我也发现了一种新的玩法，可以使用 Github 的 Actions 来对自己的博客站点内容进行持续集成和持续部署，也就是说，根据本篇的内容，你只需要 3 个 git 命令就能实现 Hexo 博客的部署，强烈建议小伙伴们积极动手试一试，在提升上线效率上极有帮助。</p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><h4 id="什么是-devops-和-ci-cd" tabindex="-1">什么是 Devops 和 CI/CD <a class="header-anchor" href="#什么是-devops-和-ci-cd" aria-label="Permalink to &quot;什么是 Devops 和 CI/CD&quot;">​</a></h4><p>这里引用 B 站大佬 up 主<a href="https://space.bilibili.com/95256449" target="_blank" rel="noreferrer">遇见狂神说</a>的视频为大家解读，大家可以了解一下整个的应用流程。</p>',4),_=s("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[s("iframe",{src:"//player.bilibili.com/player.html?aid=285879510&bvid=BV1zf4y127vu&cid=200860220&page=1&autoplay=0",frameborder:"no",scrolling:"no",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),f=p(`<h4 id="什么是-github-actions" tabindex="-1">什么是 Github+Actions <a class="header-anchor" href="#什么是-github-actions" aria-label="Permalink to &quot;什么是 Github+Actions&quot;">​</a></h4><p>大家可以查看这篇文章简单了解一下 <a href="https://www.infoq.cn/article/d0mtapbgpbhf3r-cuvf3" target="_blank" rel="noreferrer">所有开源项目免费使用，GitHub 内置 CI/CD 终于来了！</a></p><p>这里附上 Github 官方的介绍文档 <a href="https://docs.github.com/en/actions" target="_blank" rel="noreferrer">GitHub Actions</a></p><h2 id="具体步骤" tabindex="-1">具体步骤 <a class="header-anchor" href="#具体步骤" aria-label="Permalink to &quot;具体步骤&quot;">​</a></h2><p>整体步骤分为两个部分</p><h3 id="将博客部署到-github-page" tabindex="-1">将博客部署到 Github page <a class="header-anchor" href="#将博客部署到-github-page" aria-label="Permalink to &quot;将博客部署到 Github page&quot;">​</a></h3><h4 id="创建-github-page-仓库" tabindex="-1">创建 Github page 仓库 <a class="header-anchor" href="#创建-github-page-仓库" aria-label="Permalink to &quot;创建 Github page 仓库&quot;">​</a></h4><p>首先你需要拥有一个存储渲染文件的博客 repository</p><p>将仓库名命名为 your_username.github.io，这个仓库用来存储 Hexo 渲染的 Html 文件</p><p>具体操作可以参考我之前的两篇文章</p><p>1.<a href="http://sujie-168.top/2020/04/11/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF1/" target="_blank" rel="noreferrer">我的博客创建之路 1</a></p><p>2.<a href="http://sujie-168.top/2020/04/16/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%88%9B%E5%BB%BA%E4%B9%8B%E8%B7%AF2/" target="_blank" rel="noreferrer">我的博客创建之路 2</a></p><p>也可以参考管家小 e 的<a href="https://mp.weixin.qq.com/mp/homepage?__biz=MzU4NDcxNjQ2Ng==&amp;hid=1&amp;sn=debf3376e6c934da259097b1886297d7&amp;scene=18#wechat_redirect" target="_blank" rel="noreferrer">网站搭建</a>专栏的前三篇来解决</p><h4 id="博客目标效果" tabindex="-1">博客目标效果 <a class="header-anchor" href="#博客目标效果" aria-label="Permalink to &quot;博客目标效果&quot;">​</a></h4><p>打开<code>http://localhost:4000</code>行预览，即可得到与下图相似的结果</p><p><img src="https://d33wubrfki0l68.cloudfront.net/5997a40576f3beca7bbbd86fe79a795e9d520d8e/87f88/themes/screenshots/landscape.png" alt=""></p><h3 id="配置博客文件存储仓库" tabindex="-1">配置博客文件存储仓库 <a class="header-anchor" href="#配置博客文件存储仓库" aria-label="Permalink to &quot;配置博客文件存储仓库&quot;">​</a></h3><h4 id="创建博客仓库" tabindex="-1">创建博客仓库 <a class="header-anchor" href="#创建博客仓库" aria-label="Permalink to &quot;创建博客仓库&quot;">​</a></h4><p>新建博客文章存储的 public 仓库 (公开)</p><p>可以将仓库名命名为 My_Blog，这个仓库将被用来存储你的所有博客文章</p><h4 id="创建-token" tabindex="-1">创建 token <a class="header-anchor" href="#创建-token" aria-label="Permalink to &quot;创建 token&quot;">​</a></h4><p>这一步可以完全根据 github 官方给出的<a href="https://docs.github.com/cn/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">创建个人访问令牌</a>教程操作</p><h4 id="配置密钥-secret" tabindex="-1">配置密钥 secret <a class="header-anchor" href="#配置密钥-secret" aria-label="Permalink to &quot;配置密钥 secret&quot;">​</a></h4><p>将创建好的 Personal Access Token 添加到仓库的 Secrets 中，并设置名称，如下图：</p><p><img src="https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/7.jpg" alt=""></p><ul><li>创建 workflow 脚本</li></ul><p>在项目根目录下创建 <code>.github/workflows</code> 文件夹，并在文件夹下创建 YAML 文件用于编写任务执行脚本。</p><p>点击项目下的 Actions</p><p><img src="https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/8.jpg" alt=""></p><p>点击 Set up this workflow</p><p><img src="https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/9.jpg" alt=""></p><p>配置 main.yml 文件，设置工作流</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;">name: Deploy My_Blog  #自动化的名称</span></span>
<span class="line"><span style="color:#adbac7;"></span></span>
<span class="line"><span style="color:#adbac7;">on:</span></span>
<span class="line"><span style="color:#adbac7;">  # Triggers the workflow on push or pull request events but only for the main branch</span></span>
<span class="line"><span style="color:#adbac7;">  push: # push的时候触发</span></span>
<span class="line"><span style="color:#adbac7;">    branches: [ main ]  # 哪些分支需要触发</span></span>
<span class="line"><span style="color:#adbac7;">  pull_request:  </span></span>
<span class="line"><span style="color:#adbac7;">    branches: [ dev ]</span></span>
<span class="line"><span style="color:#adbac7;"></span></span>
<span class="line"><span style="color:#adbac7;"># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span></span>
<span class="line"><span style="color:#adbac7;">jobs:</span></span>
<span class="line"><span style="color:#adbac7;">  # This workflow contains a single job called &quot;build&quot;</span></span>
<span class="line"><span style="color:#adbac7;">  Blog_CI-CD:</span></span>
<span class="line"><span style="color:#adbac7;">    runs-on: ubuntu-latest  # 服务器环境</span></span>
<span class="line"><span style="color:#adbac7;">    # Steps represent a sequence of tasks that will be executed as part of the job</span></span>
<span class="line"><span style="color:#adbac7;">    </span></span>
<span class="line"><span style="color:#adbac7;">    steps:</span></span>
<span class="line"><span style="color:#adbac7;">      # 检查代码</span></span>
<span class="line"><span style="color:#adbac7;">      - name: Checkout</span></span>
<span class="line"><span style="color:#adbac7;">        uses: actions/checkout@v2  #软件市场的名称</span></span>
<span class="line"><span style="color:#adbac7;">        with: # 参数</span></span>
<span class="line"><span style="color:#adbac7;">          submodules: true</span></span>
<span class="line"><span style="color:#adbac7;">          persist-credentials: false</span></span>
<span class="line"><span style="color:#adbac7;">          </span></span>
<span class="line"><span style="color:#adbac7;">      - name: Setup Node.js</span></span>
<span class="line"><span style="color:#adbac7;">       # 设置 node.js 环境</span></span>
<span class="line"><span style="color:#adbac7;">        uses: actions/setup-node@v1</span></span>
<span class="line"><span style="color:#adbac7;">        with:</span></span>
<span class="line"><span style="color:#adbac7;">          node-version: &#39;12&#39;</span></span>
<span class="line"><span style="color:#adbac7;">          </span></span>
<span class="line"><span style="color:#adbac7;">      - name: Cache node modules</span></span>
<span class="line"><span style="color:#adbac7;">      # 设置包缓存目录，避免每次下载</span></span>
<span class="line"><span style="color:#adbac7;">        uses: actions/cache@v1</span></span>
<span class="line"><span style="color:#adbac7;">        with:</span></span>
<span class="line"><span style="color:#adbac7;">          path: ~/.npm</span></span>
<span class="line"><span style="color:#adbac7;">          key: \${{ runner.os }}-node-\${{ hashFiles(&#39;**/package-lock.json&#39;) }}</span></span>
<span class="line"><span style="color:#adbac7;">          </span></span>
<span class="line"><span style="color:#adbac7;">      # 配置Hexo环境 </span></span>
<span class="line"><span style="color:#adbac7;">      - name: Setup Hexo</span></span>
<span class="line"><span style="color:#adbac7;">        env:</span></span>
<span class="line"><span style="color:#adbac7;">          ACTION_DEPLOY_KEY: \${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span style="color:#adbac7;">        run: |</span></span>
<span class="line"><span style="color:#adbac7;">          npm install hexo-cli -g</span></span>
<span class="line"><span style="color:#adbac7;">          npm install</span></span>
<span class="line"><span style="color:#adbac7;">           </span></span>
<span class="line"><span style="color:#adbac7;">      </span></span>
<span class="line"><span style="color:#adbac7;">      # 生成静态文件</span></span>
<span class="line"><span style="color:#adbac7;">      - name: Build</span></span>
<span class="line"><span style="color:#adbac7;">        run: |</span></span>
<span class="line"><span style="color:#adbac7;">          hexo clean </span></span>
<span class="line"><span style="color:#adbac7;">          hexo g</span></span>
<span class="line"><span style="color:#adbac7;">        </span></span>
<span class="line"><span style="color:#adbac7;">      # 2、部署到 GitHub Pages</span></span>
<span class="line"><span style="color:#adbac7;">      - name: upload GitHub repository</span></span>
<span class="line"><span style="color:#adbac7;">        env: </span></span>
<span class="line"><span style="color:#adbac7;">          # Github 仓库</span></span>
<span class="line"><span style="color:#adbac7;">          GITHUB_REPO: github.com/username/username.github.io</span></span>
<span class="line"><span style="color:#adbac7;">         # 将编译后的博客文件推送到指定仓库</span></span>
<span class="line"><span style="color:#adbac7;">        run: |</span></span>
<span class="line"><span style="color:#adbac7;">          cd ./public &amp;&amp; git init &amp;&amp; git add .</span></span>
<span class="line"><span style="color:#adbac7;">          git config user.name &quot;username&quot;       #username改为你github的用户名</span></span>
<span class="line"><span style="color:#adbac7;">          git config user.email &quot;your_Email&quot;     #username改为你github的注册邮箱</span></span>
<span class="line"><span style="color:#adbac7;">          git add .</span></span>
<span class="line"><span style="color:#adbac7;">          git commit -m &quot;GitHub Actions Auto Builder at $(date +&#39;%Y-%m-%d %H:%M:%S&#39;)&quot;</span></span>
<span class="line"><span style="color:#adbac7;">          git push --force --quiet &quot;https://\${{ secrets.ACCESS_TOKEN }}@$GITHUB_REPO&quot; master:master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">name: Deploy My_Blog  #自动化的名称</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">on:</span></span>
<span class="line"><span style="color:#24292e;">  # Triggers the workflow on push or pull request events but only for the main branch</span></span>
<span class="line"><span style="color:#24292e;">  push: # push的时候触发</span></span>
<span class="line"><span style="color:#24292e;">    branches: [ main ]  # 哪些分支需要触发</span></span>
<span class="line"><span style="color:#24292e;">  pull_request:  </span></span>
<span class="line"><span style="color:#24292e;">    branches: [ dev ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span></span>
<span class="line"><span style="color:#24292e;">jobs:</span></span>
<span class="line"><span style="color:#24292e;">  # This workflow contains a single job called &quot;build&quot;</span></span>
<span class="line"><span style="color:#24292e;">  Blog_CI-CD:</span></span>
<span class="line"><span style="color:#24292e;">    runs-on: ubuntu-latest  # 服务器环境</span></span>
<span class="line"><span style="color:#24292e;">    # Steps represent a sequence of tasks that will be executed as part of the job</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    steps:</span></span>
<span class="line"><span style="color:#24292e;">      # 检查代码</span></span>
<span class="line"><span style="color:#24292e;">      - name: Checkout</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/checkout@v2  #软件市场的名称</span></span>
<span class="line"><span style="color:#24292e;">        with: # 参数</span></span>
<span class="line"><span style="color:#24292e;">          submodules: true</span></span>
<span class="line"><span style="color:#24292e;">          persist-credentials: false</span></span>
<span class="line"><span style="color:#24292e;">          </span></span>
<span class="line"><span style="color:#24292e;">      - name: Setup Node.js</span></span>
<span class="line"><span style="color:#24292e;">       # 设置 node.js 环境</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/setup-node@v1</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          node-version: &#39;12&#39;</span></span>
<span class="line"><span style="color:#24292e;">          </span></span>
<span class="line"><span style="color:#24292e;">      - name: Cache node modules</span></span>
<span class="line"><span style="color:#24292e;">      # 设置包缓存目录，避免每次下载</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/cache@v1</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          path: ~/.npm</span></span>
<span class="line"><span style="color:#24292e;">          key: \${{ runner.os }}-node-\${{ hashFiles(&#39;**/package-lock.json&#39;) }}</span></span>
<span class="line"><span style="color:#24292e;">          </span></span>
<span class="line"><span style="color:#24292e;">      # 配置Hexo环境 </span></span>
<span class="line"><span style="color:#24292e;">      - name: Setup Hexo</span></span>
<span class="line"><span style="color:#24292e;">        env:</span></span>
<span class="line"><span style="color:#24292e;">          ACTION_DEPLOY_KEY: \${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span style="color:#24292e;">        run: |</span></span>
<span class="line"><span style="color:#24292e;">          npm install hexo-cli -g</span></span>
<span class="line"><span style="color:#24292e;">          npm install</span></span>
<span class="line"><span style="color:#24292e;">           </span></span>
<span class="line"><span style="color:#24292e;">      </span></span>
<span class="line"><span style="color:#24292e;">      # 生成静态文件</span></span>
<span class="line"><span style="color:#24292e;">      - name: Build</span></span>
<span class="line"><span style="color:#24292e;">        run: |</span></span>
<span class="line"><span style="color:#24292e;">          hexo clean </span></span>
<span class="line"><span style="color:#24292e;">          hexo g</span></span>
<span class="line"><span style="color:#24292e;">        </span></span>
<span class="line"><span style="color:#24292e;">      # 2、部署到 GitHub Pages</span></span>
<span class="line"><span style="color:#24292e;">      - name: upload GitHub repository</span></span>
<span class="line"><span style="color:#24292e;">        env: </span></span>
<span class="line"><span style="color:#24292e;">          # Github 仓库</span></span>
<span class="line"><span style="color:#24292e;">          GITHUB_REPO: github.com/username/username.github.io</span></span>
<span class="line"><span style="color:#24292e;">         # 将编译后的博客文件推送到指定仓库</span></span>
<span class="line"><span style="color:#24292e;">        run: |</span></span>
<span class="line"><span style="color:#24292e;">          cd ./public &amp;&amp; git init &amp;&amp; git add .</span></span>
<span class="line"><span style="color:#24292e;">          git config user.name &quot;username&quot;       #username改为你github的用户名</span></span>
<span class="line"><span style="color:#24292e;">          git config user.email &quot;your_Email&quot;     #username改为你github的注册邮箱</span></span>
<span class="line"><span style="color:#24292e;">          git add .</span></span>
<span class="line"><span style="color:#24292e;">          git commit -m &quot;GitHub Actions Auto Builder at $(date +&#39;%Y-%m-%d %H:%M:%S&#39;)&quot;</span></span>
<span class="line"><span style="color:#24292e;">          git push --force --quiet &quot;https://\${{ secrets.ACCESS_TOKEN }}@$GITHUB_REPO&quot; master:master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><p>然后点击 commit new file 即可。</p><p>最后，我们只需要将源码推送到指定分支，GitHub Actions 就会自动帮我们部署项目啦。</p><h2 id="流程展示" tabindex="-1">流程展示 <a class="header-anchor" href="#流程展示" aria-label="Permalink to &quot;流程展示&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;"># 在本地写好博客文章</span></span>
<span class="line"><span style="color:#adbac7;">git checkout -b dev   #切换到dev分支</span></span>
<span class="line"><span style="color:#adbac7;">git add .</span></span>
<span class="line"><span style="color:#adbac7;">git commit -m &quot;add a new article&quot;</span></span>
<span class="line"><span style="color:#adbac7;">git push origin dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 在本地写好博客文章</span></span>
<span class="line"><span style="color:#24292e;">git checkout -b dev   #切换到dev分支</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &quot;add a new article&quot;</span></span>
<span class="line"><span style="color:#24292e;">git push origin dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在本地推送完成后，即可在 My_Blog 的 Actions 页面查看到部署情况，然后打开自己博客站点域名 http://your_username.github.io 查看即可。</p><p>1.初始化云端 Ubuntu 服务器的部署环境</p><p><img src="https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/11.jpg" alt=""></p><p>2.将本次提交推送到 Github 远端仓库</p><p><img src="https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/12.jpg" alt=""></p><p>3.workflow 流程概览</p><p><img src="https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/13.jpg" alt=""></p><p>4.工作流 workflow 运行成功，本次部署成功</p><p><img src="https://github.com/sujit-168/Blog-Picture/raw/master/My%20Blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/10.jpg" alt=""></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p>[1].知乎 star <a href="https://zhuanlan.zhihu.com/p/161969042" target="_blank" rel="noreferrer">使用 GitHub Actions 自动部署 Hexo 博客到 GitHub Pages</a></p><p>[2].知乎 Tommy <a href="https://zhuanlan.zhihu.com/p/170563000" target="_blank" rel="noreferrer">GitHub Actions 来自动部署 Hexo</a></p><p>[3].简书 VictorHong <a href="https://www.jianshu.com/p/2a5c77b4d683" target="_blank" rel="noreferrer">HUGO + Github + Github Action 持续集成部署个人博客</a></p><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>OK！本期关于如何使用 Github+Actions 为自己的个人博客实现 CI/CD 的自动化部署就到此为止。喜欢的话请支持、转发、订阅！同时也欢迎各位大佬指出不足之处！在此本人万分感谢！</p>`,52);function B(a,k,q,w,C,v){const o=c,t=i("ClientOnly");return l(),b("div",null,[E,u(t,null,{default:d(()=>{var n,e;return[(((n=a.$frontmatter)==null?void 0:n.aside)??!0)&&(((e=a.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(l(),m(o,{key:0,article:a.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),A,_,f])}const P=r(g,[["render",B]]);export{H as __pageData,P as default};

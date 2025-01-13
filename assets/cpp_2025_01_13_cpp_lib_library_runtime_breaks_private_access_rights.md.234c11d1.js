import{_ as c}from"./chunks/ArticleMetadata.1f2d3a8b.js";import{_ as r,C as t,o as l,c as y,H as A,w as C,k as p,a as F,Q as i,b as D,e as B}from"./chunks/framework.4303053c.js";import"./chunks/md5.3e7612d8.js";const O=JSON.parse('{"title":"我的黑科技，让 C++ 可以访问 private 成员","description":"","frontmatter":{"title":"我的黑科技，让 C++ 可以访问 private 成员","isOriginal":false,"author":"zencodex","date":"2015/03/23 17:19","articleTitle":"我的黑科技，让 C++ 可以访问 private 成员","articleLink":"https://www.yinqisen.cn/blog-530.html","categories":["cpp"],"tags":["cpp"]},"headers":[],"relativePath":"cpp/2025/01/13/cpp_lib_library_runtime_breaks_private_access_rights.md","filePath":"cpp/2025/01/13/cpp_lib_library_runtime_breaks_private_access_rights.md","lastUpdated":1736774496000}'),E={name:"cpp/2025/01/13/cpp_lib_library_runtime_breaks_private_access_rights.md"},b=p("h1",{id:"c-lib-库运行期突破-private-访问权限",tabindex:"-1"},[F("C++ lib 库运行期突破 private 访问权限 "),p("a",{class:"header-anchor",href:"#c-lib-库运行期突破-private-访问权限","aria-label":'Permalink to "C++ lib 库运行期突破 private 访问权限"'},"​")],-1),f=i(`<p>严格说，C++ 的禁止外部类访问 private 是指在编译期，运行期都是在内存中的数据，是可以做任何修改的。本文的方式讲的就是针对运行期如何修改。</p><p>这个方案源于 N 年前有个第三方实现的静态库，我们没有代码，只有库的头文件声明和编译好的 <code>lib</code> 库。在一个类的头文件中，有个私有变量存储的是 <code>Color</code> 值，但库的开放接口却没有能力修改这个值。</p><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><p>通过头文件的类定义，算出该私有变量在内存中的偏移值，有了偏移值，就可以通过获取该类实例在内存中的地址，从而算出私有变量的内存地址。需要对 class 内存结构有所了解，如图：</p><ul><li><a href="https://www.zhihu.com/tardis/zm/art/380147337?source_id=1003" target="_blank" rel="noreferrer">浅析 C++ 类的内存布局</a></li><li><a href="https://tangocc.github.io/2018/03/20/cpp-class-memory-struct/" target="_blank" rel="noreferrer">C++ 对象内存模型</a></li><li><a href="https://www.cnblogs.com/sinpo828/p/13156042.html" target="_blank" rel="noreferrer">C++ 类的内存结构</a></li></ul><p>具体实现代码：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">//</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">获取开始内存地址</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">volatile</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">char</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">*</span><span style="color:#96D0FF;">pThis</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> (char </span><span style="color:#6CB6FF;">*</span><span style="color:#ADBAC7;">)&amp;</span><span style="color:#F69D50;">pRichEditChatLogEx</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">volatile</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">CHARFORMAT2</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">cf</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">ZeroMemory((char</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">*</span><span style="color:#ADBAC7;">)&amp;</span><span style="color:#F69D50;">cf,</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">sizeof</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">CHARFORMAT2</span><span style="color:#ADBAC7;">));</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">cf.cbSize</span><span style="color:#ADBAC7;">          </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">sizeof</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">CHARFORMAT2</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">cf.crTextColor</span><span style="color:#ADBAC7;">     </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">RGB</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">0,</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">0</span><span style="color:#96D0FF;">,</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">cf.yHeight</span><span style="color:#ADBAC7;">         </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">20</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">10</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">cf.dwMask</span><span style="color:#ADBAC7;">          </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">CFM_COLOR</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">CFM_FACE</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">CFM_SIZE</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">CFM_PROTECTED</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">cf.dwEffects</span><span style="color:#ADBAC7;">       </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">cf.bCharSet</span><span style="color:#ADBAC7;">        </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">134</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">cf.bPitchAndFamily</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">34</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">//</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">算偏移地址，篇幅原因，不贴出具体类的定义了</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">//</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">下面的公式是取基类最后结束的偏移，仔细想想，是从屁股开始往前推...</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">endOffset</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">sizeof</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">CRichEditChatLogEx</span><span style="color:#ADBAC7;">) </span><span style="color:#6CB6FF;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">-</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">sizeof</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">CRichEditChatLog</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">//</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">通过调试内存看出，DEBUG下，内存多4个字节</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">#if _DEBUG</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">volatile</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">offset</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">endOffset</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">-</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">sizeof</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">CHARFORMAT2</span><span style="color:#ADBAC7;">) </span><span style="color:#96D0FF;">-</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">20</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">#else</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">volatile</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">offset</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">endOffset</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">-</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">sizeof</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">CHARFORMAT2</span><span style="color:#ADBAC7;">) </span><span style="color:#96D0FF;">-</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">24</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">//</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">内存写入要修改的值，注意千万不要超出数据长度哦，否则就是场灾难</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">memcpy((char</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">*</span><span style="color:#ADBAC7;">)&amp;</span><span style="color:#F69D50;">pThis[offset],</span><span style="color:#ADBAC7;"> (char </span><span style="color:#6CB6FF;">*</span><span style="color:#ADBAC7;">)&amp;</span><span style="color:#F69D50;">cf,</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">sizeof</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">CHARFORMAT2</span><span style="color:#ADBAC7;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">获取开始内存地址</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">volatile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">char</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">pThis</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> (char </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">)&amp;</span><span style="color:#6F42C1;">pRichEditChatLogEx</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">volatile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">CHARFORMAT2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cf</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ZeroMemory((char</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">)&amp;</span><span style="color:#6F42C1;">cf,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CHARFORMAT2</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cf.cbSize</span><span style="color:#24292E;">          </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CHARFORMAT2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cf.crTextColor</span><span style="color:#24292E;">     </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">RGB</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">0,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#032F62;">,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cf.yHeight</span><span style="color:#24292E;">         </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cf.dwMask</span><span style="color:#24292E;">          </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">CFM_COLOR</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CFM_FACE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CFM_SIZE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CFM_PROTECTED</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cf.dwEffects</span><span style="color:#24292E;">       </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cf.bCharSet</span><span style="color:#24292E;">        </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">134</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cf.bPitchAndFamily</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">34</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">算偏移地址，篇幅原因，不贴出具体类的定义了</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">下面的公式是取基类最后结束的偏移，仔细想想，是从屁股开始往前推...</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#032F62;">endOffset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CRichEditChatLogEx</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CRichEditChatLog</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">通过调试内存看出，DEBUG下，内存多4个字节</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#if _DEBUG</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">volatile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">int</span><span style="color:#24292E;"> </span><span style="color:#032F62;">offset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">endOffset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CHARFORMAT2</span><span style="color:#24292E;">) </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#else</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">volatile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">int</span><span style="color:#24292E;"> </span><span style="color:#032F62;">offset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">endOffset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CHARFORMAT2</span><span style="color:#24292E;">) </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">24</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">内存写入要修改的值，注意千万不要超出数据长度哦，否则就是场灾难</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">memcpy((char</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">)&amp;</span><span style="color:#6F42C1;">pThis[offset],</span><span style="color:#24292E;"> (char </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">)&amp;</span><span style="color:#6F42C1;">cf,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CHARFORMAT2</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,7);function m(s,d,h,_,u,R){const o=c,e=t("ClientOnly");return l(),y("div",null,[b,A(e,null,{default:C(()=>{var a,n;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=s.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(l(),D(o,{key:0,article:s.$frontmatter},null,8,["article"])):B("",!0)]}),_:1}),f])}const M=r(E,[["render",m]]);export{O as __pageData,M as default};

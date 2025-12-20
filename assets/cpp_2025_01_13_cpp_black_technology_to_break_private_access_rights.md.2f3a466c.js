import{_ as c}from"./chunks/ArticleMetadata.c73fd2c8.js";import{_ as t,C as r,o as l,c as y,H as A,w as i,k as p,a as D,Q as C,b as B,e as b}from"./chunks/framework.fcce45dc.js";import"./chunks/md5.3e7612d8.js";const V=JSON.parse('{"title":"C++ 突破 private 访问权限的黑科技","description":"","frontmatter":{"title":"C++ 突破 private 访问权限的黑科技","isOriginal":false,"author":"鹅厂程序小哥","date":"2019/04/04 17:19","articleTitle":"C++ 突破 private 访问权限的黑科技","articleLink":"https://blog.csdn.net/qq826364410/article/details/89029192","categories":["cpp"],"tags":["cpp"]},"headers":[],"relativePath":"cpp/2025/01/13/cpp_black_technology_to_break_private_access_rights.md","filePath":"cpp/2025/01/13/cpp_black_technology_to_break_private_access_rights.md","lastUpdated":1736774496000}'),u={name:"cpp/2025/01/13/cpp_black_technology_to_break_private_access_rights.md"},F=p("h1",{id:"c-突破-private-访问权限的黑科技",tabindex:"-1"},[D("C++ 突破 private 访问权限的黑科技 "),p("a",{class:"header-anchor",href:"#c-突破-private-访问权限的黑科技","aria-label":'Permalink to "C++ 突破 private 访问权限的黑科技"'},"​")],-1),m=C(`<p>如何突破 class 的<a href="https://so.csdn.net/so/search?q=private&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">private</a>属性限制——试图破坏 class 的封装性，有点“逆天而行”的感觉。</p><h3 id="方法-1-添加友元函数" tabindex="-1">方法 1. 添加友元函数 <a class="header-anchor" href="#方法-1-添加友元函数" aria-label="Permalink to &quot;方法 1. 添加友元函数&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">#include</span><span style="color:#96D0FF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F47067;">using</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">namespace</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">std</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">X</span></span>
<span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#F47067;">private:</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> m_Age;</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">public:</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#DCBDFB;">X</span><span style="color:#ADBAC7;">() : </span><span style="color:#DCBDFB;">m_Age</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">){}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">template</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F47067;">typename</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&amp;</span><span style="color:#F69D50;">t</span><span style="color:#ADBAC7;">){}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">GetValue</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">	{</span></span>
<span class="line"><span style="color:#ADBAC7;">		</span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> m_Age;</span></span>
<span class="line"><span style="color:#ADBAC7;">	}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">friend</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">X</span><span style="color:#F47067;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">xPtr</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">};</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">X</span><span style="color:#F47067;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">xPtr</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#ADBAC7;">	xPtr-&gt;m_Age </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">main</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">	X x;</span></span>
<span class="line"><span style="color:#ADBAC7;">	cout </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> x.</span><span style="color:#DCBDFB;">GetValue</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> endl;</span><span style="color:#768390;">// 输出 1</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">&amp;</span><span style="color:#ADBAC7;">x);</span></span>
<span class="line"><span style="color:#ADBAC7;">	cout </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> x.</span><span style="color:#DCBDFB;">GetValue</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> endl;</span><span style="color:#768390;">// 输出 2</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#DCBDFB;">getchar</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">X</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">private:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> m_Age;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">X</span><span style="color:#24292E;">() : </span><span style="color:#6F42C1;">m_Age</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">){}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">template</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">typename</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">t</span><span style="color:#24292E;">){}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetValue</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> m_Age;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">friend</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">X</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">xPtr</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">X</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">xPtr</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	xPtr-&gt;m_Age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	X x;</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> x.</span><span style="color:#6F42C1;">GetValue</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span><span style="color:#6A737D;">// 输出 1</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">x);</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> x.</span><span style="color:#6F42C1;">GetValue</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span><span style="color:#6A737D;">// 输出 2</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">getchar</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>使用友元函数，应该是最先想到的解决方案。</p><p>类的友元函数是定义在类外部，但有权访问类的所有私有（private）成员和保护（protected）成员。</p><h3 id="方法-2-使用指针类型转换——偷天换日" tabindex="-1">方法 2. 使用指针类型转换——偷天换日 <a class="header-anchor" href="#方法-2-使用指针类型转换——偷天换日" aria-label="Permalink to &quot;方法 2. 使用指针类型转换——偷天换日&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">#include</span><span style="color:#96D0FF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F47067;">using</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">namespace</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">std</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">X</span></span>
<span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#F47067;">private:</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> m_Age;</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">public:</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#DCBDFB;">X</span><span style="color:#ADBAC7;">()	: </span><span style="color:#DCBDFB;">m_Age</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">){}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">template</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F47067;">typename</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&amp;</span><span style="color:#F69D50;">t</span><span style="color:#ADBAC7;">){}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">GetValue</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">	{</span></span>
<span class="line"><span style="color:#ADBAC7;">		</span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> m_Age;</span></span>
<span class="line"><span style="color:#ADBAC7;">	}</span></span>
<span class="line"><span style="color:#ADBAC7;">};</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#768390;">// 同 X 的内存布局，将变量的类型定义改为 public</span></span>
<span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Y</span></span>
<span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#F47067;">public:</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> m_Age;</span></span>
<span class="line"><span style="color:#ADBAC7;">};</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">X</span><span style="color:#F47067;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">xPtr</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#768390;">	// reinterpret_cast 用于进行各种不同类型的指针之间、</span></span>
<span class="line"><span style="color:#768390;">	// 不同类型的引用之间以及指针和能容纳指针的整数类型之间的转换。</span></span>
<span class="line"><span style="color:#ADBAC7;">	(</span><span style="color:#F47067;">reinterpret_cast&lt;</span><span style="color:#ADBAC7;">Y</span><span style="color:#F47067;">*&gt;</span><span style="color:#ADBAC7;">(xPtr))-&gt;m_Age </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">main</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">	X x;</span></span>
<span class="line"><span style="color:#ADBAC7;">	cout </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> x.</span><span style="color:#DCBDFB;">GetValue</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> endl;</span><span style="color:#768390;">// 输出 1</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">&amp;</span><span style="color:#ADBAC7;">x);</span></span>
<span class="line"><span style="color:#ADBAC7;">	cout </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> x.</span><span style="color:#DCBDFB;">GetValue</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> endl;</span><span style="color:#768390;">// 输出 2</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#DCBDFB;">getchar</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">X</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">private:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> m_Age;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">X</span><span style="color:#24292E;">()	: </span><span style="color:#6F42C1;">m_Age</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">){}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">template</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">typename</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">t</span><span style="color:#24292E;">){}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetValue</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> m_Age;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 同 X 的内存布局，将变量的类型定义改为 public</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Y</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> m_Age;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">X</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">xPtr</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6A737D;">	// reinterpret_cast 用于进行各种不同类型的指针之间、</span></span>
<span class="line"><span style="color:#6A737D;">	// 不同类型的引用之间以及指针和能容纳指针的整数类型之间的转换。</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#D73A49;">reinterpret_cast&lt;</span><span style="color:#24292E;">Y</span><span style="color:#D73A49;">*&gt;</span><span style="color:#24292E;">(xPtr))-&gt;m_Age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	X x;</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> x.</span><span style="color:#6F42C1;">GetValue</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span><span style="color:#6A737D;">// 输出 1</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">x);</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> x.</span><span style="color:#6F42C1;">GetValue</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span><span style="color:#6A737D;">// 输出 2</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">getchar</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>首先我们将 X 类型的指针转换为 Y 类型的指针，在编译器看来，我们访问的是 Y 类型的 public 成员 m_Age，因此编译通过，然而事实上该指针是 X 类型的，由于 Y 跟 X 的内存布局是完全一样，因此访问 Y 的 m_Age 成员实际上也就是在访问 X 的 m_Age 成员。</p><p>关于类的内存布局，有兴趣的可以看这里：<a href="https://blog.csdn.net/qq826364410/article/details/88917375" target="_blank" rel="noreferrer">https://blog.csdn.net/qq826364410/article/details/88917375</a></p><h3 id="方法-3-利用模板合法钻空子" tabindex="-1">方法 3：利用模板合法钻空子 <a class="header-anchor" href="#方法-3-利用模板合法钻空子" aria-label="Permalink to &quot;方法 3：利用模板合法钻空子&quot;">​</a></h3><p>如果 X 中存在一个成员模板，那么可以这样子：</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">#include</span><span style="color:#96D0FF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F47067;">using</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">namespace</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">std</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">X</span></span>
<span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#F47067;">private:</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> m_Age;</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">public:</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#DCBDFB;">X</span><span style="color:#ADBAC7;">() : </span><span style="color:#DCBDFB;">m_Age</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">){}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">template</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F47067;">typename</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&amp;</span><span style="color:#F69D50;">t</span><span style="color:#ADBAC7;">){}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">GetValue</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">	{</span></span>
<span class="line"><span style="color:#ADBAC7;">		</span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> m_Age;</span></span>
<span class="line"><span style="color:#ADBAC7;">	}</span></span>
<span class="line"><span style="color:#ADBAC7;">};</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">struct</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Y</span><span style="color:#ADBAC7;"> {};</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">template</span><span style="color:#ADBAC7;">&lt;&gt;</span></span>
<span class="line"><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">X</span><span style="color:#ADBAC7;">::</span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Y</span><span style="color:#F47067;">&amp;</span><span style="color:#ADBAC7;">)</span><span style="color:#768390;"> //特化</span></span>
<span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#ADBAC7;">	m_Age </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">main</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">	X x;</span></span>
<span class="line"><span style="color:#ADBAC7;">	cout </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> x.</span><span style="color:#DCBDFB;">GetValue</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> endl;</span><span style="color:#768390;">// 输出 1</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	x.</span><span style="color:#DCBDFB;">Func</span><span style="color:#ADBAC7;">(</span><span style="color:#DCBDFB;">Y</span><span style="color:#ADBAC7;">());</span></span>
<span class="line"><span style="color:#ADBAC7;">	cout </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> x.</span><span style="color:#DCBDFB;">GetValue</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">&lt;&lt;</span><span style="color:#ADBAC7;"> endl;</span><span style="color:#768390;">// 输出 2</span></span>
<span class="line"><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#DCBDFB;">getchar</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">	</span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">X</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">private:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> m_Age;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">X</span><span style="color:#24292E;">() : </span><span style="color:#6F42C1;">m_Age</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">){}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">template</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">typename</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">t</span><span style="color:#24292E;">){}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetValue</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> m_Age;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Y</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">template</span><span style="color:#24292E;">&lt;&gt;</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">X</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Y</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">)</span><span style="color:#6A737D;"> //特化</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	m_Age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	X x;</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> x.</span><span style="color:#6F42C1;">GetValue</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span><span style="color:#6A737D;">// 输出 1</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	x.</span><span style="color:#6F42C1;">Func</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Y</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> x.</span><span style="color:#6F42C1;">GetValue</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span><span style="color:#6A737D;">// 输出 2</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">getchar</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>这种方法利用了 X 具有一个成员模板的事实，通过特化函数模板，来打入敌人内部。代码完全符合标准，标准也确保这种行为会按照编码者的意图行事。<code>boost</code> 和 <code>loki</code> 中大量运用此手法。</p>`,13);function E(s,d,g,_,h,v){const o=c,e=r("ClientOnly");return l(),y("div",null,[F,A(e,null,{default:i(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(l(),B(o,{key:0,article:s.$frontmatter},null,8,["article"])):b("",!0)]}),_:1}),m])}const f=t(u,[["render",E]]);export{V as __pageData,f as default};

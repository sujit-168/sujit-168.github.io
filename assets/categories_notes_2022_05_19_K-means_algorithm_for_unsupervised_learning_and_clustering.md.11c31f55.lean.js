import{_ as y}from"./chunks/ArticleMetadata.fa7eca87.js";import{_ as i,C as A,o as a,c as o,H as d,w as C,k as s,a as e,Q as t,b as m,e as D}from"./chunks/framework.daca35a3.js";import"./chunks/md5.3e7612d8.js";const K=JSON.parse('{"title":"无监督学习与聚类之 K-means 算法","description":"","frontmatter":{"title":"无监督学习与聚类之 K-means 算法","date":"2022-05-19T15:02:41.000Z","categories":["无监督学习，聚类"],"tags":["无监督学习，聚类"],"copyright":true},"headers":[],"relativePath":"categories/notes/2022/05/19/K-means_algorithm_for_unsupervised_learning_and_clustering.md","filePath":"categories/notes/2022/05/19/K-means_algorithm_for_unsupervised_learning_and_clustering.md","lastUpdated":1699715502000}'),u={name:"categories/notes/2022/05/19/K-means_algorithm_for_unsupervised_learning_and_clustering.md"},F=s("h1",{id:"无监督学习与聚类之-k-means-算法",tabindex:"-1"},[e("无监督学习与聚类之 K-means 算法 "),s("a",{class:"header-anchor",href:"#无监督学习与聚类之-k-means-算法","aria-label":'Permalink to "无监督学习与聚类之 K-means 算法"'},"​")],-1),b=s("h3",{id:"k-means-原理说明",tabindex:"-1"},[e("K-means 原理说明 "),s("a",{class:"header-anchor",href:"#k-means-原理说明","aria-label":'Permalink to "K-means 原理说明"'},"​")],-1),B=s("p",null,"通常，人们根据样本间的某种距离或者相似性来定义聚类，即把相似的（或距离近的）样本聚为同一类，而把不相似的（或距离远的）样本归在其他类。",-1),E=s("p",null,"k-means 算法是一种很常见的聚类算法，它的基本思想是：通过迭代寻找 k 个聚类的一种划分方案，使得用这 k 个聚类的均值来代表相应各类样本时所得的总体误差最小。",-1),T=s("p",null,"k-means 算法的基础是最小误差平方和准则。其代价函数是：",-1),h={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},Q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.819ex"},xmlns:"http://www.w3.org/2000/svg",width:"26.399ex",height:"6.757ex",role:"img",focusable:"false",viewBox:"0 -1740.7 11668.3 2986.6","aria-hidden":"true"},_=t("",1),g=[_],v=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mi",null,"J"),s("mo",{stretchy:"false"},"("),s("mi",null,"c"),s("mo",null,","),s("mi",null,"μ"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("munderover",null,[s("mo",{"data-mjx-texclass":"OP",movablelimits:"false"},"∑"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"k")]),s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("msup",null,[s("mi",null,"x"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")])]),s("mo",null,"−"),s("msub",null,[s("mi",null,"μ"),s("mrow",{"data-mjx-texclass":"ORD"},[s("msup",null,[s("mi",null,"c"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")])])])]),s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("msup",null,[s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("mn",null,"2")])])],-1),k=t("",51);function f(n,x,q,w,H,L){const r=y,c=A("ClientOnly");return a(),o("div",null,[F,d(c,null,{default:C(()=>{var l,p;return[(((l=n.$frontmatter)==null?void 0:l.aside)??!0)&&(((p=n.$frontmatter)==null?void 0:p.showArticleMetadata)??!0)?(a(),m(r,{key:0,article:n.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),b,B,E,T,s("mjx-container",h,[(a(),o("svg",Q,g)),v]),k])}const V=i(u,[["render",f]]);export{K as __pageData,V as default};

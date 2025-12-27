import{p as Q}from"./chunk-K2ZEYYM2.7ea3e7e0.js";import{p as V}from"./chunk-KYR5PYZH.7e4ec272.js";import{F as Z,o as j,p as q,s as H,g as J,d as K,c as X,_ as s,l as w,x as Y,e as ee,G as te,aN as ae,aP as re,aQ as G,aR as ie,m as se,aS as le}from"../app.cc5d8078.js";import"./chunk-ZZTYOBSU.f44f8c7f.js";import"./framework.4879a649.js";import"./theme.e7e6e4cb.js";import"./md5.3e7612d8.js";var P=Z.pie,D={sections:new Map,showData:!1,config:P},g=D.sections,C=D.showData,oe=structuredClone(P),ne=s(()=>structuredClone(oe),"getConfig"),ce=s(()=>{g=new Map,C=D.showData,Y()},"clear"),pe=s(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),de=s(()=>g,"getSections"),ge=s(e=>{C=e},"setShowData"),ue=s(()=>C,"getShowData"),R={getConfig:ne,clear:ce,setDiagramTitle:j,getDiagramTitle:q,setAccTitle:H,getAccTitle:J,setAccDescription:K,getAccDescription:X,addSection:pe,getSections:de,setShowData:ge,getShowData:ue},fe=s((e,a)=>{Q(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),he={parse:s(async e=>{const a=await V("pie",e);w.debug(a),fe(a,R)},"parse")},me=s(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ve=me,Se=s(e=>{const a=[...e.values()].reduce((r,l)=>r+l,0),$=[...e.entries()].map(([r,l])=>({label:r,value:l})).filter(r=>r.value/a*100>=1).sort((r,l)=>l.value-r.value);return le().value(r=>r.value)($)},"createPieArcs"),xe=s((e,a,$,y)=>{w.debug(`rendering pie chart
`+e);const r=y.db,l=ee(),T=te(r.getConfig(),l.pie),A=40,o=18,p=4,n=450,u=n,f=ae(a),c=f.append("g");c.attr("transform","translate("+u/2+","+n/2+")");const{themeVariables:i}=l;let[_]=re(i.pieOuterStrokeWidth);_??(_=2);const b=T.textPosition,d=Math.min(u,n)/2-A,W=G().innerRadius(0).outerRadius(d),M=G().innerRadius(d*b).outerRadius(d*b);c.append("circle").attr("cx",0).attr("cy",0).attr("r",d+_/2).attr("class","pieOuterCircle");const h=r.getSections(),N=Se(h),O=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(t=>{m+=t});const E=N.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),v=ie(O);c.selectAll("mySlices").data(E).enter().append("path").attr("d",W).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+M.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-(n-50)/2).attr("class","pieTitleText");const k=[...h.entries()].map(([t,x])=>({label:t,value:x})),S=c.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,x)=>{const z=o+p,L=z*k.length/2,B=12*o,U=x*z-L;return"translate("+B+","+U+")"});S.append("rect").attr("width",o).attr("height",o).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),S.append("text").attr("x",o+p).attr("y",o-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const I=Math.max(...S.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),F=u+A+o+p+I;f.attr("viewBox",`0 0 ${F} ${n}`),se(f,n,F,T.useMaxWidth)},"draw"),we={draw:xe},be={parser:he,db:R,renderer:we,styles:ve};export{be as diagram};

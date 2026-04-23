import{p as j}from"./chunk-WASTHULE.pU4SYJTP.js";import{p as q}from"./wardley-RL74JXVD-T2LBEBUU.Dw06Maxk.js";import{g as H,s as J,a as Y,b as ee,v as te,t as ae,_ as s,l as w,c as ie,I as re,aO as se,aP as ne,aQ as M,aR as oe,e as le,B as ce,aS as de,K as pe}from"../app.AYx6SnTN.js";import"./chunk-MFRUYFWM.KhtZX--q.js";import"./framework.CH3kbxFw.js";import"./theme.WCjGgaQ_.js";var ge=pe.pie,C={sections:new Map,showData:!1},u=C.sections,D=C.showData,he=structuredClone(ge),ue=s(()=>structuredClone(he),"getConfig"),fe=s(()=>{u=new Map,D=C.showData,ce()},"clear"),me=s(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ve=s(()=>u,"getSections"),Se=s(e=>{D=e},"setShowData"),xe=s(()=>D,"getShowData"),B={getConfig:ue,clear:fe,setDiagramTitle:ae,getDiagramTitle:te,setAccTitle:ee,getAccTitle:Y,setAccDescription:J,getAccDescription:H,addSection:me,getSections:ve,setShowData:Se,getShowData:xe},we=s((e,a)=>{j(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),Ce={parse:s(async e=>{const a=await q("pie",e);w.debug(a),we(a,B)},"parse")},De=s(e=>`
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
`,"getStyles"),$e=De,ye=s(e=>{const a=[...e.values()].reduce((r,o)=>r+o,0),$=[...e.entries()].map(([r,o])=>({label:r,value:o})).filter(r=>r.value/a*100>=1);return de().value(r=>r.value).sort(null)($)},"createPieArcs"),Te=s((e,a,$,y)=>{w.debug(`rendering pie chart
`+e);const r=y.db,o=ie(),T=re(r.getConfig(),o.pie),A=40,n=18,p=4,c=450,d=c,f=se(a),l=f.append("g");l.attr("transform","translate("+d/2+","+c/2+")");const{themeVariables:i}=o;let[_]=ne(i.pieOuterStrokeWidth);_??=2;const b=T.textPosition,g=Math.min(d,c)/2-A,G=M().innerRadius(0).outerRadius(g),L=M().innerRadius(g*b).outerRadius(g*b);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+_/2).attr("class","pieOuterCircle");const h=r.getSections(),O=ye(h),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(t=>{m+=t});const E=O.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),v=oe(P).domain([...h.keys()]);l.selectAll("mySlices").data(E).enter().append("path").attr("d",G).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),l.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+L.centroid(t)+")").style("text-anchor","middle").attr("class","slice");const I=l.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),k=[...h.entries()].map(([t,x])=>({label:t,value:x})),S=l.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,x)=>{const F=n+p,V=F*k.length/2,X=12*n,Z=x*F-V;return"translate("+X+","+Z+")"});S.append("rect").attr("width",n).attr("height",n).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),S.append("text").attr("x",n+p).attr("y",n-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const N=Math.max(...S.selectAll("text").nodes().map(t=>t?.getBoundingClientRect().width??0)),U=d+A+n+p+N,R=I.node()?.getBoundingClientRect().width??0,K=d/2-R/2,Q=d/2+R/2,W=Math.min(0,K),z=Math.max(U,Q)-W;f.attr("viewBox",`${W} 0 ${z} ${c}`),le(f,c,z,T.useMaxWidth)},"draw"),Ae={draw:Te},Fe={parser:Ce,db:B,renderer:Ae,styles:$e};export{Fe as diagram};

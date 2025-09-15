import{_ as l,a as de,r as ot,aq as Je,ar as Ie,e as ce,s as ct,g as lt,o as ut,p as dt,d as ft,c as ht,x as kt,l as be,k as pe,as as mt,at as yt,au as gt,m as pt,av as vt,aw as Tt,ax as bt,ay as je,az as Be,aA as qe,aB as Ge,aC as He,aD as Xe,aE as Ue,aF as xt,f as _t,v as wt,aG as Dt,aH as St,aI as Ct,aJ as Et,aK as Mt,aL as It,aM as At}from"../app.751db5cd.js";import"./framework.fcce45dc.js";import"./theme.ad4d062a.js";import"./md5.3e7612d8.js";var Lt=Ie({"../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/isoWeek.js"(e,s){(function(a,i){typeof e=="object"&&typeof s<"u"?s.exports=i():typeof define=="function"&&define.amd?define(i):(a=typeof globalThis<"u"?globalThis:a||self).dayjs_plugin_isoWeek=i()})(e,function(){var a="day";return function(i,n,h){var f=l(function(E){return E.add(4-E.isoWeekday(),a)},"a"),w=n.prototype;w.isoWeekYear=function(){return f(this).year()},w.isoWeek=function(E){if(!this.$utils().u(E))return this.add(7*(E-this.isoWeek()),a);var p,M,V,P,j=f(this),S=(p=this.isoWeekYear(),M=this.$u,V=(M?h.utc:h)().year(p).startOf("year"),P=4-V.isoWeekday(),V.isoWeekday()>4&&(P+=7),V.add(P,a));return j.diff(S,"week")+1},w.isoWeekday=function(E){return this.$utils().u(E)?this.day()||7:this.day(this.day()%7?E:E-7)};var Y=w.startOf;w.startOf=function(E,p){var M=this.$utils(),V=!!M.u(p)||p;return M.p(E)==="isoweek"?V?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Y.bind(this)(E,p)}}})}}),Ft=Ie({"../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/customParseFormat.js"(e,s){(function(a,i){typeof e=="object"&&typeof s<"u"?s.exports=i():typeof define=="function"&&define.amd?define(i):(a=typeof globalThis<"u"?globalThis:a||self).dayjs_plugin_customParseFormat=i()})(e,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,h=/\d\d/,f=/\d\d?/,w=/\d*[^-_:/,()\s\d]+/,Y={},E=l(function(v){return(v=+v)+(v>68?1900:2e3)},"a"),p=l(function(v){return function(C){this[v]=+C}},"f"),M=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(C){if(!C||C==="Z")return 0;var L=C.match(/([+-]|\d\d)/g),F=60*L[1]+(+L[2]||0);return F===0?0:L[0]==="+"?-F:F}(v)}],V=l(function(v){var C=Y[v];return C&&(C.indexOf?C:C.s.concat(C.f))},"u"),P=l(function(v,C){var L,F=Y.meridiem;if(F){for(var q=1;q<=24;q+=1)if(v.indexOf(F(q,0,C))>-1){L=q>12;break}}else L=v===(C?"pm":"PM");return L},"d"),j={A:[w,function(v){this.afternoon=P(v,!1)}],a:[w,function(v){this.afternoon=P(v,!0)}],Q:[n,function(v){this.month=3*(v-1)+1}],S:[n,function(v){this.milliseconds=100*+v}],SS:[h,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[f,p("seconds")],ss:[f,p("seconds")],m:[f,p("minutes")],mm:[f,p("minutes")],H:[f,p("hours")],h:[f,p("hours")],HH:[f,p("hours")],hh:[f,p("hours")],D:[f,p("day")],DD:[h,p("day")],Do:[w,function(v){var C=Y.ordinal,L=v.match(/\d+/);if(this.day=L[0],C)for(var F=1;F<=31;F+=1)C(F).replace(/\[|\]/g,"")===v&&(this.day=F)}],w:[f,p("week")],ww:[h,p("week")],M:[f,p("month")],MM:[h,p("month")],MMM:[w,function(v){var C=V("months"),L=(V("monthsShort")||C.map(function(F){return F.slice(0,3)})).indexOf(v)+1;if(L<1)throw new Error;this.month=L%12||L}],MMMM:[w,function(v){var C=V("months").indexOf(v)+1;if(C<1)throw new Error;this.month=C%12||C}],Y:[/[+-]?\d+/,p("year")],YY:[h,function(v){this.year=E(v)}],YYYY:[/\d{4}/,p("year")],Z:M,ZZ:M};function S(v){var C,L;C=v,L=Y&&Y.formats;for(var F=(v=C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,T,g){var _=g&&g.toUpperCase();return T||L[g]||a[g]||L[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(c,d,k){return d||k.slice(1)})})).match(i),q=F.length,G=0;G<q;G+=1){var Q=F[G],H=j[Q],y=H&&H[0],b=H&&H[1];F[G]=b?{regex:y,parser:b}:Q.replace(/^\[|\]$/g,"")}return function(x){for(var T={},g=0,_=0;g<q;g+=1){var c=F[g];if(typeof c=="string")_+=c.length;else{var d=c.regex,k=c.parser,u=x.slice(_),m=d.exec(u)[0];k.call(T,m),x=x.replace(m,"")}}return function(r){var o=r.afternoon;if(o!==void 0){var t=r.hours;o?t<12&&(r.hours+=12):t===12&&(r.hours=0),delete r.afternoon}}(T),T}}return l(S,"l"),function(v,C,L){L.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(E=v.parseTwoDigitYear);var F=C.prototype,q=F.parse;F.parse=function(G){var Q=G.date,H=G.utc,y=G.args;this.$u=H;var b=y[1];if(typeof b=="string"){var x=y[2]===!0,T=y[3]===!0,g=x||T,_=y[2];T&&(_=y[2]),Y=this.$locale(),!x&&_&&(Y=L.Ls[_]),this.$d=function(u,m,r,o){try{if(["x","X"].indexOf(m)>-1)return new Date((m==="X"?1e3:1)*u);var t=S(m)(u),I=t.year,D=t.month,A=t.day,N=t.hours,W=t.minutes,O=t.seconds,$=t.milliseconds,ie=t.zone,ne=t.week,fe=new Date,he=A||(I||D?1:fe.getDate()),oe=I||fe.getFullYear(),z=0;I&&!D||(z=D>0?D-1:fe.getMonth());var U,B=N||0,ae=W||0,J=O||0,re=$||0;return ie?new Date(Date.UTC(oe,z,he,B,ae,J,re+60*ie.offset*1e3)):r?new Date(Date.UTC(oe,z,he,B,ae,J,re)):(U=new Date(oe,z,he,B,ae,J,re),ne&&(U=o(U).week(ne).toDate()),U)}catch{return new Date("")}}(Q,b,H,L),this.init(),_&&_!==!0&&(this.$L=this.locale(_).$L),g&&Q!=this.format(b)&&(this.$d=new Date("")),Y={}}else if(b instanceof Array)for(var c=b.length,d=1;d<=c;d+=1){y[1]=b[d-1];var k=L.apply(this,y);if(k.isValid()){this.$d=k.$d,this.$L=k.$L,this.init();break}d===c&&(this.$d=new Date(""))}else q.call(this,G)}}})}}),Yt=Ie({"../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/advancedFormat.js"(e,s){(function(a,i){typeof e=="object"&&typeof s<"u"?s.exports=i():typeof define=="function"&&define.amd?define(i):(a=typeof globalThis<"u"?globalThis:a||self).dayjs_plugin_advancedFormat=i()})(e,function(){return function(a,i){var n=i.prototype,h=n.format;n.format=function(f){var w=this,Y=this.$locale();if(!this.isValid())return h.bind(this)(f);var E=this.$utils(),p=(f||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(M){switch(M){case"Q":return Math.ceil((w.$M+1)/3);case"Do":return Y.ordinal(w.$D);case"gggg":return w.weekYear();case"GGGG":return w.isoWeekYear();case"wo":return Y.ordinal(w.week(),"W");case"w":case"ww":return E.s(w.week(),M==="w"?1:2,"0");case"W":case"WW":return E.s(w.isoWeek(),M==="W"?1:2,"0");case"k":case"kk":return E.s(String(w.$H===0?24:w.$H),M==="k"?1:2,"0");case"X":return Math.floor(w.$d.getTime()/1e3);case"x":return w.$d.getTime();case"z":return"["+w.offsetName()+"]";case"zzz":return"["+w.offsetName("long")+"]";default:return M}});return h.bind(this)(p)}}})}}),Se=function(){var e=l(function(_,c,d,k){for(d=d||{},k=_.length;k--;d[_[k]]=c);return d},"o"),s=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],a=[1,26],i=[1,27],n=[1,28],h=[1,29],f=[1,30],w=[1,31],Y=[1,32],E=[1,33],p=[1,34],M=[1,9],V=[1,10],P=[1,11],j=[1,12],S=[1,13],v=[1,14],C=[1,15],L=[1,16],F=[1,19],q=[1,20],G=[1,21],Q=[1,22],H=[1,23],y=[1,25],b=[1,35],x={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(c,d,k,u,m,r,o){var t=r.length-1;switch(m){case 1:return r[t-1];case 2:this.$=[];break;case 3:r[t-1].push(r[t]),this.$=r[t-1];break;case 4:case 5:this.$=r[t];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(r[t].substr(11)),this.$=r[t].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=r[t].substr(18);break;case 19:u.TopAxis(),this.$=r[t].substr(8);break;case 20:u.setAxisFormat(r[t].substr(11)),this.$=r[t].substr(11);break;case 21:u.setTickInterval(r[t].substr(13)),this.$=r[t].substr(13);break;case 22:u.setExcludes(r[t].substr(9)),this.$=r[t].substr(9);break;case 23:u.setIncludes(r[t].substr(9)),this.$=r[t].substr(9);break;case 24:u.setTodayMarker(r[t].substr(12)),this.$=r[t].substr(12);break;case 27:u.setDiagramTitle(r[t].substr(6)),this.$=r[t].substr(6);break;case 28:this.$=r[t].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=r[t].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(r[t].substr(8)),this.$=r[t].substr(8);break;case 33:u.addTask(r[t-1],r[t]),this.$="task";break;case 34:this.$=r[t-1],u.setClickEvent(r[t-1],r[t],null);break;case 35:this.$=r[t-2],u.setClickEvent(r[t-2],r[t-1],r[t]);break;case 36:this.$=r[t-2],u.setClickEvent(r[t-2],r[t-1],null),u.setLink(r[t-2],r[t]);break;case 37:this.$=r[t-3],u.setClickEvent(r[t-3],r[t-2],r[t-1]),u.setLink(r[t-3],r[t]);break;case 38:this.$=r[t-2],u.setClickEvent(r[t-2],r[t],null),u.setLink(r[t-2],r[t-1]);break;case 39:this.$=r[t-3],u.setClickEvent(r[t-3],r[t-1],r[t]),u.setLink(r[t-3],r[t-2]);break;case 40:this.$=r[t-1],u.setLink(r[t-1],r[t]);break;case 41:case 47:this.$=r[t-1]+" "+r[t];break;case 42:case 43:case 45:this.$=r[t-2]+" "+r[t-1]+" "+r[t];break;case 44:case 46:this.$=r[t-3]+" "+r[t-2]+" "+r[t-1]+" "+r[t];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:a,13:i,14:n,15:h,16:f,17:w,18:Y,19:18,20:E,21:p,22:M,23:V,24:P,25:j,26:S,27:v,28:C,29:L,30:F,31:q,33:G,35:Q,36:H,37:24,38:y,40:b},e(s,[2,7],{1:[2,1]}),e(s,[2,3]),{9:36,11:17,12:a,13:i,14:n,15:h,16:f,17:w,18:Y,19:18,20:E,21:p,22:M,23:V,24:P,25:j,26:S,27:v,28:C,29:L,30:F,31:q,33:G,35:Q,36:H,37:24,38:y,40:b},e(s,[2,5]),e(s,[2,6]),e(s,[2,17]),e(s,[2,18]),e(s,[2,19]),e(s,[2,20]),e(s,[2,21]),e(s,[2,22]),e(s,[2,23]),e(s,[2,24]),e(s,[2,25]),e(s,[2,26]),e(s,[2,27]),{32:[1,37]},{34:[1,38]},e(s,[2,30]),e(s,[2,31]),e(s,[2,32]),{39:[1,39]},e(s,[2,8]),e(s,[2,9]),e(s,[2,10]),e(s,[2,11]),e(s,[2,12]),e(s,[2,13]),e(s,[2,14]),e(s,[2,15]),e(s,[2,16]),{41:[1,40],43:[1,41]},e(s,[2,4]),e(s,[2,28]),e(s,[2,29]),e(s,[2,33]),e(s,[2,34],{42:[1,42],43:[1,43]}),e(s,[2,40],{41:[1,44]}),e(s,[2,35],{43:[1,45]}),e(s,[2,36]),e(s,[2,38],{42:[1,46]}),e(s,[2,37]),e(s,[2,39])],defaultActions:{},parseError:l(function(c,d){if(d.recoverable)this.trace(c);else{var k=new Error(c);throw k.hash=d,k}},"parseError"),parse:l(function(c){var d=this,k=[0],u=[],m=[null],r=[],o=this.table,t="",I=0,D=0,A=2,N=1,W=r.slice.call(arguments,1),O=Object.create(this.lexer),$={yy:{}};for(var ie in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ie)&&($.yy[ie]=this.yy[ie]);O.setInput(c,$.yy),$.yy.lexer=O,$.yy.parser=this,typeof O.yylloc>"u"&&(O.yylloc={});var ne=O.yylloc;r.push(ne);var fe=O.options&&O.options.ranges;typeof $.yy.parseError=="function"?this.parseError=$.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function he(X){k.length=k.length-2*X,m.length=m.length-X,r.length=r.length-X}l(he,"popStack");function oe(){var X;return X=u.pop()||O.lex()||N,typeof X!="number"&&(X instanceof Array&&(u=X,X=u.pop()),X=d.symbols_[X]||X),X}l(oe,"lex");for(var z,U,B,ae,J={},re,K,Ne,ge;;){if(U=k[k.length-1],this.defaultActions[U]?B=this.defaultActions[U]:((z===null||typeof z>"u")&&(z=oe()),B=o[U]&&o[U][z]),typeof B>"u"||!B.length||!B[0]){var we="";ge=[];for(re in o[U])this.terminals_[re]&&re>A&&ge.push("'"+this.terminals_[re]+"'");O.showPosition?we="Parse error on line "+(I+1)+`:
`+O.showPosition()+`
Expecting `+ge.join(", ")+", got '"+(this.terminals_[z]||z)+"'":we="Parse error on line "+(I+1)+": Unexpected "+(z==N?"end of input":"'"+(this.terminals_[z]||z)+"'"),this.parseError(we,{text:O.match,token:this.terminals_[z]||z,line:O.yylineno,loc:ne,expected:ge})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+z);switch(B[0]){case 1:k.push(z),m.push(O.yytext),r.push(O.yylloc),k.push(B[1]),z=null,D=O.yyleng,t=O.yytext,I=O.yylineno,ne=O.yylloc;break;case 2:if(K=this.productions_[B[1]][1],J.$=m[m.length-K],J._$={first_line:r[r.length-(K||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(K||1)].first_column,last_column:r[r.length-1].last_column},fe&&(J._$.range=[r[r.length-(K||1)].range[0],r[r.length-1].range[1]]),ae=this.performAction.apply(J,[t,D,I,$.yy,B[1],m,r].concat(W)),typeof ae<"u")return ae;K&&(k=k.slice(0,-1*K*2),m=m.slice(0,-1*K),r=r.slice(0,-1*K)),k.push(this.productions_[B[1]][0]),m.push(J.$),r.push(J._$),Ne=o[k[k.length-2]][k[k.length-1]],k.push(Ne);break;case 3:return!0}}return!0},"parse")},T=function(){var _={EOF:1,parseError:l(function(d,k){if(this.yy.parser)this.yy.parser.parseError(d,k);else throw new Error(d)},"parseError"),setInput:l(function(c,d){return this.yy=d||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:l(function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var d=c.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},"input"),unput:l(function(c){var d=c.length,k=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),k.length-1&&(this.yylineno-=k.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:k?(k.length===u.length?this.yylloc.first_column:0)+u[u.length-k.length].length-k[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(c){this.unput(this.match.slice(c))},"less"),pastInput:l(function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var c=this.pastInput(),d=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:l(function(c,d){var k,u,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),u=c[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],k=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),k)return k;if(this._backtrack){for(var r in m)this[r]=m[r];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,d,k,u;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),r=0;r<m.length;r++)if(k=this._input.match(this.rules[m[r]]),k&&(!d||k[0].length>d[0].length)){if(d=k,u=r,this.options.backtrack_lexer){if(c=this.test_match(k,m[r]),c!==!1)return c;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(c=this.test_match(d,m[u]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var d=this.next();return d||this.lex()},"lex"),begin:l(function(d){this.conditionStack.push(d)},"begin"),popState:l(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:l(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:l(function(d){this.begin(d)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(d,k,u,m){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return _}();x.lexer=T;function g(){this.yy={}}return l(g,"Parser"),g.prototype=x,x.Parser=g,new g}();Se.parser=Se;var Wt=Se,Ot=de(ot(),1),Z=de(Je(),1),Vt=de(Lt(),1),Pt=de(Ft(),1),zt=de(Yt(),1);Z.default.extend(Vt.default);Z.default.extend(Pt.default);Z.default.extend(zt.default);var Ze={friday:5,saturday:6},ee="",Ae="",Le=void 0,Fe="",ke=[],me=[],Ye=new Map,We=[],xe=[],ue="",Oe="",Ke=["active","done","crit","milestone","vert"],Ve=[],ye=!1,Pe=!1,ze="sunday",_e="saturday",Ce=0,Rt=l(function(){We=[],xe=[],ue="",Ve=[],ve=0,Me=void 0,Te=void 0,R=[],ee="",Ae="",Oe="",Le=void 0,Fe="",ke=[],me=[],ye=!1,Pe=!1,Ce=0,Ye=new Map,kt(),ze="sunday",_e="saturday"},"clear"),Nt=l(function(e){Ae=e},"setAxisFormat"),jt=l(function(){return Ae},"getAxisFormat"),Bt=l(function(e){Le=e},"setTickInterval"),qt=l(function(){return Le},"getTickInterval"),Gt=l(function(e){Fe=e},"setTodayMarker"),Ht=l(function(){return Fe},"getTodayMarker"),Xt=l(function(e){ee=e},"setDateFormat"),Ut=l(function(){ye=!0},"enableInclusiveEndDates"),Zt=l(function(){return ye},"endDatesAreInclusive"),Qt=l(function(){Pe=!0},"enableTopAxis"),$t=l(function(){return Pe},"topAxisEnabled"),Jt=l(function(e){Oe=e},"setDisplayMode"),Kt=l(function(){return Oe},"getDisplayMode"),er=l(function(){return ee},"getDateFormat"),tr=l(function(e){ke=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),rr=l(function(){return ke},"getIncludes"),ar=l(function(e){me=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),sr=l(function(){return me},"getExcludes"),ir=l(function(){return Ye},"getLinks"),nr=l(function(e){ue=e,We.push(e)},"addSection"),or=l(function(){return We},"getSections"),cr=l(function(){let e=Qe();const s=10;let a=0;for(;!e&&a<s;)e=Qe(),a++;return xe=R,xe},"getTasks"),et=l(function(e,s,a,i){const n=e.format(s.trim()),h=e.format("YYYY-MM-DD");return i.includes(n)||i.includes(h)?!1:a.includes("weekends")&&(e.isoWeekday()===Ze[_e]||e.isoWeekday()===Ze[_e]+1)||a.includes(e.format("dddd").toLowerCase())?!0:a.includes(n)||a.includes(h)},"isInvalidDate"),lr=l(function(e){ze=e},"setWeekday"),ur=l(function(){return ze},"getWeekday"),dr=l(function(e){_e=e},"setWeekend"),tt=l(function(e,s,a,i){if(!a.length||e.manualEndTime)return;let n;e.startTime instanceof Date?n=(0,Z.default)(e.startTime):n=(0,Z.default)(e.startTime,s,!0),n=n.add(1,"d");let h;e.endTime instanceof Date?h=(0,Z.default)(e.endTime):h=(0,Z.default)(e.endTime,s,!0);const[f,w]=fr(n,h,s,a,i);e.endTime=f.toDate(),e.renderEndTime=w},"checkTaskDates"),fr=l(function(e,s,a,i,n){let h=!1,f=null;for(;e<=s;)h||(f=s.toDate()),h=et(e,a,i,n),h&&(s=s.add(1,"d")),e=e.add(1,"d");return[s,f]},"fixTaskDates"),Ee=l(function(e,s,a){a=a.trim();const n=/^after\s+(?<ids>[\d\w- ]+)/.exec(a);if(n!==null){let f=null;for(const Y of n.groups.ids.split(" ")){let E=se(Y);E!==void 0&&(!f||E.endTime>f.endTime)&&(f=E)}if(f)return f.endTime;const w=new Date;return w.setHours(0,0,0,0),w}let h=(0,Z.default)(a,s.trim(),!0);if(h.isValid())return h.toDate();{be.debug("Invalid date:"+a),be.debug("With date format:"+s.trim());const f=new Date(a);if(f===void 0||isNaN(f.getTime())||f.getFullYear()<-1e4||f.getFullYear()>1e4)throw new Error("Invalid date:"+a);return f}},"getStartDate"),rt=l(function(e){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},"parseDuration"),at=l(function(e,s,a,i=!1){a=a.trim();const h=/^until\s+(?<ids>[\d\w- ]+)/.exec(a);if(h!==null){let p=null;for(const V of h.groups.ids.split(" ")){let P=se(V);P!==void 0&&(!p||P.startTime<p.startTime)&&(p=P)}if(p)return p.startTime;const M=new Date;return M.setHours(0,0,0,0),M}let f=(0,Z.default)(a,s.trim(),!0);if(f.isValid())return i&&(f=f.add(1,"d")),f.toDate();let w=(0,Z.default)(e);const[Y,E]=rt(a);if(!Number.isNaN(Y)){const p=w.add(Y,E);p.isValid()&&(w=p)}return w.toDate()},"getEndDate"),ve=0,le=l(function(e){return e===void 0?(ve=ve+1,"task"+ve):e},"parseId"),hr=l(function(e,s){let a;s.substr(0,1)===":"?a=s.substr(1,s.length):a=s;const i=a.split(","),n={};Re(i,n,Ke);for(let f=0;f<i.length;f++)i[f]=i[f].trim();let h="";switch(i.length){case 1:n.id=le(),n.startTime=e.endTime,h=i[0];break;case 2:n.id=le(),n.startTime=Ee(void 0,ee,i[0]),h=i[1];break;case 3:n.id=le(i[0]),n.startTime=Ee(void 0,ee,i[1]),h=i[2];break}return h&&(n.endTime=at(n.startTime,ee,h,ye),n.manualEndTime=(0,Z.default)(h,"YYYY-MM-DD",!0).isValid(),tt(n,ee,me,ke)),n},"compileData"),kr=l(function(e,s){let a;s.substr(0,1)===":"?a=s.substr(1,s.length):a=s;const i=a.split(","),n={};Re(i,n,Ke);for(let h=0;h<i.length;h++)i[h]=i[h].trim();switch(i.length){case 1:n.id=le(),n.startTime={type:"prevTaskEnd",id:e},n.endTime={data:i[0]};break;case 2:n.id=le(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=le(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]};break}return n},"parseData"),Me,Te,R=[],st={},mr=l(function(e,s){const a={section:ue,type:ue,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:e,classes:[]},i=kr(Te,s);a.raw.startTime=i.startTime,a.raw.endTime=i.endTime,a.id=i.id,a.prevTaskId=Te,a.active=i.active,a.done=i.done,a.crit=i.crit,a.milestone=i.milestone,a.vert=i.vert,a.order=Ce,Ce++;const n=R.push(a);Te=a.id,st[a.id]=n-1},"addTask"),se=l(function(e){const s=st[e];return R[s]},"findTaskById"),yr=l(function(e,s){const a={section:ue,type:ue,description:e,task:e,classes:[]},i=hr(Me,s);a.startTime=i.startTime,a.endTime=i.endTime,a.id=i.id,a.active=i.active,a.done=i.done,a.crit=i.crit,a.milestone=i.milestone,a.vert=i.vert,Me=a,xe.push(a)},"addTaskOrg"),Qe=l(function(){const e=l(function(a){const i=R[a];let n="";switch(R[a].raw.startTime.type){case"prevTaskEnd":{const h=se(i.prevTaskId);i.startTime=h.endTime;break}case"getStartDate":n=Ee(void 0,ee,R[a].raw.startTime.startData),n&&(R[a].startTime=n);break}return R[a].startTime&&(R[a].endTime=at(R[a].startTime,ee,R[a].raw.endTime.data,ye),R[a].endTime&&(R[a].processed=!0,R[a].manualEndTime=(0,Z.default)(R[a].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tt(R[a],ee,me,ke))),R[a].processed},"compileTask");let s=!0;for(const[a,i]of R.entries())e(a),s=s&&i.processed;return s},"compileTasks"),gr=l(function(e,s){let a=s;ce().securityLevel!=="loose"&&(a=(0,Ot.sanitizeUrl)(s)),e.split(",").forEach(function(i){se(i)!==void 0&&(nt(i,()=>{window.open(a,"_self")}),Ye.set(i,a))}),it(e,"clickable")},"setLink"),it=l(function(e,s){e.split(",").forEach(function(a){let i=se(a);i!==void 0&&i.classes.push(s)})},"setClass"),pr=l(function(e,s,a){if(ce().securityLevel!=="loose"||s===void 0)return;let i=[];if(typeof a=="string"){i=a.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<i.length;h++){let f=i[h].trim();f.startsWith('"')&&f.endsWith('"')&&(f=f.substr(1,f.length-2)),i[h]=f}}i.length===0&&i.push(e),se(e)!==void 0&&nt(e,()=>{wt.runFunc(s,...i)})},"setClickFun"),nt=l(function(e,s){Ve.push(function(){const a=document.querySelector(`[id="${e}"]`);a!==null&&a.addEventListener("click",function(){s()})},function(){const a=document.querySelector(`[id="${e}-text"]`);a!==null&&a.addEventListener("click",function(){s()})})},"pushFun"),vr=l(function(e,s,a){e.split(",").forEach(function(i){pr(i,s,a)}),it(e,"clickable")},"setClickEvent"),Tr=l(function(e){Ve.forEach(function(s){s(e)})},"bindFunctions"),br={getConfig:l(()=>ce().gantt,"getConfig"),clear:Rt,setDateFormat:Xt,getDateFormat:er,enableInclusiveEndDates:Ut,endDatesAreInclusive:Zt,enableTopAxis:Qt,topAxisEnabled:$t,setAxisFormat:Nt,getAxisFormat:jt,setTickInterval:Bt,getTickInterval:qt,setTodayMarker:Gt,getTodayMarker:Ht,setAccTitle:ct,getAccTitle:lt,setDiagramTitle:ut,getDiagramTitle:dt,setDisplayMode:Jt,getDisplayMode:Kt,setAccDescription:ft,getAccDescription:ht,addSection:nr,getSections:or,getTasks:cr,addTask:mr,findTaskById:se,addTaskOrg:yr,setIncludes:tr,getIncludes:rr,setExcludes:ar,getExcludes:sr,setClickEvent:vr,setLink:gr,getLinks:ir,bindFunctions:Tr,parseDuration:rt,isInvalidDate:et,setWeekday:lr,getWeekday:ur,setWeekend:dr};function Re(e,s,a){let i=!0;for(;i;)i=!1,a.forEach(function(n){const h="^\\s*"+n+"\\s*$",f=new RegExp(h);e[0].match(f)&&(s[n]=!0,e.shift(1),i=!0)})}l(Re,"getTaskTags");var De=de(Je(),1),xr=l(function(){be.debug("Something is calling, setConf, remove the call")},"setConf"),$e={monday:Dt,tuesday:St,wednesday:Ct,thursday:Et,friday:Mt,saturday:It,sunday:At},_r=l((e,s)=>{let a=[...e].map(()=>-1/0),i=[...e].sort((h,f)=>h.startTime-f.startTime||h.order-f.order),n=0;for(const h of i)for(let f=0;f<a.length;f++)if(h.startTime>=a[f]){a[f]=h.endTime,h.order=f+s,f>n&&(n=f);break}return n},"getMaxIntersections"),te,wr=l(function(e,s,a,i){const n=ce().gantt,h=ce().securityLevel;let f;h==="sandbox"&&(f=pe("#i"+s));const w=h==="sandbox"?pe(f.nodes()[0].contentDocument.body):pe("body"),Y=h==="sandbox"?f.nodes()[0].contentDocument:document,E=Y.getElementById(s);te=E.parentElement.offsetWidth,te===void 0&&(te=1200),n.useWidth!==void 0&&(te=n.useWidth);const p=i.db.getTasks();let M=[];for(const y of p)M.push(y.type);M=H(M);const V={};let P=2*n.topPadding;if(i.db.getDisplayMode()==="compact"||n.displayMode==="compact"){const y={};for(const x of p)y[x.section]===void 0?y[x.section]=[x]:y[x.section].push(x);let b=0;for(const x of Object.keys(y)){const T=_r(y[x],b)+1;b+=T,P+=T*(n.barHeight+n.barGap),V[x]=T}}else{P+=p.length*(n.barHeight+n.barGap);for(const y of M)V[y]=p.filter(b=>b.type===y).length}E.setAttribute("viewBox","0 0 "+te+" "+P);const j=w.select(`[id="${s}"]`),S=mt().domain([yt(p,function(y){return y.startTime}),gt(p,function(y){return y.endTime})]).rangeRound([0,te-n.leftPadding-n.rightPadding]);function v(y,b){const x=y.startTime,T=b.startTime;let g=0;return x>T?g=1:x<T&&(g=-1),g}l(v,"taskCompare"),p.sort(v),C(p,te,P),pt(j,P,te,n.useMaxWidth),j.append("text").text(i.db.getDiagramTitle()).attr("x",te/2).attr("y",n.titleTopMargin).attr("class","titleText");function C(y,b,x){const T=n.barHeight,g=T+n.barGap,_=n.topPadding,c=n.leftPadding,d=vt().domain([0,M.length]).range(["#00B9FA","#F95002"]).interpolate(Tt);F(g,_,c,b,x,y,i.db.getExcludes(),i.db.getIncludes()),q(c,_,b,x),L(y,g,_,c,T,d,b),G(g,_),Q(c,_,b,x)}l(C,"makeGantt");function L(y,b,x,T,g,_,c){y.sort((o,t)=>o.vert===t.vert?0:o.vert?1:-1);const k=[...new Set(y.map(o=>o.order))].map(o=>y.find(t=>t.order===o));j.append("g").selectAll("rect").data(k).enter().append("rect").attr("x",0).attr("y",function(o,t){return t=o.order,t*b+x-2}).attr("width",function(){return c-n.rightPadding/2}).attr("height",b).attr("class",function(o){for(const[t,I]of M.entries())if(o.type===I)return"section section"+t%n.numberSectionStyles;return"section section0"}).enter();const u=j.append("g").selectAll("rect").data(y).enter(),m=i.db.getLinks();if(u.append("rect").attr("id",function(o){return o.id}).attr("rx",3).attr("ry",3).attr("x",function(o){return o.milestone?S(o.startTime)+T+.5*(S(o.endTime)-S(o.startTime))-.5*g:S(o.startTime)+T}).attr("y",function(o,t){return t=o.order,o.vert?n.gridLineStartPadding:t*b+x}).attr("width",function(o){return o.milestone?g:o.vert?.08*g:S(o.renderEndTime||o.endTime)-S(o.startTime)}).attr("height",function(o){return o.vert?p.length*(n.barHeight+n.barGap)+n.barHeight*2:g}).attr("transform-origin",function(o,t){return t=o.order,(S(o.startTime)+T+.5*(S(o.endTime)-S(o.startTime))).toString()+"px "+(t*b+x+.5*g).toString()+"px"}).attr("class",function(o){const t="task";let I="";o.classes.length>0&&(I=o.classes.join(" "));let D=0;for(const[N,W]of M.entries())o.type===W&&(D=N%n.numberSectionStyles);let A="";return o.active?o.crit?A+=" activeCrit":A=" active":o.done?o.crit?A=" doneCrit":A=" done":o.crit&&(A+=" crit"),A.length===0&&(A=" task"),o.milestone&&(A=" milestone "+A),o.vert&&(A=" vert "+A),A+=D,A+=" "+I,t+A}),u.append("text").attr("id",function(o){return o.id+"-text"}).text(function(o){return o.task}).attr("font-size",n.fontSize).attr("x",function(o){let t=S(o.startTime),I=S(o.renderEndTime||o.endTime);if(o.milestone&&(t+=.5*(S(o.endTime)-S(o.startTime))-.5*g,I=t+g),o.vert)return S(o.startTime)+T;const D=this.getBBox().width;return D>I-t?I+D+1.5*n.leftPadding>c?t+T-5:I+T+5:(I-t)/2+t+T}).attr("y",function(o,t){return o.vert?n.gridLineStartPadding+p.length*(n.barHeight+n.barGap)+60:(t=o.order,t*b+n.barHeight/2+(n.fontSize/2-2)+x)}).attr("text-height",g).attr("class",function(o){const t=S(o.startTime);let I=S(o.endTime);o.milestone&&(I=t+g);const D=this.getBBox().width;let A="";o.classes.length>0&&(A=o.classes.join(" "));let N=0;for(const[O,$]of M.entries())o.type===$&&(N=O%n.numberSectionStyles);let W="";return o.active&&(o.crit?W="activeCritText"+N:W="activeText"+N),o.done?o.crit?W=W+" doneCritText"+N:W=W+" doneText"+N:o.crit&&(W=W+" critText"+N),o.milestone&&(W+=" milestoneText"),o.vert&&(W+=" vertText"),D>I-t?I+D+1.5*n.leftPadding>c?A+" taskTextOutsideLeft taskTextOutside"+N+" "+W:A+" taskTextOutsideRight taskTextOutside"+N+" "+W+" width-"+D:A+" taskText taskText"+N+" "+W+" width-"+D}),ce().securityLevel==="sandbox"){let o;o=pe("#i"+s);const t=o.nodes()[0].contentDocument;u.filter(function(I){return m.has(I.id)}).each(function(I){var D=t.querySelector("#"+I.id),A=t.querySelector("#"+I.id+"-text");const N=D.parentNode;var W=t.createElement("a");W.setAttribute("xlink:href",m.get(I.id)),W.setAttribute("target","_top"),N.appendChild(W),W.appendChild(D),W.appendChild(A)})}}l(L,"drawRects");function F(y,b,x,T,g,_,c,d){if(c.length===0&&d.length===0)return;let k,u;for(const{startTime:D,endTime:A}of _)(k===void 0||D<k)&&(k=D),(u===void 0||A>u)&&(u=A);if(!k||!u)return;if((0,De.default)(u).diff((0,De.default)(k),"year")>5){be.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const m=i.db.getDateFormat(),r=[];let o=null,t=(0,De.default)(k);for(;t.valueOf()<=u;)i.db.isInvalidDate(t,m,c,d)?o?o.end=t:o={start:t,end:t}:o&&(r.push(o),o=null),t=t.add(1,"d");j.append("g").selectAll("rect").data(r).enter().append("rect").attr("id",D=>"exclude-"+D.start.format("YYYY-MM-DD")).attr("x",D=>S(D.start.startOf("day"))+x).attr("y",n.gridLineStartPadding).attr("width",D=>S(D.end.endOf("day"))-S(D.start.startOf("day"))).attr("height",g-b-n.gridLineStartPadding).attr("transform-origin",function(D,A){return(S(D.start)+x+.5*(S(D.end)-S(D.start))).toString()+"px "+(A*y+.5*g).toString()+"px"}).attr("class","exclude-range")}l(F,"drawExcludeDays");function q(y,b,x,T){const g=i.db.getDateFormat(),_=i.db.getAxisFormat();let c;_?c=_:g==="D"?c="%d":c=n.axisFormat??"%Y-%m-%d";let d=bt(S).tickSize(-T+b+n.gridLineStartPadding).tickFormat(je(c));const u=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||n.tickInterval);if(u!==null){const m=u[1],r=u[2],o=i.db.getWeekday()||n.weekday;switch(r){case"millisecond":d.ticks(Ue.every(m));break;case"second":d.ticks(Xe.every(m));break;case"minute":d.ticks(He.every(m));break;case"hour":d.ticks(Ge.every(m));break;case"day":d.ticks(qe.every(m));break;case"week":d.ticks($e[o].every(m));break;case"month":d.ticks(Be.every(m));break}}if(j.append("g").attr("class","grid").attr("transform","translate("+y+", "+(T-50)+")").call(d).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||n.topAxis){let m=xt(S).tickSize(-T+b+n.gridLineStartPadding).tickFormat(je(c));if(u!==null){const r=u[1],o=u[2],t=i.db.getWeekday()||n.weekday;switch(o){case"millisecond":m.ticks(Ue.every(r));break;case"second":m.ticks(Xe.every(r));break;case"minute":m.ticks(He.every(r));break;case"hour":m.ticks(Ge.every(r));break;case"day":m.ticks(qe.every(r));break;case"week":m.ticks($e[t].every(r));break;case"month":m.ticks(Be.every(r));break}}j.append("g").attr("class","grid").attr("transform","translate("+y+", "+b+")").call(m).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(q,"makeGrid");function G(y,b){let x=0;const T=Object.keys(V).map(g=>[g,V[g]]);j.append("g").selectAll("text").data(T).enter().append(function(g){const _=g[0].split(_t.lineBreakRegex),c=-(_.length-1)/2,d=Y.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("dy",c+"em");for(const[k,u]of _.entries()){const m=Y.createElementNS("http://www.w3.org/2000/svg","tspan");m.setAttribute("alignment-baseline","central"),m.setAttribute("x","10"),k>0&&m.setAttribute("dy","1em"),m.textContent=u,d.appendChild(m)}return d}).attr("x",10).attr("y",function(g,_){if(_>0)for(let c=0;c<_;c++)return x+=T[_-1][1],g[1]*y/2+x*y+b;else return g[1]*y/2+b}).attr("font-size",n.sectionFontSize).attr("class",function(g){for(const[_,c]of M.entries())if(g[0]===c)return"sectionTitle sectionTitle"+_%n.numberSectionStyles;return"sectionTitle"})}l(G,"vertLabels");function Q(y,b,x,T){const g=i.db.getTodayMarker();if(g==="off")return;const _=j.append("g").attr("class","today"),c=new Date,d=_.append("line");d.attr("x1",S(c)+y).attr("x2",S(c)+y).attr("y1",n.titleTopMargin).attr("y2",T-n.titleTopMargin).attr("class","today"),g!==""&&d.attr("style",g.replace(/,/g,";"))}l(Q,"drawToday");function H(y){const b={},x=[];for(let T=0,g=y.length;T<g;++T)Object.prototype.hasOwnProperty.call(b,y[T])||(b[y[T]]=!0,x.push(y[T]));return x}l(H,"checkUnique")},"draw"),Dr={setConf:xr,draw:wr},Sr=l(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: ${e.fontFamily};
  }
`,"getStyles"),Cr=Sr,Lr={parser:Wt,db:br,renderer:Dr,styles:Cr};export{Lr as diagram};

import{c as zr,w as B,d as Ot,p as xt,u as Et}from"./iframe.ff4ba921.js";var N=function(r){return r&&r.Math==Math&&r},d=N(typeof globalThis=="object"&&globalThis)||N(typeof window=="object"&&window)||N(typeof self=="object"&&self)||N(typeof zr=="object"&&zr)||function(){return this}()||Function("return this")(),Or={exports:{}},Hr=d,It=Object.defineProperty,xr=function(r,n){try{It(Hr,r,{value:n,configurable:!0,writable:!0})}catch{Hr[r]=n}return n},wt=d,Pt=xr,Wr="__core-js_shared__",Tt=wt[Wr]||Pt(Wr,{}),Er=Tt,qr=Er;(Or.exports=function(r,n){return qr[r]||(qr[r]=n!==void 0?n:{})})("versions",[]).push({version:"3.23.2",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE",source:"https://github.com/zloirock/core-js"});var v=function(r){try{return!!r()}catch{return!0}},jt=v,Ir=!jt(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),Rn=Ir,Cn=Function.prototype,Rt=Cn.bind,br=Cn.call,Ct=Rn&&Rt.bind(br,br),f=Rn?function(r){return r&&Ct(r)}:function(r){return r&&function(){return br.apply(r,arguments)}},Mt=TypeError,Mn=function(r){if(r==null)throw Mt("Can't call method on "+r);return r},_t=Mn,Lt=Object,_n=function(r){return Lt(_t(r))},Nt=f,At=_n,Dt=Nt({}.hasOwnProperty),$=Object.hasOwn||function(n,t){return Dt(At(n),t)},Ft=f,Bt=0,Gt=Math.random(),Kt=Ft(1 .toString),wr=function(r){return"Symbol("+(r===void 0?"":r)+")_"+Kt(++Bt+Gt,36)},s=function(r){return typeof r=="function"},J=d,kt=s,Vt=function(r){return kt(r)?r:void 0},H=function(r,n){return arguments.length<2?Vt(J[r]):J[r]&&J[r][n]},Ut=H,zt=Ut("navigator","userAgent")||"",Ln=d,Q=zt,Xr=Ln.process,Zr=Ln.Deno,Jr=Xr&&Xr.versions||Zr&&Zr.version,Qr=Jr&&Jr.v8,p,V;Qr&&(p=Qr.split("."),V=p[0]>0&&p[0]<4?1:+(p[0]+p[1]));!V&&Q&&(p=Q.match(/Edge\/(\d+)/),(!p||p[1]>=74)&&(p=Q.match(/Chrome\/(\d+)/),p&&(V=+p[1])));var Nn=V,Yr=Nn,Ht=v,An=!!Object.getOwnPropertySymbols&&!Ht(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&Yr&&Yr<41}),Wt=An,Dn=Wt&&!Symbol.sham&&typeof Symbol.iterator=="symbol",qt=d,Xt=Or.exports,rn=$,Zt=wr,nn=An,Fn=Dn,x=Xt("wks"),h=qt.Symbol,tn=h&&h.for,Jt=Fn?h:h&&h.withoutSetter||Zt,I=function(r){if(!rn(x,r)||!(nn||typeof x[r]=="string")){var n="Symbol."+r;nn&&rn(h,r)?x[r]=h[r]:Fn&&tn?x[r]=tn(n):x[r]=Jt(n)}return x[r]},Qt=I,Yt=Qt("toStringTag"),Bn={};Bn[Yt]="z";var Pr=String(Bn)==="[object z]",w={},re=v,O=!re(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),ne=s,y=function(r){return typeof r=="object"?r!==null:ne(r)},te=d,en=y,mr=te.document,ee=en(mr)&&en(mr.createElement),Gn=function(r){return ee?mr.createElement(r):{}},ae=O,ie=v,oe=Gn,Kn=!ae&&!ie(function(){return Object.defineProperty(oe("div"),"a",{get:function(){return 7}}).a!=7}),ue=O,le=v,ve=ue&&le(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),fe=y,ce=String,se=TypeError,kn=function(r){if(fe(r))return r;throw se(ce(r)+" is not an object")},pe=Ir,A=Function.prototype.call,Tr=pe?A.bind(A):function(){return A.apply(A,arguments)},de=f,ye=de({}.isPrototypeOf),be=H,me=s,$e=ye,ge=Dn,Se=Object,Vn=ge?function(r){return typeof r=="symbol"}:function(r){var n=be("Symbol");return me(n)&&$e(n.prototype,Se(r))},he=String,Oe=function(r){try{return he(r)}catch{return"Object"}},xe=s,Ee=Oe,Ie=TypeError,Un=function(r){if(xe(r))return r;throw Ie(Ee(r)+" is not a function")},we=Un,Pe=function(r,n){var t=r[n];return t==null?void 0:we(t)},Y=Tr,rr=s,nr=y,Te=TypeError,je=function(r,n){var t,e;if(n==="string"&&rr(t=r.toString)&&!nr(e=Y(t,r))||rr(t=r.valueOf)&&!nr(e=Y(t,r))||n!=="string"&&rr(t=r.toString)&&!nr(e=Y(t,r)))return e;throw Te("Can't convert object to primitive value")},Re=Tr,an=y,on=Vn,Ce=Pe,Me=je,_e=I,Le=TypeError,Ne=_e("toPrimitive"),Ae=function(r,n){if(!an(r)||on(r))return r;var t=Ce(r,Ne),e;if(t){if(n===void 0&&(n="default"),e=Re(t,r,n),!an(e)||on(e))return e;throw Le("Can't convert object to primitive value")}return n===void 0&&(n="number"),Me(r,n)},De=Ae,Fe=Vn,jr=function(r){var n=De(r,"string");return Fe(n)?n:n+""},Be=O,Ge=Kn,Ke=ve,D=kn,un=jr,ke=TypeError,tr=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,er="enumerable",ar="configurable",ir="writable";w.f=Be?Ke?function(n,t,e){if(D(n),t=un(t),D(e),typeof n=="function"&&t==="prototype"&&"value"in e&&ir in e&&!e[ir]){var a=Ve(n,t);a&&a[ir]&&(n[t]=e.value,e={configurable:ar in e?e[ar]:a[ar],enumerable:er in e?e[er]:a[er],writable:!1})}return tr(n,t,e)}:tr:function(n,t,e){if(D(n),t=un(t),D(e),Ge)try{return tr(n,t,e)}catch{}if("get"in e||"set"in e)throw ke("Accessors not supported");return"value"in e&&(n[t]=e.value),n};var zn={exports:{}},$r=O,Ue=$,Hn=Function.prototype,ze=$r&&Object.getOwnPropertyDescriptor,Rr=Ue(Hn,"name"),He=Rr&&function(){}.name==="something",We=Rr&&(!$r||$r&&ze(Hn,"name").configurable),qe={EXISTS:Rr,PROPER:He,CONFIGURABLE:We},Xe=f,Ze=s,gr=Er,Je=Xe(Function.toString);Ze(gr.inspectSource)||(gr.inspectSource=function(r){return Je(r)});var Cr=gr.inspectSource,Qe=d,Ye=s,ra=Cr,ln=Qe.WeakMap,na=Ye(ln)&&/native code/.test(ra(ln)),Mr=function(r,n){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:n}},ta=O,ea=w,aa=Mr,_r=ta?function(r,n,t){return ea.f(r,n,aa(1,t))}:function(r,n,t){return r[n]=t,r},ia=Or.exports,oa=wr,vn=ia("keys"),ua=function(r){return vn[r]||(vn[r]=oa(r))},Lr={},la=na,Wn=d,or=f,va=y,fa=_r,ur=$,lr=Er,ca=ua,sa=Lr,fn="Object already initialized",Sr=Wn.TypeError,pa=Wn.WeakMap,U,R,z,da=function(r){return z(r)?R(r):U(r,{})},ya=function(r){return function(n){var t;if(!va(n)||(t=R(n)).type!==r)throw Sr("Incompatible receiver, "+r+" required");return t}};if(la||lr.state){var S=lr.state||(lr.state=new pa),ba=or(S.get),cn=or(S.has),ma=or(S.set);U=function(r,n){if(cn(S,r))throw new Sr(fn);return n.facade=r,ma(S,r,n),n},R=function(r){return ba(S,r)||{}},z=function(r){return cn(S,r)}}else{var E=ca("state");sa[E]=!0,U=function(r,n){if(ur(r,E))throw new Sr(fn);return n.facade=r,fa(r,E,n),n},R=function(r){return ur(r,E)?r[E]:{}},z=function(r){return ur(r,E)}}var $a={set:U,get:R,has:z,enforce:da,getterFor:ya},ga=v,Sa=s,F=$,qn=O,ha=qe.CONFIGURABLE,Oa=Cr,Xn=$a,xa=Xn.enforce,Ea=Xn.get,G=Object.defineProperty,Ia=qn&&!ga(function(){return G(function(){},"length",{value:8}).length!==8}),wa=String(String).split("String"),Pa=zn.exports=function(r,n,t){String(n).slice(0,7)==="Symbol("&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(n="get "+n),t&&t.setter&&(n="set "+n),(!F(r,"name")||ha&&r.name!==n)&&G(r,"name",{value:n,configurable:!0}),Ia&&t&&F(t,"arity")&&r.length!==t.arity&&G(r,"length",{value:t.arity});try{t&&F(t,"constructor")&&t.constructor?qn&&G(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var e=xa(r);return F(e,"source")||(e.source=wa.join(typeof n=="string"?n:"")),r};Function.prototype.toString=Pa(function(){return Sa(this)&&Ea(this).source||Oa(this)},"toString");var Ta=s,ja=w,Ra=zn.exports,Ca=xr,Zn=function(r,n,t,e){e||(e={});var a=e.enumerable,o=e.name!==void 0?e.name:n;return Ta(t)&&Ra(t,o,e),e.global?a?r[n]=t:Ca(n,t):(e.unsafe?r[n]&&(a=!0):delete r[n],a?r[n]=t:ja.f(r,n,{value:t,enumerable:!1,configurable:!e.nonConfigurable,writable:!e.nonWritable})),r},Jn=f,Ma=Jn({}.toString),_a=Jn("".slice),C=function(r){return _a(Ma(r),8,-1)},La=Pr,Na=s,K=C,Aa=I,Da=Aa("toStringTag"),Fa=Object,Ba=K(function(){return arguments}())=="Arguments",Ga=function(r,n){try{return r[n]}catch{}},Qn=La?K:function(r){var n,t,e;return r===void 0?"Undefined":r===null?"Null":typeof(t=Ga(n=Fa(r),Da))=="string"?t:Ba?K(n):(e=K(n))=="Object"&&Na(n.callee)?"Arguments":e},Ka=Pr,ka=Qn,Va=Ka?{}.toString:function(){return"[object "+ka(this)+"]"},Ua=Pr,za=Zn,Ha=Va;Ua||za(Object.prototype,"toString",Ha,{unsafe:!0});var Wa={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},qa=Gn,vr=qa("span").classList,sn=vr&&vr.constructor&&vr.constructor.prototype,Xa=sn===Object.prototype?void 0:sn,pn=f,Za=Un,Ja=Ir,Qa=pn(pn.bind),Ya=function(r,n){return Za(r),n===void 0?r:Ja?Qa(r,n):function(){return r.apply(n,arguments)}},ri=f,ni=v,ti=C,fr=Object,ei=ri("".split),Yn=ni(function(){return!fr("z").propertyIsEnumerable(0)})?function(r){return ti(r)=="String"?ei(r,""):fr(r)}:fr,ai=Math.ceil,ii=Math.floor,oi=Math.trunc||function(n){var t=+n;return(t>0?ii:ai)(t)},ui=oi,rt=function(r){var n=+r;return n!==n||n===0?0:ui(n)},li=rt,vi=Math.min,fi=function(r){return r>0?vi(li(r),9007199254740991):0},ci=fi,W=function(r){return ci(r.length)},si=C,nt=Array.isArray||function(n){return si(n)=="Array"},pi=f,di=v,tt=s,yi=Qn,bi=H,mi=Cr,et=function(){},$i=[],at=bi("Reflect","construct"),Nr=/^\s*(?:class|function)\b/,gi=pi(Nr.exec),Si=!Nr.exec(et),j=function(n){if(!tt(n))return!1;try{return at(et,$i,n),!0}catch{return!1}},it=function(n){if(!tt(n))return!1;switch(yi(n)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Si||!!gi(Nr,mi(n))}catch{return!0}};it.sham=!0;var ot=!at||di(function(){var r;return j(j.call)||!j(Object)||!j(function(){r=!0})||r})?it:j,dn=nt,hi=ot,Oi=y,xi=I,Ei=xi("species"),yn=Array,Ii=function(r){var n;return dn(r)&&(n=r.constructor,hi(n)&&(n===yn||dn(n.prototype))?n=void 0:Oi(n)&&(n=n[Ei],n===null&&(n=void 0))),n===void 0?yn:n},wi=Ii,Pi=function(r,n){return new(wi(r))(n===0?0:n)},Ti=Ya,ji=f,Ri=Yn,Ci=_n,Mi=W,_i=Pi,bn=ji([].push),m=function(r){var n=r==1,t=r==2,e=r==3,a=r==4,o=r==6,u=r==7,i=r==5||o;return function(l,c,P,St){for(var kr=Ci(l),X=Ri(kr),ht=Ti(c,P),Vr=Mi(X),g=0,Ur=St||_i,L=n?Ur(l,Vr):t||u?Ur(l,0):void 0,T,Z;Vr>g;g++)if((i||g in X)&&(T=X[g],Z=ht(T,g,kr),r))if(n)L[g]=Z;else if(Z)switch(r){case 3:return!0;case 5:return T;case 6:return g;case 2:bn(L,T)}else switch(r){case 4:return!1;case 7:bn(L,T)}return o?-1:e||a?a:L}},Li={forEach:m(0),map:m(1),filter:m(2),some:m(3),every:m(4),find:m(5),findIndex:m(6),filterReject:m(7)},Ni=v,Ai=function(r,n){var t=[][r];return!!t&&Ni(function(){t.call(null,n||function(){return 1},1)})},Di=Li.forEach,Fi=Ai,Bi=Fi("forEach"),Gi=Bi?[].forEach:function(n){return Di(this,n,arguments.length>1?arguments[1]:void 0)},mn=d,$n=Wa,Ki=Xa,cr=Gi,ki=_r,ut=function(r){if(r&&r.forEach!==cr)try{ki(r,"forEach",cr)}catch{r.forEach=cr}};for(var sr in $n)$n[sr]&&ut(mn[sr]&&mn[sr].prototype);ut(Ki);var gn=function(n){var t=Array.isArray(n)?n:[n];t.forEach(Vi)},Vi=function(n){var t=B.document.getElementById(n);t&&t.parentElement&&t.parentElement.removeChild(t)},Ui=function(n,t){var e=B.document.getElementById(n);if(e)e.innerHTML!==t&&(e.innerHTML=t);else{var a=B.document.createElement("style");a.setAttribute("id",n),a.innerHTML=t,B.document.head.appendChild(a)}},lt="outline",Ar={},vt={},ft={}.propertyIsEnumerable,ct=Object.getOwnPropertyDescriptor,zi=ct&&!ft.call({1:2},1);vt.f=zi?function(n){var t=ct(this,n);return!!t&&t.enumerable}:ft;var Hi=Yn,Wi=Mn,M=function(r){return Hi(Wi(r))},qi=O,Xi=Tr,Zi=vt,Ji=Mr,Qi=M,Yi=jr,ro=$,no=Kn,Sn=Object.getOwnPropertyDescriptor;Ar.f=qi?Sn:function(n,t){if(n=Qi(n),t=Yi(t),no)try{return Sn(n,t)}catch{}if(ro(n,t))return Ji(!Xi(Zi.f,n,t),n[t])};var q={},to=rt,eo=Math.max,ao=Math.min,Dr=function(r,n){var t=to(r);return t<0?eo(t+n,0):ao(t,n)},io=M,oo=Dr,uo=W,hn=function(r){return function(n,t,e){var a=io(n),o=uo(a),u=oo(e,o),i;if(r&&t!=t){for(;o>u;)if(i=a[u++],i!=i)return!0}else for(;o>u;u++)if((r||u in a)&&a[u]===t)return r||u||0;return!r&&-1}},lo={includes:hn(!0),indexOf:hn(!1)},vo=f,pr=$,fo=M,co=lo.indexOf,so=Lr,On=vo([].push),po=function(r,n){var t=fo(r),e=0,a=[],o;for(o in t)!pr(so,o)&&pr(t,o)&&On(a,o);for(;n.length>e;)pr(t,o=n[e++])&&(~co(a,o)||On(a,o));return a},yo=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],bo=po,mo=yo,$o=mo.concat("length","prototype");q.f=Object.getOwnPropertyNames||function(n){return bo(n,$o)};var st={};st.f=Object.getOwnPropertySymbols;var go=H,So=f,ho=q,Oo=st,xo=kn,Eo=So([].concat),Io=go("Reflect","ownKeys")||function(n){var t=ho.f(xo(n)),e=Oo.f;return e?Eo(t,e(n)):t},xn=$,wo=Io,Po=Ar,To=w,jo=function(r,n,t){for(var e=wo(n),a=To.f,o=Po.f,u=0;u<e.length;u++){var i=e[u];!xn(r,i)&&!(t&&xn(t,i))&&a(r,i,o(n,i))}},Ro=v,Co=s,Mo=/#|\.prototype\./,_=function(r,n){var t=Lo[_o(r)];return t==Ao?!0:t==No?!1:Co(n)?Ro(n):!!n},_o=_.normalize=function(r){return String(r).replace(Mo,".").toLowerCase()},Lo=_.data={},No=_.NATIVE="N",Ao=_.POLYFILL="P",Do=_,dr=d,Fo=Ar.f,Bo=_r,Go=Zn,Ko=xr,ko=jo,Vo=Do,Fr=function(r,n){var t=r.target,e=r.global,a=r.stat,o,u,i,l,c,P;if(e?u=dr:a?u=dr[t]||Ko(t,{}):u=(dr[t]||{}).prototype,u)for(i in n){if(c=n[i],r.dontCallGetSet?(P=Fo(u,i),l=P&&P.value):l=u[i],o=Vo(e?i:t+(a?".":"#")+i,r.forced),!o&&l!==void 0){if(typeof c==typeof l)continue;ko(c,l)}(r.sham||l&&l.sham)&&Bo(c,"sham",!0),Go(u,i,c,r)}},Uo=jr,zo=w,Ho=Mr,pt=function(r,n,t){var e=Uo(n);e in r?zo.f(r,e,Ho(0,t)):r[e]=t},Wo=v,qo=I,Xo=Nn,Zo=qo("species"),Jo=function(r){return Xo>=51||!Wo(function(){var n=[],t=n.constructor={};return t[Zo]=function(){return{foo:1}},n[r](Boolean).foo!==1})},Qo=f,Yo=Qo([].slice),ru=Fr,En=nt,nu=ot,tu=y,In=Dr,eu=W,au=M,iu=pt,ou=I,uu=Jo,lu=Yo,vu=uu("slice"),fu=ou("species"),yr=Array,cu=Math.max;ru({target:"Array",proto:!0,forced:!vu},{slice:function(n,t){var e=au(this),a=eu(e),o=In(n,a),u=In(t===void 0?a:t,a),i,l,c;if(En(e)&&(i=e.constructor,nu(i)&&(i===yr||En(i.prototype))?i=void 0:tu(i)&&(i=i[fu],i===null&&(i=void 0)),i===yr||i===void 0))return lu(e,o,u);for(l=new(i===void 0?yr:i)(cu(u-o,0)),c=0;o<u;o++,c++)o in e&&iu(l,c,e[o]);return l.length=c,l}});var su=v,dt=!su(function(){return Object.isExtensible(Object.preventExtensions({}))}),yt={exports:{}},bt={},wn=Dr,pu=W,du=pt,yu=Array,bu=Math.max,mu=function(r,n,t){for(var e=pu(r),a=wn(n,e),o=wn(t===void 0?e:t,e),u=yu(bu(o-a,0)),i=0;a<o;a++,i++)du(u,i,r[a]);return u.length=i,u},$u=C,gu=M,mt=q.f,Su=mu,$t=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],hu=function(r){try{return mt(r)}catch{return Su($t)}};bt.f=function(n){return $t&&$u(n)=="Window"?hu(n):mt(gu(n))};var Ou=v,xu=Ou(function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}}),Eu=v,Iu=y,wu=C,Pn=xu,k=Object.isExtensible,Pu=Eu(function(){k(1)}),Tu=Pu||Pn?function(n){return!Iu(n)||Pn&&wu(n)=="ArrayBuffer"?!1:k?k(n):!0}:k,ju=Fr,Ru=f,Cu=Lr,Mu=y,Br=$,_u=w.f,Tn=q,Lu=bt,Gr=Tu,Nu=wr,Au=dt,gt=!1,b=Nu("meta"),Du=0,Kr=function(r){_u(r,b,{value:{objectID:"O"+Du++,weakData:{}}})},Fu=function(r,n){if(!Mu(r))return typeof r=="symbol"?r:(typeof r=="string"?"S":"P")+r;if(!Br(r,b)){if(!Gr(r))return"F";if(!n)return"E";Kr(r)}return r[b].objectID},Bu=function(r,n){if(!Br(r,b)){if(!Gr(r))return!0;if(!n)return!1;Kr(r)}return r[b].weakData},Gu=function(r){return Au&&gt&&Gr(r)&&!Br(r,b)&&Kr(r),r},Ku=function(){ku.enable=function(){},gt=!0;var r=Tn.f,n=Ru([].splice),t={};t[b]=1,r(t).length&&(Tn.f=function(e){for(var a=r(e),o=0,u=a.length;o<u;o++)if(a[o]===b){n(a,o,1);break}return a},ju({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:Lu.f}))},ku=yt.exports={enable:Ku,fastKey:Fu,getWeakData:Bu,onFreeze:Gu};Cu[b]=!0;var Vu=Fr,Uu=dt,zu=v,Hu=y,Wu=yt.exports.onFreeze,hr=Object.freeze,qu=zu(function(){hr(1)});Vu({target:"Object",stat:!0,forced:qu,sham:!Uu},{freeze:function(n){return hr&&Hu(n)?hr(Wu(n)):n}});var jn;function Xu(r,n){return n||(n=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(n)}}))}function Zu(r){return Ot(jn||(jn=Xu([`
    `,` body {
      outline: 1px solid #2980b9 !important;
    }

    `,` article {
      outline: 1px solid #3498db !important;
    }

    `,` nav {
      outline: 1px solid #0088c3 !important;
    }

    `,` aside {
      outline: 1px solid #33a0ce !important;
    }

    `,` section {
      outline: 1px solid #66b8da !important;
    }

    `,` header {
      outline: 1px solid #99cfe7 !important;
    }

    `,` footer {
      outline: 1px solid #cce7f3 !important;
    }

    `,` h1 {
      outline: 1px solid #162544 !important;
    }

    `,` h2 {
      outline: 1px solid #314e6e !important;
    }

    `,` h3 {
      outline: 1px solid #3e5e85 !important;
    }

    `,` h4 {
      outline: 1px solid #449baf !important;
    }

    `,` h5 {
      outline: 1px solid #c7d1cb !important;
    }

    `,` h6 {
      outline: 1px solid #4371d0 !important;
    }

    `,` main {
      outline: 1px solid #2f4f90 !important;
    }

    `,` address {
      outline: 1px solid #1a2c51 !important;
    }

    `,` div {
      outline: 1px solid #036cdb !important;
    }

    `,` p {
      outline: 1px solid #ac050b !important;
    }

    `,` hr {
      outline: 1px solid #ff063f !important;
    }

    `,` pre {
      outline: 1px solid #850440 !important;
    }

    `,` blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    `,` ol {
      outline: 1px solid #ff050c !important;
    }

    `,` ul {
      outline: 1px solid #d90416 !important;
    }

    `,` li {
      outline: 1px solid #d90416 !important;
    }

    `,` dl {
      outline: 1px solid #fd3427 !important;
    }

    `,` dt {
      outline: 1px solid #ff0043 !important;
    }

    `,` dd {
      outline: 1px solid #e80174 !important;
    }

    `,` figure {
      outline: 1px solid #ff00bb !important;
    }

    `,` figcaption {
      outline: 1px solid #bf0032 !important;
    }

    `,` table {
      outline: 1px solid #00cc99 !important;
    }

    `,` caption {
      outline: 1px solid #37ffc4 !important;
    }

    `,` thead {
      outline: 1px solid #98daca !important;
    }

    `,` tbody {
      outline: 1px solid #64a7a0 !important;
    }

    `,` tfoot {
      outline: 1px solid #22746b !important;
    }

    `,` tr {
      outline: 1px solid #86c0b2 !important;
    }

    `,` th {
      outline: 1px solid #a1e7d6 !important;
    }

    `,` td {
      outline: 1px solid #3f5a54 !important;
    }

    `,` col {
      outline: 1px solid #6c9a8f !important;
    }

    `,` colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    `,` button {
      outline: 1px solid #da8301 !important;
    }

    `,` datalist {
      outline: 1px solid #c06000 !important;
    }

    `,` fieldset {
      outline: 1px solid #d95100 !important;
    }

    `,` form {
      outline: 1px solid #d23600 !important;
    }

    `,` input {
      outline: 1px solid #fca600 !important;
    }

    `,` keygen {
      outline: 1px solid #b31e00 !important;
    }

    `,` label {
      outline: 1px solid #ee8900 !important;
    }

    `,` legend {
      outline: 1px solid #de6d00 !important;
    }

    `,` meter {
      outline: 1px solid #e8630c !important;
    }

    `,` optgroup {
      outline: 1px solid #b33600 !important;
    }

    `,` option {
      outline: 1px solid #ff8a00 !important;
    }

    `,` output {
      outline: 1px solid #ff9619 !important;
    }

    `,` progress {
      outline: 1px solid #e57c00 !important;
    }

    `,` select {
      outline: 1px solid #e26e0f !important;
    }

    `,` textarea {
      outline: 1px solid #cc5400 !important;
    }

    `,` details {
      outline: 1px solid #33848f !important;
    }

    `,` summary {
      outline: 1px solid #60a1a6 !important;
    }

    `,` command {
      outline: 1px solid #438da1 !important;
    }

    `,` menu {
      outline: 1px solid #449da6 !important;
    }

    `,` del {
      outline: 1px solid #bf0000 !important;
    }

    `,` ins {
      outline: 1px solid #400000 !important;
    }

    `,` img {
      outline: 1px solid #22746b !important;
    }

    `,` iframe {
      outline: 1px solid #64a7a0 !important;
    }

    `,` embed {
      outline: 1px solid #98daca !important;
    }

    `,` object {
      outline: 1px solid #00cc99 !important;
    }

    `,` param {
      outline: 1px solid #37ffc4 !important;
    }

    `,` video {
      outline: 1px solid #6ee866 !important;
    }

    `,` audio {
      outline: 1px solid #027353 !important;
    }

    `,` source {
      outline: 1px solid #012426 !important;
    }

    `,` canvas {
      outline: 1px solid #a2f570 !important;
    }

    `,` track {
      outline: 1px solid #59a600 !important;
    }

    `,` map {
      outline: 1px solid #7be500 !important;
    }

    `,` area {
      outline: 1px solid #305900 !important;
    }

    `,` a {
      outline: 1px solid #ff62ab !important;
    }

    `,` em {
      outline: 1px solid #800b41 !important;
    }

    `,` strong {
      outline: 1px solid #ff1583 !important;
    }

    `,` i {
      outline: 1px solid #803156 !important;
    }

    `,` b {
      outline: 1px solid #cc1169 !important;
    }

    `,` u {
      outline: 1px solid #ff0430 !important;
    }

    `,` s {
      outline: 1px solid #f805e3 !important;
    }

    `,` small {
      outline: 1px solid #d107b2 !important;
    }

    `,` abbr {
      outline: 1px solid #4a0263 !important;
    }

    `,` q {
      outline: 1px solid #240018 !important;
    }

    `,` cite {
      outline: 1px solid #64003c !important;
    }

    `,` dfn {
      outline: 1px solid #b4005a !important;
    }

    `,` sub {
      outline: 1px solid #dba0c8 !important;
    }

    `,` sup {
      outline: 1px solid #cc0256 !important;
    }

    `,` time {
      outline: 1px solid #d6606d !important;
    }

    `,` code {
      outline: 1px solid #e04251 !important;
    }

    `,` kbd {
      outline: 1px solid #5e001f !important;
    }

    `,` samp {
      outline: 1px solid #9c0033 !important;
    }

    `,` var {
      outline: 1px solid #d90047 !important;
    }

    `,` mark {
      outline: 1px solid #ff0053 !important;
    }

    `,` bdi {
      outline: 1px solid #bf3668 !important;
    }

    `,` bdo {
      outline: 1px solid #6f1400 !important;
    }

    `,` ruby {
      outline: 1px solid #ff7b93 !important;
    }

    `,` rt {
      outline: 1px solid #ff2f54 !important;
    }

    `,` rp {
      outline: 1px solid #803e49 !important;
    }

    `,` span {
      outline: 1px solid #cc2643 !important;
    }

    `,` br {
      outline: 1px solid #db687d !important;
    }

    `,` wbr {
      outline: 1px solid #db175b !important;
    }`])),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}var Ju=function(n,t){var e=t.globals,a=e[lt]===!0,o=t.viewMode==="docs",u=xt(function(){var i=o?"#anchor--".concat(t.id," .docs-story"):".sb-show-main";return Zu(i)},[t]);return Et(function(){var i=o?"addon-outline-docs-".concat(t.id):"addon-outline";return a?Ui(i,u):gn(i),function(){gn(i)}},[a,u,t]),n()};function Qu(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}var rl=[Ju],nl=Qu({},lt,!1);export{rl as decorators,nl as globals};

import{w as Lr,n as Vr}from"./iframe.11e08736.js";import{A as Wr,k as p,a5 as Ee,a0 as sr,z as H,c as Re,a6 as Hr,U as ur,a7 as Jr,B as vr,W as fr,O as qr,a8 as Kr,w as zr,a9 as Qr,aa as Yr,ab as D,_ as d,x as lr,ac as Xr,ad as Zr,ae as et,b as J,af as rt,G as tt,v as nt,R as q,a4 as at,ag as pr,ah as be,q as dr,t as ot,ai as it,aj as ct,a as st,ak as ut,al as vt,u as ft}from"./es.symbol.iterator.948a8145.js";import{j as _}from"./jsx-runtime.00d70968.js";var lt=Wr,pt=p,$e=lt(pt.process)=="process",dt=TypeError,ht=function(e,r){if(e<r)throw dt("Not enough arguments");return e},mt=Ee,hr=/(?:ipad|iphone|ipod).*applewebkit/i.test(mt),u=p,yt=vr,Ot=sr,je=H,Et=fr,Rt=Re,De=Hr,bt=ur,Me=Jr,$t=ht,wt=hr,Ct=$e,ue=u.setImmediate,ve=u.clearImmediate,St=u.process,Q=u.Dispatch,Pt=u.Function,Ae=u.MessageChannel,It=u.String,Y=0,g={},ke="onreadystatechange",j,h,X,Z;try{j=u.location}catch{}var we=function(e){if(Et(g,e)){var r=g[e];delete g[e],r()}},ee=function(e){return function(){we(e)}},Ue=function(e){we(e.data)},Be=function(e){u.postMessage(It(e),j.protocol+"//"+j.host)};(!ue||!ve)&&(ue=function(r){$t(arguments.length,1);var t=je(r)?r:Pt(r),n=bt(arguments,1);return g[++Y]=function(){yt(t,void 0,n)},h(Y),Y},ve=function(r){delete g[r]},Ct?h=function(e){St.nextTick(ee(e))}:Q&&Q.now?h=function(e){Q.now(ee(e))}:Ae&&!wt?(X=new Ae,Z=X.port2,X.port1.onmessage=Ue,h=Ot(Z.postMessage,Z)):u.addEventListener&&je(u.postMessage)&&!u.importScripts&&j&&j.protocol!=="file:"&&!Rt(Be)?(h=Be,u.addEventListener("message",Ue,!1)):ke in Me("script")?h=function(e){De.appendChild(Me("script"))[ke]=function(){De.removeChild(this),we(e)}}:h=function(e){setTimeout(ee(e),0)});var mr={set:ue,clear:ve},_t=Ee,gt=p,Tt=/ipad|iphone|ipod/i.test(_t)&&gt.Pebble!==void 0,Nt=Ee,jt=/web0s(?!.*chrome)/i.test(Nt),O=p,Fe=sr,Dt=qr.f,re=mr.set,Mt=hr,At=Tt,kt=jt,te=$e,xe=O.MutationObserver||O.WebKitMutationObserver,Ge=O.document,Le=O.process,k=O.Promise,Ve=Dt(O,"queueMicrotask"),yr=Ve&&Ve.value,I,m,T,R,ne,ae,U,We;yr||(I=function(){var e,r;for(te&&(e=Le.domain)&&e.exit();m;){r=m.fn,m=m.next;try{r()}catch(t){throw m?R():T=void 0,t}}T=void 0,e&&e.enter()},!Mt&&!te&&!kt&&xe&&Ge?(ne=!0,ae=Ge.createTextNode(""),new xe(I).observe(ae,{characterData:!0}),R=function(){ae.data=ne=!ne}):!At&&k&&k.resolve?(U=k.resolve(void 0),U.constructor=k,We=Fe(U.then,U),R=function(){We(I)}):te?R=function(){Le.nextTick(I)}:(re=Fe(re,O),R=function(){re(I)}));var Ut=yr||function(e){var r={fn:e,next:void 0};T&&(T.next=r),m||(m=r,R()),T=r},Bt=p,Ft=function(e,r){var t=Bt.console;t&&t.error&&(arguments.length==1?t.error(e):t.error(e,r))},Ce=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}},Or=function(){this.head=null,this.tail=null};Or.prototype={add:function(e){var r={item:e,next:null};this.head?this.tail.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}};var xt=Or,Gt=p,K=Gt.Promise,Lt=typeof window=="object"&&typeof Deno!="object",Vt=p,N=K,Wt=H,Ht=Kr,Jt=Qr,qt=zr,Kt=Lt,He=Yr;N&&N.prototype;var zt=qt("species"),fe=!1,Er=Wt(Vt.PromiseRejectionEvent),Qt=Ht("Promise",function(){var e=Jt(N),r=e!==String(N);if(!r&&He===66)return!0;if(He>=51&&/native code/.test(e))return!1;var t=new N(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};return a[zt]=n,fe=t.then(function(){})instanceof n,fe?!r&&Kt&&!Er:!0}),M={CONSTRUCTOR:Qt,REJECTION_EVENT:Er,SUBCLASSING:fe},P={},Je=D,Yt=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw TypeError("Bad Promise constructor");r=n,t=a}),this.resolve=Je(r),this.reject=Je(t)};P.f=function(e){return new Yt(e)};var Xt=d,G=$e,l=p,S=J,qe=lr,Ke=Xr,Zt=Zr,en=et,rn=D,x=H,tn=q,nn=rt,an=tt,Rr=mr.set,Se=Ut,on=Ft,cn=Ce,sn=xt,br=nt,L=K,Pe=M,$r=P,z="Promise",wr=Pe.CONSTRUCTOR,un=Pe.REJECTION_EVENT,vn=Pe.SUBCLASSING,oe=br.getterFor(z),fn=br.set,b=L&&L.prototype,y=L,B=b,Cr=l.TypeError,le=l.document,Ie=l.process,pe=$r.f,ln=pe,pn=!!(le&&le.createEvent&&l.dispatchEvent),Sr="unhandledrejection",dn="rejectionhandled",ze=0,Pr=1,hn=2,_e=1,Ir=2,F,Qe,mn,Ye,_r=function(e){var r;return tn(e)&&x(r=e.then)?r:!1},gr=function(e,r){var t=r.value,n=r.state==Pr,a=n?e.ok:e.fail,o=e.resolve,i=e.reject,c=e.domain,s,v,f;try{a?(n||(r.rejection===Ir&&On(r),r.rejection=_e),a===!0?s=t:(c&&c.enter(),s=a(t),c&&(c.exit(),f=!0)),s===e.promise?i(Cr("Promise-chain cycle")):(v=_r(s))?S(v,s,o,i):o(s)):i(t)}catch(A){c&&!f&&c.exit(),i(A)}},Tr=function(e,r){e.notified||(e.notified=!0,Se(function(){for(var t=e.reactions,n;n=t.get();)gr(n,e);e.notified=!1,r&&!e.rejection&&yn(e)}))},Nr=function(e,r,t){var n,a;pn?(n=le.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),l.dispatchEvent(n)):n={promise:r,reason:t},!un&&(a=l["on"+e])?a(n):e===Sr&&on("Unhandled promise rejection",t)},yn=function(e){S(Rr,l,function(){var r=e.facade,t=e.value,n=Xe(e),a;if(n&&(a=cn(function(){G?Ie.emit("unhandledRejection",t,r):Nr(Sr,r,t)}),e.rejection=G||Xe(e)?Ir:_e,a.error))throw a.value})},Xe=function(e){return e.rejection!==_e&&!e.parent},On=function(e){S(Rr,l,function(){var r=e.facade;G?Ie.emit("rejectionHandled",r):Nr(dn,r,e.value)})},$=function(e,r,t){return function(n){e(r,n,t)}},w=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=hn,Tr(e,!0))},de=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw Cr("Promise can't be resolved itself");var n=_r(r);n?Se(function(){var a={done:!1};try{S(n,r,$(de,a,e),$(w,a,e))}catch(o){w(a,o,e)}}):(e.value=r,e.state=Pr,Tr(e,!1))}catch(a){w({done:!1},a,e)}}};if(wr&&(y=function(r){nn(this,B),rn(r),S(F,this);var t=oe(this);try{r($(de,t),$(w,t))}catch(n){w(t,n)}},B=y.prototype,F=function(r){fn(this,{type:z,done:!1,notified:!1,parent:!1,reactions:new sn,rejection:!1,state:ze,value:void 0})},F.prototype=qe(B,"then",function(r,t){var n=oe(this),a=pe(an(this,y));return n.parent=!0,a.ok=x(r)?r:!0,a.fail=x(t)&&t,a.domain=G?Ie.domain:void 0,n.state==ze?n.reactions.add(a):Se(function(){gr(a,n)}),a.promise}),Qe=function(){var e=new F,r=oe(e);this.promise=e,this.resolve=$(de,r),this.reject=$(w,r)},$r.f=pe=function(e){return e===y||e===mn?new Qe(e):ln(e)},x(L)&&b!==Object.prototype)){Ye=b.then,vn||qe(b,"then",function(r,t){var n=this;return new y(function(a,o){S(Ye,n,a,o)}).then(r,t)},{unsafe:!0});try{delete b.constructor}catch{}Ke&&Ke(b,B)}Xt({global:!0,constructor:!0,wrap:!0,forced:wr},{Promise:y});Zt(y,z,!1);en(z);var En=K,Rn=at,bn=M.CONSTRUCTOR,jr=bn||!Rn(function(e){En.all(e).then(void 0,function(){})}),$n=d,wn=J,Cn=D,Sn=P,Pn=Ce,In=pr,_n=jr;$n({target:"Promise",stat:!0,forced:_n},{all:function(r){var t=this,n=Sn.f(t),a=n.resolve,o=n.reject,i=Pn(function(){var c=Cn(t.resolve),s=[],v=0,f=1;In(r,function(A){var E=v++,Ne=!1;f++,wn(c,t,A).then(function(Gr){Ne||(Ne=!0,s[E]=Gr,--f||a(s))},o)}),--f||a(s)});return i.error&&o(i.value),n.promise}});var gn=d,Tn=M.CONSTRUCTOR,he=K,Nn=be,jn=H,Dn=lr,Ze=he&&he.prototype;gn({target:"Promise",proto:!0,forced:Tn,real:!0},{catch:function(e){return this.then(void 0,e)}});if(jn(he)){var er=Nn("Promise").prototype.catch;Ze.catch!==er&&Dn(Ze,"catch",er,{unsafe:!0})}var Mn=d,An=J,kn=D,Un=P,Bn=Ce,Fn=pr,xn=jr;Mn({target:"Promise",stat:!0,forced:xn},{race:function(r){var t=this,n=Un.f(t),a=n.reject,o=Bn(function(){var i=kn(t.resolve);Fn(r,function(c){An(i,t,c).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}});var Gn=d,Ln=J,Vn=P,Wn=M.CONSTRUCTOR;Gn({target:"Promise",stat:!0,forced:Wn},{reject:function(r){var t=Vn.f(this);return Ln(t.reject,void 0,r),t.promise}});var Hn=dr,Jn=q,qn=P,Kn=function(e,r){if(Hn(e),Jn(r)&&r.constructor===e)return r;var t=qn.f(e),n=t.resolve;return n(r),t.promise},zn=d,Qn=be,Yn=M.CONSTRUCTOR,Xn=Kn;Qn("Promise");zn({target:"Promise",stat:!0,forced:Yn},{resolve:function(r){return Xn(this,r)}});var Zn=d,ea=Re,ra=ot,Dr=it,ta=ct,na=ea(function(){Dr(1)});Zn({target:"Object",stat:!0,forced:na,sham:!ta},{getPrototypeOf:function(r){return Dr(ra(r))}});var Mr=st,aa=D,oa=q,ia=fr,rr=ur,ca=ut,Ar=Function,sa=Mr([].concat),ua=Mr([].join),ie={},va=function(e,r,t){if(!ia(ie,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";ie[r]=Ar("C,a","return new C("+ua(n,",")+")")}return ie[r](e,t)},fa=ca?Ar.bind:function(r){var t=aa(this),n=t.prototype,a=rr(arguments,1),o=function(){var c=sa(a,rr(arguments));return this instanceof o?va(t,c.length,c):t.apply(r,c)};return oa(n)&&(o.prototype=n),o},la=d,pa=be,ce=vr,da=fa,tr=vt,ha=dr,nr=q,ma=ft,kr=Re,ge=pa("Reflect","construct"),ya=Object.prototype,Oa=[].push,Ur=kr(function(){function e(){}return!(ge(function(){},[],e)instanceof e)}),Br=!kr(function(){ge(function(){})}),ar=Ur||Br;la({target:"Reflect",stat:!0,forced:ar,sham:ar},{construct:function(r,t){tr(r),ha(t);var n=arguments.length<3?r:tr(arguments[2]);if(Br&&!Ur)return ge(r,t,n);if(r==n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return ce(Oa,a,t),new(ce(da,r,a))}var o=n.prototype,i=ma(nr(o)?o:ya),c=ce(r,i,t);return nr(c)?c:i}});function me(e){return me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},me(e)}function Ea(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function or(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ra(e,r,t){return r&&or(e.prototype,r),t&&or(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ba(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&ye(e,r)}function ye(e,r){return ye=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n},ye(e,r)}function $a(e){var r=Sa();return function(){var n=V(e),a;if(r){var o=V(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return wa(this,a)}}function wa(e,r){if(r&&(me(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ca(e)}function Ca(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Sa(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},V(e)}function ir(e,r,t,n,a,o,i){try{var c=e[o](i),s=c.value}catch(v){t(v);return}c.done?r(s):Promise.resolve(s).then(n,a)}function Te(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var o=e.apply(r,t);function i(s){ir(o,n,a,i,c,"next",s)}function c(s){ir(o,n,a,i,c,"throw",s)}i(void 0)})}}const Pa=window.React.Component,Ia=window.React.StrictMode,_a=window.React.Fragment,ga=window.React.useLayoutEffect,Ta=window.React.useRef,Fr=window.ReactDOM,se=window.ReactDOM.version;var C=Lr.FRAMEWORK_OPTIONS,W=new Map,Ga=function(r,t){var n=t.id,a=t.component;if(!a)throw new Error("Unable to render story ".concat(n," as the component annotation is missing from the default export"));return _(a,{...r})},Na=function(r){var t=r.callback,n=r.children,a=Ta();return ga(function(){a.current!==t&&(a.current=t,t())},[t]),n},ja=function(){var e=Te(regeneratorRuntime.mark(function r(t,n){var a;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,ka(n);case 2:return a=i.sent,i.abrupt("return",new Promise(function(c){a?a.render(_(Na,{callback:function(){return c(null)},children:t})):Fr.render(t,n,function(){return c(null)})}));case 4:case"end":return i.stop()}},r)}));return function(t,n){return e.apply(this,arguments)}}(),Da=se&&(se.startsWith("18")||se.startsWith("0.0.0")),Ma=(C==null?void 0:C.legacyRootApi)!==!0,xr=Ma&&Da,Aa=function(r){var t=W.get(r);t&&xr?(t.unmount(),W.delete(r)):Fr.unmountComponentAtNode(r)},ka=function(){var e=Te(regeneratorRuntime.mark(function r(t){var n,a;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(xr){i.next=2;break}return i.abrupt("return",null);case 2:if(n=W.get(t),n){i.next=9;break}return i.next=6,Vr(()=>import("./client.dd596028.js").then(c=>c.c),[],import.meta.url);case 6:a=i.sent.default,n=a.createRoot(t),W.set(t,n);case 9:return i.abrupt("return",n);case 10:case"end":return i.stop()}},r)}));return function(t){return e.apply(this,arguments)}}(),Ua=function(e){ba(t,e);var r=$a(t);function t(){var n;Ea(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r.call.apply(r,[this].concat(o)),n.state={hasError:!1},n}return Ra(t,[{key:"componentDidMount",value:function(){var a=this.state.hasError,o=this.props.showMain;a||o()}},{key:"componentDidCatch",value:function(a){var o=this.props.showException;o(a)}},{key:"render",value:function(){var a=this.state.hasError,o=this.props.children;return a?null:o}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(Pa),cr=C!=null&&C.strictMode?Ia:_a;function La(e,r){return Oe.apply(this,arguments)}function Oe(){return Oe=Te(regeneratorRuntime.mark(function e(r,t){var n,a,o,i,c,s,v,f;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return n=r.storyContext,a=r.unboundStoryFn,o=r.showMain,i=r.showException,c=r.forceRemount,s=a,v=_(Ua,{showMain:o,showException:i,children:_(s,{...n})}),f=cr?_(cr,{children:v}):v,c&&Aa(t),E.next=7,ja(f,t);case 7:case"end":return E.stop()}},e)})),Oe.apply(this,arguments)}var Va={framework:"react"};export{Va as parameters,Ga as render,La as renderToDOM};

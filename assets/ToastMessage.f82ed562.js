import{F as Ae}from"./FullWidthAlert.e7125a09.js";import{j as C}from"./jsx-runtime.2e925369.js";import{_ as ne,a as re}from"./objectWithoutPropertiesLoose.090b3c10.js";import{_ as ae,a as we}from"./withStyles.8be28b48.js";import{T as Re,a as J}from"./Transition.d42a873e.js";import{a as je,r as Me}from"./removeClass.27874bcb.js";import{u as Ne}from"./uniqueId.fa0dadf5.js";let Ie={data:""},Pe=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ie,De=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,$e=/\/\*[^]*?\*\/|  +/g,X=/\n+/g,y=(e,t)=>{let r="",n="",o="";for(let u in e){let a=e[u];u[0]=="@"?u[1]=="i"?r=u+" "+a+";":n+=u[1]=="f"?y(a,u):u+"{"+y(a,u[1]=="k"?"":t)+"}":typeof a=="object"?n+=y(a,t?t.replace(/([^,])+/g,i=>u.replace(/(^:.*)|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,i):i?i+" "+s:s)):u):a!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=y.p?y.p(u,a):u+":"+a+";")}return r+(t&&o?t+"{"+o+"}":o)+n},A={},ie=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+ie(e[r]);return t}return e},ke=(e,t,r,n,o)=>{let u=ie(e),a=A[u]||(A[u]=(i=>{let s=0,c=11;for(;s<i.length;)c=101*c+i.charCodeAt(s++)>>>0;return"go"+c})(u));if(!A[a]){let i=u!==e?e:(s=>{let c,l,d=[{}];for(;c=De.exec(s.replace($e,""));)c[4]?d.shift():c[3]?(l=c[3].replace(X," ").trim(),d.unshift(d[0][l]=d[0][l]||{})):d[0][c[1]]=c[2].replace(X," ").trim();return d[0]})(e);A[a]=y(o?{["@keyframes "+a]:i}:i,r?"":"."+a)}return((i,s,c)=>{s.data.indexOf(i)==-1&&(s.data=c?i+s.data:s.data+i)})(A[a],t,n),a},Fe=(e,t,r)=>e.reduce((n,o,u)=>{let a=t[u];if(a&&a.call){let i=a(r),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&typeof i=="object"?i.props?"":y(i,""):i===!1?"":i}return n+o+(a==null?"":a)},"");function L(e){let t=this||{},r=e.call?e(t.p):e;return ke(r.unshift?r.raw?Fe(r,[].slice.call(arguments,1),t.p):r.reduce((n,o)=>Object.assign(n,o&&o.call?o(t.p):o),{}):r,Pe(t.target),t.g,t.o,t.k)}let oe,G,H;L.bind({g:1});let _=L.bind({k:1});function Ue(e,t,r,n){y.p=t,oe=e,G=r,H=n}function S(e,t){let r=this||{};return function(){let n=arguments;function o(u,a){let i=Object.assign({},u),s=i.className||o.className;r.p=Object.assign({theme:G&&G()},i),r.o=/ *go\d+/.test(s),i.className=L.apply(r,n)+(s?" "+s:""),t&&(i.ref=a);let c=e;return e[0]&&(c=i.as||e,delete i.as),H&&c[0]&&H(i),oe(c,i)}return t?t(o):o}}const Le=window.React.useState,se=window.React.useEffect,Ve=window.React.useMemo,h=window.React.createElement,Be=window.React.memo,ze=window.React.Fragment,We=window.React.forwardRef;function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function g(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Ye=function(t){return typeof t=="function"},U=function(t,r){return Ye(t)?t(r):t},qe=function(){var e=0;return function(){return(++e).toString()}}(),Ge=function(t){return function(r){r&&setTimeout(function(){var n=r.getBoundingClientRect();t(n)})}},ue=function(){var e=void 0;return function(){if(e===void 0&&typeof window!="undefined"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),He=20,p;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(p||(p={}));var P=new Map,ee=function(t){if(!P.has(t)){var r=setTimeout(function(){P.delete(t),E({type:p.REMOVE_TOAST,toastId:t})},1e3);P.set(t,r)}},Qe=function(t){var r=P.get(t);r&&clearTimeout(r)},Ke=function e(t,r){switch(r.type){case p.ADD_TOAST:return f({},t,{toasts:[r.toast].concat(t.toasts).slice(0,He)});case p.UPDATE_TOAST:return r.toast.id&&Qe(r.toast.id),f({},t,{toasts:t.toasts.map(function(a){return a.id===r.toast.id?f({},a,r.toast):a})});case p.UPSERT_TOAST:var n=r.toast;return t.toasts.find(function(a){return a.id===n.id})?e(t,{type:p.UPDATE_TOAST,toast:n}):e(t,{type:p.ADD_TOAST,toast:n});case p.DISMISS_TOAST:var o=r.toastId;return o?ee(o):t.toasts.forEach(function(a){ee(a.id)}),f({},t,{toasts:t.toasts.map(function(a){return a.id===o||o===void 0?f({},a,{visible:!1}):a})});case p.REMOVE_TOAST:return r.toastId===void 0?f({},t,{toasts:[]}):f({},t,{toasts:t.toasts.filter(function(a){return a.id!==r.toastId})});case p.START_PAUSE:return f({},t,{pausedAt:r.time});case p.END_PAUSE:var u=r.time-(t.pausedAt||0);return f({},t,{pausedAt:void 0,toasts:t.toasts.map(function(a){return f({},a,{pauseDuration:a.pauseDuration+u})})})}},D=[],$={toasts:[],pausedAt:void 0},E=function(t){$=Ke($,t),D.forEach(function(r){r($)})},Ze={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Je=function(t){t===void 0&&(t={});var r=Le($),n=r[0],o=r[1];se(function(){return D.push(o),function(){var a=D.indexOf(o);a>-1&&D.splice(a,1)}},[n]);var u=n.toasts.map(function(a){var i,s,c;return f({},t,t[a.type],a,{duration:a.duration||((i=t[a.type])==null?void 0:i.duration)||((s=t)==null?void 0:s.duration)||Ze[a.type],style:f({},t.style,(c=t[a.type])==null?void 0:c.style,a.style)})});return f({},n,{toasts:u})},Xe=function(t,r,n){return r===void 0&&(r="blank"),f({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n,{id:(n==null?void 0:n.id)||qe()})},w=function(t){return function(r,n){var o=Xe(r,t,n);return E({type:p.UPSERT_TOAST,toast:o}),o.id}},T=function(t,r){return w("blank")(t,r)};T.error=w("error");T.success=w("success");T.loading=w("loading");T.custom=w("custom");T.dismiss=function(e){E({type:p.DISMISS_TOAST,toastId:e})};T.remove=function(e){return E({type:p.REMOVE_TOAST,toastId:e})};T.promise=function(e,t,r){var n=T.loading(t.loading,f({},r,r==null?void 0:r.loading));return e.then(function(o){return T.success(U(t.success,o),f({id:n},r,r==null?void 0:r.success)),o}).catch(function(o){T.error(U(t.error,o),f({id:n},r,r==null?void 0:r.error))}),e};var et=function(t){var r=Je(t),n=r.toasts,o=r.pausedAt;se(function(){if(!o){var a=Date.now(),i=n.map(function(s){if(s.duration!==1/0){var c=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(c<0){s.visible&&T.dismiss(s.id);return}return setTimeout(function(){return T.dismiss(s.id)},c)}});return function(){i.forEach(function(s){return s&&clearTimeout(s)})}}},[n,o]);var u=Ve(function(){return{startPause:function(){E({type:p.START_PAUSE,time:Date.now()})},endPause:function(){o&&E({type:p.END_PAUSE,time:Date.now()})},updateHeight:function(i,s){return E({type:p.UPDATE_TOAST,toast:{id:i,height:s}})},calculateOffset:function(i,s){var c,l=s||{},d=l.reverseOrder,m=d===void 0?!1:d,v=l.gutter,R=v===void 0?8:v,j=l.defaultPosition,O=n.filter(function(b){return(b.position||j)===(i.position||j)&&b.height}),V=O.findIndex(function(b){return b.id===i.id}),M=O.filter(function(b,B){return B<V&&b.visible}).length,Oe=(c=O.filter(function(b){return b.visible})).slice.apply(c,m?[M+1]:[0,M]).reduce(function(b,B){return b+(B.height||0)+R},0);return Oe}}},[n,o]);return{toasts:n,handlers:u}};function ce(){var e=g([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: `,`;
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`]);return ce=function(){return e},e}function le(){var e=g([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return le=function(){return e},e}function de(){var e=g([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return de=function(){return e},e}function fe(){var e=g([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return fe=function(){return e},e}var tt=_(fe()),nt=_(de()),rt=_(le()),at=S("div")(ce(),function(e){return e.primary||"#ff4b4b"},tt,nt,function(e){return e.secondary||"#fff"},rt);function pe(){var e=g([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return pe=function(){return e},e}function me(){var e=g([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return me=function(){return e},e}var it=_(me()),ot=S("div")(pe(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},it);function ve(){var e=g([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: `,` 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: `,`;
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`]);return ve=function(){return e},e}function ge(){var e=g([`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`]);return ge=function(){return e},e}function he(){var e=g([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return he=function(){return e},e}var st=_(he()),ut=_(ge()),ct=S("div")(ve(),function(e){return e.primary||"#61d345"},st,ut,function(e){return e.secondary||"#fff"});function Te(){var e=g([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return Te=function(){return e},e}function be(){var e=g([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return be=function(){return e},e}function _e(){var e=g([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return _e=function(){return e},e}function ye(){var e=g([`
  position: absolute;
`]);return ye=function(){return e},e}var lt=S("div")(ye()),dt=S("div")(_e()),ft=_(be()),pt=S("div")(Te(),ft),mt=function(t){var r=t.toast,n=r.icon,o=r.type,u=r.iconTheme;return n!==void 0?typeof n=="string"?h(pt,null,n):n:o==="blank"?null:h(dt,null,h(ot,Object.assign({},u)),o!=="loading"&&h(lt,null,o==="error"?h(at,Object.assign({},u)):h(ct,Object.assign({},u))))};function Se(){var e=g([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return Se=function(){return e},e}function xe(){var e=g([`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`]);return xe=function(){return e},e}var vt=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},gt=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},ht="0%{opacity:0;} 100%{opacity:1;}",Tt="0%{opacity:1;} 100%{opacity:0;}",bt=S("div",We)(xe()),_t=S("div")(Se()),yt=function(t,r){var n=t.includes("top"),o=n?1:-1,u=ue()?[ht,Tt]:[vt(o),gt(o)],a=u[0],i=u[1];return{animation:r?_(a)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":_(i)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},Ee=Be(function(e){var t=e.toast,r=e.position,n=e.style,o=e.children,u=t!=null&&t.height?yt(t.position||r||"top-center",t.visible):{opacity:0},a=h(mt,{toast:t}),i=h(_t,Object.assign({},t.ariaProps),U(t.message,t));return h(bt,{className:t.className,style:f({},u,n,t.style)},typeof o=="function"?o({icon:a,message:i}):h(ze,null,a,i))});function Ce(){var e=g([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return Ce=function(){return e},e}Ue(h);var St=function(t,r){var n=t.includes("top"),o=n?{top:0}:{bottom:0},u=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return f({left:0,right:0,display:"flex",position:"absolute",transition:ue()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+r*(n?1:-1)+"px)"},o,u)},xt=L(Ce()),N=16,Et=function(t){var r=t.reverseOrder,n=t.position,o=n===void 0?"top-center":n,u=t.toastOptions,a=t.gutter,i=t.children,s=t.containerStyle,c=t.containerClassName,l=et(u),d=l.toasts,m=l.handlers;return h("div",{style:f({position:"fixed",zIndex:9999,top:N,left:N,right:N,bottom:N,pointerEvents:"none"},s),className:c,onMouseEnter:m.startPause,onMouseLeave:m.endPause},d.map(function(v){var R=v.position||o,j=m.calculateOffset(v,{reverseOrder:r,gutter:a,defaultPosition:o}),O=St(R,j),V=v.height?void 0:Ge(function(M){m.updateHeight(v.id,M.height)});return h("div",{ref:V,className:v.visible?xt:"",key:v.id,style:O},v.type==="custom"?U(v.message,v):i?i(v):h(Ee,{toast:v,position:R}))}))};const te=window.React;var Ct=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return je(t,n)})},z=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Me(t,n)})},Q=function(e){ae(t,e);function t(){for(var n,o=arguments.length,u=new Array(o),a=0;a<o;a++)u[a]=arguments[a];return n=e.call.apply(e,[this].concat(u))||this,n.appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(i,s){var c=n.resolveArguments(i,s),l=c[0],d=c[1];n.removeClasses(l,"exit"),n.addClass(l,d?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(i,s)},n.onEntering=function(i,s){var c=n.resolveArguments(i,s),l=c[0],d=c[1],m=d?"appear":"enter";n.addClass(l,m,"active"),n.props.onEntering&&n.props.onEntering(i,s)},n.onEntered=function(i,s){var c=n.resolveArguments(i,s),l=c[0],d=c[1],m=d?"appear":"enter";n.removeClasses(l,m),n.addClass(l,m,"done"),n.props.onEntered&&n.props.onEntered(i,s)},n.onExit=function(i){var s=n.resolveArguments(i),c=s[0];n.removeClasses(c,"appear"),n.removeClasses(c,"enter"),n.addClass(c,"exit","base"),n.props.onExit&&n.props.onExit(i)},n.onExiting=function(i){var s=n.resolveArguments(i),c=s[0];n.addClass(c,"exit","active"),n.props.onExiting&&n.props.onExiting(i)},n.onExited=function(i){var s=n.resolveArguments(i),c=s[0];n.removeClasses(c,"exit"),n.addClass(c,"exit","done"),n.props.onExited&&n.props.onExited(i)},n.resolveArguments=function(i,s){return n.props.nodeRef?[n.props.nodeRef.current,i]:[i,s]},n.getClassNames=function(i){var s=n.props.classNames,c=typeof s=="string",l=c&&s?s+"-":"",d=c?""+l+i:s[i],m=c?d+"-active":s[i+"Active"],v=c?d+"-done":s[i+"Done"];return{baseClassName:d,activeClassName:m,doneClassName:v}},n}var r=t.prototype;return r.addClass=function(o,u,a){var i=this.getClassNames(u)[a+"ClassName"],s=this.getClassNames("enter"),c=s.doneClassName;u==="appear"&&a==="done"&&c&&(i+=" "+c),a==="active"&&o&&o.scrollTop,i&&(this.appliedClasses[u][a]=i,Ct(o,i))},r.removeClasses=function(o,u){var a=this.appliedClasses[u],i=a.base,s=a.active,c=a.done;this.appliedClasses[u]={},i&&z(o,i),s&&z(o,s),c&&z(o,c)},r.render=function(){var o=this.props;o.classNames;var u=ne(o,["classNames"]);return te.createElement(Re,re({},u,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(te.Component);Q.defaultProps={classNames:""};Q.propTypes={};var Ot=Q;const At=window.React.Children,k=window.React.cloneElement,F=window.React.isValidElement;function K(e,t){var r=function(u){return t&&F(u)?t(u):u},n=Object.create(null);return e&&At.map(e,function(o){return o}).forEach(function(o){n[o.key]=r(o)}),n}function wt(e,t){e=e||{},t=t||{};function r(l){return l in t?t[l]:e[l]}var n=Object.create(null),o=[];for(var u in e)u in t?o.length&&(n[u]=o,o=[]):o.push(u);var a,i={};for(var s in t){if(n[s])for(a=0;a<n[s].length;a++){var c=n[s][a];i[n[s][a]]=r(c)}i[s]=r(s)}for(a=0;a<o.length;a++)i[o[a]]=r(o[a]);return i}function x(e,t,r){return r[t]!=null?r[t]:e.props[t]}function Rt(e,t){return K(e.children,function(r){return k(r,{onExited:t.bind(null,r),in:!0,appear:x(r,"appear",e),enter:x(r,"enter",e),exit:x(r,"exit",e)})})}function jt(e,t,r){var n=K(e.children),o=wt(t,n);return Object.keys(o).forEach(function(u){var a=o[u];if(!!F(a)){var i=u in t,s=u in n,c=t[u],l=F(c)&&!c.props.in;s&&(!i||l)?o[u]=k(a,{onExited:r.bind(null,a),in:!0,exit:x(a,"exit",e),enter:x(a,"enter",e)}):!s&&i&&!l?o[u]=k(a,{in:!1}):s&&i&&F(c)&&(o[u]=k(a,{onExited:r.bind(null,a),in:c.props.in,exit:x(a,"exit",e),enter:x(a,"enter",e)}))}}),o}const I=window.React;var Mt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Nt={component:"div",childFactory:function(t){return t}},Z=function(e){ae(t,e);function t(n,o){var u;u=e.call(this,n,o)||this;var a=u.handleExited.bind(we(u));return u.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},u}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,u){var a=u.children,i=u.handleExited,s=u.firstRender;return{children:s?Rt(o,i):jt(o,a,i),firstRender:!1}},r.handleExited=function(o,u){var a=K(this.props.children);o.key in a||(o.props.onExited&&o.props.onExited(u),this.mounted&&this.setState(function(i){var s=re({},i.children);return delete s[o.key],{children:s}}))},r.render=function(){var o=this.props,u=o.component,a=o.childFactory,i=ne(o,["component","childFactory"]),s=this.state.contextValue,c=Mt(this.state.children).map(a);return delete i.appear,delete i.enter,delete i.exit,u===null?I.createElement(J.Provider,{value:s},c):I.createElement(J.Provider,{value:s},I.createElement(u,i,c))},t}(I.Component);Z.propTypes={};Z.defaultProps=Nt;var It=Z;const W=({text:e,show:t,autohide:r})=>C(It,{children:t&&C(Ot,{classNames:"SRC-card",timeout:r?{enter:500,exit:300}:{},children:C("div",{className:"SRC-modal",children:e})})}),Y=()=>C(Et,{containerClassName:"SynapseToastContainer bootstrap-4-backport",position:"bottom-center",children:e=>C(Ee,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})}),q=(e,t,r={})=>{const n=Ne("synToast-"),o=()=>{T.dismiss(n)},{title:u=void 0,primaryButtonConfig:a=void 0,secondaryButtonConfig:i=void 0,dismissOnPrimaryButtonClick:s=!1,dismissOnSecondaryButtonClick:c=!1}=r;if(a&&"onClick"in a&&s){const d=a.onClick;a.onClick=m=>{d(m),o()}}if(i&&"onClick"in i&&c){const d=i.onClick;i.onClick=m=>{d(m),o()}}let{autoCloseInMs:l=15e3}=r;l===0&&(l=1/0),T(C(Ae,{isGlobal:!1,onClose:o,variant:t!=null?t:"info",show:!0,title:u,description:e,primaryButtonConfig:a,secondaryButtonConfig:i}),{id:n,className:"SynapseToastMessage",duration:l})};try{W.displayName="ToastMessage",W.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ToastMessage.tsx#ToastMessage"]={docgenInfo:W.__docgenInfo,name:"ToastMessage",path:"src/lib/containers/ToastMessage.tsx#ToastMessage"})}catch{}try{Y.displayName="SynapseToastContainer",Y.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ToastMessage.tsx#SynapseToastContainer"]={docgenInfo:Y.__docgenInfo,name:"SynapseToastContainer",path:"src/lib/containers/ToastMessage.tsx#SynapseToastContainer"})}catch{}try{q.displayName="displayToast",q.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ToastMessage.tsx#displayToast"]={docgenInfo:q.__docgenInfo,name:"displayToast",path:"src/lib/containers/ToastMessage.tsx#displayToast"})}catch{}export{Ot as C,Y as S,W as T,It as a,q as d};
//# sourceMappingURL=ToastMessage.f82ed562.js.map

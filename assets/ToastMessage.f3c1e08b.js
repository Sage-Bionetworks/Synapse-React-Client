import{r as d,j as T,R as X}from"./jsx-runtime.ed0bc2e8.js";import{F as Ee}from"./FullWidthAlert.7478a55e.js";import{b as ee,c as te,T as Se,d as K}from"./utils.31a80d71.js";import{a as Oe,r as Ce}from"./removeClass.27874bcb.js";import{u as Ae}from"./uniqueId.e6e71b68.js";let je={data:""},we=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||je,Re=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ne=/\/\*[^]*?\*\/|  +/g,Z=/\n+/g,y=(e,t)=>{let r="",n="",o="";for(let u in e){let a=e[u];u[0]=="@"?u[1]=="i"?r=u+" "+a+";":n+=u[1]=="f"?y(a,u):u+"{"+y(a,u[1]=="k"?"":t)+"}":typeof a=="object"?n+=y(a,t?t.replace(/([^,])+/g,i=>u.replace(/(^:.*)|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,i):i?i+" "+s:s)):u):a!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=y.p?y.p(u,a):u+":"+a+";")}return r+(t&&o?t+"{"+o+"}":o)+n},A={},ne=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+ne(e[r]);return t}return e},Me=(e,t,r,n,o)=>{let u=ne(e),a=A[u]||(A[u]=(i=>{let s=0,c=11;for(;s<i.length;)c=101*c+i.charCodeAt(s++)>>>0;return"go"+c})(u));if(!A[a]){let i=u!==e?e:(s=>{let c,l,p=[{}];for(;c=Re.exec(s.replace(Ne,""));)c[4]?p.shift():c[3]?(l=c[3].replace(Z," ").trim(),p.unshift(p[0][l]=p[0][l]||{})):p[0][c[1]]=c[2].replace(Z," ").trim();return p[0]})(e);A[a]=y(o?{["@keyframes "+a]:i}:i,r?"":"."+a)}return((i,s,c)=>{s.data.indexOf(i)==-1&&(s.data=c?i+s.data:s.data+i)})(A[a],t,n),a},Pe=(e,t,r)=>e.reduce((n,o,u)=>{let a=t[u];if(a&&a.call){let i=a(r),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&typeof i=="object"?i.props?"":y(i,""):i===!1?"":i}return n+o+(a==null?"":a)},"");function U(e){let t=this||{},r=e.call?e(t.p):e;return Me(r.unshift?r.raw?Pe(r,[].slice.call(arguments,1),t.p):r.reduce((n,o)=>Object.assign(n,o&&o.call?o(t.p):o),{}):r,we(t.target),t.g,t.o,t.k)}let re,W,Y;U.bind({g:1});let _=U.bind({k:1});function Ie(e,t,r,n){y.p=t,re=e,W=r,Y=n}function E(e,t){let r=this||{};return function(){let n=arguments;function o(u,a){let i=Object.assign({},u),s=i.className||o.className;r.p=Object.assign({theme:W&&W()},i),r.o=/ *go\d+/.test(s),i.className=U.apply(r,n)+(s?" "+s:""),t&&(i.ref=a);let c=e;return e[0]&&(c=i.as||e,delete i.as),Y&&c[0]&&Y(i),re(c,i)}return t?t(o):o}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function h(e,t){return t||(t=e.slice(0)),e.raw=t,e}var De=function(t){return typeof t=="function"},$=function(t,r){return De(t)?t(r):t},$e=function(){var e=0;return function(){return(++e).toString()}}(),Ue=function(t){return function(r){r&&setTimeout(function(){var n=r.getBoundingClientRect();t(n)})}},ae=function(){var e=void 0;return function(){if(e===void 0&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),Fe=20,m;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(m||(m={}));var P=new Map,J=function(t){if(!P.has(t)){var r=setTimeout(function(){P.delete(t),O({type:m.REMOVE_TOAST,toastId:t})},1e3);P.set(t,r)}},Le=function(t){var r=P.get(t);r&&clearTimeout(r)},ke=function e(t,r){switch(r.type){case m.ADD_TOAST:return f({},t,{toasts:[r.toast].concat(t.toasts).slice(0,Fe)});case m.UPDATE_TOAST:return r.toast.id&&Le(r.toast.id),f({},t,{toasts:t.toasts.map(function(a){return a.id===r.toast.id?f({},a,r.toast):a})});case m.UPSERT_TOAST:var n=r.toast;return t.toasts.find(function(a){return a.id===n.id})?e(t,{type:m.UPDATE_TOAST,toast:n}):e(t,{type:m.ADD_TOAST,toast:n});case m.DISMISS_TOAST:var o=r.toastId;return o?J(o):t.toasts.forEach(function(a){J(a.id)}),f({},t,{toasts:t.toasts.map(function(a){return a.id===o||o===void 0?f({},a,{visible:!1}):a})});case m.REMOVE_TOAST:return r.toastId===void 0?f({},t,{toasts:[]}):f({},t,{toasts:t.toasts.filter(function(a){return a.id!==r.toastId})});case m.START_PAUSE:return f({},t,{pausedAt:r.time});case m.END_PAUSE:var u=r.time-(t.pausedAt||0);return f({},t,{pausedAt:void 0,toasts:t.toasts.map(function(a){return f({},a,{pauseDuration:a.pauseDuration+u})})})}},I=[],D={toasts:[],pausedAt:void 0},O=function(t){D=ke(D,t),I.forEach(function(r){r(D)})},Ve={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Be=function(t){t===void 0&&(t={});var r=d.exports.useState(D),n=r[0],o=r[1];d.exports.useEffect(function(){return I.push(o),function(){var a=I.indexOf(o);a>-1&&I.splice(a,1)}},[n]);var u=n.toasts.map(function(a){var i,s,c;return f({},t,t[a.type],a,{duration:a.duration||((i=t[a.type])==null?void 0:i.duration)||((s=t)==null?void 0:s.duration)||Ve[a.type],style:f({},t.style,(c=t[a.type])==null?void 0:c.style,a.style)})});return f({},n,{toasts:u})},ze=function(t,r,n){return r===void 0&&(r="blank"),f({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n,{id:(n==null?void 0:n.id)||$e()})},j=function(t){return function(r,n){var o=ze(r,t,n);return O({type:m.UPSERT_TOAST,toast:o}),o.id}},x=function(t,r){return j("blank")(t,r)};x.error=j("error");x.success=j("success");x.loading=j("loading");x.custom=j("custom");x.dismiss=function(e){O({type:m.DISMISS_TOAST,toastId:e})};x.remove=function(e){return O({type:m.REMOVE_TOAST,toastId:e})};x.promise=function(e,t,r){var n=x.loading(t.loading,f({},r,r==null?void 0:r.loading));return e.then(function(o){return x.success($(t.success,o),f({id:n},r,r==null?void 0:r.success)),o}).catch(function(o){x.error($(t.error,o),f({id:n},r,r==null?void 0:r.error))}),e};var We=function(t){var r=Be(t),n=r.toasts,o=r.pausedAt;d.exports.useEffect(function(){if(!o){var a=Date.now(),i=n.map(function(s){if(s.duration!==1/0){var c=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(c<0){s.visible&&x.dismiss(s.id);return}return setTimeout(function(){return x.dismiss(s.id)},c)}});return function(){i.forEach(function(s){return s&&clearTimeout(s)})}}},[n,o]);var u=d.exports.useMemo(function(){return{startPause:function(){O({type:m.START_PAUSE,time:Date.now()})},endPause:function(){o&&O({type:m.END_PAUSE,time:Date.now()})},updateHeight:function(i,s){return O({type:m.UPDATE_TOAST,toast:{id:i,height:s}})},calculateOffset:function(i,s){var c,l=s||{},p=l.reverseOrder,v=p===void 0?!1:p,g=l.gutter,w=g===void 0?8:g,R=l.defaultPosition,C=n.filter(function(b){return(b.position||R)===(i.position||R)&&b.height}),F=C.findIndex(function(b){return b.id===i.id}),N=C.filter(function(b,L){return L<F&&b.visible}).length,ye=(c=C.filter(function(b){return b.visible})).slice.apply(c,v?[N+1]:[0,N]).reduce(function(b,L){return b+(L.height||0)+w},0);return ye}}},[n,o]);return{toasts:n,handlers:u}};function ie(){var e=h([`
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
`]);return ie=function(){return e},e}function oe(){var e=h([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return oe=function(){return e},e}function se(){var e=h([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return se=function(){return e},e}function ue(){var e=h([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return ue=function(){return e},e}var Ye=_(ue()),qe=_(se()),Ge=_(oe()),He=E("div")(ie(),function(e){return e.primary||"#ff4b4b"},Ye,qe,function(e){return e.secondary||"#fff"},Ge);function ce(){var e=h([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return ce=function(){return e},e}function le(){var e=h([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return le=function(){return e},e}var Qe=_(le()),Ke=E("div")(ce(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},Qe);function de(){var e=h([`
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
`]);return de=function(){return e},e}function pe(){var e=h([`
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
}`]);return pe=function(){return e},e}function fe(){var e=h([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return fe=function(){return e},e}var Ze=_(fe()),Je=_(pe()),Xe=E("div")(de(),function(e){return e.primary||"#61d345"},Ze,Je,function(e){return e.secondary||"#fff"});function me(){var e=h([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return me=function(){return e},e}function ve(){var e=h([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return ve=function(){return e},e}function ge(){var e=h([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return ge=function(){return e},e}function he(){var e=h([`
  position: absolute;
`]);return he=function(){return e},e}var et=E("div")(he()),tt=E("div")(ge()),nt=_(ve()),rt=E("div")(me(),nt),at=function(t){var r=t.toast,n=r.icon,o=r.type,u=r.iconTheme;return n!==void 0?typeof n=="string"?d.exports.createElement(rt,null,n):n:o==="blank"?null:d.exports.createElement(tt,null,d.exports.createElement(Ke,Object.assign({},u)),o!=="loading"&&d.exports.createElement(et,null,o==="error"?d.exports.createElement(He,Object.assign({},u)):d.exports.createElement(Xe,Object.assign({},u))))};function xe(){var e=h([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return xe=function(){return e},e}function be(){var e=h([`
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
`]);return be=function(){return e},e}var it=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},ot=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},st="0%{opacity:0;} 100%{opacity:1;}",ut="0%{opacity:1;} 100%{opacity:0;}",ct=E("div",d.exports.forwardRef)(be()),lt=E("div")(xe()),dt=function(t,r){var n=t.includes("top"),o=n?1:-1,u=ae()?[st,ut]:[it(o),ot(o)],a=u[0],i=u[1];return{animation:r?_(a)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":_(i)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},Te=d.exports.memo(function(e){var t=e.toast,r=e.position,n=e.style,o=e.children,u=t!=null&&t.height?dt(t.position||r||"top-center",t.visible):{opacity:0},a=d.exports.createElement(at,{toast:t}),i=d.exports.createElement(lt,Object.assign({},t.ariaProps),$(t.message,t));return d.exports.createElement(ct,{className:t.className,style:f({},u,n,t.style)},typeof o=="function"?o({icon:a,message:i}):d.exports.createElement(d.exports.Fragment,null,a,i))});function _e(){var e=h([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return _e=function(){return e},e}Ie(d.exports.createElement);var pt=function(t,r){var n=t.includes("top"),o=n?{top:0}:{bottom:0},u=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return f({left:0,right:0,display:"flex",position:"absolute",transition:ae()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+r*(n?1:-1)+"px)"},o,u)},ft=U(_e()),M=16,mt=function(t){var r=t.reverseOrder,n=t.position,o=n===void 0?"top-center":n,u=t.toastOptions,a=t.gutter,i=t.children,s=t.containerStyle,c=t.containerClassName,l=We(u),p=l.toasts,v=l.handlers;return d.exports.createElement("div",{style:f({position:"fixed",zIndex:9999,top:M,left:M,right:M,bottom:M,pointerEvents:"none"},s),className:c,onMouseEnter:v.startPause,onMouseLeave:v.endPause},p.map(function(g){var w=g.position||o,R=v.calculateOffset(g,{reverseOrder:r,gutter:a,defaultPosition:o}),C=pt(w,R),F=g.height?void 0:Ue(function(N){v.updateHeight(g.id,N.height)});return d.exports.createElement("div",{ref:F,className:g.visible?ft:"",key:g.id,style:C},g.type==="custom"?$(g.message,g):i?i(g):d.exports.createElement(Te,{toast:g,position:w}))}))};function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q.apply(this,arguments)}var vt=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Oe(t,n)})},k=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Ce(t,n)})},G=function(e){ee(t,e);function t(){for(var n,o=arguments.length,u=new Array(o),a=0;a<o;a++)u[a]=arguments[a];return n=e.call.apply(e,[this].concat(u))||this,n.appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(i,s){var c=n.resolveArguments(i,s),l=c[0],p=c[1];n.removeClasses(l,"exit"),n.addClass(l,p?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(i,s)},n.onEntering=function(i,s){var c=n.resolveArguments(i,s),l=c[0],p=c[1],v=p?"appear":"enter";n.addClass(l,v,"active"),n.props.onEntering&&n.props.onEntering(i,s)},n.onEntered=function(i,s){var c=n.resolveArguments(i,s),l=c[0],p=c[1],v=p?"appear":"enter";n.removeClasses(l,v),n.addClass(l,v,"done"),n.props.onEntered&&n.props.onEntered(i,s)},n.onExit=function(i){var s=n.resolveArguments(i),c=s[0];n.removeClasses(c,"appear"),n.removeClasses(c,"enter"),n.addClass(c,"exit","base"),n.props.onExit&&n.props.onExit(i)},n.onExiting=function(i){var s=n.resolveArguments(i),c=s[0];n.addClass(c,"exit","active"),n.props.onExiting&&n.props.onExiting(i)},n.onExited=function(i){var s=n.resolveArguments(i),c=s[0];n.removeClasses(c,"exit"),n.addClass(c,"exit","done"),n.props.onExited&&n.props.onExited(i)},n.resolveArguments=function(i,s){return n.props.nodeRef?[n.props.nodeRef.current,i]:[i,s]},n.getClassNames=function(i){var s=n.props.classNames,c=typeof s=="string",l=c&&s?s+"-":"",p=c?""+l+i:s[i],v=c?p+"-active":s[i+"Active"],g=c?p+"-done":s[i+"Done"];return{baseClassName:p,activeClassName:v,doneClassName:g}},n}var r=t.prototype;return r.addClass=function(o,u,a){var i=this.getClassNames(u)[a+"ClassName"],s=this.getClassNames("enter"),c=s.doneClassName;u==="appear"&&a==="done"&&c&&(i+=" "+c),a==="active"&&o&&o.scrollTop,i&&(this.appliedClasses[u][a]=i,vt(o,i))},r.removeClasses=function(o,u){var a=this.appliedClasses[u],i=a.base,s=a.active,c=a.done;this.appliedClasses[u]={},i&&k(o,i),s&&k(o,s),c&&k(o,c)},r.render=function(){var o=this.props;o.classNames;var u=te(o,["classNames"]);return T(Se,{...u,onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited})},t}(X.Component);G.defaultProps={classNames:""};G.propTypes={};const gt=G;function ht(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){var r=function(u){return t&&d.exports.isValidElement(u)?t(u):u},n=Object.create(null);return e&&d.exports.Children.map(e,function(o){return o}).forEach(function(o){n[o.key]=r(o)}),n}function xt(e,t){e=e||{},t=t||{};function r(l){return l in t?t[l]:e[l]}var n=Object.create(null),o=[];for(var u in e)u in t?o.length&&(n[u]=o,o=[]):o.push(u);var a,i={};for(var s in t){if(n[s])for(a=0;a<n[s].length;a++){var c=n[s][a];i[n[s][a]]=r(c)}i[s]=r(s)}for(a=0;a<o.length;a++)i[o[a]]=r(o[a]);return i}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function bt(e,t){return H(e.children,function(r){return d.exports.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function Tt(e,t,r){var n=H(e.children),o=xt(t,n);return Object.keys(o).forEach(function(u){var a=o[u];if(!!d.exports.isValidElement(a)){var i=u in t,s=u in n,c=t[u],l=d.exports.isValidElement(c)&&!c.props.in;s&&(!i||l)?o[u]=d.exports.cloneElement(a,{onExited:r.bind(null,a),in:!0,exit:S(a,"exit",e),enter:S(a,"enter",e)}):!s&&i&&!l?o[u]=d.exports.cloneElement(a,{in:!1}):s&&i&&d.exports.isValidElement(c)&&(o[u]=d.exports.cloneElement(a,{onExited:r.bind(null,a),in:c.props.in,exit:S(a,"exit",e),enter:S(a,"enter",e)}))}}),o}var _t=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},yt={component:"div",childFactory:function(t){return t}},Q=function(e){ee(t,e);function t(n,o){var u;u=e.call(this,n,o)||this;var a=u.handleExited.bind(ht(u));return u.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},u}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,u){var a=u.children,i=u.handleExited,s=u.firstRender;return{children:s?bt(o,i):Tt(o,a,i),firstRender:!1}},r.handleExited=function(o,u){var a=H(this.props.children);o.key in a||(o.props.onExited&&o.props.onExited(u),this.mounted&&this.setState(function(i){var s=q({},i.children);return delete s[o.key],{children:s}}))},r.render=function(){var o=this.props,u=o.component,a=o.childFactory,i=te(o,["component","childFactory"]),s=this.state.contextValue,c=_t(this.state.children).map(a);return delete i.appear,delete i.enter,delete i.exit,u===null?T(K.Provider,{value:s,children:c}):T(K.Provider,{value:s,children:T(u,{...i,children:c})})},t}(X.Component);Q.propTypes={};Q.defaultProps=yt;const Et=Q,V=({text:e,show:t,autohide:r})=>T(Et,{children:t&&T(gt,{classNames:"SRC-card",timeout:r?{enter:500,exit:300}:{},children:T("div",{className:"SRC-modal",children:e})})}),B=()=>T(mt,{containerClassName:"SynapseToastContainer bootstrap-4-backport",position:"bottom-center",children:e=>T(Te,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})}),z=(e,t,r={})=>{const n=Ae("synToast-"),o=()=>{x.dismiss(n)},{title:u=void 0,primaryButtonConfig:a=void 0,secondaryButtonConfig:i=void 0,dismissOnPrimaryButtonClick:s=!1,dismissOnSecondaryButtonClick:c=!1}=r;if(a&&"onClick"in a&&s){const p=a.onClick;a.onClick=v=>{p(v),o()}}if(i&&"onClick"in i&&c){const p=i.onClick;i.onClick=v=>{p(v),o()}}let{autoCloseInMs:l=15e3}=r;l===0&&(l=1/0),x(T(Ee,{isGlobal:!1,onClose:o,variant:t!=null?t:"info",show:!0,title:u,description:e,primaryButtonConfig:a,secondaryButtonConfig:i}),{id:n,className:"SynapseToastMessage",duration:l})};try{V.displayName="ToastMessage",V.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ToastMessage.tsx#ToastMessage"]={docgenInfo:V.__docgenInfo,name:"ToastMessage",path:"src/lib/containers/ToastMessage.tsx#ToastMessage"})}catch{}try{B.displayName="SynapseToastContainer",B.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ToastMessage.tsx#SynapseToastContainer"]={docgenInfo:B.__docgenInfo,name:"SynapseToastContainer",path:"src/lib/containers/ToastMessage.tsx#SynapseToastContainer"})}catch{}try{z.displayName="displayToast",z.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ToastMessage.tsx#displayToast"]={docgenInfo:z.__docgenInfo,name:"displayToast",path:"src/lib/containers/ToastMessage.tsx#displayToast"})}catch{}export{gt as C,B as S,V as T,Et as a,z as d};

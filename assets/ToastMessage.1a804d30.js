import{r as d,j as b,R as J}from"./jsx-runtime.05444945.js";import{F as ye}from"./FullWidthAlert.27fd0db2.js";import{_ as X}from"./objectWithoutPropertiesLoose.5e7699d1.js";import{a as ee,_ as Ee}from"./withStyles.2a0b3149.js";import{_ as Se}from"./toConsumableArray.c4898ee4.js";import{T as Ce,a as Q}from"./Transition.4ed8243e.js";import{a as Oe,r as Ae}from"./removeClass.27874bcb.js";import{u as je}from"./uniqueId.24a4cbf4.js";let we={data:""},Re=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||we,Ne=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Me=/\/\*[^]*?\*\/|  +/g,K=/\n+/g,y=(e,t)=>{let r="",n="",i="";for(let u in e){let a=e[u];u[0]=="@"?u[1]=="i"?r=u+" "+a+";":n+=u[1]=="f"?y(a,u):u+"{"+y(a,u[1]=="k"?"":t)+"}":typeof a=="object"?n+=y(a,t?t.replace(/([^,])+/g,o=>u.replace(/(^:.*)|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,o):o?o+" "+s:s)):u):a!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=y.p?y.p(u,a):u+":"+a+";")}return r+(t&&i?t+"{"+i+"}":i)+n},A={},te=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+te(e[r]);return t}return e},Ie=(e,t,r,n,i)=>{let u=te(e),a=A[u]||(A[u]=(o=>{let s=0,c=11;for(;s<o.length;)c=101*c+o.charCodeAt(s++)>>>0;return"go"+c})(u));if(!A[a]){let o=u!==e?e:(s=>{let c,l,p=[{}];for(;c=Ne.exec(s.replace(Me,""));)c[4]?p.shift():c[3]?(l=c[3].replace(K," ").trim(),p.unshift(p[0][l]=p[0][l]||{})):p[0][c[1]]=c[2].replace(K," ").trim();return p[0]})(e);A[a]=y(i?{["@keyframes "+a]:o}:o,r?"":"."+a)}return((o,s,c)=>{s.data.indexOf(o)==-1&&(s.data=c?o+s.data:s.data+o)})(A[a],t,n),a},Pe=(e,t,r)=>e.reduce((n,i,u)=>{let a=t[u];if(a&&a.call){let o=a(r),s=o&&o.props&&o.props.className||/^go/.test(o)&&o;a=s?"."+s:o&&typeof o=="object"?o.props?"":y(o,""):o===!1?"":o}return n+i+(a==null?"":a)},"");function k(e){let t=this||{},r=e.call?e(t.p):e;return Ie(r.unshift?r.raw?Pe(r,[].slice.call(arguments,1),t.p):r.reduce((n,i)=>Object.assign(n,i&&i.call?i(t.p):i),{}):r,Re(t.target),t.g,t.o,t.k)}let ne,W,Y;k.bind({g:1});let _=k.bind({k:1});function De(e,t,r,n){y.p=t,ne=e,W=r,Y=n}function E(e,t){let r=this||{};return function(){let n=arguments;function i(u,a){let o=Object.assign({},u),s=o.className||i.className;r.p=Object.assign({theme:W&&W()},o),r.o=/ *go\d+/.test(s),o.className=k.apply(r,n)+(s?" "+s:""),t&&(o.ref=a);let c=e;return e[0]&&(c=o.as||e,delete o.as),Y&&c[0]&&Y(o),ne(c,o)}return t?t(i):i}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function h(e,t){return t||(t=e.slice(0)),e.raw=t,e}var $e=function(t){return typeof t=="function"},$=function(t,r){return $e(t)?t(r):t},ke=function(){var e=0;return function(){return(++e).toString()}}(),Ue=function(t){return function(r){r&&setTimeout(function(){var n=r.getBoundingClientRect();t(n)})}},re=function(){var e=void 0;return function(){if(e===void 0&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),Fe=20,m;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(m||(m={}));var I=new Map,Z=function(t){if(!I.has(t)){var r=setTimeout(function(){I.delete(t),C({type:m.REMOVE_TOAST,toastId:t})},1e3);I.set(t,r)}},Le=function(t){var r=I.get(t);r&&clearTimeout(r)},Ve=function e(t,r){switch(r.type){case m.ADD_TOAST:return f({},t,{toasts:[r.toast].concat(t.toasts).slice(0,Fe)});case m.UPDATE_TOAST:return r.toast.id&&Le(r.toast.id),f({},t,{toasts:t.toasts.map(function(a){return a.id===r.toast.id?f({},a,r.toast):a})});case m.UPSERT_TOAST:var n=r.toast;return t.toasts.find(function(a){return a.id===n.id})?e(t,{type:m.UPDATE_TOAST,toast:n}):e(t,{type:m.ADD_TOAST,toast:n});case m.DISMISS_TOAST:var i=r.toastId;return i?Z(i):t.toasts.forEach(function(a){Z(a.id)}),f({},t,{toasts:t.toasts.map(function(a){return a.id===i||i===void 0?f({},a,{visible:!1}):a})});case m.REMOVE_TOAST:return r.toastId===void 0?f({},t,{toasts:[]}):f({},t,{toasts:t.toasts.filter(function(a){return a.id!==r.toastId})});case m.START_PAUSE:return f({},t,{pausedAt:r.time});case m.END_PAUSE:var u=r.time-(t.pausedAt||0);return f({},t,{pausedAt:void 0,toasts:t.toasts.map(function(a){return f({},a,{pauseDuration:a.pauseDuration+u})})})}},P=[],D={toasts:[],pausedAt:void 0},C=function(t){D=Ve(D,t),P.forEach(function(r){r(D)})},Be={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ze=function(t){t===void 0&&(t={});var r=d.exports.useState(D),n=r[0],i=r[1];d.exports.useEffect(function(){return P.push(i),function(){var a=P.indexOf(i);a>-1&&P.splice(a,1)}},[n]);var u=n.toasts.map(function(a){var o,s,c;return f({},t,t[a.type],a,{duration:a.duration||((o=t[a.type])==null?void 0:o.duration)||((s=t)==null?void 0:s.duration)||Be[a.type],style:f({},t.style,(c=t[a.type])==null?void 0:c.style,a.style)})});return f({},n,{toasts:u})},We=function(t,r,n){return r===void 0&&(r="blank"),f({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n,{id:(n==null?void 0:n.id)||ke()})},j=function(t){return function(r,n){var i=We(r,t,n);return C({type:m.UPSERT_TOAST,toast:i}),i.id}},x=function(t,r){return j("blank")(t,r)};x.error=j("error");x.success=j("success");x.loading=j("loading");x.custom=j("custom");x.dismiss=function(e){C({type:m.DISMISS_TOAST,toastId:e})};x.remove=function(e){return C({type:m.REMOVE_TOAST,toastId:e})};x.promise=function(e,t,r){var n=x.loading(t.loading,f({},r,r==null?void 0:r.loading));return e.then(function(i){return x.success($(t.success,i),f({id:n},r,r==null?void 0:r.success)),i}).catch(function(i){x.error($(t.error,i),f({id:n},r,r==null?void 0:r.error))}),e};var Ye=function(t){var r=ze(t),n=r.toasts,i=r.pausedAt;d.exports.useEffect(function(){if(!i){var a=Date.now(),o=n.map(function(s){if(s.duration!==1/0){var c=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(c<0){s.visible&&x.dismiss(s.id);return}return setTimeout(function(){return x.dismiss(s.id)},c)}});return function(){o.forEach(function(s){return s&&clearTimeout(s)})}}},[n,i]);var u=d.exports.useMemo(function(){return{startPause:function(){C({type:m.START_PAUSE,time:Date.now()})},endPause:function(){i&&C({type:m.END_PAUSE,time:Date.now()})},updateHeight:function(o,s){return C({type:m.UPDATE_TOAST,toast:{id:o,height:s}})},calculateOffset:function(o,s){var c,l=s||{},p=l.reverseOrder,v=p===void 0?!1:p,g=l.gutter,w=g===void 0?8:g,R=l.defaultPosition,O=n.filter(function(T){return(T.position||R)===(o.position||R)&&T.height}),U=O.findIndex(function(T){return T.id===o.id}),N=O.filter(function(T,F){return F<U&&T.visible}).length,_e=(c=O.filter(function(T){return T.visible})).slice.apply(c,v?[N+1]:[0,N]).reduce(function(T,F){return T+(F.height||0)+w},0);return _e}}},[n,i]);return{toasts:n,handlers:u}};function ae(){var e=h([`
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
`]);return ae=function(){return e},e}function oe(){var e=h([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return oe=function(){return e},e}function ie(){var e=h([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return ie=function(){return e},e}function se(){var e=h([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return se=function(){return e},e}var qe=_(se()),Ge=_(ie()),He=_(oe()),Qe=E("div")(ae(),function(e){return e.primary||"#ff4b4b"},qe,Ge,function(e){return e.secondary||"#fff"},He);function ue(){var e=h([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return ue=function(){return e},e}function ce(){var e=h([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return ce=function(){return e},e}var Ke=_(ce()),Ze=E("div")(ue(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},Ke);function le(){var e=h([`
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
`]);return le=function(){return e},e}function de(){var e=h([`
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
}`]);return de=function(){return e},e}function pe(){var e=h([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return pe=function(){return e},e}var Je=_(pe()),Xe=_(de()),et=E("div")(le(),function(e){return e.primary||"#61d345"},Je,Xe,function(e){return e.secondary||"#fff"});function fe(){var e=h([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return fe=function(){return e},e}function me(){var e=h([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return me=function(){return e},e}function ve(){var e=h([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return ve=function(){return e},e}function ge(){var e=h([`
  position: absolute;
`]);return ge=function(){return e},e}var tt=E("div")(ge()),nt=E("div")(ve()),rt=_(me()),at=E("div")(fe(),rt),ot=function(t){var r=t.toast,n=r.icon,i=r.type,u=r.iconTheme;return n!==void 0?typeof n=="string"?d.exports.createElement(at,null,n):n:i==="blank"?null:d.exports.createElement(nt,null,d.exports.createElement(Ze,Object.assign({},u)),i!=="loading"&&d.exports.createElement(tt,null,i==="error"?d.exports.createElement(Qe,Object.assign({},u)):d.exports.createElement(et,Object.assign({},u))))};function he(){var e=h([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return he=function(){return e},e}function xe(){var e=h([`
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
`]);return xe=function(){return e},e}var it=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},st=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},ut="0%{opacity:0;} 100%{opacity:1;}",ct="0%{opacity:1;} 100%{opacity:0;}",lt=E("div",d.exports.forwardRef)(xe()),dt=E("div")(he()),pt=function(t,r){var n=t.includes("top"),i=n?1:-1,u=re()?[ut,ct]:[it(i),st(i)],a=u[0],o=u[1];return{animation:r?_(a)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":_(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},Te=d.exports.memo(function(e){var t=e.toast,r=e.position,n=e.style,i=e.children,u=t!=null&&t.height?pt(t.position||r||"top-center",t.visible):{opacity:0},a=d.exports.createElement(ot,{toast:t}),o=d.exports.createElement(dt,Object.assign({},t.ariaProps),$(t.message,t));return d.exports.createElement(lt,{className:t.className,style:f({},u,n,t.style)},typeof i=="function"?i({icon:a,message:o}):d.exports.createElement(d.exports.Fragment,null,a,o))});function be(){var e=h([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return be=function(){return e},e}De(d.exports.createElement);var ft=function(t,r){var n=t.includes("top"),i=n?{top:0}:{bottom:0},u=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return f({left:0,right:0,display:"flex",position:"absolute",transition:re()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+r*(n?1:-1)+"px)"},i,u)},mt=k(be()),M=16,vt=function(t){var r=t.reverseOrder,n=t.position,i=n===void 0?"top-center":n,u=t.toastOptions,a=t.gutter,o=t.children,s=t.containerStyle,c=t.containerClassName,l=Ye(u),p=l.toasts,v=l.handlers;return d.exports.createElement("div",{style:f({position:"fixed",zIndex:9999,top:M,left:M,right:M,bottom:M,pointerEvents:"none"},s),className:c,onMouseEnter:v.startPause,onMouseLeave:v.endPause},p.map(function(g){var w=g.position||i,R=v.calculateOffset(g,{reverseOrder:r,gutter:a,defaultPosition:i}),O=ft(w,R),U=g.height?void 0:Ue(function(N){v.updateHeight(g.id,N.height)});return d.exports.createElement("div",{ref:U,className:g.visible?mt:"",key:g.id,style:O},g.type==="custom"?$(g.message,g):o?o(g):d.exports.createElement(Te,{toast:g,position:w}))}))},gt=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Oe(t,n)})},L=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Ae(t,n)})},q=function(e){ee(t,e);function t(){for(var n,i=arguments.length,u=new Array(i),a=0;a<i;a++)u[a]=arguments[a];return n=e.call.apply(e,[this].concat(u))||this,n.appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(o,s){var c=n.resolveArguments(o,s),l=c[0],p=c[1];n.removeClasses(l,"exit"),n.addClass(l,p?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(o,s)},n.onEntering=function(o,s){var c=n.resolveArguments(o,s),l=c[0],p=c[1],v=p?"appear":"enter";n.addClass(l,v,"active"),n.props.onEntering&&n.props.onEntering(o,s)},n.onEntered=function(o,s){var c=n.resolveArguments(o,s),l=c[0],p=c[1],v=p?"appear":"enter";n.removeClasses(l,v),n.addClass(l,v,"done"),n.props.onEntered&&n.props.onEntered(o,s)},n.onExit=function(o){var s=n.resolveArguments(o),c=s[0];n.removeClasses(c,"appear"),n.removeClasses(c,"enter"),n.addClass(c,"exit","base"),n.props.onExit&&n.props.onExit(o)},n.onExiting=function(o){var s=n.resolveArguments(o),c=s[0];n.addClass(c,"exit","active"),n.props.onExiting&&n.props.onExiting(o)},n.onExited=function(o){var s=n.resolveArguments(o),c=s[0];n.removeClasses(c,"exit"),n.addClass(c,"exit","done"),n.props.onExited&&n.props.onExited(o)},n.resolveArguments=function(o,s){return n.props.nodeRef?[n.props.nodeRef.current,o]:[o,s]},n.getClassNames=function(o){var s=n.props.classNames,c=typeof s=="string",l=c&&s?s+"-":"",p=c?""+l+o:s[o],v=c?p+"-active":s[o+"Active"],g=c?p+"-done":s[o+"Done"];return{baseClassName:p,activeClassName:v,doneClassName:g}},n}var r=t.prototype;return r.addClass=function(i,u,a){var o=this.getClassNames(u)[a+"ClassName"],s=this.getClassNames("enter"),c=s.doneClassName;u==="appear"&&a==="done"&&c&&(o+=" "+c),a==="active"&&i&&i.scrollTop,o&&(this.appliedClasses[u][a]=o,gt(i,o))},r.removeClasses=function(i,u){var a=this.appliedClasses[u],o=a.base,s=a.active,c=a.done;this.appliedClasses[u]={},o&&L(i,o),s&&L(i,s),c&&L(i,c)},r.render=function(){var i=this.props;i.classNames;var u=X(i,["classNames"]);return b(Ce,{...u,onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited})},t}(J.Component);q.defaultProps={classNames:""};q.propTypes={};const ht=q;function G(e,t){var r=function(u){return t&&d.exports.isValidElement(u)?t(u):u},n=Object.create(null);return e&&d.exports.Children.map(e,function(i){return i}).forEach(function(i){n[i.key]=r(i)}),n}function xt(e,t){e=e||{},t=t||{};function r(l){return l in t?t[l]:e[l]}var n=Object.create(null),i=[];for(var u in e)u in t?i.length&&(n[u]=i,i=[]):i.push(u);var a,o={};for(var s in t){if(n[s])for(a=0;a<n[s].length;a++){var c=n[s][a];o[n[s][a]]=r(c)}o[s]=r(s)}for(a=0;a<i.length;a++)o[i[a]]=r(i[a]);return o}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function Tt(e,t){return G(e.children,function(r){return d.exports.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function bt(e,t,r){var n=G(e.children),i=xt(t,n);return Object.keys(i).forEach(function(u){var a=i[u];if(!!d.exports.isValidElement(a)){var o=u in t,s=u in n,c=t[u],l=d.exports.isValidElement(c)&&!c.props.in;s&&(!o||l)?i[u]=d.exports.cloneElement(a,{onExited:r.bind(null,a),in:!0,exit:S(a,"exit",e),enter:S(a,"enter",e)}):!s&&o&&!l?i[u]=d.exports.cloneElement(a,{in:!1}):s&&o&&d.exports.isValidElement(c)&&(i[u]=d.exports.cloneElement(a,{onExited:r.bind(null,a),in:c.props.in,exit:S(a,"exit",e),enter:S(a,"enter",e)}))}}),i}var _t=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},yt={component:"div",childFactory:function(t){return t}},H=function(e){ee(t,e);function t(n,i){var u;u=e.call(this,n,i)||this;var a=u.handleExited.bind(Se(u));return u.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},u}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,u){var a=u.children,o=u.handleExited,s=u.firstRender;return{children:s?Tt(i,o):bt(i,a,o),firstRender:!1}},r.handleExited=function(i,u){var a=G(this.props.children);i.key in a||(i.props.onExited&&i.props.onExited(u),this.mounted&&this.setState(function(o){var s=Ee({},o.children);return delete s[i.key],{children:s}}))},r.render=function(){var i=this.props,u=i.component,a=i.childFactory,o=X(i,["component","childFactory"]),s=this.state.contextValue,c=_t(this.state.children).map(a);return delete o.appear,delete o.enter,delete o.exit,u===null?b(Q.Provider,{value:s,children:c}):b(Q.Provider,{value:s,children:b(u,{...o,children:c})})},t}(J.Component);H.propTypes={};H.defaultProps=yt;const Et=H,V=({text:e,show:t,autohide:r})=>b(Et,{children:t&&b(ht,{classNames:"SRC-card",timeout:r?{enter:500,exit:300}:{},children:b("div",{className:"SRC-modal",children:e})})}),B=()=>b(vt,{containerClassName:"SynapseToastContainer bootstrap-4-backport",position:"bottom-center",children:e=>b(Te,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})}),z=(e,t,r={})=>{const n=je("synToast-"),i=()=>{x.dismiss(n)},{title:u=void 0,primaryButtonConfig:a=void 0,secondaryButtonConfig:o=void 0,dismissOnPrimaryButtonClick:s=!1,dismissOnSecondaryButtonClick:c=!1}=r;if(a&&"onClick"in a&&s){const p=a.onClick;a.onClick=v=>{p(v),i()}}if(o&&"onClick"in o&&c){const p=o.onClick;o.onClick=v=>{p(v),i()}}let{autoCloseInMs:l=15e3}=r;l===0&&(l=1/0),x(b(ye,{isGlobal:!1,onClose:i,variant:t!=null?t:"info",show:!0,title:u,description:e,primaryButtonConfig:a,secondaryButtonConfig:o}),{id:n,className:"SynapseToastMessage",duration:l})};try{V.displayName="ToastMessage",V.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ToastMessage.tsx#ToastMessage"]={docgenInfo:V.__docgenInfo,name:"ToastMessage",path:"src/lib/containers/ToastMessage.tsx#ToastMessage"})}catch{}try{B.displayName="SynapseToastContainer",B.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ToastMessage.tsx#SynapseToastContainer"]={docgenInfo:B.__docgenInfo,name:"SynapseToastContainer",path:"src/lib/containers/ToastMessage.tsx#SynapseToastContainer"})}catch{}try{z.displayName="displayToast",z.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ToastMessage.tsx#displayToast"]={docgenInfo:z.__docgenInfo,name:"displayToast",path:"src/lib/containers/ToastMessage.tsx#displayToast"})}catch{}export{ht as C,B as S,V as T,Et as a,z as d};

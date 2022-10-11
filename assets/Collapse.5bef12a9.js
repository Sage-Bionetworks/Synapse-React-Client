import{j as f,r as d}from"./jsx-runtime.f6e67d69.js";import{c as tt}from"./createSvgIcon.1bc5e790.js";import{w as et,e as nt,a as it,b as rt,f as ot}from"./withStyles.e9153c6c.js";import{b as at,_ as st,g as L}from"./Tooltip.e69703f2.js";import{u as lt}from"./useTheme.b5d1a103.js";import{T as ct}from"./Transition.45107636.js";const gt=tt(f("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}));var dt=function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}},j=d.exports.forwardRef(function(e,A){var k=e.children,l=e.classes,F=e.className,p=e.collapsedHeight,C=e.collapsedSize,v=C===void 0?"0px":C,T=e.component,W=T===void 0?"div":T,w=e.disableStrictModeCompat,q=w===void 0?!1:w,S=e.in,b=e.onEnter,H=e.onEntered,_=e.onEntering,R=e.onExit,B=e.onExited,D=e.onExiting,g=e.style,z=e.timeout,a=z===void 0?nt.standard:z,M=e.TransitionComponent,G=M===void 0?ct:M,J=it(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),x=lt(),N=d.exports.useRef(),s=d.exports.useRef(null),E=d.exports.useRef(),m=typeof(p||v)=="number"?"".concat(p||v,"px"):p||v;d.exports.useEffect(function(){return function(){clearTimeout(N.current)}},[]);var h=x.unstable_strictMode&&!q,y=d.exports.useRef(null),K=at(A,h?y:void 0),c=function(n){return function(i,r){if(n){var o=h?[y.current,i]:[i,r],u=st(o,2),P=u[0],$=u[1];$===void 0?n(P):n(P,$)}}},Q=c(function(t,n){t.style.height=m,b&&b(t,n)}),U=c(function(t,n){var i=s.current?s.current.clientHeight:0,r=L({style:g,timeout:a},{mode:"enter"}),o=r.duration;if(a==="auto"){var u=x.transitions.getAutoHeightDuration(i);t.style.transitionDuration="".concat(u,"ms"),E.current=u}else t.style.transitionDuration=typeof o=="string"?o:"".concat(o,"ms");t.style.height="".concat(i,"px"),_&&_(t,n)}),V=c(function(t,n){t.style.height="auto",H&&H(t,n)}),X=c(function(t){var n=s.current?s.current.clientHeight:0;t.style.height="".concat(n,"px"),R&&R(t)}),Y=c(B),Z=c(function(t){var n=s.current?s.current.clientHeight:0,i=L({style:g,timeout:a},{mode:"exit"}),r=i.duration;if(a==="auto"){var o=x.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(o,"ms"),E.current=o}else t.style.transitionDuration=typeof r=="string"?r:"".concat(r,"ms");t.style.height=m,D&&D(t)}),O=function(n,i){var r=h?n:i;a==="auto"&&(N.current=setTimeout(r,E.current||0))};return f(G,{in:S,onEnter:Q,onEntered:V,onEntering:U,onExit:X,onExited:Y,onExiting:Z,addEndListener:O,nodeRef:h?y:void 0,timeout:a==="auto"?null:a,...J,children:function(t,n){return f(W,{className:rt(l.root,l.container,F,{entered:l.entered,exited:!S&&m==="0px"&&l.hidden}[t]),style:ot({minHeight:m},g),ref:K,...n,children:f("div",{className:l.wrapper,ref:s,children:f("div",{className:l.wrapperInner,children:k})})})}})});j.muiSupportAuto=!0;const xt=et(dt,{name:"MuiCollapse"})(j);export{xt as C,gt as a};

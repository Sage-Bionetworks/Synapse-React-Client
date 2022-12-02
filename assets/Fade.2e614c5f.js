import{h as A,_ as c}from"./styled.113fc281.js";import{r as l,j as W}from"./jsx-runtime.e72699d7.js";import{u as $}from"./useTheme.3c585c97.js";import{T as q,r as B,g as h}from"./Tooltip.626a672e.js";import{u as D}from"./TransitionGroupContext.2e90d9c8.js";const G=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],H={entering:{opacity:1},entered:{opacity:1}},J=l.exports.forwardRef(function(E,y){const e=$(),g={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:p,appear:T=!0,children:s,easing:f,in:u,onEnter:x,onEntered:L,onEntering:R,onExit:m,onExited:F,onExiting:P,style:a,timeout:d=g,TransitionComponent:w=q}=E,_=A(E,G),r=l.exports.useRef(null),j=D(r,s.ref,y),i=n=>t=>{if(n){const o=r.current;t===void 0?n(o):n(o,t)}},C=i(R),b=i((n,t)=>{B(n);const o=h({style:a,timeout:d,easing:f},{mode:"enter"});n.style.webkitTransition=e.transitions.create("opacity",o),n.style.transition=e.transitions.create("opacity",o),x&&x(n,t)}),k=i(L),v=i(P),S=i(n=>{const t=h({style:a,timeout:d,easing:f},{mode:"exit"});n.style.webkitTransition=e.transitions.create("opacity",t),n.style.transition=e.transitions.create("opacity",t),m&&m(n)}),z=i(F);return W(w,c({appear:T,in:u,nodeRef:r,onEnter:b,onEntered:k,onEntering:C,onExit:S,onExited:z,onExiting:v,addEndListener:n=>{p&&p(r.current,n)},timeout:d},_,{children:(n,t)=>l.exports.cloneElement(s,c({style:c({opacity:0,visibility:n==="exited"&&!u?"hidden":void 0},H[n],a,s.props.style),ref:j},t))}))}),X=J;export{X as F};

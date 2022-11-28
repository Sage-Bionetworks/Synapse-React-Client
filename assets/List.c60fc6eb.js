import{g as x,d as m,s as P,_ as r,D as b,e as h,h as L,i as $,j as C}from"./styled.b8cd841c.js";import{r as c,j as M,a as w}from"./jsx-runtime.0721b30f.js";function D(e){const a=e.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}function y(e){return x("MuiPaper",e)}m("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const N=["className","component","elevation","square","variant"],f=e=>{let a;return e<1?a=5.11916*e**2:a=4.5*Math.log(e+1)+2,(a/100).toFixed(2)},U=e=>{const{square:a,elevation:o,variant:t,classes:s}=e,n={root:["root",t,!a&&"rounded",t==="elevation"&&`elevation${o}`]};return C(n,y,s)},_=P("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(({theme:e,ownerState:a})=>{var o;return r({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},a.variant==="elevation"&&r({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${b("#fff",f(a.elevation))}, ${b("#fff",f(a.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[a.elevation]}))}),j=c.exports.forwardRef(function(a,o){const t=h({props:a,name:"MuiPaper"}),{className:s,component:n="div",elevation:l=1,square:i=!1,variant:v="elevation"}=t,u=L(t,N),d=r({},t,{component:n,elevation:l,square:i,variant:v}),p=U(d);return M(_,r({as:n,ownerState:d,className:$(p.root,s),ref:o},u))}),E=j,k=c.exports.createContext({}),q=k;function W(e){return x("MuiList",e)}m("MuiList",["root","padding","dense","subheader"]);const S=["children","className","component","dense","disablePadding","subheader"],T=e=>{const{classes:a,disablePadding:o,dense:t,subheader:s}=e;return C({root:["root",!o&&"padding",t&&"dense",s&&"subheader"]},W,a)},I=P("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,!o.disablePadding&&a.padding,o.dense&&a.dense,o.subheader&&a.subheader]}})(({ownerState:e})=>r({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),z=c.exports.forwardRef(function(a,o){const t=h({props:a,name:"MuiList"}),{children:s,className:n,component:l="ul",dense:i=!1,disablePadding:v=!1,subheader:u}=t,d=L(t,S),p=c.exports.useMemo(()=>({dense:i}),[i]),g=r({},t,{component:l,dense:i,disablePadding:v}),R=T(g);return M(q.Provider,{value:p,children:w(I,r({as:l,className:$(R.root,n),ref:o,ownerState:g},d,{children:[u,s]}))})}),F=z;export{F as L,E as P,q as a,D as g};

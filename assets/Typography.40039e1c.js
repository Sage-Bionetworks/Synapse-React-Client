import{l as T,m as h,p as B,n as W,g as C,d as j,s as M,o as f,_ as p,e as _,h as $,i as R,j as U}from"./styled.20fad266.js";import{r as A,j as L}from"./jsx-runtime.34ce7573.js";const N=["sx"],O=r=>{const t={systemProps:{},otherProps:{}};return Object.keys(r).forEach(o=>{B[o]?t.systemProps[o]=r[o]:t.otherProps[o]=r[o]}),t};function S(r){const{sx:t}=r,o=T(r,N),{systemProps:e,otherProps:n}=O(o);let a;return Array.isArray(t)?a=[e,...t]:typeof t=="function"?a=(...i)=>{const s=t(...i);return W(s)?h({},e,s):e}:a=h({},e,t),h({},n,{sx:a})}function k(r){return C("MuiTypography",r)}j("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const w=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],z=r=>{const{align:t,gutterBottom:o,noWrap:e,paragraph:n,variant:a,classes:i}=r,s={root:["root",a,r.align!=="inherit"&&`align${f(t)}`,o&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return U(s,k,i)},D=M("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:o}=r;return[t.root,o.variant&&t[o.variant],o.align!=="inherit"&&t[`align${f(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})(({theme:r,ownerState:t})=>p({margin:0},t.variant&&r.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},E={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},F=r=>E[r]||r,J=A.exports.forwardRef(function(t,o){const e=_({props:t,name:"MuiTypography"}),n=F(e.color),a=S(p({},e,{color:n})),{align:i="inherit",className:s,component:c,gutterBottom:d=!1,noWrap:x=!1,paragraph:g=!1,variant:l="body1",variantMapping:m=u}=a,b=$(a,w),y=p({},a,{align:i,color:n,className:s,component:c,gutterBottom:d,noWrap:x,paragraph:g,variant:l,variantMapping:m}),v=c||(g?"p":m[l]||u[l])||"span",P=z(y);return L(D,p({as:v,ref:o,ownerState:y,className:R(P.root,s)},b))}),G=J;export{G as T};

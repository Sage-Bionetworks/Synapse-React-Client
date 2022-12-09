import{s as g,e as y,h as x,_ as m,i as k,j as T,L as f,M as d,N as j,O as R,P as V,Q as b}from"./styled.76b26431.js";import{r as p,j as v}from"./jsx-runtime.43a8fcf9.js";import{b as P,g as C}from"./DialogContent.9e5ac9cc.js";import{T as S,e as B}from"./Typography.1c91c940.js";const M=["className","id"],_=e=>{const{classes:o}=e;return T({root:["root"]},C,o)},$=g(S,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),N=p.exports.forwardRef(function(o,t){const r=y({props:o,name:"MuiDialogTitle"}),{className:a,id:n}=r,c=x(r,M),l=r,i=_(l),{titleId:s=n}=p.exports.useContext(P);return v($,m({component:"h2",className:k(i.root,a),ownerState:l,ref:t,variant:"h6",id:s},c))}),q=N,O=["component","direction","spacing","divider","children"];function F(e,o){const t=p.exports.Children.toArray(e).filter(Boolean);return t.reduce((r,a,n)=>(r.push(a),n<t.length-1&&r.push(p.exports.cloneElement(o,{key:`separator-${n}`})),r),[])}const L=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],U=({ownerState:e,theme:o})=>{let t=m({display:"flex",flexDirection:"column"},f({theme:o},d({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=j(o),a=Object.keys(o.breakpoints.values).reduce((i,s)=>((typeof e.spacing=="object"&&e.spacing[s]!=null||typeof e.direction=="object"&&e.direction[s]!=null)&&(i[s]=!0),i),{}),n=d({values:e.direction,base:a}),c=d({values:e.spacing,base:a});typeof n=="object"&&Object.keys(n).forEach((i,s,u)=>{if(!n[i]){const D=s>0?n[u[s-1]]:"column";n[i]=D}}),t=R(t,f({theme:o},c,(i,s)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${L(s?n[s]:e.direction)}`]:b(r,i)}})))}return t=V(o.breakpoints,t),t},A=g("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>[o.root]})(U),E=p.exports.forwardRef(function(o,t){const r=y({props:o,name:"MuiStack"}),a=B(r),{component:n="div",direction:c="column",spacing:l=0,divider:i,children:s}=a,u=x(a,O);return v(A,m({as:n,ownerState:{direction:c,spacing:l},ref:t},u,{children:i?F(s,i):s}))}),z=E;export{q as D,z as S};

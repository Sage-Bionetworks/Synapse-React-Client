import{t as L,a as x}from"./uniqueId.f1f42f72.js";import{g as y,b as A}from"./_baseClone.801a028e.js";import{b as F}from"./_baseSlice.50189bc5.js";import{bE as E,bq as C,bF as T,bG as w,bH as N,bI as I,bJ as M,bK as $,bk as h,bL as G}from"./index.65b6889e.js";import{e as g,S as _}from"./isArray.88d141d1.js";import{i as P}from"./isSymbol.29619e0a.js";import{a as R}from"./_getTag.491e79d0.js";var b=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K=/^\w*$/;function z(n,r){if(g(n))return!1;var e=typeof n;return e=="number"||e=="symbol"||e=="boolean"||n==null||P(n)?!0:K.test(n)||!b.test(n)||r!=null&&n in Object(r)}var D="Expected a function";function d(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new TypeError(D);var e=function(){var t=arguments,i=r?r.apply(this,t):t[0],s=e.cache;if(s.has(i))return s.get(i);var a=n.apply(this,t);return e.cache=s.set(i,a)||s,a};return e.cache=new(d.Cache||E),e}d.Cache=E;var B=500;function H(n){var r=d(n,function(t){return e.size===B&&e.clear(),t}),e=r.cache;return r}var U=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,X=/\\(\\)?/g,Y=H(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(U,function(e,t,i,s){r.push(i?s.replace(X,"$1"):t||e)}),r});const Z=Y;function l(n,r){return g(n)?n:z(n,r)?[n]:Z(L(n))}var q=1/0;function c(n){if(typeof n=="string"||P(n))return n;var r=n+"";return r=="0"&&1/n==-q?"-0":r}function O(n,r){r=l(r,n);for(var e=0,t=r.length;n!=null&&e<t;)n=n[c(r[e++])];return e&&e==t?n:void 0}var p=_?_.isConcatSpreadable:void 0;function J(n){return g(n)||C(n)||!!(p&&n&&n[p])}function v(n,r,e,t,i){var s=-1,a=n.length;for(e||(e=J),i||(i=[]);++s<a;){var f=n[s];r>0&&e(f)?r>1?v(f,r-1,e,t,i):R(i,f):t||(i[i.length]=f)}return i}function k(n){var r=n==null?0:n.length;return r?v(n,1):[]}function S(n){return T(w(n,void 0,k),n+"")}function Q(n,r){return n!=null&&r in Object(n)}function W(n,r,e){r=l(r,n);for(var t=-1,i=r.length,s=!1;++t<i;){var a=c(r[t]);if(!(s=n!=null&&e(n,a)))break;n=n[a]}return s||++t!=i?s:(i=n==null?0:n.length,!!i&&N(i)&&I(a,i)&&(g(n)||C(n)))}function V(n,r){return n!=null&&W(n,r,Q)}function j(n){var r=n==null?0:n.length;return r?n[r-1]:void 0}function nn(n,r){return r.length<2?n:O(n,F(r,0,-1))}function rn(n,r){return r=l(r,n),n=nn(n,r),n==null||delete n[c(j(r))]}function en(n){return M(n)?void 0:n}var tn=1,sn=2,an=4,fn=S(function(n,r){var e={};if(n==null)return e;var t=!1;r=x(r,function(s){return s=l(s,n),t||(t=s.length>1),s}),$(n,y(n),e),t&&(e=A(e,tn|sn|an,en));for(var i=r.length;i--;)rn(e,r[i]);return e});const Cn=fn;function un(n,r,e,t){if(!h(n))return n;r=l(r,n);for(var i=-1,s=r.length,a=s-1,f=n;f!=null&&++i<s;){var u=c(r[i]),o=e;if(u==="__proto__"||u==="constructor"||u==="prototype")return n;if(i!=a){var m=f[u];o=t?t(m,u,f):void 0,o===void 0&&(o=h(m)?m:I(r[i+1])?[]:{})}G(f,u,o),f=f[u]}return n}function ln(n,r,e){for(var t=-1,i=r.length,s={};++t<i;){var a=r[t],f=O(n,a);e(f,a)&&un(s,l(a,n),f)}return s}function on(n,r){return ln(n,r,function(e,t){return V(n,t)})}var gn=S(function(n,r){return n==null?{}:on(n,r)});const In=gn;export{In as _,v as a,O as b,ln as c,W as d,l as e,S as f,rn as g,V as h,z as i,un as j,k,j as l,d as m,Cn as o,nn as p,Z as s,c as t};

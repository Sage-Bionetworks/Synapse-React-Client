import{b as S}from"./_baseSlice.50189bc5.js";import{br as g}from"./EntityTypeUtils.9c2483b3.js";import{t as p}from"./toInteger.ae0f3fd8.js";import{S as v,c as w}from"./_cacheHas.64f4d1a5.js";import{a as b,c as x}from"./without.f73f20c7.js";import{S as u}from"./_Set.dd15e3a3.js";import{s as I}from"./_setToArray.a82100c8.js";function A(){}var C=Math.ceil,M=Math.max;function L(n,e,s){(s?g(n,e,s):e===void 0)?e=1:e=M(p(e),0);var f=n==null?0:n.length;if(!f||e<1)return[];for(var t=0,a=0,l=Array(C(f/e));t<f;)l[a++]=S(n,t,t+=e);return l}var R=1/0,q=u&&1/I(new u([,-0]))[1]==R?function(n){return new u(n)}:A;const E=q;var N=200;function T(n,e,s){var f=-1,t=b,a=n.length,l=!0,h=[],r=h;if(s)l=!1,t=x;else if(a>=N){var c=e?null:E(n);if(c)return I(c);l=!1,t=w,r=new v}else r=e?[]:h;n:for(;++f<a;){var i=n[f],o=e?e(i):i;if(i=s||i!==0?i:0,l&&o===o){for(var m=r.length;m--;)if(r[m]===o)continue n;e&&r.push(o),h.push(i)}else t(r,o,s)||(r!==h&&r.push(o),h.push(i))}return h}function U(n){return n&&n.length?T(n):[]}export{T as b,L as c,A as n,U as u};

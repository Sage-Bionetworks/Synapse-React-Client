import{b as S}from"./_baseSlice.50189bc5.js";import{bi as b}from"./index.68699958.js";import{t as g}from"./toInteger.e9d9a3f9.js";import{S as p,c as v}from"./_cacheHas.76528ad6.js";import{a as w,b as x}from"./without.3d9e3582.js";import{S as u}from"./_Set.24c716a1.js";import{s as I}from"./_setToArray.a82100c8.js";function A(){}var C=Math.ceil,M=Math.max;function L(n,e,s){(s?b(n,e,s):e===void 0)?e=1:e=M(g(e),0);var f=n==null?0:n.length;if(!f||e<1)return[];for(var i=0,a=0,l=Array(C(f/e));i<f;)l[a++]=S(n,i,i+=e);return l}var R=1/0,q=u&&1/I(new u([,-0]))[1]==R?function(n){return new u(n)}:A;const E=q;var N=200;function T(n,e,s){var f=-1,i=w,a=n.length,l=!0,h=[],t=h;if(s)l=!1,i=x;else if(a>=N){var c=e?null:E(n);if(c)return I(c);l=!1,i=v,t=new p}else t=e?[]:h;n:for(;++f<a;){var r=n[f],o=e?e(r):r;if(r=s||r!==0?r:0,l&&o===o){for(var m=t.length;m--;)if(t[m]===o)continue n;e&&t.push(o),h.push(r)}else i(t,o,s)||(t!==h&&t.push(o),h.push(r))}return h}function U(n){return n&&n.length?T(n):[]}export{T as b,L as c,A as n,U as u};

import{J as g,K as m,L as o}from"./index.463f1f6b.js";import{t as v}from"./toInteger.336e2d45.js";import{S as w,c as x}from"./_cacheHas.1ddf830a.js";import{a as A,b}from"./_baseDifference.6d663b75.js";import{s as S}from"./_setToArray.a82100c8.js";function p(){}var C=Math.ceil,M=Math.max;function F(n,e,r){(r?g(n,e,r):e===void 0)?e=1:e=M(v(e),0);var f=n==null?0:n.length;if(!f||e<1)return[];for(var t=0,u=0,l=Array(C(f/e));t<f;)l[u++]=m(n,t,t+=e);return l}var R=1/0,q=o&&1/S(new o([,-0]))[1]==R?function(n){return new o(n)}:p;const E=q;var L=200;function N(n,e,r){var f=-1,t=A,u=n.length,l=!0,h=[],s=h;if(r)l=!1,t=b;else if(u>=L){var c=e?null:E(n);if(c)return S(c);l=!1,t=x,s=new w}else s=e?[]:h;n:for(;++f<u;){var i=n[f],a=e?e(i):i;if(i=r||i!==0?i:0,l&&a===a){for(var I=s.length;I--;)if(s[I]===a)continue n;e&&s.push(a),h.push(i)}else t(s,a,r)||(s!==h&&s.push(a),h.push(i))}return h}function G(n){return n&&n.length?N(n):[]}export{N as b,F as c,p as n,G as u};

import{ba as s,bM as f}from"./index.05d3527e.js";import{t as m}from"./toInteger.6147b6bf.js";function u(t){return typeof t=="function"?t:s}var c=9007199254740991,i=4294967295,e=Math.min;function M(t,r){if(t=m(t),t<1||t>c)return[];var n=i,a=e(t,i);r=u(r),t-=i;for(var o=f(a,r);++n<t;)r(n);return o}export{u as c,M as t};

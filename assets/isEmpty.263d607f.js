import{ap as w,aq as R,ar as _,as as C,at as p,au as L,av as c,aw as F,ax as I}from"./index.3643f9f4.js";import{b as A}from"./isEqual.4273d607.js";import{k as b,g as T,b as x}from"./_getTag.0d376f55.js";import{b as O,i as d,t as E,h as D}from"./pick.daf39fc4.js";import{e as P}from"./isArray.7423227f.js";function G(r,n,t){var e=r==null?void 0:O(r,n);return e===void 0?t:e}var S=1,K=2;function $(r,n,t,e){var i=t.length,s=i,a=!e;if(r==null)return!s;for(r=Object(r);i--;){var f=t[i];if(a&&f[2]?f[1]!==r[f[0]]:!(f[0]in r))return!1}for(;++i<s;){f=t[i];var u=f[0],o=r[u],g=f[1];if(a&&f[2]){if(o===void 0&&!(u in r))return!1}else{var h=new w;if(e)var y=e(o,g,u,r,n,h);if(!(y===void 0?A(g,o,S|K,e,h):y))return!1}}return!0}function m(r){return r===r&&!R(r)}function q(r){for(var n=b(r),t=n.length;t--;){var e=n[t],i=r[e];n[t]=[e,i,m(i)]}return n}function M(r,n){return function(t){return t==null?!1:t[r]===n&&(n!==void 0||r in Object(t))}}function B(r){var n=q(r);return n.length==1&&n[0][2]?M(n[0][0],n[0][1]):function(t){return t===r||$(t,r,n)}}var N=1,U=2;function k(r,n){return d(r)&&m(n)?M(E(r),n):function(t){var e=G(t,r);return e===void 0&&e===n?D(t,r):A(n,e,N|U)}}function H(r){return function(n){return n==null?void 0:n[r]}}function J(r){return function(n){return O(n,r)}}function Q(r){return d(r)?H(E(r)):J(r)}function ir(r){return typeof r=="function"?r:r==null?_:typeof r=="object"?P(r)?k(r[0],r[1]):B(r):Q(r)}function W(r,n){return r&&C(r,n,b)}function X(r,n){return function(t,e){if(t==null)return t;if(!p(t))return r(t,e);for(var i=t.length,s=n?i:-1,a=Object(t);(n?s--:++s<i)&&e(a[s],s,a)!==!1;);return t}}var Y=X(W);const Z=Y;function sr(r,n){var t=-1,e=p(r)?Array(r.length):[];return Z(r,function(i,s,a){e[++t]=n(i,s,a)}),e}var z="[object Map]",l="[object Set]",v=Object.prototype,j=v.hasOwnProperty;function fr(r){if(r==null)return!0;if(p(r)&&(P(r)||typeof r=="string"||typeof r.splice=="function"||L(r)||c(r)||F(r)))return!r.length;var n=T(r);if(n==z||n==l)return!r.size;if(I(r))return!x(r).length;for(var t in r)if(j.call(r,t))return!1;return!0}export{sr as a,ir as b,Z as c,X as d,W as e,$ as f,G as g,q as h,fr as i,B as j,k,H as l,Q as p};

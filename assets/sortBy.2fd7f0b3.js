import{bu as M,aS as m,aQ as C,N as w,J as t,bM as A}from"./index.0378956d.js";import{g as B,h as b,e as k}from"./toString.d84aaeca.js";import{b as F,c as G}from"./_baseMap.f49b5851.js";function J(r,n){var i=r.length;for(r.sort(n);i--;)r[i]=r[i].value;return r}function L(r,n){if(r!==n){var i=r!==void 0,c=r===null,a=r===r,u=B(r),f=n!==void 0,p=n===null,g=n===n,d=B(n);if(!p&&!d&&!u&&r>n||u&&f&&g&&!p&&!d||c&&f&&g||!i&&g||!a)return 1;if(!c&&!u&&!d&&r<n||d&&i&&a&&!c&&!u||p&&i&&a||!f&&a||!g)return-1}return 0}function O(r,n,i){for(var c=-1,a=r.criteria,u=n.criteria,f=a.length,p=i.length;++c<f;){var g=L(a[c],u[c]);if(g){if(c>=p)return g;var d=i[c];return g*(d=="desc"?-1:1)}}return r.index-n.index}function Q(r,n,i){n.length?n=b(n,function(u){return k(u)?function(f){return M(f,u.length===1?u[0]:u)}:u}):n=[m];var c=-1;n=b(n,C(F));var a=G(r,function(u,f,p){var g=b(n,function(d){return d(u)});return{criteria:g,index:++c,value:u}});return J(a,function(u,f){return O(u,f,i)})}var U=w(function(r,n){if(r==null)return[];var i=n.length;return i>1&&t(r,n[0],n[1])?n=[]:i>2&&t(n[0],n[1],n[2])&&(n=[n[0]]),Q(r,A(n,1),[])});const q=U;export{Q as b,L as c,q as s};

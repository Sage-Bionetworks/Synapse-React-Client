import{x as F,y as x,z as D,A as E,B as H}from"./index.0a2c4939.js";import{S as K,c as J}from"./_cacheHas.f9705cd4.js";import{S as I,e as M,i as $}from"./isArray.24130e12.js";import{s as Q}from"./_setToArray.a82100c8.js";import{g as B,a as G}from"./_getTag.416f77c8.js";function X(n,e){for(var a=-1,f=n==null?0:n.length;++a<f;)if(e(n[a],a,n))return!0;return!1}var Y=1,Z=2;function q(n,e,a,f,g,r){var s=a&Y,u=n.length,l=e.length;if(u!=l&&!(s&&l>u))return!1;var A=r.get(n),t=r.get(e);if(A&&t)return A==e&&t==n;var v=-1,i=!0,O=a&Z?new K:void 0;for(r.set(n,e),r.set(e,n);++v<u;){var p=n[v],T=e[v];if(f)var d=s?f(T,p,v,e,n,r):f(p,T,v,n,e,r);if(d!==void 0){if(d)continue;i=!1;break}if(O){if(!X(e,function(P,_){if(!J(O,_)&&(p===P||g(p,P,a,f,r)))return O.push(_)})){i=!1;break}}else if(!(p===T||g(p,T,a,f,r))){i=!1;break}}return r.delete(n),r.delete(e),i}function W(n){var e=-1,a=Array(n.size);return n.forEach(function(f,g){a[++e]=[g,f]}),a}var z=1,c=2,j="[object Boolean]",V="[object Date]",o="[object Error]",h="[object Map]",k="[object Number]",nn="[object RegExp]",en="[object Set]",rn="[object String]",fn="[object Symbol]",an="[object ArrayBuffer]",sn="[object DataView]",m=I?I.prototype:void 0,R=m?m.valueOf:void 0;function gn(n,e,a,f,g,r,s){switch(a){case sn:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case an:return!(n.byteLength!=e.byteLength||!r(new x(n),new x(e)));case j:case V:case k:return F(+n,+e);case o:return n.name==e.name&&n.message==e.message;case nn:case rn:return n==e+"";case h:var u=W;case en:var l=f&z;if(u||(u=Q),n.size!=e.size&&!l)return!1;var A=s.get(n);if(A)return A==e;f|=c,s.set(n,e);var t=q(u(n),u(e),f,g,r,s);return s.delete(n),t;case fn:if(R)return R.call(n)==R.call(e)}return!1}var ln=1,un=Object.prototype,An=un.hasOwnProperty;function vn(n,e,a,f,g,r){var s=a&ln,u=B(n),l=u.length,A=B(e),t=A.length;if(l!=t&&!s)return!1;for(var v=l;v--;){var i=u[v];if(!(s?i in e:An.call(e,i)))return!1}var O=r.get(n),p=r.get(e);if(O&&p)return O==e&&p==n;var T=!0;r.set(n,e),r.set(e,n);for(var d=s;++v<l;){i=u[v];var P=n[i],_=e[i];if(f)var S=s?f(_,P,i,e,n,r):f(P,_,i,n,e,r);if(!(S===void 0?P===_||g(P,_,a,f,r):S)){T=!1;break}d||(d=i=="constructor")}if(T&&!d){var w=n.constructor,L=e.constructor;w!=L&&"constructor"in n&&"constructor"in e&&!(typeof w=="function"&&w instanceof w&&typeof L=="function"&&L instanceof L)&&(T=!1)}return r.delete(n),r.delete(e),T}var pn=1,N="[object Arguments]",U="[object Array]",y="[object Object]",Tn=Object.prototype,b=Tn.hasOwnProperty;function tn(n,e,a,f,g,r){var s=M(n),u=M(e),l=s?U:G(n),A=u?U:G(e);l=l==N?y:l,A=A==N?y:A;var t=l==y,v=A==y,i=l==A;if(i&&D(n)){if(!D(e))return!1;s=!0,t=!1}if(i&&!t)return r||(r=new E),s||H(n)?q(n,e,a,f,g,r):gn(n,e,l,a,f,g,r);if(!(a&pn)){var O=t&&b.call(n,"__wrapped__"),p=v&&b.call(e,"__wrapped__");if(O||p){var T=O?n.value():n,d=p?e.value():e;return r||(r=new E),g(T,d,a,f,r)}}return i?(r||(r=new E),vn(n,e,a,f,g,r)):!1}function C(n,e,a,f,g){return n===e?!0:n==null||e==null||!$(n)&&!$(e)?n!==n&&e!==e:tn(n,e,a,f,C,g)}function Ln(n,e){return C(n,e)}export{X as a,C as b,Ln as i,W as m};

import{r as l,R as j,j as E}from"./jsx-runtime.f2f98a5a.js";import{_ as C,u as O}from"./Button.498cd291.js";import{c as L}from"./index.57d09176.js";function g(){return g=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},g.apply(this,arguments)}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}function h(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,o;for(o=0;o<t.length;o++)a=t[o],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}function P(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function S(e){var r=R(e,"string");return typeof r=="symbol"?r:String(r)}function R(e,r){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,r||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function U(e,r,n){var t=l.exports.useRef(e!==void 0),a=l.exports.useState(r),o=a[0],u=a[1],s=e!==void 0,i=t.current;return t.current=s,!s&&i&&o!==r&&u(r),[s?e:o,l.exports.useCallback(function(v){for(var f=arguments.length,p=new Array(f>1?f-1:0),c=1;c<f;c++)p[c-1]=arguments[c];n&&n.apply(void 0,[v].concat(p)),u(v)},[n])]}function F(e,r){return Object.keys(r).reduce(function(n,t){var a,o=n,u=o[P(t)],s=o[t],i=h(o,[P(t),t].map(S)),v=r[t],f=U(s,u,e[v]),p=f[0],c=f[1];return d({},i,(a={},a[t]=p,a[v]=c,a))},e)}function G(e){return e&&e.ownerDocument||document}const $=!!(typeof window<"u"&&window.document&&window.document.createElement);var b=!1,y=!1;try{var m={get passive(){return b=!0},get once(){return y=b=!0}};$&&(window.addEventListener("test",m,m),window.removeEventListener("test",m,!0))}catch{}function B(e,r,n,t){if(t&&typeof t!="boolean"&&!y){var a=t.once,o=t.capture,u=n;!y&&a&&(u=n.__once||function s(i){this.removeEventListener(r,s,o),n.call(this,i)},n.__once=u),e.addEventListener(r,u,b?t:o)}e.addEventListener(r,n,t)}function D(e,r,n,t){var a=t&&typeof t!="boolean"?t.capture:t;e.removeEventListener(r,n,a),n.__once&&e.removeEventListener(r,n.__once,a)}function H(e,r,n,t){return B(e,r,n,t),function(){D(e,r,n,t)}}function K(e){var r=l.exports.useRef(e);return l.exports.useEffect(function(){r.current=e},[e]),r}function I(e){var r=K(e);return l.exports.useCallback(function(){return r.current&&r.current.apply(r,arguments)},[r])}var W=/-(.)/g;function A(e){return e.replace(W,function(r,n){return n.toUpperCase()})}var T=["className","bsPrefix","as"],z=function(r){return r[0].toUpperCase()+A(r).slice(1)};function J(e,r){var n=r===void 0?{}:r,t=n.displayName,a=t===void 0?z(e):t,o=n.Component,u=n.defaultProps,s=j.forwardRef(function(i,v){var f=i.className,p=i.bsPrefix,c=i.as,w=c===void 0?o||"div":c,x=C(i,T),_=O(p,e);return E(w,{ref:v,className:L(f,_),...x})});return s.defaultProps=u,s.displayName=a,s}export{g as _,I as a,$ as b,J as c,B as d,U as e,H as l,G as o,D as r,F as u};

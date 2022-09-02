var n={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=window.React,u=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,x=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,p){var r,o={},_=null,f=null;p!==void 0&&(_=""+p),e.key!==void 0&&(_=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)c.call(e,r)&&!m.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:u,type:t,key:_,ref:f,props:o,_owner:x.current}}s.Fragment=a;s.jsx=l;s.jsxs=l;(function(t){t.exports=s})(n);const y=n.exports.Fragment,j=n.exports.jsx,d=n.exports.jsxs,O=Object.freeze(Object.defineProperty({__proto__:null,Fragment:y,jsx:j,jsxs:d},Symbol.toStringTag,{value:"Module"}));export{y as F,d as a,O as b,j};

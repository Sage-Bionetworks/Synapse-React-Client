var s={exports:{}},t={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=window.React,l=60103;t.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var p=Symbol.for;l=p("react.element"),t.Fragment=p("react.fragment")}var x=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m=Object.prototype.hasOwnProperty,y={key:!0,ref:!0,__self:!0,__source:!0};function i(o,e,a){var r,n={},_=null,f=null;a!==void 0&&(_=""+a),e.key!==void 0&&(_=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)m.call(e,r)&&!y.hasOwnProperty(r)&&(n[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:l,type:o,key:_,ref:f,props:n,_owner:x.current}}t.jsx=i;t.jsxs=i;s.exports=t;const c=s.exports.jsx,j=s.exports.jsxs,v=s.exports.Fragment;var d=Object.freeze(Object.defineProperty({__proto__:null,jsx:c,jsxs:j,Fragment:v},Symbol.toStringTag,{value:"Module"}));export{v as F,j as a,d as b,c as j};
//# sourceMappingURL=jsx-runtime.2e925369.js.map

import{b as o}from"./isEmpty.26f1ae05.js";import{a as u,t as e}from"./uniqueId.f1f42f72.js";import{c as i}from"./pick.68578698.js";import{g as f}from"./_baseClone.801a028e.js";var l="Expected a function";function c(r){if(typeof r!="function")throw new TypeError(l);return function(){var t=arguments;switch(t.length){case 0:return!r.call(this);case 1:return!r.call(this,t[0]);case 2:return!r.call(this,t[0],t[1]);case 3:return!r.call(this,t[0],t[1],t[2])}return!r.apply(this,t)}}function m(r,t){if(r==null)return{};var a=u(f(r),function(n){return[n]});return t=o(t),i(r,a,function(n,s){return t(n,s[0])})}function w(r,t){return m(r,c(o(t)))}function E(r){return e(r).toLowerCase()}export{c as n,w as o,m as p,E as t};

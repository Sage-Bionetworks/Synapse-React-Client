import{aR as i}from"./index.0378956d.js";import{g as f}from"./toString.d84aaeca.js";var o=/\s/;function c(r){for(var t=r.length;t--&&o.test(r.charAt(t)););return t}var m=/^\s+/;function I(r){return r&&r.slice(0,c(r)+1).replace(m,"")}var s=0/0,a=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,d=parseInt;function y(r){if(typeof r=="number")return r;if(f(r))return s;if(i(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=i(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=I(r);var n=p.test(r);return n||b.test(r)?d(r.slice(2),n?2:8):a.test(r)?s:+r}var e=1/0,N=17976931348623157e292;function x(r){if(!r)return r===0?r:0;if(r=y(r),r===e||r===-e){var t=r<0?-1:1;return t*N}return r===r?r:0}function A(r){var t=x(r),n=t%1;return t===t?n?t-n:t:0}export{y as a,x as b,I as c,c as d,A as t};

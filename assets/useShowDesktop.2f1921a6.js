import{r}from"./jsx-runtime.9b9f5ec2.js";const d=768;function u(e){let t=e!=null?e:d;const[s,i]=r.exports.useState(window.innerWidth>t);return r.exports.useEffect(()=>{const n=()=>{const o=window.innerWidth>t;o!==s&&i(o)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),s}export{u};

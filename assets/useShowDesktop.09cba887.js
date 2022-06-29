const i=window.React.useEffect,d=window.React.useState,u=768;function c(e){let t=e!=null?e:u;const[s,w]=d(window.innerWidth>t);return i(()=>{const n=()=>{const o=window.innerWidth>t;o!==s&&w(o)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),s}export{c as u};
//# sourceMappingURL=useShowDesktop.09cba887.js.map

import{aZ as o,w as n,bn as r,W as u}from"./index.e11c74d0.js";function f(e){const{accessToken:s}=n();return o(["favorites"],()=>r(s),e)}function I(e){const{accessToken:a}=n();return u(["favorites","infinite"],async t=>r(a,t.pageParam,10),{...e,getNextPageParam:(t,i)=>{if(t.results.length>0)return i.length*10}})}export{f as a,I as u};
//# sourceMappingURL=useFavorites.c9cf8dc3.js.map

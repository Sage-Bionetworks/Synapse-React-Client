import{H as i,t as n,bo as r,K as u}from"./index.e2be9f80.js";function f(e){const{accessToken:s}=n();return i(["favorites"],()=>r(s),e)}function I(e){const{accessToken:a}=n();return u(["favorites","infinite"],async t=>r(a,t.pageParam,10),{...e,getNextPageParam:(t,o)=>{if(t.results.length>0)return o.length*10}})}export{f as a,I as u};
//# sourceMappingURL=useFavorites.ee04e752.js.map

import{a4 as n,a6 as r,bI as o,c9 as m,ca as f,aP as y,cb as k,cc as A,cd as R}from"./index.6e226ad1.js";import{u as g}from"./useMutation.ac2022a1.js";import{u as q}from"./useInfiniteQuery.c55a2f77.js";import{e as P}from"./queryKeys.e0d3085f.js";const a="accessRequirement";function S(e,c){const{accessToken:s}=n();return r([a,e],()=>f(s,e),c)}function E(e,c){const{accessToken:s}=n();return r([a,e,"wikiPageKey"],()=>y(s,e),c)}function K(e,c){const{accessToken:s}=n();return r([a,e,"acl"],()=>k(s,e),c)}function x(e,c){const{accessToken:s}=n();return q([a,"search",e],async t=>await R(s,{...e,nextPageToken:t.pageParam}),{...c,getNextPageParam:t=>t.nextPageToken})}function I(e,c){const{accessToken:s}=n();return r([a,"restrictionInformation",e],()=>A(e,s),c)}function w(e){const{accessToken:c}=n(),s=o();return g({...e,mutationFn:t=>m(t,c),mutationKey:["createLockAccessRequirement"],onSuccess:async(t,u,i)=>{if(await s.invalidateQueries([a]),await s.invalidateQueries(P.all),e!=null&&e.onSuccess)return e.onSuccess(t,u,i)}})}export{w as a,S as b,x as c,K as d,E as e,I as u};

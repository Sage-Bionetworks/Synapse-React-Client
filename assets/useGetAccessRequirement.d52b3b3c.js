import{h as c,k as t,c9 as r,ca as i,cb as o,cc as u,_ as m}from"./index.68699958.js";import{u as f}from"./useInfiniteQuery.44a5eea1.js";function R(e,s){const{accessToken:n}=c();return t(["accessRequirement",e],()=>r(n,e),s)}function A(e,s){const{accessToken:n}=c();return t(["accessRequirement",e,"wikiPageKey"],()=>m(n,e),s)}function q(e,s){const{accessToken:n}=c();return t(["accessRequirement",e,"acl"],()=>o(n,e),s)}function y(e,s){const{accessToken:n}=c();return f(["accessRequirement","search",e],async a=>await u(n,{...e,nextPageToken:a.pageParam}),{...s,getNextPageParam:a=>a.nextPageToken})}function P(e,s){const{accessToken:n}=c();return t(["restrictionInformation",e],()=>i(e,n),s)}export{R as a,y as b,q as c,A as d,P as u};

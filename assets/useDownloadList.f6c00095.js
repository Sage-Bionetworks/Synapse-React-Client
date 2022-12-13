import{V as r,X as c,bG as l,bH as d,bI as g,aR as b,bJ as f}from"./EntityTypeUtils.9c2483b3.js";import{u as w}from"./useMutation.ce8e7b55.js";import{u}from"./useInfiniteQuery.10e21598.js";const a={base:["downloadList"],availableFiles:e=>[...a.base,"availableFiles",e],availableFilesInfinite:e=>[...a.availableFiles(e),"infinite"],getActionsRequired:()=>[...a.base,"actionsRequired"],getActionsRequiredInfinite:()=>[...a.getActionsRequired(),"infinite"],getStatistics:()=>[...a.base,"statistics"]};function q(e,i,n){const{accessToken:t}=r(),s={concreteType:"org.sagebionetworks.repo.model.download.AvailableFilesRequest"};return e&&(s.sort=[e]),i&&(s.filter=i),u(a.availableFilesInfinite(s),async o=>d({...s,nextPageToken:o.pageParam},t),{...n,getNextPageParam:o=>o.nextPageToken})}function F(e){const{accessToken:i}=r(),n={concreteType:"org.sagebionetworks.repo.model.download.ActionRequiredRequest"};return u(a.getActionsRequiredInfinite(),async t=>await g({...n,nextPageToken:t.pageParam},i),{...e,getNextPageParam:t=>t.nextPageToken})}function A(e){const{accessToken:i}=r();return c(a.getStatistics(),()=>l(i),e)}function R(e){const{accessToken:i}=r(),n=b();return w({...e,mutationFn:t=>f(t.entityId,t.entityVersionNumber,i),mutationKey:["addFileToDownloadList"],onSuccess:async(t,s,o)=>{if(await n.invalidateQueries(a.base),e!=null&&e.onSuccess)return e.onSuccess(t,s,o)}})}export{R as a,q as b,F as c,A as u};

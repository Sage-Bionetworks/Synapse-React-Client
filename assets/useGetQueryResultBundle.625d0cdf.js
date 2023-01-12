import{r as k}from"./jsx-runtime.a638b984.js";import{a4 as l,a6 as c,ao as v,c6 as E,c7 as R,c8 as S}from"./index.b83134ec.js";import{u as P}from"./useInfiniteQuery.26e1390d.js";import{v as M,i}from"./SynapseConstants.aef18750.js";import{e as f}from"./queryKeys.f96c2872.js";const y={staleTime:1e3*60*30};function q(s,t){const{accessToken:a}=l();return c(f.tableQueryResult(s,!1),()=>E(s,a),{...y,...t})}function T(s,t,a){const{accessToken:r}=l();return c(f.tableQueryResultWithAsyncStatus(s,!1),()=>S(s,r,a),{...y,...t})}function h(s,t,a){const r=s.partMask&i,e={...s,partMask:r},u=r>0?t==null?void 0:t.enabled:!1;return T(e,{...t,enabled:u},a)}function B(s,t,a){const r=s.partMask&~i,e={...s,query:{...s.query,offset:void 0,limit:void 0,sort:void 0},partMask:r},u=r>0?t==null?void 0:t.enabled:!1;return T(e,{...t,enabled:u},a)}function x(s,t,a){const r=h(s,t,a),e=B(s,t,a);return k.exports.useMemo(()=>r.status==="error"?r:e.status==="error"?e:r.status==="loading"?r:e.status==="loading"?e:r.status==="idle"?R({},r,e):R({},e,r),[r,e])}function C(s,t,a){const{accessToken:r}=l();return P(f.tableQueryResult(s,!0),e=>{const u=e.pageParam?parseInt(e.pageParam):0;return S({...s,query:{...s.query,offset:u},partMask:u!==0?s.partMask&i:s.partMask},r,a)},{...y,...t,select:e=>{const u=e==null?void 0:e.pages[0];if(u.responseBody)for(let n=0;n<e.pages.length;n++){const o=e.pages[n];o.responseBody!=null&&(e.pages[n].responseBody={...u.responseBody,queryResult:o.responseBody.queryResult})}return e},getPreviousPageParam:e=>{var o;if(e.jobState!=="COMPLETE")return;const u=e.requestBody;if(u.query.offset==null||u.query.offset===0)return;const n=(o=u.query.limit)!=null?o:M;return Math.max(u.query.offset-n,0)},getNextPageParam:(e,u)=>{var Q,g,p,b,d;if(e.jobState!=="COMPLETE")return;const n=e.requestBody,o=(Q=n.query.limit)!=null?Q:M,m=(g=u[0].responseBody)==null?void 0:g.queryCount;if(!(m!=null&&((p=n.query.offset)!=null?p:0)+o>=m))return((b=e.responseBody.queryResult)==null?void 0:b.queryResults.rows.length)===o?((d=n.query.offset)!=null?d:0)+o:void 0}})}function I(s,t){const{accessToken:a}=l();return c(f.fullTableQueryResult(s),()=>v(s,a),{...y,...t})}export{C as a,x as b,I as c,q as u};

import{r as v}from"./jsx-runtime.f8072c65.js";import{h as l,k as h,ay as E,az as S,ah as b,aA as M,B as f,au as T}from"./index.1df77ce9.js";import{u as k}from"./useInfiniteQuery.767b6e5c.js";import{e as i}from"./queryKeys.e0d3085f.js";import{c as A}from"./cloneDeep.96c3704a.js";const c={refetchOnWindowFocus:!1};function C(s,t){const{accessToken:n}=l();return h(i.tableQueryResult(s,!1),()=>E(s,n),{...c,...t})}function R(s,t,n){const{accessToken:r}=l();return h(i.tableQueryResultWithAsyncStatus(s,!1),()=>M(s,r,n),{...c,...t})}function P(s,t,n){const r=s.partMask&f,e={...s,partMask:r},u=r>0?t==null?void 0:t.enabled:!1;return R(e,{...t,enabled:u},n)}function B(s,t,n){const r=s.partMask&~f,e={...s,query:{...s.query,offset:void 0,limit:void 0,sort:void 0},partMask:r},u=r>0?t==null?void 0:t.enabled:!1;return R(e,{...t,enabled:u},n)}function F(s,t,n){const r=P(s,t,n),e=B(s,t,n);return v.exports.useMemo(()=>r.status==="error"?r:e.status==="error"?e:r.status==="loading"?r:e.status==="loading"?e:r.status==="idle"?S({},r,e):S({},e,r),[r,e])}function G(s,t,n){const{accessToken:r}=l();return k(i.tableQueryResult(s,!0),e=>{const u=e.pageParam?parseInt(e.pageParam):0;return M({...s,query:{...s.query,offset:u},partMask:u!==0?s.partMask&f:s.partMask},r,n)},{...c,...t,select:e=>{const u=e==null?void 0:e.pages[0];if(u.responseBody)for(let a=0;a<e.pages.length;a++){const o=e.pages[a];o.responseBody!=null&&(e.pages[a].responseBody={...u.responseBody,queryResult:o.responseBody.queryResult})}return e},getPreviousPageParam:e=>{var o;if(e.jobState!=="COMPLETE")return;const u=e.requestBody;if(u.query.offset==null||u.query.offset===0)return;const a=(o=u.query.limit)!=null?o:b;return Math.max(u.query.offset-a,0)},getNextPageParam:(e,u)=>{var m,g,d,p,Q;if(e.jobState!=="COMPLETE")return;const a=e.requestBody,o=(m=a.query.limit)!=null?m:b,y=(g=u[0].responseBody)==null?void 0:g.queryCount;if(!(y!=null&&((d=a.query.offset)!=null?d:0)+o>=y))return((p=e.responseBody.queryResult)==null?void 0:p.queryResults.rows.length)===o?((Q=a.query.offset)!=null?Q:0)+o:void 0}})}const I=(s,t)=>{var n,r;return(r=(n=t==null?void 0:t.selectColumns)==null?void 0:n.findIndex(e=>e.name===s))!=null?r:-1},V=(s,t)=>s==null||t==null||s.length===0||t.length===0?!1:s.filter(r=>!L(r)&&t.find(e=>e.name===r.columnName)).length>0,L=s=>s.facetType==="enumeration"&&s.facetValues.length==1&&s.facetValues[0].value==T;function W(s,t){var r;const n=t==null?void 0:t.columnName;if(n&&s){const e=A(s),u=(r=e.facets)==null?void 0:r.filter(a=>a.columnName.toLowerCase()!==n.toLowerCase());return e.facets=u,e}else return s}export{G as a,F as b,L as c,I as g,V as i,W as r,C as u};

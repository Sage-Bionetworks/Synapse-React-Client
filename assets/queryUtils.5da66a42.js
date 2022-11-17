import{r as F}from"./jsx-runtime.24304d9c.js";import{j as i,l as b,ao as R,ap as h,aq as M}from"./index.dc703903.js";import{u as T}from"./useInfiniteQuery.f11f30ad.js";import{o as S,i as l,V as v}from"./SynapseConstants.b6aa8bf5.js";import{e as f}from"./queryKeys.e0d3085f.js";import{i as E,a as N}from"./QueryFilter.afe7e184.js";import{c as P}from"./cloneDeep.1399766e.js";const c={staleTime:1e3*60*30};function W(t,s){const{accessToken:a}=i();return b(f.tableQueryResult(t,!1),()=>R(t,a),{...c,...s})}function A(t,s,a){const{accessToken:r}=i();return b(f.tableQueryResultWithAsyncStatus(t,!1),()=>M(t,r,a),{...c,...s})}function L(t,s,a){const r=t.partMask&l,e={...t,partMask:r},n=r>0?s==null?void 0:s.enabled:!1;return A(e,{...s,enabled:n},a)}function V(t,s,a){const r=t.partMask&~l,e={...t,query:{...t.query,offset:void 0,limit:void 0,sort:void 0},partMask:r},n=r>0?s==null?void 0:s.enabled:!1;return A(e,{...s,enabled:n},a)}function O(t,s,a){const r=L(t,s,a),e=V(t,s,a);return F.exports.useMemo(()=>r.status==="error"?r:e.status==="error"?e:r.status==="loading"?r:e.status==="loading"?e:r.status==="idle"?h({},r,e):h({},e,r),[r,e])}function j(t,s,a){const{accessToken:r}=i();return T(f.tableQueryResult(t,!0),e=>{const n=e.pageParam?parseInt(e.pageParam):0;return M({...t,query:{...t.query,offset:n},partMask:n!==0?t.partMask&l:t.partMask},r,a)},{...c,...s,select:e=>{const n=e==null?void 0:e.pages[0];if(n.responseBody)for(let u=0;u<e.pages.length;u++){const o=e.pages[u];o.responseBody!=null&&(e.pages[u].responseBody={...n.responseBody,queryResult:o.responseBody.queryResult})}return e},getPreviousPageParam:e=>{var o;if(e.jobState!=="COMPLETE")return;const n=e.requestBody;if(n.query.offset==null||n.query.offset===0)return;const u=(o=n.query.limit)!=null?o:S;return Math.max(n.query.offset-u,0)},getNextPageParam:(e,n)=>{var m,g,p,d,Q;if(e.jobState!=="COMPLETE")return;const u=e.requestBody,o=(m=u.query.limit)!=null?m:S,y=(g=n[0].responseBody)==null?void 0:g.queryCount;if(!(y!=null&&((p=u.query.offset)!=null?p:0)+o>=y))return((d=e.responseBody.queryResult)==null?void 0:d.queryResults.rows.length)===o?((Q=u.query.offset)!=null?Q:0)+o:void 0}})}const q=(t,s)=>{var a,r;return(r=(a=s==null?void 0:s.selectColumns)==null?void 0:a.findIndex(e=>e.name===t))!=null?r:-1},z=(t,s)=>t==null||s==null||t.length===0||s.length===0?!1:t.filter(r=>!B(r)&&s.find(e=>e.name===r.columnName)).length>0,B=t=>t.facetType==="enumeration"&&t.facetValues.length==1&&t.facetValues[0].value==v;function K(t,s){var r;const a=s==null?void 0:s.columnName;if(a&&t){const e=P(t),n=(r=e.facets)==null?void 0:r.filter(u=>u.columnName.toLowerCase()!==a.toLowerCase());return e.facets=n,e}else return t}function k(t,s){const a=Array.isArray(t.selectedFacets)&&t.selectedFacets.filter(e=>e.columnName!==(s==null?void 0:s.columnName)).length>0,r=Array.isArray(t.additionalFilters)&&t.additionalFilters.filter(e=>E(e)||N(e)?e.columnName!==(s==null?void 0:s.columnName):!0).length>0;return a||r}export{j as a,O as b,B as c,q as g,k as h,z as i,K as r,W as u};

import{j as s,a as S,F as D}from"./jsx-runtime.00d70968.js";import{S as De}from"./Skeleton.c897a2bf.js";import{x as Ye,y as Pe,s as We,t as ze,q as $e,B as Ke,z as He,A as Me,o as Ge,V as fe,C as he}from"./index.40bbd24f.js";import{C as q}from"./ColumnType.744125d2.js";import"./assert.88909c85.js";import{i as _e}from"./TypeUtils.a2c41307.js";import{u as Je,a as we,b as je}from"./use-deep-compare-effect.esm.357a0ad8.js";import{i as Xe,r as Ze,a as et}from"./queryUtils.e82a46c0.js";import{p as tt,a as nt}from"./sqlFunctions.b49ac766.js";import{c as U}from"./cloneDeep.a525aed3.js";import{u as H,E as Qe}from"./ElementWithTooltip.f30c2bbb.js";import{C as at,a as Ie}from"./Collapse.a100796c.js";import{u as Ee}from"./useGetInfoFromIds.e2680390.js";import{I as J}from"./IconSvg.e3afc045.js";import{C as Ae}from"./Checkbox.96de280e.js";import{I as rt,a as it}from"./IconMinus.3805e4f5.js";import{D as K}from"./Dropdown.13d94a98.js";import{R as st}from"./RadioGroup.7c46be31.js";import{h as Re}from"./moment.a565bb48.js";import{R as ot}from"./RangeSlider.df5d4da8.js";import{B as lt}from"./Button.fda23eee.js";const ct=window.React.createContext,Ce=window.React.useContext,V=ct(void 0),j=({children:e,queryContext:t})=>s(V.Provider,{value:t,children:e});function Se(){const e=Ce(V);if(e===void 0)throw new Error("useQueryContext must be used within a QueryWrapper");return e}function on(){const e=Ce(V);if(e===void 0)throw new Error("usePaginatedQueryContext must be used within a QueryWrapper");return e}function ln(){const e=Ce(V);if(e===void 0)throw new Error("useInfiniteQueryContext must be used within a QueryWrapper");return e}const re=V.Consumer;try{V.displayName="QueryContext",V.__docgenInfo={description:"This must be exported to use the context in class components.",displayName:"QueryContext",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryContext.tsx#QueryContext"]={docgenInfo:V.__docgenInfo,name:"QueryContext",path:"src/lib/containers/QueryContext.tsx#QueryContext"})}catch{}try{j.displayName="QueryContextProvider",j.__docgenInfo={description:"Provides data related to a Synapse table query, and functions for iterating through pages of the data.",displayName:"QueryContextProvider",props:{queryContext:{defaultValue:null,description:"",name:"queryContext",required:!0,type:{name:"QueryContextType"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryContext.tsx#QueryContextProvider"]={docgenInfo:j.__docgenInfo,name:"QueryContextProvider",path:"src/lib/containers/QueryContext.tsx#QueryContextProvider"})}catch{}try{re.displayName="QueryContextConsumer",re.__docgenInfo={description:"",displayName:"QueryContextConsumer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryContext.tsx#QueryContextConsumer"]={docgenInfo:re.__docgenInfo,name:"QueryContextConsumer",path:"src/lib/containers/QueryContext.tsx#QueryContextConsumer"})}catch{}const X=e=>s(De,{style:{...e.style,display:"inline-block"},...e});try{X.displayName="SkeletonInlineBlock",X.__docgenInfo={description:"Skeleton with a display value of `inline-block`. MUI applies `display: block` with high specificity, so it's easiest to just apply the style to the component.",displayName:"SkeletonInlineBlock",props:{animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:'false | "pulse" | "wave"'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circle"'},{value:'"rect"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/assets/skeletons/SkeletonInlineBlock.tsx#SkeletonInlineBlock"]={docgenInfo:X.__docgenInfo,name:"SkeletonInlineBlock",path:"src/lib/assets/skeletons/SkeletonInlineBlock.tsx#SkeletonInlineBlock"})}catch{}const ut=()=>{try{return JSON.parse(sessionStorage.getItem(Ye)||"")}catch{return[]}},dt=()=>{try{return JSON.parse(sessionStorage.getItem(Pe)||"")}catch{return[]}};var pt=(e=>(e.LIKE="LIKE",e))(pt||{}),mt=(e=>(e.HAS="HAS",e.HAS_LIKE="HAS_LIKE",e))(mt||{});const yt="org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter",ft="org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",ht="org.sagebionetworks.repo.model.table.TextMatchesQueryFilter",Te=_e(ht),ie=_e(yt),se=_e(ft),_t=window.React.createContext,Ct=window.React.useContext,oe=window.React.useEffect,le=window.React.useState,z=_t(void 0),Z=({children:e,queryVisualizationContext:t})=>s(z.Provider,{value:t,children:e});function ge(){const e=Ct(z);if(e===void 0)throw new Error("useQueryVisualizationContext must be used within a QueryWrapper");return e}const ce=z.Consumer;function ue(e){var w,N;const{data:t,getLastQueryRequest:i,isFacetsAvailable:r,isLoadingNewBundle:n}=Se(),[a,c]=le({showColumnFilter:!0,showFacetFilter:!0,showFacetVisualization:(w=e.defaultShowFacetVisualization)!=null?w:!0,showSearchBar:(N=e.defaultShowSearchBar)!=null?N:!1,showDownloadConfirmation:!1,showColumnSelectDropdown:!1,showSqlEditor:!1});oe(()=>{r||c(u=>({...u,showFacetFilter:!1,showFacetVisualization:!1}))},[r]),oe(()=>{n&&C([])},[n]);const[d,g]=le([]),[m,C]=le([]),T=i(),F=Je(t==null?void 0:t.selectColumns);oe(()=>{var u,h;g((h=F==null?void 0:F.slice(0,(u=e.visibleColumnCount)!=null?u:1/0).map(o=>o.name))!=null?h:[])},[F,T.query.sql,e.visibleColumnCount]);const x={topLevelControlsState:a,setTopLevelControlsState:c,columnsToShowInTable:d,setColumnsToShowInTable:g,selectedRowIndices:m,setSelectedRowIndices:C,facetAliases:e.facetAliases,rgbIndex:e.rgbIndex,unitDescription:e.unitDescription,showLastUpdatedOn:e.showLastUpdatedOn},{children:v}=e;return s(Z,{queryVisualizationContext:x,children:v})}try{ue.displayName="QueryVisualizationWrapper",ue.__docgenInfo={description:`QueryVisualizationWrapper manages UI state for components that query tables in Synapse. That state can be accessed
or updated using QueryVisualizationContext. A QueryVisualizationWrapper must be used within a QueryWrapper.`,displayName:"QueryVisualizationWrapper",props:{rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},unitDescription:{defaultValue:null,description:"",name:"unitDescription",required:!1,type:{name:"string"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},visibleColumnCount:{defaultValue:null,description:"",name:"visibleColumnCount",required:!1,type:{name:"number"}},hiddenColumns:{defaultValue:null,description:"",name:"hiddenColumns",required:!1,type:{name:"string[]"}},defaultShowFacetVisualization:{defaultValue:null,description:"",name:"defaultShowFacetVisualization",required:!1,type:{name:"boolean"}},defaultShowSearchBar:{defaultValue:null,description:"",name:"defaultShowSearchBar",required:!1,type:{name:"boolean"}},showLastUpdatedOn:{defaultValue:null,description:"",name:"showLastUpdatedOn",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryVisualizationWrapper.tsx#QueryVisualizationWrapper"]={docgenInfo:ue.__docgenInfo,name:"QueryVisualizationWrapper",path:"src/lib/containers/QueryVisualizationWrapper.tsx#QueryVisualizationWrapper"})}catch{}try{z.displayName="QueryVisualizationContext",z.__docgenInfo={description:"This must be exported to use the context in class components.",displayName:"QueryVisualizationContext",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryVisualizationWrapper.tsx#QueryVisualizationContext"]={docgenInfo:z.__docgenInfo,name:"QueryVisualizationContext",path:"src/lib/containers/QueryVisualizationWrapper.tsx#QueryVisualizationContext"})}catch{}try{Z.displayName="QueryVisualizationContextProvider",Z.__docgenInfo={description:"Provides fields and functions related to visualizing a Synapse table query. For actual query data, see QueryContextProvider.",displayName:"QueryVisualizationContextProvider",props:{queryVisualizationContext:{defaultValue:null,description:"",name:"queryVisualizationContext",required:!0,type:{name:"QueryVisualizationContextType"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryVisualizationWrapper.tsx#QueryVisualizationContextProvider"]={docgenInfo:Z.__docgenInfo,name:"QueryVisualizationContextProvider",path:"src/lib/containers/QueryVisualizationWrapper.tsx#QueryVisualizationContextProvider"})}catch{}try{ce.displayName="QueryVisualizationContextConsumer",ce.__docgenInfo={description:"",displayName:"QueryVisualizationContextConsumer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryVisualizationWrapper.tsx#QueryVisualizationContextConsumer"]={docgenInfo:ce.__docgenInfo,name:"QueryVisualizationContextConsumer",path:"src/lib/containers/QueryVisualizationWrapper.tsx#QueryVisualizationContextConsumer"})}catch{}function Oe(e,t){return`${e}${t}`}function St(e,t){const i=window.location.search,r=`${e}=${t}`;return i?i.includes(`${e}=`)?window.location.search.slice(i.indexOf("?")+1).split("&").map(c=>c.split("=")[0]===e?`${r}`:c).join("&"):`${i.substr(1)}&${r}`:r}function gt(e,t){if(!window.location.search)return;const i=Oe(e,t),n=window.location.search.slice(window.location.search.indexOf("?")+1).split("&").filter(a=>a.split("=")[0]===i).map(a=>a.split("=")[1])[0];return n?decodeURIComponent(n):void 0}function Ft(e,t,i){const r=t!==void 0?Oe(e,t):e,n=St(r,i),a=window.location,c=`${a.protocol}//${a.hostname}${a.port?":"+a.port:""}${a.pathname}?${n}`;window.history.replaceState("object or string","Title",c)}function Et(e,t){const i=gt(e,t);let r;if(i){const n=JSON.parse(i);n.sql&&(r={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:We|ze|$e|Ke,entityId:tt(n.sql),query:n})}return r}const Rt=window.React.useCallback,Tt=window.React.useEffect,xt=window.React.useState;function Nt(e){var N,u;const{initQueryRequest:t,componentIndex:i=0,shouldDeepLink:r=!1,onQueryChange:n}=e,[a,c]=xt(t);Tt(()=>{const h=Et("QueryWrapper",i);h&&c(h)},[i]);const d=Rt(()=>U(a),[a]);function g(){return U(t)}function m(h){let o;typeof h=="function"?o=h(d()):o=h;const E=U(o);if(c(E),E.query){if(r){const L=JSON.stringify(E.query),O=encodeURIComponent(L);Ft("QueryWrapper",i,O)}n&&n(JSON.stringify(E))}}const{entityId:C,versionNumber:T}=nt(a.query.sql),F=(N=a.query.limit)!=null?N:He,x=Math.ceil((((u=a.query.offset)!=null?u:0)+Number(F))/F);function v(h){m(o=>(o.query.limit=h,o))}function w(h){m(o=>(o.query.offset=(h-1)*F,o))}return{entityId:C,versionNumber:T,getInitQueryRequest:g,getLastQueryRequest:d,setQuery:m,pageSize:F,currentPage:x,setPageSize:v,goToPage:w}}const xe=window.React.useMemo,bt=window.React.useState,qe="isShowingFacetFilters",Ve="isHidingFacetFilters";function de(e){const{initQueryRequest:t,onQueryChange:i,onQueryResultBundleChange:r,lockedColumn:n,componentIndex:a,shouldDeepLink:c}=e,[d,g]=bt(void 0),{entityId:m,versionNumber:C,getInitQueryRequest:T,getLastQueryRequest:F,setQuery:x,currentPage:v,pageSize:w,goToPage:N,setPageSize:u}=Nt({initQueryRequest:t,shouldDeepLink:c,componentIndex:a,onQueryChange:i}),h=xe(()=>F(),[F]),{data:o,isLoading:E,error:L,isPreviousData:O}=Me(h,{keepPreviousData:!0},g),I=o==null?void 0:o.responseBody,k=E||O,{data:A}=Ge(m,C);we(()=>{I&&r&&r(JSON.stringify(I))},[I,r]);const Y=I?Xe(I.facets,I.selectColumns):!0,P={data:xe(()=>Ze(I,n),[I,n]),currentPage:v,pageSize:w,setPageSize:u,isLoadingNewBundle:k,getLastQueryRequest:F,getInitQueryRequest:T,error:L,entity:A,executeQueryRequest:x,isFacetsAvailable:Y,asyncJobStatus:d,goToPage:N},{children:y}=e;return s(j,{queryContext:P,children:s("div",{className:`SRC-wrapper ${k?"SRC-logo-cursor":""} ${Y?"has-facets":""}`,children:y})})}try{de.displayName="QueryWrapper",de.__docgenInfo={description:"Component that manages the state of a Synapse table query. Data can be accessed via QueryContext using\neither `useQueryContext` or `QueryContextConsumer`.",displayName:"QueryWrapper",props:{initQueryRequest:{defaultValue:null,description:"",name:"initQueryRequest",required:!0,type:{name:"QueryBundleRequest"}},componentIndex:{defaultValue:null,description:"",name:"componentIndex",required:!1,type:{name:"number"}},shouldDeepLink:{defaultValue:null,description:"",name:"shouldDeepLink",required:!1,type:{name:"boolean"}},onQueryChange:{defaultValue:null,description:"",name:"onQueryChange",required:!1,type:{name:"((newQueryJson: string) => void)"}},onQueryResultBundleChange:{defaultValue:null,description:"",name:"onQueryResultBundleChange",required:!1,type:{name:"((newQueryResultBundleJson: string) => void)"}},lockedColumn:{defaultValue:null,description:"",name:"lockedColumn",required:!1,type:{name:"LockedColumn"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryWrapper.tsx#QueryWrapper"]={docgenInfo:de.__docgenInfo,name:"QueryWrapper",path:"src/lib/containers/QueryWrapper.tsx#QueryWrapper"})}catch{}const M=e=>{let t,i="";if("facetWithSelection"in e){const{facetWithSelection:n}=e;n.facet.facetType==="enumeration"?t=n.displayValue===fe?he:n.displayValue:t=`${n.facet.selectedMin} 
        - ${n.facet.selectedMax}`,i=`${H(n.facet.columnName)}: ${t}`}else if("filter"in e){const{filter:n}=e;let a=n.value;(a==null?void 0:a.startsWith("%"))&&(a==null?void 0:a.endsWith("%"))&&(a=a.substring(1,a.length-1)),t=a,i=`Text matches: "${a}"`,n.columnName&&(t=`"${a}" in ${H(n==null?void 0:n.columnName)}`,i=`${H(n==null?void 0:n.columnName)}: ${a}`)}else console.warn("Expected either facetWithSelection or filter in SelectionCriteriaPill but got neither");const r=encodeURIComponent(i);return s(Qe,{idForToolTip:`selectionCriteria_${r}`,tooltipText:i,callbackFn:()=>{},children:S("label",{className:"SelectionCriteriaPill",children:[s("span",{children:t}),s("button",{onClick:()=>e.onRemove(),className:"SelectionCriteriaPill__btnRemove",title:"deselect",children:s(at,{})})]},`SelectionCriteriaPill ${r}`)})};try{M.displayName="SelectionCriteriaPill",M.__docgenInfo={description:"",displayName:"SelectionCriteriaPill",props:{facetWithSelection:{defaultValue:null,description:"",name:"facetWithSelection",required:!0,type:{name:"FacetWithSelection"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}},filter:{defaultValue:null,description:"",name:"filter",required:!0,type:{name:"{ columnName?: string | undefined; value: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/facet-nav/SelectionCriteriaPill.tsx#SelectionCriteriaPill"]={docgenInfo:M.__docgenInfo,name:"SelectionCriteriaPill",path:"src/lib/containers/widgets/facet-nav/SelectionCriteriaPill.tsx#SelectionCriteriaPill"})}catch{}const G=({label:e,isCollapsed:t,onClick:i,facetAliases:r})=>S("div",{className:"FacetFilterHeader",children:[s("label",{className:"FacetFilterHeader__label",children:H(e,r)}),s("button",{className:"FacetFilterHeader__collapseToggleBtn",onClick:()=>i(!t),children:t?s(rt,{className:"icon-plus",title:"Expand Menu"}):s(it,{className:"icon-minus",title:"Collapse Menu"})})]});try{G.displayName="FacetFilterHeader",G.__docgenInfo={description:"",displayName:"FacetFilterHeader",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"Function"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!0,type:{name:"{} | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/query-filter/FacetFilterHeader.tsx#FacetFilterHeader"]={docgenInfo:G.__docgenInfo,name:"FacetFilterHeader",path:"src/lib/containers/widgets/query-filter/FacetFilterHeader.tsx#FacetFilterHeader"})}catch{}const Le=window.React,B=window.React.useState;function vt(e){return e.replace(/\s/g,"").toLowerCase()}function Ne(e,t=[],i=[]){const{value:r}=e;let n=r;r===fe&&(n=he);const a=t.find(d=>d.ownerId===r);a&&(n=a?a.userName:`unknown (${r})`);const c=i.find(d=>d.id===r);return c&&(n=c?c.name:`unknown (${r})`),`${n}`}function wt(e,t,i){const r=[...e.sort((n,a)=>a.count-n.count)];return t||r.length<=i||r.slice(i).find(n=>n.isSelected)?r:r.splice(0,i)}const ee=({facetValues:e,columnModel:t,onClear:i,onChange:r,facetAliases:n,containerAs:a="Collapsible",dropdownType:c="Icon",collapsed:d=!1})=>{const[g,m]=B(!1),[C,T]=B(d),[F,x]=B(!1),[v,w]=B(!1),[N,u]=B(""),[h,o]=B(e);je(()=>{o(e)},[e]);const E=5,L=1500,O=Le.createRef(),I={};let k;const A=e.filter(l=>l.isSelected).length===0,Y=(t==null?void 0:t.columnType)===q.USERID||(t==null?void 0:t.columnType)===q.USERID_LIST?e.map(l=>l.value):[],$=Ee({ids:Y,type:"USER_PROFILE"}),P=(t==null?void 0:t.columnType)===q.ENTITYID||(t==null?void 0:t.columnType)===q.ENTITYID_LIST?e.map(l=>l.value):[],y=Ee({ids:P,type:"ENTITY_HEADER"}),p=l=>{const R=l.target.value;if(u(R),m(!0),!R)e.forEach(Q=>{Q.isSelected=!1}),o(e);else{const Q=e.filter(W=>Ne(W,$,y).toLowerCase().indexOf(R.trim().toLowerCase())>-1?W:null);o(Q)}};if(!t)return s(D,{});const f=a==="Dropdown",_=S("div",{className:f?"EnumFacetFilter__dropdown_menu":"",children:[S("div",{className:"EnumFacetFilter__checkboxContainer--forAll",children:[S("div",{className:v?"EnumFacetFilter__search active":"EnumFacetFilter__search",children:[s("button",{className:"EnumFacetFilter__closeSearch",onClick:()=>{o(e),w(!1),m(!1)},children:s("span",{className:"EnumFacetFilter__previous",children:s(J,{options:{icon:"arrowBack"}})})}),N.length>0&&s("button",{className:"EnumFacetFilter__resetSearch",onClick:()=>{var l;u(""),(l=O.current)==null||l.focus()},children:s("span",{className:"EnumFacetFilter__reset",children:s(J,{options:{icon:"close"}})})}),s("input",{type:"text",placeholder:"Find values",value:N,ref:O,onChange:l=>{p(l)}})]}),!v&&S("div",{className:"EnumFacetFilter__checkAll",children:[s(Ae,{className:"EnumFacetFilter__checkbox",onChange:()=>{i()},checked:A,label:"All",isSelectAll:!0},"select_all"),s("button",{className:"EnumFacetFilter__searchbtn",onClick:()=>{var l;u(""),w(!0),(l=O.current)==null||l.focus()},children:s("span",{className:"EnumFacetFilter__searchicon",children:s(J,{options:{icon:"search"}})})})]})]}),S("div",{children:[h.length>0&&wt(h,g||f,E).map((l,R)=>s(Qt,{id:vt(l.value),index:R,label:Ne(l,$,y),count:l.count,isDropdown:f,initialIsSelected:l.isSelected,onChange:Q=>{I[l.value]=Q,clearTimeout(k),k=setTimeout(()=>{r(I),x(!1)},L)}},`checkLabel${R}`)),!f&&S(D,{children:[!g&&h.length>E&&s("button",{className:"EnumFacetFilter__showMoreFacetsBtn",onClick:()=>m(!0),children:s("div",{className:"EnumFacetFilter__checkboxContainer",children:S("div",{className:"EnumFacetFilter__showMoreFacetsLabel",children:["Show all (",h.length,")"]})})}),g&&h.length>E&&s("button",{className:"EnumFacetFilter__showMoreFacetsBtn",onClick:()=>m(!1),children:s("div",{className:"EnumFacetFilter__checkboxContainer",children:s("div",{className:"EnumFacetFilter__showMoreFacetsLabel",children:"Show less"})})})]}),h.length<=0&&s("div",{className:"EnumFacetFilter__noMatch",children:"No match found"})]})]}),b=()=>x(!F);return f?c==="SelectBox"?S(K,{className:"EnumFacetFilter EnumFacetFilterSelect",show:F,onToggle:b,children:[S(K.Toggle,{className:"secondary-caret",variant:"gray-select",children:[A&&"All",!A&&e.filter(l=>l.isSelected).length===1&&e.filter(l=>l.isSelected)[0].value,!A&&e.filter(l=>l.isSelected).length>1&&"Multiple Values Selected"]}),s(K.Menu,{children:_})]}):S(K,{className:"EnumFacetFilter",show:F,onToggle:b,children:[s(Qe,{idForToolTip:"facetFilterTooltip",tooltipText:"Filter by specific facet",darkTheme:!1,icon:"filter"},"facetFilterTooltip"),s(K.Menu,{children:_})]}):S(D,{children:[s(G,{facetAliases:n,isCollapsed:C,label:t.name,onClick:l=>T(l)}),s(Ie,{className:"EnumFacetFilter",in:!C,children:_})]})};function Qt({id:e,index:t,label:i,count:r,isDropdown:n,initialIsSelected:a,onChange:c}){const[d,g]=B(a);return Le.useEffect(()=>{g(a)},[a]),S("div",{className:"EnumFacetFilter__checkboxContainer",onClick:()=>{n&&(g(!d),c(!d))},children:[s(Ae,{className:"EnumFacetFilter__checkbox",onClick:m=>m.stopPropagation(),onChange:m=>{g(m),c(m)},checked:d,label:i},`${e}-${t}`),n&&S("span",{className:"EnumFacetFilter__count",children:["(",r,")"]}),!n&&s("div",{className:"EnumFacetFilter__count",children:r})]})}try{ee.displayName="EnumFacetFilter",ee.__docgenInfo={description:"*********** QUERY ENUM CONMPONENT  ************",displayName:"EnumFacetFilter",props:{facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"FacetColumnResultValueCount[]"}},columnModel:{defaultValue:null,description:"",name:"columnModel",required:!0,type:{name:"SelectColumn"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(facetNamesMap: Record<string, string>) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},containerAs:{defaultValue:{value:"Collapsible"},description:"",name:"containerAs",required:!1,type:{name:"enum",value:[{value:'"Collapsible"'},{value:'"Dropdown"'}]}},dropdownType:{defaultValue:{value:"Icon"},description:"",name:"dropdownType",required:!1,type:{name:"enum",value:[{value:'"Icon"'},{value:'"SelectBox"'}]}},collapsed:{defaultValue:{value:"false"},description:"",name:"collapsed",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/query-filter/EnumFacetFilter.tsx#EnumFacetFilter"]={docgenInfo:ee.__docgenInfo,name:"EnumFacetFilter",path:"src/lib/containers/widgets/query-filter/EnumFacetFilter.tsx#EnumFacetFilter"})}catch{}const te=({facet:e,isChecked:t,onClick:i})=>{const{facetAliases:r}=ge();return S("button",{className:`Chip ${t?"Checked":""}`,onClick:i,children:[H(e.columnName,r),s(J,{options:{icon:t?"check":"add",size:"14px",padding:"left"}})]})};try{te.displayName="FacetChip",te.__docgenInfo={description:"",displayName:"FacetChip",props:{facet:{defaultValue:null,description:"",name:"facet",required:!0,type:{name:"FacetColumnResult"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/query-filter/FacetChip.tsx#FacetChip"]={docgenInfo:te.__docgenInfo,name:"FacetChip",path:"src/lib/containers/widgets/query-filter/FacetChip.tsx#FacetChip"})}catch{}const be=window.React.useState,ne=e=>{const t="Min value should be less then max value",[i,r]=be(!1),[n,a]=be(()=>e.type==="number"&&e.initialValues?e.initialValues:e.initialValues&&{min:Re(e.initialValues.min).format("YYYY-MM-DD"),max:Re(e.initialValues.max).format("YYYY-MM-DD")}||{min:void 0,max:void 0}),c=e.className?`range ${e.className}`:"range",d=({min:m,max:C},T="number")=>{if(m==null||C===null||C===void 0)return r(!1),!0;if(T==="number"){if(Number(m)>Number(C))return r(!0),!1}else if(Date.parse(m)>Date.parse(C))return r(!0),!1;return r(!1),!0},g=(m,C,T="number")=>{d(m,T)&&C(m)};return S("div",{className:c,style:{display:"flex",flexWrap:"wrap"},children:[S("div",{style:{marginRight:"10px"},children:[s("input",{"aria-label":"min",type:e.type,value:n.min,onChange:({target:m})=>a({min:m.value,max:n.max})},"range_min"),s("div",{children:"to"}),s("input",{"aria-label":"max",type:e.type,value:n.max,onChange:({target:m})=>a({min:n.min,max:m.value})},"range_max")]}),s("button",{className:"btn btn-link SRC-noPadding",onClick:()=>g(n,e.onChange,e.type),children:"Apply"}),i&&s("div",{className:"SRC-danger-color",children:e.errorText||t})]})};try{ne.displayName="Range",ne.__docgenInfo={description:"",displayName:"Range",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"date"'}]}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"RangeValues<string | number>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValues: RangeValues<string | number>) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/Range.tsx#Range"]={docgenInfo:ne.__docgenInfo,name:"Range",path:"src/lib/containers/widgets/Range.tsx#Range"})}catch{}const ve=window.React.useState;var ye=(e=>(e.NOT_SET="org.sagebionetworks.UNDEFINED_NULL_NOTSET",e.RANGE="RANGE",e.ANY="",e))(ye||{});const ae=({facetResult:e,columnModel:t,onChange:i,facetAliases:r,collapsed:n=!1})=>{const[a,c]=ve(n),d=[{label:he,value:"org.sagebionetworks.UNDEFINED_NULL_NOTSET"},{label:"Any",value:""},{label:"Range",value:"RANGE"}];let{columnMin:g,columnMax:m,selectedMin:C,selectedMax:T}=e;const F=!C&&!T;C=C||g,T=T||m;const x=t.columnType==="DOUBLE"?"number":"date",v=(o,E)=>E?"":o===fe?"org.sagebionetworks.UNDEFINED_NULL_NOTSET":"RANGE",w=(o,E)=>{u(o),o!=="RANGE"&&E([o,o])},[N,u]=ve(v(C,F));return S("div",{children:[s(G,{isCollapsed:a,label:t.name,onClick:o=>c(o),facetAliases:r}),S(Ie,{in:!a,children:[s(st,{value:N,id:"rangeSelector",options:d,onChange:o=>w(o,i)}),N==="RANGE"&&(g===m?s("label",{children:m}):S(D,{children:[t.columnType==="INTEGER"&&S(ot,{domain:[g,m],initialValues:{min:C,max:T},step:1,doUpdateOnApply:!0,onChange:o=>i([o.min,o.max]),children:[") ",">"]},"RangeSlider"),(t.columnType==="DATE"||t.columnType==="DOUBLE")&&s(ne,{initialValues:{min:C,max:T},type:x,onChange:o=>i([o.min,o.max])},"Range")]}))]})]})};try{ae.displayName="RangeFacetFilter",ae.__docgenInfo={description:"",displayName:"RangeFacetFilter",props:{facetResult:{defaultValue:null,description:"",name:"facetResult",required:!0,type:{name:"FacetColumnResultRange"}},columnModel:{defaultValue:null,description:"",name:"columnModel",required:!0,type:{name:"SelectColumn"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(range: (string | number | undefined)[]) => void"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},collapsed:{defaultValue:{value:"false"},description:"",name:"collapsed",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/query-filter/RangeFacetFilter.tsx#RangeFacetFilter"]={docgenInfo:ae.__docgenInfo,name:"RangeFacetFilter",path:"src/lib/containers/widgets/query-filter/RangeFacetFilter.tsx#RangeFacetFilter"})}catch{}const It=window.React,ke=e=>({concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:e.columnName,facetValues:e.facetValues.filter(t=>t.isSelected===!0).map(t=>t.value)}),At=e=>{let t={concreteType:"org.sagebionetworks.repo.model.table.FacetColumnRangeRequest",columnName:e.columnName};return e.columnMin&&(t={...t,min:e.columnMin,max:e.columnMax}),t},Fe=(e,t)=>{var a,c;const i=(c=(a=t==null?void 0:t.query)==null?void 0:a.selectedFacets)!=null?c:[],r=i.findIndex(d=>d.columnName===e.columnName),n=e.concreteType==="org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"&&(!e.facetValues||!e.facetValues.length);return r>-1?n?i.splice(r,1):i[r]=e:i.push(e),i};function Be(e,t,i,r,n=!1){r?t.facetValues.forEach(d=>{d.value===r&&(d.isSelected=n)}):t.facetValues.forEach(d=>{d.isSelected=!1});const a=ke(t),c=Fe(a,e);i(c)}const Ot=(e,t,i,r)=>{const n=r&&Object.keys(r)||[];n.length&&t.facetValues.forEach(d=>{n.includes(d.value)&&(d.isSelected=r?!!r[d.value]:!1)});const a=ke(t),c=Fe(a,e);i(c)},Ue=(e,t,i,r)=>{t.columnMin=r[0],t.columnMax=r[1];const n=At(t),a=Fe(n,e);i(a)},pe=({facetsToFilter:e})=>{var N;const{data:t,isLoadingNewBundle:i,getLastQueryRequest:r,executeQueryRequest:n}=Se(),a=t==null?void 0:t.facets;let c;e==null?c=(N=a==null?void 0:a.map(u=>u.columnName))!=null?N:[]:c=e;const[d,g]=It.useState([]),{facetAliases:m,topLevelControlsState:C}=ge(),{showFacetFilter:T}=C;if(we(()=>{g(c.slice(0,3))},[t==null?void 0:t.facets]),!t)return s(D,{});const F=t.selectColumns,x=r(),v=u=>{const h=r();h.query.selectedFacets=u,h.query.offset=0,n(h)},w=u=>{let h=[...d!=null?d:[""],u.columnName];d.includes(u.columnName)&&(h=h.filter(o=>o!=u.columnName)),g(h)};return S("div",{className:`QueryFilter ${T?qe:Ve}`,children:[i&&s("div",{children:"Loading..."}),!i&&(a!=null?a:[]).filter(u=>d.includes(u.columnName)).map((u,h)=>{const o=F.find(E=>E.name===u.columnName);if(!et(u))return S("div",{className:"QueryFilter__facet",children:[u.facetType==="enumeration"&&o&&s(ee,{containerAs:"Collapsible",collapsed:!1,facetValues:u.facetValues,columnModel:o,facetAliases:m,onChange:E=>Ot(x,u,v,E),onClear:()=>Be(x,u,v)}),u.facetType==="range"&&o&&s(ae,{facetResult:u,columnModel:o,facetAliases:m,collapsed:!1,onChange:E=>Ue(x,u,v,E)})]},u.columnName)}),S("div",{children:[s("div",{className:"AvailableFacet",children:s("label",{className:"AvailableFacet__label",children:"Available Facets"})}),(a!=null?a:[]).filter(u=>c.includes(u.columnName)).map(u=>s(te,{facet:u,onClick:()=>w(u),isChecked:d.includes(u.columnName)},u.columnName))]})]})};try{pe.displayName="QueryFilter",pe.__docgenInfo={description:"",displayName:"QueryFilter",props:{facetsToFilter:{defaultValue:null,description:"",name:"facetsToFilter",required:!1,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/query-filter/QueryFilter.tsx#QueryFilter"]={docgenInfo:pe.__docgenInfo,name:"QueryFilter",path:"src/lib/containers/widgets/query-filter/QueryFilter.tsx#QueryFilter"})}catch{}const qt=window.React.useCallback,Vt=window.React.useEffect,Lt=window.React.useState,kt=window.React.createElement,me=({style:e,frontText:t,endText:i="",hideIfUnfiltered:r=!1})=>{var P;const{data:n,isLoadingNewBundle:a,getLastQueryRequest:c,executeQueryRequest:d,getInitQueryRequest:g,error:m}=Se(),{topLevelControlsState:C,unitDescription:T}=ge(),F=n==null?void 0:n.queryCount,[x,v]=Lt([]),w=y=>{const p=U(c());p.query.selectedFacets=y,p.query.offset=0,d(p)},N=y=>y.filter(_=>_.facetType==="enumeration").filter(_=>_.facetValues.filter(b=>b.isSelected===!0).length>0),u=y=>y.filter(_=>_.facetType==="range").filter(_=>_.selectedMax||_.selectedMin),h=(y,p)=>{var _;const f=y.find(b=>b.id===p);return(_=f==null?void 0:f.name)!=null?_:p},o=(y,p)=>{const f=y.find(_=>_.ownerId===p);return(f==null?void 0:f.userName)||p},E=qt((y,p)=>{const f=ut(),_=dt(),b=[];return y.forEach(l=>{const R=p.find(Q=>Q.name===l.columnName);l.facetValues.forEach(Q=>{if(Q.isSelected){let W=Q.value;(R==null?void 0:R.columnType)===q.ENTITYID||(R==null?void 0:R.columnType)===q.ENTITYID_LIST?W=h(f,Q.value):((R==null?void 0:R.columnType)===q.USERID||(R==null?void 0:R.columnType)===q.USERID_LIST)&&(W=o(_,Q.value)),b.push({facet:l,displayValue:W,selectedValue:Q})}})}),b},[]);Vt(()=>{if(n){const y=u(n.facets),p=N(n.facets),f=y.map(b=>({facet:b})),_=E(p,n.columnModels);v([...f,..._])}},[n,E]);const L=y=>{const{facet:p,selectedValue:f}=y;p.facetType==="enumeration"?Be(c(),p,w,f==null?void 0:f.value,!1):Ue(c(),p,w,[ye.ANY,ye.ANY])},O=(y,p)=>{var _;const f=U(c());!f.query.additionalFilters||(f.query.additionalFilters=(_=f.query.additionalFilters)==null?void 0:_.reduce(function(b,l){if(ie(l)||se(l)){const R={columnName:l.columnName,values:l.columnName===y?l.values.filter(Q=>Q!==p):l.values,operator:ie(l)?l.operator:void 0,function:se(l)?l.function:void 0,concreteType:l.concreteType};R.values.length>0&&b.push(R)}else b.push(l);return b},[]),d(f))},I=y=>{const p=U(c());!p.query.additionalFilters||(p.query.additionalFilters=p.query.additionalFilters.filter(f=>!(Te(f)&&f.searchExpression===y.searchExpression)),d(p))},k=()=>{const y=U(g());y.query.additionalFilters=[],d(y)},A=(P=c().query.additionalFilters)==null?void 0:P.reduce((y,p)=>{if(Te(p))y.push({key:`fulltextsearch-${p.searchExpression}`,filter:{value:p.searchExpression},onRemove:()=>I(p)});else if(ie(p)||se(p)){const{columnName:f}=p;p.values.forEach(_=>{y.push({key:`columnsearch-${_}`,filter:{columnName:f,value:_},onRemove:()=>O(p.columnName,_)})})}else console.warn("Encountered unexpected QueryFilter: ",p);return y},[]),Y=C==null?void 0:C.showFacetFilter,$=x.length>0||A&&A.length>0;return m?s(D,{}):s("div",{className:`TotalQueryResults ${Y?qe:Ve}`,style:e,children:a?s(X,{width:100}):S(D,{children:[($||!r)&&S("span",{className:"SRC-boldText SRC-centerContent",children:[t," ",F==null?void 0:F.toLocaleString()," ",T," ",i]}),S("div",{className:"TotalQueryResults__selections",children:[A&&A.map(y=>kt(M,{...y,key:y.key})),x.map((y,p)=>{var f,_,b;return s(M,{facetWithSelection:y,onRemove:()=>L(y)},`facets-${(b=(_=(f=y.selectedValue)==null?void 0:f.value)!=null?_:y.displayValue)!=null?b:p}`)}),(x.length>2||A&&A.length>2)&&s(lt,{onClick:k,variant:"light",className:"TotalQueryResults__clearall",children:"Clear All"})]})]})})};try{me.displayName="TotalQueryResults",me.__docgenInfo={description:"",displayName:"TotalQueryResults",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},frontText:{defaultValue:null,description:"",name:"frontText",required:!0,type:{name:"string"}},endText:{defaultValue:{value:""},description:"",name:"endText",required:!1,type:{name:"string"}},applyChanges:{defaultValue:null,description:"",name:"applyChanges",required:!1,type:{name:"((newFacets: FacetColumnRequest[]) => void)"}},hideIfUnfiltered:{defaultValue:{value:"false"},description:"",name:"hideIfUnfiltered",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/TotalQueryResults.tsx#TotalQueryResults"]={docgenInfo:me.__docgenInfo,name:"TotalQueryResults",path:"src/lib/containers/TotalQueryResults.tsx#TotalQueryResults"})}catch{}export{mt as C,ee as E,j as Q,X as S,me as T,Nt as a,Se as b,ue as c,re as d,ge as e,de as f,Ot as g,Be as h,qe as i,Ve as j,ce as k,pe as l,ie as m,se as n,pt as o,on as p,ln as u};

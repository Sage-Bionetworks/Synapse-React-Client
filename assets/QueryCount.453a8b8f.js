import{j as c,R as i}from"./jsx-runtime.f2f98a5a.js";import"./index.3643f9f4.js";import{p as d}from"./sqlFunctions.cfb3693d.js";import{u as p}from"./queryUtils.82f82d8f.js";import{j as m}from"./SynapseConstants.b6aa8bf5.js";const n=({sql:e,selectedFacets:a,parens:u})=>{var o;const s=d(e),l={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:{sql:e,selectedFacets:a},entityId:s,partMask:m},{data:t}=p(l),r=(o=t==null?void 0:t.queryCount)==null?void 0:o.toLocaleString();return c(i.Fragment,{children:r&&(u?`(${r})`:r)})};try{n.displayName="QueryCount",n.__docgenInfo={description:"",displayName:"QueryCount",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},selectedFacets:{defaultValue:null,description:"",name:"selectedFacets",required:!1,type:{name:"FacetColumnValuesRequest[]"}},parens:{defaultValue:null,description:"",name:"parens",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryCount.tsx#QueryCount"]={docgenInfo:n.__docgenInfo,name:"QueryCount",path:"src/lib/containers/QueryCount.tsx#QueryCount"})}catch{}export{n as Q};

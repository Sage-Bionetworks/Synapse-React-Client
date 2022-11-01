import{r as P,a as d,F as m,j as r}from"./jsx-runtime.a1d381ad.js";import{h as O,cR as N,aa as A,cS as b,cT as w,A as L,v,z as B}from"./index.c07b435e.js";import{T as j}from"./Typography.1abf3c12.js";import{I as $}from"./IconSvg.61de10c1.js";import{u as R}from"./react-intersection-observer.esm.037889e1.js";import{P as x}from"./getEndpoint.bb7ded34.js";import{u as I}from"./useInfiniteQuery.3fef2ad0.js";import{S as k}from"./SkeletonTable.eecd7a8b.js";import{S as H}from"./Skeleton.00fa93e7.js";import"./iframe.81590c6e.js";import"./index.9f535dbb.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.ebc3484d.js";import"./index.57d09176.js";import"./withStyles.697310ee.js";import"./utils.6cb5795e.js";import"./Alert.ae374429.js";import"./createWithBsPrefix.b8918cd7.js";import"./index.35ce73ec.js";import"./isArray.cfd918dc.js";import"./SvgIcon.0314c6b1.js";import"./makeStyles.2b248e78.js";import"./Tooltip.881da3c6.js";import"./createSvgIcon.8505b138.js";import"./InfoOutlined.c00dd9c7.js";import"./times.3a1a85cc.js";import"./toInteger.6a5fcd60.js";import"./isSymbol.9201fb1c.js";function K(e,n){const{accessToken:l}=O();return I(["getuserchallenges",e],async t=>{const s=await N(l,e,t.pageParam,10);if(s.results.length>0){const o=Array.from(s.results,p=>p.projectId),i=await A(o);return{results:Array.from(s.results,(p,c)=>({challenge:p,projectHeader:i.results[c]})),totalNumberOfResults:s.totalNumberOfResults}}return{results:[],totalNumberOfResults:s.totalNumberOfResults}},{...n,getNextPageParam:(t,s)=>{if(t.results.length>0)return s.length*10}})}function V(e,n,l){const{accessToken:t}=O();return I(["getuserprojects",e,n],async s=>b(e,{...n,nextPageToken:s.pageParam},t),{...l,getNextPageParam:s=>s.nextPageToken})}function Y(e,n){const{accessToken:l}=O();return I(["getuserteams",e],async t=>w(l,e,t.pageParam,10),{...n,getNextPageParam:(t,s)=>{if(t.results.length>0)return s.length*10}})}function U({userId:e}){var h;const n=L(),{ref:l,inView:t}=R(),{data:s,status:o,isFetching:i,isLoading:_,hasNextPage:p,fetchNextPage:c,isError:g,error:f}=K(e);P.exports.useEffect(()=>{g&&f&&n(f)},[g,f,n]),P.exports.useEffect(()=>{o==="success"&&!i&&p&&c&&t&&c()},[o,i,p,c,t]);const u=(h=s==null?void 0:s.pages.flatMap(a=>a.results))!=null?h:[];return d(m,{children:[u.length>0&&d(m,{children:[u.map(a=>a&&a.challenge&&a.projectHeader?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${x.PORTAL}#!Synapse:${a.challenge.projectId}/challenge`,children:a.projectHeader.name})},`user-challenge-list-item-${a.challenge.projectId}`):!1),r("div",{ref:l})]}),!i&&u.length==0&&r("div",{children:"Empty"}),_&&r(k,{numRows:5,numCols:1})]})}try{U.displayName="UserChallenges",U.__docgenInfo={description:"",displayName:"UserChallenges",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/user_profile_links/UserChallenges.tsx#UserChallenges"]={docgenInfo:U.__docgenInfo,name:"UserChallenges",path:"src/lib/containers/user_profile_links/UserChallenges.tsx#UserChallenges"})}catch{}function C({userId:e}){var a;const n=L(),{ref:l,inView:t}=R(),s={},{data:o,status:i,isFetching:_,isLoading:p,hasNextPage:c,fetchNextPage:g,isError:f,error:u}=V(e,s);P.exports.useEffect(()=>{f&&u&&n(u)},[f,u,n]),P.exports.useEffect(()=>{i==="success"&&!_&&c&&g&&t&&g()},[i,_,c,g,t]);const h=(a=o==null?void 0:o.pages.flatMap(T=>T.results))!=null?a:[];return d(m,{children:[h.length>0&&d(m,{children:[h.map(T=>T?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${x.PORTAL}#!Synapse:${T.id}`,children:T.name})},`user-project-list-item-${T.id}`):!1),r("div",{ref:l})]}),!_&&h.length==0&&r("div",{children:"Empty"}),p&&r(k,{numRows:5,numCols:1})]})}try{C.displayName="UserProjects",C.__docgenInfo={description:"",displayName:"UserProjects",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/user_profile_links/UserProjects.tsx#UserProjects"]={docgenInfo:C.__docgenInfo,name:"UserProjects",path:"src/lib/containers/user_profile_links/UserProjects.tsx#UserProjects"})}catch{}function E({userId:e}){var h;const n=L(),{ref:l,inView:t}=R(),{data:s,status:o,isFetching:i,isLoading:_,hasNextPage:p,fetchNextPage:c,isError:g,error:f}=Y(e);P.exports.useEffect(()=>{g&&f&&n(f)},[g,f,n]),P.exports.useEffect(()=>{o==="success"&&!i&&p&&c&&t&&c()},[o,i,p,c,t]);const u=(h=s==null?void 0:s.pages.flatMap(a=>a.results))!=null?h:[];return d(m,{children:[u.length>0&&d(m,{children:[u.map(a=>a?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${x.PORTAL}#!Team:${a.id}`,children:a.name})},`user-team-list-item-${a.id}`):!1),r("div",{ref:l})]}),!i&&u.length==0&&r("div",{children:"Empty"}),_&&r(k,{numRows:5,numCols:1})]})}try{E.displayName="UserTeams",E.__docgenInfo={description:"",displayName:"UserTeams",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/user_profile_links/UserTeams.tsx#UserTeams"]={docgenInfo:E.__docgenInfo,name:"UserTeams",path:"src/lib/containers/user_profile_links/UserTeams.tsx#UserTeams"})}catch{}var S=(e=>(e.PROJECTS="Projects",e.TEAMS="Teams",e.CHALLENGES="Challenges",e))(S||{});function y({userId:e}){const[n,l]=P.exports.useState("Projects"),{data:t}=v(e);function s(o){switch(o){case"Projects":return"dashboard";case"Teams":return"peopleTwoTone";case"Challenges":return"challengesTwoTone"}}return d("div",{className:"UserProfileLinks",children:[d(j,{variant:"headline2",className:"title",children:[t&&d(m,{children:[t==null?void 0:t.userName,"'s Items"]}),!t&&r(H,{width:"75%"})]}),r("div",{className:"Tabs",children:Object.keys(S).map(o=>r("div",{className:"Tab",role:"tab",onClick:i=>{i.stopPropagation(),l(S[o])},"aria-selected":S[o]===n,children:d(j,{variant:"buttonLink",children:[r($,{options:{icon:s(S[o])}})," ",S[o]]})},o))}),r("div",{className:"TabContent",children:d(B,{children:[n==="Projects"&&r(m,{children:r(C,{userId:e})}),n==="Teams"&&r(m,{children:r(E,{userId:e})}),n==="Challenges"&&r(m,{children:r(U,{userId:e})})]})})]})}try{y.displayName="UserProfileLinks",y.__docgenInfo={description:"",displayName:"UserProfileLinks",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/user_profile_links/UserProfileLinks.tsx#UserProfileLinks"]={docgenInfo:y.__docgenInfo,name:"UserProfileLinks",path:"src/lib/containers/user_profile_links/UserProfileLinks.tsx#UserProfileLinks"})}catch{}const Te={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserProfileLinks from './UserProfileLinks'

export default {
  title: 'Synapse/UserProfileLinks',
  component: UserProfileLinks,
} as ComponentMeta<typeof UserProfileLinks>

const Template: ComponentStory<typeof UserProfileLinks> = args => (
  <UserProfileLinks {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  userId: '1131050',
}
`,locationsMap:{demo:{startLoc:{col:58,line:10},endLoc:{col:1,line:12},startBody:{col:58,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/UserProfileLinks",component:y},M=e=>r(y,{...e}),D=M.bind({});D.args={userId:"1131050"};const Se=["Demo"];export{D as Demo,Se as __namedExportsOrder,Te as default};

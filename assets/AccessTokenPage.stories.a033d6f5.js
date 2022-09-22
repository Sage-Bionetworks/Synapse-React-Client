import{f as b,h as W,cM as j,bM as G,cN as x,W as U,E as B,cO as Q,bT as X}from"./index.a536ed12.js";import{l as L}from"./LoadingScreen.91642215.js";import{h as E}from"./moment.a565bb48.js";import{T as $}from"./Tooltip.6d92cd5b.js";import{I}from"./IconSvg.debd858a.js";import{W as J}from"./WarningModal.e66d24b4.js";import{a as o,j as e,F as v}from"./jsx-runtime.00d70968.js";import{B as T}from"./Button.fda23eee.js";import{C as Z}from"./CopyToClipboardInput.2fc70296.js";import{C as w}from"./Checkbox.c68b07e0.js";import{M as A,a as ee}from"./Modal.1fb607f9.js";import{c as O,b as oe}from"./toString.d84aaeca.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./assert.fddb1cad.js";import"./iframe.f8de4d79.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./Typography.868473dc.js";import"./makeStyles.45e8b79c.js";import"./useTheme.aaa309f8.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./InfoOutlined.60e019a4.js";import"./IconCopy.095bf867.js";import"./ToastMessage.de6992d0.js";import"./FullWidthAlert.6afa82c9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.eba72690.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";function se(s){const{accessToken:l}=b();return W(["getPersonalAccessTokens"],async n=>await j(l,n.pageParam),{...s,getNextPageParam:n=>n.nextPageToken})}const m={openid:{displayName:"OpenID",description:"Access to your Synapse identity and certain user information"},view:{displayName:"View",description:"Permission to view the content which you can view"},modify:{displayName:"Modify",description:"Permission to modify the content which you can modify (create, change, delete)"},download:{displayName:"Download",description:"Permission to download the content which you can download"},authorize:{displayName:"Authorize",description:"Permission to authorize others to access the resources you control"},offline_access:{displayName:"Offline Access",description:"Permission to access the resources authorized here when you are not logged in, until you explicitly revoke access"}},ae=window.React.useState,S=({accessToken:s,onDelete:l})=>{const{accessToken:n}=b(),[d,r]=ae(!1),t=G(),c=s.state==="EXPIRED";return o("div",{className:"cardContainer PersonalAccessTokenCard"+(c?" bg-warning":""),children:[e(J,{title:"Confirm Deletion",modalBody:o(v,{children:[e("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),e("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]}),confirmButtonText:"Delete Token",onCancel:()=>r(!1),onConfirm:a=>{x(a,n).then(()=>{l(),r(!1)}).catch(C=>{t(C)})},confirmButtonVariant:"danger",show:d,onConfirmCallbackArgs:[s.id,n]}),o("div",{className:"SRC-cardContent",children:[o("div",{className:"SRC-eqHeightRow SRC-userCardName",children:[e("span",{className:"SRC-blackText",children:s.name}),c&&e($,{title:"This token has expired. It no longer works and can only be deleted.",enterNextDelay:100,children:e("span",{"aria-hidden":"true",children:e(I,{options:{icon:"warning"}})})})]}),o("div",{className:"SRC-eqHeightRow",children:[e("span",{children:"Permissions: "}),s.scopes.map(a=>e("span",{className:"PersonalAccessTokenCard__ScopeName SRC-primary-text-color SRC-primary-color-hover SRC-hand-cursor SRC-inlineFlex","data-tip":m[a].description,children:m[a].displayName},a))]}),o("div",{className:"SRC-eqHeightRow",children:[o("span",{children:["Last used ",E(s.lastUsed).fromNow()]}),e("span",{className:"SRC-deemphasized-text",children:" | "}),o("span",{children:["Created ",E(s.createdOn).fromNow()]})]})]}),e("div",{className:"PersonalAccessTokenCard__DeleteButton",children:e(T,{variant:"default","aria-label":"delete",onClick:()=>{c?x(s.id,n).then(()=>{l()}).catch(a=>{t(a)}):r(!0)},children:e(I,{options:{icon:"delete"},"aria-hidden":"true"})})})]})};try{S.displayName="AccessTokenCard",S.__docgenInfo={description:"",displayName:"AccessTokenCard",props:{accessToken:{defaultValue:null,description:"Record referring to an access token, not a token itself",name:"accessToken",required:!0,type:{name:"AccessTokenRecord"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(...args: any[]) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/personal_access_token/AccessTokenCard.tsx#AccessTokenCard"]={docgenInfo:S.__docgenInfo,name:"AccessTokenCard",path:"src/lib/containers/personal_access_token/AccessTokenCard.tsx#AccessTokenCard"})}catch{}const i=window.React,ne="You must provide a token name and at least one permission.",N=({onClose:s,onCreate:l})=>{const{accessToken:n}=b(),[d,r]=i.useState(""),[t,c]=i.useState(!0),[a,C]=i.useState(!1),[h,_]=i.useState(!1),[f,k]=i.useState(!1),[u,D]=i.useState(!1),[q,V]=i.useState(""),[F,R]=i.useState(""),[H,M]=i.useState(!1),Y=y=>{r(y.target.value)},K=(y,p)=>!!y&&p.some(P=>P),z=async y=>{if(y.preventDefault(),K(d,[t,a,h]))try{const p={scope:[],name:d};t&&p.scope.push("view"),a&&p.scope.push("download"),h&&p.scope.push("modify"),k(!0);const P=await Q(p,n);k(!1),V(P.token),D(!0),l()}catch(p){k(!1),R(p.reason),M(!0)}else R(ne),M(!0)};return e(A,{className:"bootstrap-4-backport AccessTokenModal",animation:!1,show:!0,onHide:s,backdrop:"static",children:o(U,{children:[e(A.Header,{closeButton:!0,children:e(A.Title,{children:"Create New Personal Access Token"})}),e(ee,{children:f?L:u?o(v,{children:[e("span",{className:"SRC-boldText",children:"This token will not be able to be retrieved again."})," ",e("span",{children:"If needed, generate a new personal access token, and delete this one."}),e("div",{className:"AccessTokenModal__CopyToClipboardContainer",children:e(Z,{value:q,inputWidth:"350px"})}),e("p",{children:"This token grants access to your account functions and should be treated like a password."})]}):o("div",{className:"SRC-marginFive",children:[o("div",{className:"SRC-marginBottomTen",children:[e(O,{className:"SRC-boldText",children:"Token Name"}),e(oe,{autoFocus:!0,className:"AccessTokenModal__TokenNameInput",value:d,onChange:Y,type:"text",placeholder:"e.g. Synapse command line access on my laptop"})]}),o("div",{className:"SRC-marginBottomTop",children:[e(O,{className:"SRC-boldText",children:"Token Permissions"}),e(w,{label:m.view.displayName,checked:t,onChange:()=>c(!t),children:o("div",{className:"AccessTokenModal__ScopeDescription",children:[m.view.description,". Required to use Synapse programmatic clients."]})}),e(w,{label:m.download.displayName,checked:a,onChange:()=>C(!a),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:m.download.description})}),e(w,{label:m.modify.displayName,checked:h,onChange:()=>_(!h),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:m.modify.description})})]}),e("div",{className:"SRC-center-text",children:H&&e(B,{error:F})})]})}),e(A.Footer,{children:u?e(T,{variant:"outline",onClick:s,children:"Close"}):o(v,{children:[e(T,{variant:"outline",onClick:s,children:"Cancel"}),e(T,{type:"submit",variant:"sds-primary",onClick:z,children:"Create Token"})]})})]})})};try{N.displayName="CreateAccessTokenModal",N.__docgenInfo={description:"",displayName:"CreateAccessTokenModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(...args: any[]) => void"}},onCreate:{defaultValue:null,description:"",name:"onCreate",required:!0,type:{name:"(...args: any[]) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/personal_access_token/CreateAccessTokenModal.tsx#CreateAccessTokenModal"]={docgenInfo:N.__docgenInfo,name:"CreateAccessTokenModal",path:"src/lib/containers/personal_access_token/CreateAccessTokenModal.tsx#CreateAccessTokenModal"})}catch{}const te=window.React.useState,g=({title:s,body:l})=>{var k;const[n,d]=te(!1),{data:r,isLoading:t,error:c,refetch:a,fetchNextPage:C,hasNextPage:h}=se(),_=()=>{a()},f=(k=r==null?void 0:r.pages.flatMap(u=>u.results))!=null?k:[];return o("div",{className:"PersonalAccessTokenPage bootstrap-4-backport",children:[o("div",{className:"PersonalAccessTokenPage__Header",children:[o("div",{className:"PersonalAccessTokenPage__Header__CopyText",children:[e("h1",{children:s}),l]}),e("div",{className:"PersonalAccessTokenPage__Header__CreateButton",children:e(T,{variant:"sds-primary",onClick:()=>d(!0),children:"Create New Token"})})]}),o(X,{children:[n&&e(N,{onClose:()=>d(!1),onCreate:_}),o("div",{children:[!t&&f.length===0&&e("div",{className:"PersonalAccessTokenPage__NoTokensMessage SRC-text-title",children:"You currently have no personal access tokens."}),o("div",{className:"PersonalAccessTokenPage__CardList",children:[f.map(u=>e(S,{accessToken:u,onDelete:_},u.id)),t&&L,!t&&h&&!c&&e("div",{className:"PersonalAccessTokenPage__CardList__LoadMore",children:e(T,{className:"PersonalAccessTokenPage__CardList__LoadMore__Button",variant:"sds-primary",onClick:()=>{C()},children:"Load More"})})]}),c&&e(B,{error:c})]})]})]})};try{g.displayName="AccessTokenPage",g.__docgenInfo={description:"",displayName:"AccessTokenPage",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string | Element"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/personal_access_token/AccessTokenPage.tsx#AccessTokenPage"]={docgenInfo:g.__docgenInfo,name:"AccessTokenPage",path:"src/lib/containers/personal_access_token/AccessTokenPage.tsx#AccessTokenPage"})}catch{}const We={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccessTokenPage } from './AccessTokenPage'

export default {
  title: 'Synapse/AccessTokenPage',
  component: AccessTokenPage,
} as ComponentMeta<typeof AccessTokenPage>

const Template: ComponentStory<typeof AccessTokenPage> = args => (
  <AccessTokenPage {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  title: 'Personal Access Tokens',
  body: 'Create and manage tokens that can be used to access your Synapse account programmatically.',
}
`,locationsMap:{demo:{startLoc:{col:57,line:10},endLoc:{col:1,line:12},startBody:{col:57,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/AccessTokenPage",component:g},re=s=>e(g,{...s}),ce=re.bind({});ce.args={title:"Personal Access Tokens",body:"Create and manage tokens that can be used to access your Synapse account programmatically."};const je=["Demo"];export{ce as Demo,je as __namedExportsOrder,We as default};

import{r,a as o,j as e,F as w}from"./jsx-runtime.34ce7573.js";import{h as x,ct as j,A as W,cu as M,_ as G,E as O,cv as U,z as Q}from"./index.9252e43c.js";import{u as X}from"./useInfiniteQuery.c68591e1.js";import{l as L}from"./LoadingScreen.f3df99c4.js";import{h as E}from"./moment.a565bb48.js";import{I}from"./IconSvg.e4eaabe3.js";import{W as J}from"./WarningModal.17c62954.js";import{T as Z}from"./Tooltip.ba09745a.js";import{B as T}from"./Button.ce0bd2bc.js";import{C as $}from"./CopyToClipboardInput.7cc292bc.js";import{C as v}from"./Checkbox.a4c87e0b.js";import{M as A,a as ee}from"./Modal.ab93f5f1.js";import{c as B,b as oe}from"./isArray.c4020594.js";import"./iframe.2f145b9b.js";import"./index.440cbb05.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.20fad266.js";import"./utils.02697a41.js";import"./Alert.6db3bf6f.js";import"./createWithBsPrefix.b3a1d38c.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.be1787bd.js";import"./emotion-react.browser.esm.2f1b8c6f.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./Typography.40039e1c.js";import"./createSvgIcon.b38e43ed.js";import"./InfoOutlined.776d3e3c.js";import"./IconCopy.4dd3a28c.js";import"./ToastMessage.25625655.js";import"./FullWidthAlert.9e017ef2.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d34fd1e6.js";import"./isSymbol.a6cfa1b9.js";import"./contains.6d148a53.js";import"./inheritsLoose.722dc9df.js";import"./usePrevious.3addf0ec.js";import"./useWaitForDOMRef.bd397adc.js";function se(s){const{accessToken:l}=x();return X(["getPersonalAccessTokens"],async n=>await j(l,n.pageParam),{...s,getNextPageParam:n=>n.nextPageToken})}const m={openid:{displayName:"OpenID",description:"Access to your Synapse identity and certain user information"},view:{displayName:"View",description:"Permission to view the content which you can view"},modify:{displayName:"Modify",description:"Permission to modify the content which you can modify (create, change, delete)"},download:{displayName:"Download",description:"Permission to download the content which you can download"},authorize:{displayName:"Authorize",description:"Permission to authorize others to access the resources you control"},offline_access:{displayName:"Offline Access",description:"Permission to access the resources authorized here when you are not logged in, until you explicitly revoke access"}},S=({accessToken:s,onDelete:l})=>{const{accessToken:n}=x(),[d,c]=r.exports.useState(!1),t=W(),i=s.state==="EXPIRED";return o("div",{className:"cardContainer PersonalAccessTokenCard"+(i?" bg-warning":""),children:[e(J,{title:"Confirm Deletion",modalBody:o(w,{children:[e("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),e("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]}),confirmButtonText:"Delete Token",onCancel:()=>c(!1),onConfirm:a=>{M(a,n).then(()=>{l(),c(!1)}).catch(C=>{t(C)})},confirmButtonVariant:"danger",show:d,onConfirmCallbackArgs:[s.id,n]}),o("div",{className:"SRC-cardContent",children:[o("div",{className:"SRC-eqHeightRow SRC-userCardName",children:[e("span",{className:"SRC-blackText",children:s.name}),i&&e(Z,{title:"This token has expired. It no longer works and can only be deleted.",enterNextDelay:100,children:e("span",{"aria-hidden":"true",children:e(I,{options:{icon:"warning"}})})})]}),o("div",{className:"SRC-eqHeightRow",children:[e("span",{children:"Permissions: "}),s.scopes.map(a=>e("span",{className:"PersonalAccessTokenCard__ScopeName SRC-primary-text-color SRC-primary-color-hover SRC-hand-cursor SRC-inlineFlex","data-tip":m[a].description,children:m[a].displayName},a))]}),o("div",{className:"SRC-eqHeightRow",children:[o("span",{children:["Last used ",E(s.lastUsed).fromNow()]}),e("span",{className:"SRC-deemphasized-text",children:" | "}),o("span",{children:["Created ",E(s.createdOn).fromNow()]})]})]}),e("div",{className:"PersonalAccessTokenCard__DeleteButton",children:e(T,{variant:"default","aria-label":"delete",onClick:()=>{i?M(s.id,n).then(()=>{l()}).catch(a=>{t(a)}):c(!0)},children:e(I,{options:{icon:"delete"},"aria-hidden":"true"})})})]})};try{S.displayName="AccessTokenCard",S.__docgenInfo={description:"",displayName:"AccessTokenCard",props:{accessToken:{defaultValue:null,description:"Record referring to an access token, not a token itself",name:"accessToken",required:!0,type:{name:"AccessTokenRecord"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(...args: any[]) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/personal_access_token/AccessTokenCard.tsx#AccessTokenCard"]={docgenInfo:S.__docgenInfo,name:"AccessTokenCard",path:"src/lib/containers/personal_access_token/AccessTokenCard.tsx#AccessTokenCard"})}catch{}const ae="You must provide a token name and at least one permission.",N=({onClose:s,onCreate:l})=>{const{accessToken:n}=x(),[d,c]=r.exports.useState(""),[t,i]=r.exports.useState(!0),[a,C]=r.exports.useState(!1),[h,_]=r.exports.useState(!1),[f,k]=r.exports.useState(!1),[u,D]=r.exports.useState(!1),[q,V]=r.exports.useState(""),[F,b]=r.exports.useState(""),[H,R]=r.exports.useState(!1),Y=y=>{c(y.target.value)},z=(y,p)=>!!y&&p.some(P=>P),K=async y=>{if(y.preventDefault(),z(d,[t,a,h]))try{const p={scope:[],name:d};t&&p.scope.push("view"),a&&p.scope.push("download"),h&&p.scope.push("modify"),k(!0);const P=await U(p,n);k(!1),V(P.token),D(!0),l()}catch(p){k(!1),b(p.reason),R(!0)}else b(ae),R(!0)};return e(A,{className:"bootstrap-4-backport AccessTokenModal",animation:!1,show:!0,onHide:s,backdrop:"static",children:o(G,{children:[e(A.Header,{closeButton:!0,children:e(A.Title,{children:"Create New Personal Access Token"})}),e(ee,{children:f?L:u?o(w,{children:[e("span",{className:"SRC-boldText",children:"This token will not be able to be retrieved again."})," ",e("span",{children:"If needed, generate a new personal access token, and delete this one."}),e("div",{className:"AccessTokenModal__CopyToClipboardContainer",children:e($,{value:q,inputWidth:"350px"})}),e("p",{children:"This token grants access to your account functions and should be treated like a password."})]}):o("div",{className:"SRC-marginFive",children:[o("div",{className:"SRC-marginBottomTen",children:[e(B,{className:"SRC-boldText",children:"Token Name"}),e(oe,{autoFocus:!0,className:"AccessTokenModal__TokenNameInput",value:d,onChange:Y,type:"text",placeholder:"e.g. Synapse command line access on my laptop"})]}),o("div",{className:"SRC-marginBottomTop",children:[e(B,{className:"SRC-boldText",children:"Token Permissions"}),e(v,{label:m.view.displayName,checked:t,onChange:()=>i(!t),children:o("div",{className:"AccessTokenModal__ScopeDescription",children:[m.view.description,". Required to use Synapse programmatic clients."]})}),e(v,{label:m.download.displayName,checked:a,onChange:()=>C(!a),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:m.download.description})}),e(v,{label:m.modify.displayName,checked:h,onChange:()=>_(!h),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:m.modify.description})})]}),e("div",{className:"SRC-center-text",children:H&&e(O,{error:F})})]})}),e(A.Footer,{children:u?e(T,{variant:"outline",onClick:s,children:"Close"}):o(w,{children:[e(T,{variant:"outline",onClick:s,children:"Cancel"}),e(T,{type:"submit",variant:"sds-primary",onClick:K,children:"Create Token"})]})})]})})};try{N.displayName="CreateAccessTokenModal",N.__docgenInfo={description:"",displayName:"CreateAccessTokenModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(...args: any[]) => void"}},onCreate:{defaultValue:null,description:"",name:"onCreate",required:!0,type:{name:"(...args: any[]) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/personal_access_token/CreateAccessTokenModal.tsx#CreateAccessTokenModal"]={docgenInfo:N.__docgenInfo,name:"CreateAccessTokenModal",path:"src/lib/containers/personal_access_token/CreateAccessTokenModal.tsx#CreateAccessTokenModal"})}catch{}const g=({title:s,body:l})=>{var k;const[n,d]=r.exports.useState(!1),{data:c,isLoading:t,error:i,refetch:a,fetchNextPage:C,hasNextPage:h}=se(),_=()=>{a()},f=(k=c==null?void 0:c.pages.flatMap(u=>u.results))!=null?k:[];return o("div",{className:"PersonalAccessTokenPage bootstrap-4-backport",children:[o("div",{className:"PersonalAccessTokenPage__Header",children:[o("div",{className:"PersonalAccessTokenPage__Header__CopyText",children:[e("h1",{children:s}),l]}),e("div",{className:"PersonalAccessTokenPage__Header__CreateButton",children:e(T,{variant:"sds-primary",onClick:()=>d(!0),children:"Create New Token"})})]}),o(Q,{children:[n&&e(N,{onClose:()=>d(!1),onCreate:_}),o("div",{children:[!t&&f.length===0&&e("div",{className:"PersonalAccessTokenPage__NoTokensMessage SRC-text-title",children:"You currently have no personal access tokens."}),o("div",{className:"PersonalAccessTokenPage__CardList",children:[f.map(u=>e(S,{accessToken:u,onDelete:_},u.id)),t&&L,!t&&h&&!i&&e("div",{className:"PersonalAccessTokenPage__CardList__LoadMore",children:e(T,{className:"PersonalAccessTokenPage__CardList__LoadMore__Button",variant:"sds-primary",onClick:()=>{C()},children:"Load More"})})]}),i&&e(O,{error:i})]})]})]})};try{g.displayName="AccessTokenPage",g.__docgenInfo={description:"",displayName:"AccessTokenPage",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string | Element"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/personal_access_token/AccessTokenPage.tsx#AccessTokenPage"]={docgenInfo:g.__docgenInfo,name:"AccessTokenPage",path:"src/lib/containers/personal_access_token/AccessTokenPage.tsx#AccessTokenPage"})}catch{}const je={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:57,line:10},endLoc:{col:1,line:12},startBody:{col:57,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/AccessTokenPage",component:g},ne=s=>e(g,{...s}),te=ne.bind({});te.args={title:"Personal Access Tokens",body:"Create and manage tokens that can be used to access your Synapse account programmatically."};const We=["Demo"];export{te as Demo,We as __namedExportsOrder,je as default};

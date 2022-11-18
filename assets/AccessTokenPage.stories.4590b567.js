import{r,a as o,j as e,F as v}from"./jsx-runtime.aa766aaf.js";import{V as x,cZ as j,a9 as W,c_ as M,aw as G,R as O,c$ as U,a8 as Q}from"./index.0a2c4939.js";import{u as X}from"./useInfiniteQuery.9a0fe06d.js";import{l as L}from"./LoadingScreen.c4224e86.js";import{h as I}from"./moment.a565bb48.js";import{I as E}from"./IconSvg.d73f159f.js";import{W as Z}from"./WarningModal.25805129.js";import{T as $}from"./Tooltip.e4334ac7.js";import{B as T}from"./Button.c2cc208f.js";import{C as J}from"./CopyToClipboardInput.0c9304a7.js";import{C as w}from"./Checkbox.7ee8aada.js";import{M as A,a as ee}from"./Modal.47c74737.js";import{c as B,b as oe}from"./isArray.24130e12.js";import"./iframe.bd885096.js";import"./index.2efb6d36.js";import"./SynapseConstants.290eab74.js";import"./styled.2fe8edb9.js";import"./utils.b239c5dc.js";import"./TransitionGroupContext.4c6d8009.js";import"./Alert.f1eda723.js";import"./createWithBsPrefix.2cafb9ec.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./Link.d09d0f36.js";import"./Typography.57d7ee2f.js";import"./Button.d4a39ac2.js";import"./ButtonBase.4c393dc9.js";import"./createSvgIcon.d27817df.js";import"./InfoOutlined.548f9119.js";import"./IconCopy.0f69ca31.js";import"./ToastMessage.167572b3.js";import"./FullWidthAlert.8371c9c1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.bdc3b93e.js";import"./isSymbol.36b96d1e.js";import"./contains.91b3e071.js";import"./inheritsLoose.37c69c63.js";import"./usePrevious.82adf379.js";import"./useWaitForDOMRef.dcf70bcc.js";function se(s){const{accessToken:l}=x();return X(["getPersonalAccessTokens"],async n=>await j(l,n.pageParam),{...s,getNextPageParam:n=>n.nextPageToken})}const m={openid:{displayName:"OpenID",description:"Access to your Synapse identity and certain user information"},view:{displayName:"View",description:"Permission to view the content which you can view"},modify:{displayName:"Modify",description:"Permission to modify the content which you can modify (create, change, delete)"},download:{displayName:"Download",description:"Permission to download the content which you can download"},authorize:{displayName:"Authorize",description:"Permission to authorize others to access the resources you control"},offline_access:{displayName:"Offline Access",description:"Permission to access the resources authorized here when you are not logged in, until you explicitly revoke access"}},S=({accessToken:s,onDelete:l})=>{const{accessToken:n}=x(),[d,c]=r.exports.useState(!1),t=W(),i=s.state==="EXPIRED";return o("div",{className:"cardContainer PersonalAccessTokenCard"+(i?" bg-warning":""),children:[e(Z,{title:"Confirm Deletion",modalBody:o(v,{children:[e("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),e("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]}),confirmButtonText:"Delete Token",onCancel:()=>c(!1),onConfirm:a=>{M(a,n).then(()=>{l(),c(!1)}).catch(C=>{t(C)})},confirmButtonVariant:"danger",show:d,onConfirmCallbackArgs:[s.id,n]}),o("div",{className:"SRC-cardContent",children:[o("div",{className:"SRC-eqHeightRow SRC-userCardName",children:[e("span",{className:"SRC-blackText",children:s.name}),i&&e($,{title:"This token has expired. It no longer works and can only be deleted.",enterNextDelay:100,children:e("span",{"aria-hidden":"true",children:e(E,{icon:"warning"})})})]}),o("div",{className:"SRC-eqHeightRow",children:[e("span",{children:"Permissions: "}),s.scopes.map(a=>e("span",{className:"PersonalAccessTokenCard__ScopeName SRC-primary-text-color SRC-primary-color-hover SRC-hand-cursor SRC-inlineFlex","data-tip":m[a].description,children:m[a].displayName},a))]}),o("div",{className:"SRC-eqHeightRow",children:[o("span",{children:["Last used ",I(s.lastUsed).fromNow()]}),e("span",{className:"SRC-deemphasized-text",children:" | "}),o("span",{children:["Created ",I(s.createdOn).fromNow()]})]})]}),e("div",{className:"PersonalAccessTokenCard__DeleteButton",children:e(T,{variant:"default","aria-label":"delete",onClick:()=>{i?M(s.id,n).then(()=>{l()}).catch(a=>{t(a)}):c(!0)},children:e(E,{icon:"delete","aria-hidden":"true"})})})]})};try{S.displayName="AccessTokenCard",S.__docgenInfo={description:"",displayName:"AccessTokenCard",props:{accessToken:{defaultValue:null,description:"Record referring to an access token, not a token itself",name:"accessToken",required:!0,type:{name:"AccessTokenRecord"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(...args: any[]) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/personal_access_token/AccessTokenCard.tsx#AccessTokenCard"]={docgenInfo:S.__docgenInfo,name:"AccessTokenCard",path:"src/lib/containers/personal_access_token/AccessTokenCard.tsx#AccessTokenCard"})}catch{}const ae="You must provide a token name and at least one permission.",N=({onClose:s,onCreate:l})=>{const{accessToken:n}=x(),[d,c]=r.exports.useState(""),[t,i]=r.exports.useState(!0),[a,C]=r.exports.useState(!1),[h,_]=r.exports.useState(!1),[f,k]=r.exports.useState(!1),[u,D]=r.exports.useState(!1),[q,V]=r.exports.useState(""),[F,b]=r.exports.useState(""),[H,R]=r.exports.useState(!1),Y=y=>{c(y.target.value)},K=(y,p)=>!!y&&p.some(P=>P),z=async y=>{if(y.preventDefault(),K(d,[t,a,h]))try{const p={scope:[],name:d};t&&p.scope.push("view"),a&&p.scope.push("download"),h&&p.scope.push("modify"),k(!0);const P=await U(p,n);k(!1),V(P.token),D(!0),l()}catch(p){k(!1),b(p.reason),R(!0)}else b(ae),R(!0)};return e(A,{className:"bootstrap-4-backport AccessTokenModal",animation:!1,show:!0,onHide:s,backdrop:"static",children:o(G,{children:[e(A.Header,{closeButton:!0,children:e(A.Title,{children:"Create New Personal Access Token"})}),e(ee,{children:f?L:u?o(v,{children:[e("span",{className:"SRC-boldText",children:"This token will not be able to be retrieved again."})," ",e("span",{children:"If needed, generate a new personal access token, and delete this one."}),e("div",{className:"AccessTokenModal__CopyToClipboardContainer",children:e(J,{value:q,inputWidth:"350px"})}),e("p",{children:"This token grants access to your account functions and should be treated like a password."})]}):o("div",{className:"SRC-marginFive",children:[o("div",{className:"SRC-marginBottomTen",children:[e(B,{className:"SRC-boldText",children:"Token Name"}),e(oe,{autoFocus:!0,className:"AccessTokenModal__TokenNameInput",value:d,onChange:Y,type:"text",placeholder:"e.g. Synapse command line access on my laptop"})]}),o("div",{className:"SRC-marginBottomTop",children:[e(B,{className:"SRC-boldText",children:"Token Permissions"}),e(w,{label:m.view.displayName,checked:t,onChange:()=>i(!t),children:o("div",{className:"AccessTokenModal__ScopeDescription",children:[m.view.description,". Required to use Synapse programmatic clients."]})}),e(w,{label:m.download.displayName,checked:a,onChange:()=>C(!a),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:m.download.description})}),e(w,{label:m.modify.displayName,checked:h,onChange:()=>_(!h),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:m.modify.description})})]}),e("div",{className:"SRC-center-text",children:H&&e(O,{error:F})})]})}),e(A.Footer,{children:u?e(T,{variant:"outline",onClick:s,children:"Close"}):o(v,{children:[e(T,{variant:"outline",onClick:s,children:"Cancel"}),e(T,{type:"submit",variant:"sds-primary",onClick:z,children:"Create Token"})]})})]})})};try{N.displayName="CreateAccessTokenModal",N.__docgenInfo={description:"",displayName:"CreateAccessTokenModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(...args: any[]) => void"}},onCreate:{defaultValue:null,description:"",name:"onCreate",required:!0,type:{name:"(...args: any[]) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/personal_access_token/CreateAccessTokenModal.tsx#CreateAccessTokenModal"]={docgenInfo:N.__docgenInfo,name:"CreateAccessTokenModal",path:"src/lib/containers/personal_access_token/CreateAccessTokenModal.tsx#CreateAccessTokenModal"})}catch{}const g=({title:s,body:l})=>{var k;const[n,d]=r.exports.useState(!1),{data:c,isLoading:t,error:i,refetch:a,fetchNextPage:C,hasNextPage:h}=se(),_=()=>{a()},f=(k=c==null?void 0:c.pages.flatMap(u=>u.results))!=null?k:[];return o("div",{className:"PersonalAccessTokenPage bootstrap-4-backport",children:[o("div",{className:"PersonalAccessTokenPage__Header",children:[o("div",{className:"PersonalAccessTokenPage__Header__CopyText",children:[e("h1",{children:s}),l]}),e("div",{className:"PersonalAccessTokenPage__Header__CreateButton",children:e(T,{variant:"sds-primary",onClick:()=>d(!0),children:"Create New Token"})})]}),o(Q,{children:[n&&e(N,{onClose:()=>d(!1),onCreate:_}),o("div",{children:[!t&&f.length===0&&e("div",{className:"PersonalAccessTokenPage__NoTokensMessage SRC-text-title",children:"You currently have no personal access tokens."}),o("div",{className:"PersonalAccessTokenPage__CardList",children:[f.map(u=>e(S,{accessToken:u,onDelete:_},u.id)),t&&L,!t&&h&&!i&&e("div",{className:"PersonalAccessTokenPage__CardList__LoadMore",children:e(T,{className:"PersonalAccessTokenPage__CardList__LoadMore__Button",variant:"sds-primary",onClick:()=>{C()},children:"Load More"})})]}),i&&e(O,{error:i})]})]})]})};try{g.displayName="AccessTokenPage",g.__docgenInfo={description:"",displayName:"AccessTokenPage",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string | Element"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/personal_access_token/AccessTokenPage.tsx#AccessTokenPage"]={docgenInfo:g.__docgenInfo,name:"AccessTokenPage",path:"src/lib/containers/personal_access_token/AccessTokenPage.tsx#AccessTokenPage"})}catch{}const We={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:57,line:10},endLoc:{col:1,line:12},startBody:{col:57,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/AccessTokenPage",component:g},ne=s=>e(g,{...s}),te=ne.bind({});te.args={title:"Personal Access Tokens",body:"Create and manage tokens that can be used to access your Synapse account programmatically."};const Ge=["Demo"];export{te as Demo,Ge as __namedExportsOrder,We as default};

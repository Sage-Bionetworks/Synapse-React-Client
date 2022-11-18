import{h as j}from"./moment.a565bb48.js";import{r as d,a as l,j as e,F as I}from"./jsx-runtime.aa766aaf.js";import{f as F}from"./DateFormatter.b979f188.js";import{V as g,dj as O,ao as w,dk as z,dl as Q}from"./index.0a2c4939.js";import{u as _}from"./useEntity.3fe82088.js";import{u as k}from"./useMutation.c00b8089.js";import{u as q}from"./useInfiniteQuery.9a0fe06d.js";import{E as G}from"./EntityLink.101d699f.js";import{B as V,S as W}from"./LoadingScreen.c4224e86.js";import{W as Y}from"./WarningModal.25805129.js";import{C as v}from"./Checkbox.7ee8aada.js";import{T as y}from"./Typography.57d7ee2f.js";import{T as $}from"./Table.dd1703be.js";import{A as H}from"./Alert.f1eda723.js";import{B as u}from"./Button.c2cc208f.js";import"./iframe.bd885096.js";import"./index.2efb6d36.js";import"./SynapseConstants.290eab74.js";import"./styled.2fe8edb9.js";import"./utils.b239c5dc.js";import"./TransitionGroupContext.4c6d8009.js";import"./isArray.24130e12.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./createWithBsPrefix.2cafb9ec.js";import"./Link.d09d0f36.js";import"./Button.d4a39ac2.js";import"./ButtonBase.4c393dc9.js";import"./queryKeys.e0d3085f.js";import"./pick.e97e604b.js";import"./uniqueId.bdc3b93e.js";import"./isSymbol.36b96d1e.js";import"./_baseClone.c6c5507c.js";import"./_getTag.416f77c8.js";import"./_Set.f82bf539.js";import"./_baseSlice.50189bc5.js";import"./EntityIcon.6506c628.js";import"./IconSvg.d73f159f.js";import"./Tooltip.e4334ac7.js";import"./createSvgIcon.d27817df.js";import"./InfoOutlined.548f9119.js";import"./Skeleton.b9cd2726.js";import"./Modal.47c74737.js";import"./contains.91b3e071.js";import"./inheritsLoose.37c69c63.js";import"./usePrevious.82adf379.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.dcf70bcc.js";function J(r){const{accessToken:t}=g();return q(["trashcan","list",t],i=>O(t,i.pageParam),{...r,getNextPageParam:(i,n)=>{const s=n.flatMap(o=>o.results).length;if(i.totalNumberOfResults>s)return s}})}function K(r){const t=w(),{accessToken:i}=g();return k(n=>{typeof n=="string"&&(n=new Set([n]));const s=Array.from(n).map(o=>z(o,i));return Promise.allSettled(s)},{...r,onSuccess:async(n,s,o)=>{await t.invalidateQueries(["trashcan"]),r!=null&&r.onSuccess&&await r.onSuccess(n,s,o)}})}function U(r){const t=w(),{accessToken:i}=g();return k(n=>{typeof n=="string"&&(n=new Set([n]));const s=Array.from(n).map(o=>Q(o,i));return Promise.allSettled(s)},{...r,onSuccess:async(n,s,o)=>{await t.invalidateQueries(["trashcan"]),r!=null&&r.onSuccess&&await r.onSuccess(n,s,o)}})}function X(r){const{item:t,isSelected:i,setIsSelected:n,onRestore:s}=r,{data:o}=_(t.originalParentId);return l("tr",{children:[e("td",{children:e(v,{label:`Select ${t.entityId}`,hideLabel:!0,checked:i,onChange:n})}),e("td",{children:t.entityId}),e("td",{children:t.entityName}),e("td",{children:l(I,{children:[o&&e(G,{entity:o})," (",t.originalParentId,")"]})}),e("td",{children:F(j(t.deletedOn))}),e("td",{children:e(u,{size:"sm",variant:"outline",onClick:s,children:"Restore"})})]})}function Z(r){return r.filter(t=>t.status==="rejected").map(t=>t.reason)}function P(){var x;const r=d.exports.useRef(!0),[t,i]=d.exports.useState(new Set),[n,s]=d.exports.useState(!1),[o,S]=d.exports.useState([]);d.exports.useEffect(()=>(r.current=!0,()=>{r.current=!1}));function C(a,m){r.current&&(a?S(Z(a)):m&&S([m]),i(new Set))}const{mutate:T,isLoading:R}=K({onSettled:C}),{mutate:E,isLoading:b}=U({onSettled:C}),M=R||b,{data:h,isLoading:p,hasNextPage:B,fetchNextPage:D,isFetchingNextPage:N}=J({useErrorBoundary:!0}),c=(x=h==null?void 0:h.pages.flatMap(a=>a.results))!=null?x:[],L=t.size===c.length,A=()=>{i(L?new Set:new Set(c.map(a=>a.entityId)))};return l("div",{className:"bootstrap-4-backport",children:[e(V,{show:M,headlineText:b?"Deleting...":"Restoring..."}),e(y,{variant:"body1",children:'The trash can contains items that were recently deleted. You can recover deleted items in the trash can by clicking "Restore". Items will remain in the trash can for 30 days before being automatically purged.'}),e(Y,{title:"Delete selected items from your Trash?",modalBody:e(y,{variant:"body1",children:"You can't undo this action."}),confirmButtonText:"Delete",confirmButtonVariant:"danger",onConfirm:()=>{E(t),s(!1)},onCancel:()=>{s(!1)},show:n}),p&&e(W,{}),!p&&c.length===0&&e(y,{variant:"body1",children:"Trash Can is currently empty."}),!p&&c.length>0&&l(I,{children:[l($,{striped:!0,borderless:!0,bordered:!1,children:[e("thead",{children:l("tr",{children:[e("th",{children:e(v,{label:"Select All",hideLabel:!0,checked:L,onChange:A})}),e("th",{children:"ID"}),e("th",{children:"Name"}),e("th",{children:"Location"}),e("th",{children:"Deleted On"}),e("th",{})]})}),e("tbody",{children:c.map(a=>e(X,{item:a,isSelected:t.has(a.entityId),setIsSelected:m=>{i(f=>(m?f.add(a.entityId):f.delete(a.entityId),new Set(f)))},onRestore:()=>{T(a.entityId),t.delete(a.entityId)}},a.entityId))})]}),o.length>0&&l(H,{dismissible:!1,show:!0,variant:"danger",transition:!1,children:["The following errors were encountered:",e("ul",{children:o.map(a=>e("li",{children:a.message},a.message))})]}),l("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[B&&e(u,{variant:"sds-primary",disabled:N,onClick:()=>{D()},children:"Load More"}),e("div",{style:{margin:"auto"}}),e(u,{variant:"danger",disabled:t.size===0,onClick:()=>{s(!0)},children:"Delete Selected"}),e(u,{variant:"outline",disabled:t.size===0,onClick:()=>{T(t)},children:"Restore Selected"})]})]})]})}const Ke={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TrashCanList } from './TrashCanList'

export default {
  title: 'Synapse/TrashCanList',
  component: TrashCanList,
} as ComponentMeta<typeof TrashCanList>

const Template: ComponentStory<typeof TrashCanList> = args => (
  <TrashCanList {...args} />
)

export const TrashCan = Template.bind({})
`,locationsMap:{"trash-can":{startLoc:{col:54,line:10},endLoc:{col:1,line:12},startBody:{col:54,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/TrashCanList",component:P},ee=r=>e(P,{...r}),Ue=ee.bind({}),Xe=["TrashCan"];export{Ue as TrashCan,Xe as __namedExportsOrder,Ke as default};

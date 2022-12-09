import{I as v}from"./IconSvg.710ae2ef.js";import{M as y}from"./index.05d3527e.js";import{j as t,F as _}from"./jsx-runtime.43a8fcf9.js";import{a as g,b as F,c as S}from"./useFavorites.4f42fa11.js";import{S as B}from"./Skeleton.2b718cf1.js";import{a as h}from"./Tooltip.9e1c2716.js";import{I as C}from"./IconButton.f195eccf.js";import"./SvgIcon.6442358d.js";import"./styled.76b26431.js";import"./index.91cff701.js";import"./iframe.f725ca92.js";import"./SynapseConstants.4792b5b5.js";import"./Button.1bf4e27e.js";import"./useTheme.af9f301b.js";import"./TransitionGroupContext.b91ad5da.js";import"./Alert.52cd8abc.js";import"./hook.21b06627.js";import"./createWithBsPrefix.5369d369.js";import"./divWithClassName.ce1df20c.js";import"./index.35ce73ec.js";import"./Fade.b7951dc7.js";import"./isArray.ef4abd22.js";import"./getEndpoint.f1f195f5.js";import"./Link.fae97ed4.js";import"./Typography.1c91c940.js";import"./Button.c355b500.js";import"./ButtonBase.48ba7e09.js";import"./emotion-react.browser.esm.4fa41df1.js";import"./useMutation.ee241b25.js";import"./useInfiniteQuery.059ba1ba.js";function a(o){const{condition:n,wrapper:p,wrapperProps:i,children:e}=o;return n?t(p,{...i,children:e}):t(_,{children:e})}try{a.displayName="ConditionalWrapper",a.__docgenInfo={description:"",displayName:"ConditionalWrapper",props:{condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"ComponentType<{ children?: ReactNode; }>"}},wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!1,type:{name:'Omit<{ children?: ReactNode; }, "children">'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/utils/ConditionalWrapper.tsx#ConditionalWrapper"]={docgenInfo:a.__docgenInfo,name:"ConditionalWrapper",path:"src/lib/containers/utils/ConditionalWrapper.tsx#ConditionalWrapper"})}catch{}function r(o){const{entityId:n}=o,{accessToken:p}=y(),i=!!p,{isFavorite:e,isLoading:d}=g(n),{mutate:c,isLoading:m}=F(),{mutate:l,isLoading:u}=S(),f=d||m||u||!i;let s="Add to Favorites";return i?e&&(s="Remove from Favorites"):s="Sign in to add this to your favorites",t(a,{condition:d,wrapper:B,children:t(h,{title:s,placement:"top",children:t("span",{children:t(C,{size:"small",disabled:f,onClick:()=>{e?l(n):c(n)},sx:{padding:"2px"},children:t(v,{icon:e?"fav":"favOutline",sx:{color:"tertiary.main",width:"21px",height:"21px"},wrap:!1})})})})})}try{r.displayName="FavoriteButton",r.__docgenInfo={description:`Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
added to/removed from their favorites`,displayName:"FavoriteButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/favorites/FavoriteButton.tsx#FavoriteButton"]={docgenInfo:r.__docgenInfo,name:"FavoriteButton",path:"src/lib/containers/favorites/FavoriteButton.tsx#FavoriteButton"})}catch{}const ot={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FavoriteButton from './FavoriteButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/FavoriteButton',
  component: FavoriteButton,
} as ComponentMeta<typeof FavoriteButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FavoriteButton> = args => (
  <FavoriteButton {...args} />
)

export const Demo = Template.bind({
  entityId: 'syn33576900',
})
`,locationsMap:{demo:{startLoc:{col:20,line:17},endLoc:{col:2,line:19},startBody:{col:20,line:17},endBody:{col:2,line:19}}}}},title:"Synapse/FavoriteButton",component:r},x=o=>t(r,{...o}),et=x.bind({entityId:"syn33576900"}),nt=["Demo"];export{et as Demo,nt as __namedExportsOrder,ot as default};

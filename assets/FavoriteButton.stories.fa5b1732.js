import{I as v}from"./IconSvg.23552105.js";import{V as y}from"./EntityTypeUtils.9c2483b3.js";import{j as t,F as _}from"./jsx-runtime.d04151d1.js";import{a as g,b as F,c as S}from"./useFavorites.606e54bf.js";import{S as B}from"./Skeleton.b0e23dcf.js";import{a as h}from"./Tooltip.4974d54a.js";import{I as C}from"./IconButton.f2c2856c.js";import"./SvgIcon.d3ec47f0.js";import"./styled.1efff5b8.js";import"./index.8319c373.js";import"./iframe.d32e0f35.js";import"./Fade.f21ee508.js";import"./useTheme.175bd669.js";import"./TransitionGroupContext.1ef7d36b.js";import"./isArray.88add67b.js";import"./Button.a12385d6.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./createWithBsPrefix.f5521544.js";import"./Link.45362a72.js";import"./Typography.73bd7049.js";import"./Button.09b7bba7.js";import"./ButtonBase.3d334067.js";import"./emotion-react.browser.esm.b7b35e3a.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.770d73de.js";import"./hook.ba873afd.js";import"./divWithClassName.2e38eee3.js";import"./useMutation.ce8e7b55.js";import"./useInfiniteQuery.10e21598.js";function a(o){const{condition:n,wrapper:p,wrapperProps:i,children:e}=o;return n?t(p,{...i,children:e}):t(_,{children:e})}try{a.displayName="ConditionalWrapper",a.__docgenInfo={description:"",displayName:"ConditionalWrapper",props:{condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"ComponentType<{ children?: ReactNode; }>"}},wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!1,type:{name:'Omit<{ children?: ReactNode; }, "children">'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/utils/ConditionalWrapper.tsx#ConditionalWrapper"]={docgenInfo:a.__docgenInfo,name:"ConditionalWrapper",path:"src/lib/containers/utils/ConditionalWrapper.tsx#ConditionalWrapper"})}catch{}function r(o){const{entityId:n}=o,{accessToken:p}=y(),i=!!p,{isFavorite:e,isLoading:d}=g(n),{mutate:c,isLoading:m}=F(),{mutate:l,isLoading:u}=S(),f=d||m||u||!i;let s="Add to Favorites";return i?e&&(s="Remove from Favorites"):s="Sign in to add this to your favorites",t(a,{condition:d,wrapper:B,children:t(h,{title:s,placement:"top",children:t("span",{children:t(C,{size:"small",disabled:f,onClick:()=>{e?l(n):c(n)},sx:{padding:"2px"},children:t(v,{icon:e?"fav":"favOutline",sx:{color:"tertiary.main",width:"21px",height:"21px"},wrap:!1})})})})})}try{r.displayName="FavoriteButton",r.__docgenInfo={description:`Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
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

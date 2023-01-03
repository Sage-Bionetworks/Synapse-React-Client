import{I as v}from"./IconSvg.7db66457.js";import{W as y}from"./EntityTypeUtils.68b1ba2e.js";import{j as t,F as _}from"./jsx-runtime.abb726e8.js";import{a as g,b as F,c as S}from"./useFavorites.be72a8de.js";import{S as B}from"./Skeleton.a4e29131.js";import{a as h}from"./Tooltip.6e0804a9.js";import{I as C}from"./IconButton.ed9fd281.js";import"./SvgIcon.e2be6ff9.js";import"./styled.f63790d0.js";import"./index.2c5f845c.js";import"./iframe.eb3e4e59.js";import"./Fade.a8b10681.js";import"./useTheme.8f8018ca.js";import"./TransitionGroupContext.bebd881a.js";import"./isArray.ab001f9e.js";import"./Button.adf7cc86.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./createWithBsPrefix.1bfef79f.js";import"./Link.27f5a2e0.js";import"./Typography.1b6708c1.js";import"./Button.aed7d197.js";import"./ButtonBase.5b0e8114.js";import"./emotion-react.browser.esm.e1070f55.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.955b55b4.js";import"./hook.f27fbe2d.js";import"./divWithClassName.dfc40d29.js";import"./useMutation.7f638909.js";import"./useInfiniteQuery.08a27252.js";function a(o){const{condition:n,wrapper:p,wrapperProps:i,children:e}=o;return n?t(p,{...i,children:e}):t(_,{children:e})}try{a.displayName="ConditionalWrapper",a.__docgenInfo={description:"",displayName:"ConditionalWrapper",props:{condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"ComponentType<{ children?: ReactNode; }>"}},wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!1,type:{name:'Omit<{ children?: ReactNode; }, "children">'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/utils/ConditionalWrapper.tsx#ConditionalWrapper"]={docgenInfo:a.__docgenInfo,name:"ConditionalWrapper",path:"src/lib/containers/utils/ConditionalWrapper.tsx#ConditionalWrapper"})}catch{}function r(o){const{entityId:n}=o,{accessToken:p}=y(),i=!!p,{isFavorite:e,isLoading:d}=g(n),{mutate:c,isLoading:m}=F(),{mutate:l,isLoading:u}=S(),f=d||m||u||!i;let s="Add to Favorites";return i?e&&(s="Remove from Favorites"):s="Sign in to add this to your favorites",t(a,{condition:d,wrapper:B,children:t(h,{title:s,placement:"top",children:t("span",{children:t(C,{size:"small",disabled:f,onClick:()=>{e?l(n):c(n)},sx:{padding:"2px"},children:t(v,{icon:e?"fav":"favOutline",sx:{color:"tertiary.main",width:"21px",height:"21px"},wrap:!1})})})})})}try{r.displayName="FavoriteButton",r.__docgenInfo={description:`Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
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

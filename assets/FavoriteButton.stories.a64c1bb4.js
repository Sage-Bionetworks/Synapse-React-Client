import{I as v}from"./IconSvg.a36fd00f.js";import{V as y}from"./EntityTypeUtils.f136fe8e.js";import{j as t,F as _}from"./jsx-runtime.edcee20f.js";import{a as g,b as F,c as S}from"./useFavorites.4256c8ca.js";import{S as B}from"./Skeleton.7309b0e8.js";import{a as h}from"./Tooltip.6287427b.js";import{I as C}from"./IconButton.f86e6b85.js";import"./SvgIcon.cf85a686.js";import"./styled.57026967.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./Fade.e73bdacf.js";import"./useTheme.c864c010.js";import"./TransitionGroupContext.9f30f89b.js";import"./isArray.ba2a5774.js";import"./Button.beed9c8a.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./createWithBsPrefix.fb2e744c.js";import"./Link.c844031a.js";import"./Typography.8ba12270.js";import"./Button.237100ef.js";import"./ButtonBase.8a19de44.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./divWithClassName.198d5031.js";import"./useMutation.e868fb3d.js";import"./useInfiniteQuery.62663485.js";function a(o){const{condition:n,wrapper:p,wrapperProps:i,children:e}=o;return n?t(p,{...i,children:e}):t(_,{children:e})}try{a.displayName="ConditionalWrapper",a.__docgenInfo={description:"",displayName:"ConditionalWrapper",props:{condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"ComponentType<{ children?: ReactNode; }>"}},wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!1,type:{name:'Omit<{ children?: ReactNode; }, "children">'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/utils/ConditionalWrapper.tsx#ConditionalWrapper"]={docgenInfo:a.__docgenInfo,name:"ConditionalWrapper",path:"src/lib/containers/utils/ConditionalWrapper.tsx#ConditionalWrapper"})}catch{}function r(o){const{entityId:n}=o,{accessToken:p}=y(),i=!!p,{isFavorite:e,isLoading:d}=g(n),{mutate:c,isLoading:m}=F(),{mutate:l,isLoading:u}=S(),f=d||m||u||!i;let s="Add to Favorites";return i?e&&(s="Remove from Favorites"):s="Sign in to add this to your favorites",t(a,{condition:d,wrapper:B,children:t(h,{title:s,placement:"top",children:t("span",{children:t(C,{size:"small",disabled:f,onClick:()=>{e?l(n):c(n)},sx:{padding:"2px"},children:t(v,{icon:e?"fav":"favOutline",sx:{color:"tertiary.main",width:"21px",height:"21px"},wrap:!1})})})})})}try{r.displayName="FavoriteButton",r.__docgenInfo={description:`Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
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

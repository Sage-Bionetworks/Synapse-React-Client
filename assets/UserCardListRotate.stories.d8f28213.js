import{U as t}from"./UserCardListRotate.129d0ad5.js";import{t as r}from"./SynapseConstants.aef18750.js";import{j as e}from"./jsx-runtime.590681cd.js";import"./sqlFunctions.7c5ea660.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.ee6936f9.js";import"./index.bb7b660b.js";import"./index.220fbbb9.js";import"./iframe.d3c6f1d5.js";import"./Button.d3c811d3.js";import"./styled.1c864c13.js";import"./Tooltip.0f7aeb46.js";import"./SvgIcon.01f2428a.js";import"./useTheme.fa81c060.js";import"./TransitionGroupContext.e7de7ea1.js";import"./FullWidthAlert.8cff24d3.js";import"./hook.5f699942.js";import"./createWithBsPrefix.4b46c4d7.js";import"./divWithClassName.638b701c.js";import"./index.35ce73ec.js";import"./Typography.62f204bb.js";import"./Fade.dfa4b9be.js";import"./isArray.b759bc77.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.88997e16.js";import"./IconButton.7622d68d.js";import"./ButtonBase.c831f7af.js";import"./emotion-react.browser.esm.a07d05d9.js";import"./Link.3f8a0a55.js";import"./Button.6aee65d4.js";import"./ColumnType.0fc7f115.js";import"./UserCardList.988f8d92.js";import"./UserCard.f8a4e9c0.js";import"./IconCopy.a05a23c9.js";import"./SkeletonTable.69520a2f.js";import"./times.58442ccf.js";import"./toInteger.4e5bd8ec.js";import"./isSymbol.acb677d8.js";import"./Skeleton.95aeb5c4.js";import"./ToastMessage.06f6548f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ac4a52ef.js";import"./toString.e4762266.js";import"./Overlay.08bde75f.js";import"./contains.5e789a3e.js";import"./usePopperMarginModifiers.fa06e499.js";import"./useWaitForDOMRef.1c0cdf8b.js";import"./without.3cab2d82.js";import"./_cacheHas.c3ef5294.js";import"./use-deep-compare-effect.esm.e5e25a62.js";const et={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserCardListRotate from './UserCardListRotate'
import { MEDIUM_USER_CARD } from '../utils/SynapseConstants'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home Page/UserCardListRotate',
  component: UserCardListRotate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserCardListRotate>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserCardListRotate> = args => (
  <UserCardListRotate {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  sql: 'SELECT * FROM syn13897207 where isFeatured=true',
  count: 3,
  useQueryResultUserData: true,
  size: MEDIUM_USER_CARD,
  summaryLinkText: 'EXPLORE ALL PEOPLE',
  summaryLink: '/Explore/People',
}
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const it=["Demo"];export{s as Demo,it as __namedExportsOrder,et as default};

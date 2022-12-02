import{U as t}from"./UserCardListRotate.55d649a2.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.e3bfef16.js";import"./sqlFunctions.952f1ecd.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.10fc25c3.js";import"./index.62dd2683.js";import"./index.5b26081f.js";import"./iframe.2f11fea3.js";import"./Button.d5f5019a.js";import"./styled.2799bbab.js";import"./utils.09644bf2.js";import"./TransitionGroupContext.f0c2dee6.js";import"./useTheme.9f954659.js";import"./Alert.a811cd40.js";import"./hook.1b918640.js";import"./createWithBsPrefix.af2c57e3.js";import"./divWithClassName.0eda4494.js";import"./index.35ce73ec.js";import"./Fade.8c636cf5.js";import"./isArray.1a1d4e26.js";import"./getEndpoint.bb7ded34.js";import"./Link.7c4fde04.js";import"./Typography.7dc1d80a.js";import"./Button.9a993919.js";import"./ButtonBase.4ded6e01.js";import"./emotion-react.browser.esm.7b70ec33.js";import"./ColumnType.744125d2.js";import"./UserCardList.ff63c51c.js";import"./UserCard.326e35e8.js";import"./IconCopy.d5fb86d3.js";import"./SkeletonTable.c539f085.js";import"./times.25ed313e.js";import"./toInteger.1f86ccb4.js";import"./isSymbol.425832e0.js";import"./Skeleton.1a2438b9.js";import"./IconSvg.fe1e65ad.js";import"./Tooltip.1d7a2ca6.js";import"./createSvgIcon.3210eda0.js";import"./InfoOutlined.2ed956d4.js";import"./ToastMessage.51646f1c.js";import"./FullWidthAlert.88a965d7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b86d1d32.js";import"./Overlay.349481dc.js";import"./contains.21883a94.js";import"./usePopperMarginModifiers.5c96dd9b.js";import"./useWaitForDOMRef.dee55da0.js";import"./without.de66f971.js";import"./_cacheHas.d0d51990.js";import"./use-deep-compare-effect.esm.afdf85aa.js";const it={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),m=i.bind({});m.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const mt=["Demo"];export{m as Demo,mt as __namedExportsOrder,it as default};

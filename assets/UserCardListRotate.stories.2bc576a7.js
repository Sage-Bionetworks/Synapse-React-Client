import{U as t}from"./UserCardListRotate.b4df4411.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.0721b30f.js";import"./sqlFunctions.b0106d41.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c86a5cbb.js";import"./index.96fee529.js";import"./index.84874f77.js";import"./iframe.d07454b7.js";import"./Button.c6170972.js";import"./styled.b8cd841c.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./index.35ce73ec.js";import"./Fade.54a45bb0.js";import"./isArray.0e868c61.js";import"./getEndpoint.bb7ded34.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./emotion-react.browser.esm.4fe99834.js";import"./ColumnType.744125d2.js";import"./UserCardList.1e3a2a6f.js";import"./UserCard.9a1acc17.js";import"./IconCopy.343b69cc.js";import"./SkeletonTable.12d4458e.js";import"./times.938b95b0.js";import"./toInteger.0c46f3eb.js";import"./isSymbol.2a2fd570.js";import"./Skeleton.bcaf6f06.js";import"./IconSvg.69d2b3a3.js";import"./Tooltip.95391ddc.js";import"./createSvgIcon.8972a51f.js";import"./InfoOutlined.1d86a385.js";import"./ToastMessage.c03bf450.js";import"./FullWidthAlert.f41552e4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.22a08d1e.js";import"./Overlay.d556696c.js";import"./contains.4df2422e.js";import"./usePopperMarginModifiers.eef01d88.js";import"./useWaitForDOMRef.65459bf1.js";import"./without.b89900d5.js";import"./_cacheHas.f0b8833d.js";import"./use-deep-compare-effect.esm.401fba4c.js";const it={parameters:{storySource:{source:`import React from 'react'
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

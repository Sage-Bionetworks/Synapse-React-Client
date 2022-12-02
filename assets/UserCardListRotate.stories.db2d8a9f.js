import{U as t}from"./UserCardListRotate.35e6ab62.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.e72699d7.js";import"./sqlFunctions.d0b07571.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.550dbb5b.js";import"./index.34864443.js";import"./index.71f9d2b1.js";import"./iframe.e515b461.js";import"./Button.69f4aad2.js";import"./styled.113fc281.js";import"./Tooltip.626a672e.js";import"./TransitionGroupContext.2e90d9c8.js";import"./useTheme.3c585c97.js";import"./Alert.d9dcb62e.js";import"./hook.dcb03d67.js";import"./createWithBsPrefix.93be1871.js";import"./divWithClassName.15ce1beb.js";import"./index.35ce73ec.js";import"./Fade.2e614c5f.js";import"./isArray.768225e0.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.91cc0bda.js";import"./IconButton.53297fa9.js";import"./ButtonBase.1e74724a.js";import"./emotion-react.browser.esm.6478344e.js";import"./Link.2241f35d.js";import"./Typography.4509eb0e.js";import"./Button.5bebd4e9.js";import"./ColumnType.744125d2.js";import"./UserCardList.539428fb.js";import"./UserCard.b40dfa65.js";import"./IconCopy.5e3a4916.js";import"./SkeletonTable.7fae5ea1.js";import"./times.a7510402.js";import"./toInteger.0bf55458.js";import"./isSymbol.24e67468.js";import"./Skeleton.015bfbc5.js";import"./ToastMessage.0ac4744b.js";import"./FullWidthAlert.2ca2db91.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.7182a54a.js";import"./Overlay.8e7d4967.js";import"./contains.92c769a2.js";import"./usePopperMarginModifiers.a580fc17.js";import"./useWaitForDOMRef.48aa9bb3.js";import"./without.0d5b4379.js";import"./_cacheHas.a009177f.js";import"./use-deep-compare-effect.esm.d647c715.js";const rt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const et=["Demo"];export{s as Demo,et as __namedExportsOrder,rt as default};

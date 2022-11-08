import{U as t}from"./UserCardListRotate.3e19cff0.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.325e7137.js";import"./sqlFunctions.f22affb5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.590cf756.js";import"./index.26ad4be5.js";import"./index.1c9fa93d.js";import"./iframe.d25110d4.js";import"./Button.2661b6a1.js";import"./styled.8997d4d9.js";import"./utils.373161e6.js";import"./Alert.29e6a249.js";import"./createWithBsPrefix.2155bd3d.js";import"./index.35ce73ec.js";import"./isArray.ba495a61.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.ac4cf4e1.js";import"./ColumnType.744125d2.js";import"./UserCardList.0ea15755.js";import"./UserCard.c35f579d.js";import"./IconCopy.73ef776f.js";import"./SkeletonTable.a881218b.js";import"./times.a7f9fd68.js";import"./toInteger.ab08c53c.js";import"./isSymbol.2f09fe74.js";import"./Skeleton.4f13b0c1.js";import"./emotion-react.browser.esm.f1e534da.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.a4adfbe0.js";import"./Tooltip.4e888661.js";import"./createSvgIcon.3ee89089.js";import"./InfoOutlined.191e0556.js";import"./ToastMessage.356d6e1c.js";import"./FullWidthAlert.3575feb9.js";import"./Typography.46ba432f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.69d847eb.js";import"./Overlay.4ea04f69.js";import"./contains.26318f11.js";import"./usePopperMarginModifiers.f4fd333a.js";import"./useWaitForDOMRef.25f83f82.js";import"./without.122c9dff.js";import"./_cacheHas.25c52fb1.js";import"./use-deep-compare-effect.esm.7f3b729f.js";const Z={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const $=["Demo"];export{s as Demo,$ as __namedExportsOrder,Z as default};

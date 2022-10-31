import{U as t}from"./UserCardListRotate.8a6668fa.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.b29a5274.js";import"./sqlFunctions.a660c34a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c3d3eddf.js";import"./TypeUtils.a2c41307.js";import"./index.dcde5598.js";import"./index.73e3d9d7.js";import"./iframe.45f65fdb.js";import"./Button.c77a6de6.js";import"./index.57d09176.js";import"./withStyles.2d1152f5.js";import"./utils.c867bc57.js";import"./Alert.5f5d4d35.js";import"./createWithBsPrefix.2e8fbe6b.js";import"./index.35ce73ec.js";import"./isArray.0036f9bf.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.5f62e5e7.js";import"./ColumnType.744125d2.js";import"./UserCardList.b78be9fd.js";import"./UserCard.1da63075.js";import"./IconCopy.fa0d8a51.js";import"./SkeletonTable.94c4c988.js";import"./times.52672c9d.js";import"./toInteger.8f4cfb94.js";import"./isSymbol.9796f8db.js";import"./Skeleton.c9932f2f.js";import"./Tooltip.76e779de.js";import"./createSvgIcon.363a4d4a.js";import"./makeStyles.90bec0f4.js";import"./IconSvg.9f77ee65.js";import"./InfoOutlined.e9bf0eda.js";import"./ToastMessage.cdfb50d6.js";import"./FullWidthAlert.3cefffa2.js";import"./Typography.e39b1a57.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.759a0be8.js";import"./Overlay.14a6d56e.js";import"./contains.86bdf9ac.js";import"./usePopperMarginModifiers.5d89d5c2.js";import"./useWaitForDOMRef.f3a64467.js";import"./without.cbf4274d.js";import"./_cacheHas.f4993e5b.js";import"./use-deep-compare-effect.esm.6fd3cff2.js";const $={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const tt=["Demo"];export{s as Demo,tt as __namedExportsOrder,$ as default};

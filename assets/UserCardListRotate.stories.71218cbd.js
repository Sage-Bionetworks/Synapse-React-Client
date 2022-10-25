import{U as t}from"./UserCardListRotate.b61e141b.js";import{ax as r}from"./index.bff2d9c7.js";import{j as e}from"./jsx-runtime.6fc4771b.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.fa9b1bd2.js";import"./UserCard.32f3674b.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.25a64ecc.js";import"./SkeletonTable.611921d5.js";import"./times.c3b78a33.js";import"./toInteger.d1e47656.js";import"./isSymbol.6068a581.js";import"./isArray.3cde12a0.js";import"./Button.297619c8.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.2663a88c.js";import"./withStyles.f9df3835.js";import"./Tooltip.45d64ebd.js";import"./createSvgIcon.3ee235fb.js";import"./SvgIcon.e84ee4e0.js";import"./utils.6fc55841.js";import"./index.4e1486f8.js";import"./iframe.14db13df.js";import"./makeStyles.f8fe9b08.js";import"./IconSvg.313db458.js";import"./InfoOutlined.67f7ed8e.js";import"./ToastMessage.c1cdbab7.js";import"./FullWidthAlert.7459bb3c.js";import"./Typography.1c5796c6.js";import"./Alert.bb2e2328.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.aecb96d3.js";import"./Overlay.567d8932.js";import"./useWaitForDOMRef.7b6a21be.js";import"./usePopperMarginModifiers.16e66f40.js";import"./without.11ee909d.js";import"./_cacheHas.dd0e8cac.js";import"./use-deep-compare-effect.esm.d30c5f7a.js";const K={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const N=["Demo"];export{i as Demo,N as __namedExportsOrder,K as default};

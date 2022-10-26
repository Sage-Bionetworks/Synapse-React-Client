import{U as t}from"./UserCardListRotate.07ed18b1.js";import{ax as r}from"./index.7b571c3f.js";import{j as e}from"./jsx-runtime.36c99582.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.d69f79e0.js";import"./UserCard.07bb7dc1.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.59a8cb20.js";import"./SkeletonTable.f0574313.js";import"./times.869ca9ec.js";import"./toInteger.32e560ec.js";import"./isSymbol.aedffc3c.js";import"./isArray.919b23ad.js";import"./Button.4aa3a811.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.8b8b9138.js";import"./withStyles.0fa6dc3f.js";import"./Tooltip.687fac3a.js";import"./createSvgIcon.68552f98.js";import"./SvgIcon.afc4513f.js";import"./utils.0ebf16b5.js";import"./index.7dc20356.js";import"./iframe.67c9a843.js";import"./makeStyles.590b227a.js";import"./IconSvg.18fba2a3.js";import"./InfoOutlined.3047c16b.js";import"./ToastMessage.ac6c5fb4.js";import"./FullWidthAlert.cabbd8c8.js";import"./Typography.fbe70ffe.js";import"./Alert.e200e4c1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4c721b80.js";import"./Overlay.4fd8dcb1.js";import"./useWaitForDOMRef.8b5dbd8c.js";import"./usePopperMarginModifiers.fffe465a.js";import"./without.e37dd220.js";import"./_cacheHas.4292b1e4.js";import"./use-deep-compare-effect.esm.5338fb7a.js";const K={parameters:{storySource:{source:`import React from 'react'
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

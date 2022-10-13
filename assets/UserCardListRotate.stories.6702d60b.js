import{U as t}from"./UserCardListRotate.241be12d.js";import{ax as r}from"./index.f0d19726.js";import{j as e}from"./jsx-runtime.4ed473f6.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.4c2bc9bc.js";import"./UserCard.62605ce0.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.536ed2bb.js";import"./SkeletonTable.09b1c379.js";import"./times.c42e571b.js";import"./toInteger.7b9ab0b9.js";import"./isSymbol.24e18969.js";import"./isArray.1c017e06.js";import"./Button.c5f20cc4.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.1c1dc171.js";import"./withStyles.78cfa842.js";import"./Tooltip.eb6aee31.js";import"./createSvgIcon.691ab6d6.js";import"./SvgIcon.d67caae4.js";import"./utils.75253d0f.js";import"./index.02b86482.js";import"./iframe.b5feb82b.js";import"./makeStyles.dc0e46d4.js";import"./IconSvg.8a81e89b.js";import"./InfoOutlined.ab4f4d01.js";import"./ToastMessage.576eb4d8.js";import"./FullWidthAlert.2db361a7.js";import"./Typography.742205fe.js";import"./Alert.a88bb07f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.021a8dc5.js";import"./Overlay.eafb065e.js";import"./useWaitForDOMRef.8efcf25e.js";import"./usePopperMarginModifiers.a69073a2.js";import"./without.27a5177f.js";import"./_cacheHas.efaa38b2.js";import"./use-deep-compare-effect.esm.6d2ce1a1.js";const K={parameters:{storySource:{source:`import React from 'react'
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

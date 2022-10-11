import{U as t}from"./UserCardListRotate.9e7d0a8c.js";import{aw as r}from"./index.399b1ebb.js";import{j as e}from"./jsx-runtime.f6e67d69.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.12bbb1f9.js";import"./UserCard.c2f5359e.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.bae338e3.js";import"./SkeletonTable.7ca00999.js";import"./times.8c0d57e8.js";import"./toInteger.6ecd4cc2.js";import"./isSymbol.817739da.js";import"./isArray.bbc3389f.js";import"./Button.bb6df31f.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.e925cd71.js";import"./withStyles.e9153c6c.js";import"./Tooltip.e69703f2.js";import"./createSvgIcon.1bc5e790.js";import"./SvgIcon.b9f91416.js";import"./index.5aa44f42.js";import"./iframe.0155d3d5.js";import"./useTheme.b5d1a103.js";import"./Transition.45107636.js";import"./makeStyles.b3ebb6fc.js";import"./IconSvg.76f9c9ad.js";import"./InfoOutlined.6b0ecc0d.js";import"./ToastMessage.ef3fd930.js";import"./FullWidthAlert.a36cfcd9.js";import"./Typography.8482fe8d.js";import"./Alert.161bc8be.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b369d35f.js";import"./Overlay.2be5ac15.js";import"./useWaitForDOMRef.132cafe6.js";import"./usePopperMarginModifiers.9f59499b.js";import"./without.de70e7ae.js";import"./_cacheHas.fc28b5e2.js";import"./use-deep-compare-effect.esm.9fbef6c8.js";const N={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const V=["Demo"];export{i as Demo,V as __namedExportsOrder,N as default};

import{U as t}from"./UserCardListRotate.270787f1.js";import{ax as r}from"./index.ee300637.js";import{j as e}from"./jsx-runtime.1a5a2715.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.23549b6e.js";import"./UserCard.5b59af51.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.6ad8cebf.js";import"./SkeletonTable.733c6fe6.js";import"./times.fbcd0673.js";import"./toInteger.72a0ddde.js";import"./isSymbol.eee16a1e.js";import"./isArray.627abb94.js";import"./Button.47fead8e.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.1753a711.js";import"./withStyles.7c3d6aba.js";import"./Tooltip.5c94c0fd.js";import"./createSvgIcon.d6b9a03c.js";import"./SvgIcon.43465c61.js";import"./utils.6069a350.js";import"./index.6dbf9fa2.js";import"./iframe.cf33b896.js";import"./makeStyles.bd855ff6.js";import"./IconSvg.29727645.js";import"./InfoOutlined.9735fa89.js";import"./ToastMessage.373e274f.js";import"./FullWidthAlert.1624915d.js";import"./Typography.51984e68.js";import"./Alert.9d12ab40.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.395c9d56.js";import"./Overlay.494df0cd.js";import"./useWaitForDOMRef.4377410d.js";import"./usePopperMarginModifiers.118ff728.js";import"./without.dcfaba86.js";import"./_cacheHas.3118bd20.js";import"./use-deep-compare-effect.esm.6aa57151.js";const K={parameters:{storySource:{source:`import React from 'react'
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

import{U as t}from"./UserCardListRotate.bf336430.js";import{ax as r}from"./index.cdf5fd1c.js";import{j as e}from"./jsx-runtime.7bb0e56b.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.9aa3196c.js";import"./UserCard.6fcd03bc.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.00d0f817.js";import"./SkeletonTable.00c036ab.js";import"./times.ad0f164d.js";import"./toInteger.02e5834f.js";import"./isSymbol.f94b6455.js";import"./isArray.40a0d4da.js";import"./Button.f83d0e63.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.7484c3ca.js";import"./withStyles.cfb33818.js";import"./Tooltip.463ecf05.js";import"./createSvgIcon.da2780da.js";import"./SvgIcon.fff48821.js";import"./utils.82646225.js";import"./index.a95f094b.js";import"./iframe.dbb57267.js";import"./makeStyles.d82b1154.js";import"./IconSvg.7d7fb131.js";import"./InfoOutlined.4f1ffce6.js";import"./ToastMessage.96fdad3b.js";import"./FullWidthAlert.e8b3b992.js";import"./Typography.3da982eb.js";import"./Alert.fd35fd52.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.a068bfca.js";import"./Overlay.2de3bd36.js";import"./useWaitForDOMRef.17f7f910.js";import"./usePopperMarginModifiers.29212990.js";import"./without.5aa1f5f1.js";import"./_cacheHas.7c8e3b94.js";import"./use-deep-compare-effect.esm.ccd46efa.js";const K={parameters:{storySource:{source:`import React from 'react'
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

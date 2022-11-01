import{U as t}from"./UserCardListRotate.e5802942.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.50ef6bf8.js";import"./sqlFunctions.2c22e579.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.eb2d96bd.js";import"./index.0305e6df.js";import"./index.c6db38ab.js";import"./iframe.ac4a915a.js";import"./Button.d599da1d.js";import"./index.57d09176.js";import"./withStyles.99d8f96c.js";import"./utils.7e5b3029.js";import"./Alert.2486ab7d.js";import"./createWithBsPrefix.62795558.js";import"./index.35ce73ec.js";import"./isArray.20493a87.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2cd0146b.js";import"./ColumnType.744125d2.js";import"./UserCardList.6e4e630f.js";import"./UserCard.0ed6abec.js";import"./IconCopy.63286479.js";import"./SkeletonTable.790b52ac.js";import"./times.87ad9c1c.js";import"./toInteger.5323f36a.js";import"./isSymbol.43adfbf0.js";import"./Skeleton.bfc72f16.js";import"./Tooltip.ffc53860.js";import"./createSvgIcon.691b588b.js";import"./makeStyles.2e7d9394.js";import"./IconSvg.c0856b54.js";import"./InfoOutlined.4d7b5d30.js";import"./ToastMessage.5f57197e.js";import"./FullWidthAlert.039f66d3.js";import"./Typography.eb1a210b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.04211ad5.js";import"./Overlay.d0e3e40e.js";import"./contains.35b0f50b.js";import"./usePopperMarginModifiers.0f1630d3.js";import"./useWaitForDOMRef.82d5d36b.js";import"./without.6e453101.js";import"./_cacheHas.bef0b8b1.js";import"./use-deep-compare-effect.esm.dee423e7.js";const Z={parameters:{storySource:{source:`import React from 'react'
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

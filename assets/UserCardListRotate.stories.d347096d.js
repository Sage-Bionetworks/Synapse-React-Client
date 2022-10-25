import{U as t}from"./UserCardListRotate.d5d3a2fc.js";import{ax as r}from"./index.444e3572.js";import{j as e}from"./jsx-runtime.ed0bc2e8.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.acf920eb.js";import"./UserCard.89349cd4.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.82604258.js";import"./SkeletonTable.a364440a.js";import"./times.12135b85.js";import"./toInteger.c1671d6c.js";import"./isSymbol.3ae1367c.js";import"./isArray.69d02dee.js";import"./Button.ead7d59a.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.d97a08a6.js";import"./withStyles.5eea39d5.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./SvgIcon.1c3fe3f1.js";import"./utils.31a80d71.js";import"./index.68bd2905.js";import"./iframe.1c77586e.js";import"./makeStyles.83c340c0.js";import"./IconSvg.af973a0c.js";import"./InfoOutlined.10c65527.js";import"./ToastMessage.f3c1e08b.js";import"./FullWidthAlert.7478a55e.js";import"./Typography.935cd23d.js";import"./Alert.e70a23c6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e6e71b68.js";import"./Overlay.d35a38e4.js";import"./useWaitForDOMRef.2b50b75b.js";import"./usePopperMarginModifiers.2ccc8168.js";import"./without.ae039a4c.js";import"./_cacheHas.2f01a71b.js";import"./use-deep-compare-effect.esm.63a03aa5.js";const K={parameters:{storySource:{source:`import React from 'react'
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

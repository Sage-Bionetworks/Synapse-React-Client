import{U as t}from"./UserCardListRotate.480486de.js";import{aw as r}from"./index.9501be1c.js";import{j as e}from"./jsx-runtime.4c3515e4.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.fef008a0.js";import"./UserCard.8b720891.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.b18e1da4.js";import"./SkeletonTable.0b50ae3a.js";import"./times.224503e4.js";import"./toInteger.010334bc.js";import"./isSymbol.6b184f44.js";import"./isArray.7ff8d0ef.js";import"./Button.28efd16b.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.dccb1004.js";import"./withStyles.9c7b3093.js";import"./Tooltip.92206031.js";import"./createSvgIcon.8e9e6f8f.js";import"./SvgIcon.d7dd9197.js";import"./index.e847bba9.js";import"./iframe.37f2588a.js";import"./useTheme.5faeeca8.js";import"./Transition.840176b2.js";import"./makeStyles.96934dd6.js";import"./IconSvg.c8b7f299.js";import"./InfoOutlined.20c203c5.js";import"./ToastMessage.9b5c3655.js";import"./FullWidthAlert.c9de56f1.js";import"./Typography.48c24744.js";import"./Alert.54d65423.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.129d2094.js";import"./Overlay.9b2a4e52.js";import"./useWaitForDOMRef.261cbd7a.js";import"./usePopperMarginModifiers.bef4af84.js";import"./without.c05f29e9.js";import"./_cacheHas.53644ed3.js";import"./use-deep-compare-effect.esm.c8b81a3e.js";const N={parameters:{storySource:{source:`import React from 'react'
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

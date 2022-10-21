import{U as t}from"./UserCardListRotate.df74d0c3.js";import{ax as r}from"./index.df4d7189.js";import{j as e}from"./jsx-runtime.a232804d.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.17a2ea75.js";import"./UserCard.7296873e.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.5c84b271.js";import"./SkeletonTable.42b69551.js";import"./times.94f8f16d.js";import"./toInteger.99850a56.js";import"./isSymbol.af0f15b0.js";import"./isArray.a5a56f48.js";import"./Button.6d51f091.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.e3b72fa9.js";import"./withStyles.1db4abc8.js";import"./Tooltip.d38d9e30.js";import"./createSvgIcon.2aaf66cc.js";import"./SvgIcon.885aee5a.js";import"./utils.428c4b7a.js";import"./index.ba62157d.js";import"./iframe.10584503.js";import"./makeStyles.403aaa55.js";import"./IconSvg.7d220ad3.js";import"./InfoOutlined.d81a19b2.js";import"./ToastMessage.b42768ca.js";import"./FullWidthAlert.5abd6e7a.js";import"./Typography.9247f57a.js";import"./Alert.05377b39.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.42db352a.js";import"./Overlay.2735c2ff.js";import"./useWaitForDOMRef.b691e8e9.js";import"./usePopperMarginModifiers.2b01b6ad.js";import"./without.49e70119.js";import"./_cacheHas.2f6e173d.js";import"./use-deep-compare-effect.esm.2b5691ed.js";const K={parameters:{storySource:{source:`import React from 'react'
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

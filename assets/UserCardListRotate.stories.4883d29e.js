import{U as t}from"./UserCardListRotate.34848c04.js";import{ax as r}from"./index.a732538f.js";import{j as e}from"./jsx-runtime.77363692.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.fa2df136.js";import"./UserCard.49fb0f82.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.6cf649ca.js";import"./SkeletonTable.56e7de4d.js";import"./times.6412c2aa.js";import"./toInteger.f0a03622.js";import"./isSymbol.e0bcd831.js";import"./isArray.c7b11016.js";import"./Button.a1ee4a46.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.5e1e1a25.js";import"./withStyles.42967b9b.js";import"./Tooltip.be22d41b.js";import"./createSvgIcon.5dedd617.js";import"./SvgIcon.06dbb4d5.js";import"./utils.1575e991.js";import"./index.f99e416a.js";import"./iframe.3e104d71.js";import"./makeStyles.5320a651.js";import"./IconSvg.38b3ef2f.js";import"./InfoOutlined.f24d250d.js";import"./ToastMessage.b3f610fb.js";import"./FullWidthAlert.23cfe207.js";import"./Typography.ce6b431d.js";import"./Alert.23dfc2a1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0aa98db3.js";import"./Overlay.7aec48c8.js";import"./useWaitForDOMRef.d6e52f67.js";import"./usePopperMarginModifiers.8b85cd62.js";import"./without.2623ee30.js";import"./_cacheHas.9de43c93.js";import"./use-deep-compare-effect.esm.dcb0f3e4.js";const K={parameters:{storySource:{source:`import React from 'react'
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

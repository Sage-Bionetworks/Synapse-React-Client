import{U as t}from"./UserCardListRotate.ef9e2990.js";import{ax as r}from"./index.a2edd6ac.js";import{j as e}from"./jsx-runtime.8900a285.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.feb996bb.js";import"./UserCard.8b26eff3.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.8a561b04.js";import"./SkeletonTable.4379ada8.js";import"./times.49ac87ad.js";import"./toInteger.9a0acd55.js";import"./isSymbol.74032678.js";import"./isArray.4e3f2043.js";import"./Button.e50f7fc9.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.a2940302.js";import"./withStyles.1744e3f1.js";import"./Tooltip.7bdb955a.js";import"./createSvgIcon.11696c8f.js";import"./SvgIcon.4e934e01.js";import"./utils.d7ed0c75.js";import"./index.912828a9.js";import"./iframe.c24069c1.js";import"./makeStyles.f81fc0de.js";import"./IconSvg.4d0133e6.js";import"./InfoOutlined.19bd48b4.js";import"./ToastMessage.2fd043cd.js";import"./FullWidthAlert.aad3bca8.js";import"./Typography.f8e8965b.js";import"./Alert.3046b0d1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.711b61c1.js";import"./Overlay.b5c4eb49.js";import"./useWaitForDOMRef.24f15ffd.js";import"./usePopperMarginModifiers.71bbcee2.js";import"./without.2f1c710c.js";import"./_cacheHas.009241fb.js";import"./use-deep-compare-effect.esm.18f4fc59.js";const K={parameters:{storySource:{source:`import React from 'react'
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

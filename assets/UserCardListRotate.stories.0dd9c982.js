import{U as t}from"./UserCardListRotate.7bf26b89.js";import{ax as r}from"./index.1b5679ea.js";import{j as e}from"./jsx-runtime.eafcb716.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.0a47a3c6.js";import"./UserCard.a35d5b7e.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.f88536dd.js";import"./SkeletonTable.aa50450b.js";import"./times.5f1a3032.js";import"./toInteger.877b19a2.js";import"./isSymbol.4226a630.js";import"./isArray.58b2754e.js";import"./Button.2a9ceb49.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.7d351d4d.js";import"./withStyles.58225468.js";import"./Tooltip.96a18513.js";import"./createSvgIcon.01cb2ea7.js";import"./SvgIcon.b014c401.js";import"./utils.57f84b27.js";import"./index.c8a02fae.js";import"./iframe.5b9ef2ae.js";import"./makeStyles.ba00c68d.js";import"./IconSvg.625594e1.js";import"./InfoOutlined.f91cf818.js";import"./ToastMessage.a4b76c0b.js";import"./FullWidthAlert.a684bfe0.js";import"./Typography.049c6864.js";import"./Alert.3a69b0d7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6b2e4177.js";import"./Overlay.ae4ca009.js";import"./useWaitForDOMRef.883e5955.js";import"./usePopperMarginModifiers.8d1cac1c.js";import"./without.ba9da4ea.js";import"./_cacheHas.4d761572.js";import"./use-deep-compare-effect.esm.32d4302a.js";const K={parameters:{storySource:{source:`import React from 'react'
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

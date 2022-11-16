import{U as t}from"./UserCardListRotate.be1a14e8.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.ef6dd6ca.js";import"./sqlFunctions.dd1a2d89.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.643bbd26.js";import"./index.dae95658.js";import"./index.0c4c5f34.js";import"./iframe.60aac2d9.js";import"./Button.a73b55da.js";import"./styled.e27331e3.js";import"./utils.e96b9b4f.js";import"./TransitionGroupContext.7ee16c7e.js";import"./Alert.ca959f09.js";import"./createWithBsPrefix.fd753f10.js";import"./index.35ce73ec.js";import"./isArray.aa335c2b.js";import"./getEndpoint.bb7ded34.js";import"./Link.3eeff9dd.js";import"./Typography.4e908f90.js";import"./Button.325fe68b.js";import"./ButtonBase.acc32807.js";import"./ColumnType.744125d2.js";import"./UserCardList.1476199b.js";import"./UserCard.04a38507.js";import"./IconCopy.9ed3993d.js";import"./SkeletonTable.ef6c1801.js";import"./times.e0b5d62b.js";import"./toInteger.135bf95f.js";import"./isSymbol.3aa79a3a.js";import"./Skeleton.537bc7c9.js";import"./IconSvg.afd54b28.js";import"./Tooltip.3430fa1d.js";import"./createSvgIcon.f73758be.js";import"./InfoOutlined.cee1fdf4.js";import"./ToastMessage.c7bcf1c5.js";import"./FullWidthAlert.d500669b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d637a5d8.js";import"./Overlay.f0beb85a.js";import"./contains.96785999.js";import"./usePopperMarginModifiers.a06f6977.js";import"./useWaitForDOMRef.c2e120f2.js";import"./without.f35cc972.js";import"./_cacheHas.2e3690ee.js";import"./use-deep-compare-effect.esm.840ab13d.js";const $={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const tt=["Demo"];export{s as Demo,tt as __namedExportsOrder,$ as default};

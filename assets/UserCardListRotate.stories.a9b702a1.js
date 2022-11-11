import{U as t}from"./UserCardListRotate.6d5005c3.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.1f7e2749.js";import"./sqlFunctions.65ecca18.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.7116bdbb.js";import"./index.f68a6cae.js";import"./index.59f4cc8a.js";import"./iframe.6a6b78dc.js";import"./Button.2ee39cf1.js";import"./styled.228dca89.js";import"./utils.03e93c91.js";import"./TransitionGroupContext.1be95f81.js";import"./Alert.6d227703.js";import"./createWithBsPrefix.ef9ee852.js";import"./index.35ce73ec.js";import"./isArray.4b374ec1.js";import"./getEndpoint.bb7ded34.js";import"./Link.78173b1f.js";import"./Typography.07e15eab.js";import"./Button.a8e6e6bc.js";import"./ButtonBase.1b6ed208.js";import"./ColumnType.744125d2.js";import"./UserCardList.52d14b6c.js";import"./UserCard.b1c715fb.js";import"./IconCopy.f0404146.js";import"./SkeletonTable.fa74e546.js";import"./times.5455f6d7.js";import"./toInteger.681218b6.js";import"./isSymbol.71d03595.js";import"./Skeleton.5856d9ed.js";import"./IconSvg.8bc0ae7f.js";import"./Tooltip.24f13342.js";import"./createSvgIcon.78845d16.js";import"./InfoOutlined.48f0d414.js";import"./ToastMessage.26e3c87f.js";import"./FullWidthAlert.aa236ca8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.1ab068bd.js";import"./Overlay.c88a9d83.js";import"./contains.ed33f850.js";import"./usePopperMarginModifiers.8d5f418f.js";import"./useWaitForDOMRef.165f6c89.js";import"./without.1e6ad0b6.js";import"./_cacheHas.2df41ce9.js";import"./use-deep-compare-effect.esm.f85f24b2.js";const $={parameters:{storySource:{source:`import React from 'react'
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

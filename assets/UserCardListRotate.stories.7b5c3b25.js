import{U as t}from"./UserCardListRotate.d0f39c6c.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.2ff8811e.js";import"./sqlFunctions.d75b690e.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.45c2d0f9.js";import"./index.3bd83fcc.js";import"./index.95124b04.js";import"./iframe.f6116fbf.js";import"./Button.774b93d6.js";import"./styled.9a92447e.js";import"./utils.2126a84f.js";import"./TransitionGroupContext.ecfa02dc.js";import"./Alert.d722c515.js";import"./createWithBsPrefix.8ba5f7eb.js";import"./index.35ce73ec.js";import"./isArray.c66fbb5a.js";import"./getEndpoint.bb7ded34.js";import"./Link.1ad1c99a.js";import"./Typography.58720d37.js";import"./Button.52cb13cc.js";import"./ButtonBase.4576d1dd.js";import"./ColumnType.744125d2.js";import"./UserCardList.e01834cb.js";import"./UserCard.91d6c8b2.js";import"./IconCopy.2b591d5d.js";import"./SkeletonTable.0cb13ee1.js";import"./times.55c175b4.js";import"./toInteger.a01bda2a.js";import"./isSymbol.15cce469.js";import"./Skeleton.cb3b50d8.js";import"./IconSvg.6f3c0dc5.js";import"./Tooltip.5bd16401.js";import"./createSvgIcon.13613b84.js";import"./InfoOutlined.419ebcb9.js";import"./ToastMessage.e5302c4a.js";import"./FullWidthAlert.b9821286.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.65424154.js";import"./Overlay.dee00487.js";import"./contains.a3df61d1.js";import"./usePopperMarginModifiers.cc29aef6.js";import"./useWaitForDOMRef.773b3eb8.js";import"./without.b3a8be93.js";import"./_cacheHas.9af2c547.js";import"./use-deep-compare-effect.esm.840878a7.js";const $={parameters:{storySource:{source:`import React from 'react'
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

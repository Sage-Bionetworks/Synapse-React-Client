import{U as t}from"./UserCardListRotate.a9978b3a.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.2b71273f.js";import"./sqlFunctions.18713ca7.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d1a5c2d4.js";import"./index.3d089af5.js";import"./index.7aa8b9f8.js";import"./iframe.2ab16825.js";import"./Button.9a34c287.js";import"./styled.ffa42780.js";import"./utils.4bc122e2.js";import"./TransitionGroupContext.ec9d4526.js";import"./Alert.dab3d922.js";import"./createWithBsPrefix.64e0cb3b.js";import"./index.35ce73ec.js";import"./isArray.f3e4211e.js";import"./getEndpoint.bb7ded34.js";import"./Link.fcffcbaa.js";import"./Typography.e75e6cdf.js";import"./Button.f0ab2e0d.js";import"./ButtonBase.1d993e3f.js";import"./ColumnType.744125d2.js";import"./UserCardList.52b6e9ed.js";import"./UserCard.2ecf62d0.js";import"./IconCopy.24e1b7a1.js";import"./SkeletonTable.257b688b.js";import"./times.99997936.js";import"./toInteger.b7a3730e.js";import"./isSymbol.6a44fdec.js";import"./Skeleton.aec42867.js";import"./IconSvg.31630328.js";import"./Tooltip.7c243246.js";import"./createSvgIcon.8400397d.js";import"./InfoOutlined.49fd3aca.js";import"./ToastMessage.486f16ec.js";import"./FullWidthAlert.d57a412d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.775c431b.js";import"./Overlay.b78a7481.js";import"./contains.7e5b5926.js";import"./usePopperMarginModifiers.a1dad7e0.js";import"./useWaitForDOMRef.45bec7c5.js";import"./without.e0a6465c.js";import"./_cacheHas.0114790d.js";import"./use-deep-compare-effect.esm.44ef78ce.js";const $={parameters:{storySource:{source:`import React from 'react'
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

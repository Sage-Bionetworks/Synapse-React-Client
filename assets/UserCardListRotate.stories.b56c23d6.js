import{U as t}from"./UserCardListRotate.d55a40ae.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.f2f98a5a.js";import"./sqlFunctions.cfb3693d.js";import"./RegularExpressions.3cd69849.js";import"./index.3643f9f4.js";import"./index.9f26ffd6.js";import"./iframe.3db3203a.js";import"./Button.498cd291.js";import"./index.57d09176.js";import"./withStyles.c893a568.js";import"./utils.b0185ad4.js";import"./Alert.df9cc8b6.js";import"./createWithBsPrefix.859b1c88.js";import"./index.35ce73ec.js";import"./isArray.7423227f.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.aef32627.js";import"./ColumnType.744125d2.js";import"./UserCardList.087ea18c.js";import"./UserCard.0ebe4f67.js";import"./IconCopy.31ff040b.js";import"./SkeletonTable.ca71276a.js";import"./times.408344a9.js";import"./toInteger.61038943.js";import"./isSymbol.b0b5d283.js";import"./Skeleton.756bfafa.js";import"./Tooltip.1481a07d.js";import"./createSvgIcon.6b81a395.js";import"./makeStyles.b901d8a5.js";import"./IconSvg.9332b201.js";import"./InfoOutlined.23b933db.js";import"./ToastMessage.75433d78.js";import"./FullWidthAlert.007c198f.js";import"./Typography.32e9e32f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.cb398276.js";import"./Overlay.792e9294.js";import"./contains.afe7b6ba.js";import"./usePopperMarginModifiers.4a57f45c.js";import"./useWaitForDOMRef.0d0b5d6b.js";import"./without.bf4df2b6.js";import"./_cacheHas.0df8aa76.js";import"./use-deep-compare-effect.esm.75ab9336.js";const Y={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const Z=["Demo"];export{i as Demo,Z as __namedExportsOrder,Y as default};

import{U as t}from"./UserCardListRotate.7213cce3.js";import{M as r}from"./index.1cc75809.js";import{j as e}from"./jsx-runtime.00d70968.js";import"./sqlFunctions.b49ac766.js";import"./ColumnType.744125d2.js";import"./assert.2b1e1d8f.js";import"./iframe.469b3d37.js";import"./UserCardList.a7d0769d.js";import"./UserCard.39fe3796.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.70db2c30.js";import"./times.10bc3cb2.js";import"./toInteger.c11fc59b.js";import"./ToastMessage.0ffd35ff.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.fda23eee.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./makeStyles.2422b359.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./Skeleton.88496afb.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./Overlay.3297046e.js";import"./useWaitForDOMRef.d07b3a07.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./without.d2b3d42f.js";import"./_baseDifference.791d3a27.js";import"./_cacheHas.0d97d8d7.js";import"./use-deep-compare-effect.esm.76673280.js";const G={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const J=["Demo"];export{i as Demo,J as __namedExportsOrder,G as default};

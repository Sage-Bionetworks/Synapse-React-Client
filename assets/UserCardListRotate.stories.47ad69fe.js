import{U as t}from"./UserCardListRotate.19dcb9c0.js";import{M as r}from"./index.a1e07a70.js";import{j as e}from"./jsx-runtime.00d70968.js";import"./sqlFunctions.59c64146.js";import"./ColumnType.744125d2.js";import"./assert.085e20d8.js";import"./iframe.81df3a6e.js";import"./UserCardList.bd8164e7.js";import"./UserCard.e9887ce4.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.b010af00.js";import"./times.70c713ca.js";import"./toInteger.a17e9bfa.js";import"./ToastMessage.72011e3e.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.fda23eee.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./makeStyles.733638f6.js";import"./withStyles.d50e1a5a.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Skeleton.c897a2bf.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./Overlay.b3559176.js";import"./useWaitForDOMRef.064fee4c.js";import"./usePopperMarginModifiers.0428ddea.js";import"./without.e7883e5e.js";import"./_baseDifference.ea8b7af2.js";import"./_cacheHas.5070c2c3.js";import"./use-deep-compare-effect.esm.76673280.js";const X={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const v=["Demo"];export{i as Demo,v as __namedExportsOrder,X as default};

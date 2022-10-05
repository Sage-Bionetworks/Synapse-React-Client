import{U as t}from"./UserCardListRotate.ae9cb0cf.js";import{ar as r}from"./index.aa213b73.js";import{j as e}from"./jsx-runtime.b98719ac.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.6574b6c8.js";import"./UserCard.549fd8e6.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.da365123.js";import"./SkeletonTable.385954e0.js";import"./times.b847c83d.js";import"./toInteger.c2538338.js";import"./isSymbol.a85127bf.js";import"./isArray.3c258aa7.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.ed04e3a1.js";import"./Skeleton.f404fa8e.js";import"./withStyles.79d10ad6.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.5964f419.js";import"./createSvgIcon.63cd09dc.js";import"./SvgIcon.4537d0f4.js";import"./slicedToArray.e72f11da.js";import"./index.f0bb0570.js";import"./iframe.1e793943.js";import"./useTheme.cca4eae4.js";import"./Transition.ac6e0624.js";import"./makeStyles.9e8f686a.js";import"./IconSvg.3b0efcae.js";import"./InfoOutlined.d5bf38f7.js";import"./ToastMessage.608252d2.js";import"./FullWidthAlert.974c42f3.js";import"./Typography.7f563934.js";import"./Alert.cf52bce4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ff2face8.js";import"./Overlay.c6e37c77.js";import"./useWaitForDOMRef.c589d2c1.js";import"./usePopperMarginModifiers.6073b2bb.js";import"./without.31ba113b.js";import"./_cacheHas.aa561bc1.js";import"./use-deep-compare-effect.esm.50735a27.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

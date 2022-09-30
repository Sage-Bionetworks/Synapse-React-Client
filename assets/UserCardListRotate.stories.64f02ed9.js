import{U as t}from"./UserCardListRotate.fe71e506.js";import{aq as r}from"./index.a37d8dd7.js";import{j as e}from"./jsx-runtime.05444945.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.80e4d56d.js";import"./UserCard.42f90b17.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.1dead822.js";import"./SkeletonTable.62b12d1a.js";import"./times.948706c3.js";import"./toInteger.1bd4a41d.js";import"./isSymbol.bfa8ae0b.js";import"./isArray.fbf85b3b.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.0b1296fc.js";import"./Skeleton.7e3a4321.js";import"./withStyles.2a0b3149.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.e02d1bf4.js";import"./createSvgIcon.49bfc951.js";import"./SvgIcon.44b5863d.js";import"./slicedToArray.e72f11da.js";import"./index.849f5f8d.js";import"./iframe.ff4ba921.js";import"./useTheme.48f15230.js";import"./Transition.4ed8243e.js";import"./makeStyles.29b4f0d4.js";import"./IconSvg.abab09ee.js";import"./InfoOutlined.f00577f5.js";import"./ToastMessage.1a804d30.js";import"./FullWidthAlert.27fd0db2.js";import"./Typography.9965ffbe.js";import"./Alert.1016cb8e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.24a4cbf4.js";import"./Overlay.42a8a4d5.js";import"./useWaitForDOMRef.c50253c8.js";import"./usePopperMarginModifiers.19dcb48e.js";import"./without.b749f98e.js";import"./_cacheHas.14b94b6b.js";import"./use-deep-compare-effect.esm.c3934740.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

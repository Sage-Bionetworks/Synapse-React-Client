import{U as t}from"./UserCardListRotate.eb0564e7.js";import{am as r}from"./index.a6d709ad.js";import{j as e}from"./jsx-runtime.8cf0c657.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.34b63afd.js";import"./UserCard.06fc45b4.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.27efae90.js";import"./SkeletonTable.42e3c3ac.js";import"./times.8daad405.js";import"./toInteger.b1cd1d84.js";import"./isSymbol.57088814.js";import"./isArray.62d496dc.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.89087c87.js";import"./Skeleton.af6ba2d8.js";import"./withStyles.f22e9c75.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.8bb6ec51.js";import"./createSvgIcon.3db62023.js";import"./SvgIcon.af962ab3.js";import"./slicedToArray.e72f11da.js";import"./index.0d47cfe5.js";import"./iframe.6f47dcc9.js";import"./useTheme.daa899de.js";import"./Transition.2fb6e5a0.js";import"./makeStyles.14efd907.js";import"./IconSvg.894064e3.js";import"./InfoOutlined.7ef1e7fd.js";import"./ToastMessage.d368c817.js";import"./FullWidthAlert.c513e3cd.js";import"./Typography.0dca8b10.js";import"./Alert.70f23d9f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ba83e708.js";import"./Overlay.58c30ef0.js";import"./useWaitForDOMRef.501162ab.js";import"./usePopperMarginModifiers.1ab8820d.js";import"./without.04aa9dda.js";import"./_cacheHas.6e0abfc2.js";import"./use-deep-compare-effect.esm.c7792492.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

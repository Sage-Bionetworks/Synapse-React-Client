import{U as t}from"./UserCardListRotate.ca87a67c.js";import{as as r}from"./index.3873d60b.js";import{j as e}from"./jsx-runtime.f5c871f2.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.22f90a50.js";import"./UserCard.b0df8a65.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.81cd725e.js";import"./SkeletonTable.9e1bb6d3.js";import"./times.22265925.js";import"./toInteger.53bb9ac6.js";import"./isSymbol.6fc733ac.js";import"./isArray.8eaae8ca.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.de05f508.js";import"./Skeleton.4bed26ee.js";import"./withStyles.b9d3b2a9.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.0cafe8cc.js";import"./createSvgIcon.c8dc0ea7.js";import"./SvgIcon.0b86e17f.js";import"./slicedToArray.e72f11da.js";import"./index.50924579.js";import"./iframe.0956ae8e.js";import"./useTheme.b6731b0b.js";import"./Transition.a0ca267e.js";import"./makeStyles.c6d0cd33.js";import"./IconSvg.dc985627.js";import"./InfoOutlined.51194332.js";import"./ToastMessage.8bfc5f39.js";import"./FullWidthAlert.76b02069.js";import"./Typography.d381f643.js";import"./Alert.b56cd3e7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.a603395d.js";import"./Overlay.69580c44.js";import"./useWaitForDOMRef.a6ce9c71.js";import"./usePopperMarginModifiers.5f820ad2.js";import"./without.2ae72518.js";import"./_cacheHas.9091fa95.js";import"./use-deep-compare-effect.esm.a671d83b.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

import{U as t}from"./UserCardListRotate.2f8fe2bd.js";import{ar as r}from"./index.a1936379.js";import{j as e}from"./jsx-runtime.af56d2f4.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.5aa92928.js";import"./UserCard.2d2cc6f4.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.992e7a95.js";import"./SkeletonTable.88eb5d4e.js";import"./times.41b100ff.js";import"./toInteger.66d32cd8.js";import"./isSymbol.691d7973.js";import"./isArray.05e742d7.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.288689e2.js";import"./Skeleton.b1045233.js";import"./withStyles.95bfae1f.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.4363549c.js";import"./createSvgIcon.c99f3a66.js";import"./SvgIcon.fd305cf0.js";import"./slicedToArray.e72f11da.js";import"./index.34222f2e.js";import"./iframe.51f26e37.js";import"./useTheme.f557cee5.js";import"./Transition.66d770ee.js";import"./makeStyles.0eb241f0.js";import"./IconSvg.c0856984.js";import"./InfoOutlined.8f86cf66.js";import"./ToastMessage.8993ec69.js";import"./FullWidthAlert.e0d9cdf3.js";import"./Typography.add999d3.js";import"./Alert.b7090dbd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fe0a6f5d.js";import"./Overlay.a4a42f09.js";import"./useWaitForDOMRef.7c7cad70.js";import"./usePopperMarginModifiers.abd0b162.js";import"./without.06c5a2bd.js";import"./_cacheHas.e498e8a2.js";import"./use-deep-compare-effect.esm.60be9ac1.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

import{U as t}from"./UserCardListRotate.a7483933.js";import{M as r}from"./index.0378956d.js";import{j as e}from"./jsx-runtime.00d70968.js";import"./sqlFunctions.b49ac766.js";import"./ColumnType.744125d2.js";import"./assert.75d17e29.js";import"./iframe.e59a9506.js";import"./UserCardList.c21535bd.js";import"./UserCard.20173003.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.bba1da74.js";import"./times.3e2e5312.js";import"./toInteger.cf1886d1.js";import"./toString.d84aaeca.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.fda23eee.js";import"./Skeleton.99b24529.js";import"./withStyles.5fe35516.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./SvgIcon.e37b9412.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./Transition.8278edb2.js";import"./makeStyles.45e8b79c.js";import"./IconSvg.7fcfdfd8.js";import"./InfoOutlined.60e019a4.js";import"./ToastMessage.30a6258e.js";import"./FullWidthAlert.e63d41e9.js";import"./Typography.868473dc.js";import"./Alert.b74d1cfd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.eba72690.js";import"./Overlay.66930c7c.js";import"./useWaitForDOMRef.97759fd7.js";import"./usePopperMarginModifiers.fba68454.js";import"./without.d53fbd55.js";import"./_baseDifference.df838358.js";import"./_cacheHas.171654b6.js";import"./use-deep-compare-effect.esm.357a0ad8.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

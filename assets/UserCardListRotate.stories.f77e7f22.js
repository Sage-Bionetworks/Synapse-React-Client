import{U as t}from"./UserCardListRotate.981f7c9c.js";import{ap as r}from"./index.37b550c9.js";import{j as e}from"./jsx-runtime.00d70968.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.84c465d6.js";import"./UserCard.c58a6416.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.5ec0edbd.js";import"./times.262ff791.js";import"./toInteger.c88d1d59.js";import"./toString.d84aaeca.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.fda23eee.js";import"./Skeleton.99b24529.js";import"./withStyles.5fe35516.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.6d92cd5b.js";import"./createSvgIcon.99e72c0f.js";import"./SvgIcon.e37b9412.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./Transition.8278edb2.js";import"./makeStyles.45e8b79c.js";import"./IconSvg.debd858a.js";import"./InfoOutlined.60e019a4.js";import"./ToastMessage.de6992d0.js";import"./FullWidthAlert.6afa82c9.js";import"./Typography.868473dc.js";import"./Alert.b74d1cfd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.eba72690.js";import"./Overlay.7bb560f6.js";import"./useWaitForDOMRef.97759fd7.js";import"./usePopperMarginModifiers.44e3343c.js";import"./without.0c83ea01.js";import"./_cacheHas.b066c48b.js";import"./use-deep-compare-effect.esm.0387ba0e.js";const N={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const V=["Demo"];export{i as Demo,V as __namedExportsOrder,N as default};

import{U as t}from"./UserCardListRotate.4a61df4f.js";import{am as r}from"./index.65b6889e.js";import{j as e}from"./jsx-runtime.9b9f5ec2.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.f3856dea.js";import"./UserCard.96e69903.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.fcae01ed.js";import"./SkeletonTable.ec89eee6.js";import"./times.3879e401.js";import"./toInteger.816a2f64.js";import"./isSymbol.29619e0a.js";import"./isArray.88d141d1.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.17fde95a.js";import"./Skeleton.223a1071.js";import"./withStyles.c4d286cc.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.6dc32b0d.js";import"./createSvgIcon.0c80d9df.js";import"./SvgIcon.59ebdbf7.js";import"./slicedToArray.e72f11da.js";import"./index.9efb4fab.js";import"./iframe.8f6c7ea4.js";import"./useTheme.b4767795.js";import"./Transition.95b45c06.js";import"./makeStyles.3075ce24.js";import"./IconSvg.4c036b55.js";import"./InfoOutlined.1a2adc17.js";import"./ToastMessage.820cec30.js";import"./FullWidthAlert.4632d904.js";import"./Typography.5121ab9c.js";import"./Alert.a1c2894f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f1f42f72.js";import"./Overlay.940ff29e.js";import"./useWaitForDOMRef.6edb2b10.js";import"./usePopperMarginModifiers.e3573a90.js";import"./without.6eda5c4e.js";import"./_cacheHas.66bf6592.js";import"./use-deep-compare-effect.esm.1429f412.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

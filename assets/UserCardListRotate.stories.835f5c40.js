import{U as t}from"./UserCardListRotate.e6f34755.js";import{aw as r}from"./index.68699958.js";import{j as e}from"./jsx-runtime.416d8946.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.cb1d9739.js";import"./UserCard.3e52a486.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.30c66d8a.js";import"./SkeletonTable.83d9d8ad.js";import"./times.e2ae8ec1.js";import"./toInteger.e9d9a3f9.js";import"./isSymbol.110be719.js";import"./isArray.48d04961.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.34feb441.js";import"./Skeleton.102fc0c3.js";import"./withStyles.c595751b.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.032eb6cc.js";import"./createSvgIcon.55245163.js";import"./SvgIcon.95ef1484.js";import"./slicedToArray.e72f11da.js";import"./index.9d682600.js";import"./iframe.51e9009e.js";import"./useTheme.512d0ce3.js";import"./Transition.b4776308.js";import"./makeStyles.c2ff9465.js";import"./IconSvg.e25d1511.js";import"./InfoOutlined.a31d8d84.js";import"./ToastMessage.644c1427.js";import"./FullWidthAlert.a1bdb9b5.js";import"./Typography.5433f83a.js";import"./Alert.a75301f2.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.89dba59c.js";import"./Overlay.651ab348.js";import"./useWaitForDOMRef.b3b34f09.js";import"./usePopperMarginModifiers.71f755a4.js";import"./without.3d9e3582.js";import"./_cacheHas.76528ad6.js";import"./use-deep-compare-effect.esm.911cf7a2.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

import{U as t}from"./UserCardListRotate.6b599d48.js";import{as as r}from"./index.5ba93209.js";import{j as e}from"./jsx-runtime.1225fe79.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.1d2578d3.js";import"./UserCard.bfed225a.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.86985968.js";import"./SkeletonTable.fa38a229.js";import"./times.0d5d25c2.js";import"./toInteger.b9b2999c.js";import"./isSymbol.aedbfa18.js";import"./isArray.12f7965d.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.63b1a959.js";import"./Skeleton.ad3e32c6.js";import"./withStyles.65e61172.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.ef3cac5b.js";import"./createSvgIcon.e824e175.js";import"./SvgIcon.e9f5a006.js";import"./slicedToArray.e72f11da.js";import"./index.ecba92b3.js";import"./iframe.0fc0719c.js";import"./useTheme.ec45c4f6.js";import"./Transition.e362bf9f.js";import"./makeStyles.3ea686be.js";import"./IconSvg.194d4170.js";import"./InfoOutlined.a9437cb5.js";import"./ToastMessage.55c99787.js";import"./FullWidthAlert.697d5521.js";import"./Typography.f29a9c1b.js";import"./Alert.ffb572e5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e4d116e8.js";import"./Overlay.4005d66e.js";import"./useWaitForDOMRef.f0f2f2e1.js";import"./usePopperMarginModifiers.0a21972a.js";import"./without.841d30b7.js";import"./_cacheHas.b0dcf809.js";import"./use-deep-compare-effect.esm.4142315a.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

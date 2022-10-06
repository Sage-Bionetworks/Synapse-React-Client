import{U as t}from"./UserCardListRotate.64597c94.js";import{as as r}from"./index.7be09227.js";import{j as e}from"./jsx-runtime.deeea9fb.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.bd15903c.js";import"./UserCard.57928c55.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.bfd853e2.js";import"./SkeletonTable.ea2a6145.js";import"./times.5ef5fea7.js";import"./toInteger.4180d2d6.js";import"./isSymbol.8f6c3bd1.js";import"./isArray.19812eb5.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.467325a1.js";import"./Skeleton.e0164e1b.js";import"./withStyles.f2d2f220.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.ae5e0614.js";import"./createSvgIcon.42b31dcf.js";import"./SvgIcon.72adc85a.js";import"./slicedToArray.e72f11da.js";import"./index.f3b69ce7.js";import"./iframe.96756ded.js";import"./useTheme.966b26ad.js";import"./Transition.9b5aa1a6.js";import"./makeStyles.a83d6931.js";import"./IconSvg.2cea675a.js";import"./InfoOutlined.887e97b0.js";import"./ToastMessage.a987dfc7.js";import"./FullWidthAlert.ab2f1882.js";import"./Typography.b3d032a4.js";import"./Alert.aa68dfe4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b5368ced.js";import"./Overlay.10ea0fdc.js";import"./useWaitForDOMRef.df84dcc7.js";import"./usePopperMarginModifiers.77a92501.js";import"./without.bc35064c.js";import"./_cacheHas.09d77e08.js";import"./use-deep-compare-effect.esm.e681acb1.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

import{U as t}from"./UserCardListRotate.40ded2ff.js";import{aq as r}from"./index.8b6b728c.js";import{j as e}from"./jsx-runtime.697357f5.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.1dd01475.js";import"./UserCard.95d185a6.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.fecaa4ad.js";import"./SkeletonTable.be714a7f.js";import"./times.f176b5a7.js";import"./toInteger.56f52414.js";import"./isSymbol.ff12d775.js";import"./isArray.c87d30d5.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.742355f2.js";import"./Skeleton.14ea1888.js";import"./withStyles.14454601.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.1a172c13.js";import"./createSvgIcon.cf9e16cb.js";import"./SvgIcon.3010e2d4.js";import"./slicedToArray.e72f11da.js";import"./index.8f0405d3.js";import"./iframe.1d19b668.js";import"./useTheme.44d9e479.js";import"./Transition.375dbede.js";import"./makeStyles.5e65f24d.js";import"./IconSvg.77766464.js";import"./InfoOutlined.35769386.js";import"./ToastMessage.fbccec25.js";import"./FullWidthAlert.429d6e5f.js";import"./Typography.d498897e.js";import"./Alert.bd767cc3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.73448b1f.js";import"./Overlay.0e18d899.js";import"./useWaitForDOMRef.828b31fe.js";import"./usePopperMarginModifiers.86bb8f57.js";import"./without.faf32d56.js";import"./_cacheHas.5063ce48.js";import"./use-deep-compare-effect.esm.a5cd2f2d.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

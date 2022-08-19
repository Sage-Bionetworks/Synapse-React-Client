import{U as t}from"./UserCardListRotate.e65fcd1a.js";import{M as r}from"./index.2133c5c6.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./sqlFunctions.b49ac766.js";import"./ColumnType.744125d2.js";import"./assert.8eeae2ec.js";import"./iframe.f83029da.js";import"./index.8cde812d.js";import"./UserCardList.c058e7d7.js";import"./UserCard.70091519.js";import"./getEndpoint.0de7fccf.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.9c22f4e5.js";import"./times.75a06997.js";import"./toInteger.b6e7292f.js";import"./toString.8ef640ae.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";import"./index.06f4a415.js";import"./Button.c582ea4c.js";import"./Skeleton.3847d4da.js";import"./objectWithoutProperties.07f8cd75.js";import"./withStyles.670aaa99.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.8a506c05.js";import"./createSvgIcon.0bfcb8f8.js";import"./SvgIcon.2998c199.js";import"./slicedToArray.e9a7fa03.js";import"./useTheme.05af6e65.js";import"./Transition.8d049b2f.js";import"./makeStyles.72aedf90.js";import"./IconSvg.4a41f208.js";import"./InfoOutlined.d201fe9f.js";import"./ToastMessage.6439b7b0.js";import"./FullWidthAlert.279e31cc.js";import"./Typography.3a9e45b6.js";import"./Alert.5f67d407.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.bf042904.js";import"./useWaitForDOMRef.37941199.js";import"./usePopperMarginModifiers.4ced5867.js";import"./without.9bab0cdc.js";import"./_baseDifference.0b5f86d7.js";import"./_cacheHas.f1b82321.js";import"./use-deep-compare-effect.esm.76673280.js";var tt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}};const i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const ot=["Demo"];export{s as Demo,ot as __namedExportsOrder,tt as default};
//# sourceMappingURL=UserCardListRotate.stories.748259c2.js.map

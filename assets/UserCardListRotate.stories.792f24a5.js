import{U as t}from"./UserCardListRotate.d3ab05b5.js";import{M as r}from"./index.c9f9ae1d.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./sqlFunctions.b49ac766.js";import"./ColumnType.744125d2.js";import"./assert.d83a15fe.js";import"./iframe.2d0f7c6a.js";import"./index.8cde812d.js";import"./UserCardList.e723de00.js";import"./UserCard.e7b9984b.js";import"./getEndpoint.0de7fccf.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.4f0d2592.js";import"./times.95995a4e.js";import"./toInteger.7dc267f7.js";import"./ToastMessage.093903bc.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";import"./index.06f4a415.js";import"./Button.c582ea4c.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./makeStyles.38be5a7f.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./Skeleton.3d9d9757.js";import"./IconSvg.3c353188.js";import"./InfoOutlined.a7449f61.js";import"./Overlay.7f5ddc31.js";import"./useWaitForDOMRef.679b0e64.js";import"./usePopperMarginModifiers.fc55270a.js";import"./without.ccc5dcb6.js";import"./_baseDifference.4bbe428e.js";import"./_cacheHas.a593a31c.js";import"./use-deep-compare-effect.esm.76673280.js";var J={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}};const s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const K=["Demo"];export{i as Demo,K as __namedExportsOrder,J as default};
//# sourceMappingURL=UserCardListRotate.stories.792f24a5.js.map

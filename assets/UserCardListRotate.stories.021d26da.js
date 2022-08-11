import{U as t}from"./UserCardListRotate.9981cd61.js";import{M as r}from"./index.a392e427.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./sqlFunctions.b49ac766.js";import"./ColumnType.744125d2.js";import"./assert.6dc159c3.js";import"./iframe.ff198669.js";import"./index.8cde812d.js";import"./UserCardList.0bbc477f.js";import"./UserCard.1a19b2a2.js";import"./getEndpoint.0de7fccf.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.04ba7b16.js";import"./times.29c06b1f.js";import"./toInteger.04728d82.js";import"./toString.8ef640ae.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";import"./index.06f4a415.js";import"./Button.c582ea4c.js";import"./Skeleton.8dd0668e.js";import"./toConsumableArray.b3669986.js";import"./withStyles.8be28b48.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./SvgIcon.31249d58.js";import"./useTheme.8804f8cd.js";import"./Transition.d42a873e.js";import"./makeStyles.9dfaa099.js";import"./IconSvg.c485205d.js";import"./InfoOutlined.22a371fd.js";import"./ToastMessage.f82ed562.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./Alert.eafe86e9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.88992b99.js";import"./useWaitForDOMRef.c89dbc64.js";import"./usePopperMarginModifiers.31225551.js";import"./without.65572bbb.js";import"./_baseDifference.71b9dab5.js";import"./_cacheHas.95e0c40d.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";var Y={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}};const i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const Z=["Demo"];export{s as Demo,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=UserCardListRotate.stories.021d26da.js.map

import{U as t}from"./UserCardListRotate.fa42931b.js";import{M as r}from"./index.1a442768.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./sqlFunctions.b49ac766.js";import"./ColumnType.744125d2.js";import"./assert.0e10e861.js";import"./iframe.e1ed190f.js";import"./index.8cde812d.js";import"./UserCardList.a0dea3cd.js";import"./UserCard.81397a1d.js";import"./getEndpoint.0de7fccf.js";import"./index.es.82d55a6a.js";import"./index.06f4a415.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.698d9981.js";import"./times.86585c47.js";import"./toInteger.ea37b69f.js";import"./toNumber.bfb36d17.js";import"./isObject.97b5908e.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.c5966bcb.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./Skeleton.bcb4a49e.js";import"./IconSvg.a94da8a0.js";import"./SvgIcon.f6f6da7c.js";import"./utils.38c8d0df.js";import"./useTheme.990cd45a.js";import"./makeStyles.9976e655.js";import"./createSvgIcon.88863916.js";import"./InfoOutlined.21bf844a.js";import"./Clear.eb427cfa.js";import"./ToastMessage.87e58df2.js";import"./FullWidthAlert.96be848e.js";import"./Typography.7bd5dd17.js";import"./debounce.b9f00509.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ce7b286a.js";import"./toString.41faaa42.js";import"./Overlay.4a980e95.js";import"./useWaitForDOMRef.67fdb4e5.js";import"./usePopperMarginModifiers.ee427a81.js";import"./without.7728ce41.js";import"./_cacheHas.78de14a5.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";var tt={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=UserCardListRotate.stories.d7eea109.js.map

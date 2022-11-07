import{U as t}from"./UserCardListRotate.33eed089.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.6cb91464.js";import"./sqlFunctions.1830f92f.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.3c469190.js";import"./index.253aaada.js";import"./index.13becb40.js";import"./iframe.77de7a8b.js";import"./Button.719dc857.js";import"./styled.9d49d23e.js";import"./utils.11d89a6f.js";import"./Alert.f130f9d6.js";import"./createWithBsPrefix.c2eb45fa.js";import"./index.35ce73ec.js";import"./isArray.c85446b1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.7bbcd48d.js";import"./ColumnType.744125d2.js";import"./UserCardList.a366786c.js";import"./UserCard.e4c786fd.js";import"./IconCopy.af1c96f6.js";import"./SkeletonTable.ab3ce48c.js";import"./times.231664f9.js";import"./toInteger.70d616ab.js";import"./isSymbol.116fae96.js";import"./Skeleton.2376d7a3.js";import"./emotion-react.browser.esm.63b80b77.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.e72d865a.js";import"./Tooltip.9b073f35.js";import"./createSvgIcon.c493b6c9.js";import"./InfoOutlined.04f2d1df.js";import"./ToastMessage.5ece0449.js";import"./FullWidthAlert.771b5ce8.js";import"./Typography.c072ef4f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4f03145e.js";import"./Overlay.b1b8d860.js";import"./contains.6a52d65a.js";import"./usePopperMarginModifiers.8332b5d5.js";import"./useWaitForDOMRef.8c62de15.js";import"./without.095365fb.js";import"./_cacheHas.9d7b6529.js";import"./use-deep-compare-effect.esm.7ae859ab.js";const Z={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const $=["Demo"];export{s as Demo,$ as __namedExportsOrder,Z as default};

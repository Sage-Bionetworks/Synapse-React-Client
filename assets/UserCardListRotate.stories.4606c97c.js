import{U as t}from"./UserCardListRotate.74c11179.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.d95d6493.js";import"./sqlFunctions.7213c897.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.221666e3.js";import"./index.a967ac4c.js";import"./index.7a9149c6.js";import"./iframe.7f51ef58.js";import"./Button.a2dbd16c.js";import"./styled.3f404f86.js";import"./utils.39b72e5d.js";import"./Alert.ac443a97.js";import"./createWithBsPrefix.4fb80af1.js";import"./index.35ce73ec.js";import"./isArray.6553b885.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.67322144.js";import"./ColumnType.744125d2.js";import"./UserCardList.65e78400.js";import"./UserCard.f4ef9e5a.js";import"./IconCopy.57146dc0.js";import"./SkeletonTable.239236e1.js";import"./times.5a8d2fe1.js";import"./toInteger.eafc4c9b.js";import"./isSymbol.641f0fe1.js";import"./Skeleton.d72513ec.js";import"./emotion-react.browser.esm.1bce0706.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.05cf2f3e.js";import"./Tooltip.bdb5981c.js";import"./createSvgIcon.54e8e52e.js";import"./InfoOutlined.2d1c81ce.js";import"./ToastMessage.1b9e5ec3.js";import"./FullWidthAlert.c5df0de8.js";import"./Typography.5462d0e3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.82d1329f.js";import"./Overlay.2efb852e.js";import"./contains.bddd4731.js";import"./usePopperMarginModifiers.d9524712.js";import"./useWaitForDOMRef.2249f319.js";import"./without.6b0b9205.js";import"./_cacheHas.902be7b7.js";import"./use-deep-compare-effect.esm.61fac49d.js";const Z={parameters:{storySource:{source:`import React from 'react'
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

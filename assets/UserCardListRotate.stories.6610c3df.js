import{U as t}from"./UserCardListRotate.8c8d8631.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.34ce7573.js";import"./sqlFunctions.fb2b8b19.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.cb52bd20.js";import"./index.9252e43c.js";import"./index.440cbb05.js";import"./iframe.2f145b9b.js";import"./Button.ce0bd2bc.js";import"./styled.20fad266.js";import"./utils.02697a41.js";import"./Alert.6db3bf6f.js";import"./createWithBsPrefix.b3a1d38c.js";import"./index.35ce73ec.js";import"./isArray.c4020594.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.be1787bd.js";import"./ColumnType.744125d2.js";import"./UserCardList.dbd42a20.js";import"./UserCard.d4cb2331.js";import"./IconCopy.4dd3a28c.js";import"./SkeletonTable.75981830.js";import"./times.060b00f0.js";import"./toInteger.237c62c7.js";import"./isSymbol.a6cfa1b9.js";import"./Skeleton.4a2bac74.js";import"./emotion-react.browser.esm.2f1b8c6f.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.e4eaabe3.js";import"./Tooltip.ba09745a.js";import"./createSvgIcon.b38e43ed.js";import"./InfoOutlined.776d3e3c.js";import"./ToastMessage.25625655.js";import"./FullWidthAlert.9e017ef2.js";import"./Typography.40039e1c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d34fd1e6.js";import"./Overlay.e9b5736d.js";import"./contains.6d148a53.js";import"./usePopperMarginModifiers.08d898fd.js";import"./useWaitForDOMRef.bd397adc.js";import"./without.8878821f.js";import"./_cacheHas.501324b1.js";import"./use-deep-compare-effect.esm.98e326b7.js";const Z={parameters:{storySource:{source:`import React from 'react'
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

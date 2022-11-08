import{U as t}from"./UserCardListRotate.1d7be1c9.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.02fcd003.js";import"./sqlFunctions.6c29bc93.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.fe898980.js";import"./index.91a9706e.js";import"./index.0864d1cf.js";import"./iframe.25b1a9fc.js";import"./Button.bd4bae0e.js";import"./styled.094a3a2c.js";import"./utils.62f6c1ea.js";import"./Alert.92a838df.js";import"./createWithBsPrefix.9fcf4917.js";import"./index.35ce73ec.js";import"./isArray.404de5ac.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.66ad72a0.js";import"./ColumnType.744125d2.js";import"./UserCardList.edd5ba6e.js";import"./UserCard.f776b74e.js";import"./IconCopy.5b716459.js";import"./SkeletonTable.8183c23e.js";import"./times.36513370.js";import"./toInteger.3466557e.js";import"./isSymbol.b2b689d7.js";import"./Skeleton.1c99f826.js";import"./emotion-react.browser.esm.a24af408.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.c783b477.js";import"./Tooltip.977ea0b9.js";import"./createSvgIcon.37b7d2f8.js";import"./InfoOutlined.9adbadde.js";import"./ToastMessage.5f109185.js";import"./FullWidthAlert.b9addea3.js";import"./Typography.79e944f5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.446adc13.js";import"./Overlay.712e50d1.js";import"./contains.593a857e.js";import"./usePopperMarginModifiers.417da628.js";import"./useWaitForDOMRef.abb80557.js";import"./without.1a07f841.js";import"./_cacheHas.2a8fdb0c.js";import"./use-deep-compare-effect.esm.087251af.js";const Z={parameters:{storySource:{source:`import React from 'react'
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

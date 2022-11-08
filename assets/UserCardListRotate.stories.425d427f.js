import{U as t}from"./UserCardListRotate.5bb18cc4.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.e755df9d.js";import"./sqlFunctions.3408ddc8.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.b61a1724.js";import"./index.f37f3b8f.js";import"./index.46e2a3d6.js";import"./iframe.2151c0e3.js";import"./Button.ce5d2622.js";import"./styled.134e90bd.js";import"./utils.61686747.js";import"./Alert.7ac348fd.js";import"./createWithBsPrefix.c5475a12.js";import"./index.35ce73ec.js";import"./isArray.32035835.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.26fd4209.js";import"./ColumnType.744125d2.js";import"./UserCardList.fc1bceb8.js";import"./UserCard.b4b4f075.js";import"./IconCopy.ada7cf84.js";import"./SkeletonTable.dac7e5fd.js";import"./times.005fd51b.js";import"./toInteger.44f4879c.js";import"./isSymbol.449c22fe.js";import"./Skeleton.902d2113.js";import"./emotion-react.browser.esm.888ec03a.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.0451ffde.js";import"./Tooltip.68fb53f0.js";import"./createSvgIcon.4e7dae8f.js";import"./InfoOutlined.f6c28811.js";import"./ToastMessage.3b077507.js";import"./FullWidthAlert.4c671361.js";import"./Typography.c9ad912d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.05b48118.js";import"./Overlay.f4f68cfe.js";import"./contains.c7dcff34.js";import"./usePopperMarginModifiers.64be5d9c.js";import"./useWaitForDOMRef.1fc5c6db.js";import"./without.5e5c6054.js";import"./_cacheHas.b6de7e15.js";import"./use-deep-compare-effect.esm.700faf33.js";const Z={parameters:{storySource:{source:`import React from 'react'
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

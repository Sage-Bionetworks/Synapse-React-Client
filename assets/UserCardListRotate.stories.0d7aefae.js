import{U as t}from"./UserCardListRotate.218ab073.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.a1d381ad.js";import"./sqlFunctions.805519ce.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.bd2e15fe.js";import"./index.c07b435e.js";import"./index.9f535dbb.js";import"./iframe.81590c6e.js";import"./Button.ebc3484d.js";import"./index.57d09176.js";import"./withStyles.697310ee.js";import"./utils.6cb5795e.js";import"./Alert.ae374429.js";import"./createWithBsPrefix.b8918cd7.js";import"./index.35ce73ec.js";import"./isArray.cfd918dc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0314c6b1.js";import"./ColumnType.744125d2.js";import"./UserCardList.56a389de.js";import"./UserCard.0e32065f.js";import"./IconCopy.9e4bc935.js";import"./SkeletonTable.eecd7a8b.js";import"./times.3a1a85cc.js";import"./toInteger.6a5fcd60.js";import"./isSymbol.9201fb1c.js";import"./Skeleton.00fa93e7.js";import"./Tooltip.881da3c6.js";import"./createSvgIcon.8505b138.js";import"./makeStyles.2b248e78.js";import"./IconSvg.61de10c1.js";import"./InfoOutlined.c00dd9c7.js";import"./ToastMessage.204b2104.js";import"./FullWidthAlert.9cc3b3c7.js";import"./Typography.1abf3c12.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.cac1ac91.js";import"./Overlay.ba0f781a.js";import"./contains.f621b86d.js";import"./usePopperMarginModifiers.7bfa5684.js";import"./useWaitForDOMRef.f4d59a83.js";import"./without.325b87a0.js";import"./_cacheHas.e93d1118.js";import"./use-deep-compare-effect.esm.9ef0fe73.js";const Z={parameters:{storySource:{source:`import React from 'react'
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

import{U as t}from"./UserCardListRotate.942afcbf.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.9272ed69.js";import"./sqlFunctions.bf9ee2ef.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.3f245f1f.js";import"./index.f6d21e1b.js";import"./index.dc51ea0b.js";import"./iframe.e4b610a3.js";import"./Button.db898533.js";import"./styled.0de421fa.js";import"./utils.6e1717b5.js";import"./TransitionGroupContext.54f3d5ea.js";import"./useTheme.75529918.js";import"./Alert.2534b0a8.js";import"./hook.0361e512.js";import"./createWithBsPrefix.9ea76fe5.js";import"./divWithClassName.c5203597.js";import"./index.35ce73ec.js";import"./Fade.cc51c470.js";import"./isArray.f757e7ba.js";import"./getEndpoint.bb7ded34.js";import"./Link.8b0bf192.js";import"./Typography.1f221702.js";import"./Button.0c0c729f.js";import"./ButtonBase.3405045f.js";import"./emotion-react.browser.esm.1c97b976.js";import"./ColumnType.744125d2.js";import"./UserCardList.ba94391f.js";import"./UserCard.fd71ec21.js";import"./IconCopy.5eab956d.js";import"./SkeletonTable.f9509214.js";import"./times.51f590ec.js";import"./toInteger.13c3eb15.js";import"./isSymbol.04dc93d5.js";import"./Skeleton.fb3032fb.js";import"./IconSvg.26b6f898.js";import"./Tooltip.d2aa8c40.js";import"./createSvgIcon.1c5ae5be.js";import"./InfoOutlined.cadfca07.js";import"./ToastMessage.c90a289b.js";import"./FullWidthAlert.5512750c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f24c8a17.js";import"./Overlay.5bf74367.js";import"./contains.27e7aea9.js";import"./usePopperMarginModifiers.d53889fd.js";import"./useWaitForDOMRef.cd5903ac.js";import"./without.3345252e.js";import"./_cacheHas.c948dd29.js";import"./use-deep-compare-effect.esm.76ae4c34.js";const it={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),m=i.bind({});m.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const mt=["Demo"];export{m as Demo,mt as __namedExportsOrder,it as default};

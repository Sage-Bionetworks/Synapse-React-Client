import{U as t}from"./UserCardListRotate.cd7ad488.js";import{t as r}from"./SynapseConstants.aef18750.js";import{j as e}from"./jsx-runtime.32974a61.js";import"./sqlFunctions.e5de3b71.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.1f16af57.js";import"./index.ffb97e36.js";import"./index.3765caa7.js";import"./iframe.1b774001.js";import"./Button.335f67c9.js";import"./styled.d39d5dc5.js";import"./Tooltip.86d343dc.js";import"./SvgIcon.85beeea7.js";import"./useTheme.6433d807.js";import"./TransitionGroupContext.a684d657.js";import"./FullWidthAlert.1407f383.js";import"./hook.b7735453.js";import"./createWithBsPrefix.9bd79cbf.js";import"./divWithClassName.5dac844d.js";import"./index.35ce73ec.js";import"./Typography.c2c9dd4b.js";import"./Fade.40b5902b.js";import"./isArray.c8bb4df8.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.13ae9a2f.js";import"./IconButton.adda85b8.js";import"./ButtonBase.38f61443.js";import"./emotion-react.browser.esm.34fe7ce7.js";import"./Link.7609fc67.js";import"./Button.a71922e0.js";import"./ColumnType.0fc7f115.js";import"./UserCardList.816f281b.js";import"./UserCard.e7305117.js";import"./IconCopy.ef0119b7.js";import"./SkeletonTable.46544d69.js";import"./times.2bf5fee2.js";import"./toInteger.79c7525f.js";import"./isSymbol.99aea655.js";import"./Skeleton.391d7134.js";import"./ToastMessage.65ccc322.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.74860187.js";import"./toString.77379481.js";import"./Overlay.506fb03e.js";import"./contains.bd6ce983.js";import"./usePopperMarginModifiers.c268b183.js";import"./useWaitForDOMRef.8d2f766c.js";import"./without.171c241f.js";import"./_cacheHas.0a931368.js";import"./use-deep-compare-effect.esm.baa92912.js";const et={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const it=["Demo"];export{s as Demo,it as __namedExportsOrder,et as default};

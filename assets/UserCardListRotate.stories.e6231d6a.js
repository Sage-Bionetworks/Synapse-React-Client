import{U as t}from"./UserCardListRotate.348608f9.js";import{t as r}from"./SynapseConstants.aef18750.js";import{j as e}from"./jsx-runtime.2345241f.js";import"./sqlFunctions.2fd3fba9.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.a3eb9749.js";import"./index.3aece391.js";import"./index.5a7af4ba.js";import"./iframe.b6c45fd3.js";import"./Button.dd9fc4ec.js";import"./styled.8a79803b.js";import"./Tooltip.c4c31d9f.js";import"./SvgIcon.c3dd5893.js";import"./useTheme.7300f82e.js";import"./TransitionGroupContext.ce30fb83.js";import"./FullWidthAlert.f758387e.js";import"./hook.40948bbb.js";import"./createWithBsPrefix.767a2de5.js";import"./divWithClassName.ada2c499.js";import"./index.35ce73ec.js";import"./Typography.5428f494.js";import"./Fade.544d2c09.js";import"./isArray.594b9061.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.c0ad7b85.js";import"./IconButton.479fa89c.js";import"./ButtonBase.37e9a56e.js";import"./emotion-react.browser.esm.782cdb58.js";import"./Link.10558e7e.js";import"./Button.2a6d5e68.js";import"./ColumnType.0fc7f115.js";import"./UserCardList.15756da8.js";import"./UserCard.ba59470c.js";import"./IconCopy.96dd679a.js";import"./SkeletonTable.a46ba30a.js";import"./times.cf7726b4.js";import"./toInteger.accec1ae.js";import"./isSymbol.f2edf3f1.js";import"./Skeleton.153caf19.js";import"./ToastMessage.67e8dd8b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.15511b65.js";import"./toString.f6d778fc.js";import"./Overlay.38d5df1d.js";import"./contains.ca3b169c.js";import"./usePopperMarginModifiers.279ac1d5.js";import"./useWaitForDOMRef.6e025e2e.js";import"./without.fdcdbb83.js";import"./_cacheHas.444d0de0.js";import"./use-deep-compare-effect.esm.172e5a35.js";const et={parameters:{storySource:{source:`import React from 'react'
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

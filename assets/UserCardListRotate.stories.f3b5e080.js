import{U as t}from"./UserCardListRotate.6c2aaebb.js";import{t as r}from"./SynapseConstants.aef18750.js";import{j as e}from"./jsx-runtime.6efef3f0.js";import"./sqlFunctions.ba594ce5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.30eec546.js";import"./index.f6f857f5.js";import"./index.527b2819.js";import"./iframe.b3705b98.js";import"./Button.113b0f45.js";import"./styled.3d34e36b.js";import"./Tooltip.9a185035.js";import"./SvgIcon.3e939805.js";import"./useTheme.2b3579a1.js";import"./TransitionGroupContext.962689fd.js";import"./FullWidthAlert.87654e2f.js";import"./hook.4287fc8d.js";import"./createWithBsPrefix.dc61fcfa.js";import"./divWithClassName.39d1e3e2.js";import"./index.35ce73ec.js";import"./Typography.a863760e.js";import"./Fade.ee3053ca.js";import"./isArray.ce0fc8e6.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a0ac0502.js";import"./IconButton.a32a330b.js";import"./ButtonBase.42d7166c.js";import"./emotion-react.browser.esm.89334e8c.js";import"./Link.f540f0ea.js";import"./Button.bcc1fc04.js";import"./ColumnType.0fc7f115.js";import"./UserCardList.4d0cf000.js";import"./UserCard.89fae007.js";import"./IconCopy.7b0e586f.js";import"./SkeletonTable.43182f64.js";import"./times.ce6f9568.js";import"./toInteger.a03e46d2.js";import"./isSymbol.7ee325a2.js";import"./Skeleton.c73b94b2.js";import"./ToastMessage.a9162853.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.a881a904.js";import"./toString.931d2742.js";import"./Overlay.6c0a21b1.js";import"./contains.789c8f44.js";import"./usePopperMarginModifiers.0eff8b53.js";import"./useWaitForDOMRef.265683e8.js";import"./without.e36cd559.js";import"./_cacheHas.c0fe68d8.js";import"./use-deep-compare-effect.esm.fa498af3.js";const et={parameters:{storySource:{source:`import React from 'react'
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

import{U as t}from"./UserCardListRotate.a2fcf708.js";import{t as r}from"./SynapseConstants.4792b5b5.js";import{j as e}from"./jsx-runtime.e6c7cb0f.js";import"./sqlFunctions.1444b517.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.a15418f9.js";import"./index.a4d7c90b.js";import"./index.2be90583.js";import"./iframe.62902f49.js";import"./Button.55945b82.js";import"./styled.defe1bf4.js";import"./Tooltip.b8c59786.js";import"./SvgIcon.277e4012.js";import"./useTheme.78ea417a.js";import"./TransitionGroupContext.9be55353.js";import"./Alert.dd9a8045.js";import"./hook.0a44a4bc.js";import"./createWithBsPrefix.d521861c.js";import"./divWithClassName.f3083196.js";import"./index.35ce73ec.js";import"./Fade.43ac51c5.js";import"./isArray.d7f4d705.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.7c6c26ba.js";import"./IconButton.3458b12d.js";import"./ButtonBase.c32891f3.js";import"./emotion-react.browser.esm.0fa712d1.js";import"./Link.f733bec4.js";import"./Typography.491b6426.js";import"./Button.6ec7c4e8.js";import"./ColumnType.744125d2.js";import"./UserCardList.c1f20fb2.js";import"./UserCard.d526f464.js";import"./IconCopy.137bbf05.js";import"./SkeletonTable.eb79cb63.js";import"./times.f6524aef.js";import"./toInteger.e34afcf8.js";import"./isSymbol.361bd2a3.js";import"./Skeleton.fe2a8391.js";import"./ToastMessage.7470eb0d.js";import"./FullWidthAlert.194d0790.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.3a766a50.js";import"./Overlay.eaf422e6.js";import"./contains.d4d1085c.js";import"./usePopperMarginModifiers.667559d9.js";import"./useWaitForDOMRef.0aadaf3e.js";import"./without.b4578f3b.js";import"./_cacheHas.006794e6.js";import"./use-deep-compare-effect.esm.28d3327d.js";const et={parameters:{storySource:{source:`import React from 'react'
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

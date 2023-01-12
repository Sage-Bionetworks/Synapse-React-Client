import{U as t}from"./UserCardListRotate.f1413b25.js";import{t as r}from"./SynapseConstants.aef18750.js";import{j as e}from"./jsx-runtime.a638b984.js";import"./sqlFunctions.32eb366f.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.b6981f76.js";import"./index.b83134ec.js";import"./index.357ef824.js";import"./iframe.73217397.js";import"./Button.9991ffcd.js";import"./styled.d7b43787.js";import"./Tooltip.9be437e1.js";import"./SvgIcon.e74d0ad6.js";import"./useTheme.207e8da2.js";import"./TransitionGroupContext.f8911474.js";import"./FullWidthAlert.97efcbea.js";import"./hook.a59baafe.js";import"./createWithBsPrefix.86af4a28.js";import"./divWithClassName.979a7568.js";import"./index.35ce73ec.js";import"./Typography.1d6efe32.js";import"./Fade.cb073591.js";import"./isArray.dae1198f.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9dec1c98.js";import"./IconButton.7cd1b748.js";import"./ButtonBase.bc378f3c.js";import"./emotion-react.browser.esm.3d42de74.js";import"./Link.e9eeb2e9.js";import"./Button.666a2c38.js";import"./ColumnType.744125d2.js";import"./UserCardList.2e00fa1e.js";import"./UserCard.48755798.js";import"./IconCopy.9eb37407.js";import"./SkeletonTable.5915fa08.js";import"./times.6c1e506b.js";import"./toInteger.6100b906.js";import"./isSymbol.0dd0ac71.js";import"./Skeleton.9bd91a4d.js";import"./ToastMessage.1f086d0d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.409eda17.js";import"./toString.42e4c32f.js";import"./Overlay.d99e3370.js";import"./contains.bb95d688.js";import"./usePopperMarginModifiers.5dd6ca76.js";import"./useWaitForDOMRef.1ade44a8.js";import"./without.5a3916f3.js";import"./_cacheHas.3d34eb58.js";import"./use-deep-compare-effect.esm.84f86818.js";const et={parameters:{storySource:{source:`import React from 'react'
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

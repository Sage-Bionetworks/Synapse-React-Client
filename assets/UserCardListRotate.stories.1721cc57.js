import{U as t}from"./UserCardListRotate.7bc9abac.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.076c7567.js";import"./sqlFunctions.6aa94ea0.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.391fb5d9.js";import"./index.53b0413e.js";import"./index.3dd8c113.js";import"./iframe.dc9e500a.js";import"./Button.a0002af7.js";import"./styled.65df53fb.js";import"./Tooltip.b4ed2e26.js";import"./TransitionGroupContext.9598a495.js";import"./useTheme.6d85215f.js";import"./Alert.052d6dda.js";import"./hook.fb6ae99a.js";import"./createWithBsPrefix.125a71ed.js";import"./divWithClassName.d855987b.js";import"./index.35ce73ec.js";import"./Fade.476b0ff7.js";import"./isArray.b8ce881a.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.94aeb20a.js";import"./IconButton.81618d29.js";import"./ButtonBase.49fff140.js";import"./emotion-react.browser.esm.74b64aae.js";import"./Link.fd8fbf97.js";import"./Typography.18dd9738.js";import"./Button.855954d3.js";import"./ColumnType.744125d2.js";import"./UserCardList.305661b8.js";import"./UserCard.51dc49e5.js";import"./IconCopy.1b045a7b.js";import"./SkeletonTable.3dd63b5b.js";import"./times.2784b383.js";import"./toInteger.92753527.js";import"./isSymbol.353ed4c3.js";import"./Skeleton.83217f13.js";import"./ToastMessage.f480df01.js";import"./FullWidthAlert.c3c066c4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0acb56b3.js";import"./Overlay.07d52eac.js";import"./contains.3362c067.js";import"./usePopperMarginModifiers.a23c4ed0.js";import"./useWaitForDOMRef.dbc78690.js";import"./without.87978f51.js";import"./_cacheHas.59262266.js";import"./use-deep-compare-effect.esm.2f8a811e.js";const rt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const et=["Demo"];export{s as Demo,et as __namedExportsOrder,rt as default};

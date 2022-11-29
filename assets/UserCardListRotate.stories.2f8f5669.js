import{U as t}from"./UserCardListRotate.f3b4e2f9.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.23bcdc09.js";import"./sqlFunctions.f9b9cbac.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.bb36e699.js";import"./index.20c1822f.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./Button.9cfa11f8.js";import"./styled.8da6873c.js";import"./utils.2eab32fe.js";import"./TransitionGroupContext.b9a824ce.js";import"./useTheme.26e47b20.js";import"./Alert.03ebe4a7.js";import"./hook.81302421.js";import"./createWithBsPrefix.26026502.js";import"./divWithClassName.fcb14682.js";import"./index.35ce73ec.js";import"./Fade.5c08504a.js";import"./isArray.1d31a80d.js";import"./getEndpoint.bb7ded34.js";import"./Link.e49ccf51.js";import"./Typography.17940352.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";import"./emotion-react.browser.esm.599684c1.js";import"./ColumnType.744125d2.js";import"./UserCardList.4bff2bca.js";import"./UserCard.b277597c.js";import"./IconCopy.3d0604ac.js";import"./SkeletonTable.7a076046.js";import"./times.e12d7030.js";import"./toInteger.dfc8aa00.js";import"./isSymbol.017a619a.js";import"./Skeleton.93cf864e.js";import"./IconSvg.1982fde5.js";import"./Tooltip.cfbb546f.js";import"./createSvgIcon.e3e4a251.js";import"./InfoOutlined.61048ddd.js";import"./ToastMessage.52d73997.js";import"./FullWidthAlert.465c2909.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.5a455c2a.js";import"./Overlay.177b926b.js";import"./contains.e26e64f1.js";import"./usePopperMarginModifiers.2032f396.js";import"./useWaitForDOMRef.1d1fe719.js";import"./without.cde801d5.js";import"./_cacheHas.990f1aa2.js";import"./use-deep-compare-effect.esm.c436bf33.js";const it={parameters:{storySource:{source:`import React from 'react'
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

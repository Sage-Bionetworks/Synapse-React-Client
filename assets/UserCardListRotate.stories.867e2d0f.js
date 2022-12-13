import{U as t}from"./UserCardListRotate.864c3fff.js";import{t as r}from"./SynapseConstants.d6ba6a96.js";import{j as e}from"./jsx-runtime.d04151d1.js";import"./sqlFunctions.6804c648.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.dd2b8000.js";import"./EntityTypeUtils.9c2483b3.js";import"./index.8319c373.js";import"./iframe.d32e0f35.js";import"./Fade.f21ee508.js";import"./styled.1efff5b8.js";import"./useTheme.175bd669.js";import"./Tooltip.4974d54a.js";import"./SvgIcon.d3ec47f0.js";import"./TransitionGroupContext.1ef7d36b.js";import"./isArray.88add67b.js";import"./Button.a12385d6.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.23552105.js";import"./createWithBsPrefix.f5521544.js";import"./IconButton.f2c2856c.js";import"./ButtonBase.3d334067.js";import"./emotion-react.browser.esm.b7b35e3a.js";import"./Link.45362a72.js";import"./Typography.73bd7049.js";import"./Button.09b7bba7.js";import"./Alert.770d73de.js";import"./hook.ba873afd.js";import"./divWithClassName.2e38eee3.js";import"./ColumnType.744125d2.js";import"./UserCardList.6612b7e7.js";import"./UserCard.85628e7b.js";import"./IconCopy.f2a5ff5c.js";import"./SkeletonTable.9b156a16.js";import"./times.f1a57eab.js";import"./toInteger.ae0f3fd8.js";import"./isSymbol.4d2b99f3.js";import"./Skeleton.b0e23dcf.js";import"./ToastMessage.7ece14e4.js";import"./FullWidthAlert.8d2b5601.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.55896be5.js";import"./Overlay.68ebd8b3.js";import"./contains.5d34513a.js";import"./usePopperMarginModifiers.eac9bbda.js";import"./useWaitForDOMRef.3ce690e8.js";import"./without.f73f20c7.js";import"./_cacheHas.64f4d1a5.js";import"./use-deep-compare-effect.esm.3b45ff57.js";const et={parameters:{storySource:{source:`import React from 'react'
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

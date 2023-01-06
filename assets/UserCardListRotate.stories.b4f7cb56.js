import{U as t}from"./UserCardListRotate.ed3bd814.js";import{t as r}from"./SynapseConstants.d6ba6a96.js";import{j as e}from"./jsx-runtime.cae1efce.js";import"./sqlFunctions.2fb5266e.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.aaa17d3c.js";import"./EntityTypeUtils.02efa7e4.js";import"./index.3a565a91.js";import"./iframe.61f567f7.js";import"./Fade.31660acb.js";import"./styled.893b6037.js";import"./useTheme.6ac8e7e3.js";import"./Tooltip.017a66bf.js";import"./SvgIcon.d977b0c7.js";import"./TransitionGroupContext.bc025aa2.js";import"./isArray.175db850.js";import"./Button.7727704e.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.6bbb8efe.js";import"./createWithBsPrefix.df7fa21f.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./emotion-react.browser.esm.0f705697.js";import"./Link.c5d35787.js";import"./Typography.334f7e13.js";import"./Button.af90093c.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./divWithClassName.5b633697.js";import"./ColumnType.744125d2.js";import"./UserCardList.db0a81ca.js";import"./UserCard.60a81442.js";import"./IconCopy.158d0c53.js";import"./SkeletonTable.ef7abf61.js";import"./times.df010a42.js";import"./toInteger.3ed0cd2f.js";import"./isSymbol.87b57363.js";import"./Skeleton.5c3ed137.js";import"./ToastMessage.8e99f4ca.js";import"./FullWidthAlert.9d4713f3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fbe1b45a.js";import"./Overlay.879f6140.js";import"./contains.44df3564.js";import"./usePopperMarginModifiers.fb0d551a.js";import"./useWaitForDOMRef.6ca94db7.js";import"./without.ff72cb8b.js";import"./_cacheHas.ea09e558.js";import"./use-deep-compare-effect.esm.f099afc0.js";const et={parameters:{storySource:{source:`import React from 'react'
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

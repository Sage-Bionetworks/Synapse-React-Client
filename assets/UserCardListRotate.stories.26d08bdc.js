import{U as t}from"./UserCardListRotate.2f87094e.js";import{t as r}from"./SynapseConstants.4792b5b5.js";import{j as e}from"./jsx-runtime.8ee42ca4.js";import"./sqlFunctions.e821b8e9.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.78bffa27.js";import"./index.6e226ad1.js";import"./index.c68764fa.js";import"./iframe.57558d86.js";import"./Button.32185a3f.js";import"./styled.cab085b6.js";import"./Tooltip.53b3d1bd.js";import"./SvgIcon.e7d9e8d5.js";import"./useTheme.a650b60c.js";import"./TransitionGroupContext.d40bca5e.js";import"./Alert.4adbe9cb.js";import"./hook.b75ee742.js";import"./createWithBsPrefix.1fcef933.js";import"./divWithClassName.4fa3ddf0.js";import"./index.35ce73ec.js";import"./Fade.8d5d2209.js";import"./isArray.649754a9.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9744025b.js";import"./IconButton.0dfca4e0.js";import"./ButtonBase.442ee4f8.js";import"./emotion-react.browser.esm.755544ae.js";import"./Link.f5b0fcd9.js";import"./Typography.dc67c84b.js";import"./Button.73b6fb95.js";import"./ColumnType.744125d2.js";import"./UserCardList.a770fc3f.js";import"./UserCard.0ebf5c75.js";import"./IconCopy.fedbd76c.js";import"./SkeletonTable.7edc5c07.js";import"./times.2c182ff5.js";import"./toInteger.c3531c4d.js";import"./isSymbol.4962e9a9.js";import"./Skeleton.3af709e7.js";import"./ToastMessage.43b52073.js";import"./FullWidthAlert.a54f59d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d7153eca.js";import"./Overlay.0bda75db.js";import"./contains.3c554215.js";import"./usePopperMarginModifiers.78486f26.js";import"./useWaitForDOMRef.b0e44e89.js";import"./without.4399bd14.js";import"./_cacheHas.81596850.js";import"./use-deep-compare-effect.esm.9021590c.js";const et={parameters:{storySource:{source:`import React from 'react'
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

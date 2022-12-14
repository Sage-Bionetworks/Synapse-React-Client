import{U as t}from"./UserCardListRotate.c011c992.js";import{t as r}from"./SynapseConstants.d6ba6a96.js";import{j as e}from"./jsx-runtime.edcee20f.js";import"./sqlFunctions.4c211c8a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.7da789b0.js";import"./EntityTypeUtils.f136fe8e.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./Fade.e73bdacf.js";import"./styled.57026967.js";import"./useTheme.c864c010.js";import"./Tooltip.6287427b.js";import"./SvgIcon.cf85a686.js";import"./TransitionGroupContext.9f30f89b.js";import"./isArray.ba2a5774.js";import"./Button.beed9c8a.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a36fd00f.js";import"./createWithBsPrefix.fb2e744c.js";import"./IconButton.f86e6b85.js";import"./ButtonBase.8a19de44.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./Link.c844031a.js";import"./Typography.8ba12270.js";import"./Button.237100ef.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./divWithClassName.198d5031.js";import"./ColumnType.744125d2.js";import"./UserCardList.daeed47e.js";import"./UserCard.d9f9873d.js";import"./IconCopy.a9a46157.js";import"./SkeletonTable.eac87a94.js";import"./times.d987e694.js";import"./toInteger.93344759.js";import"./isSymbol.4e401305.js";import"./Skeleton.7309b0e8.js";import"./ToastMessage.fe900393.js";import"./FullWidthAlert.15c58824.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d49ff0ce.js";import"./Overlay.0deab64d.js";import"./contains.73b2d2ff.js";import"./usePopperMarginModifiers.3784b24d.js";import"./useWaitForDOMRef.b1b60d08.js";import"./without.958702a4.js";import"./_cacheHas.1076ebc6.js";import"./use-deep-compare-effect.esm.4b9e5356.js";const et={parameters:{storySource:{source:`import React from 'react'
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

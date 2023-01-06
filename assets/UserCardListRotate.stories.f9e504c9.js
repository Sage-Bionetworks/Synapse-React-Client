import{U as t}from"./UserCardListRotate.25df2e90.js";import{t as r}from"./SynapseConstants.d6ba6a96.js";import{j as e}from"./jsx-runtime.7f415a49.js";import"./sqlFunctions.317acf55.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.98e21063.js";import"./EntityTypeUtils.a88da157.js";import"./index.322ef20a.js";import"./iframe.f0eb7e4f.js";import"./Fade.91bde074.js";import"./styled.681e07cb.js";import"./useTheme.93fabebb.js";import"./Tooltip.532ca871.js";import"./SvgIcon.67c4bd7a.js";import"./TransitionGroupContext.d6cb07c1.js";import"./isArray.22a05d29.js";import"./Button.03e30a54.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.4536f7bc.js";import"./createWithBsPrefix.1ec397ad.js";import"./IconButton.f87dde1e.js";import"./ButtonBase.24c8fd98.js";import"./emotion-react.browser.esm.3f795854.js";import"./Link.962b4b54.js";import"./Typography.b9cf5e4f.js";import"./Button.7a13a013.js";import"./Alert.41cbd6e8.js";import"./hook.926e9335.js";import"./divWithClassName.4f7ac618.js";import"./ColumnType.744125d2.js";import"./UserCardList.a6514bc6.js";import"./UserCard.d1f4475d.js";import"./IconCopy.02e8b48e.js";import"./SkeletonTable.ce10e001.js";import"./times.9ff12fd4.js";import"./toInteger.d64e3f97.js";import"./isSymbol.9047c28e.js";import"./Skeleton.cf05128e.js";import"./ToastMessage.475a246a.js";import"./FullWidthAlert.58605d4c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.706d73bf.js";import"./Overlay.34589b18.js";import"./contains.12125dea.js";import"./usePopperMarginModifiers.1e19fcd3.js";import"./useWaitForDOMRef.96d00667.js";import"./without.0cb61de1.js";import"./_cacheHas.6bb37714.js";import"./use-deep-compare-effect.esm.a50fe12d.js";const et={parameters:{storySource:{source:`import React from 'react'
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

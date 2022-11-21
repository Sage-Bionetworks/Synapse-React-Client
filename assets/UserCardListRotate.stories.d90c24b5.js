import{U as t}from"./UserCardListRotate.74f3e168.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.ed9254b2.js";import"./sqlFunctions.be81fc47.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.b62d2248.js";import"./index.09dc23e8.js";import"./index.6a4b5ee2.js";import"./iframe.99e068ca.js";import"./Button.f70cf9a8.js";import"./styled.83fecbff.js";import"./utils.ce7a07fb.js";import"./TransitionGroupContext.335c91bc.js";import"./useTheme.fd34ae61.js";import"./Alert.5c7a73ee.js";import"./hook.8985ff56.js";import"./createWithBsPrefix.a83dfdb4.js";import"./divWithClassName.2b7a9e20.js";import"./index.35ce73ec.js";import"./isArray.9c9c9c65.js";import"./getEndpoint.bb7ded34.js";import"./Link.4533b1ea.js";import"./Typography.754ee5d4.js";import"./Button.3c46c29a.js";import"./ButtonBase.7ff40024.js";import"./emotion-react.browser.esm.c3af8cc3.js";import"./ColumnType.744125d2.js";import"./UserCardList.f4976604.js";import"./UserCard.07bf50f3.js";import"./IconCopy.952aa6c8.js";import"./SkeletonTable.1f898edc.js";import"./times.d13dc2b1.js";import"./toInteger.b20f9fa9.js";import"./isSymbol.18579460.js";import"./Skeleton.5cb63a0f.js";import"./IconSvg.f9657569.js";import"./Tooltip.f5ebbadc.js";import"./createSvgIcon.90f6b4eb.js";import"./InfoOutlined.2dc079e8.js";import"./ToastMessage.2604ce43.js";import"./FullWidthAlert.adc5f173.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0aa69bea.js";import"./Overlay.60675e59.js";import"./contains.7d4be39e.js";import"./usePopperMarginModifiers.a98822d9.js";import"./useWaitForDOMRef.053cb997.js";import"./without.1a3a79a3.js";import"./_cacheHas.9a7f07e6.js";import"./use-deep-compare-effect.esm.d4fdc855.js";const et={parameters:{storySource:{source:`import React from 'react'
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

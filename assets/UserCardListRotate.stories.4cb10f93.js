import{U as t}from"./UserCardListRotate.7e806607.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.0db21b62.js";import"./sqlFunctions.89b7555a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.982fc5d7.js";import"./index.90ee2b5e.js";import"./index.9eb164f8.js";import"./iframe.55601028.js";import"./Button.8dd67db9.js";import"./styled.04f8a540.js";import"./utils.8a121841.js";import"./TransitionGroupContext.59a59a19.js";import"./useTheme.6f96ca98.js";import"./Alert.476644bc.js";import"./hook.d21c687b.js";import"./createWithBsPrefix.cf2ded3d.js";import"./divWithClassName.9349f2fc.js";import"./index.35ce73ec.js";import"./Fade.002da28b.js";import"./isArray.051b97b8.js";import"./getEndpoint.bb7ded34.js";import"./Link.400989ff.js";import"./Typography.fc802d4f.js";import"./Button.c393a679.js";import"./ButtonBase.9b5b9b75.js";import"./emotion-react.browser.esm.e326a50f.js";import"./ColumnType.744125d2.js";import"./UserCardList.3cd94795.js";import"./UserCard.dbd6791d.js";import"./IconCopy.1118163b.js";import"./SkeletonTable.95f35468.js";import"./times.ca2e0d7b.js";import"./toInteger.82ea438a.js";import"./isSymbol.70fe8399.js";import"./Skeleton.99622f82.js";import"./IconSvg.7ea71104.js";import"./Tooltip.137fb27a.js";import"./createSvgIcon.2669ec85.js";import"./InfoOutlined.c6dcbd99.js";import"./ToastMessage.10c98715.js";import"./FullWidthAlert.257257d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.9af27e73.js";import"./Overlay.8ef738fa.js";import"./contains.18910bdc.js";import"./usePopperMarginModifiers.6d23a00d.js";import"./useWaitForDOMRef.ada5a7ee.js";import"./without.a296bf52.js";import"./_cacheHas.5f692c9b.js";import"./use-deep-compare-effect.esm.f1067dd3.js";const it={parameters:{storySource:{source:`import React from 'react'
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

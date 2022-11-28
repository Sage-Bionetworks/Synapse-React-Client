import{U as t}from"./UserCardListRotate.b64057fe.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.f4a5fef7.js";import"./sqlFunctions.3ae34c19.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.6972a42a.js";import"./index.78005489.js";import"./index.ee4c3b55.js";import"./iframe.1c2d6841.js";import"./Button.6c384231.js";import"./styled.02bbe28b.js";import"./utils.c51ff475.js";import"./TransitionGroupContext.bc250134.js";import"./useTheme.cb95caa9.js";import"./Alert.4753fb70.js";import"./hook.82a0cc8c.js";import"./createWithBsPrefix.54f05b7e.js";import"./divWithClassName.967bfcd9.js";import"./index.35ce73ec.js";import"./Fade.f600cb07.js";import"./isArray.c85c7bf8.js";import"./getEndpoint.bb7ded34.js";import"./Link.880594dd.js";import"./Typography.839bb703.js";import"./Button.4567776a.js";import"./ButtonBase.380fb064.js";import"./emotion-react.browser.esm.e2223364.js";import"./ColumnType.744125d2.js";import"./UserCardList.acde4723.js";import"./UserCard.759836bb.js";import"./IconCopy.bde4919e.js";import"./SkeletonTable.0785797a.js";import"./times.2d68f6f5.js";import"./toInteger.7b500fdb.js";import"./isSymbol.f04221fe.js";import"./Skeleton.c4f2e78a.js";import"./IconSvg.d54f7f38.js";import"./Tooltip.8a367305.js";import"./createSvgIcon.5d1f0251.js";import"./InfoOutlined.b6a78282.js";import"./ToastMessage.715b02dd.js";import"./FullWidthAlert.dfc3d6c6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f0e21060.js";import"./Overlay.c82b84a8.js";import"./contains.9e492dba.js";import"./usePopperMarginModifiers.c2cb8c2e.js";import"./useWaitForDOMRef.a74f5535.js";import"./without.831c836d.js";import"./_cacheHas.dd9da3b5.js";import"./use-deep-compare-effect.esm.50e2f1c1.js";const it={parameters:{storySource:{source:`import React from 'react'
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

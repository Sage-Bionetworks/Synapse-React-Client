import{U as t}from"./UserCardListRotate.12586cc3.js";import{aw as r}from"./index.a7b4e4df.js";import{j as e}from"./jsx-runtime.f7cf66fc.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.d9ba2cad.js";import"./UserCard.289eef41.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.96e50061.js";import"./SkeletonTable.ff560500.js";import"./times.a9961130.js";import"./toInteger.2ba4f663.js";import"./isSymbol.c2dfe727.js";import"./isArray.a5837af6.js";import"./Button.8c8504e0.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.76391d30.js";import"./withStyles.ddbf8a64.js";import"./Tooltip.7bec90df.js";import"./createSvgIcon.fe8b3870.js";import"./SvgIcon.d61a6d98.js";import"./index.1e38edd3.js";import"./iframe.7a93df40.js";import"./useTheme.af842711.js";import"./Transition.9d380883.js";import"./makeStyles.c3ae2cc2.js";import"./IconSvg.09883cec.js";import"./InfoOutlined.a5d342c6.js";import"./ToastMessage.9c9a0082.js";import"./FullWidthAlert.73cdbacd.js";import"./Typography.dfe40719.js";import"./Alert.a83e08c9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.bff82890.js";import"./Overlay.6b8ad843.js";import"./useWaitForDOMRef.58e2d194.js";import"./usePopperMarginModifiers.206050ec.js";import"./without.f66365c3.js";import"./_cacheHas.3bd942cd.js";import"./use-deep-compare-effect.esm.2af231c9.js";const N={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const V=["Demo"];export{i as Demo,V as __namedExportsOrder,N as default};

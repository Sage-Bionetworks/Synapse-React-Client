import{U as t}from"./UserCardListRotate.a8e08d52.js";import{ax as r}from"./index.7cb9050b.js";import{j as e}from"./jsx-runtime.4cd7f6c3.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.7a2d22c9.js";import"./UserCard.e68af1d5.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.d103f0a0.js";import"./SkeletonTable.b62e268e.js";import"./times.d7ad11d2.js";import"./toInteger.d15c5de9.js";import"./isSymbol.678ebc7d.js";import"./isArray.cef144cc.js";import"./Button.cfb6901e.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.a445d31b.js";import"./withStyles.3f185fef.js";import"./Tooltip.6e492e82.js";import"./createSvgIcon.eca8b7b9.js";import"./SvgIcon.7b92dd2c.js";import"./utils.3d3cd8c3.js";import"./index.c5ec5593.js";import"./iframe.27dce855.js";import"./makeStyles.e394e1e5.js";import"./IconSvg.79902b8b.js";import"./InfoOutlined.51a57d77.js";import"./ToastMessage.7ffa621b.js";import"./FullWidthAlert.6976790a.js";import"./Typography.ad724512.js";import"./Alert.151390cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e78092cb.js";import"./Overlay.cc756cad.js";import"./useWaitForDOMRef.29c68d44.js";import"./usePopperMarginModifiers.bf256e8b.js";import"./without.fb12d218.js";import"./_cacheHas.c7472e8e.js";import"./use-deep-compare-effect.esm.385e4e00.js";const K={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const N=["Demo"];export{i as Demo,N as __namedExportsOrder,K as default};

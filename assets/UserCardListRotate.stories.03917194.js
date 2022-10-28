import{U as t}from"./UserCardListRotate.49e83d24.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.e32e0509.js";import"./sqlFunctions.a660c34a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c3d3eddf.js";import"./TypeUtils.a2c41307.js";import"./index.97694b3a.js";import"./index.5045cbed.js";import"./iframe.83901080.js";import"./Button.9a335f28.js";import"./index.57d09176.js";import"./withStyles.43181c03.js";import"./utils.93cc3c4b.js";import"./Alert.1890d96c.js";import"./createWithBsPrefix.eb076d55.js";import"./index.35ce73ec.js";import"./isArray.f12d1068.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.6a1c92b0.js";import"./ColumnType.744125d2.js";import"./UserCardList.02357afc.js";import"./UserCard.ece400b9.js";import"./IconCopy.aaebe1d6.js";import"./SkeletonTable.4d088d12.js";import"./times.14f43a6f.js";import"./toInteger.57b1f05f.js";import"./isSymbol.e91009b1.js";import"./Skeleton.4b3eac05.js";import"./Tooltip.e08987f2.js";import"./createSvgIcon.3a3703dd.js";import"./makeStyles.46d23ebd.js";import"./IconSvg.c4d27427.js";import"./InfoOutlined.f22ec2f2.js";import"./ToastMessage.80ffeafc.js";import"./FullWidthAlert.2f8dcb3c.js";import"./Typography.c79b8528.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.44a1c424.js";import"./Overlay.6daf49cd.js";import"./contains.72bfd5e5.js";import"./usePopperMarginModifiers.82fc73ef.js";import"./useWaitForDOMRef.7cce2362.js";import"./without.7e9a3297.js";import"./_cacheHas.5fe5dab6.js";import"./use-deep-compare-effect.esm.dd43b526.js";const $={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const tt=["Demo"];export{s as Demo,tt as __namedExportsOrder,$ as default};

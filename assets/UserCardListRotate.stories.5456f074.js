import{U as t}from"./UserCardListRotate.50e474ee.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.41b63a18.js";import"./sqlFunctions.be6fa141.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.425a36f4.js";import"./index.95357afa.js";import"./index.fb0baffa.js";import"./iframe.1b6f62a5.js";import"./Button.d66b1296.js";import"./index.57d09176.js";import"./withStyles.bf9f4c29.js";import"./utils.8566b4fb.js";import"./Alert.2d23c399.js";import"./createWithBsPrefix.4703bb5e.js";import"./index.35ce73ec.js";import"./isArray.9516ce6b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d8df91d8.js";import"./ColumnType.744125d2.js";import"./UserCardList.43b2352c.js";import"./UserCard.7b85d80c.js";import"./IconCopy.6ff102ac.js";import"./SkeletonTable.5fcf404b.js";import"./times.d1737d14.js";import"./toInteger.d13e0983.js";import"./isSymbol.fc7173a4.js";import"./Skeleton.2b632001.js";import"./Tooltip.50b065de.js";import"./createSvgIcon.3e6e5789.js";import"./makeStyles.3de8ae0d.js";import"./IconSvg.83d367d8.js";import"./InfoOutlined.62b2381c.js";import"./ToastMessage.3d8ba4da.js";import"./FullWidthAlert.5cb2b687.js";import"./Typography.dc699c3a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.7743d6ef.js";import"./Overlay.b83155ef.js";import"./contains.35f158bd.js";import"./usePopperMarginModifiers.3543b56f.js";import"./useWaitForDOMRef.054fdf82.js";import"./without.b74e3938.js";import"./_cacheHas.fa44402d.js";import"./use-deep-compare-effect.esm.89e0b2bf.js";const Z={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const $=["Demo"];export{s as Demo,$ as __namedExportsOrder,Z as default};

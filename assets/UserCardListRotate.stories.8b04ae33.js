import{U as t}from"./UserCardListRotate.4bb567d4.js";import{ax as r}from"./index.a3e4acf8.js";import{j as e}from"./jsx-runtime.1d2001c8.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.6bc225bd.js";import"./UserCard.4c7789bc.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.42575155.js";import"./SkeletonTable.b6dfba04.js";import"./times.665c5ee8.js";import"./toInteger.4e0bd265.js";import"./isSymbol.ce5fe5c9.js";import"./isArray.a059945b.js";import"./Button.850c0905.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.b5215bc5.js";import"./withStyles.706b11e4.js";import"./Tooltip.76084c23.js";import"./createSvgIcon.6133e741.js";import"./SvgIcon.3fc47b81.js";import"./utils.b5696502.js";import"./index.43d111f8.js";import"./iframe.11c071de.js";import"./makeStyles.c53704bf.js";import"./IconSvg.d9bd3780.js";import"./InfoOutlined.31363277.js";import"./ToastMessage.8ffb9391.js";import"./FullWidthAlert.6b98829c.js";import"./Typography.e119af63.js";import"./Alert.cbdcee9e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.93061bc8.js";import"./Overlay.1b6445a2.js";import"./useWaitForDOMRef.9ab82534.js";import"./usePopperMarginModifiers.e6ab3cb1.js";import"./without.58f717b2.js";import"./_cacheHas.d2172efb.js";import"./use-deep-compare-effect.esm.35b1b1d3.js";const K={parameters:{storySource:{source:`import React from 'react'
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

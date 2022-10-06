import{U as t}from"./UserCardListRotate.cbbce0b1.js";import{as as r}from"./index.22793847.js";import{j as e}from"./jsx-runtime.0547954a.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.09c42190.js";import"./UserCard.8cf176e1.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.a47d91ec.js";import"./SkeletonTable.bc06b926.js";import"./times.ccd7af32.js";import"./toInteger.0a662c7d.js";import"./isSymbol.56654682.js";import"./isArray.dc0d9748.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.faa197e5.js";import"./Skeleton.ef288fce.js";import"./withStyles.5f371c18.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.d59517ea.js";import"./createSvgIcon.13c982df.js";import"./SvgIcon.20c60b09.js";import"./slicedToArray.e72f11da.js";import"./index.9a22ba50.js";import"./iframe.bc1355ce.js";import"./useTheme.f4071482.js";import"./Transition.c74a9bc3.js";import"./makeStyles.68b76b6a.js";import"./IconSvg.b92ea12f.js";import"./InfoOutlined.5164ccbb.js";import"./ToastMessage.0f10ae0c.js";import"./FullWidthAlert.8329478a.js";import"./Typography.5de44d5b.js";import"./Alert.320f728d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6d625886.js";import"./Overlay.3bbd300f.js";import"./useWaitForDOMRef.f571d6d7.js";import"./usePopperMarginModifiers.692ae3ac.js";import"./without.f6119cfc.js";import"./_cacheHas.88e0e600.js";import"./use-deep-compare-effect.esm.4976a8bf.js";const Y={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const Z=["Demo"];export{i as Demo,Z as __namedExportsOrder,Y as default};

import{U as t}from"./UserCardListRotate.3f04faa5.js";import{ar as r}from"./index.b742691b.js";import{j as e}from"./jsx-runtime.e50ee014.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.83f186e8.js";import"./UserCard.2fd34122.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.e7e13389.js";import"./SkeletonTable.fbfdf495.js";import"./times.193d0ecb.js";import"./toInteger.5d2f4b0e.js";import"./isSymbol.5d0c998d.js";import"./isArray.bf4f000b.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.3658dda2.js";import"./Skeleton.09528c75.js";import"./withStyles.8f619333.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.87729932.js";import"./createSvgIcon.f8724b3b.js";import"./SvgIcon.c8899896.js";import"./slicedToArray.e72f11da.js";import"./index.f04aa5e6.js";import"./iframe.ed5db637.js";import"./useTheme.f39e60b9.js";import"./Transition.bad86374.js";import"./makeStyles.436c1230.js";import"./IconSvg.f9f187ed.js";import"./InfoOutlined.06cf4881.js";import"./ToastMessage.c7c8ad52.js";import"./FullWidthAlert.dc80d875.js";import"./Typography.710a5cec.js";import"./Alert.9942996b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b8a4404e.js";import"./Overlay.9ef918a3.js";import"./useWaitForDOMRef.19e54275.js";import"./usePopperMarginModifiers.cad35c33.js";import"./without.269ffb6f.js";import"./_cacheHas.82e3ba6e.js";import"./use-deep-compare-effect.esm.20647236.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

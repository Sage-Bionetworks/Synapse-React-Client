import{U as t}from"./UserCardListRotate.66f707af.js";import{as as r}from"./index.1df77ce9.js";import{j as e}from"./jsx-runtime.f8072c65.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.4b406a92.js";import"./UserCard.c3fe1aa7.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.69a201bb.js";import"./SkeletonTable.be12aa25.js";import"./times.1eb14036.js";import"./toInteger.7ac537e3.js";import"./isSymbol.28b01415.js";import"./isArray.903292fc.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.cb7914f2.js";import"./Skeleton.050d0fcb.js";import"./withStyles.630b025d.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.5e7211d1.js";import"./createSvgIcon.52201bd3.js";import"./SvgIcon.761f4d42.js";import"./slicedToArray.e72f11da.js";import"./index.1d2a784c.js";import"./iframe.aa82293a.js";import"./useTheme.bc44ba71.js";import"./Transition.5983a677.js";import"./makeStyles.9cff04c5.js";import"./IconSvg.a024e3c2.js";import"./InfoOutlined.ec29d19f.js";import"./ToastMessage.37d9d7b6.js";import"./FullWidthAlert.5a306575.js";import"./Typography.3dd8fe93.js";import"./Alert.53bb8599.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6d4b83b5.js";import"./Overlay.84bc18bd.js";import"./useWaitForDOMRef.c9a921b3.js";import"./usePopperMarginModifiers.d6f64b11.js";import"./without.10a59cc7.js";import"./_cacheHas.a5b7fc64.js";import"./use-deep-compare-effect.esm.7a42a356.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

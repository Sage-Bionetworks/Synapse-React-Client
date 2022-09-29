import{U as t}from"./UserCardListRotate.777aa501.js";import{am as r}from"./index.68dc45f9.js";import{j as e}from"./jsx-runtime.6c466647.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.3c8411ce.js";import"./UserCard.36c5101f.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.489a58ed.js";import"./SkeletonTable.a7c50e8f.js";import"./times.cd1f7524.js";import"./toInteger.58fbb23b.js";import"./isSymbol.e84dbf07.js";import"./isArray.8f8da701.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.6bac135e.js";import"./Skeleton.78629bcd.js";import"./withStyles.7bec7826.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.a8448a48.js";import"./createSvgIcon.aebcdc24.js";import"./SvgIcon.ccae0824.js";import"./slicedToArray.e72f11da.js";import"./index.836cff5f.js";import"./iframe.d58db294.js";import"./useTheme.94a4bd67.js";import"./Transition.fdaeb9d2.js";import"./makeStyles.0f5b4992.js";import"./IconSvg.d55eaa4b.js";import"./InfoOutlined.b03aa53e.js";import"./ToastMessage.f1ac94ca.js";import"./FullWidthAlert.6101322c.js";import"./Typography.88b87e8c.js";import"./Alert.6302caff.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b6a045ed.js";import"./Overlay.cbf5f9b5.js";import"./useWaitForDOMRef.d7c5dee1.js";import"./usePopperMarginModifiers.29aa4eae.js";import"./without.1e3142d0.js";import"./_cacheHas.5da960e3.js";import"./use-deep-compare-effect.esm.59a8a695.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

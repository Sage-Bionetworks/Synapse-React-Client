import{U as t}from"./UserCardListRotate.a84dea7a.js";import{aq as r}from"./index.c285f2ad.js";import{j as e}from"./jsx-runtime.94e3dcbc.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.34dd8ba6.js";import"./UserCard.48cdfe31.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.dc0169b8.js";import"./SkeletonTable.7da12e22.js";import"./times.37cc76dc.js";import"./toInteger.f3d0fd1c.js";import"./isSymbol.9ddd9e86.js";import"./isArray.74b811f1.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.ee922916.js";import"./Skeleton.01b7e31d.js";import"./withStyles.25512efa.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.7e80f23c.js";import"./createSvgIcon.aba3ff90.js";import"./SvgIcon.972646c7.js";import"./slicedToArray.e72f11da.js";import"./index.189336ba.js";import"./iframe.7112cc2f.js";import"./useTheme.90c94c01.js";import"./Transition.aafae1a0.js";import"./makeStyles.13257dd8.js";import"./IconSvg.6490189f.js";import"./InfoOutlined.c8be42fa.js";import"./ToastMessage.8eafdcee.js";import"./FullWidthAlert.50b3fdeb.js";import"./Typography.c058b4a5.js";import"./Alert.a8f3dea8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.5395311d.js";import"./Overlay.4edc376f.js";import"./useWaitForDOMRef.bc6c94c4.js";import"./usePopperMarginModifiers.e98e3e3e.js";import"./without.227ff1e6.js";import"./_cacheHas.cd26227f.js";import"./use-deep-compare-effect.esm.46a58aa4.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

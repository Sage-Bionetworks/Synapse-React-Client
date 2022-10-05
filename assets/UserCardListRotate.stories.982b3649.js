import{U as t}from"./UserCardListRotate.37e8e32d.js";import{ar as r}from"./index.5bc63636.js";import{j as e}from"./jsx-runtime.53ec3a99.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.f9998796.js";import"./UserCard.cd843c54.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.65395139.js";import"./SkeletonTable.32a35c51.js";import"./times.3460d620.js";import"./toInteger.82734360.js";import"./isSymbol.c005a6aa.js";import"./isArray.afa3346a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.aa21b764.js";import"./Skeleton.9def93da.js";import"./withStyles.2fbec1dd.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.6a46e0c0.js";import"./createSvgIcon.80ece60c.js";import"./SvgIcon.0bcbfb3f.js";import"./slicedToArray.e72f11da.js";import"./index.c935dff9.js";import"./iframe.707dd820.js";import"./useTheme.f82ec4e5.js";import"./Transition.feec5299.js";import"./makeStyles.0544ad0e.js";import"./IconSvg.21136110.js";import"./InfoOutlined.72aa66a9.js";import"./ToastMessage.d2af582b.js";import"./FullWidthAlert.a76adc9d.js";import"./Typography.d6d23e6c.js";import"./Alert.89d8effb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.84a1f40d.js";import"./Overlay.973a4260.js";import"./useWaitForDOMRef.40b36c07.js";import"./usePopperMarginModifiers.e458f391.js";import"./without.51d00043.js";import"./_cacheHas.5b560c8b.js";import"./use-deep-compare-effect.esm.76dab31b.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

import{U as t}from"./UserCardListRotate.67137719.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.25f1da80.js";import"./sqlFunctions.9792d962.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d169c11d.js";import"./index.69555c85.js";import"./index.09872124.js";import"./iframe.89c4ca26.js";import"./Button.03ce126b.js";import"./styled.61c2cdbd.js";import"./utils.653016b9.js";import"./TransitionGroupContext.d4abce3c.js";import"./useTheme.50dbca56.js";import"./Alert.c8ecdb26.js";import"./hook.865145d2.js";import"./createWithBsPrefix.2ba1d399.js";import"./divWithClassName.8bbfe55a.js";import"./index.35ce73ec.js";import"./Fade.5af2af2d.js";import"./isArray.63a07037.js";import"./getEndpoint.bb7ded34.js";import"./Link.7320b292.js";import"./Typography.787f3df0.js";import"./Button.71735648.js";import"./ButtonBase.e51b431c.js";import"./emotion-react.browser.esm.de1a23fd.js";import"./ColumnType.744125d2.js";import"./UserCardList.9bade6f4.js";import"./UserCard.e6c2a584.js";import"./IconCopy.64748781.js";import"./SkeletonTable.1d27d75d.js";import"./times.f808a242.js";import"./toInteger.374f3d90.js";import"./isSymbol.8bb90a01.js";import"./Skeleton.264ae24e.js";import"./IconSvg.562c1909.js";import"./Tooltip.dc683be6.js";import"./createSvgIcon.32db2a88.js";import"./InfoOutlined.d976b6d4.js";import"./ToastMessage.679431d9.js";import"./FullWidthAlert.ce239055.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b035a11c.js";import"./Overlay.f9384c09.js";import"./contains.b82313ef.js";import"./usePopperMarginModifiers.6c0d1965.js";import"./useWaitForDOMRef.e68dcf6e.js";import"./without.469323e6.js";import"./_cacheHas.94f6a723.js";import"./use-deep-compare-effect.esm.a1426cb2.js";const it={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),m=i.bind({});m.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const mt=["Demo"];export{m as Demo,mt as __namedExportsOrder,it as default};

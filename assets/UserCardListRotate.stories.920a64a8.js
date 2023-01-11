import{U as t}from"./UserCardListRotate.37fc8c6c.js";import{t as r}from"./SynapseConstants.71946a35.js";import{j as e}from"./jsx-runtime.8deabff4.js";import"./sqlFunctions.9f009227.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.2f81cd8b.js";import"./index.7e720d98.js";import"./index.57c4b3f6.js";import"./iframe.9a9f3456.js";import"./Button.7f145214.js";import"./styled.4ed13d54.js";import"./Tooltip.1a090672.js";import"./SvgIcon.68c0612f.js";import"./useTheme.4dbd8795.js";import"./TransitionGroupContext.f0e5bdf3.js";import"./FullWidthAlert.5c7c6876.js";import"./hook.1ef6fcec.js";import"./createWithBsPrefix.10b29307.js";import"./divWithClassName.17daa550.js";import"./index.35ce73ec.js";import"./Typography.d2c075af.js";import"./Fade.5eff05c6.js";import"./isArray.60ef1f80.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.c37effa3.js";import"./IconButton.88d7d90d.js";import"./ButtonBase.f183321e.js";import"./emotion-react.browser.esm.3c5e03a0.js";import"./Link.150a4582.js";import"./Button.eb6e2031.js";import"./ColumnType.744125d2.js";import"./UserCardList.984aaece.js";import"./UserCard.c70cf940.js";import"./IconCopy.fec0e03b.js";import"./SkeletonTable.d18d0ed3.js";import"./times.bce2a9cd.js";import"./toInteger.5c373204.js";import"./isSymbol.0aefb815.js";import"./Skeleton.75c9e7ec.js";import"./ToastMessage.0865ace5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d83e1a92.js";import"./Overlay.0adb623b.js";import"./contains.28185ff5.js";import"./usePopperMarginModifiers.008c5a4d.js";import"./useWaitForDOMRef.c2404935.js";import"./without.2bdc7411.js";import"./_cacheHas.3e10b9ea.js";import"./use-deep-compare-effect.esm.d674fd6b.js";const rt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const et=["Demo"];export{s as Demo,et as __namedExportsOrder,rt as default};

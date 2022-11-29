import{U as t}from"./UserCardListRotate.04231fb9.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.c28691f9.js";import"./sqlFunctions.66d0ccb5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.756f7d3e.js";import"./index.76b38c54.js";import"./index.e19c4baa.js";import"./iframe.180ebcad.js";import"./Button.01687609.js";import"./styled.0b15883e.js";import"./utils.147770f5.js";import"./TransitionGroupContext.4d4491d8.js";import"./useTheme.c2c5870a.js";import"./Alert.39b51be4.js";import"./hook.668b90b8.js";import"./createWithBsPrefix.e1e1b086.js";import"./divWithClassName.5d82b3d5.js";import"./index.35ce73ec.js";import"./Fade.467f608c.js";import"./isArray.00855dd8.js";import"./getEndpoint.bb7ded34.js";import"./Link.7916e978.js";import"./Typography.979062bc.js";import"./Button.5474ded1.js";import"./ButtonBase.62e27216.js";import"./emotion-react.browser.esm.07119d08.js";import"./ColumnType.744125d2.js";import"./UserCardList.ac330e4a.js";import"./UserCard.4fc0c953.js";import"./IconCopy.13ec7c8a.js";import"./SkeletonTable.a4cdc768.js";import"./times.56956096.js";import"./toInteger.5e16c8d9.js";import"./isSymbol.3a617ca5.js";import"./Skeleton.5e7b1855.js";import"./IconSvg.7c5a9ccb.js";import"./Tooltip.d4e3b915.js";import"./createSvgIcon.40781e98.js";import"./InfoOutlined.276d33db.js";import"./ToastMessage.15875dd0.js";import"./FullWidthAlert.44d2e621.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.dd846a92.js";import"./Overlay.26aae53e.js";import"./contains.a1192dc5.js";import"./usePopperMarginModifiers.39120970.js";import"./useWaitForDOMRef.4971e4f8.js";import"./without.d15374c1.js";import"./_cacheHas.702c76d8.js";import"./use-deep-compare-effect.esm.3ebc19e4.js";const it={parameters:{storySource:{source:`import React from 'react'
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

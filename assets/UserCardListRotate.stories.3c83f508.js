import{U as t}from"./UserCardListRotate.4e596f1f.js";import{M as r}from"./index.2f40a0ba.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./sqlFunctions.b49ac766.js";import"./ColumnType.744125d2.js";import"./assert.99171257.js";import"./iframe.b024d446.js";import"./index.8cde812d.js";import"./UserCardList.1e106259.js";import"./UserCard.3ff7fb08.js";import"./getEndpoint.0de7fccf.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.03043743.js";import"./times.5ffdf9d1.js";import"./toInteger.1984412c.js";import"./toNumber.71be2bd9.js";import"./isObject.f3be1931.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./index.06f4a415.js";import"./Skeleton.8dd0668e.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./SvgIcon.31249d58.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./IconSvg.3d20df6f.js";import"./InfoOutlined.22a371fd.js";import"./ToastMessage.405b028e.js";import"./FullWidthAlert.63a1db3f.js";import"./Typography.53c43c81.js";import"./debounce.bb67b392.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.50daefd4.js";import"./toString.f9b9a371.js";import"./Overlay.ac713ce0.js";import"./useWaitForDOMRef.0721218f.js";import"./usePopperMarginModifiers.7a874fe8.js";import"./without.75940ea7.js";import"./_cacheHas.a6398a8f.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";var Z={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}};const i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const $=["Demo"];export{s as Demo,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=UserCardListRotate.stories.3c83f508.js.map

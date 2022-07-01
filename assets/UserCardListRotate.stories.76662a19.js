import{U as t}from"./UserCardListRotate.1448dcb1.js";import{M as r}from"./index.cdf98c81.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./sqlFunctions.9bad0aa7.js";import"./RegularExpressions.b87376bf.js";import"./ColumnType.744125d2.js";import"./assert.45ccb9fa.js";import"./iframe.dedbd728.js";import"./index.8cde812d.js";import"./UserCardList.a5516005.js";import"./UserCard.07b3e3b1.js";import"./useUserBundle.1e187889.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./withStyles.4f64abe1.js";import"./toConsumableArray.5f669646.js";import"./Alert.ad748791.js";import"./index.f252d424.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./Button.77571428.js";import"./index.06f4a415.js";import"./createWithBsPrefix.f7715523.js";import"./_Uint8Array.692793fe.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./getEndpoint.0de7fccf.js";import"./index.es.82d55a6a.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.874b8571.js";import"./times.0a9ef28a.js";import"./toInteger.9c26e41e.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./Skeleton.bf1489f0.js";import"./IconSvg.d5022c82.js";import"./SvgIcon.1f1b3522.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./makeStyles.5f6bad01.js";import"./createSvgIcon.53013205.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";import"./ToastMessage.574c0fe0.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./debounce.6a99f8f3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4eca3697.js";import"./Overlay.5ce67f19.js";import"./useWaitForDOMRef.088a2ede.js";import"./usePopperMarginModifiers.09a60569.js";import"./without.3d8723b5.js";import"./_cacheHas.e524ea96.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./FormLabel.a635baa2.js";var nt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}};const i=o=>e(t,{...o}),m=i.bind({});m.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const at=["Demo"];export{m as Demo,at as __namedExportsOrder,nt as default};
//# sourceMappingURL=UserCardListRotate.stories.76662a19.js.map

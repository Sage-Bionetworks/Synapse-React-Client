import{a}from"./UserCard.8fb31aa4.js";import{aH as s,I as i,M as m,aG as d,c3 as p}from"./index.35547ae7.js";import{j as l}from"./jsx-runtime.2e925369.js";import"./getEndpoint.0de7fccf.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.d5d249b4.js";import"./times.2300e3f4.js";import"./toInteger.39b702e7.js";import"./ToastMessage.093903bc.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";import"./index.06f4a415.js";import"./Button.c582ea4c.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./makeStyles.38be5a7f.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./Skeleton.3d9d9757.js";import"./IconSvg.05ece234.js";import"./InfoOutlined.a7449f61.js";import"./Overlay.7f5ddc31.js";import"./useWaitForDOMRef.679b0e64.js";import"./usePopperMarginModifiers.fc55270a.js";import"./assert.7360daab.js";import"./iframe.97ab22c6.js";import"./index.8cde812d.js";var Q={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { UserCard } from './UserCard'
import {
  AVATAR,
  LARGE_USER_CARD,
  MEDIUM_USER_CARD,
  SMALL_USER_CARD,
} from '../utils/SynapseConstants'
import { useGetCurrentUserProfile } from '../utils/hooks/SynapseAPI/user/useUserBundle'

export default {
  title: 'UI/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>

const Template: ComponentStory<typeof UserCard> = args => {
  const { data: currentUserProfile } = useGetCurrentUserProfile()
  return (
    <UserCard
      {...args}
      ownerId={args.ownerId ?? currentUserProfile?.ownerId ?? '273960'}
    />
  )
}

export const Avatar = Template.bind({})
Avatar.args = {
  size: AVATAR,
  avatarSize: 'SMALL',
}

export const SmallUserCard = Template.bind({})
SmallUserCard.args = {
  size: SMALL_USER_CARD,
}

export const MediumUserCard = Template.bind({})
MediumUserCard.args = {
  size: MEDIUM_USER_CARD,
}

export const LargeUserCard = Template.bind({})
LargeUserCard.args = {
  size: LARGE_USER_CARD,
}
`,locationsMap:{avatar:{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"small-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"medium-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"large-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}}}}},title:"UI/UserCard",component:a};const r=o=>{var t,n;const{data:e}=p();return l(a,{...o,ownerId:(n=(t=o.ownerId)!=null?t:e==null?void 0:e.ownerId)!=null?n:"273960"})},c=r.bind({});c.args={size:s,avatarSize:"SMALL"};const U=r.bind({});U.args={size:i};const C=r.bind({});C.args={size:m};const A=r.bind({});A.args={size:d};const W=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{c as Avatar,A as LargeUserCard,C as MediumUserCard,U as SmallUserCard,W as __namedExportsOrder,Q as default};
//# sourceMappingURL=UserCard.stories.d1aaa833.js.map

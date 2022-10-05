import{b as a}from"./UserCard.549fd8e6.js";import{bm as s,o as i,ar as m,bl as p,a4 as d}from"./index.aa213b73.js";import{j as l}from"./jsx-runtime.b98719ac.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.da365123.js";import"./SkeletonTable.385954e0.js";import"./times.b847c83d.js";import"./toInteger.c2538338.js";import"./isSymbol.a85127bf.js";import"./isArray.3c258aa7.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.ed04e3a1.js";import"./Skeleton.f404fa8e.js";import"./withStyles.79d10ad6.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.5964f419.js";import"./createSvgIcon.63cd09dc.js";import"./SvgIcon.4537d0f4.js";import"./slicedToArray.e72f11da.js";import"./index.f0bb0570.js";import"./iframe.1e793943.js";import"./useTheme.cca4eae4.js";import"./Transition.ac6e0624.js";import"./makeStyles.9e8f686a.js";import"./IconSvg.3b0efcae.js";import"./InfoOutlined.d5bf38f7.js";import"./ToastMessage.608252d2.js";import"./FullWidthAlert.974c42f3.js";import"./Typography.7f563934.js";import"./Alert.cf52bce4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ff2face8.js";import"./Overlay.c6e37c77.js";import"./useWaitForDOMRef.c589d2c1.js";import"./usePopperMarginModifiers.6073b2bb.js";const rr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"small-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"medium-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"large-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}}}}},title:"UI/UserCard",component:a},r=o=>{var t,n;const{data:e}=d();return l(a,{...o,ownerId:(n=(t=o.ownerId)!=null?t:e==null?void 0:e.ownerId)!=null?n:"273960"})},c=r.bind({});c.args={size:s,avatarSize:"SMALL"};const U=r.bind({});U.args={size:i};const C=r.bind({});C.args={size:m};const A=r.bind({});A.args={size:p};const er=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{c as Avatar,A as LargeUserCard,C as MediumUserCard,U as SmallUserCard,er as __namedExportsOrder,rr as default};

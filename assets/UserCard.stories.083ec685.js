import{U as a}from"./UserCard.19c84b60.js";import{bv as s,v as i,ax as m,bu as d,aa as p}from"./index.8be8b52c.js";import{j as l}from"./jsx-runtime.bdebd148.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.115b585f.js";import"./SkeletonTable.c9ae53bc.js";import"./times.e0d233ea.js";import"./toInteger.22de24ba.js";import"./isSymbol.a301e13d.js";import"./isArray.b696739b.js";import"./Button.2b7fb582.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.8bc2d5f2.js";import"./withStyles.d0c35d1c.js";import"./Tooltip.3d6e7019.js";import"./createSvgIcon.27bceae9.js";import"./SvgIcon.2b88c9a1.js";import"./utils.d8861539.js";import"./index.131112ec.js";import"./iframe.92685df1.js";import"./makeStyles.93952b3f.js";import"./IconSvg.a57df8e4.js";import"./InfoOutlined.ca5de4f0.js";import"./ToastMessage.9511113a.js";import"./FullWidthAlert.25897ee9.js";import"./Typography.d5646d3f.js";import"./Alert.2a491573.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fdacb119.js";import"./Overlay.73c56702.js";import"./useWaitForDOMRef.dab4e6d9.js";import"./usePopperMarginModifiers.0915379d.js";const X={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"small-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"medium-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"large-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}}}}},title:"UI/UserCard",component:a},r=o=>{var t,n;const{data:e}=p();return l(a,{...o,ownerId:(n=(t=o.ownerId)!=null?t:e==null?void 0:e.ownerId)!=null?n:"273960"})},c=r.bind({});c.args={size:s,avatarSize:"SMALL"};const U=r.bind({});U.args={size:i};const C=r.bind({});C.args={size:m};const A=r.bind({});A.args={size:d};const Y=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{c as Avatar,A as LargeUserCard,C as MediumUserCard,U as SmallUserCard,Y as __namedExportsOrder,X as default};

import{U as a}from"./UserCard.62605ce0.js";import{bs as s,v as i,ax as m,br as d,aa as p}from"./index.f0d19726.js";import{j as l}from"./jsx-runtime.4ed473f6.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.536ed2bb.js";import"./SkeletonTable.09b1c379.js";import"./times.c42e571b.js";import"./toInteger.7b9ab0b9.js";import"./isSymbol.24e18969.js";import"./isArray.1c017e06.js";import"./Button.c5f20cc4.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.1c1dc171.js";import"./withStyles.78cfa842.js";import"./Tooltip.eb6aee31.js";import"./createSvgIcon.691ab6d6.js";import"./SvgIcon.d67caae4.js";import"./utils.75253d0f.js";import"./index.02b86482.js";import"./iframe.b5feb82b.js";import"./makeStyles.dc0e46d4.js";import"./IconSvg.8a81e89b.js";import"./InfoOutlined.ab4f4d01.js";import"./ToastMessage.576eb4d8.js";import"./FullWidthAlert.2db361a7.js";import"./Typography.742205fe.js";import"./Alert.a88bb07f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.021a8dc5.js";import"./Overlay.eafb065e.js";import"./useWaitForDOMRef.8efcf25e.js";import"./usePopperMarginModifiers.a69073a2.js";const X={parameters:{storySource:{source:`import React from 'react'
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

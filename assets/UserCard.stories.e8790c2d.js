import{U as a}from"./UserCard.32f3674b.js";import{bv as s,v as i,ax as m,bu as d,aa as p}from"./index.bff2d9c7.js";import{j as l}from"./jsx-runtime.6fc4771b.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.25a64ecc.js";import"./SkeletonTable.611921d5.js";import"./times.c3b78a33.js";import"./toInteger.d1e47656.js";import"./isSymbol.6068a581.js";import"./isArray.3cde12a0.js";import"./Button.297619c8.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.2663a88c.js";import"./withStyles.f9df3835.js";import"./Tooltip.45d64ebd.js";import"./createSvgIcon.3ee235fb.js";import"./SvgIcon.e84ee4e0.js";import"./utils.6fc55841.js";import"./index.4e1486f8.js";import"./iframe.14db13df.js";import"./makeStyles.f8fe9b08.js";import"./IconSvg.313db458.js";import"./InfoOutlined.67f7ed8e.js";import"./ToastMessage.c1cdbab7.js";import"./FullWidthAlert.7459bb3c.js";import"./Typography.1c5796c6.js";import"./Alert.bb2e2328.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.aecb96d3.js";import"./Overlay.567d8932.js";import"./useWaitForDOMRef.7b6a21be.js";import"./usePopperMarginModifiers.16e66f40.js";const X={parameters:{storySource:{source:`import React from 'react'
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

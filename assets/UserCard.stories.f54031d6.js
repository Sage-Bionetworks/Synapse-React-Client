import{U as a}from"./UserCard.8b26eff3.js";import{bv as s,v as i,ax as m,bu as d,aa as p}from"./index.a2edd6ac.js";import{j as l}from"./jsx-runtime.8900a285.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.8a561b04.js";import"./SkeletonTable.4379ada8.js";import"./times.49ac87ad.js";import"./toInteger.9a0acd55.js";import"./isSymbol.74032678.js";import"./isArray.4e3f2043.js";import"./Button.e50f7fc9.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.a2940302.js";import"./withStyles.1744e3f1.js";import"./Tooltip.7bdb955a.js";import"./createSvgIcon.11696c8f.js";import"./SvgIcon.4e934e01.js";import"./utils.d7ed0c75.js";import"./index.912828a9.js";import"./iframe.c24069c1.js";import"./makeStyles.f81fc0de.js";import"./IconSvg.4d0133e6.js";import"./InfoOutlined.19bd48b4.js";import"./ToastMessage.2fd043cd.js";import"./FullWidthAlert.aad3bca8.js";import"./Typography.f8e8965b.js";import"./Alert.3046b0d1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.711b61c1.js";import"./Overlay.b5c4eb49.js";import"./useWaitForDOMRef.24f15ffd.js";import"./usePopperMarginModifiers.71bbcee2.js";const X={parameters:{storySource:{source:`import React from 'react'
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

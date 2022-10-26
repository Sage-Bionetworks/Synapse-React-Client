import{U as a}from"./UserCard.07bb7dc1.js";import{bv as s,v as i,ax as m,bu as d,aa as p}from"./index.7b571c3f.js";import{j as l}from"./jsx-runtime.36c99582.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.59a8cb20.js";import"./SkeletonTable.f0574313.js";import"./times.869ca9ec.js";import"./toInteger.32e560ec.js";import"./isSymbol.aedffc3c.js";import"./isArray.919b23ad.js";import"./Button.4aa3a811.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.8b8b9138.js";import"./withStyles.0fa6dc3f.js";import"./Tooltip.687fac3a.js";import"./createSvgIcon.68552f98.js";import"./SvgIcon.afc4513f.js";import"./utils.0ebf16b5.js";import"./index.7dc20356.js";import"./iframe.67c9a843.js";import"./makeStyles.590b227a.js";import"./IconSvg.18fba2a3.js";import"./InfoOutlined.3047c16b.js";import"./ToastMessage.ac6c5fb4.js";import"./FullWidthAlert.cabbd8c8.js";import"./Typography.fbe70ffe.js";import"./Alert.e200e4c1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4c721b80.js";import"./Overlay.4fd8dcb1.js";import"./useWaitForDOMRef.8b5dbd8c.js";import"./usePopperMarginModifiers.fffe465a.js";const X={parameters:{storySource:{source:`import React from 'react'
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

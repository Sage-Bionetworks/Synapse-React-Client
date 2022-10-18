import{U as a}from"./UserCard.ea6608ec.js";import{bt as s,v as i,ax as m,bs as d,aa as p}from"./index.845be1a0.js";import{j as l}from"./jsx-runtime.a4497586.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.6d9a9cc0.js";import"./SkeletonTable.5f0641c1.js";import"./times.53464203.js";import"./toInteger.0f367a79.js";import"./isSymbol.7191624c.js";import"./isArray.c41320ad.js";import"./Button.7ac62e85.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.9af51d39.js";import"./withStyles.e58effce.js";import"./Tooltip.a6d04027.js";import"./createSvgIcon.e5aecfe8.js";import"./SvgIcon.22d8eb07.js";import"./utils.815e1282.js";import"./index.917fd15d.js";import"./iframe.ee324841.js";import"./makeStyles.589ac29c.js";import"./IconSvg.840b4acb.js";import"./InfoOutlined.5d54a47c.js";import"./ToastMessage.29ea9537.js";import"./FullWidthAlert.6e6e96b4.js";import"./Typography.15373abf.js";import"./Alert.ea5d26f8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d008468a.js";import"./Overlay.7abe92df.js";import"./useWaitForDOMRef.e71a20e5.js";import"./usePopperMarginModifiers.8523f7d7.js";const X={parameters:{storySource:{source:`import React from 'react'
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

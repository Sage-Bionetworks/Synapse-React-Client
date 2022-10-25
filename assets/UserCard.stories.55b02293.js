import{U as a}from"./UserCard.49fb0f82.js";import{bt as s,v as i,ax as m,bs as d,aa as p}from"./index.a732538f.js";import{j as l}from"./jsx-runtime.77363692.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.6cf649ca.js";import"./SkeletonTable.56e7de4d.js";import"./times.6412c2aa.js";import"./toInteger.f0a03622.js";import"./isSymbol.e0bcd831.js";import"./isArray.c7b11016.js";import"./Button.a1ee4a46.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.5e1e1a25.js";import"./withStyles.42967b9b.js";import"./Tooltip.be22d41b.js";import"./createSvgIcon.5dedd617.js";import"./SvgIcon.06dbb4d5.js";import"./utils.1575e991.js";import"./index.f99e416a.js";import"./iframe.3e104d71.js";import"./makeStyles.5320a651.js";import"./IconSvg.38b3ef2f.js";import"./InfoOutlined.f24d250d.js";import"./ToastMessage.b3f610fb.js";import"./FullWidthAlert.23cfe207.js";import"./Typography.ce6b431d.js";import"./Alert.23dfc2a1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0aa98db3.js";import"./Overlay.7aec48c8.js";import"./useWaitForDOMRef.d6e52f67.js";import"./usePopperMarginModifiers.8b85cd62.js";const X={parameters:{storySource:{source:`import React from 'react'
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

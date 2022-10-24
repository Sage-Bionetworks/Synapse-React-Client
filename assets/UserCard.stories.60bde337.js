import{U as a}from"./UserCard.e68af1d5.js";import{bt as s,v as i,ax as m,bs as d,aa as p}from"./index.7cb9050b.js";import{j as l}from"./jsx-runtime.4cd7f6c3.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.d103f0a0.js";import"./SkeletonTable.b62e268e.js";import"./times.d7ad11d2.js";import"./toInteger.d15c5de9.js";import"./isSymbol.678ebc7d.js";import"./isArray.cef144cc.js";import"./Button.cfb6901e.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.a445d31b.js";import"./withStyles.3f185fef.js";import"./Tooltip.6e492e82.js";import"./createSvgIcon.eca8b7b9.js";import"./SvgIcon.7b92dd2c.js";import"./utils.3d3cd8c3.js";import"./index.c5ec5593.js";import"./iframe.27dce855.js";import"./makeStyles.e394e1e5.js";import"./IconSvg.79902b8b.js";import"./InfoOutlined.51a57d77.js";import"./ToastMessage.7ffa621b.js";import"./FullWidthAlert.6976790a.js";import"./Typography.ad724512.js";import"./Alert.151390cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e78092cb.js";import"./Overlay.cc756cad.js";import"./useWaitForDOMRef.29c68d44.js";import"./usePopperMarginModifiers.bf256e8b.js";const X={parameters:{storySource:{source:`import React from 'react'
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

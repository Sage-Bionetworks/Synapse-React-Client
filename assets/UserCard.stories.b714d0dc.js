import{U as a}from"./UserCard.6fcd03bc.js";import{bs as s,v as i,ax as m,br as d,aa as p}from"./index.cdf5fd1c.js";import{j as l}from"./jsx-runtime.7bb0e56b.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.00d0f817.js";import"./SkeletonTable.00c036ab.js";import"./times.ad0f164d.js";import"./toInteger.02e5834f.js";import"./isSymbol.f94b6455.js";import"./isArray.40a0d4da.js";import"./Button.f83d0e63.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.7484c3ca.js";import"./withStyles.cfb33818.js";import"./Tooltip.463ecf05.js";import"./createSvgIcon.da2780da.js";import"./SvgIcon.fff48821.js";import"./utils.82646225.js";import"./index.a95f094b.js";import"./iframe.dbb57267.js";import"./makeStyles.d82b1154.js";import"./IconSvg.7d7fb131.js";import"./InfoOutlined.4f1ffce6.js";import"./ToastMessage.96fdad3b.js";import"./FullWidthAlert.e8b3b992.js";import"./Typography.3da982eb.js";import"./Alert.fd35fd52.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.a068bfca.js";import"./Overlay.2de3bd36.js";import"./useWaitForDOMRef.17f7f910.js";import"./usePopperMarginModifiers.29212990.js";const X={parameters:{storySource:{source:`import React from 'react'
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

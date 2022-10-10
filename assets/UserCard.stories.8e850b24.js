import{b as a}from"./UserCard.bfed225a.js";import{bn as s,o as i,as as m,bm as p,a5 as d}from"./index.5ba93209.js";import{j as l}from"./jsx-runtime.1225fe79.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.86985968.js";import"./SkeletonTable.fa38a229.js";import"./times.0d5d25c2.js";import"./toInteger.b9b2999c.js";import"./isSymbol.aedbfa18.js";import"./isArray.12f7965d.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.63b1a959.js";import"./Skeleton.ad3e32c6.js";import"./withStyles.65e61172.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.ef3cac5b.js";import"./createSvgIcon.e824e175.js";import"./SvgIcon.e9f5a006.js";import"./slicedToArray.e72f11da.js";import"./index.ecba92b3.js";import"./iframe.0fc0719c.js";import"./useTheme.ec45c4f6.js";import"./Transition.e362bf9f.js";import"./makeStyles.3ea686be.js";import"./IconSvg.194d4170.js";import"./InfoOutlined.a9437cb5.js";import"./ToastMessage.55c99787.js";import"./FullWidthAlert.697d5521.js";import"./Typography.f29a9c1b.js";import"./Alert.ffb572e5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e4d116e8.js";import"./Overlay.4005d66e.js";import"./useWaitForDOMRef.f0f2f2e1.js";import"./usePopperMarginModifiers.0a21972a.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

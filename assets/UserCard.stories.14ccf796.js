import{b as a}from"./UserCard.42f90b17.js";import{bl as s,o as i,aq as m,bk as p,a3 as d}from"./index.a37d8dd7.js";import{j as l}from"./jsx-runtime.05444945.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.1dead822.js";import"./SkeletonTable.62b12d1a.js";import"./times.948706c3.js";import"./toInteger.1bd4a41d.js";import"./isSymbol.bfa8ae0b.js";import"./isArray.fbf85b3b.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.0b1296fc.js";import"./Skeleton.7e3a4321.js";import"./withStyles.2a0b3149.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.e02d1bf4.js";import"./createSvgIcon.49bfc951.js";import"./SvgIcon.44b5863d.js";import"./slicedToArray.e72f11da.js";import"./index.849f5f8d.js";import"./iframe.ff4ba921.js";import"./useTheme.48f15230.js";import"./Transition.4ed8243e.js";import"./makeStyles.29b4f0d4.js";import"./IconSvg.abab09ee.js";import"./InfoOutlined.f00577f5.js";import"./ToastMessage.1a804d30.js";import"./FullWidthAlert.27fd0db2.js";import"./Typography.9965ffbe.js";import"./Alert.1016cb8e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.24a4cbf4.js";import"./Overlay.42a8a4d5.js";import"./useWaitForDOMRef.c50253c8.js";import"./usePopperMarginModifiers.19dcb48e.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

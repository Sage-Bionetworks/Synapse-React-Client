import{b as a}from"./UserCard.95d185a6.js";import{bl as s,o as i,aq as m,bk as p,a3 as d}from"./index.8b6b728c.js";import{j as l}from"./jsx-runtime.697357f5.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.fecaa4ad.js";import"./SkeletonTable.be714a7f.js";import"./times.f176b5a7.js";import"./toInteger.56f52414.js";import"./isSymbol.ff12d775.js";import"./isArray.c87d30d5.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.742355f2.js";import"./Skeleton.14ea1888.js";import"./withStyles.14454601.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.1a172c13.js";import"./createSvgIcon.cf9e16cb.js";import"./SvgIcon.3010e2d4.js";import"./slicedToArray.e72f11da.js";import"./index.8f0405d3.js";import"./iframe.1d19b668.js";import"./useTheme.44d9e479.js";import"./Transition.375dbede.js";import"./makeStyles.5e65f24d.js";import"./IconSvg.77766464.js";import"./InfoOutlined.35769386.js";import"./ToastMessage.fbccec25.js";import"./FullWidthAlert.429d6e5f.js";import"./Typography.d498897e.js";import"./Alert.bd767cc3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.73448b1f.js";import"./Overlay.0e18d899.js";import"./useWaitForDOMRef.828b31fe.js";import"./usePopperMarginModifiers.86bb8f57.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

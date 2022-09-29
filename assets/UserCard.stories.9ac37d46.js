import{b as a}from"./UserCard.36c5101f.js";import{bi as s,n as i,am as m,bh as p,_ as d}from"./index.68dc45f9.js";import{j as l}from"./jsx-runtime.6c466647.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.489a58ed.js";import"./SkeletonTable.a7c50e8f.js";import"./times.cd1f7524.js";import"./toInteger.58fbb23b.js";import"./isSymbol.e84dbf07.js";import"./isArray.8f8da701.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.6bac135e.js";import"./Skeleton.78629bcd.js";import"./withStyles.7bec7826.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.a8448a48.js";import"./createSvgIcon.aebcdc24.js";import"./SvgIcon.ccae0824.js";import"./slicedToArray.e72f11da.js";import"./index.836cff5f.js";import"./iframe.d58db294.js";import"./useTheme.94a4bd67.js";import"./Transition.fdaeb9d2.js";import"./makeStyles.0f5b4992.js";import"./IconSvg.d55eaa4b.js";import"./InfoOutlined.b03aa53e.js";import"./ToastMessage.f1ac94ca.js";import"./FullWidthAlert.6101322c.js";import"./Typography.88b87e8c.js";import"./Alert.6302caff.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b6a045ed.js";import"./Overlay.cbf5f9b5.js";import"./useWaitForDOMRef.d7c5dee1.js";import"./usePopperMarginModifiers.29aa4eae.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

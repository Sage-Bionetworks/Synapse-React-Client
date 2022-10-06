import{b as a}from"./UserCard.57928c55.js";import{bn as s,o as i,as as m,bm as p,a5 as d}from"./index.7be09227.js";import{j as l}from"./jsx-runtime.deeea9fb.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.bfd853e2.js";import"./SkeletonTable.ea2a6145.js";import"./times.5ef5fea7.js";import"./toInteger.4180d2d6.js";import"./isSymbol.8f6c3bd1.js";import"./isArray.19812eb5.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.467325a1.js";import"./Skeleton.e0164e1b.js";import"./withStyles.f2d2f220.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.ae5e0614.js";import"./createSvgIcon.42b31dcf.js";import"./SvgIcon.72adc85a.js";import"./slicedToArray.e72f11da.js";import"./index.f3b69ce7.js";import"./iframe.96756ded.js";import"./useTheme.966b26ad.js";import"./Transition.9b5aa1a6.js";import"./makeStyles.a83d6931.js";import"./IconSvg.2cea675a.js";import"./InfoOutlined.887e97b0.js";import"./ToastMessage.a987dfc7.js";import"./FullWidthAlert.ab2f1882.js";import"./Typography.b3d032a4.js";import"./Alert.aa68dfe4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b5368ced.js";import"./Overlay.10ea0fdc.js";import"./useWaitForDOMRef.df84dcc7.js";import"./usePopperMarginModifiers.77a92501.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

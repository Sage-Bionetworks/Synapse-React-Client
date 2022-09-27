import{b as a}from"./UserCard.06fc45b4.js";import{bi as s,n as i,am as m,bh as p,_ as d}from"./index.a6d709ad.js";import{j as l}from"./jsx-runtime.8cf0c657.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.27efae90.js";import"./SkeletonTable.42e3c3ac.js";import"./times.8daad405.js";import"./toInteger.b1cd1d84.js";import"./isSymbol.57088814.js";import"./isArray.62d496dc.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.89087c87.js";import"./Skeleton.af6ba2d8.js";import"./withStyles.f22e9c75.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.8bb6ec51.js";import"./createSvgIcon.3db62023.js";import"./SvgIcon.af962ab3.js";import"./slicedToArray.e72f11da.js";import"./index.0d47cfe5.js";import"./iframe.6f47dcc9.js";import"./useTheme.daa899de.js";import"./Transition.2fb6e5a0.js";import"./makeStyles.14efd907.js";import"./IconSvg.894064e3.js";import"./InfoOutlined.7ef1e7fd.js";import"./ToastMessage.d368c817.js";import"./FullWidthAlert.c513e3cd.js";import"./Typography.0dca8b10.js";import"./Alert.70f23d9f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ba83e708.js";import"./Overlay.58c30ef0.js";import"./useWaitForDOMRef.501162ab.js";import"./usePopperMarginModifiers.1ab8820d.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

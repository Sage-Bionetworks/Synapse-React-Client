import{U as a}from"./UserCard.11db0e1e.js";import{bt as s,v as i,ax as m,bs as d,aa as p}from"./index.5eb45ec5.js";import{j as l}from"./jsx-runtime.66426239.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.e9990250.js";import"./SkeletonTable.0efda436.js";import"./times.0a791da1.js";import"./toInteger.ba340474.js";import"./isSymbol.e6b0fab2.js";import"./isArray.563d20f4.js";import"./Button.0925c41b.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.b36923c9.js";import"./withStyles.c0f84b5f.js";import"./Tooltip.20b2ac09.js";import"./createSvgIcon.11e8f9d3.js";import"./SvgIcon.bec2abf5.js";import"./utils.dd2a9ff9.js";import"./index.06c514da.js";import"./iframe.7709cd8b.js";import"./makeStyles.c7a35cbe.js";import"./IconSvg.43ff89f7.js";import"./InfoOutlined.009cccae.js";import"./ToastMessage.0eedc8b3.js";import"./FullWidthAlert.28f85f7a.js";import"./Typography.23a20d7c.js";import"./Alert.6f0c6d33.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.2b0d7b31.js";import"./Overlay.99b543ad.js";import"./useWaitForDOMRef.3996ecc7.js";import"./usePopperMarginModifiers.ba99acc1.js";const X={parameters:{storySource:{source:`import React from 'react'
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

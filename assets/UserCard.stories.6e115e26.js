import{b as a}from"./UserCard.2fd34122.js";import{bm as s,o as i,ar as m,bl as p,a4 as d}from"./index.b742691b.js";import{j as l}from"./jsx-runtime.e50ee014.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.e7e13389.js";import"./SkeletonTable.fbfdf495.js";import"./times.193d0ecb.js";import"./toInteger.5d2f4b0e.js";import"./isSymbol.5d0c998d.js";import"./isArray.bf4f000b.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.3658dda2.js";import"./Skeleton.09528c75.js";import"./withStyles.8f619333.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.87729932.js";import"./createSvgIcon.f8724b3b.js";import"./SvgIcon.c8899896.js";import"./slicedToArray.e72f11da.js";import"./index.f04aa5e6.js";import"./iframe.ed5db637.js";import"./useTheme.f39e60b9.js";import"./Transition.bad86374.js";import"./makeStyles.436c1230.js";import"./IconSvg.f9f187ed.js";import"./InfoOutlined.06cf4881.js";import"./ToastMessage.c7c8ad52.js";import"./FullWidthAlert.dc80d875.js";import"./Typography.710a5cec.js";import"./Alert.9942996b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b8a4404e.js";import"./Overlay.9ef918a3.js";import"./useWaitForDOMRef.19e54275.js";import"./usePopperMarginModifiers.cad35c33.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

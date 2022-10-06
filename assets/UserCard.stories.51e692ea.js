import{b as a}from"./UserCard.8cf176e1.js";import{bn as s,o as i,as as m,bm as p,a5 as d}from"./index.22793847.js";import{j as l}from"./jsx-runtime.0547954a.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.a47d91ec.js";import"./SkeletonTable.bc06b926.js";import"./times.ccd7af32.js";import"./toInteger.0a662c7d.js";import"./isSymbol.56654682.js";import"./isArray.dc0d9748.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.faa197e5.js";import"./Skeleton.ef288fce.js";import"./withStyles.5f371c18.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.d59517ea.js";import"./createSvgIcon.13c982df.js";import"./SvgIcon.20c60b09.js";import"./slicedToArray.e72f11da.js";import"./index.9a22ba50.js";import"./iframe.bc1355ce.js";import"./useTheme.f4071482.js";import"./Transition.c74a9bc3.js";import"./makeStyles.68b76b6a.js";import"./IconSvg.b92ea12f.js";import"./InfoOutlined.5164ccbb.js";import"./ToastMessage.0f10ae0c.js";import"./FullWidthAlert.8329478a.js";import"./Typography.5de44d5b.js";import"./Alert.320f728d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6d625886.js";import"./Overlay.3bbd300f.js";import"./useWaitForDOMRef.f571d6d7.js";import"./usePopperMarginModifiers.692ae3ac.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

import{U as a}from"./UserCard.5b59af51.js";import{bs as s,v as i,ax as m,br as d,aa as p}from"./index.ee300637.js";import{j as l}from"./jsx-runtime.1a5a2715.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.6ad8cebf.js";import"./SkeletonTable.733c6fe6.js";import"./times.fbcd0673.js";import"./toInteger.72a0ddde.js";import"./isSymbol.eee16a1e.js";import"./isArray.627abb94.js";import"./Button.47fead8e.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.1753a711.js";import"./withStyles.7c3d6aba.js";import"./Tooltip.5c94c0fd.js";import"./createSvgIcon.d6b9a03c.js";import"./SvgIcon.43465c61.js";import"./utils.6069a350.js";import"./index.6dbf9fa2.js";import"./iframe.cf33b896.js";import"./makeStyles.bd855ff6.js";import"./IconSvg.29727645.js";import"./InfoOutlined.9735fa89.js";import"./ToastMessage.373e274f.js";import"./FullWidthAlert.1624915d.js";import"./Typography.51984e68.js";import"./Alert.9d12ab40.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.395c9d56.js";import"./Overlay.494df0cd.js";import"./useWaitForDOMRef.4377410d.js";import"./usePopperMarginModifiers.118ff728.js";const X={parameters:{storySource:{source:`import React from 'react'
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

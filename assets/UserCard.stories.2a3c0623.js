import{U as a}from"./UserCard.c2f5359e.js";import{br as s,v as i,aw as m,bq as d,a9 as p}from"./index.399b1ebb.js";import{j as l}from"./jsx-runtime.f6e67d69.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.bae338e3.js";import"./SkeletonTable.7ca00999.js";import"./times.8c0d57e8.js";import"./toInteger.6ecd4cc2.js";import"./isSymbol.817739da.js";import"./isArray.bbc3389f.js";import"./Button.bb6df31f.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.e925cd71.js";import"./withStyles.e9153c6c.js";import"./Tooltip.e69703f2.js";import"./createSvgIcon.1bc5e790.js";import"./SvgIcon.b9f91416.js";import"./index.5aa44f42.js";import"./iframe.0155d3d5.js";import"./useTheme.b5d1a103.js";import"./Transition.45107636.js";import"./makeStyles.b3ebb6fc.js";import"./IconSvg.76f9c9ad.js";import"./InfoOutlined.6b0ecc0d.js";import"./ToastMessage.ef3fd930.js";import"./FullWidthAlert.a36cfcd9.js";import"./Typography.8482fe8d.js";import"./Alert.161bc8be.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b369d35f.js";import"./Overlay.2be5ac15.js";import"./useWaitForDOMRef.132cafe6.js";import"./usePopperMarginModifiers.9f59499b.js";const Y={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"small-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"medium-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"large-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}}}}},title:"UI/UserCard",component:a},r=o=>{var t,n;const{data:e}=p();return l(a,{...o,ownerId:(n=(t=o.ownerId)!=null?t:e==null?void 0:e.ownerId)!=null?n:"273960"})},c=r.bind({});c.args={size:s,avatarSize:"SMALL"};const U=r.bind({});U.args={size:i};const C=r.bind({});C.args={size:m};const A=r.bind({});A.args={size:d};const Z=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{c as Avatar,A as LargeUserCard,C as MediumUserCard,U as SmallUserCard,Z as __namedExportsOrder,Y as default};

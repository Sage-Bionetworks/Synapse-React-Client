import{U as a}from"./UserCard.8b720891.js";import{br as s,v as i,aw as m,bq as d,a9 as p}from"./index.9501be1c.js";import{j as l}from"./jsx-runtime.4c3515e4.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.b18e1da4.js";import"./SkeletonTable.0b50ae3a.js";import"./times.224503e4.js";import"./toInteger.010334bc.js";import"./isSymbol.6b184f44.js";import"./isArray.7ff8d0ef.js";import"./Button.28efd16b.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.dccb1004.js";import"./withStyles.9c7b3093.js";import"./Tooltip.92206031.js";import"./createSvgIcon.8e9e6f8f.js";import"./SvgIcon.d7dd9197.js";import"./index.e847bba9.js";import"./iframe.37f2588a.js";import"./useTheme.5faeeca8.js";import"./Transition.840176b2.js";import"./makeStyles.96934dd6.js";import"./IconSvg.c8b7f299.js";import"./InfoOutlined.20c203c5.js";import"./ToastMessage.9b5c3655.js";import"./FullWidthAlert.c9de56f1.js";import"./Typography.48c24744.js";import"./Alert.54d65423.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.129d2094.js";import"./Overlay.9b2a4e52.js";import"./useWaitForDOMRef.261cbd7a.js";import"./usePopperMarginModifiers.bef4af84.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

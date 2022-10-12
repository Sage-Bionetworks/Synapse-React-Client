import{U as a}from"./UserCard.289eef41.js";import{br as s,v as i,aw as m,bq as d,a9 as p}from"./index.a7b4e4df.js";import{j as l}from"./jsx-runtime.f7cf66fc.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.96e50061.js";import"./SkeletonTable.ff560500.js";import"./times.a9961130.js";import"./toInteger.2ba4f663.js";import"./isSymbol.c2dfe727.js";import"./isArray.a5837af6.js";import"./Button.8c8504e0.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.76391d30.js";import"./withStyles.ddbf8a64.js";import"./Tooltip.7bec90df.js";import"./createSvgIcon.fe8b3870.js";import"./SvgIcon.d61a6d98.js";import"./index.1e38edd3.js";import"./iframe.7a93df40.js";import"./useTheme.af842711.js";import"./Transition.9d380883.js";import"./makeStyles.c3ae2cc2.js";import"./IconSvg.09883cec.js";import"./InfoOutlined.a5d342c6.js";import"./ToastMessage.9c9a0082.js";import"./FullWidthAlert.73cdbacd.js";import"./Typography.dfe40719.js";import"./Alert.a83e08c9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.bff82890.js";import"./Overlay.6b8ad843.js";import"./useWaitForDOMRef.58e2d194.js";import"./usePopperMarginModifiers.206050ec.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

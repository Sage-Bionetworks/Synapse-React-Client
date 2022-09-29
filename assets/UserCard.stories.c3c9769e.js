import{b as a}from"./UserCard.48cdfe31.js";import{bl as s,o as i,aq as m,bk as p,a3 as d}from"./index.c285f2ad.js";import{j as l}from"./jsx-runtime.94e3dcbc.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.dc0169b8.js";import"./SkeletonTable.7da12e22.js";import"./times.37cc76dc.js";import"./toInteger.f3d0fd1c.js";import"./isSymbol.9ddd9e86.js";import"./isArray.74b811f1.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.ee922916.js";import"./Skeleton.01b7e31d.js";import"./withStyles.25512efa.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.7e80f23c.js";import"./createSvgIcon.aba3ff90.js";import"./SvgIcon.972646c7.js";import"./slicedToArray.e72f11da.js";import"./index.189336ba.js";import"./iframe.7112cc2f.js";import"./useTheme.90c94c01.js";import"./Transition.aafae1a0.js";import"./makeStyles.13257dd8.js";import"./IconSvg.6490189f.js";import"./InfoOutlined.c8be42fa.js";import"./ToastMessage.8eafdcee.js";import"./FullWidthAlert.50b3fdeb.js";import"./Typography.c058b4a5.js";import"./Alert.a8f3dea8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.5395311d.js";import"./Overlay.4edc376f.js";import"./useWaitForDOMRef.bc6c94c4.js";import"./usePopperMarginModifiers.e98e3e3e.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

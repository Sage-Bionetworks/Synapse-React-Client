import{b as a}from"./UserCard.c3fe1aa7.js";import{bn as s,o as i,as as m,bm as p,a5 as d}from"./index.1df77ce9.js";import{j as l}from"./jsx-runtime.f8072c65.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.69a201bb.js";import"./SkeletonTable.be12aa25.js";import"./times.1eb14036.js";import"./toInteger.7ac537e3.js";import"./isSymbol.28b01415.js";import"./isArray.903292fc.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.cb7914f2.js";import"./Skeleton.050d0fcb.js";import"./withStyles.630b025d.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.5e7211d1.js";import"./createSvgIcon.52201bd3.js";import"./SvgIcon.761f4d42.js";import"./slicedToArray.e72f11da.js";import"./index.1d2a784c.js";import"./iframe.aa82293a.js";import"./useTheme.bc44ba71.js";import"./Transition.5983a677.js";import"./makeStyles.9cff04c5.js";import"./IconSvg.a024e3c2.js";import"./InfoOutlined.ec29d19f.js";import"./ToastMessage.37d9d7b6.js";import"./FullWidthAlert.5a306575.js";import"./Typography.3dd8fe93.js";import"./Alert.53bb8599.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6d4b83b5.js";import"./Overlay.84bc18bd.js";import"./useWaitForDOMRef.c9a921b3.js";import"./usePopperMarginModifiers.d6f64b11.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

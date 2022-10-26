import{U as a}from"./UserCard.a35d5b7e.js";import{bv as s,v as i,ax as m,bu as d,aa as p}from"./index.1b5679ea.js";import{j as l}from"./jsx-runtime.eafcb716.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.f88536dd.js";import"./SkeletonTable.aa50450b.js";import"./times.5f1a3032.js";import"./toInteger.877b19a2.js";import"./isSymbol.4226a630.js";import"./isArray.58b2754e.js";import"./Button.2a9ceb49.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.7d351d4d.js";import"./withStyles.58225468.js";import"./Tooltip.96a18513.js";import"./createSvgIcon.01cb2ea7.js";import"./SvgIcon.b014c401.js";import"./utils.57f84b27.js";import"./index.c8a02fae.js";import"./iframe.5b9ef2ae.js";import"./makeStyles.ba00c68d.js";import"./IconSvg.625594e1.js";import"./InfoOutlined.f91cf818.js";import"./ToastMessage.a4b76c0b.js";import"./FullWidthAlert.a684bfe0.js";import"./Typography.049c6864.js";import"./Alert.3a69b0d7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6b2e4177.js";import"./Overlay.ae4ca009.js";import"./useWaitForDOMRef.883e5955.js";import"./usePopperMarginModifiers.8d1cac1c.js";const X={parameters:{storySource:{source:`import React from 'react'
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

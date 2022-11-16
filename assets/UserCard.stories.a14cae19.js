import{U as s}from"./UserCard.04a38507.js";import{an as i,h as d,v as m,am as l,ar as p}from"./SynapseConstants.b6aa8bf5.js";import{a7 as c}from"./index.dae95658.js";import{a as U,F as C,j as a}from"./jsx-runtime.ef6dd6ca.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.9ed3993d.js";import"./SkeletonTable.ef6c1801.js";import"./times.e0b5d62b.js";import"./toInteger.135bf95f.js";import"./isSymbol.3aa79a3a.js";import"./isArray.aa335c2b.js";import"./Button.a73b55da.js";import"./index.35ce73ec.js";import"./Skeleton.537bc7c9.js";import"./styled.e27331e3.js";import"./ButtonBase.acc32807.js";import"./TransitionGroupContext.7ee16c7e.js";import"./IconSvg.afd54b28.js";import"./Tooltip.3430fa1d.js";import"./createSvgIcon.f73758be.js";import"./utils.e96b9b4f.js";import"./index.0c4c5f34.js";import"./iframe.60aac2d9.js";import"./InfoOutlined.cee1fdf4.js";import"./ToastMessage.c7bcf1c5.js";import"./FullWidthAlert.d500669b.js";import"./Alert.ca959f09.js";import"./createWithBsPrefix.fd753f10.js";import"./Typography.4e908f90.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d637a5d8.js";import"./Overlay.f0beb85a.js";import"./contains.96785999.js";import"./usePopperMarginModifiers.a06f6977.js";import"./useWaitForDOMRef.c2e120f2.js";import"./Link.3eeff9dd.js";import"./Button.325fe68b.js";const nr={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { UserCard } from './UserCard'
import {
  ANONYMOUS_PRINCIPAL_ID,
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
  let currentUserId = currentUserProfile?.ownerId
  if (currentUserId === ANONYMOUS_PRINCIPAL_ID.toString()) {
    currentUserId = undefined
  }
  return (
    <>
      <p>
        If you are logged in, your avatar or card will appear. If you are not
        logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff)
        below.
      </p>
      <UserCard ownerId={args.ownerId ?? currentUserId} {...args} />
    </>
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
`,locationsMap:{avatar:{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"small-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"medium-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"large-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}}}}},title:"UI/UserCard",component:s},r=n=>{var t;const{data:e}=c();let o=e==null?void 0:e.ownerId;return o===p.toString()&&(o=void 0),U(C,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(s,{ownerId:(t=n.ownerId)!=null?t:o,...n})]})},u=r.bind({});u.args={size:i,avatarSize:"SMALL"};const A=r.bind({});A.args={size:d};const I=r.bind({});I.args={size:m};const g=r.bind({});g.args={size:l};const tr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{u as Avatar,g as LargeUserCard,I as MediumUserCard,A as SmallUserCard,tr as __namedExportsOrder,nr as default};

import{U as s}from"./UserCard.b1c715fb.js";import{an as i,h as d,v as m,am as l,ar as p}from"./SynapseConstants.b6aa8bf5.js";import{a7 as c}from"./index.f68a6cae.js";import{a as U,F as C,j as a}from"./jsx-runtime.1f7e2749.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.f0404146.js";import"./SkeletonTable.fa74e546.js";import"./times.5455f6d7.js";import"./toInteger.681218b6.js";import"./isSymbol.71d03595.js";import"./isArray.4b374ec1.js";import"./Button.2ee39cf1.js";import"./index.35ce73ec.js";import"./Skeleton.5856d9ed.js";import"./styled.228dca89.js";import"./ButtonBase.1b6ed208.js";import"./TransitionGroupContext.1be95f81.js";import"./IconSvg.8bc0ae7f.js";import"./Tooltip.24f13342.js";import"./createSvgIcon.78845d16.js";import"./utils.03e93c91.js";import"./index.59f4cc8a.js";import"./iframe.6a6b78dc.js";import"./InfoOutlined.48f0d414.js";import"./ToastMessage.26e3c87f.js";import"./FullWidthAlert.aa236ca8.js";import"./Alert.6d227703.js";import"./createWithBsPrefix.ef9ee852.js";import"./Typography.07e15eab.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.1ab068bd.js";import"./Overlay.c88a9d83.js";import"./contains.ed33f850.js";import"./usePopperMarginModifiers.8d5f418f.js";import"./useWaitForDOMRef.165f6c89.js";import"./Link.78173b1f.js";import"./Button.a8e6e6bc.js";const nr={parameters:{storySource:{source:`import React from 'react'
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

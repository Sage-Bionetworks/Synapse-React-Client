import{U as s}from"./UserCard.83a32219.js";import{an as i,h as d,v as m,am as l,ar as p}from"./SynapseConstants.b6aa8bf5.js";import{a7 as c}from"./index.68bd09f4.js";import{a as U,F as C,j as a}from"./jsx-runtime.cf19754d.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.becd3049.js";import"./SkeletonTable.bb55eb7d.js";import"./times.cccc8bac.js";import"./toInteger.8755c25e.js";import"./isSymbol.c5104d65.js";import"./isArray.eece51ec.js";import"./Button.724ba963.js";import"./index.35ce73ec.js";import"./Skeleton.9037b65a.js";import"./styled.db2da3d6.js";import"./ButtonBase.213ee5c8.js";import"./TransitionGroupContext.49564fef.js";import"./IconSvg.2a376753.js";import"./Tooltip.0925b53e.js";import"./createSvgIcon.4f04198d.js";import"./utils.621f5968.js";import"./index.b04ce0ac.js";import"./iframe.bb4f3d50.js";import"./InfoOutlined.c84a4381.js";import"./ToastMessage.25510bc7.js";import"./FullWidthAlert.338c252c.js";import"./Alert.00c62036.js";import"./createWithBsPrefix.5ad4e507.js";import"./Typography.5f784a3a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.964022b9.js";import"./Overlay.50c4b250.js";import"./contains.cdccf4e2.js";import"./usePopperMarginModifiers.52c89a14.js";import"./useWaitForDOMRef.7a25338b.js";import"./Link.e3bd49f6.js";import"./Button.a3c516df.js";const nr={parameters:{storySource:{source:`import React from 'react'
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

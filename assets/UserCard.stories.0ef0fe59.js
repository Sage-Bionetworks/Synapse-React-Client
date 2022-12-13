import{b as s}from"./UserCard.85628e7b.js";import{H as i,h as d,t as m,L as p,aq as l}from"./SynapseConstants.d6ba6a96.js";import{aD as c}from"./EntityTypeUtils.9c2483b3.js";import{a as U,F as C,j as a}from"./jsx-runtime.d04151d1.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.f2a5ff5c.js";import"./SkeletonTable.9b156a16.js";import"./times.f1a57eab.js";import"./toInteger.ae0f3fd8.js";import"./isSymbol.4d2b99f3.js";import"./isArray.88add67b.js";import"./Button.a12385d6.js";import"./index.35ce73ec.js";import"./Skeleton.b0e23dcf.js";import"./styled.1efff5b8.js";import"./emotion-react.browser.esm.b7b35e3a.js";import"./IconSvg.23552105.js";import"./SvgIcon.d3ec47f0.js";import"./Tooltip.4974d54a.js";import"./useTheme.175bd669.js";import"./index.8319c373.js";import"./iframe.d32e0f35.js";import"./TransitionGroupContext.1ef7d36b.js";import"./ToastMessage.7ece14e4.js";import"./FullWidthAlert.8d2b5601.js";import"./Alert.770d73de.js";import"./hook.ba873afd.js";import"./createWithBsPrefix.f5521544.js";import"./divWithClassName.2e38eee3.js";import"./Typography.73bd7049.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.55896be5.js";import"./Overlay.68ebd8b3.js";import"./contains.5d34513a.js";import"./usePopperMarginModifiers.eac9bbda.js";import"./useWaitForDOMRef.3ce690e8.js";import"./Fade.f21ee508.js";import"./IconButton.f2c2856c.js";import"./ButtonBase.3d334067.js";import"./Link.45362a72.js";import"./Button.09b7bba7.js";const ir={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"small-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"medium-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"large-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}}}}},title:"UI/UserCard",component:s},r=n=>{var t;const{data:e}=c();let o=e==null?void 0:e.ownerId;return o===l.toString()&&(o=void 0),U(C,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(s,{ownerId:(t=n.ownerId)!=null?t:o,...n})]})},u=r.bind({});u.args={size:i,avatarSize:"SMALL"};const A=r.bind({});A.args={size:d};const I=r.bind({});I.args={size:m};const g=r.bind({});g.args={size:p};const dr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{u as Avatar,g as LargeUserCard,I as MediumUserCard,A as SmallUserCard,dr as __namedExportsOrder,ir as default};

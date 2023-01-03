import{b as s}from"./UserCard.d62c0381.js";import{H as i,h as d,t as m,L as p,aq as l}from"./SynapseConstants.d6ba6a96.js";import{aE as c}from"./EntityTypeUtils.68b1ba2e.js";import{a as U,F as C,j as a}from"./jsx-runtime.abb726e8.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.41b2aecf.js";import"./SkeletonTable.2b1bbbfa.js";import"./times.c2450c2f.js";import"./toInteger.3bb24d7b.js";import"./isSymbol.0b88d4fa.js";import"./isArray.ab001f9e.js";import"./Button.adf7cc86.js";import"./index.35ce73ec.js";import"./Skeleton.a4e29131.js";import"./styled.f63790d0.js";import"./emotion-react.browser.esm.e1070f55.js";import"./IconSvg.7db66457.js";import"./SvgIcon.e2be6ff9.js";import"./Tooltip.6e0804a9.js";import"./useTheme.8f8018ca.js";import"./index.2c5f845c.js";import"./iframe.eb3e4e59.js";import"./TransitionGroupContext.bebd881a.js";import"./ToastMessage.34e9245f.js";import"./FullWidthAlert.7ca8861d.js";import"./Alert.955b55b4.js";import"./hook.f27fbe2d.js";import"./createWithBsPrefix.1bfef79f.js";import"./divWithClassName.dfc40d29.js";import"./Typography.1b6708c1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d812a5f6.js";import"./Overlay.bdf5e094.js";import"./contains.ec0f6536.js";import"./usePopperMarginModifiers.b882fc0b.js";import"./useWaitForDOMRef.a8cf6b9d.js";import"./Fade.a8b10681.js";import"./IconButton.ed9fd281.js";import"./ButtonBase.5b0e8114.js";import"./Link.27f5a2e0.js";import"./Button.aed7d197.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

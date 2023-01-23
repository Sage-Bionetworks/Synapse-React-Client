import{b as s}from"./UserCard.4bb4c375.js";import{C as i,h as d,t as m,L as p,as as l}from"./SynapseConstants.aef18750.js";import{a$ as c}from"./index.5da0c2fe.js";import{a as U,F as C,j as a}from"./jsx-runtime.b9dbe3f2.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.e1e77b1a.js";import"./SkeletonTable.4e7a5f80.js";import"./times.0d4bfec0.js";import"./toInteger.ac9e6667.js";import"./isSymbol.0dd8f9e4.js";import"./isArray.cd664950.js";import"./Button.5e8fef04.js";import"./index.35ce73ec.js";import"./Skeleton.e124e8e4.js";import"./styled.b8523d56.js";import"./emotion-react.browser.esm.c079a2eb.js";import"./IconSvg.e161b9ac.js";import"./SvgIcon.07fafc9f.js";import"./Tooltip.48a3285f.js";import"./useTheme.0510b97a.js";import"./index.1d295946.js";import"./iframe.daa7e99b.js";import"./TransitionGroupContext.550f3593.js";import"./ToastMessage.3861395a.js";import"./FullWidthAlert.4c795642.js";import"./hook.8a461b2d.js";import"./createWithBsPrefix.e49426e0.js";import"./divWithClassName.39a68f1e.js";import"./Typography.67fe2a50.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.dbc9074b.js";import"./toString.e4b44ed1.js";import"./Overlay.b50e2181.js";import"./contains.c92a1cab.js";import"./usePopperMarginModifiers.df9835fb.js";import"./useWaitForDOMRef.a0e6e40c.js";import"./Fade.79c18b91.js";import"./IconButton.92911f6e.js";import"./ButtonBase.a93e0872.js";import"./Link.da3e8d7d.js";import"./Button.7c5736c7.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

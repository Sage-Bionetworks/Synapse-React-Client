import{b as s}from"./UserCard.e7305117.js";import{C as i,h as d,t as m,L as p,as as l}from"./SynapseConstants.aef18750.js";import{a$ as c}from"./index.ffb97e36.js";import{a as U,F as C,j as a}from"./jsx-runtime.32974a61.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.ef0119b7.js";import"./SkeletonTable.46544d69.js";import"./times.2bf5fee2.js";import"./toInteger.79c7525f.js";import"./isSymbol.99aea655.js";import"./isArray.c8bb4df8.js";import"./Button.335f67c9.js";import"./index.35ce73ec.js";import"./Skeleton.391d7134.js";import"./styled.d39d5dc5.js";import"./emotion-react.browser.esm.34fe7ce7.js";import"./IconSvg.13ae9a2f.js";import"./SvgIcon.85beeea7.js";import"./Tooltip.86d343dc.js";import"./useTheme.6433d807.js";import"./index.3765caa7.js";import"./iframe.1b774001.js";import"./TransitionGroupContext.a684d657.js";import"./ToastMessage.65ccc322.js";import"./FullWidthAlert.1407f383.js";import"./hook.b7735453.js";import"./createWithBsPrefix.9bd79cbf.js";import"./divWithClassName.5dac844d.js";import"./Typography.c2c9dd4b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.74860187.js";import"./toString.77379481.js";import"./Overlay.506fb03e.js";import"./contains.bd6ce983.js";import"./usePopperMarginModifiers.c268b183.js";import"./useWaitForDOMRef.8d2f766c.js";import"./Fade.40b5902b.js";import"./IconButton.adda85b8.js";import"./ButtonBase.38f61443.js";import"./Link.7609fc67.js";import"./Button.a71922e0.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

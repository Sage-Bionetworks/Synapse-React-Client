import{b as s}from"./UserCard.5dc8ad35.js";import{C as i,h as d,t as m,L as p,as as l}from"./SynapseConstants.aef18750.js";import{a$ as c}from"./index.6ade810e.js";import{a as U,F as C,j as a}from"./jsx-runtime.732db4fa.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.8fbe8f6c.js";import"./SkeletonTable.cff03cd3.js";import"./times.37016f17.js";import"./toInteger.e9616708.js";import"./isSymbol.3aa759ff.js";import"./isArray.ab714070.js";import"./Button.14842d9b.js";import"./index.35ce73ec.js";import"./Skeleton.00a5a513.js";import"./styled.7d1b1387.js";import"./emotion-react.browser.esm.4ae44601.js";import"./IconSvg.f8a92c9e.js";import"./SvgIcon.883206f0.js";import"./Tooltip.b3eb933e.js";import"./useTheme.23d779b8.js";import"./index.f08547e5.js";import"./iframe.309bdcd0.js";import"./TransitionGroupContext.25f1619e.js";import"./ToastMessage.ca9da849.js";import"./FullWidthAlert.b4689dd3.js";import"./hook.7d829a86.js";import"./createWithBsPrefix.e55f4707.js";import"./divWithClassName.0d41da1a.js";import"./Typography.52fcc329.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.68f55a89.js";import"./toString.083d15f6.js";import"./Overlay.c9c798f2.js";import"./contains.d723cb84.js";import"./usePopperMarginModifiers.7728e467.js";import"./useWaitForDOMRef.08d8bdbd.js";import"./Fade.a9768a9d.js";import"./IconButton.4e309ec1.js";import"./ButtonBase.caa5bbee.js";import"./Link.04b76f3f.js";import"./Button.2b5fc967.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

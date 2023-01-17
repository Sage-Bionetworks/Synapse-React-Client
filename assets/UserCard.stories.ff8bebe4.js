import{b as s}from"./UserCard.3b30c3b3.js";import{C as i,h as d,t as m,L as p,as as l}from"./SynapseConstants.aef18750.js";import{a_ as c}from"./index.b3fc12c1.js";import{a as U,F as C,j as a}from"./jsx-runtime.d6be66a9.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.120eb6a8.js";import"./SkeletonTable.8490bedb.js";import"./times.b541d215.js";import"./toInteger.5e3c3f3b.js";import"./isSymbol.eb29c468.js";import"./isArray.3ed41029.js";import"./Button.58f5aaec.js";import"./index.35ce73ec.js";import"./Skeleton.c281df81.js";import"./styled.f07e33c6.js";import"./emotion-react.browser.esm.8203c469.js";import"./IconSvg.67904b39.js";import"./SvgIcon.b9658c5d.js";import"./Tooltip.c89a275a.js";import"./useTheme.0cbb662e.js";import"./index.3b7d1b21.js";import"./iframe.78dc3b5d.js";import"./TransitionGroupContext.27368eb3.js";import"./ToastMessage.1551e33e.js";import"./FullWidthAlert.0962330c.js";import"./hook.0245101a.js";import"./createWithBsPrefix.139b0869.js";import"./divWithClassName.f4023709.js";import"./Typography.079c4f38.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.1755aefe.js";import"./toString.62a6def8.js";import"./Overlay.16f87717.js";import"./contains.ac446ee4.js";import"./usePopperMarginModifiers.f5f095e7.js";import"./useWaitForDOMRef.8bdf7b9b.js";import"./Fade.c734522e.js";import"./IconButton.3b892d3a.js";import"./ButtonBase.250c511d.js";import"./Link.7f48e2dc.js";import"./Button.bef5272a.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

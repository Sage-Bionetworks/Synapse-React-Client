import{b as i}from"./UserCard.fd71ec21.js";import{ao as s,i as d,w as m,an as p,ar as l}from"./SynapseConstants.290eab74.js";import{aD as c}from"./index.f6d21e1b.js";import{a as U,F as C,j as a}from"./jsx-runtime.9272ed69.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.5eab956d.js";import"./SkeletonTable.f9509214.js";import"./times.51f590ec.js";import"./toInteger.13c3eb15.js";import"./isSymbol.04dc93d5.js";import"./isArray.f757e7ba.js";import"./Button.db898533.js";import"./index.35ce73ec.js";import"./Skeleton.fb3032fb.js";import"./styled.0de421fa.js";import"./emotion-react.browser.esm.1c97b976.js";import"./IconSvg.26b6f898.js";import"./TransitionGroupContext.54f3d5ea.js";import"./Tooltip.d2aa8c40.js";import"./createSvgIcon.1c5ae5be.js";import"./useTheme.75529918.js";import"./index.dc51ea0b.js";import"./iframe.e4b610a3.js";import"./utils.6e1717b5.js";import"./InfoOutlined.cadfca07.js";import"./ToastMessage.c90a289b.js";import"./FullWidthAlert.5512750c.js";import"./Alert.2534b0a8.js";import"./hook.0361e512.js";import"./createWithBsPrefix.9ea76fe5.js";import"./divWithClassName.c5203597.js";import"./Typography.1f221702.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f24c8a17.js";import"./Overlay.5bf74367.js";import"./contains.27e7aea9.js";import"./usePopperMarginModifiers.d53889fd.js";import"./useWaitForDOMRef.cd5903ac.js";import"./Fade.cc51c470.js";import"./Link.8b0bf192.js";import"./Button.0c0c729f.js";import"./ButtonBase.3405045f.js";const dr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"small-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"medium-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"large-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}}}}},title:"UI/UserCard",component:i},r=n=>{var t;const{data:e}=c();let o=e==null?void 0:e.ownerId;return o===l.toString()&&(o=void 0),U(C,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(i,{ownerId:(t=n.ownerId)!=null?t:o,...n})]})},u=r.bind({});u.args={size:s,avatarSize:"SMALL"};const A=r.bind({});A.args={size:d};const I=r.bind({});I.args={size:m};const g=r.bind({});g.args={size:p};const mr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{u as Avatar,g as LargeUserCard,I as MediumUserCard,A as SmallUserCard,mr as __namedExportsOrder,dr as default};

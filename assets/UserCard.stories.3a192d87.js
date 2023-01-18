import{b as s}from"./UserCard.ba59470c.js";import{C as i,h as d,t as m,L as p,as as l}from"./SynapseConstants.aef18750.js";import{a$ as c}from"./index.3aece391.js";import{a as U,F as C,j as a}from"./jsx-runtime.2345241f.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.96dd679a.js";import"./SkeletonTable.a46ba30a.js";import"./times.cf7726b4.js";import"./toInteger.accec1ae.js";import"./isSymbol.f2edf3f1.js";import"./isArray.594b9061.js";import"./Button.dd9fc4ec.js";import"./index.35ce73ec.js";import"./Skeleton.153caf19.js";import"./styled.8a79803b.js";import"./emotion-react.browser.esm.782cdb58.js";import"./IconSvg.c0ad7b85.js";import"./SvgIcon.c3dd5893.js";import"./Tooltip.c4c31d9f.js";import"./useTheme.7300f82e.js";import"./index.5a7af4ba.js";import"./iframe.b6c45fd3.js";import"./TransitionGroupContext.ce30fb83.js";import"./ToastMessage.67e8dd8b.js";import"./FullWidthAlert.f758387e.js";import"./hook.40948bbb.js";import"./createWithBsPrefix.767a2de5.js";import"./divWithClassName.ada2c499.js";import"./Typography.5428f494.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.15511b65.js";import"./toString.f6d778fc.js";import"./Overlay.38d5df1d.js";import"./contains.ca3b169c.js";import"./usePopperMarginModifiers.279ac1d5.js";import"./useWaitForDOMRef.6e025e2e.js";import"./Fade.544d2c09.js";import"./IconButton.479fa89c.js";import"./ButtonBase.37e9a56e.js";import"./Link.10558e7e.js";import"./Button.2a6d5e68.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

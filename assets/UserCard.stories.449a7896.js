import{b as s}from"./UserCard.d526f464.js";import{C as i,h as d,t as m,L as p,aq as l}from"./SynapseConstants.4792b5b5.js";import{aL as c}from"./index.a4d7c90b.js";import{a as U,F as C,j as a}from"./jsx-runtime.e6c7cb0f.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.137bbf05.js";import"./SkeletonTable.eb79cb63.js";import"./times.f6524aef.js";import"./toInteger.e34afcf8.js";import"./isSymbol.361bd2a3.js";import"./isArray.d7f4d705.js";import"./Button.55945b82.js";import"./index.35ce73ec.js";import"./Skeleton.fe2a8391.js";import"./styled.defe1bf4.js";import"./emotion-react.browser.esm.0fa712d1.js";import"./IconSvg.7c6c26ba.js";import"./SvgIcon.277e4012.js";import"./Tooltip.b8c59786.js";import"./useTheme.78ea417a.js";import"./index.2be90583.js";import"./iframe.62902f49.js";import"./TransitionGroupContext.9be55353.js";import"./ToastMessage.7470eb0d.js";import"./FullWidthAlert.194d0790.js";import"./Alert.dd9a8045.js";import"./hook.0a44a4bc.js";import"./createWithBsPrefix.d521861c.js";import"./divWithClassName.f3083196.js";import"./Typography.491b6426.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.3a766a50.js";import"./Overlay.eaf422e6.js";import"./contains.d4d1085c.js";import"./usePopperMarginModifiers.667559d9.js";import"./useWaitForDOMRef.0aadaf3e.js";import"./Fade.43ac51c5.js";import"./IconButton.3458b12d.js";import"./ButtonBase.c32891f3.js";import"./Link.f733bec4.js";import"./Button.6ec7c4e8.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

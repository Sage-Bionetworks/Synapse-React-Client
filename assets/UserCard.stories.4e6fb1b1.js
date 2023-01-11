import{b as s}from"./UserCard.c70cf940.js";import{C as i,h as d,t as m,L as p,ar as l}from"./SynapseConstants.71946a35.js";import{a_ as c}from"./index.7e720d98.js";import{a as U,F as C,j as a}from"./jsx-runtime.8deabff4.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.fec0e03b.js";import"./SkeletonTable.d18d0ed3.js";import"./times.bce2a9cd.js";import"./toInteger.5c373204.js";import"./isSymbol.0aefb815.js";import"./isArray.60ef1f80.js";import"./Button.7f145214.js";import"./index.35ce73ec.js";import"./Skeleton.75c9e7ec.js";import"./styled.4ed13d54.js";import"./emotion-react.browser.esm.3c5e03a0.js";import"./IconSvg.c37effa3.js";import"./SvgIcon.68c0612f.js";import"./Tooltip.1a090672.js";import"./useTheme.4dbd8795.js";import"./index.57c4b3f6.js";import"./iframe.9a9f3456.js";import"./TransitionGroupContext.f0e5bdf3.js";import"./ToastMessage.0865ace5.js";import"./FullWidthAlert.5c7c6876.js";import"./hook.1ef6fcec.js";import"./createWithBsPrefix.10b29307.js";import"./divWithClassName.17daa550.js";import"./Typography.d2c075af.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d83e1a92.js";import"./Overlay.0adb623b.js";import"./contains.28185ff5.js";import"./usePopperMarginModifiers.008c5a4d.js";import"./useWaitForDOMRef.c2404935.js";import"./Fade.5eff05c6.js";import"./IconButton.88d7d90d.js";import"./ButtonBase.f183321e.js";import"./Link.150a4582.js";import"./Button.eb6e2031.js";const sr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"small-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"medium-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"large-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}}}}},title:"UI/UserCard",component:s},r=n=>{var t;const{data:e}=c();let o=e==null?void 0:e.ownerId;return o===l.toString()&&(o=void 0),U(C,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(s,{ownerId:(t=n.ownerId)!=null?t:o,...n})]})},u=r.bind({});u.args={size:i,avatarSize:"SMALL"};const A=r.bind({});A.args={size:d};const I=r.bind({});I.args={size:m};const g=r.bind({});g.args={size:p};const ir=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{u as Avatar,g as LargeUserCard,I as MediumUserCard,A as SmallUserCard,ir as __namedExportsOrder,sr as default};

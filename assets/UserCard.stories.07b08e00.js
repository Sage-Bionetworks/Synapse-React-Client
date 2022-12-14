import{b as s}from"./UserCard.d9f9873d.js";import{H as i,h as d,t as m,L as p,aq as l}from"./SynapseConstants.d6ba6a96.js";import{aD as c}from"./EntityTypeUtils.f136fe8e.js";import{a as U,F as C,j as a}from"./jsx-runtime.edcee20f.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.a9a46157.js";import"./SkeletonTable.eac87a94.js";import"./times.d987e694.js";import"./toInteger.93344759.js";import"./isSymbol.4e401305.js";import"./isArray.ba2a5774.js";import"./Button.beed9c8a.js";import"./index.35ce73ec.js";import"./Skeleton.7309b0e8.js";import"./styled.57026967.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./IconSvg.a36fd00f.js";import"./SvgIcon.cf85a686.js";import"./Tooltip.6287427b.js";import"./useTheme.c864c010.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./TransitionGroupContext.9f30f89b.js";import"./ToastMessage.fe900393.js";import"./FullWidthAlert.15c58824.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./createWithBsPrefix.fb2e744c.js";import"./divWithClassName.198d5031.js";import"./Typography.8ba12270.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d49ff0ce.js";import"./Overlay.0deab64d.js";import"./contains.73b2d2ff.js";import"./usePopperMarginModifiers.3784b24d.js";import"./useWaitForDOMRef.b1b60d08.js";import"./Fade.e73bdacf.js";import"./IconButton.f86e6b85.js";import"./ButtonBase.8a19de44.js";import"./Link.c844031a.js";import"./Button.237100ef.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

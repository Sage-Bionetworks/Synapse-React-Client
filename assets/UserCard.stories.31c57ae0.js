import{b as s}from"./UserCard.d1f4475d.js";import{H as i,h as d,t as m,L as p,aq as l}from"./SynapseConstants.d6ba6a96.js";import{aE as c}from"./EntityTypeUtils.a88da157.js";import{a as U,F as C,j as a}from"./jsx-runtime.7f415a49.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.02e8b48e.js";import"./SkeletonTable.ce10e001.js";import"./times.9ff12fd4.js";import"./toInteger.d64e3f97.js";import"./isSymbol.9047c28e.js";import"./isArray.22a05d29.js";import"./Button.03e30a54.js";import"./index.35ce73ec.js";import"./Skeleton.cf05128e.js";import"./styled.681e07cb.js";import"./emotion-react.browser.esm.3f795854.js";import"./IconSvg.4536f7bc.js";import"./SvgIcon.67c4bd7a.js";import"./Tooltip.532ca871.js";import"./useTheme.93fabebb.js";import"./index.322ef20a.js";import"./iframe.f0eb7e4f.js";import"./TransitionGroupContext.d6cb07c1.js";import"./ToastMessage.475a246a.js";import"./FullWidthAlert.58605d4c.js";import"./Alert.41cbd6e8.js";import"./hook.926e9335.js";import"./createWithBsPrefix.1ec397ad.js";import"./divWithClassName.4f7ac618.js";import"./Typography.b9cf5e4f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.706d73bf.js";import"./Overlay.34589b18.js";import"./contains.12125dea.js";import"./usePopperMarginModifiers.1e19fcd3.js";import"./useWaitForDOMRef.96d00667.js";import"./Fade.91bde074.js";import"./IconButton.f87dde1e.js";import"./ButtonBase.24c8fd98.js";import"./Link.962b4b54.js";import"./Button.7a13a013.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

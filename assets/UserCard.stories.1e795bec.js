import{b as s}from"./UserCard.0ebf5c75.js";import{C as i,h as d,t as m,L as p,aq as l}from"./SynapseConstants.4792b5b5.js";import{a_ as c}from"./index.6e226ad1.js";import{a as U,F as C,j as a}from"./jsx-runtime.8ee42ca4.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.fedbd76c.js";import"./SkeletonTable.7edc5c07.js";import"./times.2c182ff5.js";import"./toInteger.c3531c4d.js";import"./isSymbol.4962e9a9.js";import"./isArray.649754a9.js";import"./Button.32185a3f.js";import"./index.35ce73ec.js";import"./Skeleton.3af709e7.js";import"./styled.cab085b6.js";import"./emotion-react.browser.esm.755544ae.js";import"./IconSvg.9744025b.js";import"./SvgIcon.e7d9e8d5.js";import"./Tooltip.53b3d1bd.js";import"./useTheme.a650b60c.js";import"./index.c68764fa.js";import"./iframe.57558d86.js";import"./TransitionGroupContext.d40bca5e.js";import"./ToastMessage.43b52073.js";import"./FullWidthAlert.a54f59d5.js";import"./Alert.4adbe9cb.js";import"./hook.b75ee742.js";import"./createWithBsPrefix.1fcef933.js";import"./divWithClassName.4fa3ddf0.js";import"./Typography.dc67c84b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d7153eca.js";import"./Overlay.0bda75db.js";import"./contains.3c554215.js";import"./usePopperMarginModifiers.78486f26.js";import"./useWaitForDOMRef.b0e44e89.js";import"./Fade.8d5d2209.js";import"./IconButton.0dfca4e0.js";import"./ButtonBase.442ee4f8.js";import"./Link.f5b0fcd9.js";import"./Button.73b6fb95.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

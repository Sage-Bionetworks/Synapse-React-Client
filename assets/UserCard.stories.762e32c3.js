import{b as i}from"./UserCard.0f3fab61.js";import{ao as s,i as d,w as m,an as p,ar as l}from"./SynapseConstants.290eab74.js";import{aD as c}from"./index.22d2125e.js";import{a as U,F as C,j as a}from"./jsx-runtime.31268528.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.47bd251d.js";import"./SkeletonTable.8b5a914e.js";import"./times.97f8800e.js";import"./toInteger.93a4e178.js";import"./isSymbol.32cdb41a.js";import"./isArray.e45ce668.js";import"./Button.3eb9449f.js";import"./index.35ce73ec.js";import"./Skeleton.855acef4.js";import"./styled.0bfd4c69.js";import"./emotion-react.browser.esm.d60ec8ed.js";import"./IconSvg.1a319e23.js";import"./TransitionGroupContext.43d26755.js";import"./Tooltip.5176c19c.js";import"./createSvgIcon.f7c19e7b.js";import"./useTheme.910eaec3.js";import"./index.d5f32449.js";import"./iframe.c7567c2d.js";import"./utils.033d23ab.js";import"./InfoOutlined.1c97ae19.js";import"./ToastMessage.a10582c4.js";import"./FullWidthAlert.0f9fa90d.js";import"./Alert.d1d035f0.js";import"./hook.78e5dc31.js";import"./createWithBsPrefix.4103f011.js";import"./divWithClassName.a05c647c.js";import"./Typography.7deb443e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.23cb78c9.js";import"./Overlay.4f4ca7b6.js";import"./contains.861fc71b.js";import"./usePopperMarginModifiers.7853b5dc.js";import"./useWaitForDOMRef.f228876d.js";import"./Fade.4ca82ca8.js";import"./Link.df009298.js";import"./Button.5756842c.js";import"./ButtonBase.34890086.js";const dr={parameters:{storySource:{source:`import React from 'react'
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

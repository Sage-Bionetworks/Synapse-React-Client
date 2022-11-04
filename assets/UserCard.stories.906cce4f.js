import{U as s}from"./UserCard.94c6876c.js";import{an as i,h as d,v as m,am as l,ar as p}from"./SynapseConstants.b6aa8bf5.js";import{a5 as c}from"./index.8d274cce.js";import{a as U,F as C,j as a}from"./jsx-runtime.08584073.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.28a6d75f.js";import"./SkeletonTable.c5426c0e.js";import"./times.6ff56ad1.js";import"./toInteger.ebd6ba2e.js";import"./isSymbol.bad84e3a.js";import"./isArray.e00a52bc.js";import"./Button.19eb0a0d.js";import"./index.35ce73ec.js";import"./Skeleton.caf11574.js";import"./styled.49e31bee.js";import"./emotion-react.browser.esm.17352205.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.47050332.js";import"./SvgIcon.52412c7b.js";import"./Tooltip.f9340fc3.js";import"./createSvgIcon.5c64ba32.js";import"./utils.564f56d5.js";import"./index.10a6a474.js";import"./iframe.46cf6f9c.js";import"./InfoOutlined.aab3ebaf.js";import"./ToastMessage.b76b29fc.js";import"./FullWidthAlert.c938c0bd.js";import"./Alert.50172ad9.js";import"./createWithBsPrefix.84280c3f.js";import"./Typography.afe1a60b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.2262e339.js";import"./Overlay.c4937a08.js";import"./contains.dc8b0910.js";import"./usePopperMarginModifiers.e5eb18a0.js";import"./useWaitForDOMRef.5ed53cb9.js";const or={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"small-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"medium-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"large-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}}}}},title:"UI/UserCard",component:s},r=n=>{var t;const{data:e}=c();let o=e==null?void 0:e.ownerId;return o===p.toString()&&(o=void 0),U(C,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(s,{ownerId:(t=n.ownerId)!=null?t:o,...n})]})},u=r.bind({});u.args={size:i,avatarSize:"SMALL"};const A=r.bind({});A.args={size:d};const I=r.bind({});I.args={size:m};const g=r.bind({});g.args={size:l};const nr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{u as Avatar,g as LargeUserCard,I as MediumUserCard,A as SmallUserCard,nr as __namedExportsOrder,or as default};

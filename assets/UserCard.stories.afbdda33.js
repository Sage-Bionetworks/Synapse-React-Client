import{U as s}from"./UserCard.b4b4f075.js";import{an as i,h as d,v as m,am as l,ar as p}from"./SynapseConstants.b6aa8bf5.js";import{a7 as c}from"./index.f37f3b8f.js";import{a as U,F as C,j as a}from"./jsx-runtime.e755df9d.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.ada7cf84.js";import"./SkeletonTable.dac7e5fd.js";import"./times.005fd51b.js";import"./toInteger.44f4879c.js";import"./isSymbol.449c22fe.js";import"./isArray.32035835.js";import"./Button.ce5d2622.js";import"./index.35ce73ec.js";import"./Skeleton.902d2113.js";import"./styled.134e90bd.js";import"./emotion-react.browser.esm.888ec03a.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.0451ffde.js";import"./SvgIcon.26fd4209.js";import"./Tooltip.68fb53f0.js";import"./createSvgIcon.4e7dae8f.js";import"./utils.61686747.js";import"./index.46e2a3d6.js";import"./iframe.2151c0e3.js";import"./InfoOutlined.f6c28811.js";import"./ToastMessage.3b077507.js";import"./FullWidthAlert.4c671361.js";import"./Alert.7ac348fd.js";import"./createWithBsPrefix.c5475a12.js";import"./Typography.c9ad912d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.05b48118.js";import"./Overlay.f4f68cfe.js";import"./contains.c7dcff34.js";import"./usePopperMarginModifiers.64be5d9c.js";import"./useWaitForDOMRef.1fc5c6db.js";const or={parameters:{storySource:{source:`import React from 'react'
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

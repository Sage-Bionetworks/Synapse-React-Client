import{U as s}from"./UserCard.c35f579d.js";import{an as i,h as d,v as m,am as l,ar as p}from"./SynapseConstants.b6aa8bf5.js";import{a5 as c}from"./index.26ad4be5.js";import{a as U,F as C,j as a}from"./jsx-runtime.325e7137.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.73ef776f.js";import"./SkeletonTable.a881218b.js";import"./times.a7f9fd68.js";import"./toInteger.ab08c53c.js";import"./isSymbol.2f09fe74.js";import"./isArray.ba495a61.js";import"./Button.2661b6a1.js";import"./index.35ce73ec.js";import"./Skeleton.4f13b0c1.js";import"./styled.8997d4d9.js";import"./emotion-react.browser.esm.f1e534da.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.a4adfbe0.js";import"./SvgIcon.ac4cf4e1.js";import"./Tooltip.4e888661.js";import"./createSvgIcon.3ee89089.js";import"./utils.373161e6.js";import"./index.1c9fa93d.js";import"./iframe.d25110d4.js";import"./InfoOutlined.191e0556.js";import"./ToastMessage.356d6e1c.js";import"./FullWidthAlert.3575feb9.js";import"./Alert.29e6a249.js";import"./createWithBsPrefix.2155bd3d.js";import"./Typography.46ba432f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.69d847eb.js";import"./Overlay.4ea04f69.js";import"./contains.26318f11.js";import"./usePopperMarginModifiers.f4fd333a.js";import"./useWaitForDOMRef.25f83f82.js";const or={parameters:{storySource:{source:`import React from 'react'
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

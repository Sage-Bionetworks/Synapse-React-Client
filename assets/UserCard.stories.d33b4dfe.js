import{U as s}from"./UserCard.1da63075.js";import{an as i,h as d,v as m,am as l,ar as p}from"./SynapseConstants.b6aa8bf5.js";import{Y as c}from"./index.dcde5598.js";import{a as U,F as C,j as a}from"./jsx-runtime.b29a5274.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.fa0d8a51.js";import"./SkeletonTable.94c4c988.js";import"./times.52672c9d.js";import"./toInteger.8f4cfb94.js";import"./isSymbol.9796f8db.js";import"./isArray.0036f9bf.js";import"./Button.c77a6de6.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.c9932f2f.js";import"./withStyles.2d1152f5.js";import"./Tooltip.76e779de.js";import"./createSvgIcon.363a4d4a.js";import"./SvgIcon.5f62e5e7.js";import"./utils.c867bc57.js";import"./index.73e3d9d7.js";import"./iframe.45f65fdb.js";import"./makeStyles.90bec0f4.js";import"./IconSvg.9f77ee65.js";import"./InfoOutlined.e9bf0eda.js";import"./ToastMessage.cdfb50d6.js";import"./FullWidthAlert.3cefffa2.js";import"./Typography.e39b1a57.js";import"./Alert.5f5d4d35.js";import"./createWithBsPrefix.2e8fbe6b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.759a0be8.js";import"./Overlay.14a6d56e.js";import"./contains.86bdf9ac.js";import"./usePopperMarginModifiers.5d89d5c2.js";import"./useWaitForDOMRef.f3a64467.js";const or={parameters:{storySource:{source:`import React from 'react'
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

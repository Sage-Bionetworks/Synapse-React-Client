import{U as s}from"./UserCard.2ecf62d0.js";import{an as i,h as d,v as m,am as l,ar as p}from"./SynapseConstants.b6aa8bf5.js";import{a7 as c}from"./index.3d089af5.js";import{a as U,F as C,j as a}from"./jsx-runtime.2b71273f.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.24e1b7a1.js";import"./SkeletonTable.257b688b.js";import"./times.99997936.js";import"./toInteger.b7a3730e.js";import"./isSymbol.6a44fdec.js";import"./isArray.f3e4211e.js";import"./Button.9a34c287.js";import"./index.35ce73ec.js";import"./Skeleton.aec42867.js";import"./styled.ffa42780.js";import"./ButtonBase.1d993e3f.js";import"./TransitionGroupContext.ec9d4526.js";import"./IconSvg.31630328.js";import"./Tooltip.7c243246.js";import"./createSvgIcon.8400397d.js";import"./utils.4bc122e2.js";import"./index.7aa8b9f8.js";import"./iframe.2ab16825.js";import"./InfoOutlined.49fd3aca.js";import"./ToastMessage.486f16ec.js";import"./FullWidthAlert.d57a412d.js";import"./Alert.dab3d922.js";import"./createWithBsPrefix.64e0cb3b.js";import"./Typography.e75e6cdf.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.775c431b.js";import"./Overlay.b78a7481.js";import"./contains.7e5b5926.js";import"./usePopperMarginModifiers.a1dad7e0.js";import"./useWaitForDOMRef.45bec7c5.js";import"./Link.fcffcbaa.js";import"./Button.f0ab2e0d.js";const nr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"small-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"medium-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"large-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}}}}},title:"UI/UserCard",component:s},r=n=>{var t;const{data:e}=c();let o=e==null?void 0:e.ownerId;return o===p.toString()&&(o=void 0),U(C,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(s,{ownerId:(t=n.ownerId)!=null?t:o,...n})]})},u=r.bind({});u.args={size:i,avatarSize:"SMALL"};const A=r.bind({});A.args={size:d};const I=r.bind({});I.args={size:m};const g=r.bind({});g.args={size:l};const tr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{u as Avatar,g as LargeUserCard,I as MediumUserCard,A as SmallUserCard,tr as __namedExportsOrder,nr as default};

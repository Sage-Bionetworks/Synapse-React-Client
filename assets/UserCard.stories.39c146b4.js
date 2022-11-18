import{b as s}from"./UserCard.e95fdc99.js";import{ao as i,i as d,w as m,an as l,ar as p}from"./SynapseConstants.290eab74.js";import{aD as c}from"./index.0a2c4939.js";import{a as U,F as C,j as a}from"./jsx-runtime.aa766aaf.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.0f69ca31.js";import"./SkeletonTable.e0c4ca45.js";import"./times.33cd8aa8.js";import"./toInteger.36ff5a11.js";import"./isSymbol.36b96d1e.js";import"./isArray.24130e12.js";import"./Button.c2cc208f.js";import"./index.35ce73ec.js";import"./Skeleton.b9cd2726.js";import"./styled.2fe8edb9.js";import"./ButtonBase.4c393dc9.js";import"./TransitionGroupContext.4c6d8009.js";import"./IconSvg.d73f159f.js";import"./Tooltip.e4334ac7.js";import"./createSvgIcon.d27817df.js";import"./utils.b239c5dc.js";import"./index.2efb6d36.js";import"./iframe.bd885096.js";import"./InfoOutlined.548f9119.js";import"./ToastMessage.167572b3.js";import"./FullWidthAlert.8371c9c1.js";import"./Alert.f1eda723.js";import"./createWithBsPrefix.2cafb9ec.js";import"./Typography.57d7ee2f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.bdc3b93e.js";import"./Overlay.70cfa399.js";import"./contains.91b3e071.js";import"./usePopperMarginModifiers.77eb36d9.js";import"./useWaitForDOMRef.dcf70bcc.js";import"./Link.d09d0f36.js";import"./Button.d4a39ac2.js";const nr={parameters:{storySource:{source:`import React from 'react'
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

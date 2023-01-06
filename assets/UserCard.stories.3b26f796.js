import{b as s}from"./UserCard.60a81442.js";import{H as i,h as d,t as m,L as p,aq as l}from"./SynapseConstants.d6ba6a96.js";import{aE as c}from"./EntityTypeUtils.02efa7e4.js";import{a as U,F as C,j as a}from"./jsx-runtime.cae1efce.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.158d0c53.js";import"./SkeletonTable.ef7abf61.js";import"./times.df010a42.js";import"./toInteger.3ed0cd2f.js";import"./isSymbol.87b57363.js";import"./isArray.175db850.js";import"./Button.7727704e.js";import"./index.35ce73ec.js";import"./Skeleton.5c3ed137.js";import"./styled.893b6037.js";import"./emotion-react.browser.esm.0f705697.js";import"./IconSvg.6bbb8efe.js";import"./SvgIcon.d977b0c7.js";import"./Tooltip.017a66bf.js";import"./useTheme.6ac8e7e3.js";import"./index.3a565a91.js";import"./iframe.61f567f7.js";import"./TransitionGroupContext.bc025aa2.js";import"./ToastMessage.8e99f4ca.js";import"./FullWidthAlert.9d4713f3.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./createWithBsPrefix.df7fa21f.js";import"./divWithClassName.5b633697.js";import"./Typography.334f7e13.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fbe1b45a.js";import"./Overlay.879f6140.js";import"./contains.44df3564.js";import"./usePopperMarginModifiers.fb0d551a.js";import"./useWaitForDOMRef.6ca94db7.js";import"./Fade.31660acb.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./Link.c5d35787.js";import"./Button.af90093c.js";const ir={parameters:{storySource:{source:`import React from 'react'
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

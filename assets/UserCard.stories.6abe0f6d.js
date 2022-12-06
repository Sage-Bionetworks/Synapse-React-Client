import{b as s}from"./UserCard.51dc49e5.js";import{ao as i,i as d,w as m,an as p,ar as l}from"./SynapseConstants.290eab74.js";import{aD as c}from"./index.53b0413e.js";import{a as U,F as C,j as a}from"./jsx-runtime.076c7567.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.1b045a7b.js";import"./SkeletonTable.3dd63b5b.js";import"./times.2784b383.js";import"./toInteger.92753527.js";import"./isSymbol.353ed4c3.js";import"./isArray.b8ce881a.js";import"./Button.a0002af7.js";import"./index.35ce73ec.js";import"./Skeleton.83217f13.js";import"./styled.65df53fb.js";import"./emotion-react.browser.esm.74b64aae.js";import"./IconSvg.94aeb20a.js";import"./TransitionGroupContext.9598a495.js";import"./Tooltip.b4ed2e26.js";import"./useTheme.6d85215f.js";import"./index.3dd8c113.js";import"./iframe.dc9e500a.js";import"./ToastMessage.f480df01.js";import"./FullWidthAlert.c3c066c4.js";import"./Alert.052d6dda.js";import"./hook.fb6ae99a.js";import"./createWithBsPrefix.125a71ed.js";import"./divWithClassName.d855987b.js";import"./Typography.18dd9738.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0acb56b3.js";import"./Overlay.07d52eac.js";import"./contains.3362c067.js";import"./usePopperMarginModifiers.a23c4ed0.js";import"./useWaitForDOMRef.dbc78690.js";import"./Fade.476b0ff7.js";import"./IconButton.81618d29.js";import"./ButtonBase.49fff140.js";import"./Link.fd8fbf97.js";import"./Button.855954d3.js";const sr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"small-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"medium-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"large-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}}}}},title:"UI/UserCard",component:s},r=n=>{var t;const{data:e}=c();let o=e==null?void 0:e.ownerId;return o===l.toString()&&(o=void 0),U(C,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(s,{ownerId:(t=n.ownerId)!=null?t:o,...n})]})},u=r.bind({});u.args={size:i,avatarSize:"SMALL"};const A=r.bind({});A.args={size:d};const I=r.bind({});I.args={size:m};const g=r.bind({});g.args={size:p};const ir=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{u as Avatar,g as LargeUserCard,I as MediumUserCard,A as SmallUserCard,ir as __namedExportsOrder,sr as default};

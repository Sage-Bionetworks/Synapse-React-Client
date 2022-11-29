import{b as i}from"./UserCard.b277597c.js";import{ao as s,i as d,w as m,an as p,ar as l}from"./SynapseConstants.290eab74.js";import{aD as c}from"./index.20c1822f.js";import{a as U,F as C,j as a}from"./jsx-runtime.23bcdc09.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.3d0604ac.js";import"./SkeletonTable.7a076046.js";import"./times.e12d7030.js";import"./toInteger.dfc8aa00.js";import"./isSymbol.017a619a.js";import"./isArray.1d31a80d.js";import"./Button.9cfa11f8.js";import"./index.35ce73ec.js";import"./Skeleton.93cf864e.js";import"./styled.8da6873c.js";import"./emotion-react.browser.esm.599684c1.js";import"./IconSvg.1982fde5.js";import"./TransitionGroupContext.b9a824ce.js";import"./Tooltip.cfbb546f.js";import"./createSvgIcon.e3e4a251.js";import"./useTheme.26e47b20.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./utils.2eab32fe.js";import"./InfoOutlined.61048ddd.js";import"./ToastMessage.52d73997.js";import"./FullWidthAlert.465c2909.js";import"./Alert.03ebe4a7.js";import"./hook.81302421.js";import"./createWithBsPrefix.26026502.js";import"./divWithClassName.fcb14682.js";import"./Typography.17940352.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.5a455c2a.js";import"./Overlay.177b926b.js";import"./contains.e26e64f1.js";import"./usePopperMarginModifiers.2032f396.js";import"./useWaitForDOMRef.1d1fe719.js";import"./Fade.5c08504a.js";import"./Link.e49ccf51.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";const dr={parameters:{storySource:{source:`import React from 'react'
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

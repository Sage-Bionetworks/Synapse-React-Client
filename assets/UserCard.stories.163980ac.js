import{b as i}from"./UserCard.ecc0d7d9.js";import{ao as s,i as d,w as m,an as p,ar as l}from"./SynapseConstants.290eab74.js";import{aD as c}from"./index.a70ddfd8.js";import{a as U,F as C,j as a}from"./jsx-runtime.f5d212d1.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.2e6c109a.js";import"./SkeletonTable.0d96f34c.js";import"./times.3c390ae7.js";import"./toInteger.66a06a81.js";import"./isSymbol.4571438c.js";import"./isArray.b1617f44.js";import"./Button.8170df20.js";import"./index.35ce73ec.js";import"./Skeleton.f056e7cd.js";import"./styled.f405056b.js";import"./emotion-react.browser.esm.6d1cbddb.js";import"./IconSvg.379fb95f.js";import"./TransitionGroupContext.7656eb12.js";import"./Tooltip.b3e9245c.js";import"./createSvgIcon.2626c7dc.js";import"./useTheme.e9ed9b1c.js";import"./index.9c9305ea.js";import"./iframe.89bb5feb.js";import"./utils.0b8153da.js";import"./InfoOutlined.1ca50192.js";import"./ToastMessage.276b1811.js";import"./FullWidthAlert.c92729a8.js";import"./Alert.257c6bb8.js";import"./hook.70591bc2.js";import"./createWithBsPrefix.91f140d5.js";import"./divWithClassName.5b1e6cb1.js";import"./Typography.513a1f2d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.7666cadc.js";import"./Overlay.9ab1c420.js";import"./contains.ea465217.js";import"./usePopperMarginModifiers.35995d93.js";import"./useWaitForDOMRef.e98911da.js";import"./Link.3fccb4a8.js";import"./Button.25b7a851.js";import"./ButtonBase.5d7dfd7c.js";const sr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"small-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"medium-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}},"large-user-card":{startLoc:{col:50,line:19},endLoc:{col:1,line:35},startBody:{col:50,line:19},endBody:{col:1,line:35}}}}},title:"UI/UserCard",component:i},r=n=>{var t;const{data:e}=c();let o=e==null?void 0:e.ownerId;return o===l.toString()&&(o=void 0),U(C,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(i,{ownerId:(t=n.ownerId)!=null?t:o,...n})]})},u=r.bind({});u.args={size:s,avatarSize:"SMALL"};const A=r.bind({});A.args={size:d};const I=r.bind({});I.args={size:m};const g=r.bind({});g.args={size:p};const dr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{u as Avatar,g as LargeUserCard,I as MediumUserCard,A as SmallUserCard,dr as __namedExportsOrder,sr as default};

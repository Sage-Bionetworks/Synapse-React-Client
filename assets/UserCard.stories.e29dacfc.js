import{b as i}from"./UserCard.9a1acc17.js";import{ao as s,i as d,w as m,an as p,ar as l}from"./SynapseConstants.290eab74.js";import{aD as c}from"./index.96fee529.js";import{a as U,F as C,j as a}from"./jsx-runtime.0721b30f.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.343b69cc.js";import"./SkeletonTable.12d4458e.js";import"./times.938b95b0.js";import"./toInteger.0c46f3eb.js";import"./isSymbol.2a2fd570.js";import"./isArray.0e868c61.js";import"./Button.c6170972.js";import"./index.35ce73ec.js";import"./Skeleton.bcaf6f06.js";import"./styled.b8cd841c.js";import"./emotion-react.browser.esm.4fe99834.js";import"./IconSvg.69d2b3a3.js";import"./TransitionGroupContext.536780f6.js";import"./Tooltip.95391ddc.js";import"./createSvgIcon.8972a51f.js";import"./useTheme.210faaa5.js";import"./index.84874f77.js";import"./iframe.d07454b7.js";import"./utils.61962e2e.js";import"./InfoOutlined.1d86a385.js";import"./ToastMessage.c03bf450.js";import"./FullWidthAlert.f41552e4.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./Typography.f634a419.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.22a08d1e.js";import"./Overlay.d556696c.js";import"./contains.4df2422e.js";import"./usePopperMarginModifiers.eef01d88.js";import"./useWaitForDOMRef.65459bf1.js";import"./Fade.54a45bb0.js";import"./Link.38c396f1.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";const dr={parameters:{storySource:{source:`import React from 'react'
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

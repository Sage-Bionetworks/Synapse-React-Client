import{U as s}from"./UserCard.f776b74e.js";import{an as i,h as d,v as m,am as l,ar as p}from"./SynapseConstants.b6aa8bf5.js";import{a7 as c}from"./index.91a9706e.js";import{a as U,F as C,j as a}from"./jsx-runtime.02fcd003.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.5b716459.js";import"./SkeletonTable.8183c23e.js";import"./times.36513370.js";import"./toInteger.3466557e.js";import"./isSymbol.b2b689d7.js";import"./isArray.404de5ac.js";import"./Button.bd4bae0e.js";import"./index.35ce73ec.js";import"./Skeleton.1c99f826.js";import"./styled.094a3a2c.js";import"./emotion-react.browser.esm.a24af408.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./IconSvg.c783b477.js";import"./SvgIcon.66ad72a0.js";import"./Tooltip.977ea0b9.js";import"./createSvgIcon.37b7d2f8.js";import"./utils.62f6c1ea.js";import"./index.0864d1cf.js";import"./iframe.25b1a9fc.js";import"./InfoOutlined.9adbadde.js";import"./ToastMessage.5f109185.js";import"./FullWidthAlert.b9addea3.js";import"./Alert.92a838df.js";import"./createWithBsPrefix.9fcf4917.js";import"./Typography.79e944f5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.446adc13.js";import"./Overlay.712e50d1.js";import"./contains.593a857e.js";import"./usePopperMarginModifiers.417da628.js";import"./useWaitForDOMRef.abb80557.js";const or={parameters:{storySource:{source:`import React from 'react'
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

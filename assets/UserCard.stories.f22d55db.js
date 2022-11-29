import{b as i}from"./UserCard.e6c2a584.js";import{ao as s,i as d,w as m,an as p,ar as l}from"./SynapseConstants.290eab74.js";import{aD as c}from"./index.69555c85.js";import{a as U,F as C,j as a}from"./jsx-runtime.25f1da80.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.64748781.js";import"./SkeletonTable.1d27d75d.js";import"./times.f808a242.js";import"./toInteger.374f3d90.js";import"./isSymbol.8bb90a01.js";import"./isArray.63a07037.js";import"./Button.03ce126b.js";import"./index.35ce73ec.js";import"./Skeleton.264ae24e.js";import"./styled.61c2cdbd.js";import"./emotion-react.browser.esm.de1a23fd.js";import"./IconSvg.562c1909.js";import"./TransitionGroupContext.d4abce3c.js";import"./Tooltip.dc683be6.js";import"./createSvgIcon.32db2a88.js";import"./useTheme.50dbca56.js";import"./index.09872124.js";import"./iframe.89c4ca26.js";import"./utils.653016b9.js";import"./InfoOutlined.d976b6d4.js";import"./ToastMessage.679431d9.js";import"./FullWidthAlert.ce239055.js";import"./Alert.c8ecdb26.js";import"./hook.865145d2.js";import"./createWithBsPrefix.2ba1d399.js";import"./divWithClassName.8bbfe55a.js";import"./Typography.787f3df0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b035a11c.js";import"./Overlay.f9384c09.js";import"./contains.b82313ef.js";import"./usePopperMarginModifiers.6c0d1965.js";import"./useWaitForDOMRef.e68dcf6e.js";import"./Fade.5af2af2d.js";import"./Link.7320b292.js";import"./Button.71735648.js";import"./ButtonBase.e51b431c.js";const dr={parameters:{storySource:{source:`import React from 'react'
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

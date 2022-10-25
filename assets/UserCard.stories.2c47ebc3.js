import{U as a}from"./UserCard.89349cd4.js";import{bt as s,v as i,ax as m,bs as d,aa as p}from"./index.444e3572.js";import{j as l}from"./jsx-runtime.ed0bc2e8.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.82604258.js";import"./SkeletonTable.a364440a.js";import"./times.12135b85.js";import"./toInteger.c1671d6c.js";import"./isSymbol.3ae1367c.js";import"./isArray.69d02dee.js";import"./Button.ead7d59a.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.d97a08a6.js";import"./withStyles.5eea39d5.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./SvgIcon.1c3fe3f1.js";import"./utils.31a80d71.js";import"./index.68bd2905.js";import"./iframe.1c77586e.js";import"./makeStyles.83c340c0.js";import"./IconSvg.af973a0c.js";import"./InfoOutlined.10c65527.js";import"./ToastMessage.f3c1e08b.js";import"./FullWidthAlert.7478a55e.js";import"./Typography.935cd23d.js";import"./Alert.e70a23c6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e6e71b68.js";import"./Overlay.d35a38e4.js";import"./useWaitForDOMRef.2b50b75b.js";import"./usePopperMarginModifiers.2ccc8168.js";const X={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { UserCard } from './UserCard'
import {
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
  return (
    <UserCard
      {...args}
      ownerId={args.ownerId ?? currentUserProfile?.ownerId ?? '273960'}
    />
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
`,locationsMap:{avatar:{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"small-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"medium-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"large-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}}}}},title:"UI/UserCard",component:a},r=o=>{var t,n;const{data:e}=p();return l(a,{...o,ownerId:(n=(t=o.ownerId)!=null?t:e==null?void 0:e.ownerId)!=null?n:"273960"})},c=r.bind({});c.args={size:s,avatarSize:"SMALL"};const U=r.bind({});U.args={size:i};const C=r.bind({});C.args={size:m};const A=r.bind({});A.args={size:d};const Y=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{c as Avatar,A as LargeUserCard,C as MediumUserCard,U as SmallUserCard,Y as __namedExportsOrder,X as default};

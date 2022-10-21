import{U as a}from"./UserCard.7296873e.js";import{bt as s,v as i,ax as m,bs as d,aa as p}from"./index.df4d7189.js";import{j as l}from"./jsx-runtime.a232804d.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.5c84b271.js";import"./SkeletonTable.42b69551.js";import"./times.94f8f16d.js";import"./toInteger.99850a56.js";import"./isSymbol.af0f15b0.js";import"./isArray.a5a56f48.js";import"./Button.6d51f091.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.e3b72fa9.js";import"./withStyles.1db4abc8.js";import"./Tooltip.d38d9e30.js";import"./createSvgIcon.2aaf66cc.js";import"./SvgIcon.885aee5a.js";import"./utils.428c4b7a.js";import"./index.ba62157d.js";import"./iframe.10584503.js";import"./makeStyles.403aaa55.js";import"./IconSvg.7d220ad3.js";import"./InfoOutlined.d81a19b2.js";import"./ToastMessage.b42768ca.js";import"./FullWidthAlert.5abd6e7a.js";import"./Typography.9247f57a.js";import"./Alert.05377b39.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.42db352a.js";import"./Overlay.2735c2ff.js";import"./useWaitForDOMRef.b691e8e9.js";import"./usePopperMarginModifiers.2b01b6ad.js";const X={parameters:{storySource:{source:`import React from 'react'
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

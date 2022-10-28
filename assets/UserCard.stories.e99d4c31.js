import{U as a}from"./UserCard.0ebe4f67.js";import{an as s,h as i,v as m,am as d}from"./SynapseConstants.b6aa8bf5.js";import{Y as p}from"./index.3643f9f4.js";import{j as l}from"./jsx-runtime.f2f98a5a.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.31ff040b.js";import"./SkeletonTable.ca71276a.js";import"./times.408344a9.js";import"./toInteger.61038943.js";import"./isSymbol.b0b5d283.js";import"./isArray.7423227f.js";import"./Button.498cd291.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.756bfafa.js";import"./withStyles.c893a568.js";import"./Tooltip.1481a07d.js";import"./createSvgIcon.6b81a395.js";import"./SvgIcon.aef32627.js";import"./utils.b0185ad4.js";import"./index.9f26ffd6.js";import"./iframe.3db3203a.js";import"./makeStyles.b901d8a5.js";import"./IconSvg.9332b201.js";import"./InfoOutlined.23b933db.js";import"./ToastMessage.75433d78.js";import"./FullWidthAlert.007c198f.js";import"./Typography.32e9e32f.js";import"./Alert.df9cc8b6.js";import"./createWithBsPrefix.859b1c88.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.cb398276.js";import"./Overlay.792e9294.js";import"./contains.afe7b6ba.js";import"./usePopperMarginModifiers.4a57f45c.js";import"./useWaitForDOMRef.0d0b5d6b.js";const $={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"small-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"medium-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"large-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}}}}},title:"UI/UserCard",component:a},r=o=>{var t,n;const{data:e}=p();return l(a,{...o,ownerId:(n=(t=o.ownerId)!=null?t:e==null?void 0:e.ownerId)!=null?n:"273960"})},c=r.bind({});c.args={size:s,avatarSize:"SMALL"};const U=r.bind({});U.args={size:i};const C=r.bind({});C.args={size:m};const A=r.bind({});A.args={size:d};const rr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{c as Avatar,A as LargeUserCard,C as MediumUserCard,U as SmallUserCard,rr as __namedExportsOrder,$ as default};

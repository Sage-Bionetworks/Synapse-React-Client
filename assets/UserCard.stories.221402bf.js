import{U as a}from"./UserCard.73a822b2.js";import{an as s,h as i,v as m,am as d}from"./SynapseConstants.b6aa8bf5.js";import{Y as p}from"./index.e08ca228.js";import{j as l}from"./jsx-runtime.4eaffca0.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.2759b8ec.js";import"./SkeletonTable.862e92ab.js";import"./times.025024a4.js";import"./toInteger.27d529dc.js";import"./isSymbol.fff1a0c2.js";import"./isArray.33858a1d.js";import"./Button.9f15dabf.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.3c162426.js";import"./withStyles.21c7e80a.js";import"./Tooltip.baf92203.js";import"./createSvgIcon.d152a531.js";import"./SvgIcon.4d40d0c3.js";import"./utils.2281a9d6.js";import"./index.48154df0.js";import"./iframe.f6ed0eb4.js";import"./makeStyles.c1994d74.js";import"./IconSvg.9da8b4b8.js";import"./InfoOutlined.489c1b42.js";import"./ToastMessage.a51dddf9.js";import"./FullWidthAlert.e49b83f6.js";import"./Typography.95636964.js";import"./Alert.27b9a701.js";import"./createWithBsPrefix.735cbed5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.93f128ba.js";import"./Overlay.9f8bd32d.js";import"./contains.589a7733.js";import"./usePopperMarginModifiers.ec086152.js";import"./useWaitForDOMRef.26d65963.js";const $={parameters:{storySource:{source:`import React from 'react'
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

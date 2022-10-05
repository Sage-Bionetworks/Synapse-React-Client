import{b as a}from"./UserCard.2d2cc6f4.js";import{bm as s,o as i,ar as m,bl as p,a4 as d}from"./index.a1936379.js";import{j as l}from"./jsx-runtime.af56d2f4.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.992e7a95.js";import"./SkeletonTable.88eb5d4e.js";import"./times.41b100ff.js";import"./toInteger.66d32cd8.js";import"./isSymbol.691d7973.js";import"./isArray.05e742d7.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.288689e2.js";import"./Skeleton.b1045233.js";import"./withStyles.95bfae1f.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.4363549c.js";import"./createSvgIcon.c99f3a66.js";import"./SvgIcon.fd305cf0.js";import"./slicedToArray.e72f11da.js";import"./index.34222f2e.js";import"./iframe.51f26e37.js";import"./useTheme.f557cee5.js";import"./Transition.66d770ee.js";import"./makeStyles.0eb241f0.js";import"./IconSvg.c0856984.js";import"./InfoOutlined.8f86cf66.js";import"./ToastMessage.8993ec69.js";import"./FullWidthAlert.e0d9cdf3.js";import"./Typography.add999d3.js";import"./Alert.b7090dbd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fe0a6f5d.js";import"./Overlay.a4a42f09.js";import"./useWaitForDOMRef.7c7cad70.js";import"./usePopperMarginModifiers.abd0b162.js";const rr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"small-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"medium-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"large-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}}}}},title:"UI/UserCard",component:a},r=o=>{var t,n;const{data:e}=d();return l(a,{...o,ownerId:(n=(t=o.ownerId)!=null?t:e==null?void 0:e.ownerId)!=null?n:"273960"})},c=r.bind({});c.args={size:s,avatarSize:"SMALL"};const U=r.bind({});U.args={size:i};const C=r.bind({});C.args={size:m};const A=r.bind({});A.args={size:p};const er=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{c as Avatar,A as LargeUserCard,C as MediumUserCard,U as SmallUserCard,er as __namedExportsOrder,rr as default};

import{U as a}from"./UserCard.8a53ad4c.js";import{an as s,h as i,v as m,am as d}from"./SynapseConstants.b6aa8bf5.js";import{Y as p}from"./index.733ef2d4.js";import{j as l}from"./jsx-runtime.1d4416c9.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.027a3c44.js";import"./SkeletonTable.944ff781.js";import"./times.c10c287f.js";import"./toInteger.20441ff0.js";import"./isSymbol.48f5f8d1.js";import"./isArray.cf5064fd.js";import"./Button.52817769.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.5fb82d71.js";import"./withStyles.d9b674b1.js";import"./Tooltip.514cbe94.js";import"./createSvgIcon.1518894e.js";import"./SvgIcon.1ce682e0.js";import"./utils.12e9eddb.js";import"./index.b4915227.js";import"./iframe.6e2e208e.js";import"./makeStyles.0711e4e8.js";import"./IconSvg.a5337a6a.js";import"./InfoOutlined.bc9acc28.js";import"./ToastMessage.97b225d1.js";import"./FullWidthAlert.fd7cf951.js";import"./Typography.8752acbc.js";import"./Alert.a029b8a7.js";import"./createWithBsPrefix.e9487138.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b31d8e69.js";import"./Overlay.12b5a369.js";import"./contains.ed3c5fde.js";import"./usePopperMarginModifiers.ae1274b1.js";import"./useWaitForDOMRef.9692dd43.js";const $={parameters:{storySource:{source:`import React from 'react'
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

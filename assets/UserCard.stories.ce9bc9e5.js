import{b as a}from"./UserCard.b0df8a65.js";import{bn as s,o as i,as as m,bm as p,a5 as d}from"./index.3873d60b.js";import{j as l}from"./jsx-runtime.f5c871f2.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.81cd725e.js";import"./SkeletonTable.9e1bb6d3.js";import"./times.22265925.js";import"./toInteger.53bb9ac6.js";import"./isSymbol.6fc733ac.js";import"./isArray.8eaae8ca.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.de05f508.js";import"./Skeleton.4bed26ee.js";import"./withStyles.b9d3b2a9.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.0cafe8cc.js";import"./createSvgIcon.c8dc0ea7.js";import"./SvgIcon.0b86e17f.js";import"./slicedToArray.e72f11da.js";import"./index.50924579.js";import"./iframe.0956ae8e.js";import"./useTheme.b6731b0b.js";import"./Transition.a0ca267e.js";import"./makeStyles.c6d0cd33.js";import"./IconSvg.dc985627.js";import"./InfoOutlined.51194332.js";import"./ToastMessage.8bfc5f39.js";import"./FullWidthAlert.76b02069.js";import"./Typography.d381f643.js";import"./Alert.b56cd3e7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.a603395d.js";import"./Overlay.69580c44.js";import"./useWaitForDOMRef.a6ce9c71.js";import"./usePopperMarginModifiers.5f820ad2.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

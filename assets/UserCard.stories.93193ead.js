import{U as a}from"./UserCard.4c7789bc.js";import{bs as s,v as i,ax as m,br as d,aa as p}from"./index.a3e4acf8.js";import{j as l}from"./jsx-runtime.1d2001c8.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.42575155.js";import"./SkeletonTable.b6dfba04.js";import"./times.665c5ee8.js";import"./toInteger.4e0bd265.js";import"./isSymbol.ce5fe5c9.js";import"./isArray.a059945b.js";import"./Button.850c0905.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.b5215bc5.js";import"./withStyles.706b11e4.js";import"./Tooltip.76084c23.js";import"./createSvgIcon.6133e741.js";import"./SvgIcon.3fc47b81.js";import"./utils.b5696502.js";import"./index.43d111f8.js";import"./iframe.11c071de.js";import"./makeStyles.c53704bf.js";import"./IconSvg.d9bd3780.js";import"./InfoOutlined.31363277.js";import"./ToastMessage.8ffb9391.js";import"./FullWidthAlert.6b98829c.js";import"./Typography.e119af63.js";import"./Alert.cbdcee9e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.93061bc8.js";import"./Overlay.1b6445a2.js";import"./useWaitForDOMRef.9ab82534.js";import"./usePopperMarginModifiers.e6ab3cb1.js";const X={parameters:{storySource:{source:`import React from 'react'
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

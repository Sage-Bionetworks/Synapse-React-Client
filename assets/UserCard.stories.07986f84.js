import{U as a}from"./UserCard.ece400b9.js";import{an as s,h as i,v as m,am as d}from"./SynapseConstants.b6aa8bf5.js";import{Y as p}from"./index.97694b3a.js";import{j as l}from"./jsx-runtime.e32e0509.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.aaebe1d6.js";import"./SkeletonTable.4d088d12.js";import"./times.14f43a6f.js";import"./toInteger.57b1f05f.js";import"./isSymbol.e91009b1.js";import"./isArray.f12d1068.js";import"./Button.9a335f28.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.4b3eac05.js";import"./withStyles.43181c03.js";import"./Tooltip.e08987f2.js";import"./createSvgIcon.3a3703dd.js";import"./SvgIcon.6a1c92b0.js";import"./utils.93cc3c4b.js";import"./index.5045cbed.js";import"./iframe.83901080.js";import"./makeStyles.46d23ebd.js";import"./IconSvg.c4d27427.js";import"./InfoOutlined.f22ec2f2.js";import"./ToastMessage.80ffeafc.js";import"./FullWidthAlert.2f8dcb3c.js";import"./Typography.c79b8528.js";import"./Alert.1890d96c.js";import"./createWithBsPrefix.eb076d55.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.44a1c424.js";import"./Overlay.6daf49cd.js";import"./contains.72bfd5e5.js";import"./usePopperMarginModifiers.82fc73ef.js";import"./useWaitForDOMRef.7cce2362.js";const $={parameters:{storySource:{source:`import React from 'react'
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

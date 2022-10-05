import{b as a}from"./UserCard.cd843c54.js";import{bm as s,o as i,ar as m,bl as p,a4 as d}from"./index.5bc63636.js";import{j as l}from"./jsx-runtime.53ec3a99.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.65395139.js";import"./SkeletonTable.32a35c51.js";import"./times.3460d620.js";import"./toInteger.82734360.js";import"./isSymbol.c005a6aa.js";import"./isArray.afa3346a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.aa21b764.js";import"./Skeleton.9def93da.js";import"./withStyles.2fbec1dd.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.6a46e0c0.js";import"./createSvgIcon.80ece60c.js";import"./SvgIcon.0bcbfb3f.js";import"./slicedToArray.e72f11da.js";import"./index.c935dff9.js";import"./iframe.707dd820.js";import"./useTheme.f82ec4e5.js";import"./Transition.feec5299.js";import"./makeStyles.0544ad0e.js";import"./IconSvg.21136110.js";import"./InfoOutlined.72aa66a9.js";import"./ToastMessage.d2af582b.js";import"./FullWidthAlert.a76adc9d.js";import"./Typography.d6d23e6c.js";import"./Alert.89d8effb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.84a1f40d.js";import"./Overlay.973a4260.js";import"./useWaitForDOMRef.40b36c07.js";import"./usePopperMarginModifiers.e458f391.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

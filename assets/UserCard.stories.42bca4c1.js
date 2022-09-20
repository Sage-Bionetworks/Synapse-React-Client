import{a}from"./UserCard.10579c32.js";import{aG as s,l as i,M as m,aF as d,c5 as p}from"./index.84210d7d.js";import{j as l}from"./jsx-runtime.00d70968.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.b4ef3e04.js";import"./times.7d6137c1.js";import"./toInteger.ada06091.js";import"./toString.d84aaeca.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.fda23eee.js";import"./Skeleton.99b24529.js";import"./withStyles.5fe35516.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./SvgIcon.e37b9412.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./Transition.8278edb2.js";import"./makeStyles.45e8b79c.js";import"./IconSvg.7fcfdfd8.js";import"./InfoOutlined.60e019a4.js";import"./ToastMessage.30a6258e.js";import"./FullWidthAlert.e63d41e9.js";import"./Typography.868473dc.js";import"./Alert.b74d1cfd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.eba72690.js";import"./Overlay.66930c7c.js";import"./useWaitForDOMRef.97759fd7.js";import"./usePopperMarginModifiers.fba68454.js";import"./assert.9b56e417.js";import"./iframe.c18f9f1c.js";const $={parameters:{storySource:{source:`import React from 'react'
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

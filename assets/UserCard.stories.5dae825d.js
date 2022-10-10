import{U as a}from"./UserCard.3e52a486.js";import{br as s,v as i,aw as m,bq as p,a9 as d}from"./index.68699958.js";import{j as l}from"./jsx-runtime.416d8946.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.30c66d8a.js";import"./SkeletonTable.83d9d8ad.js";import"./times.e2ae8ec1.js";import"./toInteger.e9d9a3f9.js";import"./isSymbol.110be719.js";import"./isArray.48d04961.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.34feb441.js";import"./Skeleton.102fc0c3.js";import"./withStyles.c595751b.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.032eb6cc.js";import"./createSvgIcon.55245163.js";import"./SvgIcon.95ef1484.js";import"./slicedToArray.e72f11da.js";import"./index.9d682600.js";import"./iframe.51e9009e.js";import"./useTheme.512d0ce3.js";import"./Transition.b4776308.js";import"./makeStyles.c2ff9465.js";import"./IconSvg.e25d1511.js";import"./InfoOutlined.a31d8d84.js";import"./ToastMessage.644c1427.js";import"./FullWidthAlert.a1bdb9b5.js";import"./Typography.5433f83a.js";import"./Alert.a75301f2.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.89dba59c.js";import"./Overlay.651ab348.js";import"./useWaitForDOMRef.b3b34f09.js";import"./usePopperMarginModifiers.71f755a4.js";const rr={parameters:{storySource:{source:`import React from 'react'
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

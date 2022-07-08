import{b as a}from"./UserCard.60c6e9c5.js";import{aL as s,C as i,M as m,aK as p,c3 as d}from"./index.e94f1e56.js";import{j as l}from"./jsx-runtime.2e925369.js";import"./getEndpoint.0de7fccf.js";import"./index.es.82d55a6a.js";import"./index.06f4a415.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.9c2d923f.js";import"./times.e9ba47eb.js";import"./toInteger.ea37b69f.js";import"./toNumber.bfb36d17.js";import"./isObject.97b5908e.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.c5966bcb.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./Skeleton.bcb4a49e.js";import"./IconSvg.160dd61c.js";import"./SvgIcon.f6f6da7c.js";import"./utils.38c8d0df.js";import"./useTheme.990cd45a.js";import"./makeStyles.9976e655.js";import"./createSvgIcon.88863916.js";import"./InfoOutlined.21bf844a.js";import"./Clear.eb427cfa.js";import"./ToastMessage.87e58df2.js";import"./FullWidthAlert.96be848e.js";import"./Typography.7bd5dd17.js";import"./debounce.b9f00509.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ce7b286a.js";import"./toString.41faaa42.js";import"./Overlay.4a980e95.js";import"./useWaitForDOMRef.67fdb4e5.js";import"./usePopperMarginModifiers.ee427a81.js";import"./assert.f88a2d20.js";import"./iframe.a56f5c43.js";import"./index.8cde812d.js";var tr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{avatar:{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"small-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"medium-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"large-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}}}}},title:"UI/UserCard",component:a};const r=e=>{var t,n;const{data:o}=d();return l(a,{...e,ownerId:(n=(t=e.ownerId)!=null?t:o==null?void 0:o.ownerId)!=null?n:"273960"})},c=r.bind({});c.args={size:s,avatarSize:"SMALL"};const U=r.bind({});U.args={size:i};const C=r.bind({});C.args={size:m};const A=r.bind({});A.args={size:p};const nr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{c as Avatar,A as LargeUserCard,C as MediumUserCard,U as SmallUserCard,nr as __namedExportsOrder,tr as default};
//# sourceMappingURL=UserCard.stories.b1105e91.js.map

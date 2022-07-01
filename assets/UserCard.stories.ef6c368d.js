import{b as a}from"./UserCard.07b3e3b1.js";import{aJ as i,L as s,M as m,aI as p}from"./index.cdf98c81.js";import{P as d}from"./useUserBundle.1e187889.js";import{j as l}from"./jsx-runtime.2e925369.js";import"./getEndpoint.0de7fccf.js";import"./index.es.82d55a6a.js";import"./index.06f4a415.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.874b8571.js";import"./times.0a9ef28a.js";import"./_Uint8Array.692793fe.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./toInteger.9c26e41e.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./Skeleton.bf1489f0.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./toConsumableArray.5f669646.js";import"./withStyles.4f64abe1.js";import"./IconSvg.d5022c82.js";import"./SvgIcon.1f1b3522.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./Transition.f54f11c8.js";import"./makeStyles.5f6bad01.js";import"./createSvgIcon.53013205.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";import"./ToastMessage.574c0fe0.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./index.f252d424.js";import"./debounce.6a99f8f3.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Button.77571428.js";import"./createWithBsPrefix.f7715523.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4eca3697.js";import"./Overlay.5ce67f19.js";import"./useWaitForDOMRef.088a2ede.js";import"./usePopperMarginModifiers.09a60569.js";import"./FormLabel.a635baa2.js";import"./assert.45ccb9fa.js";import"./iframe.dedbd728.js";import"./index.8cde812d.js";var dr={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { UserCard } from './UserCard'
import {
  AVATAR,
  LARGE_USER_CARD,
  MEDIUM_USER_CARD,
  SMALL_USER_CARD,
} from '../utils/SynapseConstants'
import { useGetCurrentUserProfile } from '../utils/hooks/SynapseAPI/useUserBundle'

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
`,locationsMap:{avatar:{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"small-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"medium-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}},"large-user-card":{startLoc:{col:50,line:18},endLoc:{col:1,line:26},startBody:{col:50,line:18},endBody:{col:1,line:26}}}}},title:"UI/UserCard",component:a};const r=t=>{var e,n;const{data:o}=d();return l(a,{...t,ownerId:(n=(e=t.ownerId)!=null?e:o==null?void 0:o.ownerId)!=null?n:"273960"})},c=r.bind({});c.args={size:i,avatarSize:"SMALL"};const U=r.bind({});U.args={size:s};const C=r.bind({});C.args={size:m};const A=r.bind({});A.args={size:p};const lr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{c as Avatar,A as LargeUserCard,C as MediumUserCard,U as SmallUserCard,lr as __namedExportsOrder,dr as default};
//# sourceMappingURL=UserCard.stories.ef6c368d.js.map

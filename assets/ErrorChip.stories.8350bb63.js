import{E as s}from"./ErrorChip.2b68e6ed.js";import{f as o,a0 as i,S as c}from"./index.004e53d6.js";import{j as n}from"./jsx-runtime.30b0b063.js";import"./Tooltip.f326ea8a.js";import"./styled.4350a8f3.js";import"./SvgIcon.a1d78dff.js";import"./useTheme.bbb702a0.js";import"./index.a3b83451.js";import"./iframe.7f20f630.js";import"./TransitionGroupContext.4dd5d6a9.js";import"./ButtonBase.32a6d369.js";import"./emotion-react.browser.esm.f592d4ba.js";import"./IconSvg.9b38face.js";import"./SynapseConstants.aef18750.js";import"./Button.4f0daaa4.js";import"./FullWidthAlert.12957b45.js";import"./hook.82358120.js";import"./createWithBsPrefix.67525ed1.js";import"./divWithClassName.fc6b9e1a.js";import"./index.35ce73ec.js";import"./Typography.e0f3806f.js";import"./Fade.13693e7f.js";import"./isArray.1ceec0fc.js";import"./getEndpoint.f1f195f5.js";import"./IconButton.32d1d9ea.js";import"./Link.671fdc30.js";import"./Button.9f139960.js";const q={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ErrorChip from './ErrorChip'
import { SynapseClientError } from '../../utils/SynapseClientError'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../utils/SynapseContext'

export default {
  title: 'Components/ErrorChip',
  component: ErrorChip,
  argTypes: {},
} as ComponentMeta<typeof ErrorChip>

const Template: ComponentStory<typeof ErrorChip> = args => (
  <SynapseContextConsumer>
    {context => (
      <SynapseContextProvider
        synapseContext={{
          ...context,
          accessToken: args.isAuthenticated
            ? context.accessToken || 'fake token'
            : undefined,
        }}
      >
        <ErrorChip {...args} />
      </SynapseContextProvider>
    )}
  </SynapseContextConsumer>
)

const NotSignedInError = new SynapseClientError(
  401,
  'You must be signed in to access this resource.',
  '',
)

export const NotSignedIn = Template.bind({})
NotSignedIn.args = {
  chipText: 'syn1234567',
  error: NotSignedInError,
  isAuthenticated: false,
}

const NoAccessError = new SynapseClientError(
  403,
  'You do not have READ access on this entity.',
  '',
)

export const NoAccess = Template.bind({})

NoAccess.args = {
  chipText: 'syn1234567',
  error: NoAccessError,
  isAuthenticated: true,
}

const NotFoundError = new SynapseClientError(
  404,
  'The entity does not exist.',
  '',
)

export const NotFound = Template.bind({})

NotFound.args = {
  chipText: 'syn1234567',
  error: NotFoundError,
  isAuthenticated: true,
}
`,locationsMap:{"not-signed-in":{startLoc:{col:51,line:17},endLoc:{col:1,line:32},startBody:{col:51,line:17},endBody:{col:1,line:32}},"no-access":{startLoc:{col:51,line:17},endLoc:{col:1,line:32},startBody:{col:51,line:17},endBody:{col:1,line:32}},"not-found":{startLoc:{col:51,line:17},endLoc:{col:1,line:32},startBody:{col:51,line:17},endBody:{col:1,line:32}}}}},title:"Components/ErrorChip",component:s,argTypes:{}},t=e=>n(i,{children:r=>n(c,{synapseContext:{...r,accessToken:e.isAuthenticated?r.accessToken||"fake token":void 0},children:n(s,{...e})})}),p=new o(401,"You must be signed in to access this resource.",""),a=t.bind({});a.args={chipText:"syn1234567",error:p,isAuthenticated:!1};const d=new o(403,"You do not have READ access on this entity.",""),m=t.bind({});m.args={chipText:"syn1234567",error:d,isAuthenticated:!0};const l=new o(404,"The entity does not exist.",""),y=t.bind({});y.args={chipText:"syn1234567",error:l,isAuthenticated:!0};const z=["NotSignedIn","NoAccess","NotFound"];export{m as NoAccess,y as NotFound,a as NotSignedIn,z as __namedExportsOrder,q as default};

import{E as s}from"./ErrorChip.ab8c6b0c.js";import{f as o,a0 as i,S as c}from"./index.bb7b660b.js";import{j as n}from"./jsx-runtime.590681cd.js";import"./Tooltip.0f7aeb46.js";import"./styled.1c864c13.js";import"./SvgIcon.01f2428a.js";import"./useTheme.fa81c060.js";import"./index.220fbbb9.js";import"./iframe.d3c6f1d5.js";import"./TransitionGroupContext.e7de7ea1.js";import"./ButtonBase.c831f7af.js";import"./emotion-react.browser.esm.a07d05d9.js";import"./IconSvg.88997e16.js";import"./SynapseConstants.aef18750.js";import"./Button.d3c811d3.js";import"./FullWidthAlert.8cff24d3.js";import"./hook.5f699942.js";import"./createWithBsPrefix.4b46c4d7.js";import"./divWithClassName.638b701c.js";import"./index.35ce73ec.js";import"./Typography.62f204bb.js";import"./Fade.dfa4b9be.js";import"./isArray.b759bc77.js";import"./getEndpoint.f1f195f5.js";import"./IconButton.7622d68d.js";import"./Link.3f8a0a55.js";import"./Button.6aee65d4.js";const q={parameters:{storySource:{source:`import React from 'react'
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

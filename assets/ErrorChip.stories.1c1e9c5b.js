import{E as s}from"./ErrorChip.fe210de4.js";import{f as o,a0 as i,S as c}from"./index.0297a0cb.js";import{j as n}from"./jsx-runtime.76b41102.js";import"./Tooltip.40200d96.js";import"./styled.0442482c.js";import"./SvgIcon.7ad855dc.js";import"./useTheme.6368534f.js";import"./index.bc4e6645.js";import"./iframe.4ac8fc26.js";import"./TransitionGroupContext.e619b501.js";import"./ButtonBase.bd6b806f.js";import"./emotion-react.browser.esm.cf245846.js";import"./IconSvg.175e5b3e.js";import"./SynapseConstants.71946a35.js";import"./Button.83b95483.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./createWithBsPrefix.ec0f4954.js";import"./divWithClassName.ae433c15.js";import"./index.35ce73ec.js";import"./Typography.6181771e.js";import"./Fade.e47b19bb.js";import"./isArray.8642b77d.js";import"./getEndpoint.f1f195f5.js";import"./IconButton.6adff82e.js";import"./Link.dc8bd0fa.js";import"./Button.09259ba0.js";const q={parameters:{storySource:{source:`import React from 'react'
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

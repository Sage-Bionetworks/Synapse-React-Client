import{E as s}from"./ErrorChip.8bb6b297.js";import{f as o,a0 as i,S as c}from"./index.f6f857f5.js";import{j as n}from"./jsx-runtime.6efef3f0.js";import"./Tooltip.9a185035.js";import"./styled.3d34e36b.js";import"./SvgIcon.3e939805.js";import"./useTheme.2b3579a1.js";import"./index.527b2819.js";import"./iframe.b3705b98.js";import"./TransitionGroupContext.962689fd.js";import"./ButtonBase.42d7166c.js";import"./emotion-react.browser.esm.89334e8c.js";import"./IconSvg.a0ac0502.js";import"./SynapseConstants.aef18750.js";import"./Button.113b0f45.js";import"./FullWidthAlert.87654e2f.js";import"./hook.4287fc8d.js";import"./createWithBsPrefix.dc61fcfa.js";import"./divWithClassName.39d1e3e2.js";import"./index.35ce73ec.js";import"./Typography.a863760e.js";import"./Fade.ee3053ca.js";import"./isArray.ce0fc8e6.js";import"./getEndpoint.f1f195f5.js";import"./IconButton.a32a330b.js";import"./Link.f540f0ea.js";import"./Button.bcc1fc04.js";const q={parameters:{storySource:{source:`import React from 'react'
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

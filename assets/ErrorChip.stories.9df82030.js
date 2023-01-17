import{E as s}from"./ErrorChip.f30fc8e5.js";import{f as o,a0 as i,S as c}from"./index.b3fc12c1.js";import{j as n}from"./jsx-runtime.d6be66a9.js";import"./Tooltip.c89a275a.js";import"./styled.f07e33c6.js";import"./SvgIcon.b9658c5d.js";import"./useTheme.0cbb662e.js";import"./index.3b7d1b21.js";import"./iframe.78dc3b5d.js";import"./TransitionGroupContext.27368eb3.js";import"./ButtonBase.250c511d.js";import"./emotion-react.browser.esm.8203c469.js";import"./IconSvg.67904b39.js";import"./SynapseConstants.aef18750.js";import"./Button.58f5aaec.js";import"./FullWidthAlert.0962330c.js";import"./hook.0245101a.js";import"./createWithBsPrefix.139b0869.js";import"./divWithClassName.f4023709.js";import"./index.35ce73ec.js";import"./Typography.079c4f38.js";import"./Fade.c734522e.js";import"./isArray.3ed41029.js";import"./getEndpoint.f1f195f5.js";import"./IconButton.3b892d3a.js";import"./Link.7f48e2dc.js";import"./Button.bef5272a.js";const q={parameters:{storySource:{source:`import React from 'react'
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

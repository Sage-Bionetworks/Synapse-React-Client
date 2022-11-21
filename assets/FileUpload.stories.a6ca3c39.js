import{F as t}from"./FileUpload.0a5e9b6d.js";import{a as l,F as p,j as e}from"./jsx-runtime.ed9254b2.js";import"./index.09dc23e8.js";import"./index.6a4b5ee2.js";import"./iframe.99e068ca.js";import"./SynapseConstants.290eab74.js";import"./Button.f70cf9a8.js";import"./styled.83fecbff.js";import"./utils.ce7a07fb.js";import"./TransitionGroupContext.335c91bc.js";import"./useTheme.fd34ae61.js";import"./Alert.5c7a73ee.js";import"./hook.8985ff56.js";import"./createWithBsPrefix.a83dfdb4.js";import"./divWithClassName.2b7a9e20.js";import"./index.35ce73ec.js";import"./isArray.9c9c9c65.js";import"./getEndpoint.bb7ded34.js";import"./Link.4533b1ea.js";import"./Typography.754ee5d4.js";import"./Button.3c46c29a.js";import"./ButtonBase.7ff40024.js";import"./emotion-react.browser.esm.c3af8cc3.js";const M={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FileUpload from './FileUpload'

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>

const Template: ComponentStory<typeof FileUpload> = args => (
  <>
    <FileUpload
      uploadCallback={resp => {
        if (resp.success) {
          document.getElementById(
            'demo-upload-file',
          ).textContent = \`Your file "\${resp.resp.fileName}" upload is successful!\`
        } else {
          document.getElementById(
            'demo-upload-file',
          ).textContent = \`Your file upload is unsuccessful!\`
        }
      }}
      {...args}
    />
    <span id={'demo-upload-file'} style={{ marginLeft: '2rem' }}></span>
  </>
)

export const Demo = Template.bind({})
`,locationsMap:{demo:{startLoc:{col:52,line:10},endLoc:{col:1,line:28},startBody:{col:52,line:10},endBody:{col:1,line:28}}}}},title:"Components/FileUpload",component:t},i=n=>l(p,{children:[e(t,{uploadCallback:o=>{o.success?document.getElementById("demo-upload-file").textContent=`Your file "${o.resp.fileName}" upload is successful!`:document.getElementById("demo-upload-file").textContent="Your file upload is unsuccessful!"},...n}),e("span",{id:"demo-upload-file",style:{marginLeft:"2rem"}})]}),S=i.bind({}),T=["Demo"];export{S as Demo,T as __namedExportsOrder,M as default};

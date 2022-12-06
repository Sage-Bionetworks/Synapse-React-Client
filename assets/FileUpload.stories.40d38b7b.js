import{F as t}from"./FileUpload.8127d6f3.js";import{a as l,F as p,j as e}from"./jsx-runtime.076c7567.js";import"./index.53b0413e.js";import"./index.3dd8c113.js";import"./iframe.dc9e500a.js";import"./SynapseConstants.290eab74.js";import"./Button.a0002af7.js";import"./styled.65df53fb.js";import"./Tooltip.b4ed2e26.js";import"./TransitionGroupContext.9598a495.js";import"./useTheme.6d85215f.js";import"./Alert.052d6dda.js";import"./hook.fb6ae99a.js";import"./createWithBsPrefix.125a71ed.js";import"./divWithClassName.d855987b.js";import"./index.35ce73ec.js";import"./Fade.476b0ff7.js";import"./isArray.b8ce881a.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.94aeb20a.js";import"./IconButton.81618d29.js";import"./ButtonBase.49fff140.js";import"./emotion-react.browser.esm.74b64aae.js";import"./Link.fd8fbf97.js";import"./Typography.18dd9738.js";import"./Button.855954d3.js";const _={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:52,line:10},endLoc:{col:1,line:28},startBody:{col:52,line:10},endBody:{col:1,line:28}}}}},title:"Components/FileUpload",component:t},i=n=>l(p,{children:[e(t,{uploadCallback:o=>{o.success?document.getElementById("demo-upload-file").textContent=`Your file "${o.resp.fileName}" upload is successful!`:document.getElementById("demo-upload-file").textContent="Your file upload is unsuccessful!"},...n}),e("span",{id:"demo-upload-file",style:{marginLeft:"2rem"}})]}),N=i.bind({}),$=["Demo"];export{N as Demo,$ as __namedExportsOrder,_ as default};

import{F as t}from"./FileUpload.8f9a5007.js";import{a as p,F as l,j as e}from"./jsx-runtime.76b41102.js";import"./index.0297a0cb.js";import"./index.bc4e6645.js";import"./iframe.4ac8fc26.js";import"./SynapseConstants.71946a35.js";import"./Button.83b95483.js";import"./styled.0442482c.js";import"./Tooltip.40200d96.js";import"./SvgIcon.7ad855dc.js";import"./useTheme.6368534f.js";import"./TransitionGroupContext.e619b501.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./createWithBsPrefix.ec0f4954.js";import"./divWithClassName.ae433c15.js";import"./index.35ce73ec.js";import"./Typography.6181771e.js";import"./Fade.e47b19bb.js";import"./isArray.8642b77d.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.175e5b3e.js";import"./IconButton.6adff82e.js";import"./ButtonBase.bd6b806f.js";import"./emotion-react.browser.esm.cf245846.js";import"./Link.dc8bd0fa.js";import"./Button.09259ba0.js";const N={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:52,line:10},endLoc:{col:1,line:28},startBody:{col:52,line:10},endBody:{col:1,line:28}}}}},title:"Components/FileUpload",component:t},i=n=>p(l,{children:[e(t,{uploadCallback:o=>{o.success?document.getElementById("demo-upload-file").textContent=`Your file "${o.resp.fileName}" upload is successful!`:document.getElementById("demo-upload-file").textContent="Your file upload is unsuccessful!"},...n}),e("span",{id:"demo-upload-file",style:{marginLeft:"2rem"}})]}),$=i.bind({}),h=["Demo"];export{$ as Demo,h as __namedExportsOrder,N as default};

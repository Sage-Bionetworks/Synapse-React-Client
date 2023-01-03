import{F as t}from"./FileUpload.384731d5.js";import{a as p,F as l,j as e}from"./jsx-runtime.abb726e8.js";import"./EntityTypeUtils.68b1ba2e.js";import"./index.2c5f845c.js";import"./iframe.eb3e4e59.js";import"./Fade.a8b10681.js";import"./styled.f63790d0.js";import"./useTheme.8f8018ca.js";import"./Tooltip.6e0804a9.js";import"./SvgIcon.e2be6ff9.js";import"./TransitionGroupContext.bebd881a.js";import"./isArray.ab001f9e.js";import"./Button.adf7cc86.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.7db66457.js";import"./createWithBsPrefix.1bfef79f.js";import"./IconButton.ed9fd281.js";import"./ButtonBase.5b0e8114.js";import"./emotion-react.browser.esm.e1070f55.js";import"./Link.27f5a2e0.js";import"./Typography.1b6708c1.js";import"./Button.aed7d197.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.955b55b4.js";import"./hook.f27fbe2d.js";import"./divWithClassName.dfc40d29.js";const N={parameters:{storySource:{source:`import React from 'react'
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

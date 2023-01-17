import{F as t}from"./FileUpload.74c81e67.js";import{a as p,F as l,j as e}from"./jsx-runtime.d6be66a9.js";import"./index.b3fc12c1.js";import"./index.3b7d1b21.js";import"./iframe.78dc3b5d.js";import"./SynapseConstants.aef18750.js";import"./Button.58f5aaec.js";import"./styled.f07e33c6.js";import"./Tooltip.c89a275a.js";import"./SvgIcon.b9658c5d.js";import"./useTheme.0cbb662e.js";import"./TransitionGroupContext.27368eb3.js";import"./FullWidthAlert.0962330c.js";import"./hook.0245101a.js";import"./createWithBsPrefix.139b0869.js";import"./divWithClassName.f4023709.js";import"./index.35ce73ec.js";import"./Typography.079c4f38.js";import"./Fade.c734522e.js";import"./isArray.3ed41029.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.67904b39.js";import"./IconButton.3b892d3a.js";import"./ButtonBase.250c511d.js";import"./emotion-react.browser.esm.8203c469.js";import"./Link.7f48e2dc.js";import"./Button.bef5272a.js";const N={parameters:{storySource:{source:`import React from 'react'
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

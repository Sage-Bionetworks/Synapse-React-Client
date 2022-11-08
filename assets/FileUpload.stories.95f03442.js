import{F as t}from"./FileUpload.cbea3817.js";import{a as l,F as p,j as o}from"./jsx-runtime.325e7137.js";import"./index.26ad4be5.js";import"./index.1c9fa93d.js";import"./iframe.d25110d4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.2661b6a1.js";import"./styled.8997d4d9.js";import"./utils.373161e6.js";import"./Alert.29e6a249.js";import"./createWithBsPrefix.2155bd3d.js";import"./index.35ce73ec.js";import"./isArray.ba495a61.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.ac4cf4e1.js";const b={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:52,line:10},endLoc:{col:1,line:28},startBody:{col:52,line:10},endBody:{col:1,line:28}}}}},title:"Components/FileUpload",component:t},s=n=>l(p,{children:[o(t,{uploadCallback:e=>{e.success?document.getElementById("demo-upload-file").textContent=`Your file "${e.resp.fileName}" upload is successful!`:document.getElementById("demo-upload-file").textContent="Your file upload is unsuccessful!"},...n}),o("span",{id:"demo-upload-file",style:{marginLeft:"2rem"}})]}),E=s.bind({}),I=["Demo"];export{E as Demo,I as __namedExportsOrder,b as default};

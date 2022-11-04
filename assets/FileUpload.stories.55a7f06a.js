import{F as t}from"./FileUpload.87b2b521.js";import{a as l,F as p,j as o}from"./jsx-runtime.08584073.js";import"./index.8d274cce.js";import"./index.10a6a474.js";import"./iframe.46cf6f9c.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.19eb0a0d.js";import"./styled.49e31bee.js";import"./utils.564f56d5.js";import"./Alert.50172ad9.js";import"./createWithBsPrefix.84280c3f.js";import"./index.35ce73ec.js";import"./isArray.e00a52bc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.52412c7b.js";const b={parameters:{storySource:{source:`import React from 'react'
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

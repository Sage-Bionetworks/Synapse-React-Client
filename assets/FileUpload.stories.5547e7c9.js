import{F as t}from"./FileUpload.cf0e24de.js";import{a as l,F as p,j as o}from"./jsx-runtime.ef6dd6ca.js";import"./index.dae95658.js";import"./index.0c4c5f34.js";import"./iframe.60aac2d9.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.a73b55da.js";import"./styled.e27331e3.js";import"./utils.e96b9b4f.js";import"./TransitionGroupContext.7ee16c7e.js";import"./Alert.ca959f09.js";import"./createWithBsPrefix.fd753f10.js";import"./index.35ce73ec.js";import"./isArray.aa335c2b.js";import"./getEndpoint.bb7ded34.js";import"./Link.3eeff9dd.js";import"./Typography.4e908f90.js";import"./Button.325fe68b.js";import"./ButtonBase.acc32807.js";const Y={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:52,line:10},endLoc:{col:1,line:28},startBody:{col:52,line:10},endBody:{col:1,line:28}}}}},title:"Components/FileUpload",component:t},i=n=>l(p,{children:[o(t,{uploadCallback:e=>{e.success?document.getElementById("demo-upload-file").textContent=`Your file "${e.resp.fileName}" upload is successful!`:document.getElementById("demo-upload-file").textContent="Your file upload is unsuccessful!"},...n}),o("span",{id:"demo-upload-file",style:{marginLeft:"2rem"}})]}),j=i.bind({}),k=["Demo"];export{j as Demo,k as __namedExportsOrder,Y as default};

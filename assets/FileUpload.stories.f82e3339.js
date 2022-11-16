import{F as t}from"./FileUpload.2693c5e3.js";import{a as l,F as p,j as o}from"./jsx-runtime.cf19754d.js";import"./index.68bd09f4.js";import"./index.b04ce0ac.js";import"./iframe.bb4f3d50.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.724ba963.js";import"./styled.db2da3d6.js";import"./utils.621f5968.js";import"./TransitionGroupContext.49564fef.js";import"./Alert.00c62036.js";import"./createWithBsPrefix.5ad4e507.js";import"./index.35ce73ec.js";import"./isArray.eece51ec.js";import"./getEndpoint.bb7ded34.js";import"./Link.e3bd49f6.js";import"./Typography.5f784a3a.js";import"./Button.a3c516df.js";import"./ButtonBase.213ee5c8.js";const Y={parameters:{storySource:{source:`import React from 'react'
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

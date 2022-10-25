import{F as t}from"./FileUpload.befeb6e2.js";import{a as l,F as p,j as o}from"./jsx-runtime.6fc4771b.js";import"./index.bff2d9c7.js";import"./index.4e1486f8.js";import"./iframe.14db13df.js";import"./Button.297619c8.js";import"./index.57d09176.js";import"./withStyles.f9df3835.js";import"./utils.6fc55841.js";import"./Alert.bb2e2328.js";import"./index.35ce73ec.js";import"./isArray.3cde12a0.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e84ee4e0.js";const B={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:52,line:10},endLoc:{col:1,line:28},startBody:{col:52,line:10},endBody:{col:1,line:28}}}}},title:"Components/FileUpload",component:t},s=n=>l(p,{children:[o(t,{uploadCallback:e=>{e.success?document.getElementById("demo-upload-file").textContent=`Your file "${e.resp.fileName}" upload is successful!`:document.getElementById("demo-upload-file").textContent="Your file upload is unsuccessful!"},...n}),o("span",{id:"demo-upload-file",style:{marginLeft:"2rem"}})]}),b=s.bind({}),E=["Demo"];export{b as Demo,E as __namedExportsOrder,B as default};

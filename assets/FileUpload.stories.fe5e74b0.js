import{F as t}from"./FileUpload.bbebf8b0.js";import{a as l,F as p,j as o}from"./jsx-runtime.36c99582.js";import"./index.7b571c3f.js";import"./index.7dc20356.js";import"./iframe.67c9a843.js";import"./Button.4aa3a811.js";import"./index.57d09176.js";import"./withStyles.0fa6dc3f.js";import"./utils.0ebf16b5.js";import"./Alert.e200e4c1.js";import"./index.35ce73ec.js";import"./isArray.919b23ad.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.afc4513f.js";const B={parameters:{storySource:{source:`import React from 'react'
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

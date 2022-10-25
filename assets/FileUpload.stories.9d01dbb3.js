import{F as t}from"./FileUpload.f5a5a9d7.js";import{a as l,F as p,j as o}from"./jsx-runtime.77363692.js";import"./index.a732538f.js";import"./index.f99e416a.js";import"./iframe.3e104d71.js";import"./Button.a1ee4a46.js";import"./index.57d09176.js";import"./withStyles.42967b9b.js";import"./utils.1575e991.js";import"./Alert.23dfc2a1.js";import"./index.35ce73ec.js";import"./isArray.c7b11016.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.06dbb4d5.js";const B={parameters:{storySource:{source:`import React from 'react'
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

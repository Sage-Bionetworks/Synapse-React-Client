import{F as t}from"./FileUpload.40d8884c.js";import{a as l,F as p,j as o}from"./jsx-runtime.2e925369.js";import"./index.489732df.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Alert.eafe86e9.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./assert.1056db66.js";import"./iframe.2e56e0ca.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";var I={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:52,line:10},endLoc:{col:1,line:28},startBody:{col:52,line:10},endBody:{col:1,line:28}}}}},title:"Components/FileUpload",component:t};const i=n=>l(p,{children:[o(t,{uploadCallback:e=>{e.success?document.getElementById("demo-upload-file").textContent=`Your file "${e.resp.fileName}" upload is successful!`:document.getElementById("demo-upload-file").textContent="Your file upload is unsuccessful!"},...n}),o("span",{id:"demo-upload-file",style:{marginLeft:"2rem"}})]}),L=i.bind({}),Y=["Demo"];export{L as Demo,Y as __namedExportsOrder,I as default};
//# sourceMappingURL=FileUpload.stories.7d038292.js.map

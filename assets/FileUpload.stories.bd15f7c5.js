import{F as t}from"./FileUpload.7be3edb4.js";import{a as p,F as l,j as e}from"./jsx-runtime.cae1efce.js";import"./EntityTypeUtils.02efa7e4.js";import"./index.3a565a91.js";import"./iframe.61f567f7.js";import"./Fade.31660acb.js";import"./styled.893b6037.js";import"./useTheme.6ac8e7e3.js";import"./Tooltip.017a66bf.js";import"./SvgIcon.d977b0c7.js";import"./TransitionGroupContext.bc025aa2.js";import"./isArray.175db850.js";import"./Button.7727704e.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.6bbb8efe.js";import"./createWithBsPrefix.df7fa21f.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./emotion-react.browser.esm.0f705697.js";import"./Link.c5d35787.js";import"./Typography.334f7e13.js";import"./Button.af90093c.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./divWithClassName.5b633697.js";const N={parameters:{storySource:{source:`import React from 'react'
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

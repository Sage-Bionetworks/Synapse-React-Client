import{F as t}from"./FileUpload.88917cdc.js";import{a as l,F as p,j as e}from"./jsx-runtime.0db21b62.js";import"./index.90ee2b5e.js";import"./index.9eb164f8.js";import"./iframe.55601028.js";import"./SynapseConstants.290eab74.js";import"./Button.8dd67db9.js";import"./styled.04f8a540.js";import"./utils.8a121841.js";import"./TransitionGroupContext.59a59a19.js";import"./useTheme.6f96ca98.js";import"./Alert.476644bc.js";import"./hook.d21c687b.js";import"./createWithBsPrefix.cf2ded3d.js";import"./divWithClassName.9349f2fc.js";import"./index.35ce73ec.js";import"./Fade.002da28b.js";import"./isArray.051b97b8.js";import"./getEndpoint.bb7ded34.js";import"./Link.400989ff.js";import"./Typography.fc802d4f.js";import"./Button.c393a679.js";import"./ButtonBase.9b5b9b75.js";import"./emotion-react.browser.esm.e326a50f.js";const S={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:52,line:10},endLoc:{col:1,line:28},startBody:{col:52,line:10},endBody:{col:1,line:28}}}}},title:"Components/FileUpload",component:t},i=n=>l(p,{children:[e(t,{uploadCallback:o=>{o.success?document.getElementById("demo-upload-file").textContent=`Your file "${o.resp.fileName}" upload is successful!`:document.getElementById("demo-upload-file").textContent="Your file upload is unsuccessful!"},...n}),e("span",{id:"demo-upload-file",style:{marginLeft:"2rem"}})]}),T=i.bind({}),_=["Demo"];export{T as Demo,_ as __namedExportsOrder,S as default};

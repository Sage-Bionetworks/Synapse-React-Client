import{F as t}from"./FileUpload.af585b5c.js";import{a as l,F as p,j as e}from"./jsx-runtime.23bcdc09.js";import"./index.20c1822f.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./SynapseConstants.290eab74.js";import"./Button.9cfa11f8.js";import"./styled.8da6873c.js";import"./utils.2eab32fe.js";import"./TransitionGroupContext.b9a824ce.js";import"./useTheme.26e47b20.js";import"./Alert.03ebe4a7.js";import"./hook.81302421.js";import"./createWithBsPrefix.26026502.js";import"./divWithClassName.fcb14682.js";import"./index.35ce73ec.js";import"./Fade.5c08504a.js";import"./isArray.1d31a80d.js";import"./getEndpoint.bb7ded34.js";import"./Link.e49ccf51.js";import"./Typography.17940352.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";import"./emotion-react.browser.esm.599684c1.js";const S={parameters:{storySource:{source:`import React from 'react'
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

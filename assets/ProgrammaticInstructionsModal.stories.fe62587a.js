import{e as r}from"./CardContainerLogic.a531654b.js";import{j as o,F as t}from"./jsx-runtime.f2f98a5a.js";import"./index.3643f9f4.js";import"./index.9f26ffd6.js";import"./iframe.3db3203a.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.498cd291.js";import"./index.57d09176.js";import"./withStyles.c893a568.js";import"./utils.b0185ad4.js";import"./Alert.df9cc8b6.js";import"./createWithBsPrefix.859b1c88.js";import"./index.35ce73ec.js";import"./isArray.7423227f.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.aef32627.js";import"./sqlFunctions.cfb3693d.js";import"./RegularExpressions.3cd69849.js";import"./useGetInfoFromIds.dee63691.js";import"./use-deep-compare-effect.esm.75ab9336.js";import"./uniq.f6e69c09.js";import"./_baseSlice.50189bc5.js";import"./toInteger.61038943.js";import"./isSymbol.b0b5d283.js";import"./_cacheHas.0df8aa76.js";import"./without.bf4df2b6.js";import"./uniqueId.cb398276.js";import"./_Set.1e7c39d4.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.1708c7bc.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.9332b201.js";import"./Tooltip.1481a07d.js";import"./createSvgIcon.6b81a395.js";import"./makeStyles.b901d8a5.js";import"./InfoOutlined.23b933db.js";import"./FacetNav.10b5acd6.js";import"./queryUtils.82f82d8f.js";import"./useInfiniteQuery.d88b8f82.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.92b40bb7.js";import"./_baseClone.d7dd3b79.js";import"./_getTag.0d376f55.js";import"./NoSearchResults.e8898963.js";import"./NoData.3761e7ff.js";import"./unCamelCase.07e38083.js";import"./useEntity.1acb6de0.js";import"./useMutation.5188b311.js";import"./pick.daf39fc4.js";import"./isEqual.4273d607.js";import"./ElementWithTooltip.eb1a78b1.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2aef55d7.js";import"./usePrevious.9b92c2d2.js";import"./contains.afe7b6ba.js";import"./usePopperMarginModifiers.4a57f45c.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ebe302e0.js";import"./RadioGroup.fd8c3de8.js";import"./moment.a565bb48.js";import"./RangeSlider.b7c5ee53.js";import"./factory.3d6c3e3e.js";import"./react-sizeme.757d9013.js";import"./Skeleton.756bfafa.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.29e644c3.js";import"./Typography.32e9e32f.js";import"./Modal.c41c729a.js";import"./inheritsLoose.ec71a7aa.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.0d0b5d6b.js";import"./SelectionCriteriaPill.18e85a8a.js";import"./Close.6a8ce9f7.js";import"./react-select.esm.cb4bcd26.js";import"./Select-54ac8379.esm.7808e908.js";import"./CustomSelectWidget.564e86c9.js";import"./index.browser.9aabe7e1.js";import"./WarningModal.1a9379eb.js";import"./react-intersection-observer.esm.331de87d.js";import"./UserCard.0ebe4f67.js";import"./IconCopy.31ff040b.js";import"./SkeletonTable.ca71276a.js";import"./times.408344a9.js";import"./ToastMessage.75433d78.js";import"./FullWidthAlert.007c198f.js";import"./Overlay.792e9294.js";import"./DateFormatter.7ed4e1d9.js";import"./core.esm.253133f0.js";import"./isEmpty.263d607f.js";import"./union.4ae19367.js";import"./isString.3beac074.js";import"./useGetDownloadListStatistics.5fd81fea.js";import"./QueryCount.453a8b8f.js";import"./useGetAccessRequirement.84b06265.js";import"./ManagedACTAccessRequirementStatus.ae6bcf55.js";import"./FileUpload.23d845e4.js";import"./UserSearchBox.fc4a64bc.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.48e66733.js";import"./EntityLink.edc77977.js";import"./SynapseVideo.509439dc.js";import"./IconList.3d9ea341.js";import"./UserCardList.087ea18c.js";const mt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProgrammaticInstructionsModal } from './ProgrammaticInstructionsModal'

export default {
  title: 'Download/ProgrammaticInstructionsModal',
  component: ProgrammaticInstructionsModal,
} as ComponentMeta<typeof ProgrammaticInstructionsModal>

const Template: ComponentStory<typeof ProgrammaticInstructionsModal> = args => (
  <ProgrammaticInstructionsModal {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  show: true,
  title: 'Programmatic Instructions',
  cliNotes: <>Can provide Synapse CLI specific notes</>,
  cliCode: 'Synapse CLI client code',
  rNotes: <>Can provide Synapse R Client specific notes</>,
  rCode: 'Synapse R client code',
  pythonNotes: <>Can provide Synapse Python Client specific notes</>,
  pythonCode: 'Synapse Python client code',
  helpUrl: 'https://help.synapse.org',
  helpMarkdown:
    'Option to show a _HelpPopover_ in the title bar with a link to the docs site',
}
`,locationsMap:{demo:{startLoc:{col:71,line:10},endLoc:{col:1,line:12},startBody:{col:71,line:10},endBody:{col:1,line:12}}}}},title:"Download/ProgrammaticInstructionsModal",component:r},p=i=>o(r,{...i}),m=p.bind({});m.args={show:!0,title:"Programmatic Instructions",cliNotes:o(t,{children:"Can provide Synapse CLI specific notes"}),cliCode:"Synapse CLI client code",rNotes:o(t,{children:"Can provide Synapse R Client specific notes"}),rCode:"Synapse R client code",pythonNotes:o(t,{children:"Can provide Synapse Python Client specific notes"}),pythonCode:"Synapse Python client code",helpUrl:"https://help.synapse.org",helpMarkdown:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"};const nt=["Demo"];export{m as Demo,nt as __namedExportsOrder,mt as default};

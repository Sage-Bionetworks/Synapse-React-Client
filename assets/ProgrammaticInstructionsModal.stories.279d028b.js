import{e as r}from"./CardContainerLogic.6b85104b.js";import{j as o,F as t}from"./jsx-runtime.1d4416c9.js";import"./index.733ef2d4.js";import"./index.b4915227.js";import"./iframe.6e2e208e.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.52817769.js";import"./index.57d09176.js";import"./withStyles.d9b674b1.js";import"./utils.12e9eddb.js";import"./Alert.a029b8a7.js";import"./createWithBsPrefix.e9487138.js";import"./index.35ce73ec.js";import"./isArray.cf5064fd.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1ce682e0.js";import"./sqlFunctions.cfb3693d.js";import"./RegularExpressions.3cd69849.js";import"./useGetInfoFromIds.023dc351.js";import"./use-deep-compare-effect.esm.550c47db.js";import"./uniq.2cacf64d.js";import"./_baseSlice.50189bc5.js";import"./toInteger.20441ff0.js";import"./isSymbol.48f5f8d1.js";import"./_cacheHas.45054515.js";import"./without.11794d25.js";import"./uniqueId.b31d8e69.js";import"./_Set.81322f5c.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.c9f8ea06.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.a5337a6a.js";import"./Tooltip.514cbe94.js";import"./createSvgIcon.1518894e.js";import"./makeStyles.0711e4e8.js";import"./InfoOutlined.bc9acc28.js";import"./FacetNav.18a94871.js";import"./queryUtils.ca99dead.js";import"./useInfiniteQuery.f21582a5.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.118b9836.js";import"./_baseClone.ef28406f.js";import"./_getTag.9cf40ed3.js";import"./NoSearchResults.17c0b8b2.js";import"./NoData.f802ed9a.js";import"./unCamelCase.07e38083.js";import"./useEntity.0c38a2f1.js";import"./useMutation.c45e7ceb.js";import"./pick.3a49f954.js";import"./isEqual.38765cac.js";import"./ElementWithTooltip.52728afe.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.0e10b3ef.js";import"./usePrevious.4f8ee04e.js";import"./contains.ed3c5fde.js";import"./usePopperMarginModifiers.ae1274b1.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.0b72edd3.js";import"./RadioGroup.28342e68.js";import"./moment.a565bb48.js";import"./RangeSlider.25c35388.js";import"./factory.7178a034.js";import"./react-sizeme.ec5fe5ee.js";import"./Skeleton.5fb82d71.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2244e51f.js";import"./Typography.8752acbc.js";import"./Modal.0b4122af.js";import"./inheritsLoose.dffc5cd5.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.9692dd43.js";import"./SelectionCriteriaPill.3410af6c.js";import"./Close.897e58c4.js";import"./react-select.esm.67ba8576.js";import"./Select-54ac8379.esm.c7895ad9.js";import"./CustomSelectWidget.bf3784d7.js";import"./index.browser.e60e72d5.js";import"./WarningModal.a1ce61f8.js";import"./react-intersection-observer.esm.c059a8f3.js";import"./UserCard.8a53ad4c.js";import"./IconCopy.027a3c44.js";import"./SkeletonTable.944ff781.js";import"./times.c10c287f.js";import"./ToastMessage.97b225d1.js";import"./FullWidthAlert.fd7cf951.js";import"./Overlay.12b5a369.js";import"./DateFormatter.f8d5f7bf.js";import"./core.esm.2097e0b7.js";import"./isEmpty.74b3e09f.js";import"./union.e1eabe6c.js";import"./isString.c6b3a64b.js";import"./useGetDownloadListStatistics.77a66886.js";import"./QueryCount.39ca8105.js";import"./useGetAccessRequirement.83dcd0d3.js";import"./ManagedACTAccessRequirementStatus.226b91ad.js";import"./FileUpload.708f4707.js";import"./UserSearchBox.d789c0da.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.f7299049.js";import"./EntityLink.b7bb42bf.js";import"./SynapseVideo.1201d15f.js";import"./IconList.d299fd42.js";import"./UserCardList.41c52d50.js";const mt={parameters:{storySource:{source:`import React from 'react'
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

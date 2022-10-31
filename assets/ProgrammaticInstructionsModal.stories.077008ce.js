import{e as r}from"./CardContainerLogic.f0ec455f.js";import{j as o,F as t}from"./jsx-runtime.b29a5274.js";import"./index.dcde5598.js";import"./index.73e3d9d7.js";import"./iframe.45f65fdb.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.c77a6de6.js";import"./index.57d09176.js";import"./withStyles.2d1152f5.js";import"./utils.c867bc57.js";import"./Alert.5f5d4d35.js";import"./createWithBsPrefix.2e8fbe6b.js";import"./index.35ce73ec.js";import"./isArray.0036f9bf.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.5f62e5e7.js";import"./sqlFunctions.a660c34a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c3d3eddf.js";import"./TypeUtils.a2c41307.js";import"./useGetInfoFromIds.987bdce4.js";import"./use-deep-compare-effect.esm.6fd3cff2.js";import"./uniq.638d0678.js";import"./_baseSlice.50189bc5.js";import"./toInteger.8f4cfb94.js";import"./isSymbol.9796f8db.js";import"./_cacheHas.f4993e5b.js";import"./without.cbf4274d.js";import"./uniqueId.759a0be8.js";import"./_Set.14ba8e4b.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.8faf30b2.js";import"./IconSvg.9f77ee65.js";import"./Tooltip.76e779de.js";import"./createSvgIcon.363a4d4a.js";import"./makeStyles.90bec0f4.js";import"./InfoOutlined.e9bf0eda.js";import"./FacetNav.b6c35844.js";import"./queryUtils.2742e34a.js";import"./useInfiniteQuery.d24d0056.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ca314ea1.js";import"./_baseClone.6b2ce6e1.js";import"./_getTag.88993a13.js";import"./NoSearchResults.c32e2263.js";import"./NoData.c8e3cb03.js";import"./unCamelCase.07e38083.js";import"./useEntity.3eb8931f.js";import"./useMutation.7b9e5247.js";import"./pick.2bd59cca.js";import"./isEqual.85b5a6ad.js";import"./ElementWithTooltip.28c55a12.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.4147a8b4.js";import"./usePrevious.b750bb14.js";import"./contains.86bdf9ac.js";import"./usePopperMarginModifiers.5d89d5c2.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b10f9bff.js";import"./RadioGroup.b29639f6.js";import"./moment.a565bb48.js";import"./RangeSlider.c9068914.js";import"./factory.737a5844.js";import"./react-sizeme.73155a78.js";import"./Skeleton.c9932f2f.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a52a3a17.js";import"./Typography.e39b1a57.js";import"./Modal.1f2af341.js";import"./inheritsLoose.02d2a797.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f3a64467.js";import"./SelectionCriteriaPill.7779b758.js";import"./Close.9a7b3a99.js";import"./react-select.esm.a7bca0cc.js";import"./Select-54ac8379.esm.f0abb30f.js";import"./CustomSelectWidget.d4114699.js";import"./index.browser.376825fc.js";import"./UserCard.1da63075.js";import"./IconCopy.fa0d8a51.js";import"./SkeletonTable.94c4c988.js";import"./times.52672c9d.js";import"./ToastMessage.cdfb50d6.js";import"./FullWidthAlert.3cefffa2.js";import"./Overlay.14a6d56e.js";import"./WarningModal.559d4a18.js";import"./react-intersection-observer.esm.d88e3022.js";import"./DateFormatter.a6b80fa8.js";import"./core.esm.47975909.js";import"./isEmpty.e477a37c.js";import"./union.2f1025d7.js";import"./isString.efbbdc94.js";import"./useGetDownloadListStatistics.6b4b1459.js";import"./QueryCount.ae1d7c79.js";import"./useGetAccessRequirement.172f6b7e.js";import"./ManagedACTAccessRequirementStatus.6087eccb.js";import"./FileUpload.37f2faa4.js";import"./UserSearchBox.e5ec82c0.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.a2cc2c28.js";import"./EntityLink.43518ecd.js";import"./SynapseVideo.26c329a2.js";import"./IconList.adc62b28.js";import"./UserCardList.b78be9fd.js";const nt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:71,line:10},endLoc:{col:1,line:12},startBody:{col:71,line:10},endBody:{col:1,line:12}}}}},title:"Download/ProgrammaticInstructionsModal",component:r},p=i=>o(r,{...i}),m=p.bind({});m.args={show:!0,title:"Programmatic Instructions",cliNotes:o(t,{children:"Can provide Synapse CLI specific notes"}),cliCode:"Synapse CLI client code",rNotes:o(t,{children:"Can provide Synapse R Client specific notes"}),rCode:"Synapse R client code",pythonNotes:o(t,{children:"Can provide Synapse Python Client specific notes"}),pythonCode:"Synapse Python client code",helpUrl:"https://help.synapse.org",helpMarkdown:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"};const et=["Demo"];export{m as Demo,et as __namedExportsOrder,nt as default};

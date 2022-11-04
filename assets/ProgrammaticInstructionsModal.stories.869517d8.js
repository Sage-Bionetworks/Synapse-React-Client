import{e as r}from"./CardContainerLogic.160cd6dc.js";import{j as o,F as t}from"./jsx-runtime.08584073.js";import"./index.8d274cce.js";import"./index.10a6a474.js";import"./iframe.46cf6f9c.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.19eb0a0d.js";import"./styled.49e31bee.js";import"./utils.564f56d5.js";import"./Alert.50172ad9.js";import"./createWithBsPrefix.84280c3f.js";import"./index.35ce73ec.js";import"./isArray.e00a52bc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.52412c7b.js";import"./sqlFunctions.356c1293.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.e3984af8.js";import"./useGetInfoFromIds.0b77420b.js";import"./use-deep-compare-effect.esm.fad3e301.js";import"./uniq.832d3855.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ebd6ba2e.js";import"./isSymbol.bad84e3a.js";import"./_cacheHas.8d045655.js";import"./without.d57c7f92.js";import"./uniqueId.2262e339.js";import"./_Set.2974cbe7.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.f0b491fb.js";import"./queryUtils.ef308bba.js";import"./useInfiniteQuery.e2feb110.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.5688d850.js";import"./_baseClone.54734e5a.js";import"./_getTag.64bd74dc.js";import"./NoSearchResults.f15840a6.js";import"./NoData.5d93d435.js";import"./unCamelCase.07e38083.js";import"./useEntity.ac75c1c8.js";import"./useMutation.fa3cdf0e.js";import"./pick.4ca0ebc5.js";import"./isEqual.aa92ca80.js";import"./ElementWithTooltip.3eef2d7f.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.47050332.js";import"./Tooltip.f9340fc3.js";import"./createSvgIcon.5c64ba32.js";import"./InfoOutlined.aab3ebaf.js";import"./Dropdown.8b1a32a3.js";import"./usePrevious.eb4668df.js";import"./contains.dc8b0910.js";import"./usePopperMarginModifiers.e5eb18a0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.0589ad6c.js";import"./RadioGroup.884be978.js";import"./moment.a565bb48.js";import"./RangeSlider.3d031b55.js";import"./factory.89a755c8.js";import"./react-sizeme.8d569517.js";import"./Skeleton.caf11574.js";import"./emotion-react.browser.esm.17352205.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.39f2fb11.js";import"./Modal.6973cbd4.js";import"./inheritsLoose.e43b22d1.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.5ed53cb9.js";import"./Typography.afe1a60b.js";import"./SelectionCriteriaPill.8f9f19a7.js";import"./Close.e48a33b3.js";import"./react-select.esm.fadcd49f.js";import"./Select-54ac8379.esm.305999be.js";import"./CustomSelectWidget.17052bbc.js";import"./index.browser.fb0b4558.js";import"./UserCard.94c6876c.js";import"./IconCopy.28a6d75f.js";import"./SkeletonTable.c5426c0e.js";import"./times.6ff56ad1.js";import"./ToastMessage.b76b29fc.js";import"./FullWidthAlert.c938c0bd.js";import"./Overlay.c4937a08.js";import"./WarningModal.437479d1.js";import"./react-intersection-observer.esm.dee0153b.js";import"./DateFormatter.ea5a9994.js";import"./EntityIcon.4f13962d.js";import"./core.esm.2c37a07f.js";import"./isEmpty.cc673e81.js";import"./union.e9db0191.js";import"./isString.1b0717a4.js";import"./useGetDownloadListStatistics.41fd99c5.js";import"./QueryCount.c7aad442.js";import"./useGetAccessRequirement.7772742c.js";import"./ManagedACTAccessRequirementStatus.8dc4cd07.js";import"./FileUpload.87b2b521.js";import"./UserSearchBox.93d24c31.js";import"./UserOrTeamBadge.b4d762a1.js";import"./EntityLink.4b34ca07.js";import"./SynapseVideo.70b05cce.js";import"./IconList.da9ad884.js";import"./UserCardList.1c49604c.js";const pt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:71,line:10},endLoc:{col:1,line:12},startBody:{col:71,line:10},endBody:{col:1,line:12}}}}},title:"Download/ProgrammaticInstructionsModal",component:r},p=i=>o(r,{...i}),m=p.bind({});m.args={show:!0,title:"Programmatic Instructions",cliNotes:o(t,{children:"Can provide Synapse CLI specific notes"}),cliCode:"Synapse CLI client code",rNotes:o(t,{children:"Can provide Synapse R Client specific notes"}),rCode:"Synapse R client code",pythonNotes:o(t,{children:"Can provide Synapse Python Client specific notes"}),pythonCode:"Synapse Python client code",helpUrl:"https://help.synapse.org",helpMarkdown:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"};const mt=["Demo"];export{m as Demo,mt as __namedExportsOrder,pt as default};

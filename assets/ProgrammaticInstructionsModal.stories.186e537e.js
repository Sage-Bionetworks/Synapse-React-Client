import{e as r}from"./CardContainerLogic.036c84c3.js";import{j as o,F as t}from"./jsx-runtime.189701ee.js";import"./index.8c58329a.js";import"./index.1acdd9cd.js";import"./iframe.d1747881.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.870eaf25.js";import"./styled.6dbd55b6.js";import"./utils.7f7b7d48.js";import"./Alert.e0d24906.js";import"./createWithBsPrefix.6d9f981e.js";import"./index.35ce73ec.js";import"./isArray.f833655b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2c64a678.js";import"./sqlFunctions.0e13fd29.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.53e5fc3e.js";import"./useGetInfoFromIds.513a8afb.js";import"./use-deep-compare-effect.esm.400e0988.js";import"./uniq.89927e39.js";import"./_baseSlice.50189bc5.js";import"./toInteger.26849459.js";import"./isSymbol.9e8ac4ca.js";import"./_cacheHas.d561c31b.js";import"./without.20dbca1e.js";import"./uniqueId.d6d54f39.js";import"./_Set.8f164a40.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.1e12e255.js";import"./queryUtils.5068fe43.js";import"./useInfiniteQuery.e47eb1f5.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.b5488eba.js";import"./_baseClone.0b03d127.js";import"./_getTag.599e7f0c.js";import"./NoSearchResults.0f47efff.js";import"./NoData.148c1ffd.js";import"./unCamelCase.07e38083.js";import"./useEntity.6563f289.js";import"./useMutation.37851f35.js";import"./pick.50d22cfa.js";import"./isEqual.13c73ee0.js";import"./ElementWithTooltip.2ac6d57c.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.b4c3e826.js";import"./Tooltip.23ad89d7.js";import"./createSvgIcon.4942519b.js";import"./InfoOutlined.b271da40.js";import"./Dropdown.b79f40b6.js";import"./usePrevious.ac3128cb.js";import"./contains.65746271.js";import"./usePopperMarginModifiers.8567a317.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.312a0479.js";import"./RadioGroup.07553ab2.js";import"./moment.a565bb48.js";import"./RangeSlider.087c574b.js";import"./factory.86351b86.js";import"./react-sizeme.001428c9.js";import"./Skeleton.6e56f69d.js";import"./emotion-react.browser.esm.3ce94781.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.845c95e2.js";import"./Modal.d9737342.js";import"./inheritsLoose.4fec7936.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.4f490784.js";import"./Typography.98c54a5a.js";import"./SelectionCriteriaPill.f2b70f04.js";import"./Close.b53427ff.js";import"./react-select.esm.f99c52b9.js";import"./Select-54ac8379.esm.d6037ef2.js";import"./CustomSelectWidget.67d31401.js";import"./index.browser.48eb5a96.js";import"./UserCard.c44a89b5.js";import"./IconCopy.beef5d18.js";import"./SkeletonTable.01482b7c.js";import"./times.20c70af6.js";import"./ToastMessage.34ffacc9.js";import"./FullWidthAlert.15bf5cc7.js";import"./Overlay.7d5c9f62.js";import"./WarningModal.509ff484.js";import"./react-intersection-observer.esm.09975452.js";import"./DateFormatter.1b5407a8.js";import"./EntityIcon.1b0a075c.js";import"./core.esm.94b78c77.js";import"./isEmpty.702cce8b.js";import"./union.4d9fe056.js";import"./isString.ac7ab9fa.js";import"./useGetDownloadListStatistics.c143c9f6.js";import"./QueryCount.a026e135.js";import"./useGetAccessRequirement.f3ba1d7d.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.fefa33e6.js";import"./UserSearchBox.24bbc7cf.js";import"./UserOrTeamBadge.b5cf70b3.js";import"./EntityLink.4433f45e.js";import"./ButtonBase.37b064e9.js";import"./SynapseVideo.28a9d404.js";import"./IconList.97d6b572.js";import"./UserCardList.0aba020e.js";const mt={parameters:{storySource:{source:`import React from 'react'
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

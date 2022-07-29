import{E as o,F as n}from"./EntityFinder.064d3ef1.js";import{E as e}from"./EntityTypeUtils.496d6ae4.js";import"./assert.0a566718.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./iframe.6d2e427d.js";import"./index.187d8587.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Alert.eafe86e9.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./react-sizeme.0ed8207b.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.3d20df6f.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./InfoOutlined.22a371fd.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.078ad882.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.2aae5abd.js";import"./classCallCheck.8304ed06.js";import"./inherits.98d6a15d.js";import"./HelpPopover.515a4ed2.js";import"./MarkdownPopover.001ed70c.js";import"./usePopperMarginModifiers.31225551.js";import"./useWaitForDOMRef.c89dbc64.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.454b9a07.js";import"./UserCard.28412da2.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.471f4331.js";import"./times.eb081670.js";import"./toInteger.2f83b09a.js";import"./Skeleton.8dd0668e.js";import"./ToastMessage.f82ed562.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./removeClass.27874bcb.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.88992b99.js";import"./factory.a542d964.js";import"./SynapseVideo.125ef58a.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.d40dfb5f.js";import"./moment.53181859.js";import"./HelpOutlineTwoTone.5e2fed5c.js";import"./LoadingScreen.56f18e4f.js";import"./Modal.58357e58.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.85bb9cd4.js";import"./useEntityBundle.14f9b623.js";import"./EntityIcon.c6033eae.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.827067ea.js";import"./isEmpty.8b499436.js";import"./lodash.dc72c5c8.js";import"./CalendarWithIconFormGroup.313b575e.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Collapse.fe074047.js";import"./groupBy.bc513468.js";import"./_baseMap.7fbecf26.js";import"./_baseIsEqual.880a906a.js";import"./_cacheHas.d0603ccd.js";import"./_setToArray.a82100c8.js";import"./EntityModal.7af1855c.js";import"./ExternalFileHandleInterface.dc497f6b.js";import"./WarningModal.db1d2b8d.js";import"./LockTwoTone.32ff1570.js";import"./cloneDeep.ff9db1a1.js";import"./Dropdown.c29f5884.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.d8b25d91.js";import"./EntityLink.ad496469.js";import"./useFavorites.62266932.js";import"./TypeUtils.a2c41307.js";var kt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EntityFinder from './EntityFinder'
import { FinderScope } from './tree/EntityTree'
import { EntityType } from '../../utils/synapseTypes'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityFinder',
  component: EntityFinder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EntityFinder>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityFinder> = args => (
  <EntityFinder {...args} />
)

export const DualPane = Template.bind({})
DualPane.args = {
  mustSelectVersionNumber: true,
  treeOnly: false,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: true,
  visibleTypesInList: Object.values(EntityType),
  showVersionSelection: true,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: Object.values(EntityType),
  selectedCopy: count => {
    return \`\${count} Item\${count > 1 ? 's' : ''} Selected\`
  },
}

export const SinglePane = Template.bind({})

SinglePane.args = {
  treeOnly: true,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: false,
  visibleTypesInTree: [EntityType.PROJECT, EntityType.FOLDER, EntityType.TABLE],
  showVersionSelection: true,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: [EntityType.PROJECT, EntityType.FOLDER],
}
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"single-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{}};const i=t=>r(o,{...t}),p=i.bind({});p.args={mustSelectVersionNumber:!0,treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=i.bind({});s.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Ut=["DualPane","SinglePane"];export{p as DualPane,s as SinglePane,Ut as __namedExportsOrder,kt as default};
//# sourceMappingURL=EntityFinder.stories.801b3558.js.map

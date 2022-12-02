import{E as e,F as i,V as r}from"./EntityFinder.101ab27f.js";import{E as o}from"./index.90ee2b5e.js";import{j as p}from"./jsx-runtime.0db21b62.js";import"./CardContainerLogic.13da2bdf.js";import"./sqlFunctions.89b7555a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.982fc5d7.js";import"./useGetInfoFromIds.7b424b86.js";import"./use-deep-compare-effect.esm.f1067dd3.js";import"./uniq.f7024654.js";import"./_baseSlice.50189bc5.js";import"./toInteger.82ea438a.js";import"./isSymbol.70fe8399.js";import"./isArray.051b97b8.js";import"./Button.8dd67db9.js";import"./index.35ce73ec.js";import"./_cacheHas.5f692c9b.js";import"./without.a296bf52.js";import"./uniqueId.9af27e73.js";import"./_Set.a3714456.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.290eab74.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.6a064a63.js";import"./queryUtils.634fcbc9.js";import"./useInfiniteQuery.7f7301d1.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.3bba581d.js";import"./_baseClone.5ce35f9c.js";import"./_getTag.1403c71b.js";import"./NoSearchResults.92880f87.js";import"./NoData.e3ffa92d.js";import"./unCamelCase.07e38083.js";import"./useEntity.2b72a417.js";import"./useMutation.4b8ac845.js";import"./pick.b1b36568.js";import"./isEqual.b5a5f095.js";import"./ElementWithTooltip.b9619929.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.7ea71104.js";import"./TransitionGroupContext.59a59a19.js";import"./styled.04f8a540.js";import"./Tooltip.137fb27a.js";import"./createSvgIcon.2669ec85.js";import"./useTheme.6f96ca98.js";import"./index.9eb164f8.js";import"./iframe.55601028.js";import"./utils.8a121841.js";import"./InfoOutlined.c6dcbd99.js";import"./Dropdown.dca80b57.js";import"./usePrevious.0ecbef3d.js";import"./createWithBsPrefix.cf2ded3d.js";import"./hook.d21c687b.js";import"./contains.18910bdc.js";import"./usePopperMarginModifiers.6d23a00d.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.d6973e75.js";import"./RadioGroup.5a5eea3b.js";import"./dayjs.min.8ecbf49a.js";import"./RangeSlider.9b930fc7.js";import"./factory.81f3a36b.js";import"./react-sizeme.569169d0.js";import"./Skeleton.99622f82.js";import"./emotion-react.browser.esm.e326a50f.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.b865cf66.js";import"./Modal.6f969a6f.js";import"./inheritsLoose.39471a71.js";import"./divWithClassName.9349f2fc.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.ada5a7ee.js";import"./Typography.fc802d4f.js";import"./SelectionCriteriaPill.099cfef4.js";import"./Close.e0c1c246.js";import"./react-select.esm.3ac9a570.js";import"./Select-54ac8379.esm.71de503d.js";import"./CustomSelectWidget.00ee46bf.js";import"./index.browser.0747d754.js";import"./UserCard.dbd6791d.js";import"./IconCopy.1118163b.js";import"./SkeletonTable.95f35468.js";import"./times.ca2e0d7b.js";import"./ToastMessage.10c98715.js";import"./FullWidthAlert.257257d5.js";import"./Alert.476644bc.js";import"./Overlay.8ef738fa.js";import"./WarningModal.d9006211.js";import"./react-intersection-observer.esm.0813a3ec.js";import"./DateFormatter.0a316f6d.js";import"./utc.07f25525.js";import"./EntityIcon.0216fd97.js";import"./core.esm.e5ea6d81.js";import"./isEmpty.16f2a54d.js";import"./union.09fb6ed0.js";import"./isString.2911fd8b.js";import"./Button.c393a679.js";import"./ButtonBase.9b5b9b75.js";import"./relativeTime.181b1899.js";import"./useGetDownloadListStatistics.b1713c45.js";import"./QueryCount.c304061b.js";import"./useGetAccessRequirement.7d6d76d6.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.88917cdc.js";import"./UserSearchBox.140d0adb.js";import"./UserOrTeamBadge.6b5bd345.js";import"./EntityLink.af6b09fe.js";import"./SynapseVideo.2104adbb.js";import"./IconList.6b975d1e.js";import"./UserCardList.3cd94795.js";import"./Arrow.1ebcfe64.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.1a52a250.js";import"./CalendarWithIconFormGroup.7b14cc7a.js";import"./localizedFormat.4b7b68a5.js";import"./IconButton.cc0a4543.js";import"./List.8e2b55b4.js";import"./Modal.cc63c9ff.js";import"./Fade.002da28b.js";import"./index.f2a06ad4.js";import"./MenuList.722729f5.js";import"./groupBy.c0d1be37.js";import"./EntityModal.c627dfb5.js";import"./Sort.eba90dfd.js";import"./useFavorites.f1604638.js";import"./Link.400989ff.js";const Ao={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EntityFinder from './EntityFinder'
import { FinderScope } from './tree/EntityTree'
import { EntityType } from '../../utils/synapseTypes'
import { VersionSelectionType } from './VersionSelectionType'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityFinder',
  component: EntityFinder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    versionSelection: {
      options: ['REQUIRED', 'DISABLED', 'TRACKED', 'UNTRACKED'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof EntityFinder>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityFinder> = args => (
  <EntityFinder {...args} />
)

export const DualPane = Template.bind({})
DualPane.args = {
  treeOnly: false,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: true,
  visibleTypesInList: Object.values(EntityType),
  versionSelection: VersionSelectionType.TRACKED,
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
  versionSelection: VersionSelectionType.DISALLOWED,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: [EntityType.PROJECT, EntityType.FOLDER],
}
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:e,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},n=t=>p(e,{...t}),m=n.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(o),versionSelection:r.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(o),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=n.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[o.PROJECT,o.FOLDER,o.TABLE],versionSelection:r.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[o.PROJECT,o.FOLDER]};const ho=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,ho as __namedExportsOrder,Ao as default};

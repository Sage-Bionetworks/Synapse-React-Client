import{E as o,F as i,V as n}from"./EntityFinder.993f4ac0.js";import{E as e}from"./index.53b0413e.js";import{j as p}from"./jsx-runtime.076c7567.js";import"./CardContainerLogic.80e28a7a.js";import"./sqlFunctions.6aa94ea0.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.391fb5d9.js";import"./useGetInfoFromIds.1688b736.js";import"./use-deep-compare-effect.esm.2f8a811e.js";import"./uniq.5f9327c6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.92753527.js";import"./isSymbol.353ed4c3.js";import"./isArray.b8ce881a.js";import"./Button.a0002af7.js";import"./index.35ce73ec.js";import"./_cacheHas.59262266.js";import"./without.87978f51.js";import"./uniqueId.0acb56b3.js";import"./_Set.650372d5.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.290eab74.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.40bc2638.js";import"./queryUtils.9c901ffd.js";import"./useInfiniteQuery.0a9647d8.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.dd48b18e.js";import"./_baseClone.81813b93.js";import"./_getTag.14e0b047.js";import"./NoSearchResults.aff925db.js";import"./NoData.b071b2e4.js";import"./unCamelCase.07e38083.js";import"./useEntity.06da6e35.js";import"./useMutation.7eb34ba2.js";import"./pick.e04e17ce.js";import"./isEqual.2f7c36d1.js";import"./ElementWithTooltip.d02c84fa.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.94aeb20a.js";import"./TransitionGroupContext.9598a495.js";import"./styled.65df53fb.js";import"./Tooltip.b4ed2e26.js";import"./useTheme.6d85215f.js";import"./index.3dd8c113.js";import"./iframe.dc9e500a.js";import"./Dropdown.909fc8e8.js";import"./usePrevious.7f44450b.js";import"./createWithBsPrefix.125a71ed.js";import"./hook.fb6ae99a.js";import"./contains.3362c067.js";import"./usePopperMarginModifiers.a23c4ed0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.0bdec9b4.js";import"./RadioGroup.ac30b43c.js";import"./dayjs.min.20a3de16.js";import"./RangeSlider.f1ddbf5e.js";import"./factory.d6f460bc.js";import"./react-sizeme.7456e7a4.js";import"./Skeleton.83217f13.js";import"./emotion-react.browser.esm.74b64aae.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.693ddaa7.js";import"./Modal.6a4db761.js";import"./inheritsLoose.9e861b2b.js";import"./divWithClassName.d855987b.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.dbc78690.js";import"./Typography.18dd9738.js";import"./SelectionCriteriaPill.81441fbe.js";import"./Close.9952fafd.js";import"./react-select.esm.e1b9a3ee.js";import"./Select-54ac8379.esm.96245f62.js";import"./CustomSelectWidget.466b5f45.js";import"./index.browser.19d490ee.js";import"./UserCard.51dc49e5.js";import"./IconCopy.1b045a7b.js";import"./SkeletonTable.3dd63b5b.js";import"./times.2784b383.js";import"./ToastMessage.f480df01.js";import"./FullWidthAlert.c3c066c4.js";import"./Alert.052d6dda.js";import"./Overlay.07d52eac.js";import"./WarningModal.fe9b8157.js";import"./react-intersection-observer.esm.e649c397.js";import"./DateFormatter.1f96b822.js";import"./utc.b83b7030.js";import"./EntityIcon.f7bcc06a.js";import"./core.esm.2116ac3e.js";import"./isEmpty.cb1c6f75.js";import"./union.b6ea78a3.js";import"./isString.53dbadb5.js";import"./Button.855954d3.js";import"./ButtonBase.49fff140.js";import"./relativeTime.c2bdff91.js";import"./useGetDownloadListStatistics.e285079b.js";import"./QueryCount.ea9a5992.js";import"./useGetAccessRequirement.08a1ff59.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.8127d6f3.js";import"./UserSearchBox.782f64fa.js";import"./UserOrTeamBadge.48c906a7.js";import"./EntityLink.5eeecbce.js";import"./SynapseVideo.a31f0d5c.js";import"./IconList.1dbbdfac.js";import"./UserCardList.305661b8.js";import"./Arrow.ba2d8bc9.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.63cce641.js";import"./CalendarWithIconFormGroup.7a3cad73.js";import"./localizedFormat.9365cdef.js";import"./IconButton.81618d29.js";import"./List.63e9f254.js";import"./Modal.d7cecf66.js";import"./Fade.476b0ff7.js";import"./index.f2a06ad4.js";import"./MenuList.123d9981.js";import"./groupBy.09567fa1.js";import"./EntityModal.6cde4e34.js";import"./Sort.9eadcab8.js";import"./useFavorites.90ff5d45.js";import"./Link.fd8fbf97.js";const Ie={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Pe=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,Pe as __namedExportsOrder,Ie as default};

import{E as o,F as i,V as n}from"./EntityFinder.f123eb88.js";import{E as e}from"./index.34864443.js";import{j as p}from"./jsx-runtime.e72699d7.js";import"./CardContainerLogic.7d4d4d71.js";import"./sqlFunctions.d0b07571.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.550dbb5b.js";import"./useGetInfoFromIds.55c50f91.js";import"./use-deep-compare-effect.esm.d647c715.js";import"./uniq.6af65afc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0bf55458.js";import"./isSymbol.24e67468.js";import"./isArray.768225e0.js";import"./Button.69f4aad2.js";import"./index.35ce73ec.js";import"./_cacheHas.a009177f.js";import"./without.0d5b4379.js";import"./uniqueId.7182a54a.js";import"./_Set.73e28bcb.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.290eab74.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.e1da9b5b.js";import"./queryUtils.fcfc7b8f.js";import"./useInfiniteQuery.2bc38fa4.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.4df8e91c.js";import"./_baseClone.29baa335.js";import"./_getTag.5ec99d73.js";import"./NoSearchResults.e9d8f715.js";import"./NoData.4a2fbcdb.js";import"./unCamelCase.07e38083.js";import"./useEntity.a8e793ee.js";import"./useMutation.7ca0393e.js";import"./pick.3d0a4cbb.js";import"./isEqual.45b9eef1.js";import"./ElementWithTooltip.b8adcd1e.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.91cc0bda.js";import"./TransitionGroupContext.2e90d9c8.js";import"./styled.113fc281.js";import"./Tooltip.626a672e.js";import"./useTheme.3c585c97.js";import"./index.71f9d2b1.js";import"./iframe.e515b461.js";import"./Dropdown.bb8e092c.js";import"./usePrevious.e7a96701.js";import"./createWithBsPrefix.93be1871.js";import"./hook.dcb03d67.js";import"./contains.92c769a2.js";import"./usePopperMarginModifiers.a580fc17.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.51a2ff0c.js";import"./RadioGroup.cf5e2f8c.js";import"./dayjs.min.9844fde9.js";import"./RangeSlider.f58ce2c4.js";import"./factory.f23e6d8b.js";import"./react-sizeme.9e0eb750.js";import"./Skeleton.015bfbc5.js";import"./emotion-react.browser.esm.6478344e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.14f06136.js";import"./Modal.f7e6106d.js";import"./inheritsLoose.ed0377a8.js";import"./divWithClassName.15ce1beb.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.48aa9bb3.js";import"./Typography.4509eb0e.js";import"./SelectionCriteriaPill.24c0a363.js";import"./Close.c63a0c55.js";import"./react-select.esm.9886f966.js";import"./Select-54ac8379.esm.a705b656.js";import"./CustomSelectWidget.3ea71536.js";import"./index.browser.93244f29.js";import"./UserCard.b40dfa65.js";import"./IconCopy.5e3a4916.js";import"./SkeletonTable.7fae5ea1.js";import"./times.a7510402.js";import"./ToastMessage.0ac4744b.js";import"./FullWidthAlert.2ca2db91.js";import"./Alert.d9dcb62e.js";import"./Overlay.8e7d4967.js";import"./WarningModal.3e689365.js";import"./react-intersection-observer.esm.8f335372.js";import"./DateFormatter.002c6239.js";import"./utc.a90651d9.js";import"./EntityIcon.a079b3d9.js";import"./core.esm.0d56749d.js";import"./isEmpty.3cac19cb.js";import"./union.3d218bc3.js";import"./isString.7663035e.js";import"./Button.5bebd4e9.js";import"./ButtonBase.1e74724a.js";import"./relativeTime.cd5fda9a.js";import"./useGetDownloadListStatistics.a50360cc.js";import"./QueryCount.c99e21ca.js";import"./useGetAccessRequirement.9c48ddf0.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5cbf5fa0.js";import"./UserSearchBox.8343efec.js";import"./UserOrTeamBadge.b5ed1dfe.js";import"./EntityLink.c2a8cd8a.js";import"./SynapseVideo.dc2838dc.js";import"./IconList.6127531d.js";import"./UserCardList.539428fb.js";import"./Arrow.4735f028.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.3615268d.js";import"./CalendarWithIconFormGroup.37cac707.js";import"./localizedFormat.21fe71d9.js";import"./IconButton.53297fa9.js";import"./List.faf1256a.js";import"./Modal.447037d0.js";import"./Fade.2e614c5f.js";import"./index.f2a06ad4.js";import"./MenuList.c1555f1e.js";import"./groupBy.6d0efd28.js";import"./EntityModal.bee178a9.js";import"./Sort.15a8e87a.js";import"./useFavorites.ad7ace40.js";import"./Link.2241f35d.js";const Ie={parameters:{storySource:{source:`import React from 'react'
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

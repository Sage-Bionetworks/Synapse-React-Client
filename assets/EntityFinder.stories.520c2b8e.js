import{E as o,F as i,V as n}from"./EntityFinder.1dcb2f17.js";import{E as e}from"./EntityIcon.93350fe4.js";import{j as p}from"./jsx-runtime.1a5a2715.js";import"./CardContainerLogic.6586af14.js";import"./index.ee300637.js";import"./index.6dbf9fa2.js";import"./iframe.cf33b896.js";import"./Button.47fead8e.js";import"./index.57d09176.js";import"./withStyles.7c3d6aba.js";import"./utils.6069a350.js";import"./Alert.9d12ab40.js";import"./index.35ce73ec.js";import"./isArray.627abb94.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.43465c61.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.784698b1.js";import"./use-deep-compare-effect.esm.6aa57151.js";import"./uniq.d45a5a8e.js";import"./_baseSlice.50189bc5.js";import"./toInteger.72a0ddde.js";import"./isSymbol.eee16a1e.js";import"./_cacheHas.3118bd20.js";import"./without.dcfaba86.js";import"./uniqueId.395c9d56.js";import"./_Set.461de1e6.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.3a18d1b9.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.29727645.js";import"./Tooltip.5c94c0fd.js";import"./createSvgIcon.d6b9a03c.js";import"./makeStyles.bd855ff6.js";import"./InfoOutlined.9735fa89.js";import"./Dropdown.db05a958.js";import"./Modal.718a01b2.js";import"./useWaitForDOMRef.4377410d.js";import"./inheritsLoose.848d8abd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.118ff728.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.fcfa658e.js";import"./queryUtils.3d47f1fa.js";import"./useInfiniteQuery.142046cf.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.01158589.js";import"./_baseClone.7af79b7e.js";import"./_getTag.8a88363a.js";import"./useEntity.f2bcb259.js";import"./useMutation.a70ea721.js";import"./pick.758c86d7.js";import"./Checkbox.a9ac7e3d.js";import"./RadioGroup.8d10638e.js";import"./moment.a565bb48.js";import"./RangeSlider.f10c9159.js";import"./factory.e4649abd.js";import"./react-sizeme.bf2e423b.js";import"./Skeleton.1753a711.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.34a4d5c9.js";import"./Typography.51984e68.js";import"./TypeUtils.a2c41307.js";import"./Close.724025ed.js";import"./react-select.esm.75b4a64f.js";import"./Select-54ac8379.esm.d1781a8c.js";import"./CustomSelectWidget.b8145431.js";import"./index.browser.6ebab1df.js";import"./WarningModal.dbadfe1f.js";import"./react-intersection-observer.esm.6d50f7e6.js";import"./UserCard.5b59af51.js";import"./IconCopy.6ad8cebf.js";import"./SkeletonTable.733c6fe6.js";import"./times.fbcd0673.js";import"./ToastMessage.373e274f.js";import"./FullWidthAlert.1624915d.js";import"./Overlay.494df0cd.js";import"./DateFormatter.9463cb95.js";import"./core.esm.42d4ce1f.js";import"./isEmpty.831251fa.js";import"./isEqual.5fda5513.js";import"./union.59b836f0.js";import"./isString.7152dfdb.js";import"./useGetDownloadListStatistics.f73740b6.js";import"./QueryCount.211976f0.js";import"./NoData.d2495fa6.js";import"./useGetAccessRequirement.0deb7b53.js";import"./ManagedACTAccessRequirementStatus.a4169568.js";import"./FileUpload.64cdbb62.js";import"./UserSearchBox.f4d86727.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.32b32420.js";import"./EntityLink.58ee5c18.js";import"./NoSearchResults.b02621a1.js";import"./SynapseVideo.3342ef05.js";import"./IconList.6717b107.js";import"./UserCardList.23549b6e.js";import"./Arrow.e9de9df1.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.29c6fbcb.js";import"./CalendarWithIconFormGroup.c7f21b7f.js";import"./groupBy.c660e9bb.js";import"./EntityModal.b9ea60a7.js";import"./Sort.25a7428d.js";import"./useFavorites.21f5c045.js";const le={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const ce=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,ce as __namedExportsOrder,le as default};

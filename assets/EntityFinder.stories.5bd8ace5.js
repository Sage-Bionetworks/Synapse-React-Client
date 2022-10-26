import{E as o,F as i,V as n}from"./EntityFinder.6bacfdb9.js";import{E as e}from"./EntityIcon.51f27a34.js";import{j as p}from"./jsx-runtime.eafcb716.js";import"./CardContainerLogic.61d570e4.js";import"./index.1b5679ea.js";import"./index.c8a02fae.js";import"./iframe.5b9ef2ae.js";import"./Button.2a9ceb49.js";import"./index.57d09176.js";import"./withStyles.58225468.js";import"./utils.57f84b27.js";import"./Alert.3a69b0d7.js";import"./index.35ce73ec.js";import"./isArray.58b2754e.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.b014c401.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.dcdb7bde.js";import"./use-deep-compare-effect.esm.32d4302a.js";import"./uniq.a7654786.js";import"./_baseSlice.50189bc5.js";import"./toInteger.877b19a2.js";import"./isSymbol.4226a630.js";import"./_cacheHas.4d761572.js";import"./without.ba9da4ea.js";import"./uniqueId.6b2e4177.js";import"./_Set.a93a6693.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.96a18513.js";import"./createSvgIcon.01cb2ea7.js";import"./makeStyles.ba00c68d.js";import"./FacetNav.ff7b4976.js";import"./queryUtils.dade1562.js";import"./useInfiniteQuery.0ce0255d.js";import"./queryKeys.e0d3085f.js";import"./TypeUtils.a2c41307.js";import"./cloneDeep.e13ce5b9.js";import"./_baseClone.705a7ff1.js";import"./_getTag.35a70f0d.js";import"./NoSearchResults.c9c55f7c.js";import"./NoData.6637f170.js";import"./ElementWithTooltip.fe39892b.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.625594e1.js";import"./InfoOutlined.f91cf818.js";import"./Dropdown.7162bc12.js";import"./Modal.b6a2ef3c.js";import"./useWaitForDOMRef.883e5955.js";import"./inheritsLoose.bfa631c4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.8d1cac1c.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.bf1c9bc1.js";import"./useMutation.884ae33f.js";import"./pick.359c1a4c.js";import"./Checkbox.6d5555ef.js";import"./RadioGroup.e5def0a0.js";import"./moment.a565bb48.js";import"./RangeSlider.f407560b.js";import"./factory.a50674f0.js";import"./react-sizeme.dd262d7d.js";import"./Skeleton.7d351d4d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.c34152cb.js";import"./Typography.049c6864.js";import"./Close.0b1926a3.js";import"./react-select.esm.b2d311d5.js";import"./Select-54ac8379.esm.349182a5.js";import"./CustomSelectWidget.881b9f9a.js";import"./index.browser.4cb65851.js";import"./WarningModal.c3d992db.js";import"./react-intersection-observer.esm.a05776db.js";import"./UserCard.a35d5b7e.js";import"./IconCopy.f88536dd.js";import"./SkeletonTable.aa50450b.js";import"./times.5f1a3032.js";import"./ToastMessage.a4b76c0b.js";import"./FullWidthAlert.a684bfe0.js";import"./Overlay.ae4ca009.js";import"./DateFormatter.ac7d7939.js";import"./core.esm.70554193.js";import"./isEmpty.31b01d03.js";import"./isEqual.f5035d64.js";import"./union.44090b51.js";import"./isString.19ecf57a.js";import"./useGetDownloadListStatistics.b986f94a.js";import"./QueryCount.6c5b0a28.js";import"./useGetAccessRequirement.d431fc61.js";import"./ManagedACTAccessRequirementStatus.53c8ed1d.js";import"./FileUpload.aa6d26aa.js";import"./UserSearchBox.52f13629.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.98cec68e.js";import"./EntityLink.777bfa8f.js";import"./SynapseVideo.4a63498d.js";import"./IconList.289dc51f.js";import"./UserCardList.0a47a3c6.js";import"./Arrow.fcc5442b.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.54ff3728.js";import"./CalendarWithIconFormGroup.292b334c.js";import"./groupBy.231358eb.js";import"./EntityModal.7d0f2220.js";import"./Sort.538629a9.js";import"./useFavorites.dda9680f.js";const le={parameters:{storySource:{source:`import React from 'react'
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

import{E as e,F as i,V as r}from"./EntityFinder.cbef9bd7.js";import{E as o}from"./index.76b38c54.js";import{j as p}from"./jsx-runtime.c28691f9.js";import"./CardContainerLogic.6ade039e.js";import"./sqlFunctions.66d0ccb5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.756f7d3e.js";import"./useGetInfoFromIds.d705ac97.js";import"./use-deep-compare-effect.esm.3ebc19e4.js";import"./uniq.2c176ac8.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5e16c8d9.js";import"./isSymbol.3a617ca5.js";import"./isArray.00855dd8.js";import"./Button.01687609.js";import"./index.35ce73ec.js";import"./_cacheHas.702c76d8.js";import"./without.d15374c1.js";import"./uniqueId.dd846a92.js";import"./_Set.3ccae59b.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.290eab74.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.2d7858ac.js";import"./queryUtils.29780774.js";import"./useInfiniteQuery.4ac5428a.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.cb414b63.js";import"./_baseClone.a1dc38d3.js";import"./_getTag.8cd19e02.js";import"./NoSearchResults.5e386327.js";import"./NoData.eaeb518a.js";import"./unCamelCase.07e38083.js";import"./useEntity.72150e51.js";import"./useMutation.3c0f4250.js";import"./pick.69e60d79.js";import"./isEqual.d7457938.js";import"./ElementWithTooltip.042ad96d.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.7c5a9ccb.js";import"./TransitionGroupContext.4d4491d8.js";import"./styled.0b15883e.js";import"./Tooltip.d4e3b915.js";import"./createSvgIcon.40781e98.js";import"./useTheme.c2c5870a.js";import"./index.e19c4baa.js";import"./iframe.180ebcad.js";import"./utils.147770f5.js";import"./InfoOutlined.276d33db.js";import"./Dropdown.52eb9090.js";import"./usePrevious.93bb183c.js";import"./createWithBsPrefix.e1e1b086.js";import"./hook.668b90b8.js";import"./contains.a1192dc5.js";import"./usePopperMarginModifiers.39120970.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.a4ffafa3.js";import"./RadioGroup.e532ac13.js";import"./dayjs.min.0f21fca1.js";import"./RangeSlider.ca2db74a.js";import"./factory.0601d4aa.js";import"./react-sizeme.1d1a1dc1.js";import"./Skeleton.5e7b1855.js";import"./emotion-react.browser.esm.07119d08.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.65c8c5c9.js";import"./Modal.a936254b.js";import"./inheritsLoose.d88c30ef.js";import"./divWithClassName.5d82b3d5.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.4971e4f8.js";import"./Typography.979062bc.js";import"./SelectionCriteriaPill.888fe1b5.js";import"./Close.a651a325.js";import"./react-select.esm.7b3aa535.js";import"./Select-54ac8379.esm.37d3a4b7.js";import"./CustomSelectWidget.a1c56d66.js";import"./index.browser.48c43a17.js";import"./UserCard.4fc0c953.js";import"./IconCopy.13ec7c8a.js";import"./SkeletonTable.a4cdc768.js";import"./times.56956096.js";import"./ToastMessage.15875dd0.js";import"./FullWidthAlert.44d2e621.js";import"./Alert.39b51be4.js";import"./Overlay.26aae53e.js";import"./WarningModal.3ead0df2.js";import"./react-intersection-observer.esm.3074ea26.js";import"./DateFormatter.6a862c70.js";import"./utc.689ac7ec.js";import"./EntityIcon.518b2fba.js";import"./core.esm.af84899e.js";import"./isEmpty.be2c0fe7.js";import"./union.9835e5b7.js";import"./isString.9eb5361c.js";import"./Button.5474ded1.js";import"./ButtonBase.62e27216.js";import"./relativeTime.4b958b5a.js";import"./useGetDownloadListStatistics.6916f930.js";import"./QueryCount.6a250f74.js";import"./useGetAccessRequirement.ee9561a6.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.b1556377.js";import"./UserSearchBox.56587c36.js";import"./UserOrTeamBadge.ba139a08.js";import"./EntityLink.37d91978.js";import"./SynapseVideo.a702b220.js";import"./IconList.868a7c39.js";import"./UserCardList.ac330e4a.js";import"./Arrow.447fef27.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.fcd2f96f.js";import"./CalendarWithIconFormGroup.d7bfb481.js";import"./localizedFormat.ae47fcc7.js";import"./IconButton.71087832.js";import"./List.c49c7a0b.js";import"./Modal.c5da27ee.js";import"./Fade.467f608c.js";import"./index.f2a06ad4.js";import"./MenuList.1398b932.js";import"./groupBy.a87196c9.js";import"./EntityModal.9eccc408.js";import"./Sort.f5df3ab1.js";import"./useFavorites.413d0462.js";import"./Link.7916e978.js";const Ao={parameters:{storySource:{source:`import React from 'react'
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

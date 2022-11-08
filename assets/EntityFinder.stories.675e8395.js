import{E as o,F as i,V as n}from"./EntityFinder.bc86c329.js";import{y as e}from"./index.f37f3b8f.js";import{j as p}from"./jsx-runtime.e755df9d.js";import"./CardContainerLogic.fbcd19ea.js";import"./sqlFunctions.3408ddc8.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.b61a1724.js";import"./useGetInfoFromIds.6e925b42.js";import"./use-deep-compare-effect.esm.700faf33.js";import"./uniq.c55e1e59.js";import"./_baseSlice.50189bc5.js";import"./toInteger.44f4879c.js";import"./isSymbol.449c22fe.js";import"./isArray.32035835.js";import"./Button.ce5d2622.js";import"./index.35ce73ec.js";import"./_cacheHas.b6de7e15.js";import"./without.5e5c6054.js";import"./uniqueId.05b48118.js";import"./_Set.d710ebae.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.b6aa8bf5.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.171c80c2.js";import"./queryUtils.27e3106c.js";import"./useInfiniteQuery.c9dc13c8.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.483ff71d.js";import"./_baseClone.fd352cb5.js";import"./_getTag.14203c81.js";import"./NoSearchResults.b7a683d4.js";import"./NoData.e2e0c918.js";import"./unCamelCase.07e38083.js";import"./useEntity.9a17e87f.js";import"./useMutation.65911f81.js";import"./pick.1f6196bd.js";import"./isEqual.67a4cf08.js";import"./ElementWithTooltip.7f730674.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.0451ffde.js";import"./SvgIcon.26fd4209.js";import"./styled.134e90bd.js";import"./Tooltip.68fb53f0.js";import"./createSvgIcon.4e7dae8f.js";import"./utils.61686747.js";import"./index.46e2a3d6.js";import"./iframe.2151c0e3.js";import"./InfoOutlined.f6c28811.js";import"./Dropdown.7542d4d3.js";import"./usePrevious.8c9f92a6.js";import"./createWithBsPrefix.c5475a12.js";import"./contains.c7dcff34.js";import"./usePopperMarginModifiers.64be5d9c.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.baff3041.js";import"./RadioGroup.774f5d0b.js";import"./moment.a565bb48.js";import"./RangeSlider.de41329b.js";import"./factory.1dee65e3.js";import"./react-sizeme.a8b68a27.js";import"./Skeleton.902d2113.js";import"./emotion-react.browser.esm.888ec03a.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.917a8a73.js";import"./Modal.48855f51.js";import"./inheritsLoose.9a3334e1.js";import"./Alert.7ac348fd.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.1fc5c6db.js";import"./Typography.c9ad912d.js";import"./SelectionCriteriaPill.b7ddbbed.js";import"./Close.a18d69c2.js";import"./react-select.esm.50c96607.js";import"./Select-54ac8379.esm.b2296e53.js";import"./CustomSelectWidget.0ac8a1af.js";import"./index.browser.d8058921.js";import"./UserCard.b4b4f075.js";import"./IconCopy.ada7cf84.js";import"./SkeletonTable.dac7e5fd.js";import"./times.005fd51b.js";import"./ToastMessage.3b077507.js";import"./FullWidthAlert.4c671361.js";import"./Overlay.f4f68cfe.js";import"./WarningModal.8f047f4c.js";import"./react-intersection-observer.esm.4be7d989.js";import"./DateFormatter.6da88380.js";import"./EntityIcon.04844139.js";import"./core.esm.7e8172f3.js";import"./isEmpty.04c7f13d.js";import"./union.5abedccb.js";import"./isString.0cef2332.js";import"./useGetDownloadListStatistics.1930ac0b.js";import"./QueryCount.1182ef9c.js";import"./useGetAccessRequirement.0c246789.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.d2f3f41f.js";import"./UserSearchBox.d4ba7e19.js";import"./UserOrTeamBadge.663cdd4f.js";import"./EntityLink.7e97f287.js";import"./ButtonBase.ee0cae3d.js";import"./SynapseVideo.cc515add.js";import"./IconList.447b5f75.js";import"./UserCardList.fc1bceb8.js";import"./Arrow.26a6f329.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.7ba2470d.js";import"./CalendarWithIconFormGroup.4289f917.js";import"./groupBy.40d2199e.js";import"./EntityModal.fc9271ba.js";import"./Sort.f59d2eea.js";import"./useFavorites.d18e51fc.js";const Se={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const ge=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,ge as __namedExportsOrder,Se as default};

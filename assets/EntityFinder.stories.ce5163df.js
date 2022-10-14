import{E as o,F as i,V as n}from"./EntityFinder.ff9b2ebb.js";import{E as e}from"./EntityIcon.c3a44665.js";import{j as p}from"./jsx-runtime.1d2001c8.js";import"./CardContainerLogic.6f45f82a.js";import"./index.a3e4acf8.js";import"./index.43d111f8.js";import"./iframe.11c071de.js";import"./Button.850c0905.js";import"./index.57d09176.js";import"./withStyles.706b11e4.js";import"./utils.b5696502.js";import"./Alert.cbdcee9e.js";import"./index.35ce73ec.js";import"./isArray.a059945b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.3fc47b81.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.c58c98fd.js";import"./use-deep-compare-effect.esm.35b1b1d3.js";import"./uniq.c7f1c7dc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.4e0bd265.js";import"./isSymbol.ce5fe5c9.js";import"./_cacheHas.d2172efb.js";import"./without.58f717b2.js";import"./uniqueId.93061bc8.js";import"./_Set.5a0c9836.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.3a42da93.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.d9bd3780.js";import"./Tooltip.76084c23.js";import"./createSvgIcon.6133e741.js";import"./makeStyles.c53704bf.js";import"./InfoOutlined.31363277.js";import"./Dropdown.ff857418.js";import"./Modal.efedf678.js";import"./useWaitForDOMRef.9ab82534.js";import"./inheritsLoose.24b31555.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e6ab3cb1.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.80de24b3.js";import"./queryUtils.d979d4bc.js";import"./useInfiniteQuery.70f427eb.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.20eefbed.js";import"./_baseClone.5b2e016e.js";import"./_getTag.778e1018.js";import"./useEntity.63b9480e.js";import"./useMutation.ea300502.js";import"./pick.a2970581.js";import"./Checkbox.7dc394cb.js";import"./RadioGroup.0b985b24.js";import"./moment.a565bb48.js";import"./RangeSlider.913d2f10.js";import"./factory.e7dbcdd8.js";import"./react-sizeme.2bf63c15.js";import"./Skeleton.b5215bc5.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e720d5f8.js";import"./Typography.e119af63.js";import"./TypeUtils.a2c41307.js";import"./Close.efb216d7.js";import"./react-select.esm.494d337f.js";import"./Select-54ac8379.esm.e5fa35ad.js";import"./CustomSelectWidget.b21aa545.js";import"./index.browser.125461a7.js";import"./WarningModal.cb5b2f6e.js";import"./react-intersection-observer.esm.fc4fd008.js";import"./UserCard.4c7789bc.js";import"./IconCopy.42575155.js";import"./SkeletonTable.b6dfba04.js";import"./times.665c5ee8.js";import"./ToastMessage.8ffb9391.js";import"./FullWidthAlert.6b98829c.js";import"./Overlay.1b6445a2.js";import"./DateFormatter.0f7db532.js";import"./core.esm.7c2a6c35.js";import"./isEmpty.64cbcef1.js";import"./isEqual.fcde4806.js";import"./union.cf0f8f5e.js";import"./isString.068e405c.js";import"./useGetDownloadListStatistics.1820e480.js";import"./QueryCount.cff24e02.js";import"./NoData.268faa0c.js";import"./useGetAccessRequirement.a9c65df6.js";import"./ManagedACTAccessRequirementStatus.f4ac2fbe.js";import"./FileUpload.ea5c997e.js";import"./UserSearchBox.0318f300.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.5d5f6ffd.js";import"./EntityLink.d75c7d95.js";import"./NoSearchResults.ff2816e8.js";import"./SynapseVideo.b3019f1d.js";import"./IconList.8bf9407a.js";import"./UserCardList.6bc225bd.js";import"./Arrow.034ac943.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.98de036b.js";import"./CalendarWithIconFormGroup.2445c31c.js";import"./groupBy.f9fbf8bc.js";import"./EntityModal.7719fedc.js";import"./Sort.5700c2ba.js";import"./useFavorites.4acfd898.js";const le={parameters:{storySource:{source:`import React from 'react'
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

import{E as o,F as i,V as n}from"./EntityFinder.d700ffa2.js";import{E as e}from"./EntityIcon.7437a5cd.js";import{j as p}from"./jsx-runtime.416d8946.js";import"./CardContainerLogic.2ee1000e.js";import"./index.68699958.js";import"./index.9d682600.js";import"./iframe.51e9009e.js";import"./withStyles.c595751b.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.a75301f2.js";import"./index.57d09176.js";import"./Button.34feb441.js";import"./Transition.b4776308.js";import"./index.35ce73ec.js";import"./isArray.48d04961.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.95ef1484.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.3bbc649f.js";import"./use-deep-compare-effect.esm.911cf7a2.js";import"./uniq.87f6f6b2.js";import"./_baseSlice.50189bc5.js";import"./toInteger.e9d9a3f9.js";import"./isSymbol.110be719.js";import"./_cacheHas.76528ad6.js";import"./without.3d9e3582.js";import"./uniqueId.89dba59c.js";import"./_Set.24c716a1.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.faae6c0d.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.e25d1511.js";import"./Tooltip.032eb6cc.js";import"./createSvgIcon.55245163.js";import"./slicedToArray.e72f11da.js";import"./useTheme.512d0ce3.js";import"./makeStyles.c2ff9465.js";import"./InfoOutlined.a31d8d84.js";import"./Dropdown.37234235.js";import"./Modal.ed9c7214.js";import"./useWaitForDOMRef.b3b34f09.js";import"./useWillUnmount.996d585d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.71f755a4.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.60f84bda.js";import"./queryUtils.e6b4280c.js";import"./useInfiniteQuery.44a5eea1.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.b38775df.js";import"./_baseClone.aa5164db.js";import"./_getTag.d8ab6a75.js";import"./useEntity.5e3ba4ff.js";import"./useMutation.1d252209.js";import"./pick.a8c44bb6.js";import"./Checkbox.a67729ee.js";import"./Collapse.7a92c3a1.js";import"./RadioGroup.ae49130c.js";import"./moment.a565bb48.js";import"./RangeSlider.1a093288.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.7cebd781.js";import"./react-sizeme.6b6a6aad.js";import"./Skeleton.102fc0c3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2e92386a.js";import"./Typography.5433f83a.js";import"./TypeUtils.a2c41307.js";import"./react-select.esm.554acdb0.js";import"./Select-54ac8379.esm.a10c9ff0.js";import"./CustomSelectWidget.ca745bf5.js";import"./index.browser.c9ece89f.js";import"./WarningModal.5a5ec7e8.js";import"./react-intersection-observer.esm.53060fae.js";import"./UserCard.3e52a486.js";import"./IconCopy.30c66d8a.js";import"./SkeletonTable.83d9d8ad.js";import"./times.e2ae8ec1.js";import"./ToastMessage.644c1427.js";import"./FullWidthAlert.a1bdb9b5.js";import"./Overlay.651ab348.js";import"./DateFormatter.9f89cf0c.js";import"./core.esm.b53b67fd.js";import"./isEmpty.b25382de.js";import"./isEqual.7b6bfecb.js";import"./union.e03df24a.js";import"./isString.93041002.js";import"./useGetDownloadListStatistics.6e7aa4af.js";import"./QueryCount.d97a9a23.js";import"./NoData.c00ea909.js";import"./useGetAccessRequirement.d52b3b3c.js";import"./ManagedACTAccessRequirementStatus.5f87b05b.js";import"./FileUpload.6f396c4f.js";import"./UserSearchBox.4eb9ba8d.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.006e69ca.js";import"./EntityLink.76d9b026.js";import"./NoSearchResults.9a5ac96a.js";import"./SynapseVideo.52c43ed3.js";import"./IconList.ce367970.js";import"./UserCardList.cb1d9739.js";import"./Arrow.0cf09403.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.951ced6c.js";import"./CalendarWithIconFormGroup.7492589a.js";import"./groupBy.65922475.js";import"./EntityModal.f3626d68.js";import"./Sort.75d199ad.js";import"./useFavorites.5698485c.js";const Te={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Se=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,Se as __namedExportsOrder,Te as default};

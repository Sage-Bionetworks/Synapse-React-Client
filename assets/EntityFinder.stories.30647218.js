import{E as o,F as i,V as n}from"./EntityFinder.04f63cca.js";import{E as e}from"./EntityIcon.f94adadb.js";import{j as p}from"./jsx-runtime.94e3dcbc.js";import"./CardContainerLogic.4c2772e2.js";import"./index.c285f2ad.js";import"./index.189336ba.js";import"./iframe.7112cc2f.js";import"./withStyles.25512efa.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.a8f3dea8.js";import"./index.57d09176.js";import"./Button.ee922916.js";import"./Transition.aafae1a0.js";import"./index.35ce73ec.js";import"./isArray.74b811f1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.972646c7.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.87ab6772.js";import"./use-deep-compare-effect.esm.46a58aa4.js";import"./uniq.4ad2b73b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.f3d0fd1c.js";import"./isSymbol.9ddd9e86.js";import"./_cacheHas.cd26227f.js";import"./without.227ff1e6.js";import"./uniqueId.5395311d.js";import"./_Set.c5c4b096.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.7d361f05.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.6490189f.js";import"./Tooltip.7e80f23c.js";import"./createSvgIcon.aba3ff90.js";import"./slicedToArray.e72f11da.js";import"./useTheme.90c94c01.js";import"./makeStyles.13257dd8.js";import"./InfoOutlined.c8be42fa.js";import"./Dropdown.2bb7fbbe.js";import"./Modal.7dcfaa17.js";import"./useWaitForDOMRef.bc6c94c4.js";import"./useWillUnmount.84231f67.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e98e3e3e.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.d2cfd964.js";import"./queryUtils.22849ec3.js";import"./useInfiniteQuery.26111c62.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.f4f228fc.js";import"./_baseClone.17fc432f.js";import"./_getTag.3392221e.js";import"./useEntity.d65d96ee.js";import"./useMutation.c5d547ae.js";import"./pick.9facd995.js";import"./Checkbox.833fdcb5.js";import"./Collapse.adc95d49.js";import"./RadioGroup.f950f76d.js";import"./moment.a565bb48.js";import"./RangeSlider.eaa4fa18.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.12497989.js";import"./react-sizeme.44a0d31f.js";import"./Skeleton.01b7e31d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.529ceff5.js";import"./Typography.c058b4a5.js";import"./TypeUtils.a2c41307.js";import"./react-select.esm.215869ba.js";import"./Select-54ac8379.esm.e2fb5a25.js";import"./CustomSelectWidget.21ab911a.js";import"./index.browser.fb81d43f.js";import"./react-intersection-observer.esm.3e3b24c0.js";import"./UserCard.48cdfe31.js";import"./IconCopy.dc0169b8.js";import"./SkeletonTable.7da12e22.js";import"./times.37cc76dc.js";import"./ToastMessage.8eafdcee.js";import"./FullWidthAlert.50b3fdeb.js";import"./Overlay.4edc376f.js";import"./DateFormatter.14ac3320.js";import"./core.esm.9926837d.js";import"./isEmpty.879e59dd.js";import"./isEqual.183dee45.js";import"./union.0417b8dd.js";import"./isString.6ea5fc0d.js";import"./useGetDownloadListStatistics.24d2dedc.js";import"./QueryCount.14514676.js";import"./NoData.a43fb8b4.js";import"./useGetAccessRequirement.73dbc519.js";import"./ManagedACTAccessRequirementStatus.c1aa9693.js";import"./FileUpload.fd2e2f00.js";import"./UserSearchBox.3f6994f4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.235dbb93.js";import"./EntityLink.7a33b226.js";import"./NoSearchResults.aa63dc7b.js";import"./SynapseVideo.8395891c.js";import"./IconList.0d3f8d3d.js";import"./UserCardList.34dd8ba6.js";import"./Arrow.a685653a.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.21a2e776.js";import"./CalendarWithIconFormGroup.a58319ae.js";import"./groupBy.676fcb3b.js";import"./EntityModal.571a0eb9.js";import"./WarningModal.3837f41b.js";import"./Sort.81cb699c.js";import"./useFavorites.08e3c392.js";const Te={parameters:{storySource:{source:`import React from 'react'
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

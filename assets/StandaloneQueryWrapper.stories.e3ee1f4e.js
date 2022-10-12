import{n as t}from"./CardContainerLogic.525e473b.js";import{j as i}from"./jsx-runtime.f7cf66fc.js";import"./index.a7b4e4df.js";import"./index.1e38edd3.js";import"./iframe.7a93df40.js";import"./Alert.a83e08c9.js";import"./Button.8c8504e0.js";import"./index.57d09176.js";import"./Transition.9d380883.js";import"./index.35ce73ec.js";import"./isArray.a5837af6.js";import"./withStyles.ddbf8a64.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d61a6d98.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.46d82302.js";import"./use-deep-compare-effect.esm.2af231c9.js";import"./uniq.da1993f7.js";import"./_baseSlice.50189bc5.js";import"./toInteger.2ba4f663.js";import"./isSymbol.c2dfe727.js";import"./_cacheHas.3bd942cd.js";import"./without.f66365c3.js";import"./uniqueId.bff82890.js";import"./_Set.30f40b38.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.38dfbeae.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.09883cec.js";import"./Tooltip.7bec90df.js";import"./createSvgIcon.fe8b3870.js";import"./useTheme.af842711.js";import"./makeStyles.c3ae2cc2.js";import"./InfoOutlined.a5d342c6.js";import"./ElementWithTooltip.acf8538e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.a23c4d18.js";import"./Modal.d2d919b5.js";import"./useWaitForDOMRef.58e2d194.js";import"./inheritsLoose.70012080.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.206050ec.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.15d72b7c.js";import"./queryUtils.336cf5e5.js";import"./useInfiniteQuery.9ecf2d2e.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.8f25a5be.js";import"./_baseClone.1ffdc33c.js";import"./_getTag.44672c3a.js";import"./useEntity.28ef4d9d.js";import"./useMutation.d27d3a67.js";import"./pick.193b483e.js";import"./Checkbox.2fa6725f.js";import"./Collapse.062dd5ab.js";import"./RadioGroup.e5383a0b.js";import"./moment.a565bb48.js";import"./RangeSlider.42d419bd.js";import"./factory.bc323c03.js";import"./react-sizeme.bf3eb88d.js";import"./Skeleton.76391d30.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.ce5011dc.js";import"./Typography.dfe40719.js";import"./react-select.esm.843836e6.js";import"./Select-54ac8379.esm.84c2d679.js";import"./CustomSelectWidget.d8898dba.js";import"./index.browser.15da9886.js";import"./WarningModal.82d863eb.js";import"./react-intersection-observer.esm.479d13c0.js";import"./UserCard.289eef41.js";import"./IconCopy.96e50061.js";import"./SkeletonTable.ff560500.js";import"./times.a9961130.js";import"./ToastMessage.9c9a0082.js";import"./FullWidthAlert.73cdbacd.js";import"./Overlay.6b8ad843.js";import"./DateFormatter.4a4a8911.js";import"./core.esm.f7516a9f.js";import"./isEmpty.529ce659.js";import"./isEqual.0a82face.js";import"./union.6ab0d04a.js";import"./isString.52071ff5.js";import"./useGetDownloadListStatistics.aec1d5de.js";import"./QueryCount.eb6004b3.js";import"./NoData.ee550e92.js";import"./useGetAccessRequirement.3f636936.js";import"./ManagedACTAccessRequirementStatus.944a52ba.js";import"./FileUpload.4a491036.js";import"./UserSearchBox.22ab5a9c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.77421aa6.js";import"./EntityLink.03e12cb1.js";import"./NoSearchResults.cd02335c.js";import"./SynapseVideo.46a8d2ab.js";import"./IconList.df7f04f2.js";import"./UserCardList.d9ba2cad.js";const ot={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StandaloneQueryWrapper from './StandaloneQueryWrapper'

export default {
  title: 'Explore/StandaloneQueryWrapper',
  component: StandaloneQueryWrapper,
} as ComponentMeta<typeof StandaloneQueryWrapper>

const Template: ComponentStory<typeof StandaloneQueryWrapper> = args => (
  <StandaloneQueryWrapper {...args} />
)

export const WithoutTopLevelControls = Template.bind({})
WithoutTopLevelControls.args = {
  title: 'Data Files',
  sql: \`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10\`,
  columnLinks: [
    {
      matchColumnName: 'studyOrProject',
      isMarkdown: true,
    },
  ],
}

export const WithColumnAlias = Template.bind({})
WithColumnAlias.args = {
  title: 'With column alias',
  sql: \`SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')\`,
}

export const TopLevelControls = Template.bind({})
TopLevelControls.args = {
  title: 'Data Files',
  name: 'Top Level Controls demo',
  hideDownload: false,
  sql: \`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10\`,
  showTopLevelControls: true,
}
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),e=o.bind({});e.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const n=o.bind({});n.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const p=o.bind({});p.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const tt=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{p as TopLevelControls,n as WithColumnAlias,e as WithoutTopLevelControls,tt as __namedExportsOrder,ot as default};

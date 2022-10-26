import{n as t}from"./CardContainerLogic.940095ec.js";import{j as i}from"./jsx-runtime.8900a285.js";import"./index.a2edd6ac.js";import"./index.912828a9.js";import"./iframe.c24069c1.js";import"./Button.e50f7fc9.js";import"./index.57d09176.js";import"./withStyles.1744e3f1.js";import"./utils.d7ed0c75.js";import"./Alert.3046b0d1.js";import"./index.35ce73ec.js";import"./isArray.4e3f2043.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4e934e01.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.21c926a3.js";import"./use-deep-compare-effect.esm.18f4fc59.js";import"./uniq.0101b637.js";import"./_baseSlice.50189bc5.js";import"./toInteger.9a0acd55.js";import"./isSymbol.74032678.js";import"./_cacheHas.009241fb.js";import"./without.2f1c710c.js";import"./uniqueId.711b61c1.js";import"./_Set.6148150a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.011cd5d2.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.4d0133e6.js";import"./Tooltip.7bdb955a.js";import"./createSvgIcon.11696c8f.js";import"./makeStyles.f81fc0de.js";import"./InfoOutlined.19bd48b4.js";import"./FacetNav.024dce83.js";import"./queryUtils.8b5b7a77.js";import"./useInfiniteQuery.a2a2b7db.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d0482732.js";import"./_baseClone.a045736e.js";import"./_getTag.d415594b.js";import"./NoSearchResults.61a2f3bf.js";import"./NoData.403e2302.js";import"./ElementWithTooltip.27d92c52.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.15bf2839.js";import"./Modal.eeedbec4.js";import"./useWaitForDOMRef.24f15ffd.js";import"./inheritsLoose.25ae3800.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.71bbcee2.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.ec705c21.js";import"./useMutation.5cf04636.js";import"./pick.e339c90c.js";import"./Checkbox.bfe2354a.js";import"./RadioGroup.c28c0234.js";import"./moment.a565bb48.js";import"./RangeSlider.ba0f62ee.js";import"./factory.bf46e971.js";import"./react-sizeme.bc377aaa.js";import"./Skeleton.a2940302.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.3381e097.js";import"./Typography.f8e8965b.js";import"./Close.a555399e.js";import"./react-select.esm.98d48e2a.js";import"./Select-54ac8379.esm.ef963bc1.js";import"./CustomSelectWidget.20c7ef7c.js";import"./index.browser.642b5203.js";import"./WarningModal.610e49e9.js";import"./react-intersection-observer.esm.53fba369.js";import"./UserCard.8b26eff3.js";import"./IconCopy.8a561b04.js";import"./SkeletonTable.4379ada8.js";import"./times.49ac87ad.js";import"./ToastMessage.2fd043cd.js";import"./FullWidthAlert.aad3bca8.js";import"./Overlay.b5c4eb49.js";import"./DateFormatter.fa2aa2f5.js";import"./core.esm.c55ebb9c.js";import"./isEmpty.b0331ac8.js";import"./isEqual.b42c1af9.js";import"./union.a609b4c0.js";import"./isString.4745c8bc.js";import"./useGetDownloadListStatistics.d51ead21.js";import"./QueryCount.bbed6327.js";import"./useGetAccessRequirement.21de15b3.js";import"./ManagedACTAccessRequirementStatus.6930152b.js";import"./FileUpload.4f087a3a.js";import"./UserSearchBox.90a50f6c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.9e1e9cf6.js";import"./EntityLink.34751896.js";import"./SynapseVideo.43c3df6b.js";import"./IconList.1dadd204.js";import"./UserCardList.feb996bb.js";const $o={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),e=o.bind({});e.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const n=o.bind({});n.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const p=o.bind({});p.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const ot=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{p as TopLevelControls,n as WithColumnAlias,e as WithoutTopLevelControls,ot as __namedExportsOrder,$o as default};

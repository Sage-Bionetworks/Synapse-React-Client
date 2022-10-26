import{n as t}from"./CardContainerLogic.5169d3d4.js";import{j as i}from"./jsx-runtime.36c99582.js";import"./index.7b571c3f.js";import"./index.7dc20356.js";import"./iframe.67c9a843.js";import"./Button.4aa3a811.js";import"./index.57d09176.js";import"./withStyles.0fa6dc3f.js";import"./utils.0ebf16b5.js";import"./Alert.e200e4c1.js";import"./index.35ce73ec.js";import"./isArray.919b23ad.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.afc4513f.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.b73f5312.js";import"./use-deep-compare-effect.esm.5338fb7a.js";import"./uniq.29c95b3b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.32e560ec.js";import"./isSymbol.aedffc3c.js";import"./_cacheHas.4292b1e4.js";import"./without.e37dd220.js";import"./uniqueId.4c721b80.js";import"./_Set.a179c6b8.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.03a29f5a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.18fba2a3.js";import"./Tooltip.687fac3a.js";import"./createSvgIcon.68552f98.js";import"./makeStyles.590b227a.js";import"./InfoOutlined.3047c16b.js";import"./FacetNav.bd0737fc.js";import"./queryUtils.2ed4cdea.js";import"./useInfiniteQuery.84777ede.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.414171f8.js";import"./_baseClone.3e8cf786.js";import"./_getTag.9bfe63ce.js";import"./NoSearchResults.b94b325f.js";import"./NoData.eb78382d.js";import"./ElementWithTooltip.49b24673.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.03357e28.js";import"./Modal.f1ce3d69.js";import"./useWaitForDOMRef.8b5dbd8c.js";import"./inheritsLoose.a7020c7f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.fffe465a.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.bd3ff298.js";import"./useMutation.de119889.js";import"./pick.c95a2825.js";import"./Checkbox.5ca6e0a5.js";import"./RadioGroup.2a2f2220.js";import"./moment.a565bb48.js";import"./RangeSlider.300f4c78.js";import"./factory.6e9d16d0.js";import"./react-sizeme.d406ca6d.js";import"./Skeleton.8b8b9138.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.09178111.js";import"./Typography.fbe70ffe.js";import"./Close.d41787fd.js";import"./react-select.esm.b9b85b93.js";import"./Select-54ac8379.esm.f1c2f3ec.js";import"./CustomSelectWidget.d87f2325.js";import"./index.browser.e7885fe8.js";import"./WarningModal.b3ead7ed.js";import"./react-intersection-observer.esm.12b7f44c.js";import"./UserCard.07bb7dc1.js";import"./IconCopy.59a8cb20.js";import"./SkeletonTable.f0574313.js";import"./times.869ca9ec.js";import"./ToastMessage.ac6c5fb4.js";import"./FullWidthAlert.cabbd8c8.js";import"./Overlay.4fd8dcb1.js";import"./DateFormatter.69806090.js";import"./core.esm.50338a5d.js";import"./isEmpty.db49d2f4.js";import"./isEqual.4360564f.js";import"./union.c18aa702.js";import"./isString.d09d652f.js";import"./useGetDownloadListStatistics.4dbe2d04.js";import"./QueryCount.ed108438.js";import"./useGetAccessRequirement.9d56fa92.js";import"./ManagedACTAccessRequirementStatus.84d524a0.js";import"./FileUpload.bbebf8b0.js";import"./UserSearchBox.91c96416.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.0c31a016.js";import"./EntityLink.aa98aee1.js";import"./SynapseVideo.be891c0f.js";import"./IconList.09b17147.js";import"./UserCardList.d69f79e0.js";const $o={parameters:{storySource:{source:`import React from 'react'
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

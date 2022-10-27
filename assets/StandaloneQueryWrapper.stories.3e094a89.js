import{n as t}from"./CardContainerLogic.4c8f9153.js";import{j as i}from"./jsx-runtime.bdebd148.js";import"./index.8be8b52c.js";import"./index.131112ec.js";import"./iframe.92685df1.js";import"./Button.2b7fb582.js";import"./index.57d09176.js";import"./withStyles.d0c35d1c.js";import"./utils.d8861539.js";import"./Alert.2a491573.js";import"./index.35ce73ec.js";import"./isArray.b696739b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2b88c9a1.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.54ee0d46.js";import"./use-deep-compare-effect.esm.2dfbd593.js";import"./uniq.056f9926.js";import"./_baseSlice.50189bc5.js";import"./toInteger.22de24ba.js";import"./isSymbol.a301e13d.js";import"./_cacheHas.e0293e09.js";import"./without.204274b0.js";import"./uniqueId.fdacb119.js";import"./_Set.2b9007a5.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.1d29964e.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.a57df8e4.js";import"./Tooltip.3d6e7019.js";import"./createSvgIcon.27bceae9.js";import"./makeStyles.93952b3f.js";import"./InfoOutlined.ca5de4f0.js";import"./FacetNav.1a892f7b.js";import"./queryUtils.99411522.js";import"./useInfiniteQuery.9cb7f5d5.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.aa016315.js";import"./_baseClone.75dc9cad.js";import"./_getTag.e1fa0f07.js";import"./NoSearchResults.8b2199dc.js";import"./NoData.b23bcc77.js";import"./ElementWithTooltip.5b0694b8.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.25528ff3.js";import"./Modal.60354409.js";import"./useWaitForDOMRef.dab4e6d9.js";import"./inheritsLoose.527ef04e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.0915379d.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.77df8c34.js";import"./useMutation.1500ce23.js";import"./pick.a9d9bf93.js";import"./Checkbox.fb42547f.js";import"./RadioGroup.d56761a7.js";import"./moment.a565bb48.js";import"./RangeSlider.fd30989a.js";import"./factory.4a43f97c.js";import"./react-sizeme.05e754cb.js";import"./Skeleton.8bc2d5f2.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.28c0e808.js";import"./Typography.d5646d3f.js";import"./Close.d00cbbee.js";import"./react-select.esm.0625bbd9.js";import"./Select-54ac8379.esm.8753c42f.js";import"./CustomSelectWidget.7ad0e8fd.js";import"./index.browser.db319661.js";import"./WarningModal.0f4a4892.js";import"./react-intersection-observer.esm.08213148.js";import"./UserCard.19c84b60.js";import"./IconCopy.115b585f.js";import"./SkeletonTable.c9ae53bc.js";import"./times.e0d233ea.js";import"./ToastMessage.9511113a.js";import"./FullWidthAlert.25897ee9.js";import"./Overlay.73c56702.js";import"./DateFormatter.27d18384.js";import"./core.esm.ce4666d3.js";import"./isEmpty.35441d6b.js";import"./isEqual.ce2b8e36.js";import"./union.ce29ba8a.js";import"./isString.3ef0182d.js";import"./useGetDownloadListStatistics.798be5b7.js";import"./QueryCount.c365d2a3.js";import"./useGetAccessRequirement.71137bf5.js";import"./ManagedACTAccessRequirementStatus.498e8b29.js";import"./FileUpload.e44301e8.js";import"./UserSearchBox.7e92c17a.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.a9c78c07.js";import"./EntityLink.2f7211ce.js";import"./SynapseVideo.fc658890.js";import"./IconList.7dfc4b7c.js";import"./UserCardList.821fae22.js";const $o={parameters:{storySource:{source:`import React from 'react'
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

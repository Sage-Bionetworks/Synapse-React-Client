import{s as t}from"./AccessRequirementList.3ac35bdf.js";import{j as i}from"./jsx-runtime.30b0b063.js";import"./index.004e53d6.js";import"./index.a3b83451.js";import"./iframe.7f20f630.js";import"./SynapseConstants.aef18750.js";import"./Button.4f0daaa4.js";import"./styled.4350a8f3.js";import"./Tooltip.f326ea8a.js";import"./SvgIcon.a1d78dff.js";import"./useTheme.bbb702a0.js";import"./TransitionGroupContext.4dd5d6a9.js";import"./FullWidthAlert.12957b45.js";import"./hook.82358120.js";import"./createWithBsPrefix.67525ed1.js";import"./divWithClassName.fc6b9e1a.js";import"./index.35ce73ec.js";import"./Typography.e0f3806f.js";import"./Fade.13693e7f.js";import"./isArray.1ceec0fc.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9b38face.js";import"./IconButton.32d1d9ea.js";import"./ButtonBase.32a6d369.js";import"./emotion-react.browser.esm.f592d4ba.js";import"./Link.671fdc30.js";import"./Button.9f139960.js";import"./useGetInfoFromIds.31a24e96.js";import"./use-deep-compare-effect.esm.482de782.js";import"./uniq.4b667121.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ac8d0258.js";import"./isSymbol.a68e106b.js";import"./_cacheHas.9d395393.js";import"./without.353d343d.js";import"./toString.0784e7f5.js";import"./_Set.24e6e8e7.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.667d64ee.js";import"./Modal.4b6f87a4.js";import"./contains.4aff3092.js";import"./inheritsLoose.acddc658.js";import"./usePrevious.407c8514.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.0fac0f63.js";import"./UserCard.8f93d708.js";import"./IconCopy.b0b77e27.js";import"./SkeletonTable.d4ad4639.js";import"./times.9e428882.js";import"./Skeleton.12921ce3.js";import"./ToastMessage.0ad637d7.js";import"./uniqueId.11b542f1.js";import"./Overlay.6a310082.js";import"./usePopperMarginModifiers.ff236d51.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.2bc67909.js";import"./useInfiniteQuery.26f32ba1.js";import"./DateFormatter.b0142474.js";import"./dayjs.min.bbadf1b7.js";import"./utc.ab78fb46.js";import"./EntityIcon.14de104d.js";import"./core.esm.edaed8bc.js";import"./pick.b621d971.js";import"./_baseClone.0658ca9d.js";import"./isEmpty.2b33ff63.js";import"./isEqual.69f0b7e9.js";import"./index.browser.1f9bb947.js";import"./union.b9c69b1b.js";import"./CustomSelectWidget.37b0e148.js";import"./Select-54ac8379.esm.dc31b5d3.js";import"./isString.04e79eb0.js";import"./factory.1406cd1d.js";import"./sqlFunctions.1f9ba8fc.js";import"./QueryFilter.24d6853f.js";import"./useEntity.12f188e0.js";import"./useMutation.8683269e.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.22d6495c.js";import"./queryUtils.8f39e513.js";import"./cloneDeep.0550986a.js";import"./NoSearchResults.f96c3e8d.js";import"./NoData.a592f593.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.eca6bae5.js";import"./ElementWithTooltip.80ed4983.js";import"./Dropdown.eeff7c4d.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.805098d5.js";import"./RadioGroup.e718da9a.js";import"./RangeSlider.27c005be.js";import"./react-sizeme.bc565794.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.b3bc1b97.js";import"./Close.5ba53f36.js";import"./relativeTime.9e7dcaa0.js";import"./useDownloadList.3c79b040.js";import"./QueryCount.6252e08a.js";import"./react-select.esm.8c0efa9b.js";import"./IconList.691fbf90.js";import"./UserCardList.09054a1e.js";import"./useAccessRequirements.c825da38.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.e6793fd9.js";import"./UserSearchBox.47fd0364.js";import"./UserOrTeamBadge.2750084f.js";import"./EntityLink.e6477167.js";import"./ErrorChip.2b68e6ed.js";import"./SynapseVideo.f01de7a7.js";const ut={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),p=o.bind({});p.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const e=o.bind({});e.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const Tt=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,e as WithColumnAlias,p as WithoutTopLevelControls,Tt as __namedExportsOrder,ut as default};

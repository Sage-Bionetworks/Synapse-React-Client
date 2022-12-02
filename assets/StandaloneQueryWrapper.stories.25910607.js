import{q as t}from"./CardContainerLogic.1635eeaa.js";import{j as i}from"./jsx-runtime.e3bfef16.js";import"./index.62dd2683.js";import"./index.5b26081f.js";import"./iframe.2f11fea3.js";import"./SynapseConstants.290eab74.js";import"./Button.d5f5019a.js";import"./styled.2799bbab.js";import"./utils.09644bf2.js";import"./TransitionGroupContext.f0c2dee6.js";import"./useTheme.9f954659.js";import"./Alert.a811cd40.js";import"./hook.1b918640.js";import"./createWithBsPrefix.af2c57e3.js";import"./divWithClassName.0eda4494.js";import"./index.35ce73ec.js";import"./Fade.8c636cf5.js";import"./isArray.1a1d4e26.js";import"./getEndpoint.bb7ded34.js";import"./Link.7c4fde04.js";import"./Typography.7dc1d80a.js";import"./Button.9a993919.js";import"./ButtonBase.4ded6e01.js";import"./emotion-react.browser.esm.7b70ec33.js";import"./sqlFunctions.952f1ecd.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.10fc25c3.js";import"./useGetInfoFromIds.79de9156.js";import"./use-deep-compare-effect.esm.afdf85aa.js";import"./uniq.b52cd8cb.js";import"./_baseSlice.50189bc5.js";import"./toInteger.1f86ccb4.js";import"./isSymbol.425832e0.js";import"./_cacheHas.d0d51990.js";import"./without.de66f971.js";import"./uniqueId.b86d1d32.js";import"./_Set.a4dab575.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.d0eae8c8.js";import"./queryUtils.6d80735e.js";import"./useInfiniteQuery.b4141516.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.036a0ba6.js";import"./_baseClone.3c332ec4.js";import"./_getTag.f06ee663.js";import"./NoSearchResults.b804eac9.js";import"./NoData.29645260.js";import"./unCamelCase.07e38083.js";import"./useEntity.d2256ec6.js";import"./useMutation.ebd4f8bb.js";import"./pick.0a9b55b1.js";import"./isEqual.ff7613c1.js";import"./ElementWithTooltip.2d828b88.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.fe1e65ad.js";import"./Tooltip.1d7a2ca6.js";import"./createSvgIcon.3210eda0.js";import"./InfoOutlined.2ed956d4.js";import"./Dropdown.cec674e9.js";import"./usePrevious.3d07995f.js";import"./contains.21883a94.js";import"./usePopperMarginModifiers.5c96dd9b.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.45cc0138.js";import"./RadioGroup.b6b80b8d.js";import"./dayjs.min.9dddca0b.js";import"./RangeSlider.549d3ce6.js";import"./factory.019abcf2.js";import"./react-sizeme.14caf358.js";import"./Skeleton.1a2438b9.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.1521de47.js";import"./Modal.a4e0f3c8.js";import"./inheritsLoose.1368d629.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.dee55da0.js";import"./SelectionCriteriaPill.0d49a7af.js";import"./Close.33aa637a.js";import"./react-select.esm.2a22e96a.js";import"./Select-54ac8379.esm.4659c1e6.js";import"./CustomSelectWidget.7dc8e3f9.js";import"./index.browser.97175636.js";import"./UserCard.326e35e8.js";import"./IconCopy.d5fb86d3.js";import"./SkeletonTable.c539f085.js";import"./times.25ed313e.js";import"./ToastMessage.51646f1c.js";import"./FullWidthAlert.88a965d7.js";import"./Overlay.349481dc.js";import"./WarningModal.7f067911.js";import"./react-intersection-observer.esm.d8b41fcb.js";import"./DateFormatter.e8cffcc7.js";import"./utc.89139710.js";import"./EntityIcon.a8a67a66.js";import"./core.esm.24744b56.js";import"./isEmpty.c76f8d43.js";import"./union.17c6db2b.js";import"./isString.9894c5d5.js";import"./relativeTime.0e87f54c.js";import"./useGetDownloadListStatistics.ea831ed1.js";import"./QueryCount.7ca5a477.js";import"./useGetAccessRequirement.7d03ff0c.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.e5b5ce31.js";import"./UserSearchBox.c4b4f10f.js";import"./UserOrTeamBadge.aa102dc2.js";import"./EntityLink.b72cacd3.js";import"./SynapseVideo.c22955ed.js";import"./IconList.60d871b8.js";import"./UserCardList.ff63c51c.js";const Tt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),p=o.bind({});p.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const e=o.bind({});e.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const yt=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,e as WithColumnAlias,p as WithoutTopLevelControls,yt as __namedExportsOrder,Tt as default};

import{q as t}from"./HelpPopover.2e6d375a.js";import{j as i}from"./jsx-runtime.edcee20f.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./usePopperMarginModifiers.3784b24d.js";import"./contains.73b2d2ff.js";import"./createWithBsPrefix.fb2e744c.js";import"./Button.beed9c8a.js";import"./hasClass.56fd144a.js";import"./EntityTypeUtils.f136fe8e.js";import"./Fade.e73bdacf.js";import"./styled.57026967.js";import"./useTheme.c864c010.js";import"./Tooltip.6287427b.js";import"./SvgIcon.cf85a686.js";import"./TransitionGroupContext.9f30f89b.js";import"./isArray.ba2a5774.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a36fd00f.js";import"./IconButton.f86e6b85.js";import"./ButtonBase.8a19de44.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./Link.c844031a.js";import"./Typography.8ba12270.js";import"./Button.237100ef.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./divWithClassName.198d5031.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.5e2052bf.js";import"./Modal.c09bb9ef.js";import"./inheritsLoose.82034c01.js";import"./usePrevious.81a072b7.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.b1b60d08.js";import"./UserCard.d9f9873d.js";import"./IconCopy.a9a46157.js";import"./SkeletonTable.eac87a94.js";import"./times.d987e694.js";import"./toInteger.93344759.js";import"./isSymbol.4e401305.js";import"./Skeleton.7309b0e8.js";import"./ToastMessage.fe900393.js";import"./FullWidthAlert.15c58824.js";import"./uniqueId.d49ff0ce.js";import"./Overlay.0deab64d.js";import"./WarningModal.1c43b336.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.ac94f3bc.js";import"./useInfiniteQuery.62663485.js";import"./DateFormatter.49abe40b.js";import"./dayjs.min.d5c6140e.js";import"./utc.93fc2fea.js";import"./EntityIcon.085cf7bc.js";import"./core.esm.8f03e8e9.js";import"./pick.2e2f2657.js";import"./_baseClone.105264f0.js";import"./_Set.1d83ae68.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.e275a76d.js";import"./isEqual.95dec00f.js";import"./_cacheHas.1076ebc6.js";import"./_setToArray.a82100c8.js";import"./index.browser.c080bb2a.js";import"./union.bbcda369.js";import"./without.958702a4.js";import"./uniq.ed37cced.js";import"./CustomSelectWidget.848159ca.js";import"./Select-54ac8379.esm.cc32b323.js";import"./isString.6a9df18d.js";import"./factory.f758f58c.js";import"./sqlFunctions.4c211c8a.js";import"./QueryFilter.7da789b0.js";import"./useEntity.04fadd8c.js";import"./useMutation.e868fb3d.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.1e07697e.js";import"./queryUtils.e800abfd.js";import"./cloneDeep.53a7b290.js";import"./use-deep-compare-effect.esm.4b9e5356.js";import"./NoSearchResults.ebb09cc2.js";import"./NoData.66425971.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.03275a84.js";import"./Dropdown.1237b504.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.4de2051f.js";import"./Checkbox.81ee8444.js";import"./RadioGroup.2a913923.js";import"./RangeSlider.025e59ec.js";import"./react-sizeme.ca002b8a.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.1eaf8da7.js";import"./Close.47506959.js";import"./relativeTime.dbbb68a5.js";import"./useDownloadList.4811622f.js";import"./QueryCount.c4983d12.js";import"./react-select.esm.bbf16df8.js";import"./IconList.e5c5bad8.js";import"./UserCardList.daeed47e.js";import"./useAccessRequirements.c96b7848.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.8c5e4813.js";import"./UserSearchBox.df4fd1ed.js";import"./UserOrTeamBadge.b11a8065.js";import"./EntityLink.06d57c43.js";import"./SynapseVideo.dcdf2f72.js";const ct={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),p=o.bind({});p.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const e=o.bind({});e.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const ut=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,e as WithColumnAlias,p as WithoutTopLevelControls,ut as __namedExportsOrder,ct as default};

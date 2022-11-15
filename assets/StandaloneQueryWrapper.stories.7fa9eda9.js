import{n as t}from"./CardContainerLogic.b4a346d5.js";import{j as i}from"./jsx-runtime.34c6f27f.js";import"./index.c107377d.js";import"./index.01abc564.js";import"./iframe.678b52ee.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.e09f83de.js";import"./styled.0edb18ff.js";import"./utils.e76a203c.js";import"./TransitionGroupContext.3999b8b4.js";import"./Alert.894f722a.js";import"./createWithBsPrefix.37ad16b9.js";import"./index.35ce73ec.js";import"./isArray.2797ec7c.js";import"./getEndpoint.bb7ded34.js";import"./Link.31ef5031.js";import"./Typography.1460c8bf.js";import"./Button.115b5334.js";import"./ButtonBase.14266c5d.js";import"./sqlFunctions.4e0acdd8.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.45b7f017.js";import"./useGetInfoFromIds.76ba54fd.js";import"./use-deep-compare-effect.esm.6bfbbd83.js";import"./uniq.998c494a.js";import"./_baseSlice.50189bc5.js";import"./toInteger.cb259a17.js";import"./isSymbol.95cae313.js";import"./_cacheHas.c8647c3d.js";import"./without.36c17bb9.js";import"./uniqueId.0644964e.js";import"./_Set.3fd1f5c1.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.5e8bd64f.js";import"./queryUtils.b9ee5c57.js";import"./useInfiniteQuery.b706301d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ed697980.js";import"./_baseClone.0ccc8d5a.js";import"./_getTag.e421155e.js";import"./NoSearchResults.55058bef.js";import"./NoData.64d7525f.js";import"./unCamelCase.07e38083.js";import"./useEntity.de0f05d0.js";import"./useMutation.9de5aae1.js";import"./pick.e2925ea6.js";import"./isEqual.eafb3d0a.js";import"./ElementWithTooltip.bdc8c303.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.61b16659.js";import"./Tooltip.6150c4ad.js";import"./createSvgIcon.62fb05ce.js";import"./InfoOutlined.7facd530.js";import"./Dropdown.76cbfb27.js";import"./usePrevious.55ee8b3e.js";import"./contains.d2a56144.js";import"./usePopperMarginModifiers.c16405c7.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.a69086d1.js";import"./RadioGroup.4711ebe8.js";import"./moment.a565bb48.js";import"./RangeSlider.49336264.js";import"./factory.72357d20.js";import"./react-sizeme.64006c31.js";import"./Skeleton.88fd9d9d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.76addac9.js";import"./Modal.b47efd91.js";import"./inheritsLoose.6c462130.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f2961cc7.js";import"./SelectionCriteriaPill.40c5acd3.js";import"./Close.8bb9acba.js";import"./react-select.esm.ad04556f.js";import"./Select-54ac8379.esm.b35db36d.js";import"./CustomSelectWidget.164363f2.js";import"./index.browser.62966e5f.js";import"./UserCard.c83edded.js";import"./IconCopy.fd458d39.js";import"./SkeletonTable.569bfb79.js";import"./times.efc4769c.js";import"./ToastMessage.720e11e8.js";import"./FullWidthAlert.79a1e2fc.js";import"./Overlay.d3987c47.js";import"./WarningModal.6fd4c0ba.js";import"./react-intersection-observer.esm.2b0ab64d.js";import"./DateFormatter.e8b68d66.js";import"./EntityIcon.797f7811.js";import"./core.esm.ae65f762.js";import"./isEmpty.bddd142e.js";import"./union.94cc665f.js";import"./isString.e96f76cc.js";import"./useGetDownloadListStatistics.95835988.js";import"./QueryCount.48e2da33.js";import"./useGetAccessRequirement.5e22a027.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.00f8732e.js";import"./UserSearchBox.627e64fb.js";import"./UserOrTeamBadge.7c843cb7.js";import"./EntityLink.948faec8.js";import"./SynapseVideo.e3bb63f7.js";import"./IconList.cdde77ef.js";import"./UserCardList.7d28e5d5.js";const nt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),p=o.bind({});p.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const e=o.bind({});e.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const mt=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,e as WithColumnAlias,p as WithoutTopLevelControls,mt as __namedExportsOrder,nt as default};

import{t}from"./AccessRequirementList.3b72d65e.js";import{j as i}from"./jsx-runtime.6efef3f0.js";import"./index.f6f857f5.js";import"./index.527b2819.js";import"./iframe.b3705b98.js";import"./SynapseConstants.aef18750.js";import"./Button.113b0f45.js";import"./styled.3d34e36b.js";import"./Tooltip.9a185035.js";import"./SvgIcon.3e939805.js";import"./useTheme.2b3579a1.js";import"./TransitionGroupContext.962689fd.js";import"./FullWidthAlert.87654e2f.js";import"./hook.4287fc8d.js";import"./createWithBsPrefix.dc61fcfa.js";import"./divWithClassName.39d1e3e2.js";import"./index.35ce73ec.js";import"./Typography.a863760e.js";import"./Fade.ee3053ca.js";import"./isArray.ce0fc8e6.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a0ac0502.js";import"./IconButton.a32a330b.js";import"./ButtonBase.42d7166c.js";import"./emotion-react.browser.esm.89334e8c.js";import"./Link.f540f0ea.js";import"./Button.bcc1fc04.js";import"./useGetInfoFromIds.46c54480.js";import"./use-deep-compare-effect.esm.fa498af3.js";import"./uniq.e676b014.js";import"./_baseSlice.50189bc5.js";import"./toInteger.a03e46d2.js";import"./isSymbol.7ee325a2.js";import"./_cacheHas.c0fe68d8.js";import"./without.e36cd559.js";import"./toString.931d2742.js";import"./_Set.6076d8f1.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.ab408232.js";import"./Modal.db10ea3b.js";import"./contains.789c8f44.js";import"./inheritsLoose.0f44c725.js";import"./usePrevious.234e4743.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.265683e8.js";import"./UserCard.89fae007.js";import"./IconCopy.7b0e586f.js";import"./SkeletonTable.43182f64.js";import"./times.ce6f9568.js";import"./Skeleton.c73b94b2.js";import"./ToastMessage.a9162853.js";import"./uniqueId.a881a904.js";import"./Overlay.6c0a21b1.js";import"./usePopperMarginModifiers.0eff8b53.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.d0985ce6.js";import"./useInfiniteQuery.6ce8309d.js";import"./DateFormatter.e4b2fe07.js";import"./dayjs.min.8b3c16f0.js";import"./utc.cd0b4238.js";import"./EntityIcon.3b4d81e3.js";import"./core.esm.7728abb9.js";import"./pick.58e246c9.js";import"./_baseClone.27a5ae2d.js";import"./isEmpty.8554a593.js";import"./isEqual.4b0c3d7f.js";import"./index.browser.0c4417bc.js";import"./union.ac9c033b.js";import"./CustomSelectWidget.227adc34.js";import"./Select-54ac8379.esm.1fa52e56.js";import"./isString.ca431768.js";import"./factory.b6e4d6a7.js";import"./sqlFunctions.ba594ce5.js";import"./QueryFilter.30eec546.js";import"./useEntity.7761124a.js";import"./useMutation.905ce15d.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.8165148a.js";import"./queryUtils.edb96664.js";import"./cloneDeep.53ea7f1e.js";import"./NoSearchResults.e2971c16.js";import"./NoData.867fffb7.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.1228df4a.js";import"./ElementWithTooltip.c54d261b.js";import"./Dropdown.5bd05552.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.fd5e6b6d.js";import"./RadioGroup.bc45bd63.js";import"./RangeSlider.6c9bce2a.js";import"./react-sizeme.db3800c3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.eb4309d9.js";import"./Close.2b98c3fe.js";import"./relativeTime.220aea01.js";import"./useDownloadList.06df0856.js";import"./QueryCount.62cf06b4.js";import"./react-select.esm.a9ae3588.js";import"./IconList.27dad11c.js";import"./UserCardList.4d0cf000.js";import"./useAccessRequirements.eca13162.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.b7cbe231.js";import"./UserSearchBox.bc3fcd89.js";import"./UserOrTeamBadge.fdcbf44a.js";import"./EntityLink.8a97d7e0.js";import"./ErrorChip.8bb6b297.js";import"./SynapseVideo.b2125f69.js";const ut={parameters:{storySource:{source:`import React from 'react'
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

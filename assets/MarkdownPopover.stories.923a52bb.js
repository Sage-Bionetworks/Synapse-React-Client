import{M as i}from"./CardContainerLogic.61f10dc5.js";import{j as t}from"./jsx-runtime.25f1da80.js";import{B as n}from"./Button.03ce126b.js";import"./index.69555c85.js";import"./index.09872124.js";import"./iframe.89c4ca26.js";import"./SynapseConstants.290eab74.js";import"./styled.61c2cdbd.js";import"./utils.653016b9.js";import"./TransitionGroupContext.d4abce3c.js";import"./useTheme.50dbca56.js";import"./Alert.c8ecdb26.js";import"./hook.865145d2.js";import"./createWithBsPrefix.2ba1d399.js";import"./divWithClassName.8bbfe55a.js";import"./index.35ce73ec.js";import"./Fade.5af2af2d.js";import"./isArray.63a07037.js";import"./getEndpoint.bb7ded34.js";import"./Link.7320b292.js";import"./Typography.787f3df0.js";import"./Button.71735648.js";import"./ButtonBase.e51b431c.js";import"./emotion-react.browser.esm.de1a23fd.js";import"./sqlFunctions.9792d962.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d169c11d.js";import"./useGetInfoFromIds.44be4018.js";import"./use-deep-compare-effect.esm.a1426cb2.js";import"./uniq.e7104f4b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.374f3d90.js";import"./isSymbol.8bb90a01.js";import"./_cacheHas.94f6a723.js";import"./without.469323e6.js";import"./uniqueId.b035a11c.js";import"./_Set.2cc53572.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.621261fc.js";import"./queryUtils.914720c7.js";import"./useInfiniteQuery.a1c7197d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.0d74c660.js";import"./_baseClone.98f8d012.js";import"./_getTag.bee7994d.js";import"./NoSearchResults.59aac2a5.js";import"./NoData.3f04e6ce.js";import"./unCamelCase.07e38083.js";import"./useEntity.2c8dce53.js";import"./useMutation.0a0f53c2.js";import"./pick.63eedd5f.js";import"./isEqual.78dd156b.js";import"./ElementWithTooltip.b169a8dc.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.562c1909.js";import"./Tooltip.dc683be6.js";import"./createSvgIcon.32db2a88.js";import"./InfoOutlined.d976b6d4.js";import"./Dropdown.b0e1788b.js";import"./usePrevious.8c5acee9.js";import"./contains.b82313ef.js";import"./usePopperMarginModifiers.6c0d1965.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.f455bc6d.js";import"./RadioGroup.60d0e9b9.js";import"./dayjs.min.6249e3c2.js";import"./RangeSlider.17d48db5.js";import"./factory.b660e4c4.js";import"./react-sizeme.e53d15ca.js";import"./Skeleton.264ae24e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.10bc024b.js";import"./Modal.4b7d9dca.js";import"./inheritsLoose.b1a489b6.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.e68dcf6e.js";import"./SelectionCriteriaPill.79c39aa1.js";import"./Close.44b4a032.js";import"./react-select.esm.53dbc2ee.js";import"./Select-54ac8379.esm.d9aea084.js";import"./CustomSelectWidget.98121632.js";import"./index.browser.5d712414.js";import"./UserCard.e6c2a584.js";import"./IconCopy.64748781.js";import"./SkeletonTable.1d27d75d.js";import"./times.f808a242.js";import"./ToastMessage.679431d9.js";import"./FullWidthAlert.ce239055.js";import"./Overlay.f9384c09.js";import"./WarningModal.a2a8f9cb.js";import"./react-intersection-observer.esm.2b339d3f.js";import"./DateFormatter.58c13d3a.js";import"./utc.4f174ace.js";import"./EntityIcon.dfd6633a.js";import"./core.esm.30e8b25f.js";import"./isEmpty.2d474a78.js";import"./union.61728d18.js";import"./isString.e48b0485.js";import"./relativeTime.4aeffe42.js";import"./useGetDownloadListStatistics.f4a0360e.js";import"./QueryCount.a6613e07.js";import"./useGetAccessRequirement.c9c5858b.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.ef38cf66.js";import"./UserSearchBox.1a582fcf.js";import"./UserOrTeamBadge.eb60fe56.js";import"./EntityLink.603c8d35.js";import"./SynapseVideo.47a9bf48.js";import"./IconList.6b22c904.js";import"./UserCardList.9bade6f4.js";const gt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MarkdownPopover } from './MarkdownPopover'
import { Button } from 'react-bootstrap'

export default {
  title: 'Markdown/MarkdownPopover',
  component: MarkdownPopover,
} as ComponentMeta<typeof MarkdownPopover>

const Template: ComponentStory<typeof MarkdownPopover> = args => (
  <MarkdownPopover {...args}>
    <Button variant="sds-primary">Button</Button>
  </MarkdownPopover>
)

export const NoAction = Template.bind({})
NoAction.args = {
  contentProps: { markdown: 'Supports _rendering_ basic **Markdown**.' },
  placement: 'bottom',
}

export const WithAction = Template.bind({})
WithAction.args = {
  contentProps: {
    markdown:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis.',
  },
  placement: 'right',
  actionButton: {
    content: 'Show/Hide Hidden Text',
  },
}

export const WikiPage = Template.bind({})
WikiPage.args = {
  contentProps: {
    ownerId: 'syn12666371',
    wikiId: '585317',
  },
  showCloseButton: false,
  placement: 'right',
}
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),m=o.bind({});m.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const p=o.bind({});p.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const e=o.bind({});e.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const kt=["NoAction","WithAction","WikiPage"];export{m as NoAction,e as WikiPage,p as WithAction,kt as __namedExportsOrder,gt as default};

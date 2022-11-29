import{M as i}from"./CardContainerLogic.dd3b6d75.js";import{j as t}from"./jsx-runtime.e5135412.js";import{B as n}from"./Button.63ea176a.js";import"./index.71230ff4.js";import"./index.42a076b6.js";import"./iframe.4ad064c2.js";import"./SynapseConstants.290eab74.js";import"./styled.a3d17504.js";import"./utils.1cb744a4.js";import"./TransitionGroupContext.772c7333.js";import"./useTheme.2346f1e9.js";import"./Alert.4963c7c8.js";import"./hook.85ae367a.js";import"./createWithBsPrefix.315d8008.js";import"./divWithClassName.1423062f.js";import"./index.35ce73ec.js";import"./Fade.d1d2b883.js";import"./isArray.bee4a7aa.js";import"./getEndpoint.bb7ded34.js";import"./Link.1aa3c056.js";import"./Typography.1aa4ae65.js";import"./Button.e272e789.js";import"./ButtonBase.ace65aea.js";import"./emotion-react.browser.esm.078eca06.js";import"./sqlFunctions.57836cf5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.f6f25762.js";import"./useGetInfoFromIds.f42eb5d5.js";import"./use-deep-compare-effect.esm.8703b180.js";import"./uniq.a6b08cac.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5990edab.js";import"./isSymbol.0f809a04.js";import"./_cacheHas.9fb171dd.js";import"./without.26bee3cb.js";import"./uniqueId.c448d212.js";import"./_Set.994e97c6.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.e3964af5.js";import"./queryUtils.8210254b.js";import"./useInfiniteQuery.b7e5a6aa.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ef561af6.js";import"./_baseClone.dcb08082.js";import"./_getTag.fbf18d30.js";import"./NoSearchResults.44968580.js";import"./NoData.9d11c959.js";import"./unCamelCase.07e38083.js";import"./useEntity.38c12d6c.js";import"./useMutation.3762bbaa.js";import"./pick.7210121c.js";import"./isEqual.54206e34.js";import"./ElementWithTooltip.6c0350ba.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.c42d8cfc.js";import"./Tooltip.512cb681.js";import"./createSvgIcon.a94a426c.js";import"./InfoOutlined.1b7aba21.js";import"./Dropdown.23d7d6c9.js";import"./usePrevious.6b2d96e9.js";import"./contains.6f7ec0ab.js";import"./usePopperMarginModifiers.f1f361c8.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.6b247052.js";import"./RadioGroup.0f192c4c.js";import"./dayjs.min.546fe469.js";import"./RangeSlider.bf782f2e.js";import"./factory.b6e552e4.js";import"./react-sizeme.4a820ce0.js";import"./Skeleton.6f010adf.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e187fc8f.js";import"./Modal.ea5ae4d0.js";import"./inheritsLoose.c10d0fd3.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.9e9d0981.js";import"./SelectionCriteriaPill.b5c5a042.js";import"./Close.9a15ec8f.js";import"./react-select.esm.e600ae2b.js";import"./Select-54ac8379.esm.ecc76f78.js";import"./CustomSelectWidget.61cecce6.js";import"./index.browser.14eee51c.js";import"./UserCard.f43fc2a4.js";import"./IconCopy.d207b265.js";import"./SkeletonTable.d5a10fc2.js";import"./times.92d567ce.js";import"./ToastMessage.14ac3753.js";import"./FullWidthAlert.dbd163b4.js";import"./Overlay.0cf59319.js";import"./WarningModal.68f6a016.js";import"./react-intersection-observer.esm.28d6b5d3.js";import"./DateFormatter.c57874a5.js";import"./utc.1ed3407a.js";import"./EntityIcon.b4c3d0c8.js";import"./core.esm.06b27e4f.js";import"./isEmpty.236d890e.js";import"./union.93498efa.js";import"./isString.582e0c86.js";import"./relativeTime.358f1b58.js";import"./useGetDownloadListStatistics.99b5f817.js";import"./QueryCount.482d314d.js";import"./useGetAccessRequirement.b8c42ad8.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.eadf91ed.js";import"./UserSearchBox.f5cec04f.js";import"./UserOrTeamBadge.1462357f.js";import"./EntityLink.f56b75a3.js";import"./SynapseVideo.46108d56.js";import"./IconList.11961a8c.js";import"./UserCardList.d28c131b.js";const gt={parameters:{storySource:{source:`import React from 'react'
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

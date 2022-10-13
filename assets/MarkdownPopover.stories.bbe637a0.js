import{M as i}from"./CardContainerLogic.da758215.js";import{j as t}from"./jsx-runtime.4ed473f6.js";import{B as n}from"./Button.c5f20cc4.js";import"./index.f0d19726.js";import"./index.02b86482.js";import"./iframe.b5feb82b.js";import"./withStyles.78cfa842.js";import"./utils.75253d0f.js";import"./Alert.a88bb07f.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./isArray.1c017e06.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d67caae4.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.38c666e1.js";import"./use-deep-compare-effect.esm.6d2ce1a1.js";import"./uniq.9de4015f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.7b9ab0b9.js";import"./isSymbol.24e18969.js";import"./_cacheHas.efaa38b2.js";import"./without.27a5177f.js";import"./uniqueId.021a8dc5.js";import"./_Set.daed5fd0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.f6e82d52.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.8a81e89b.js";import"./Tooltip.eb6aee31.js";import"./createSvgIcon.691ab6d6.js";import"./makeStyles.dc0e46d4.js";import"./InfoOutlined.ab4f4d01.js";import"./ElementWithTooltip.b0001074.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.40037d76.js";import"./Modal.9b653448.js";import"./useWaitForDOMRef.8efcf25e.js";import"./inheritsLoose.770f8727.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.a69073a2.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e19b8b94.js";import"./queryUtils.e30d5f04.js";import"./useInfiniteQuery.4e1afba3.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.b72e9c73.js";import"./_baseClone.9b5f1ba9.js";import"./_getTag.fae99e50.js";import"./useEntity.22931e79.js";import"./useMutation.fce6b629.js";import"./pick.5b898932.js";import"./Checkbox.03065006.js";import"./RadioGroup.4063cb90.js";import"./moment.a565bb48.js";import"./RangeSlider.a961b08b.js";import"./factory.4c95ade6.js";import"./react-sizeme.855188a3.js";import"./Skeleton.1c1dc171.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a8097300.js";import"./Typography.742205fe.js";import"./Close.d121cd8d.js";import"./react-select.esm.29ffe28c.js";import"./Select-54ac8379.esm.783ef3ce.js";import"./CustomSelectWidget.df3cace7.js";import"./index.browser.3f673f01.js";import"./WarningModal.2decb7b9.js";import"./react-intersection-observer.esm.2f02f02c.js";import"./UserCard.62605ce0.js";import"./IconCopy.536ed2bb.js";import"./SkeletonTable.09b1c379.js";import"./times.c42e571b.js";import"./ToastMessage.576eb4d8.js";import"./FullWidthAlert.2db361a7.js";import"./Overlay.eafb065e.js";import"./DateFormatter.f67e8fd7.js";import"./core.esm.18dd4a62.js";import"./isEmpty.56410ed1.js";import"./isEqual.3c63a371.js";import"./union.97ae755f.js";import"./isString.c58b182a.js";import"./useGetDownloadListStatistics.e88301d5.js";import"./QueryCount.93ac4b57.js";import"./NoData.f416e565.js";import"./useGetAccessRequirement.939fa1ec.js";import"./ManagedACTAccessRequirementStatus.b9ffa0ec.js";import"./FileUpload.e909bde4.js";import"./UserSearchBox.65acd310.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.7feeccf6.js";import"./EntityLink.cc63f57a.js";import"./NoSearchResults.f7877fe5.js";import"./SynapseVideo.49a47260.js";import"./IconList.9a1ff75a.js";import"./UserCardList.4c2bc9bc.js";const ot={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const m=o.bind({});m.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const p=o.bind({});p.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const tt=["NoAction","WithAction","WikiPage"];export{e as NoAction,p as WikiPage,m as WithAction,tt as __namedExportsOrder,ot as default};

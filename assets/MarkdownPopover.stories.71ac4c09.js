import{M as i}from"./CardContainerLogic.98894317.js";import{j as t}from"./jsx-runtime.7534b5a0.js";import{B as n}from"./Button.facab635.js";import"./index.6f245744.js";import"./index.5a0550e3.js";import"./iframe.cb5f3f40.js";import"./withStyles.ecbbcd0d.js";import"./utils.b18b59db.js";import"./Alert.9c82c23c.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./isArray.1150e90d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.9b76f9a1.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.e6138c4f.js";import"./use-deep-compare-effect.esm.2a6c3723.js";import"./uniq.6c649ecc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.39442f31.js";import"./isSymbol.c1d6cf65.js";import"./_cacheHas.a9d5a489.js";import"./without.a4f2b18e.js";import"./uniqueId.4137f4c9.js";import"./_Set.59d94647.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.e8ac8b46.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.2709626b.js";import"./Tooltip.71890e59.js";import"./createSvgIcon.ae6f4177.js";import"./makeStyles.c0018ba8.js";import"./InfoOutlined.9d5ad8e8.js";import"./FacetNav.68e2e97f.js";import"./queryUtils.c5ae8bea.js";import"./useInfiniteQuery.854b3fbd.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.2186185d.js";import"./_baseClone.68d80d11.js";import"./_getTag.869c3065.js";import"./ElementWithTooltip.53528b31.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2de0199f.js";import"./Modal.8b35f6b6.js";import"./useWaitForDOMRef.fac5222c.js";import"./inheritsLoose.e3c56dfc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.c83e318d.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.6d6dfed4.js";import"./useMutation.0d7d79e8.js";import"./pick.8f9c58a0.js";import"./Checkbox.05c4ef02.js";import"./RadioGroup.257cc3bc.js";import"./moment.a565bb48.js";import"./RangeSlider.fbfcda1f.js";import"./factory.98d7723c.js";import"./react-sizeme.13268b50.js";import"./Skeleton.30b9665e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.c9aad435.js";import"./Typography.31b00c6c.js";import"./Close.395e9cfd.js";import"./react-select.esm.31863e7a.js";import"./Select-54ac8379.esm.3b7e103b.js";import"./CustomSelectWidget.afbf761e.js";import"./index.browser.a5240fd0.js";import"./WarningModal.dc8cc109.js";import"./react-intersection-observer.esm.34d12358.js";import"./UserCard.aa295333.js";import"./IconCopy.66e91ea0.js";import"./SkeletonTable.7dcdf0c1.js";import"./times.837d97f6.js";import"./ToastMessage.1747dfd4.js";import"./FullWidthAlert.95dc5339.js";import"./Overlay.47a63549.js";import"./DateFormatter.9c6e31b5.js";import"./core.esm.5679147d.js";import"./isEmpty.9fb21cb5.js";import"./isEqual.48960a41.js";import"./union.e2f08ad6.js";import"./isString.82bb0f68.js";import"./useGetDownloadListStatistics.cea76857.js";import"./QueryCount.801e943d.js";import"./NoData.fcbdd942.js";import"./useGetAccessRequirement.b3079609.js";import"./ManagedACTAccessRequirementStatus.7664a4b0.js";import"./FileUpload.9a9ca2ef.js";import"./UserSearchBox.b5f0b053.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.1764fb26.js";import"./EntityLink.0e836274.js";import"./NoSearchResults.41d27d5b.js";import"./SynapseVideo.b07f4970.js";import"./IconList.7e68ad95.js";import"./UserCardList.6506239b.js";const ot={parameters:{storySource:{source:`import React from 'react'
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

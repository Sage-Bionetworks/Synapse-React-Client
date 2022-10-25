import{M as i}from"./CardContainerLogic.6d0b9b32.js";import{j as t}from"./jsx-runtime.6fc4771b.js";import{B as n}from"./Button.297619c8.js";import"./index.bff2d9c7.js";import"./index.4e1486f8.js";import"./iframe.14db13df.js";import"./withStyles.f9df3835.js";import"./utils.6fc55841.js";import"./Alert.bb2e2328.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./isArray.3cde12a0.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e84ee4e0.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.168522a5.js";import"./use-deep-compare-effect.esm.d30c5f7a.js";import"./uniq.5c9ab91a.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d1e47656.js";import"./isSymbol.6068a581.js";import"./_cacheHas.dd0e8cac.js";import"./without.11ee909d.js";import"./uniqueId.aecb96d3.js";import"./_Set.ff562903.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.61f80ddf.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.313db458.js";import"./Tooltip.45d64ebd.js";import"./createSvgIcon.3ee235fb.js";import"./makeStyles.f8fe9b08.js";import"./InfoOutlined.67f7ed8e.js";import"./FacetNav.6c86abd6.js";import"./queryUtils.605b96f7.js";import"./useInfiniteQuery.ad2a716c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.b82cfeee.js";import"./_baseClone.78b8683b.js";import"./_getTag.7141f2a4.js";import"./ElementWithTooltip.ba595cfe.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.6a6195b2.js";import"./Modal.8264473e.js";import"./useWaitForDOMRef.7b6a21be.js";import"./inheritsLoose.26c56fa3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.16e66f40.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.0ae96d4e.js";import"./useMutation.66c31d96.js";import"./pick.bafa26eb.js";import"./Checkbox.ba277f34.js";import"./RadioGroup.889d2308.js";import"./moment.a565bb48.js";import"./RangeSlider.0c68c141.js";import"./factory.a1bbb36b.js";import"./react-sizeme.96d952de.js";import"./Skeleton.2663a88c.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.6a46d727.js";import"./Typography.1c5796c6.js";import"./Close.2729933c.js";import"./react-select.esm.382185fe.js";import"./Select-54ac8379.esm.1e94b6b0.js";import"./CustomSelectWidget.c56c7d92.js";import"./index.browser.f241352a.js";import"./WarningModal.caaa7cfe.js";import"./react-intersection-observer.esm.2768743d.js";import"./UserCard.32f3674b.js";import"./IconCopy.25a64ecc.js";import"./SkeletonTable.611921d5.js";import"./times.c3b78a33.js";import"./ToastMessage.c1cdbab7.js";import"./FullWidthAlert.7459bb3c.js";import"./Overlay.567d8932.js";import"./DateFormatter.5e64ebfd.js";import"./core.esm.60ddaa9a.js";import"./isEmpty.f4ae5f38.js";import"./isEqual.70686b8b.js";import"./union.04c5b41f.js";import"./isString.ebf03aa7.js";import"./useGetDownloadListStatistics.21301401.js";import"./QueryCount.46c5f41f.js";import"./NoData.e69f5cbe.js";import"./useGetAccessRequirement.8aedbc3a.js";import"./ManagedACTAccessRequirementStatus.322436b1.js";import"./FileUpload.befeb6e2.js";import"./UserSearchBox.807907cf.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.cb92e113.js";import"./EntityLink.5c6796a6.js";import"./NoSearchResults.0968e4d4.js";import"./SynapseVideo.1895d893.js";import"./IconList.ffd50097.js";import"./UserCardList.fa9b1bd2.js";const ot={parameters:{storySource:{source:`import React from 'react'
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

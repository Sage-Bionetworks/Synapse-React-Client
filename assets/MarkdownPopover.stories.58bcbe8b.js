import{M as i}from"./CardContainerLogic.70bdaa71.js";import{j as t}from"./jsx-runtime.ed0bc2e8.js";import{B as n}from"./Button.ead7d59a.js";import"./index.444e3572.js";import"./index.68bd2905.js";import"./iframe.1c77586e.js";import"./withStyles.5eea39d5.js";import"./utils.31a80d71.js";import"./Alert.e70a23c6.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.fc63d11c.js";import"./use-deep-compare-effect.esm.63a03aa5.js";import"./uniq.e0b70e96.js";import"./_baseSlice.50189bc5.js";import"./toInteger.c1671d6c.js";import"./isSymbol.3ae1367c.js";import"./_cacheHas.2f01a71b.js";import"./without.ae039a4c.js";import"./uniqueId.e6e71b68.js";import"./_Set.79ce457d.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.f3162245.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.af973a0c.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./makeStyles.83c340c0.js";import"./InfoOutlined.10c65527.js";import"./ElementWithTooltip.aa21c398.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.cea6d11d.js";import"./Modal.2df339d5.js";import"./useWaitForDOMRef.2b50b75b.js";import"./inheritsLoose.02c5cdc5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.2ccc8168.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.244c418d.js";import"./queryUtils.b6e7a174.js";import"./useInfiniteQuery.4114925f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c1db8169.js";import"./_baseClone.32511df5.js";import"./_getTag.09032bbf.js";import"./useEntity.a73b6a7f.js";import"./useMutation.60a502f5.js";import"./pick.fbb2f290.js";import"./Checkbox.fc5ecb82.js";import"./RadioGroup.0bddc76f.js";import"./moment.a565bb48.js";import"./RangeSlider.e5b4fec2.js";import"./factory.ee8ba69d.js";import"./react-sizeme.22227f3d.js";import"./Skeleton.d97a08a6.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.d5fc7030.js";import"./Typography.935cd23d.js";import"./Close.2a111ba4.js";import"./react-select.esm.cd0b6178.js";import"./Select-54ac8379.esm.d5f59070.js";import"./CustomSelectWidget.aa330617.js";import"./index.browser.0b0b54ae.js";import"./WarningModal.57553bf6.js";import"./react-intersection-observer.esm.94964140.js";import"./UserCard.89349cd4.js";import"./IconCopy.82604258.js";import"./SkeletonTable.a364440a.js";import"./times.12135b85.js";import"./ToastMessage.f3c1e08b.js";import"./FullWidthAlert.7478a55e.js";import"./Overlay.d35a38e4.js";import"./DateFormatter.db43e9a9.js";import"./core.esm.241c4529.js";import"./isEmpty.c32e2e50.js";import"./isEqual.7b80062a.js";import"./union.ec09b824.js";import"./isString.e1b80b76.js";import"./useGetDownloadListStatistics.c8592017.js";import"./QueryCount.8c3d262b.js";import"./NoData.14d6f6b5.js";import"./useGetAccessRequirement.6e90b266.js";import"./ManagedACTAccessRequirementStatus.3daf4e8d.js";import"./FileUpload.7b8befbf.js";import"./UserSearchBox.d170c2a6.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.1f67599d.js";import"./EntityLink.cfbd5ae5.js";import"./NoSearchResults.826667f9.js";import"./SynapseVideo.10f842ec.js";import"./IconList.f6977954.js";import"./UserCardList.acf920eb.js";const ot={parameters:{storySource:{source:`import React from 'react'
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

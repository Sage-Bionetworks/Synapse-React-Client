import{M as i}from"./CardContainerLogic.3396ec86.js";import{j as t}from"./jsx-runtime.2b71273f.js";import{B as n}from"./Button.9a34c287.js";import"./index.3d089af5.js";import"./index.7aa8b9f8.js";import"./iframe.2ab16825.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.ffa42780.js";import"./utils.4bc122e2.js";import"./TransitionGroupContext.ec9d4526.js";import"./Alert.dab3d922.js";import"./createWithBsPrefix.64e0cb3b.js";import"./index.35ce73ec.js";import"./isArray.f3e4211e.js";import"./getEndpoint.bb7ded34.js";import"./Link.fcffcbaa.js";import"./Typography.e75e6cdf.js";import"./Button.f0ab2e0d.js";import"./ButtonBase.1d993e3f.js";import"./sqlFunctions.18713ca7.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d1a5c2d4.js";import"./useGetInfoFromIds.5f634da8.js";import"./use-deep-compare-effect.esm.44ef78ce.js";import"./uniq.ef833a9e.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b7a3730e.js";import"./isSymbol.6a44fdec.js";import"./_cacheHas.0114790d.js";import"./without.e0a6465c.js";import"./uniqueId.775c431b.js";import"./_Set.bc19c004.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.cbcf4a48.js";import"./queryUtils.d71455d5.js";import"./useInfiniteQuery.9dc12884.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d5cf2850.js";import"./_baseClone.4e49c1b9.js";import"./_getTag.46bb0c58.js";import"./NoSearchResults.f592033b.js";import"./NoData.9ac0d394.js";import"./unCamelCase.07e38083.js";import"./useEntity.20292701.js";import"./useMutation.a0a78509.js";import"./pick.64e130de.js";import"./isEqual.18b445fb.js";import"./ElementWithTooltip.0ea67f43.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.31630328.js";import"./Tooltip.7c243246.js";import"./createSvgIcon.8400397d.js";import"./InfoOutlined.49fd3aca.js";import"./Dropdown.86cfdcd3.js";import"./usePrevious.c75e8e8b.js";import"./contains.7e5b5926.js";import"./usePopperMarginModifiers.a1dad7e0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ee3fd59e.js";import"./RadioGroup.b7c3164f.js";import"./moment.a565bb48.js";import"./RangeSlider.4c50112e.js";import"./factory.4925aa2f.js";import"./react-sizeme.dcf8c0d4.js";import"./Skeleton.aec42867.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9c8df6fc.js";import"./Modal.76abb664.js";import"./inheritsLoose.ec7bf850.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.45bec7c5.js";import"./SelectionCriteriaPill.e52c1527.js";import"./Close.5cfe5581.js";import"./react-select.esm.c1d11ad8.js";import"./Select-54ac8379.esm.e1f0cef1.js";import"./CustomSelectWidget.68c08cc6.js";import"./index.browser.a16f7b2f.js";import"./UserCard.2ecf62d0.js";import"./IconCopy.24e1b7a1.js";import"./SkeletonTable.257b688b.js";import"./times.99997936.js";import"./ToastMessage.486f16ec.js";import"./FullWidthAlert.d57a412d.js";import"./Overlay.b78a7481.js";import"./WarningModal.b01b5a03.js";import"./react-intersection-observer.esm.ede5d37f.js";import"./DateFormatter.656c0705.js";import"./EntityIcon.7fcfa9cd.js";import"./core.esm.c770b2d9.js";import"./isEmpty.0de19e08.js";import"./union.6af1fe91.js";import"./isString.b6bf14ae.js";import"./useGetDownloadListStatistics.1c84e0b3.js";import"./QueryCount.bf26b7bc.js";import"./useGetAccessRequirement.ac090de8.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.96b74be5.js";import"./UserSearchBox.95a380da.js";import"./UserOrTeamBadge.66876747.js";import"./EntityLink.6339cd5b.js";import"./SynapseVideo.7424b0a8.js";import"./IconList.c0271e14.js";import"./UserCardList.52b6e9ed.js";const pt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const m=o.bind({});m.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const p=o.bind({});p.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const st=["NoAction","WithAction","WikiPage"];export{e as NoAction,p as WikiPage,m as WithAction,st as __namedExportsOrder,pt as default};

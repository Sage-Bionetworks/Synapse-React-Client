import{M as i}from"./CardContainerLogic.4d519081.js";import{j as t}from"./jsx-runtime.50ef6bf8.js";import{B as n}from"./Button.d599da1d.js";import"./index.0305e6df.js";import"./index.c6db38ab.js";import"./iframe.ac4a915a.js";import"./SynapseConstants.b6aa8bf5.js";import"./withStyles.99d8f96c.js";import"./utils.7e5b3029.js";import"./Alert.2486ab7d.js";import"./index.57d09176.js";import"./createWithBsPrefix.62795558.js";import"./index.35ce73ec.js";import"./isArray.20493a87.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2cd0146b.js";import"./sqlFunctions.2c22e579.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.eb2d96bd.js";import"./useGetInfoFromIds.0758b88c.js";import"./use-deep-compare-effect.esm.dee423e7.js";import"./uniq.ac1f7b2a.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5323f36a.js";import"./isSymbol.43adfbf0.js";import"./_cacheHas.bef0b8b1.js";import"./without.6e453101.js";import"./uniqueId.04211ad5.js";import"./_Set.c7d657ad.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.ffc53860.js";import"./createSvgIcon.691b588b.js";import"./makeStyles.2e7d9394.js";import"./FacetNav.be08a285.js";import"./queryUtils.9bfa8c5c.js";import"./useInfiniteQuery.8f25cfcb.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.2ec5ffda.js";import"./_baseClone.b265ca04.js";import"./_getTag.78af8186.js";import"./NoSearchResults.4be92c52.js";import"./NoData.cee3d520.js";import"./unCamelCase.07e38083.js";import"./useEntity.825558b4.js";import"./useMutation.e4e41006.js";import"./pick.df12bdd0.js";import"./isEqual.26539cb1.js";import"./ElementWithTooltip.02488b67.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.c0856b54.js";import"./InfoOutlined.4d7b5d30.js";import"./Dropdown.d8a66370.js";import"./usePrevious.4453b585.js";import"./contains.35b0f50b.js";import"./usePopperMarginModifiers.0f1630d3.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b896bf6c.js";import"./RadioGroup.5b0fe626.js";import"./moment.a565bb48.js";import"./RangeSlider.9a6983f7.js";import"./factory.3845e63e.js";import"./react-sizeme.906d5350.js";import"./Skeleton.bfc72f16.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.afd7cae5.js";import"./Typography.eb1a210b.js";import"./Modal.dba7130f.js";import"./inheritsLoose.7754793f.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.82d5d36b.js";import"./SelectionCriteriaPill.576251de.js";import"./Close.6c2ab52a.js";import"./react-select.esm.2ad3efbc.js";import"./Select-54ac8379.esm.cd4106ec.js";import"./CustomSelectWidget.e6087d02.js";import"./index.browser.a94185b6.js";import"./UserCard.0ed6abec.js";import"./IconCopy.63286479.js";import"./SkeletonTable.790b52ac.js";import"./times.87ad9c1c.js";import"./ToastMessage.5f57197e.js";import"./FullWidthAlert.039f66d3.js";import"./Overlay.d0e3e40e.js";import"./WarningModal.eb3ef3b7.js";import"./react-intersection-observer.esm.de8f511b.js";import"./DateFormatter.6c956e20.js";import"./EntityIcon.157b129d.js";import"./core.esm.7986be98.js";import"./isEmpty.34a03efa.js";import"./union.f2c1180e.js";import"./isString.08d15b5a.js";import"./useGetDownloadListStatistics.785df787.js";import"./QueryCount.15194b8b.js";import"./useGetAccessRequirement.4bae3e1f.js";import"./ManagedACTAccessRequirementStatus.08f0239f.js";import"./FileUpload.33455952.js";import"./UserSearchBox.17873701.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.6daf2605.js";import"./EntityLink.c969b58a.js";import"./SynapseVideo.14a786a4.js";import"./IconList.4ded90e0.js";import"./UserCardList.6e4e630f.js";const pt={parameters:{storySource:{source:`import React from 'react'
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

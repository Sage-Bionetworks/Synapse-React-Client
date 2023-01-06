import{M as i}from"./HelpPopover.dd19c094.js";import{j as t}from"./jsx-runtime.cae1efce.js";import{B as n}from"./Button.7727704e.js";import"./index.3a565a91.js";import"./iframe.61f567f7.js";import"./usePopperMarginModifiers.fb0d551a.js";import"./contains.44df3564.js";import"./createWithBsPrefix.df7fa21f.js";import"./hasClass.56fd144a.js";import"./EntityTypeUtils.02efa7e4.js";import"./Fade.31660acb.js";import"./styled.893b6037.js";import"./useTheme.6ac8e7e3.js";import"./Tooltip.017a66bf.js";import"./SvgIcon.d977b0c7.js";import"./TransitionGroupContext.bc025aa2.js";import"./isArray.175db850.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.6bbb8efe.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./emotion-react.browser.esm.0f705697.js";import"./Link.c5d35787.js";import"./Typography.334f7e13.js";import"./Button.af90093c.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./divWithClassName.5b633697.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.476e63ba.js";import"./Modal.04b387a6.js";import"./inheritsLoose.beda7355.js";import"./usePrevious.0a77b2e0.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.6ca94db7.js";import"./UserCard.60a81442.js";import"./IconCopy.158d0c53.js";import"./SkeletonTable.ef7abf61.js";import"./times.df010a42.js";import"./toInteger.3ed0cd2f.js";import"./isSymbol.87b57363.js";import"./Skeleton.5c3ed137.js";import"./ToastMessage.8e99f4ca.js";import"./FullWidthAlert.9d4713f3.js";import"./uniqueId.fbe1b45a.js";import"./Overlay.879f6140.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.6aa9d3d4.js";import"./useInfiniteQuery.24bd729c.js";import"./DateFormatter.70c7721e.js";import"./dayjs.min.12a0da3a.js";import"./utc.ceb4b169.js";import"./EntityIcon.3f8a3670.js";import"./core.esm.e918ee34.js";import"./pick.9031c658.js";import"./_baseClone.aa2f9924.js";import"./_Set.1fb82960.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.9c14b5b1.js";import"./isEqual.9e278194.js";import"./_cacheHas.ea09e558.js";import"./_setToArray.a82100c8.js";import"./index.browser.505b2ef5.js";import"./union.43cc5201.js";import"./without.ff72cb8b.js";import"./uniq.eb931bff.js";import"./CustomSelectWidget.59b7944a.js";import"./Select-54ac8379.esm.e88de38a.js";import"./isString.3cdad83a.js";import"./factory.8a69d8c4.js";import"./sqlFunctions.2fb5266e.js";import"./QueryFilter.aaa17d3c.js";import"./useEntity.140994a4.js";import"./useMutation.0b342796.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.31a50869.js";import"./queryUtils.d83a955a.js";import"./cloneDeep.3a71c714.js";import"./use-deep-compare-effect.esm.f099afc0.js";import"./NoSearchResults.b80cc10f.js";import"./NoData.d1a26232.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.3e4ddfb9.js";import"./Dropdown.a5829948.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.83017b65.js";import"./Checkbox.f51c45ab.js";import"./RadioGroup.3095c202.js";import"./RangeSlider.6882fc88.js";import"./react-sizeme.ccf3609b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.d1a268e5.js";import"./Close.0da26c60.js";import"./relativeTime.e2bd5bcb.js";import"./useDownloadList.ebabec88.js";import"./QueryCount.8660cea9.js";import"./react-select.esm.62a82fbb.js";import"./IconList.5def42e9.js";import"./UserCardList.db0a81ca.js";import"./useAccessRequirements.7ffa9aac.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.7be3edb4.js";import"./UserSearchBox.543e3e02.js";import"./UserOrTeamBadge.fc3f8497.js";import"./EntityLink.a4968051.js";import"./SynapseVideo.1670d9eb.js";const dt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),m=o.bind({});m.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const p=o.bind({});p.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const e=o.bind({});e.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const ut=["NoAction","WithAction","WikiPage"];export{m as NoAction,e as WikiPage,p as WithAction,ut as __namedExportsOrder,dt as default};

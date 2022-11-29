import{M as i}from"./CardContainerLogic.6ade039e.js";import{j as t}from"./jsx-runtime.c28691f9.js";import{B as n}from"./Button.01687609.js";import"./index.76b38c54.js";import"./index.e19c4baa.js";import"./iframe.180ebcad.js";import"./SynapseConstants.290eab74.js";import"./styled.0b15883e.js";import"./utils.147770f5.js";import"./TransitionGroupContext.4d4491d8.js";import"./useTheme.c2c5870a.js";import"./Alert.39b51be4.js";import"./hook.668b90b8.js";import"./createWithBsPrefix.e1e1b086.js";import"./divWithClassName.5d82b3d5.js";import"./index.35ce73ec.js";import"./Fade.467f608c.js";import"./isArray.00855dd8.js";import"./getEndpoint.bb7ded34.js";import"./Link.7916e978.js";import"./Typography.979062bc.js";import"./Button.5474ded1.js";import"./ButtonBase.62e27216.js";import"./emotion-react.browser.esm.07119d08.js";import"./sqlFunctions.66d0ccb5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.756f7d3e.js";import"./useGetInfoFromIds.d705ac97.js";import"./use-deep-compare-effect.esm.3ebc19e4.js";import"./uniq.2c176ac8.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5e16c8d9.js";import"./isSymbol.3a617ca5.js";import"./_cacheHas.702c76d8.js";import"./without.d15374c1.js";import"./uniqueId.dd846a92.js";import"./_Set.3ccae59b.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.2d7858ac.js";import"./queryUtils.29780774.js";import"./useInfiniteQuery.4ac5428a.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.cb414b63.js";import"./_baseClone.a1dc38d3.js";import"./_getTag.8cd19e02.js";import"./NoSearchResults.5e386327.js";import"./NoData.eaeb518a.js";import"./unCamelCase.07e38083.js";import"./useEntity.72150e51.js";import"./useMutation.3c0f4250.js";import"./pick.69e60d79.js";import"./isEqual.d7457938.js";import"./ElementWithTooltip.042ad96d.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.7c5a9ccb.js";import"./Tooltip.d4e3b915.js";import"./createSvgIcon.40781e98.js";import"./InfoOutlined.276d33db.js";import"./Dropdown.52eb9090.js";import"./usePrevious.93bb183c.js";import"./contains.a1192dc5.js";import"./usePopperMarginModifiers.39120970.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.a4ffafa3.js";import"./RadioGroup.e532ac13.js";import"./dayjs.min.0f21fca1.js";import"./RangeSlider.ca2db74a.js";import"./factory.0601d4aa.js";import"./react-sizeme.1d1a1dc1.js";import"./Skeleton.5e7b1855.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.65c8c5c9.js";import"./Modal.a936254b.js";import"./inheritsLoose.d88c30ef.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.4971e4f8.js";import"./SelectionCriteriaPill.888fe1b5.js";import"./Close.a651a325.js";import"./react-select.esm.7b3aa535.js";import"./Select-54ac8379.esm.37d3a4b7.js";import"./CustomSelectWidget.a1c56d66.js";import"./index.browser.48c43a17.js";import"./UserCard.4fc0c953.js";import"./IconCopy.13ec7c8a.js";import"./SkeletonTable.a4cdc768.js";import"./times.56956096.js";import"./ToastMessage.15875dd0.js";import"./FullWidthAlert.44d2e621.js";import"./Overlay.26aae53e.js";import"./WarningModal.3ead0df2.js";import"./react-intersection-observer.esm.3074ea26.js";import"./DateFormatter.6a862c70.js";import"./utc.689ac7ec.js";import"./EntityIcon.518b2fba.js";import"./core.esm.af84899e.js";import"./isEmpty.be2c0fe7.js";import"./union.9835e5b7.js";import"./isString.9eb5361c.js";import"./relativeTime.4b958b5a.js";import"./useGetDownloadListStatistics.6916f930.js";import"./QueryCount.6a250f74.js";import"./useGetAccessRequirement.ee9561a6.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.b1556377.js";import"./UserSearchBox.56587c36.js";import"./UserOrTeamBadge.ba139a08.js";import"./EntityLink.37d91978.js";import"./SynapseVideo.a702b220.js";import"./IconList.868a7c39.js";import"./UserCardList.ac330e4a.js";const gt={parameters:{storySource:{source:`import React from 'react'
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

import{M as i}from"./HelpPopover.a6da761d.js";import{j as t}from"./jsx-runtime.7f415a49.js";import{B as n}from"./Button.03e30a54.js";import"./index.322ef20a.js";import"./iframe.f0eb7e4f.js";import"./usePopperMarginModifiers.1e19fcd3.js";import"./contains.12125dea.js";import"./createWithBsPrefix.1ec397ad.js";import"./hasClass.56fd144a.js";import"./EntityTypeUtils.a88da157.js";import"./Fade.91bde074.js";import"./styled.681e07cb.js";import"./useTheme.93fabebb.js";import"./Tooltip.532ca871.js";import"./SvgIcon.67c4bd7a.js";import"./TransitionGroupContext.d6cb07c1.js";import"./isArray.22a05d29.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.4536f7bc.js";import"./IconButton.f87dde1e.js";import"./ButtonBase.24c8fd98.js";import"./emotion-react.browser.esm.3f795854.js";import"./Link.962b4b54.js";import"./Typography.b9cf5e4f.js";import"./Button.7a13a013.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.41cbd6e8.js";import"./hook.926e9335.js";import"./divWithClassName.4f7ac618.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.993b2e3f.js";import"./Modal.20d66332.js";import"./inheritsLoose.d3989491.js";import"./usePrevious.9195f9b8.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.96d00667.js";import"./UserCard.d1f4475d.js";import"./IconCopy.02e8b48e.js";import"./SkeletonTable.ce10e001.js";import"./times.9ff12fd4.js";import"./toInteger.d64e3f97.js";import"./isSymbol.9047c28e.js";import"./Skeleton.cf05128e.js";import"./ToastMessage.475a246a.js";import"./FullWidthAlert.58605d4c.js";import"./uniqueId.706d73bf.js";import"./Overlay.34589b18.js";import"./WarningModal.c247c3c8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.bfefb20b.js";import"./useInfiniteQuery.e949b068.js";import"./DateFormatter.da568cbd.js";import"./dayjs.min.4b01dff6.js";import"./utc.4bce6490.js";import"./EntityIcon.fb6d531d.js";import"./core.esm.bf59ba7b.js";import"./pick.e08076aa.js";import"./_baseClone.12caf01d.js";import"./_Set.ec3b2e10.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.539a569a.js";import"./isEqual.309ab92d.js";import"./_cacheHas.6bb37714.js";import"./_setToArray.a82100c8.js";import"./index.browser.5040e3d3.js";import"./union.b8f06866.js";import"./without.0cb61de1.js";import"./uniq.c00c44c0.js";import"./CustomSelectWidget.6c72a496.js";import"./Select-54ac8379.esm.3030d7a9.js";import"./isString.00645f3c.js";import"./factory.29902721.js";import"./sqlFunctions.317acf55.js";import"./QueryFilter.98e21063.js";import"./useEntity.87b43ab4.js";import"./useMutation.7bebd2d5.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.4f7cb853.js";import"./queryUtils.d40da240.js";import"./cloneDeep.b6d34995.js";import"./use-deep-compare-effect.esm.a50fe12d.js";import"./NoSearchResults.47339e1b.js";import"./NoData.f6f90db5.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.500e59a6.js";import"./Dropdown.d617d4af.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.da2e88a2.js";import"./Checkbox.d15514ef.js";import"./RadioGroup.63fe795a.js";import"./RangeSlider.870cef18.js";import"./react-sizeme.aa998ef5.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.19e6487c.js";import"./Close.d7f6c298.js";import"./relativeTime.99226a0e.js";import"./useDownloadList.779cc4f6.js";import"./QueryCount.f359aa00.js";import"./react-select.esm.402ddf92.js";import"./IconList.8602b5e5.js";import"./UserCardList.a6514bc6.js";import"./useAccessRequirements.3fafc689.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.9cbea4f7.js";import"./UserSearchBox.a454ac17.js";import"./UserOrTeamBadge.45c75721.js";import"./EntityLink.6e5c3005.js";import"./SynapseVideo.9d2c4478.js";const ut={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),m=o.bind({});m.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const p=o.bind({});p.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const e=o.bind({});e.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const wt=["NoAction","WithAction","WikiPage"];export{m as NoAction,e as WikiPage,p as WithAction,wt as __namedExportsOrder,ut as default};

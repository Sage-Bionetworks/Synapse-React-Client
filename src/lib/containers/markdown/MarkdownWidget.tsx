import React from 'react'
import MarkdownButton from './widget/MarkdownButton'
import MarkdownIDUReport from './widget/MarkdownIDUReport'
import MarkdownSynapseImage from './widget/MarkdownSynapseImage'
import MarkdownSynapsePlot from './widget/MarkdownSynapsePlot'
import MarkdownTableOfContents from './widget/MarkdownTableOfContents'
import MarkdownUserBadge from './widget/MarkdownUserBadge'
import MarkdownVideo from './widget/MarkdownVideo'

export type MarkdownWidgetProps = {
  widgetType: string
  widgetParamsMapped: any
  originalMarkup: string
}

export default function MarkdownWidget(props: MarkdownWidgetProps) {
  const { widgetType, widgetParamsMapped, originalMarkup } = props
  switch (widgetType) {
    case 'buttonlink':
      return <MarkdownButton {...widgetParamsMapped} />
    case 'image':
      return <MarkdownSynapseImage {...widgetParamsMapped} />
    case 'plot':
      return <MarkdownSynapsePlot {...widgetParamsMapped} />
    case 'toc':
      return <MarkdownTableOfContents originalMarkup={originalMarkup} />
    case 'badge':
      return <MarkdownUserBadge {...widgetParamsMapped} />
    case 'iduReport':
      return <MarkdownIDUReport {...widgetParamsMapped} />
    case 'video':
    case 'vimeo':
    case 'youtube':
      return <MarkdownVideo {...widgetParamsMapped} />
    default:
      return <></>
  }
}

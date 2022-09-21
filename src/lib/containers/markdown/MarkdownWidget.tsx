import React from 'react'
import MarkdownButton, { ButtonLinkWidgetParams } from './widget/MarkdownButton'
import MarkdownIDUReport, {
  MarkdownIDUReportProps,
} from './widget/MarkdownIDUReport'
import MarkdownSynapseImage, {
  ImageWidgetParams,
} from './widget/MarkdownSynapseImage'
import MarkdownSynapsePlot, {
  PlotWidgetParams,
} from './widget/MarkdownSynapsePlot'
import MarkdownSynapseTable, {
  MarkdownSynapseTableProps,
} from './widget/MarkdownSynapseTable'
import MarkdownTableOfContents from './widget/MarkdownTableOfContents'
import MarkdownUserBadge, {
  MarkdownUserBadgeProps,
} from './widget/MarkdownUserBadge'
import MarkdownVideo, { MarkdownVideoProps } from './widget/MarkdownVideo'

type ButtonLink = {
  widgetType: 'buttonlink'
  widgetParamsMapped: ButtonLinkWidgetParams
}

type Image = {
  widgetType: 'image'
  widgetParamsMapped: ImageWidgetParams
}

type Plot = {
  widgetType: 'plot'
  widgetParamsMapped: PlotWidgetParams
}

type TableOfContents = {
  widgetType: 'toc'
  widgetParamsMapped: never
}

type UserBadge = {
  widgetType: 'badge'
  widgetParamsMapped: MarkdownUserBadgeProps
}

type IDUReport = {
  widgetType: 'iduReport'
  widgetParamsMapped: MarkdownIDUReportProps
}

type Video = {
  widgetType: 'video' | 'vimeo' | 'youtube'
  widgetParamsMapped: MarkdownVideoProps
}

type SynapseTable = {
  widgetType: 'synapsetable'
  widgetParamsMapped: MarkdownSynapseTableProps
}

type MarkdownWidgetDefinition =
  | ButtonLink
  | Image
  | Plot
  | TableOfContents
  | UserBadge
  | IDUReport
  | Video
  | SynapseTable

export type MarkdownWidgetProps = MarkdownWidgetDefinition & {
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
    case 'synapsetable':
      return <MarkdownSynapseTable {...widgetParamsMapped} />
    default:
      console.warn(`Unsupported widget: ${widgetType}.`)
      return <></>
  }
}

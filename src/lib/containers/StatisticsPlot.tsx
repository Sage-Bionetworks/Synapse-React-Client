import * as React from 'react'
// tslint:disable-next-line:import-name
import Plotly from 'plotly.js-basic-dist'
// tslint:disable-next-line:import-name
import createPlotlyComponent from 'react-plotly.js/factory'
import { SynapseClient } from '../utils'
import {
  ProjectFilesStatisticsRequest,
  ProjectFilesStatisticsResponse,
  FilesCountStatistics,
} from '../utils/jsonResponses/Statistics'
const Plot = createPlotlyComponent(Plotly)

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export type StatisticsPlotProps = {
  request: ProjectFilesStatisticsRequest
  token?: string
  title?: string
  xtitle?: string
  ytitle?: string
  isHorizontal?: boolean
  xaxistype?: string
  showlegend?: boolean
}

type StatisticsPlotState = {
  isLoaded: boolean
  plotData?: ProjectFilesStatisticsResponse
}

class StatisticsPlot extends React.Component<
  StatisticsPlotProps,
  StatisticsPlotState
> {
  constructor(props: StatisticsPlotProps) {
    super(props)
    this.state = {
      isLoaded: false,
      plotData: {} as ProjectFilesStatisticsResponse,
    }
  }

  public componentDidMount() {
    this.fetchPlotlyData()
  }
  /**
   * Get data for plotly
   *
   * @returns data corresponding to plotly widget
   */
  fetchPlotlyData = async () => {
    const { request, token } = this.props
    return SynapseClient.getProjectStatistics(request, token)
      .then((data: ProjectFilesStatisticsResponse) => {
        this.setState({
          isLoaded: true,
          plotData: data,
        })
      })
      .catch((err: any) => {
        console.log('Error on call to get statistics ', err)
      })
  }

  getTrace = (
    traceName: string,
    stats: FilesCountStatistics[],
    orientation: string,
    markerColor: string,
  ) => {
    let x: string[] = []
    let y: number[] = []
    const trace = {
      orientation,
      x,
      y,
      name: traceName,
      type: 'bar',
      marker: {color: markerColor},
      hovertemplate:
          // see S3 Formatting options: https://github.com/d3/d3-3.x-api-reference/blob/master/Formatting.md#d3_format
          `%{y:n} <br><extra>${traceName}</extra>`,
    }
    for (const statPoint of stats) {
      const month = months[new Date(statPoint.rangeStart).getUTCMonth()]
      trace.x.push(month)
      trace.y.push(statPoint.filesCount)
    }
    return trace
  }

  showPlot = () => {
    if (!this.state.isLoaded || !this.state.plotData) {
      return
    }
    const {
      title,
      xtitle,
      ytitle,
      isHorizontal,
      xaxistype,
      showlegend,
    } = this.props
    const plotData = this.state.plotData
    const layout: any = {
      showlegend,
      title,
      barmode: 'stack'      
    }
    const config:any = {
      displayModeBar: true,
      displaylogo: false,
      // options found here: https://github.com/plotly/plotly.js/blob/master/src/components/modebar/buttons.js
      modeBarButtonsToRemove: ['sendDataToCloud','hoverCompareCartesian','select2d','lasso2d','zoom2d','resetScale2d','hoverClosestCartesian','toggleSpikelines']
    }
    if (xtitle) {
      layout.xaxis = {
        title: xtitle,
      }
    }
    if (xaxistype) {
      layout.xaxis = {
        ...layout.xaxis,
        xaxistype: xaxistype.toLowerCase(),
      }
    }
    if (ytitle) {
      layout.yaxis = {
        title: ytitle,
      }
    }
    // init plot_data
    const orientation: string = isHorizontal ? 'h' : 'v'
    const traces: any = []
    if (
      plotData.fileDownloads &&
      plotData.fileDownloads.months &&
      plotData.fileDownloads.months.length > 0
    ) {
      // add file downloads trace
      traces.push(
        this.getTrace(
          'File Downloads',
          plotData.fileDownloads.months,
          orientation,
          '#7CC0C4'
        ),
      )
    }
    if (
      plotData.fileUploads &&
      plotData.fileUploads.months &&
      plotData.fileUploads.months.length > 0
    ) {
      // add file uploads trace
      traces.push(
        this.getTrace('File Uploads', plotData.fileUploads.months, orientation, '#D4689A'),
      )
    }
    if (traces.length > 0) return <Plot layout={layout} data={traces} config={config}/>
    else return <></>
  }

  public render() {
    if (!this.state.isLoaded) {
      return null
    }
    return this.showPlot()
  }
}
export default StatisticsPlot

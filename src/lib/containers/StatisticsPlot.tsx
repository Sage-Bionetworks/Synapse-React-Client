import * as React from 'react'
// tslint:disable-next-line:import-name
import Plotly from 'plotly.js-basic-dist'
// tslint:disable-next-line:import-name
import createPlotlyComponent from 'react-plotly.js/factory'
import { SynapseClient } from '../utils'
import { ProjectFilesStatisticsRequest, ProjectFilesStatisticsResponse, FilesCountStatistics } from '../utils/jsonResponses/Statistics'
const Plot = createPlotlyComponent(Plotly)

type StatisticsPlotProps = {
  request: ProjectFilesStatisticsRequest
  token?: string
  endpoint?: string
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

class StatisticsPlot extends React.Component<StatisticsPlotProps, StatisticsPlotState> {

  constructor(props: StatisticsPlotProps) {
    super(props)
    this.state = {
      isLoaded: false,
      plotData: {} as ProjectFilesStatisticsResponse
    }
    this.fetchPlotlyData = this.fetchPlotlyData.bind(this)
    this.showPlot = this.showPlot.bind(this)
  }

  public componentDidMount() {
    this.fetchPlotlyData()
  }
  /**
   * Get data for plotly
   *
   * @returns data corresponding to plotly widget
   */
  public fetchPlotlyData() {
    const { token, request, endpoint } = this.props
    SynapseClient.getProjectStatistics(request, token, endpoint).then(
      (data: ProjectFilesStatisticsResponse) => {
        this.setState({
          isLoaded: true,
          plotData: data
        })
      }
    ).catch(
      (err: any) => {
        console.log('Error on call to get statistics ', err)
      }
    )
  }

  private getTrace(traceName:string, stats: FilesCountStatistics[], orientation: string) {
    if (stats) {
      let x: string[] = [];
      let y: number[] = [];
      const trace = {
        orientation,
        x,
        y,
        name: traceName,
        type: 'bar'
      }
      for (const statPoint of stats){
        const month = new Date(statPoint.rangeStart).toLocaleString('default', { month: 'long' })
        trace.x.push(month)
        trace.y.push(statPoint.filesCount)
      }
      return trace
    }
    return undefined
  }

  public showPlot() {
    if (!this.state.isLoaded || !this.state.plotData) {
      return
    }
    const {
            title,
            xtitle,
            ytitle,
            isHorizontal,
            xaxistype,
            showlegend
        } = this.props
    const plotData = this.state.plotData
    const layout: any = {
      showlegend,
      title,
      barmode: 'stack'
    }
    if (xtitle) {
      layout.xaxis = {
        title: xtitle
      }
    }
    if (xaxistype) {
      layout.xaxis = {
        ...layout.xaxis,
        xaxistype: xaxistype.toLowerCase()
      }
    }
    if (ytitle) {
      layout.yaxis = {
        title: ytitle
      }
    }
    // init plot_data
    const orientation: string = isHorizontal ? 'h' : 'v'
    const traces: any = []
    if (plotData.fileDownloads) {
      // add file downloads trace
      traces.push(this.getTrace('File Downloads', plotData.fileDownloads.months, orientation))
    }
    if (plotData.fileUploads) {
      // add file uploads trace
      traces.push(this.getTrace('File Uploads', plotData.fileUploads.months, orientation))
    }
    return <Plot layout={layout} data={traces} />
  }

  public render() {
    if (!this.state.isLoaded) {
      return null
    }
    return (this.showPlot())
  }
}
export default StatisticsPlot

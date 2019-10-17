import * as React from 'react'
// tslint:disable-next-line:import-name
import Plotly from 'plotly.js-basic-dist'
// tslint:disable-next-line:import-name
import createPlotlyComponent from 'react-plotly.js/factory'
import { SynapseClient } from '../utils'
import { ProjectFilesStatisticsRequest, ProjectFilesStatisticsResponse, FilesCountStatistics } from '../utils/jsonResponses/Statistics'
const Plot = createPlotlyComponent(Plotly)

const months = new Array(12);
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

export type StatisticsPlotProps = {
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
    const { token, request, endpoint } = this.props
    return SynapseClient.getProjectStatistics(request, token, endpoint).then(
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

  getTrace = (traceName:string, stats: FilesCountStatistics[], orientation: string) => {
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
    if (plotData.fileDownloads && plotData.fileDownloads.months && plotData.fileDownloads.months.length > 0) {
      // add file downloads trace
      traces.push(this.getTrace('File Downloads', plotData.fileDownloads.months, orientation))
    }
    if (plotData.fileUploads && plotData.fileUploads.months && plotData.fileUploads.months.length > 0) {
      // add file uploads trace
      traces.push(this.getTrace('File Uploads', plotData.fileUploads.months, orientation))
    }
    if (traces.length > 0)
      return <Plot layout={layout} data={traces} />
    else
      return <></>
  }

  public render() {
    if (!this.state.isLoaded) {
      return null
    }
    return (this.showPlot())
  }
}
export default StatisticsPlot

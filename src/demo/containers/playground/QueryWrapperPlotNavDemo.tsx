import * as React from 'react'
import { SynapseConstants } from '../../../lib/utils'
import QueryWrapperPlotNav, { QueryWrapperPlotNavProps } from 'lib/containers/QueryWrapperPlotNav'

type DemoState = {
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  version: number
  tableProps: QueryWrapperPlotNavProps
  activeTab: number
}
/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
class QueryWrapperPlotNavDemo extends React.Component<{},
  DemoState
> {
  /**
   * Maintain internal state of user session
   */
  constructor(props: any) {
    super(props)
    const computationalSql:string =
      "SELECT * FROM syn20337467 WHERE toolType = 'computational' LIMIT 100"
    this.state = {
      isLoading: true,
      ownerId: '',
      showMarkdown: true,
      activeTab: 3,
      version: 0,
      tableProps: 
      {
        title: 'Test only',
        synapseId: 'syn20337467',
        sqlOperator: '=',
        unitDescription: 'datum',
        initQueryRequest:{
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          partMask:
            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
            SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
            SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
            SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
            SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
          query: {
            sql: computationalSql,
            limit: 25,
            offset: 0,
          },
        },
        rgbIndex: 5,
        // facetsToPlot: ['grant', 'softwareType'],
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.removeHandler = this.removeHandler.bind(this)
    this.rgba2rgb = this.rgba2rgb.bind(this)
  }

  public rgba2rgb(background: number[], color: number[]) {
    const alpha = color[3]
    return [
      Math.floor((1 - alpha) * background[0] + alpha * color[0] + 0.5),
      Math.floor((1 - alpha) * background[1] + alpha * color[1] + 0.5),
      Math.floor((1 - alpha) * background[2] + alpha * color[2] + 0.5),
    ]
  }

  /**
   * Update internal state
   * @param {Object} updatedState new state to be updated by the component
   */
  public handleChange(updatedState: {}): void {
    this.setState(updatedState)
  }

  public removeHandler(): void {
    this.setState({ showMarkdown: !this.state.showMarkdown })
  }

  public render(): JSX.Element {
    return (
      <div className="container">
        <h2>Demo of plot nav table</h2>
        <QueryWrapperPlotNav {...this.state.tableProps} />
      </div>
    )
  }
}
export default QueryWrapperPlotNavDemo

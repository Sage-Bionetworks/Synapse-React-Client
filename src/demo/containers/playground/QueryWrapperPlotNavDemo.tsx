import * as React from 'react'
import QueryWrapperPlotNav, {
  QueryWrapperPlotNavProps,
} from 'lib/containers/query_wrapper_plot_nav/QueryWrapperPlotNav'
import { SynapseConstants } from 'lib'

type DemoState = {
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  propsWithTable: QueryWrapperPlotNavProps
  propsWithCards: QueryWrapperPlotNavProps
  showCards: boolean
}
/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
class QueryWrapperPlotNavDemo extends React.Component<
  { token: string },
  DemoState
> {
  /**
   * Maintain internal state of user session
   */
  constructor(props: any) {
    super(props)
    const sql: string = 'SELECT * FROM syn16858331'
    this.state = {
      isLoading: true,
      ownerId: '',
      showMarkdown: true,
      showCards: false,
      propsWithTable: {
        tableConfiguration: {
          loadingScreen: <> I'm loading as fast as I can!!!! </>,
          isRowSelectionVisible: true
        },
        visibleColumnCount: 10,
        facetsToPlot: ['assay'],
        rgbIndex: 1,
        name: 'PlotNav Demo',
        sqlOperator: '=',
        sql,
        entityId: 'syn16858331',
        // facetsToPlot: ['assay', 'dataType'],
        loadingScreen: (
          <div>
            <div className="spinner"> </div>Im loading as fast I can !!!{' '}
          </div>
        ),
        customControls: [{
          buttonText: 'Custom control 1',
          onClick: (event => {
            debugger
            console.log('click event captured')
            console.log('event.data' + event.data)
            console.log('event.selectedRowIndices' + event.selectedRowIndices)
          }),
          
        }]
      },
      propsWithCards: {
        rgbIndex: 1,
        name: 'PlotNav Demo',
        sqlOperator: '=',
        sql,
        entityId: 'syn16858331',
        cardConfiguration: {
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: {
            title: 'id',
            type: SynapseConstants.STUDY,
          },
        },
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.removeHandler = this.removeHandler.bind(this)
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
    const { showCards } = this.state
    const propsForPlotNav = this.state.showCards
      ? this.state.propsWithCards
      : this.state.propsWithTable
    return (
      <div className="container">
        <h2>Demo of plot nav table</h2>
        <button
          className="SRC-primary-background-color"
          style={{ color: 'white', padding: 10 }}
          onClick={() => this.setState({ showCards: !showCards })}
        >
          Switch to cards
        </button>
        <QueryWrapperPlotNav token={this.props.token} {...propsForPlotNav} />
      </div>
    )
  }
}
export default QueryWrapperPlotNavDemo

import * as React from 'react'
import QueryWrapperPlotNav, {
  QueryWrapperPlotNavProps,
} from '../../../lib/containers/query_wrapper_plot_nav/QueryWrapperPlotNav'
import { SynapseConstants, SynapseClient } from '../../../lib'
import {
  TableUpdateTransactionRequest,
  PartialRow,
} from '../../../lib/utils/synapseTypes/Table/TableUpdate'
import { Row } from '../../../lib/utils/synapseTypes'

type DemoState = {
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  propsWithTable: QueryWrapperPlotNavProps
  propsWithCards: QueryWrapperPlotNavProps
  propsWithCustomCommands: QueryWrapperPlotNavProps
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
    const sql: string = 'SELECT study, assay, id FROM syn11346063 limit 1000'
    this.state = {
      isLoading: true,
      ownerId: '',
      showMarkdown: true,
      showCards: true,
      propsWithTable: {
        tableConfiguration: {
          showAccessColumn: true,
          columnLinks: [
            {
              matchColumnName: 'study',
              isMarkdown: false,
              baseURL: 'Explore/Studies/DetailsPage',
              URLColumnName: 'Study_Name',
              wrapValueWithParens: true,
            },
          ],
        },
        searchConfiguration: {
          searchable: ['assay','name','consortium'],
        },
        visibleColumnCount: 10,
        facetsToPlot: ['assay'],
        rgbIndex: 1,
        name: 'PlotNav Demo',
        sqlOperator: '=',
        sql,
        // facetsToPlot: ['assay', 'dataType'],
      },
      propsWithCards: {
        rgbIndex: 1,
        name: 'PlotNav Demo',
        sqlOperator: '=',
        sql,
        cardConfiguration: {
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: {
            title: 'id',
            type: SynapseConstants.STUDY,
          },
        },
      },
      propsWithCustomCommands: {
        tableConfiguration: {
          isRowSelectionVisible: true,
        },
        visibleColumnCount: 10,
        facetsToPlot: ['Ethnicity', 'Sex'],
        rgbIndex: 1,
        name: 'PlotNav Demo',
        sqlOperator: '=',
        sql: 'select * from syn22084217',
        customControls: [
          {
            buttonText: 'Update WorkflowState',
            classNames: 'exampleClassNameToAddToButton',
            onClick: event => {
              // Demo custom control updates all values in a particular column for the selected rows (CRC)
              // test Updating a Synapse Table for the first time from SRC, by updating the WorkflowState column value
              const entityId: string = event.data?.queryResult.queryResults
                .tableId!
              // find target column
              const targetColumn = event.data?.columnModels!.find(
                cm => cm.name === 'WorkflowState',
              )
              // collect all selected rows (create PartialRow objects)
              const rowUpdates: PartialRow[] = []
              const rows: Row[] = event.data?.queryResult.queryResults!.rows!
              for (
                let index = 0;
                index < event.selectedRowIndices!.length;
                index++
              ) {
                rowUpdates.push({
                  rowId: rows[event.selectedRowIndices![index]].rowId,
                  values: [
                    {
                      key: targetColumn?.id!,
                      value: 'Selected',
                    },
                  ],
                })
              }

              const request: TableUpdateTransactionRequest = {
                concreteType:
                  'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
                entityId,
                changes: [
                  {
                    concreteType:
                      'org.sagebionetworks.repo.model.table.AppendableRowSetRequest',
                    entityId,
                    toAppend: {
                      concreteType:
                        'org.sagebionetworks.repo.model.table.PartialRowSet',
                      tableId: entityId,
                      rows: rowUpdates,
                    },
                  },
                ],
              }
              SynapseClient.updateTable(request, props.token).then(() => {
                console.log('updated!')
                // refresh data after successful update
                event.refresh()
              })
            },
          },
        ],
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

  componentDidMount() {
    const log = (ev: any) => {
      if (ev.target instanceof HTMLButtonElement) {
        const buttonElement = ev.target as HTMLButtonElement
        if (
          buttonElement.classList.contains(SynapseConstants.SRC_SIGN_IN_CLASS)
        ) {
          console.log('testing sign in button event captured')
        }
      }
    }
    window.document.addEventListener('click', log)
  }

  public render(): JSX.Element {
    const { showCards } = this.state
    const propsForPlotNav = this.state.showCards
      ? this.state.propsWithCards
      : this.state.propsWithTable
    return (
      <div className="container-fluid">
        <h2>Demo of plot nav table</h2>
        <button
          className="SRC-primary-background-color"
          style={{ color: 'white', padding: 10 }}
          onClick={() => this.setState({ showCards: !showCards })}
        >
          Switch to table/cards
        </button>
        <QueryWrapperPlotNav token={this.props.token} {...propsForPlotNav} />
        <hr></hr>
        {/* <h3>Now with custom commands</h3> */}
        {/* <QueryWrapperPlotNav
          token={this.props.token}
          {...this.state.propsWithCustomCommands}
        /> */}
      </div>
    )
  }
}
export default QueryWrapperPlotNavDemo

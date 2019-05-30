import * as React from 'react'
import { SynapseClient } from '../../../lib'
import QueryWrapperMenu, { MenuConfig } from '../../../lib/containers/QueryWrapperMenu'
import { SynapseConstants } from '../../../lib/utils'
import '../App.css'

type DemoState = {
  token: string
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  version: number
  tabOne: any
  tabTwo: any
  showTabOne: boolean
}
/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
class QueryWrapperMenuDemo extends React.Component<{rgbIndex: number}, DemoState> {
  /**
   * Maintain internal state of user session
   */
  constructor(props: any) {
    super(props)
    this.state = {
      isLoading: true,
      ownerId: '',
      showMarkdown: true,
      showTabOne: false,
      tabOne:
      {
        menuConfig: [
          {
            facetName: 'projectStatus',
            title: 'title',
            sql: 'SELECT * FROM syn16787123',
            synapseId: 'syn16787123',
            unitDescription: 'data files',
            visibleColumnCount: 3,
          },
        ],
      }
    ,
      tabTwo: {
        menuConfig: [
          {
            facetName: 'study',
            sql:
            `SELECT * FROM syn11346063
            `,
            title: 'title',
            unitDescription: 'datum'
          },
          {
            facetName: 'dataType',
            sql: 'SELECT id, fundingAgency, assay, diagnosis, dataType FROM syn16858331',
            synapseId: 'syn16858331',
            title: 'title',
            unitDescription: 'descriptive unit'
          },
          {
            facetName: 'diagnosis',
            sql: 'SELECT id, fundingAgency, assay, diagnosis, dataType FROM syn16858331',
            synapseId: 'syn16858331',
            title: 'title'
          }
        ] as MenuConfig[]
        ,
        rgbIndex: 5
      }
      ,
      token: '',
      version: 0
    }
    this.makeSampleQueryCall = this.makeSampleQueryCall.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeHandler = this.removeHandler.bind(this)
    this.rgba2rgb = this.rgba2rgb.bind(this)
  }

  public rgba2rgb(background: number[], color: number[]) {
    const alpha = color[3]
    return [
      Math.floor((1 - alpha) * background[0] + alpha * color[0] + 0.5),
      Math.floor((1 - alpha) * background[1] + alpha * color[1] + 0.5),
      Math.floor((1 - alpha) * background[2] + alpha * color[2] + 0.5)
    ]
  }

  /**
   * Make a query on synapse
   */
  public makeSampleQueryCall(): void {
    // Example table (view) query.
    // See https://docs.synapse.org/rest/POST/entity/id/table/query/async/start.html
    const QUERY = {
      entityId: 'syn12335586',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
      query: {
        includeEntityEtag: true,
        isConsistent: false,
        limit: 100,
        offset: 0,
        sql: 'SELECT * FROM syn12335586'
      }
    }
    SynapseClient.getQueryTableResults(QUERY)
      .then((data: any) => console.log(data))
      .catch((error: any) => {
        console.error(error)
      })
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
        <button
          role="button"
          className="btn btn-default"
          // tslint:disable-next-line
          onClick={() => {this.setState({showTabOne: !this.state.showTabOne})}}
        >
          toggle tabs
        </button>
        <h2>Demo of table</h2>
          <QueryWrapperMenu
            token={''}
            isConsistent={true}
            menuConfig={this.state.showTabOne ? this.state.tabOne.menuConfig : this.state.tabTwo.menuConfig}
            rgbIndex={this.state.showTabOne ? 1 : this.state.tabTwo.rgbIndex}
            type={this.state.showTabOne ? this.state.tabOne.type : this.state.tabTwo.type}
            loadingScreen={<div>loading... </div>}
          />
        </div>
    )
  }
}
export default QueryWrapperMenuDemo

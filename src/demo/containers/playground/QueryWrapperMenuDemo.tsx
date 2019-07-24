import * as React from 'react'
import { SynapseClient } from '../../../lib'
import QueryWrapperMenu, { MenuConfig, QueryWrapperMenuProps } from '../../../lib/containers/QueryWrapperMenu'
import { SynapseConstants } from '../../../lib/utils'
import '../App.css'
import { GenericCardSchema } from 'lib/containers/GenericCard'

type DemoState = {
  token: string
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  version: number
  tabOne: any
  tabTwo: QueryWrapperMenuProps
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
    const experimentalSql = "SELECT * FROM syn20337467 WHERE toolType = 'experimental'" 
    const computationalSql = "SELECT * FROM syn20337467 WHERE toolType = 'computational'" 
    const genericCardSchema: GenericCardSchema = {
      title: 'Title',
      type: 'Generic Tool',
      subTitle: 'softwareType',
      description: 'summary',
      icon: 'icon',
      secondaryLabels: {
        0: { key: 'contributor', alias: 'Contributor' },
        1: { key: 'diagnosis', alias: 'Diagnosis' },
        2: { key: 'program', alias: 'Program' }
      }
    }
    this.state = {
      isLoading: true,
      ownerId: '',
      showMarkdown: true,
      showTabOne: true,
      tabTwo:
      {
        showBarChart: false,
        name: 'Demo',
        unitDescription: 'persons',
        cardConfiguration: {
          genericCardSchema,
          type: SynapseConstants.MEDIUM_USER_CARD,
          loadingScreen: <div style={{height: 450}}> I'm loading as fast I can! </div>
        },
        rgbIndex: 1,
        accordionConfig: [
          {
            name: 'Clinical',
            cardConfiguration: {
              genericCardSchema,
              type: SynapseConstants.GENERIC_CARD,
              loadingScreen: <div style={{height: 450}}> I'm loading as fast I can! </div>
            },  
            menuConfig: [
              {
                facetName: 'grant',
                sql: computationalSql,
              },
              {
                facetName: 'diagnosis',
                sql: `${computationalSql} LIMIT 1 `,
              },
              {
                facetName: 'modelType',
                sql: `${computationalSql} LIMIT 2`,
              },
            ],
          },
          {
            name: 'Experimental',
            cardConfiguration: {
              genericCardSchema,
              type: SynapseConstants.GENERIC_CARD,
              loadingScreen: <div style={{height: 450}}> I'm loading as fast I can! </div>
            },  
            menuConfig: [
              {
                facetName: 'program',
                sql: experimentalSql,
              },
              {
                facetName: 'reagentType',
                sql: `${experimentalSql} LIMIT 1`,
              },
              {
                facetName: 'softwareType',
                sql: `${experimentalSql} LIMIT 2`,
              },
            ],
          },
        ],
      }
    ,
      tabOne: {
        tableConfiguration: {
          title: 'title',
          unitDescription: 'datum'
        },
        menuConfig: [
          {
            facetName: 'study',
            sql: 'SELECT * FROM syn11346063',
          },
          {
            facetName: 'diagnosis',
            sql: 'SELECT study, assay, count(distinct id) AS files, concat(organ) AS organs' +
              ' FROM syn17024112 WHERE species=\'Human\' AND assay=\'rnaSeq\' group by 1,2 order by 3 desc',
          },
          // {
          //   facetName: 'dataType',
          //   sql: 'SELECT id, fundingAgency, assay, diagnosis, dataType FROM syn16858331',
          //   synapseId: 'syn16858331',
          //   title: 'title',
          //   unitDescription: 'descriptive unit'
          // },
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

    const props = this.state.showTabOne ? this.state.tabOne : this.state.tabTwo
    return (
      <div className="container">
        <button
          className="btn btn-default"
          onClick={() => {this.setState({showTabOne: !this.state.showTabOne})}}
        >
          toggle tabs
        </button>
        <h2>Demo of table</h2>
          <QueryWrapperMenu
            token={''}
            name={'Studies'}
            isConsistent={true}
            {...props}
            rgbIndex={this.state.showTabOne ? 1 : this.state.tabTwo.rgbIndex}
            loadingScreen={<div>loading... </div>}
          />
        </div>
    )
  }
}
export default QueryWrapperMenuDemo

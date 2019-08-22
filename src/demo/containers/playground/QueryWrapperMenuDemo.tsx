import * as React from 'react'
import QueryWrapperMenu, { MenuConfig, QueryWrapperMenuProps } from '../../../lib/containers/QueryWrapperMenu'
import { SynapseConstants } from '../../../lib/utils'
import '../App.css'
import { GenericCardSchema } from '../../../lib/containers/GenericCard'

type DemoState = {
  token: string
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  version: number
  tabOne: QueryWrapperMenuProps
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
      secondaryLabels: [
        'contributor',
        'diagnosis',
        'program',
      ]
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
        facetAliases: {
          grant: 'Grant'
        },
        accordionConfig: [
          {
            name: 'Compuational',
            cardConfiguration: {
              genericCardSchema,
              type: SynapseConstants.GENERIC_CARD,
              loadingScreen: <div style={{height: 450}}> I'm loading as fast I can! </div>
            },  
            menuConfig: [
              {
                facet: 'grant',
                sql: computationalSql,
              },
              {
                facet: 'diagnosis',
                sql: computationalSql,
              },
              {
                facet: 'modelType',
                sql: computationalSql,
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
                facet: 'program',
                sql: experimentalSql,
              },
              {
                facet: 'reagentType',
                sql: experimentalSql,
              },
              {
                facet: 'softwareType',
                sql: experimentalSql,
              },
            ],
          },
        ],
      }
    ,
      tabOne: {
        unitDescription: 'datum',
        tableConfiguration: {
          title: 'title',
          synapseId: 'syn11346063'
        },
        searchConfiguration: {
          searchable: [
            {
              columnName: 'study',
              hintText: 'study name'
            },
          ]
        },
        menuConfig: [
          {
            facet: 'diagnosis',
            sql: 'SELECT study, assay, count(distinct id) AS files, concat(organ) AS organs' +
            ' FROM syn17024112 WHERE species=\'Human\' AND assay=\'rnaSeq\' group by 1,2 order by 3 desc limit 1000',
          },
          {
            facet: 'study',
            sql: 'SELECT * FROM syn11346063 limit 1000',
          },
          // {
          //   facet: 'dataType',
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
            isConsistent={true}
            {...props}
          />
        </div>
    )
  }
}
export default QueryWrapperMenuDemo

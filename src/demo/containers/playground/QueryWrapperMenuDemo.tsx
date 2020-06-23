import * as React from 'react'
import QueryWrapperMenu, {
  MenuConfig,
  QueryWrapperMenuProps,
} from '../../../lib/containers/QueryWrapperMenu'
import { SynapseConstants } from '../../../lib/utils'
import { GenericCardSchema } from '../../../lib/containers/GenericCard'

type DemoState = {
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  version: number
  tabOne: QueryWrapperMenuProps
  tabTwo: QueryWrapperMenuProps
  tabThree: QueryWrapperMenuProps
  tabFour: QueryWrapperMenuProps
  activeTab: number
}
/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
class QueryWrapperMenuDemo extends React.Component<
  { rgbIndex: number; token: string | undefined },
  DemoState
> {
  /**
   * Maintain internal state of user session
   */
  constructor(props: any) {
    super(props)
    const experimentalSql =
      "SELECT * FROM syn20337467 WHERE toolType = 'experimental' LIMIT 100"
    const computationalSql =
      "SELECT * FROM syn20337467 WHERE toolType = 'computational' LIMIT 100"
    const genericCardSchema: GenericCardSchema = {
      title: 'Title',
      type: 'Generic Tool',
      subTitle: 'softwareType',
      description: 'summary',
      icon: 'icon',
      secondaryLabels: ['contributor', 'diagnosis', 'program'],
    }
    this.state = {
      isLoading: true,
      ownerId: '',
      showMarkdown: true,
      activeTab: 2,
      tabFour: {
        stackedBarChartConfiguration: {
          loadingScreen: <div> Im loading as fast I can! </div>,
        },
        unitDescription: 'apples',
        entityId: 'syn21085100',
        tableConfiguration: {
          title: 'title',
          // markdownColumns: ['fruit', 'vegetable'],
        },
        menuConfig: [
          {
            facet: 'fruit',
            sql: 'select * from syn21085100',
          },
        ],
        rgbIndex: 3,
      },
      tabThree: {
        stackedBarChartConfiguration: {
          loadingScreen: <div> Im loading as fast I can! </div>,
        },
        entityId: 'syn22084217',
        unitDescription: 'datum',
        tableConfiguration: {
          title: 'title',
          showAccessColumn: true,
        },
        searchConfiguration: {
          searchable: [
            {
              columnName: 'study',
              hintText: 'study name',
            },
          ],
        },
        menuConfig: [
          {
            facet: 'resourceType',
            sql: 'SELECT * FROM syn22084217 LIMIT 1000',
          },
          {
            facet: 'study',
            sql: 'SELECT * FROM syn22084217 limit 1000',
          },
          {
            sql: 'SELECT * FROM syn22084217 limit 1000',
          },
        ] as MenuConfig[],
        rgbIndex: 5,
      },
      tabTwo: {
        name: 'Demo',
        unitDescription: 'persons',
        cardConfiguration: {
          genericCardSchema,
          type: SynapseConstants.MEDIUM_USER_CARD,
          loadingScreen: (
            <div style={{ height: 450 }}> I'm loading as fast I can! </div>
          ),
        },
        rgbIndex: 1,
        facetAliases: {
          grant: 'Grant',
        },
        entityId: 'syn20337467',
        accordionConfig: [
          {
            name: 'Compuational',
            cardConfiguration: {
              genericCardSchema,
              type: SynapseConstants.GENERIC_CARD,
              loadingScreen: (
                <div style={{ height: 450 }}> I'm loading as fast I can! </div>
              ),
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
              loadingScreen: (
                <div style={{ height: 450 }}> I'm loading as fast I can! </div>
              ),
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
      },
      tabOne: {
        unitDescription: 'datum',
        tableConfiguration: {
          title: 'title',
        },
        entityId: 'syn11346063',
        searchConfiguration: {
          searchable: [
            {
              columnName: 'study',
              hintText: 'study name',
            },
          ],
        },
        menuConfig: [
          {
            facet: 'diagnosis',
            sql:
              'SELECT study, assay, count(distinct id) AS files, concat(organ) AS organs' +
              " FROM syn17024112 WHERE species='Human' AND assay='rnaSeq' group by 1,2 order by 3 desc limit 1000",
          },
          {
            facet: 'PORTALS-712',
            sql:
              'SELECT dataType, assay, fileFormat, COUNT(distinct id) AS Files ' +
              "FROM syn11346063 WHERE (study LIKE '%MODEL-AD_5XFAD%') GROUP BY 1, 2, 3 ORDER BY 4 DESC",
          },
          {
            facet: 'PORTALS-803',
            sql:
              'SELECT diagnosis AS "Diagnosis", sex as "Sex", dataType as "Data Type", assay as "Assay", count(distinct(id)) as "Files", count(distinct(specimenID)) as "Specimens", count(distinct(individualID)) as "Individuals" FROM syn11346063 GROUP BY 1,2,3,4 ORDER BY 1 DESC',
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
        ] as MenuConfig[],
        rgbIndex: 5,
      },
      version: 0,
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
    const { activeTab } = this.state
    let props: QueryWrapperMenuProps = {} as QueryWrapperMenuProps
    if (activeTab === 0) {
      props = this.state.tabOne
    } else if (activeTab === 1) {
      props = this.state.tabTwo
    } else if (activeTab === 2) {
      props = this.state.tabThree
    } else {
      props = this.state.tabFour
    }
    return (
      <div className="container">
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ activeTab: 0 })
          }}
        >
          With Group By
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ activeTab: 1 })
          }}
        >
          With Tools
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ activeTab: 2 })
          }}
        >
          Standard
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ activeTab: 3 })
          }}
        >
          Table with markdown
        </button>
        <h2>Demo of table</h2>
        <QueryWrapperMenu
          token={this.props.token}
          isConsistent={true}
          {...props}
        />
      </div>
    )
  }
}
export default QueryWrapperMenuDemo

import React, { Component } from "react"
import logo from "../../images/logo.svg"
import { SynapseClient } from "../../lib"
import MarkdownSynapse from "../../lib/containers/MarkdownSynapse"
import QueryWrapperMenu from "../../lib/containers/QuerryWrapperMenu"
import StaticQueryWrapper from "../../lib/containers/StaticQueryWrapper"
import SynapseTableCardView from "../../lib/containers/SynapseTableCardView"
import * as SynapseConstants from "../../lib/utils/SynapseConstants"
import "./App.css"
// import QueryWrapper from "src/lib/containers/QueryWrapper"
// import StackedRowHomebrew from 'src/lib/containers/StackedRowHomebrew';
// import SynapseTableCardView from 'src/lib/containers/SynapseTableCardView';
// import ColorGradient from 'src/lib/containers/ColorGradient';
// import ColorGradient from 'src/lib/containers/ColorGradient';
// import ColorGradient from 'src/lib/containers/ColorGradient';

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
class Demo extends Component<{rgbIndex: number}, DemoState> {
  /**
   * Maintain internal state of user session
   */
  constructor(props: any) {
    super(props)
    this.state = {
      isLoading: true,
      ownerId: "",
      showMarkdown: true,
      showTabOne: false,
      tabOne:
      {
        menuConfig: [
          {
            // title: "Data",
            facetDisplayValue: "Organism",
            facetName: "Organism",
            sql: "SELECT * FROM syn9886254",
            synapseId: "syn9886254",
            unitDescription: "data files",
            visibleColumnCount: 3,
          },
          {
            facetDisplayValue: "Study",
            facetName: "Study",
            sql: "SELECT * FROM syn9886254",
            synapseId: "syn9886254",
            title: "Data",
            unitDescription: "data files",
            visibleColumnCount: 5,
          }
        ],
        rgbIndex: 2,
        type: SynapseConstants.AMP_STUDY
      }
    ,
      tabTwo: {
        menuConfig: [
          {
            facetName: "Consortium",
            sql: "SELECT * FROM syn9886254",
            synapseId: "syn9886254",
            title: "title",
            unitDescription: "Consortium"
          }]
        ,
        rgbIndex: 5
      }
      ,
      token: "",
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
      entityId: "syn12335586",
      partMask:
        // tslint:disable-next-line
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
      query: {
        includeEntityEtag: true,
        isConsistent: false,
        limit: 100,
        offset: 0,
        sql: "SELECT * FROM syn12335586"
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
    let token: string | undefined = ""
    let inDevEnv = false
    if (process.env.NODE_ENV === "development") {
      token = process.env.REACT_APP_DEV_TOKEN
      inDevEnv = true
    } else {
      token = this.state.token
    }

    return (
      <div className="App">
        <div className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="white-text">Playground of components under development </h4>
        </div>
        <p className="App-intro text-center">Synapse production version: {this.state.version}</p>

        <button
          role="button"
          className="btn btn-default"
          // tslint:disable-next-line
          onClick={() => {this.setState({showTabOne: !this.state.showTabOne})}}
        >
          toggle tabs
        </button>

        <QueryWrapperMenu
          token={inDevEnv ? token! : this.state.token!}
          menuConfig={this.state.showTabOne ? this.state.tabOne.menuConfig : this.state.tabTwo.menuConfig}
          rgbIndex={this.state.showTabOne ? this.state.tabOne.rgbIndex : this.state.tabTwo.rgbIndex}
          type={this.state.showTabOne ? this.state.tabOne.type : this.state.tabTwo.type}
          loadingScreen={<div>loading... </div>}
        />

        <StaticQueryWrapper
            sql="SELECT * FROM syn17024173"
            token={inDevEnv ? token! : this.state.token!}
        >
            <SynapseTableCardView
              type={SynapseConstants.AMP_CONSORTIUM}
            />
        </StaticQueryWrapper>

          <MarkdownSynapse
            ownerId={"syn14306197"}
            wikiId={"582150"}
            token={inDevEnv ? token! : this.state.token!}
          />

      </div>
    )
  }
}
export default Demo

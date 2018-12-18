//@ts-nocheck
import React, { Component } from "react";
import logo from "../../images/logo.svg";
import "./App.css";
import * as SynapseConstants from "../../lib/utils/SynapseConstants";
import QueryWrapperMenu from 'src/lib/containers/QuerryWrapperMenu';
import { SynapseClient } from 'src/lib';
import StaticQueryWrapper from 'src/lib/containers/StaticQueryWrapper';
import SynapseTableCardView from 'src/lib/containers/SynapseTableCardView';
import MarkdownSynapse from 'src/lib/containers/MarkdownSynapse';
// import QueryWrapper from 'src/lib/containers/QueryWrapper';
// import StackedRowHomebrew from 'src/lib/containers/StackedRowHomebrew';
// import SynapseTableCardView from 'src/lib/containers/SynapseTableCardView';
// import ColorGradient from 'src/lib/containers/ColorGradient';
// import ColorGradient from 'src/lib/containers/ColorGradient';
// import ColorGradient from 'src/lib/containers/ColorGradient';

type DemoState = 
  {
    token: string
    ownerId: string
    isLoading: boolean
    showMarkdown: boolean
    version: number
    tabOne: any
    tabTwo: any
    showTabOne: boolean
  };
/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
class Demo extends Component<{rgbIndex: number}, DemoState> {
  /**
   * Maintain internal state of user session
   */
  constructor(props: any) {
    super(props);
    this.state = {
      token: "",
      version: 0,
      ownerId: "",
      isLoading: true,
      showMarkdown: true,
      tabOne:
        {
          menuConfig: [
            {
              sql:
                "SELECT * FROM syn9886254",
              // title: "Data",
              synapseId: "syn9886254",
              facetName: "Organism",
              facetDisplayValue: "Organism",
              unitDescription: "data files",
              visibleColumnCount: 3,
            },
            {
              sql:
              "SELECT * FROM syn9886254",
              title: "Data",
              synapseId: "syn9886254",
              facetName: "Study",
              facetDisplayValue: "Study",
              unitDescription: "data files",
              visibleColumnCount: 5,
            }
          ],
          type: SynapseConstants.AMP_STUDY
          ,
          rgbIndex: 2,
        }
      ,
      tabTwo:{
          menuConfig: [
            { sql: "SELECT * FROM syn9886254",
                synapseId: "syn9886254",
                facetName: "Consortium",
                title: "title",
                unitDescription: "Consortium"
            }]
          ,
          rgbIndex: 5
        }
      ,
      showTabOne: false
    };
    this.makeSampleQueryCall = this.makeSampleQueryCall.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.rgba2rgb = this.rgba2rgb.bind(this);
  }

  rgba2rgb(background: number[], color: number[]) {
    const alpha = color[3];
    return [
        Math.floor((1 - alpha) * background[0] + alpha * color[0] + 0.5),
        Math.floor((1 - alpha) * background[1] + alpha * color[1] + 0.5),
        Math.floor((1 - alpha) * background[2] + alpha * color[2] + 0.5)
    ];
}


  /**
   * Make a query on synapse
   */
  makeSampleQueryCall(): void {
    // Example table (view) query.
    // See https://docs.synapse.org/rest/POST/entity/id/table/query/async/start.html
    let QUERY = {
      entityId: "syn12335586",
      query: {
        sql: "SELECT * FROM syn12335586",
        includeEntityEtag: true,
        isConsistent: false,
        offset: 0,
        limit: 100
      },
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS
    };
    SynapseClient.getQueryTableResults(QUERY)
      .then((data: any) => console.log(data))
      .catch(function(error: any) {
        console.error(error);
      });
  }
  /**
   * Update internal state
   * @param {Object} updatedState new state to be updated by the component
   */
  handleChange(updatedState: {}): void {
    this.setState(updatedState);
  }

  removeHandler(): void {
    this.setState({ showMarkdown: !this.state.showMarkdown });
  }

  render(): JSX.Element {
    let token: string | undefined = "";
    let inDevEnv = false;
    if (process.env.NODE_ENV === "development") {
      token = process.env.REACT_APP_DEV_TOKEN;
      inDevEnv = true;
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

        <button role="button" className="btn btn-default" onClick={() => {this.setState({showTabOne: !this.state.showTabOne})}}>
          toggle tabs
        </button>
      
        <QueryWrapperMenu
          token={inDevEnv ? token! : this.state.token!}
          menuConfig={this.state.showTabOne ? this.state.tabOne.menuConfig: this.state.tabTwo.menuConfig}
          rgbIndex={this.state.showTabOne ? this.state.tabOne.rgbIndex: this.state.tabTwo.rgbIndex}
          type={this.state.showTabOne ? this.state.tabOne.type: this.state.tabTwo.type}
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
            ownerId={"syn17100797"}
            wikiId={"587923"}
            token={inDevEnv ? token! : this.state.token!}
          >

          </MarkdownSynapse>

        
        {/* <QueryWrapper
          initQueryRequest={{
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask:
            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
            SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
            SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
            query: {
              isConsistent: false,
              sql: this.state.tabOne.menuConfig[0].sql,
              limit: 25,
              offset: 0
            }
          }}
          facetName={this.state.tabOne.menuConfig[0].facetName}
          token={inDevEnv ? token! : this.state.token!}
          rgbIndex={this.state.tabOne.rgbIndex}
          >
          <StackedRowHomebrew
                              synapseId={this.state.tabOne.menuConfig[0].synapseId}
                              loadingScreen={<div className="container">loading</div>} 
                              unitDescription={(this.state.tabOne.menuConfig[0].unitDescription || "")}
            />

            <SynapseTableCardView
            type={SynapseConstants.AMP_STUDY}
            >
            </SynapseTableCardView>
          </QueryWrapper> */}

      </div>
    );
  }
}
export default Demo;

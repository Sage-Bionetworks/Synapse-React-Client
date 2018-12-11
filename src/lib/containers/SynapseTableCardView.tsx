import React from 'react';
import PropTypes from 'prop-types'
import { STUDY, DATASET, FUNDER, PUBLICATION, TOOL, AMP_PROJECT, AMP_CONSORTIUM, AMP_STUDY } from '../utils/SynapseConstants';
import { Study, Tool, Publication, Dataset, Funder } from './row_renderers';
import { Project, Consortium, AMP_Study } from './row_renderers/AMPAD';
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest';
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle';
const uuidv4 = require("uuid/v4")
// Instead of giving each of the Study/Tool/etc components the same
// props we make a simple container that does
const PAGE_SIZE: number = 25

type RowContainerProps = {
    children: any
    data: any
    limit: number
    hideOrganizationLink: boolean
    schema: any
    token? : string
    ownerId? : string
    isHeader: boolean
}

const RowContainer: React.SFC<RowContainerProps> = ({ children, data, limit, ...rest }) => {
    return data.queryResult.queryResults.rows.map(
        (rowData: any, index: number) => {
            if (index < limit) {
                return (
                    <React.Fragment key={index}>
                        {React.Children.map(children,
                         (child: any, j) => {
                                return React.cloneElement(child, {key: `${index},${j}`, data: rowData.values, ...rest });
                            })}
                    </React.Fragment>
                );
            } else {
                return false;
            }
    });
};

type SynapseTableCardViewProps = {
    type: string,
    data?: QueryResultBundle,
    limit?: number,
    hideOrganizationLink?: boolean
    token? : string
    ownerId? : string
    isHeader?: boolean
    isQueryWrapperChild?: boolean
    getLastQueryRequest?: () => QueryBundleRequest
    getNextPageOfData?: (queryRequest: any) => Promise<boolean> 
    executeInitialQueryRequest?: () => void,
    isLoading? : boolean
};

type SynapseTableCardViewState = {
    hasMoreData: boolean
    cardLimit: number
    hasLoadedBufferData: boolean
}

class SynapseTableCardView extends React.Component<SynapseTableCardViewProps, SynapseTableCardViewState> {

    static propTypes = {
        type: PropTypes.oneOf([STUDY, DATASET, FUNDER, PUBLICATION, TOOL, AMP_PROJECT, AMP_CONSORTIUM, AMP_STUDY ]),
        limit: PropTypes.number,
        hideOrganizationLink: PropTypes.bool
    }

    constructor(props: SynapseTableCardViewProps) {
        super(props);
        this.renderChild = this.renderChild.bind(this);
        this.handleViewMore = this.handleViewMore.bind(this);
        this.getBufferData = this.getBufferData.bind(this);
        this.state = {
            hasMoreData: true,
            cardLimit: PAGE_SIZE,
            hasLoadedBufferData: false
        }
    }

    renderChild(): JSX.Element | boolean{
        const { type } = this.props;
        switch (type) {
            case STUDY:
                return <Study />;
            case DATASET:
                return <Dataset />;
            case FUNDER:
                return <Funder />;
            case PUBLICATION:
                return <Publication />;
            case TOOL:
                return <Tool />;
            case AMP_PROJECT:
                return <Project />;
            case AMP_CONSORTIUM:
                return <Consortium />;
            case AMP_STUDY:
                return <AMP_Study />;
            default:
                return (false); // this should never happen
        }
    }

    componentDidMount() {
        // we try to load one page of data ahead of cards, this allows the "view more" behavior 
        // to be instant
        this.getBufferData()
    }

    getBufferData() {
        // Load data ahead of the currently displayed data, do this recursively in case it needs more time
        if (!this.state.hasLoadedBufferData) {
            setTimeout(() => {
                if (!this.props.getLastQueryRequest) {
                    // parent component still setting up
                    this.getBufferData()
                    return
                }
                let queryRequest = this.props.getLastQueryRequest!();
                if (!queryRequest.query) {
                    // parent component still setting up
                    this.getBufferData()
                    return
                }
                let offset = queryRequest.query.offset!;
                // if its a "previous" click subtract from the offset
                // otherwise its next and we paginate forward
                offset += PAGE_SIZE;
                queryRequest.query.offset = offset;
                this.props.getNextPageOfData!(queryRequest);
                this.setState({hasLoadedBufferData: true})
            }, 1500)
        }
    }

    /**
     * Handle a click on next or previous
     *
     * @memberof SynapseTable
     */
    handleViewMore (){
       let queryRequest = this.props.getLastQueryRequest!();
       let offset = queryRequest.query.offset!;
       // if its a "previous" click subtract from the offset
       // otherwise its next and we paginate forward
       offset += PAGE_SIZE;
       queryRequest.query.offset = offset;
       
       let {cardLimit} = this.state
       this.setState({cardLimit: cardLimit + PAGE_SIZE})

       this.props.getNextPageOfData!(queryRequest).then(
           hasMoreData => {
               if (!hasMoreData) {
                   this.setState({hasMoreData: false})
               }
           }
       )
    };

    render() {
        const { data, 
                hideOrganizationLink = false,
                limit = Infinity,
                token="",
                ownerId="",
                isHeader=false            
                } = this.props;
        if (data === undefined || Object.keys(data).length === 0) {
            return <div className="container"> </div>;
        }
        let schema = {};
        data.queryResult.queryResults.headers.forEach(
            (element: any, index: any) => {
                schema[element.name] = index;
            });

        let cardLimit = 0 
        
        // Either the number of cards to be shown is specified by the developer in the props
        // or this card is under the query wrapper and we handle the view more button
        if (this.props.isQueryWrapperChild) {
            cardLimit = this.state.cardLimit
        } else {
            cardLimit = limit
        }
        let showViewMore = this.props.isQueryWrapperChild && data.queryResult.queryResults.rows.length >= PAGE_SIZE && this.state.hasMoreData && !this.props.isLoading
        return (
            <React.Fragment>
                <RowContainer 
                    key={uuidv4()}
                    hideOrganizationLink={hideOrganizationLink}
                    limit={cardLimit}
                    data={data}
                    schema={schema}
                    token={token}
                    ownerId={ownerId}
                    isHeader={isHeader}    
                >
                {this.renderChild()}
                </RowContainer>
                {showViewMore
                    &&
                        (<div>
                            <button onClick={this.handleViewMore} className="pull-right SRC-primary-background-hover SRC-viewMoreButton">
                            View More
                            </button>
                        </div>)
                }
            </React.Fragment>
        );
    }
}

export default SynapseTableCardView;

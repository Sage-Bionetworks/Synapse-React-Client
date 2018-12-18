import PropTypes from "prop-types"
import React from "react"
import { QueryBundleRequest } from "../utils/jsonResponses/Table/QueryBundleRequest"
import { QueryResultBundle } from "../utils/jsonResponses/Table/QueryResultBundle"
import {
    AMP_CONSORTIUM,
    AMP_PROJECT,
    AMP_STUDY,
    DATASET,
    FUNDER,
    PUBLICATION,
    STUDY,
    TOOL
} from "../utils/SynapseConstants"
import { Dataset, Funder, Publication, Study, Tool } from "./row_renderers"
import { AMP_Study, Consortium, Project } from "./row_renderers/AMPAD"
import { FacetColumnResultValues } from '../utils/jsonResponses/Table/FacetColumnResult';
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
    token?: string
    ownerId?: string
    isHeader: boolean
}

const RowContainer: React.SFC<RowContainerProps> = ({ children, data, limit, ...rest }) => {
    return data.queryResult.queryResults.rows.map(
        (rowData: any, index: number) => {
            if (index < limit) {
                const childrenWithProps = React.Children.map(children,
                    (child: any, j) => {
                        return React.cloneElement(child, { key: `${index},${j}`, data: rowData.values, ...rest })
                    })
                return (
                    <React.Fragment key={index}>
                        {childrenWithProps}
                    </React.Fragment>
                )
            } else {
                return false
            }
    })
}

type SynapseTableCardViewProps = {
    type: string,
    data?: QueryResultBundle,
    limit?: number,
    hideOrganizationLink?: boolean
    token?: string
    ownerId?: string
    isHeader?: boolean
    isQueryWrapperChild?: boolean
    getLastQueryRequest?: () => QueryBundleRequest
    getNextPageOfData?: (queryRequest: any) => Promise<boolean>
    executeInitialQueryRequest?: () => void,
    isLoading?: boolean
    filter?: string
    unitDescription?: number
}

type SynapseTableCardViewState = {
    hasMoreData: boolean
    cardLimit: number
    hasLoadedBufferData: boolean
}

class SynapseTableCardView extends React.Component<SynapseTableCardViewProps, SynapseTableCardViewState> {

    public static propTypes = {
        hideOrganizationLink: PropTypes.bool,
        limit: PropTypes.number,
        type: PropTypes.oneOf([STUDY, DATASET, FUNDER, PUBLICATION, TOOL, AMP_PROJECT, AMP_CONSORTIUM, AMP_STUDY ])
    }

    constructor(props: SynapseTableCardViewProps) {
        super(props)
        this.renderChild = this.renderChild.bind(this)
        this.handleViewMore = this.handleViewMore.bind(this)
        this.getBufferData = this.getBufferData.bind(this)
        this.state = {
            cardLimit: PAGE_SIZE,
            hasLoadedBufferData: false,
            hasMoreData: true
        }
    }

    public renderChild(): JSX.Element | boolean {
        const { type } = this.props
        switch (type) {
            case STUDY:
                return <Study />
            case DATASET:
                return <Dataset />
            case FUNDER:
                return <Funder />
            case PUBLICATION:
                return <Publication />
            case TOOL:
                return <Tool />
            case AMP_PROJECT:
                return <Project />
            case AMP_CONSORTIUM:
                return <Consortium />
            case AMP_STUDY:
                return <AMP_Study />
            default:
                return (false) // this should never happen
        }
    }

    public componentDidMount() {
        // we try to load one page of data ahead of cards, this allows the "view more" behavior
        // to be instant
        this.getBufferData()
    }

    public getBufferData() {
        // Load data ahead of the currently displayed data, do this recursively in case it needs more time
        if (!this.state.hasLoadedBufferData) {
            setTimeout(() => {
                if (!this.props.getLastQueryRequest) {
                    // parent component still setting up
                    this.getBufferData()
                    return
                }
                const queryRequest = this.props.getLastQueryRequest!()
                if (!queryRequest.query) {
                    // parent component still setting up
                    this.getBufferData()
                    return
                }
                let offset = queryRequest.query.offset!
                // if its a "previous" click subtract from the offset
                // otherwise its next and we paginate forward
                offset += PAGE_SIZE
                queryRequest.query.offset = offset
                this.props.getNextPageOfData!(queryRequest).then(
                    (hasMoreData) => {
                        this.setState({hasLoadedBufferData: true, hasMoreData})
                    }
                )
            }, 1500)
        }
    }

    /**
     * Handle a click on next or previous
     *
     * @memberof SynapseTable
     */
    public handleViewMore() {
       const queryRequest = this.props.getLastQueryRequest!()
       let offset = queryRequest.query.offset!
       // if its a "previous" click subtract from the offset
       // otherwise its next and we paginate forward
       offset += PAGE_SIZE
       queryRequest.query.offset = offset

       const {cardLimit} = this.state
       this.setState({cardLimit: cardLimit + PAGE_SIZE})

       this.props.getNextPageOfData!(queryRequest).then(
           (hasMoreData) => {
               if (!hasMoreData) {
                   this.setState({hasMoreData: false})
               }
           }
       )
    }

    public render() {
        const { data,
                hideOrganizationLink = false,
                limit = Infinity,
                token= "",
                ownerId= "",
                isHeader= false,
                isQueryWrapperChild,
                filter,
                unitDescription
                } = this.props
        if (data === undefined || Object.keys(data).length === 0) {
            return <div className="container"/>
        }
        const schema = {}
        data.queryResult.queryResults.headers.forEach(
            (element: any, index: any) => {
                schema[element.name] = index
            })

        let cardLimit = 0

        // Either the number of cards to be shown is specified by the developer in the props
        // or this card is under the query wrapper and we handle the view more button
        cardLimit = isQueryWrapperChild ? this.state.cardLimit : limit

        // We want to hide the view more button if:
        //     1. On page load we get the initial results and find there are < 25 rows
        //     2. We have done a subsequent query request from init render and have found
        //        that there were no rows returned.
        //     3. If its loading then we want it to remove from the screen so the browser doesn't
        //        keep the button in focus (its a UX issue).
        let showViewMore: boolean = isQueryWrapperChild! && data.queryResult.queryResults.rows.length >= PAGE_SIZE
        showViewMore = showViewMore && this.state.hasMoreData
        showViewMore = showViewMore && !this.props.isLoading

        const {facets = []} = data
        const curFacetsIndex = facets.findIndex((el) => el.facetType === "enumeration" && el.columnName === filter)
        if (curFacetsIndex === -1) {
            // stil waiting on the data to come through
            return <div/>
        }
        const curFacets = data.facets[curFacetsIndex] as FacetColumnResultValues

        // edge case -- if they are all false then they are considered all true..
        // sum up the counts of data
        let anyTrue = false
        let totalAllFalseCase = 0
        let totalStandardCase = 0
        if (curFacets) {
            for (const key of curFacets.facetValues) {
                anyTrue = anyTrue || key.isSelected
                totalAllFalseCase += key.count
                totalStandardCase += key.isSelected ? key.count : 0
            }
        }
        let total = anyTrue ? totalStandardCase : totalAllFalseCase

        if (!filter) {
            total = data.queryResult.queryResults.rows.length
        }
        // Either the filter is defined and the count should be shown or the client defined the unit description
        // and the count should be shown.
        const showCardCount = filter || (!filter && unitDescription)
        const showViewMoreButton = (
            showViewMore
            &&
            (
                <div>
                    <button
                        onClick={this.handleViewMore}
                        className="pull-right SRC-primary-background-hover SRC-viewMoreButton"
                    >
                        View More
                    </button>
                </div>
            )
        )
        return (
            <div className="container-fluid">
                {showCardCount && <p className="SRC-boldText SRC-text-title"> Displaying {total} {unitDescription}</p>}
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
                {showViewMoreButton}
            </div>
        )
    }
}

export default SynapseTableCardView

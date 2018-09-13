import React from 'react'
import PropTypes from 'prop-types'
import * as SynapseConstants from 'lib/utils/SynapseConstants';

export default class FacetsExperimental extends React.Component {

    constructor(props) {
        super(props)
        // this.recordSelections = this.recordSelections.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            originalFacets: []
        }
        this.formRef = React.createRef()
    }


    showFacetFilter() {
        if (this.props.isLoadingInitRequest) {
            return
        }

        let structuredRender = []

        this.props.originalFacets.facets.forEach(
            (element) => {
                if (element.facetType === "enumeration" && element.columnName === "createdBy") {
                    let children = []
                    element.facetValues.forEach(
                        facetValue => {
                            // let key = uuidv4()
                            children.push(
                                <div key={facetValue.value}>
                                    <input value={facetValue.value} onClick={this.handleClick({columnName: element.columnName})} type="checkbox"/>
                                    <label >{facetValue.value + ` (${facetValue.count})`}</label>
                                </div>
                            )
                        }
                    )
                    let name = <strong> {element.columnName} </strong>
                    let group = (
                                <div key={element.columnName}>
                                    {name}
                                    {children.map(child => {return child})}
                                </div>
                            )
                    structuredRender.push(group)
                }
            }
        )

        return (<React.Fragment>
                    {
                        structuredRender.map(
                            element => {
                                return element
                            }
                        )
                    }
                </React.Fragment>)
    }

    // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    handleClick = (dict) => (event) => {
        let boxes = this.formRef.current.getElementsByTagName("input")
        
        let selection = []
        for (let i = 0; i < boxes.length; i++) {
            if(boxes[i].checked) {
                selection.push(boxes[i].value)
            }
        }

        let entry = {
            columnName: dict.columnName,
            concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
            facetValues: selection
        }

        let {sql} = this.props

        let queryRequest = {
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask: SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS | SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
            query: {
                isConsistent: true,
                sql,
                limit: 1,
                selectedFacets: [entry]
            },
        };
        
        this.props.updateQueryRequest(queryRequest)
    }
    
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <form>
                            <div ref={this.formRef} className="form-group">
                                {this.showFacetFilter()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

FacetsExperimental.propTypes = {
    makeQueryRequest: PropTypes.bool,
}

FacetsExperimental.defaultProps = {
    makeQueryRequest: true
}
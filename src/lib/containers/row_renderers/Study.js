import React from 'react'
import { Chip } from './utils/index';

export default class Study extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            hasCreatedIndex: false,
        }
        this.toggleShowMore = this.toggleShowMore.bind(this)
    }

    toggleShowMore(event) {
        event.preventDefault()
        this.setState({
            showMore: !this.state.showMore
        })
    }

    render () {

        const {data, schema} = this.props
        const projectName = data[schema.projectName]
        const projectLeads = data[schema.projectLeads] && data[schema.projectLeads].split(";").join(" / ")
        let summary = data[schema.summary]

        const diseaseFocus = <Chip type="gray" text={data[schema.diseaseFocus]}></Chip>
        const tumorType = <Chip type="blue" text={data[schema.tumorType]}></Chip>
        
        const projectStatus = data[schema.projectStatus]
        const fundingAgency = data[schema.fundingAgency]
        const dataStatus = data[schema.dataStatus]
        const institutions = data[schema.institutions]
        return <div className="container SRC-syn-border SRC-noPaddingBottom  SRC-syn-border-spacing">
                    <div className="row">
                        <div className="col-xs-2">
                            {this.props.icon}
                        </div>
                        <div className="col-xs-10">
                            <div>
                                <p> STUDY </p>
                                <div>
                                    <h5> 
                                        <a className="SRC-magentaText" href="">
                                            {
                                                projectName
                                            }
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            <div>
                                <strong> 
                                    <i>
                                        {
                                            projectLeads
                                        }
                                    </i> 
                                </strong>
                            </div>
                            <div>
                                <p>
                                    {summary}
                                    {!this.state.showMore && <a className="SRC-magentaText" onClick={this.toggleShowMore}> Show More </a>}
                                </p>
                            </div>
                            <div className="SRC-marginBottomTen">
                                {diseaseFocus} {tumorType}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER */}
                    {this.state.showMore && <div className="row SRC-grayBackground">
                        <div className="col-xs-2">
                        </div>
                        <div className="col-xs-10">
                            <div className="row">
                                <div className="col-xs-4">
                                    <table className="SRC-paddingRight">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    STATUS
                                                </td>
                                                <td>
                                                    {projectStatus}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    FUNDER
                                                </td>
                                                <td>
                                                    {fundingAgency}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    DATA    
                                                </td>
                                                <td>
                                                    {dataStatus}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    PUBLICATIONS    
                                                </td>
                                                <td>
                                                    NONE
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-xs-4">
                                    <table className="SRC-paddingRight">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    INVESTIGATORS
                                                </td>
                                                <td>
                                                    {projectLeads}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-xs-4">
                                    <table className="SRC-paddingRight">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    INSTUTIONS    
                                                </td>
                                                <td>
                                                    {institutions}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
            </div>
    }
}
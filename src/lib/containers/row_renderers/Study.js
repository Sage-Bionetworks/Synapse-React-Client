import React from 'react'
import { Chip } from './utils/index';

const STUDY_SCHEMA = {
    projectName :0,
    id : 1,
    projectFileviewId : 2,
    projectStatus :3,
    dataStatus : 4,
    fundingAgency : 5,
    summary : 6,
    summarySource : 7,
    projectLeads : 8,
    institutions : 9,
    tumorType : 10,
    diseaseFocus: 11
}

const CUTOFF = 250

export default class Study extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false
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
        const {data} = this.props
        const projectName = data[STUDY_SCHEMA.projectName]
        const projectLeads = data[STUDY_SCHEMA.projectLeads] && data[STUDY_SCHEMA.projectLeads].split(";").join(" / ")
        let summary = data[STUDY_SCHEMA.summary]

        const diseaseFocus = <Chip type="gray" text={data[STUDY_SCHEMA.diseaseFocus]}></Chip>
        const tumorType = <Chip type="blue" text={data[STUDY_SCHEMA.tumorType]}></Chip>
        
        const projectStatus = data[STUDY_SCHEMA.projectStatus]
        const fundingAgency = data[STUDY_SCHEMA.fundingAgency]
        const dataStatus = data[STUDY_SCHEMA.dataStatus]
        const institutions = data[STUDY_SCHEMA.institutions]
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
import React from 'react'

const SCHEMA = {
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

const Study = (props) => {

    let projectName = props.data[SCHEMA.projectName]
    let projectLeads = props.data[SCHEMA.projectLeads]
    if (projectLeads.indexOf(";") !== -1) {
        projectLeads = props.data[SCHEMA.projectLeads].split(";").join(" / ")
    }
    

    return <div className="container SRC-syn-border  SRC-syn-border-spacing">
                <div className="row">
                    <div className="col-xs-2">
                        {props.icon}
                    </div>
                    <div className="col-xs-10">
                        <div>
                            <p> STUDY </p>
                            <div>
                                <a href="">
                                    {
                                        projectName
                                    }
                                </a>
                            </div>
                        </div>
                        <div>
                            <i>
                                {
                                    projectLeads
                                }
                            </i>
                        </div>
                        <div>
                            <p>
                                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                            </p>
                        </div>
                        <div>
                            chips go here and here
                        </div>
                    </div>
                </div>
                <div className="row SRC-grayBackground">
                    <div className="col-xs-4">
                        <p> STUDY </p>
                        <p> FUNDER </p>
                        <p> DATA </p>
                        <p> PUBLICATIONS </p>
                    </div>
                    <div className="col-xs-4">
                        <p> INVESTIGATORS </p>
                    </div>
                    <div className="col-xs-4">
                        <p> INSTITUTIONS </p>                    
                    </div>
                </div>
            </div>
}

export default Study
import React from 'react'

const SummaryHeader = ({name, title}) => {
    return (<React.Fragment>
                <span>
                    {name}
                </span>
                <div>
                    <h5> 
                        <a className="SRC-primary-text-color" href="">
                            {
                                title
                            }
                        </a>
                    </h5>
                </div>
            </React.Fragment>)
}
export default SummaryHeader
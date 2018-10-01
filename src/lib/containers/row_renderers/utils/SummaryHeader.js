import React from 'react'

const SummaryHeader = ({name, title}) => {
    return (<div>
                <p>
                    {name}
                </p>
                <div>
                    <h5> 
                        <a className="SRC-primary-text-color" href="">
                            {
                                title
                            }
                        </a>
                    </h5>
                </div>
            </div>)
}
export default SummaryHeader
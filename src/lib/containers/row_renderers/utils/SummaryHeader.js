import React from 'react'

const SummaryHeader = ({name, title, link}) => {
    return (<div>
                <p>
                    {name}
                </p>
                <div>
                    <h5> 
                        <a className="SRC-magentaText" href="">
                            {
                                title
                            }
                        </a>
                    </h5>
                </div>
            </div>)
}
export default SummaryHeader
import React from 'react'

const SummaryHeader = ({name, title, children}) => {
    return (<React.Fragment>
                <div>
                    {children}
                    {name}
                </div>
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
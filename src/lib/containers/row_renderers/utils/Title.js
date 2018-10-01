import React from 'react'

const Title = ({title}) => {
    return (
        <div>
            <h5> 
                <a className="SRC-primary-text-color" href="">
                    {
                        title
                    }
                </a>
            </h5>
        </div>
    )
}

export default Title
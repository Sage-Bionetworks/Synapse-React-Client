import React from 'react'

const StaticQueryWrapper = ({json, children}) => {
    return (
        <div>
            {React.Children.map(children, child =>{
                return React
                            .cloneElement(  child, 
                                            {
                                                data: json
                                            }
                                        )
            })} 
        </div>
    )

}

export default StaticQueryWrapper
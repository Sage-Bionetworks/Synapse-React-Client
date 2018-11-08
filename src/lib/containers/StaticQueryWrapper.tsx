import * as React from 'react'

type StaticQueryWrapperProps = {
    children : any
    json: any
}

const StaticQueryWrapper: React.SFC<StaticQueryWrapperProps> = ({ json, children}) => {
    return (
        <div>
            {React.Children.map(
                children, (child: any) => {
                    return React.cloneElement(child, {
                        data: json
                    })
            })}
        </div>
    )
}
export default StaticQueryWrapper

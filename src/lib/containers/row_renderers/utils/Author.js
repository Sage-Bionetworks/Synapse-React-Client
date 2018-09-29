import React from 'react'

const Authors = ({authors}) => {
    
    return (
        <div className="SRC-marginBottomTen">
            <strong> 
                <i>
                    {
                        authors
                    }
                </i> 
            </strong>
        </div>
    )
}

export default Authors
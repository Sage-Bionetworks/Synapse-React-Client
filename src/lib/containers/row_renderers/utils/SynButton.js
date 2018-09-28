import React from 'react'

const SynButton = ({text, link, onClick}) => {

    return (<button onClick={onClick(link)} type="button" className={"btn SRC-whiteText SRC-roundBorder SRC-magentaBackground"}>
                {text}
            </button>)
}

export default SynButton
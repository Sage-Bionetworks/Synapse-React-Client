import React from 'react'

const SynButton = ({text, link, onClick}) => {

    return (<button onClick={onClick(link)} type="button" className={"btn SRC-whiteText SRC-roundBorder SRC-primary-background-color"}>
                {text}
            </button>)
}

export default SynButton
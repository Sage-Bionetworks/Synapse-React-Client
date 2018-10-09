import React from 'react'

const SynButton = ({text, link, onClick, customClass}) => {
    return (<button onClick={onClick(link)} type="button" className={"btn SRC-whiteText SRC-roundBorder SRC-primary-background-color " + customClass}>
                {text}
            </button>)
}

export default SynButton
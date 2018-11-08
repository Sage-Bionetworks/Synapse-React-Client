import * as React from "react"

type SectionProps = {
    children: any
}

const Section: React.SFC<SectionProps> = ({ children }) => {
    return <div className="row SRC-marginBottomTop SRC-flex">{children}</div>
}

export default Section

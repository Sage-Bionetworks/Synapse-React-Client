import * as React from 'react'

type SummaryProps = {
  children: any
}

const Summary: React.SFC<SummaryProps> = ({ children }) => {
  return <div className="col-md-10 col-sm-9">{children}</div>
}

export default Summary

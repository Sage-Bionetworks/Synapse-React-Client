import * as React from 'react'
import Programs, { ProgramsProps } from 'lib/containers/home_page/programs/Programs'

export default (props: ProgramsProps) => {
  return (
    <div className="container">
      <Programs {...props} />
    </div>
  )
}

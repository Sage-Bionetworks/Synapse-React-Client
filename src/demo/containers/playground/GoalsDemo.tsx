import * as React from 'react'
import Goals, { GoalsProps } from 'lib/containers/Goals'

export default (props: GoalsProps) => {
  return (
    <div className="container">
      <Goals {...props} />
    </div>
  )
}

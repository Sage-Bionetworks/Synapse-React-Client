import * as React from 'react'
import AccessRequirementList from 'lib/containers/access_requirement_list/AccessRequirementList'

type Props = {
  token: string
}

export const AccessRequirementDemo: React.FunctionComponent<Props> = props => {
  const { token } = props
  return (
    <AccessRequirementList
      onHide={() => {
        window.location.href = 'http://localhost:3000/Playground'
      }}
      entityId={'syn3191087'}
      token={token}
    />
  )
}
// syn2426398
// syn3850484
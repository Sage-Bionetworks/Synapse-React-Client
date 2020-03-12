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
      entityId={'syn12634840'}
      token={token}
    />
  )
}
//syn12634840
// syn2426398
// syn3191087
// syn3850484

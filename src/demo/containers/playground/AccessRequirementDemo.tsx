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
<<<<<<< HEAD
      entityId={'syn12634840'}
=======
      entityId={'syn3850484'}
>>>>>>> b7b22c1d2a41a077fc2571533f5c3231684f00b9
      token={token}
    />
  )
}
//syn12634840
// syn2426398
// syn3191087
// syn3850484

import * as React from 'react'
import AccessRequirementList from 'lib/containers/access_requirement_list/AccessRequirementList'

type Props = {
  token: string
}

export const AccessRequirementDemo: React.FunctionComponent<Props> = props => {
  const { token } = props
  return <AccessRequirementList entityId={'syn2426151'} token={token} />
}

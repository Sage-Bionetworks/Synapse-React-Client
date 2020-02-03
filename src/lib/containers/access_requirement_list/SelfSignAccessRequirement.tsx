import * as React from 'react'
import { AccessRequirement } from 'lib/utils/synapseTypes/AccessRequirement/AccessRequirement'

export type SelfSignAccessRequirement = {
  accessRequirement: AccessRequirement
}

export default function SelfSignAccessRequirement({
  accessRequirement,
}: SelfSignAccessRequirement) {
  return <div></div>
}

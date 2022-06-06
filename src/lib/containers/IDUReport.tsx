import React, { useState, useEffect } from 'react'
import { SynapseConstants } from '../utils'
import { useSynapseContext } from '../utils/SynapseContext'

export type IDUReportProps = {
  accessRestrictionId: string
}

export const IDUReport: React.FunctionComponent<IDUReportProps> = (
  props: IDUReportProps,
) => {
  const { accessRestrictionId } = props
  const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  // }, [accessRestrictionId, accessToken])

  return isLoading ? <></> : <></>
}
export default IDUReport

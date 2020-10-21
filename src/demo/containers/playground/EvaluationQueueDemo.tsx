import * as React from 'react'
import { EvaluationRoundEditorList } from '../../../lib/containers/evaluation_queues/EvaluationRoundEditorList'

export type EvaluationQueueDemoProps = {
  token: string
}

export const EvaluationQueueDemo: React.FunctionComponent<EvaluationQueueDemoProps> = ({
  token,
}) => {
  return (
    <EvaluationRoundEditorList
      sessionToken={token}
      evaluationId={'9614644'}
      utc={false}
    />
  )
}

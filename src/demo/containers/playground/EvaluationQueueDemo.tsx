import * as React from 'react'
import { EvaluationRoundEditorList } from '../../../lib/containers/evaluation_queues/EvaluationRoundEditorList'

export type EvaluationQueueDemoProps = {
  token: string
}

export const EvaluationQueueDemo: React.FunctionComponent<EvaluationQueueDemoProps> = ({
  token,
}) => {
  return (
    <div style={{ maxWidth: '1000px', padding: '30px' }}>
      <EvaluationRoundEditorList
        sessionToken={token}
        evaluationId={'9614644'}
        utc={false}
      />
    </div>
  )
}

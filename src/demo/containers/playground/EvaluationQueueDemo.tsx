import * as React from 'react'
import { EvaluationRoundEditorList } from '../../../lib/containers/evaluation_queues/EvaluationRoundEditorList'
import { useState } from 'react'

export type EvaluationQueueDemoProps = {
  token: string
}

export const EvaluationQueueDemo: React.FunctionComponent<EvaluationQueueDemoProps> = ({
  token,
}) => {
  const [evaluationId, setEvaluationId] = useState<string>('')
  return (
    <div style={{ maxWidth: '1000px', padding: '30px' }}>
      <label>demo evaluationId: </label>{' '}
      <input
        value={evaluationId}
        onChange={event => setEvaluationId(event.target.value)}
      />
      <br />
      <br />
      <EvaluationRoundEditorList
        sessionToken={token}
        evaluationId={evaluationId}
        utc={false}
      />
    </div>
  )
}

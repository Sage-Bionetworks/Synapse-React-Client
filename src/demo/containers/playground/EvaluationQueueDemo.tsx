import { EvaluationRound } from 'lib/utils/synapseTypes'
import * as React from 'react'
import { EvaluationRoundEditor } from '../../../lib/containers/evaluation_queues/EvaluationRoundEditor'

export const EvaluationQueueDemo: React.FunctionComponent = () => {
  const evaluationRound: EvaluationRound = {
    roundStart: '2020-10-03T01:48:28Z',
    roundEnd: '2020-10-03T01:48:28Z',
    evaluationId: '123123',
  }
  return (
    <EvaluationRoundEditor
      evaluationRound={evaluationRound}
      utc={false}
      onSave={savedEvaluationRound =>
        console.log(JSON.stringify(savedEvaluationRound))
      }
    />
  )
}

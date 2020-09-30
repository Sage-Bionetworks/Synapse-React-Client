import { EvaluationRound } from 'lib/utils/synapseTypes'
import * as React from 'react'
import { EvaluationRoundEditor } from '../../../lib/containers/evaluation_queues/EvaluationRoundEditor'
import { Range } from '../../../lib/containers/widgets/Range'

export const EvaluationQueueDemo: React.FunctionComponent = () => {
  const evaluationRound: EvaluationRound = {
    roundStart: '69',
    roundEnd: '1234',
    evaluationId: '123123',
  }
  return (
    <div>
      <EvaluationRoundEditor evaluationRound={evaluationRound} />
      <Range
        type="date"
        onChange={(data: any) => {
          console.log(data)
        }}
      ></Range>
    </div>
  )
}

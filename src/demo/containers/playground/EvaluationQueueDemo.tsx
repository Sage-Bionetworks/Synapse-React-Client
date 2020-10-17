import * as React from 'react'
import { EvaluationRoundEditorList } from '../../../lib/containers/evaluation_queues/EvaluationRoundEditorList'

export const EvaluationQueueDemo: React.FunctionComponent = () => {
  // const evaluationRound: EvaluationRound = {
  //   roundStart: '2020-10-03T01:48:28Z',
  //   roundEnd: '2020-10-03T01:48:28Z',
  //   evaluationId: '123123',
  // }
  return <EvaluationRoundEditorList evaluationId={'123'} utc={false} />
}

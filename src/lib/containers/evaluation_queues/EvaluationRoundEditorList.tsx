import { EvaluationRound } from '../../utils/synapseTypes/Evaluation'
import React, { useState } from 'react'
import { useListState } from '../../utils/hooks/useListState'
import { EvaluationRoundEditor } from './EvaluationRoundEditor'

export type EvaluationRoundEditorListProps = {
  evaluationId: string
  //If true, dates for start/end are displayed in UTC instead of local time
  utc: boolean
}

const fetchEvaluationList = (evaluationId: string): EvaluationRound[] => {
  //TODO: fill out
  return []
}
export const EvaluationRoundEditorList: React.FunctionComponent<EvaluationRoundEditorListProps> = ({
  evaluationId,
  utc,
}) => {
  const {
    list: evaluationList,
    handleListPush: handleEvaluationListPush,
    handleListChange: handleEvaluationListChange,
    handleListRemove: handleEvaluationListRemove,
  } = useListState<EvaluationRound>(fetchEvaluationList(evaluationId))

  return (
    <div className="EvaluationRoundEditorList">
      {evaluationList.map((evaluationRound, index) => {
        return (
          <EvaluationRoundEditor
            evaluationRound={evaluationRound}
            onSave={handle}
            utc={}
          />
        )
      })}
      <button>Add Round</button>
    </div>
  )
}

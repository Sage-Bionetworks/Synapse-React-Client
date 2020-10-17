import { EvaluationRound } from '../../utils/synapseTypes/Evaluation'
import React from 'react'
import { useListState } from '../../utils/hooks/useListState'
import { EvaluationRoundEditor } from './EvaluationRoundEditor'
import { Button } from 'react-bootstrap'
import moment from 'moment'
import shortid from 'shortid'

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
    appendToList: appendToEvaluationList,
    handleListChange: handleEvaluationListChange,
    handleListRemove: handleEvaluationListRemove,
  } = useListState<EvaluationRound>(fetchEvaluationList(evaluationId))

  return (
    <div className="EvaluationRoundEditorList">
      <div>
        {evaluationList.map((evaluationRound, index) => {
          return (
            <EvaluationRoundEditor
              key={evaluationRound.id}
              evaluationRound={evaluationRound}
              onSave={handleEvaluationListChange(index)}
              onDelete={handleEvaluationListRemove(index)}
              utc={utc}
            />
          )
        })}
      </div>
      <div>
        <Button
          variant="primary"
          onClick={() => {
            console.log('click')
            appendToEvaluationList({
              id: shortid.generate(),
              evaluationId: evaluationId,
              //TODO: use a EvaluationRoundInput type that allows empty roundStart/end
              roundStart: moment().toJSON(),
              roundEnd: moment().toJSON(),
            })
          }}
        >
          Add Round
        </Button>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useListState } from '../../utils/hooks/useListState'
import { EvaluationRoundEditor } from './EvaluationRoundEditor'
import { Button } from 'react-bootstrap'
import {
  convertEvaluationRoundToInput,
  EvaluationRoundInput,
} from './input_models/models'
import { getEvaluationRoundsList } from '../../utils/SynapseClient'
import shortid from 'shortid'
import { EvaluationRoundListResponse } from '../../utils/synapseTypes/Evaluation/EvaluationRoundListResponse'

export type EvaluationRoundEditorListProps = {
  //session token to make authenticated calls
  sessionToken: string
  evaluationId: string
  //If true, dates for start/end are displayed in UTC instead of local time
  utc: boolean
}

const fetchEvaluationList = (
  evaluationId: string,
  sessionToken: string,
  appendToListCallback: (...items: EvaluationRoundInput[]) => void,
): void => {
  let nextPageToken: string | undefined = undefined
  do {
    getEvaluationRoundsList(
      evaluationId,
      { nextPageToken: nextPageToken },
      sessionToken,
      // eslint-disable-next-line no-loop-func
    )
      .then((response: EvaluationRoundListResponse) => {
        nextPageToken = response.nextPageToken
        const convertedToInput: EvaluationRoundInput[] = response.page.map(
          evaluationRound => convertEvaluationRoundToInput(evaluationRound),
        )
        appendToListCallback(...convertedToInput)
      })
      //TODO: error handling
      .catch(error => {
        alert(error.reason)
      })
  } while (nextPageToken)
}
export const EvaluationRoundEditorList: React.FunctionComponent<EvaluationRoundEditorListProps> = ({
  sessionToken,
  evaluationId,
  utc,
}) => {
  const {
    list: evaluationRoundInputList,
    appendToList: appendToEvaluationRoundInputList,
    handleListChange: handleEvaluationRoundInputListChange,
    handleListRemove: handleEvaluationRoundInputListRemove,
  } = useListState<EvaluationRoundInput>([])

  //run only once
  useEffect(
    () =>
      fetchEvaluationList(
        evaluationId,
        sessionToken,
        appendToEvaluationRoundInputList,
      ),
    [],
  )

  return (
    <div className="EvaluationRoundEditorList">
      <div>
        {evaluationRoundInputList.map((evaluationRoundInput, index) => {
          return (
            <EvaluationRoundEditor
              sessionToken={sessionToken}
              key={evaluationRoundInput.reactListKey}
              evaluationRoundInput={evaluationRoundInput}
              onSave={handleEvaluationRoundInputListChange(index)}
              onDelete={handleEvaluationRoundInputListRemove(index)}
              utc={utc}
            />
          )
        })}
      </div>

      <div>
        <Button
          variant="primary"
          onClick={() => {
            appendToEvaluationRoundInputList({
              reactListKey: shortid(),
              evaluationId: evaluationId,
              roundStart: '',
              roundEnd: '',
              totalSubmissionLimit: '',
              otherLimits: [],
            })
          }}
        >
          Add Round
        </Button>
      </div>
    </div>
  )
}

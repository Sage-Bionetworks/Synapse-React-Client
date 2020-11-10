import React, { useEffect, useState } from 'react'
import { useListState } from '../../utils/hooks/useListState'
import { EvaluationRoundEditor } from './EvaluationRoundEditor'
import { Button } from 'react-bootstrap'
import {
  convertEvaluationRoundToInput,
  EvaluationRoundInput,
} from './input_models/models'
import {
  getEvaluationRoundsList,
  SynapseClientError,
} from '../../utils/SynapseClient'
import { shortid } from 'shortid'
import { EvaluationRoundListResponse } from '../../utils/synapseTypes/Evaluation/EvaluationRoundListResponse'
import { Error } from '../Error'

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
  errorHandleCallback: (error: string | SynapseClientError | undefined) => void,
): void => {
  let nextPageToken: string | undefined = undefined
  do {
    getEvaluationRoundsList(
      evaluationId,
      { nextPageToken: nextPageToken },
      sessionToken,
    )
      // eslint-disable-next-line no-loop-func
      .then((response: EvaluationRoundListResponse) => {
        nextPageToken = response.nextPageToken
        const convertedToInput: EvaluationRoundInput[] = response.page.map(
          evaluationRound => convertEvaluationRoundToInput(evaluationRound),
        )
        appendToListCallback(...convertedToInput)
        errorHandleCallback(undefined)
      })
      .catch(error => {
        errorHandleCallback(error)
      })
  } while (nextPageToken)
}

export const EvaluationRoundEditorList: React.FunctionComponent<EvaluationRoundEditorListProps> = ({
  sessionToken,
  evaluationId,
  utc,
}) => {
  const [error, setError] = useState<string | SynapseClientError | undefined>()

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
        setError,
      ),
    [sessionToken, evaluationId],
  )

  if (error) {
    return <Error error={error} token={sessionToken} />
  }
  console.log('render ' + Date.now())
  return (
    <div className="evaluation-round-editor-list bootstrap-4-backport">
      <div className="evaluation-rounds">
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
          className="add-round-button SRC-primary-background-color border-0"
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

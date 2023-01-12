import React, { useEffect, useState } from 'react'
import { useListState } from '../../utils/hooks/useListState'
import { EvaluationRoundEditor } from './EvaluationRoundEditor'
import { Button } from 'react-bootstrap'
import {
  convertEvaluationRoundToInput,
  EvaluationRoundInput,
} from './input_models/models'
import { getEvaluationRoundsList } from '../../utils/SynapseClient'
import { SynapseClientError } from '../../utils/SynapseClientError'
import shortid from 'shortid'
import { EvaluationRoundListResponse } from '../../utils/synapseTypes/Evaluation/EvaluationRoundListResponse'
import { ErrorBanner } from '../error/ErrorBanner'
import { useSynapseContext } from '../../utils/SynapseContext'

export type EvaluationRoundEditorListProps = {
  /** id of the Evaluation containing EvaluationRounds to edit*/
  evaluationId: string
}

const fetchEvaluationList = (
  evaluationId: string,
  accessToken: string,
  setListCallback: (items: EvaluationRoundInput[]) => void,
  errorHandleCallback: (error: string | SynapseClientError | undefined) => void,
): void => {
  const allEvaluationRoundInputList: EvaluationRoundInput[] = []

  const getEvaluationRounds = (nextPageToken?: string) => {
    getEvaluationRoundsList(
      evaluationId,
      { nextPageToken: nextPageToken },
      accessToken,
    )
      .then((response: EvaluationRoundListResponse) => {
        const convertedToInput: EvaluationRoundInput[] = response.page.map(
          evaluationRound => convertEvaluationRoundToInput(evaluationRound),
        )

        allEvaluationRoundInputList.push(...convertedToInput)
        errorHandleCallback(undefined)

        if (response.nextPageToken) {
          getEvaluationRounds(response.nextPageToken)
        } else {
          // no more pages left. we can set the list
          setListCallback(allEvaluationRoundInputList)
        }
      })
      .catch(error => {
        errorHandleCallback(error)
      })
  }

  //initially no next page token
  getEvaluationRounds(undefined)
}

/**
 * Edits EvaluationsRounds for an Evaluation.
 */
export const EvaluationRoundEditorList: React.FunctionComponent<
  EvaluationRoundEditorListProps
> = ({ evaluationId }: EvaluationRoundEditorListProps) => {
  const { accessToken } = useSynapseContext()
  const [error, setError] = useState<string | SynapseClientError | undefined>()

  const {
    list: evaluationRoundInputList,
    appendToList: appendToEvaluationRoundInputList,
    handleListChange: handleEvaluationRoundInputListChange,
    handleListRemove: handleEvaluationRoundInputListRemove,
    setList: setEvaluationRoundInputList,
  } = useListState<EvaluationRoundInput>([])

  //run only once
  useEffect(
    () => {
      fetchEvaluationList(
        evaluationId,
        accessToken!,
        setEvaluationRoundInputList,
        setError,
      )
    },
    // we explicitly dont want to list setEvaluationRoundInputList nor setError as a dependency
    // if we do, the fetchEvaluationList will re-fetch from the backend on every new render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [accessToken, evaluationId],
  )

  if (error) {
    return <ErrorBanner error={error} />
  }

  return (
    <div className="evaluation-round-editor-list bootstrap-4-backport">
      <div className="evaluation-rounds">
        {evaluationRoundInputList.map((evaluationRoundInput, index) => {
          return (
            <EvaluationRoundEditor
              key={evaluationRoundInput.reactListKey}
              evaluationRoundInput={evaluationRoundInput}
              onSave={handleEvaluationRoundInputListChange(index)}
              onDelete={handleEvaluationRoundInputListRemove(index)}
            />
          )
        })}
      </div>

      <div>
        <Button
          className="add-round-button"
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

import { EvaluationRound } from '../../utils/synapseTypes/Evaluation'
import React from 'react'
import { useListState } from '../../utils/hooks/useListState'
import { EvaluationRoundEditor } from './EvaluationRoundEditor'
import { Button } from 'react-bootstrap'
import { convertEvaluationRoundToInput } from './input_models/models'
import { getEvaluationRoundsList } from '../../utils/SynapseClient'

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
): EvaluationRound[] => {
  const list: EvaluationRound[] = []
  let nextPageToken: string | undefined = undefined
  do {
    getEvaluationRoundsList(
      evaluationId,
      { nextPageToken: nextPageToken },
      sessionToken,
      // eslint-disable-next-line no-loop-func
    )
      .then(response => {
        nextPageToken = response.nextPageToken
        list.push(...response.page)
      })
      .catch(error => alert(error))
    //TODO: error handling
  } while (nextPageToken)

  return list
}
export const EvaluationRoundEditorList: React.FunctionComponent<EvaluationRoundEditorListProps> = ({
  sessionToken,
  evaluationId,
  utc,
}) => {
  const {
    list: evaluationList,
    appendToList: appendToEvaluationList,
    handleListChange: handleEvaluationListChange,
    handleListRemove: handleEvaluationListRemove,
  } = useListState<EvaluationRound>(
    fetchEvaluationList(evaluationId, sessionToken),
  )

  return (
    <div className="EvaluationRoundEditorList">
      <div>
        {/*TODO: convertEvaluationRoundToInput() before doing the mapping so we can use the key*/}
        {evaluationList.map((evaluationRound, index) => {
          return (
            <EvaluationRoundEditor
              sessionToken={sessionToken}
              key={evaluationRound.id}
              evaluationRoundInput={convertEvaluationRoundToInput(
                evaluationRound,
              )}
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
            appendToEvaluationList({
              evaluationId: evaluationId,
              roundStart: '',
              roundEnd: '',
            })
          }}
        >
          Add Round
        </Button>
      </div>
    </div>
  )
}

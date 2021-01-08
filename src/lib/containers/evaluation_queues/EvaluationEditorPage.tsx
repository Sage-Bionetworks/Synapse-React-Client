import React, { useState } from 'react'
import { EvaluationEditor } from './EvaluationEditor'
import { Alert } from 'react-bootstrap'
import { EvaluationRoundEditorList } from './EvaluationRoundEditorList'

export type EvaluationEditorPageProps = {
  /** session token to make authenticated API calls */
  readonly sessionToken: string
  /** Use if UPDATING an existing Evaluation. Id of the evaluation to edit */
  readonly evaluationId?: string
  /** Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation */
  readonly entityId?: string
  /** If true, the "Created on" date will be displayed in UTC time */
  readonly utc: boolean
  /** Callback after successful deletion of the Evaluation */
  readonly onDeleteSuccess: () => void
}

/**
 * Combined editor that allows editing an Evaluation's data and also it's associated rounds (once the Evaluation exists on Synapse)
 */
export const EvaluationEditorPage: React.FunctionComponent<EvaluationEditorPageProps> = ({
  sessionToken,
  evaluationId,
  entityId,
  utc,
  onDeleteSuccess,
}: EvaluationEditorPageProps) => {
  const [savedEvaluationId, setSavedEvaluationId] = useState<
    string | undefined
  >(evaluationId)
  return (
    <div className="bootstrap-4-backport">
      <EvaluationEditor
        sessionToken={sessionToken}
        evaluationId={savedEvaluationId}
        //do not use entityId if we already have the evaluation Id
        entityId={savedEvaluationId ? undefined : entityId}
        utc={utc}
        onDeleteSuccess={onDeleteSuccess}
        onSaveSuccess={setSavedEvaluationId}
      />

      <div className="mt-4">
        {savedEvaluationId ? (
          <EvaluationRoundEditorList
            sessionToken={sessionToken}
            evaluationId={savedEvaluationId}
            utc={utc}
          />
        ) : (
          <Alert
            dismissible={false}
            show={true}
            variant={'info'}
            transition={false}
          >
            Evaluation Rounds can be edited once the Evaluation has been
            created.
          </Alert>
        )}
      </div>
    </div>
  )
}

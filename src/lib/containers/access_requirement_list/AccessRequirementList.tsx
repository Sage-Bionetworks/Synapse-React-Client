import React, { useState, useEffect } from 'react'
import { AccessRequirement } from '../../utils/synapseTypes/AccessRequirement/AccessRequirement'
import { getAllAccessRequirements } from '../../utils/SynapseClient'
import { SynapseConstants, SynapseClient } from '../../utils/'
import useCompare from '../../utils/hooks/useCompare'
import * as ReactBootstrap from 'react-bootstrap'
import SelfSignAccessRequirementComponent from './SelfSignAccessRequirement'
import TermsOfUseAccessRequirementComponent from './TermsOfUseAccessRequirement'
import ManagedACTAccessRequirementComponent from './ManagedACTAccessRequirement'
import ACTAccessRequirementComponent from './ACTAccessRequirement'
import {
  UserProfile,
  EntityHeader,
  ACTAccessRequirement,
  ManagedACTAccessRequirement,
  TermsOfUseAccessRequirement,
  SelfSignAccessRequirement,
  AccessRequirementStatus,
} from '../../utils/synapseTypes'
import useGetInfoFromIds, {
  UseGetInfoFromIdsProps,
} from '../../utils/hooks/useGetInfoFromIds'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { sortBy } from 'lodash-es'
import { SUPPORTED_ACCESS_REQUIREMENTS } from './SupportedAccessRequirements'

library.add(faFile)

type AccessRequirementAndStatus = {
  accessRequirement: AccessRequirement
  accessRequirementStatus: AccessRequirementStatus
}

export type AccessRequirementListProps = {
  entityId: string
  token?: string
  accessRequirementFromProps?: Array<AccessRequirement>
  onHide?: Function
  renderAsModal?: boolean
}


export const checkHasUnsportedRequirement = (
  accessRequirements: Array<AccessRequirement>,
): boolean => {
  return accessRequirements.filter(isARUnsupported).length > 0
}

const isARUnsupported = (accessRequirement: AccessRequirement) => {
  switch (accessRequirement.concreteType) {
    case SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement:
    case SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement:
    case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
    case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement:
      return false
    default:
      return true
  }
}

export default function AccessRequirementList({
  entityId,
  token,
  onHide,
  accessRequirementFromProps,
  renderAsModal,
}: AccessRequirementListProps) {
  const [accessRequirements, setAccessRequirements] = useState<
    Array<AccessRequirementAndStatus> | undefined
  >(undefined)

  const [user, setUser] = useState<UserProfile>()

  const entityHeaderProps: UseGetInfoFromIdsProps = {
    ids: [entityId],
    token: token,
    type: 'ENTITY_HEADER',
  }

  const hasTokenChanged = useCompare(token)
  const shouldUpdateData = hasTokenChanged || !accessRequirements

  const entityInformation = useGetInfoFromIds<EntityHeader>(entityHeaderProps)

  useEffect(() => {
    const sortAccessRequirementByCompletion = async (
      requirements: Array<AccessRequirement>,
    ): Promise<Array<AccessRequirementAndStatus>> => {
      const statuses = requirements.map(req => {
        return SynapseClient.getAccessRequirementStatus(token, req.id)
      })
      const accessRequirementStatuses = await Promise.all(statuses)

      const requirementsAndStatuses = requirements.map(req => {
        return {
          accessRequirement: req,
          accessRequirementStatus: accessRequirementStatuses.find(
            el => Number(el.accessRequirementId) === req.id,
          )!,
        }
      })

      const sortedRequirementsAndStatuses = sortBy(
        requirementsAndStatuses,
        reqAndStatus => {
          // if its true then it should come first, which means that it should be higher in the list
          // which is sorted ascendingly
          return -1 * Number(reqAndStatus.accessRequirementStatus.isApproved)
        },
      )

      return sortedRequirementsAndStatuses
    }

    const getAccessRequirements = async () => {
      try {
        if (!shouldUpdateData) {
          return
        }
        if (!accessRequirementFromProps) {
          const requirements = await getAllAccessRequirements(token, entityId)
          const sortedAccessRequirements = await sortAccessRequirementByCompletion(
            requirements,
          )
          setAccessRequirements(sortedAccessRequirements)
        } else {
          const sortedAccessRequirements = await sortAccessRequirementByCompletion(
            accessRequirementFromProps!,
          )
          setAccessRequirements(sortedAccessRequirements)
        }

        const userProfile = await SynapseClient.getUserProfile(token)
        setUser(userProfile)

        // we use a functional update below https://reactjs.org/docs/hooks-reference.html#functional-updates
        // because we want react hooks to update without a dependency on accessRequirements
      } catch (err) {
        console.error('Error on get access requirements: ', err)
      }
    }

    getAccessRequirements()
  }, [token, entityId, accessRequirementFromProps, shouldUpdateData])

  // Using Boolean(value) converts undefined,null, 0,'',false -> false
  // one alternative to using Boolean(value) is the double bang operator !!value,
  // but doesn't ready well
  const isSignedIn: boolean = Boolean(token)

  /**
   * Returns rendering for the access requirement.
   *
   * Only supports SelfSignAccessRequirement and TermsOfUseAccessRequirement
   *
   * @param {AccessRequirement} accessRequirement accessRequirement being rendered
   */
  const renderAccessRequirement = (
    accessRequirement: AccessRequirement,
    accessRequirementStatus: AccessRequirementStatus,
  ) => {
    switch (accessRequirement.concreteType) {
      case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement:
        return (
          <SelfSignAccessRequirementComponent
            accessRequirement={accessRequirement as SelfSignAccessRequirement}
            accessRequirementStatus={accessRequirementStatus}
            token={token}
            user={user}
            onHide={onHide}
            entityId={entityId}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
        return (
          <TermsOfUseAccessRequirementComponent
            accessRequirement={accessRequirement as TermsOfUseAccessRequirement}
            accessRequirementStatus={accessRequirementStatus}
            token={token}
            user={user}
            onHide={onHide}
            entityId={entityId}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement:
        return (
          <ManagedACTAccessRequirementComponent
            accessRequirement={accessRequirement as ManagedACTAccessRequirement}
            accessRequirementStatus={accessRequirementStatus}
            token={token}
            user={user}
            onHide={onHide}
            entityId={entityId}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement:
        return (
          <ACTAccessRequirementComponent
            accessRequirement={accessRequirement as ACTAccessRequirement}
            accessRequirementStatus={accessRequirementStatus}
            token={token}
            user={user}
            onHide={onHide}
            entityId={entityId}
          />
        )
      // case not supported yet
      default:
        return undefined
    }
  }
  const content = (
    <>
      <ReactBootstrap.Modal.Header closeButton={true}>
        <ReactBootstrap.Modal.Title className="AccessRequirementList__title">
          Data Access Request
        </ReactBootstrap.Modal.Title>
      </ReactBootstrap.Modal.Header>
      <ReactBootstrap.Modal.Body>
        <div>
          <h4 className="AccessRequirementList__instruction AccessRequirementList__access">
            Access For:
          </h4>
          <a
            className="AccessRequirementList__register-text-link"
            href={`https://www.synapse.org/#!Synapse:${entityId}`}
          >
            <FontAwesomeIcon
              size="lg"
              icon="file"
              className="AccessRequirementList__file"
            />
            &nbsp;{entityInformation[0]?.name}
          </a>
          <h4 className="AccessRequirementList__instruction">
            What do I need to do?
          </h4>
          <div className="requirement-container">
            <AccessApprovalCheckMark isCompleted={isSignedIn} />
            <div>
              {!isSignedIn && (
                <>
                  <p className="AccessRequirementList__signin">
                    <button
                      className={`${SynapseConstants.SRC_SIGN_IN_CLASS} SRC-primary-text-color SRC-boldText `}
                    >
                      Sign in
                    </button>
                    with a Sage Platform (Synapse) user account.
                  </p>
                  <p>
                    If you do not have a Sage Account, you can
                    <a
                      className="register-text-link bold-text"
                      href="https://www.synapse.org/#!RegisterAccount:0"
                    >
                      &nbsp;Register for free.
                    </a>
                  </p>
                </>
              )}
              {isSignedIn && (
                <p>
                  You have signed with Sage Platform (Synapse) user account as{' '}
                  <b className="SRC-primary-text-color">
                    {user?.userName}@synapse.org
                  </b>
                </p>
              )}
            </div>
          </div>
          {accessRequirements?.map(
            ({ accessRequirement, accessRequirementStatus }) => {
              return (
                <React.Fragment key={accessRequirement.id}>
                  {renderAccessRequirement(
                    accessRequirement,
                    accessRequirementStatus,
                  )}
                </React.Fragment>
              )
            },
          )}
        </div>
      </ReactBootstrap.Modal.Body>
    </>
  )

  if (renderAsModal) {
    return (
      <ReactBootstrap.Modal
        className="AccessRequirementList"
        onHide={() => onHide?.()}
        show={true}
        animation={false}
        centered={true}
        scrollable={true}
        size="lg"
      >
        {content}
      </ReactBootstrap.Modal>
    )
  }
  return <div className="AccessRequirementList">{content}</div>
}

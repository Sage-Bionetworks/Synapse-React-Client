import React, { useState, useEffect } from 'react'
import { AccessRequirement } from '../../utils/synapseTypes/AccessRequirement/AccessRequirement'
import { getAllAccessRequirements } from '../../utils/SynapseClient'
import { SynapseConstants, SynapseClient } from '../../utils/'
import * as ReactBootstrap from 'react-bootstrap'
import SelfSignAccessRequirementComponent from './SelfSignAccessRequirement'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import TermsOfUseAccessRequirementComponent from './TermsOfUseAccessRequirement'
import ManagedACTAccessRequirementComponent from './ManagedACTAccessRequirement'
import ACTAccessRequirementComponent from './ACTAccessRequirement'
import { UserProfile, EntityHeader } from '../../utils/synapseTypes'
import useGetInfoFromIds, {
  UseGetInfoFromIdsProps,
} from '../../utils/hooks/useGetInfoFromIds'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'

library.add(faCircle)

export type AccessRequirementListProps = {
  entityId: string
  token: string | undefined
  accessRequirementFromProps?: Array<AccessRequirement>
  onHide?: Function
}

export enum SUPPORTED_ACCESS_REQUIREMENTS {
  SelfSignAccessRequirement = 'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
  TermsOfUseAccessRequirement = 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
  ManagedACTAccessRequirement = 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
  ACTAccessRequirement = 'org.sagebionetworks.repo.model.ACTAccessRequirement',
}

export const checkHasUnsportedRequirement = (
  accessRequirements: Array<AccessRequirement>,
): boolean => {
  for (let i = 0; i < accessRequirements.length; i++) {
    if (isARUnsupported(accessRequirements[i].concreteType)) {
      return true
    }
  }
  return false
}

const isARUnsupported = (accessRequirement: string) => {
  switch (accessRequirement) {
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
}: AccessRequirementListProps) {
  const [accessRequirements, setAccessRequirements] = useState<
    Array<AccessRequirement>
  >(accessRequirementFromProps ?? [])

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState<UserProfile>()

  const entityHeaderProps: UseGetInfoFromIdsProps = {
    ids: [entityId],
    token: token,
    type: 'ENTITY_HEADER',
  }

  const entityInformation = useGetInfoFromIds<EntityHeader>(entityHeaderProps)

  useEffect(() => {
    const sortAccessRequirementByCompletion = async (
      requirements: Array<AccessRequirement>,
    ): Promise<Array<AccessRequirement>> => {
      const statuses = requirements.map((req) => {
        return SynapseClient.getAccessRequirementStatus(token, req.id)
      })
      const accessRequirementStatuses = await Promise.all(statuses)

      const sortOrder = accessRequirementStatuses
        .sort((requirementA, requirementB) => {
          return (
            Number(requirementB.isApproved) - Number(requirementA.isApproved)
          )
        })
        .map((status) => {
          return parseInt(status.accessRequirementId)
        })

      requirements = requirements.sort((requirementA, requirementB) => {
        return (
          sortOrder.indexOf(requirementA.id) -
          sortOrder.indexOf(requirementB.id)
        )
      })

      return requirements
    }

    const getAccessRequirements = async () => {
      setIsLoading(true)

      try {
        if (!accessRequirementFromProps) {
          getAllAccessRequirements(token, entityId).then(
            async (requirements) => {
              const sortedAccessRequirements = await sortAccessRequirementByCompletion(
                requirements,
              )
              setAccessRequirements(sortedAccessRequirements)
            },
          )
        } else {
          const sortedAccessRequirements = await sortAccessRequirementByCompletion(
            accessRequirementFromProps!,
          )
          setAccessRequirements(sortedAccessRequirements)
        }

        const userProfile = await SynapseClient.getUserProfile(token)
        SynapseClient.getUserProfile(token).then((data) => {})

        setUser(userProfile)

        // we use a functional update below https://reactjs.org/docs/hooks-reference.html#functional-updates
        // because we want react hooks to update without a dependency on accessRequirements
      } catch (err) {
        console.error('Error on get access requirements: ', err)
      } finally {
        setIsLoading(false)
      }
    }
    getAccessRequirements()
  }, [token, entityId, accessRequirementFromProps])

  const isSignedIn: boolean = token !== undefined

  /**
   * Returns rendering for the access requirement.
   *
   * Only supports SelfSignAccessRequirement and TermsOfUseAccessRequirement
   *
   * @param {AccessRequirement} accessRequirement accessRequirement being rendered
   */
  const renderAccessRequirement = (accessRequirement: AccessRequirement) => {
    switch (accessRequirement.concreteType) {
      case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement:
        return (
          <SelfSignAccessRequirementComponent
            //@ts-ignore
            accessRequirement={accessRequirement}
            token={token}
            user={user}
            onHide={onHide}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
        return (
          <TermsOfUseAccessRequirementComponent
            //@ts-ignore
            accessRequirement={accessRequirement}
            token={token}
            user={user}
            onHide={onHide}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement:
        return (
          <ManagedACTAccessRequirementComponent
            //@ts-ignore
            accessRequirement={accessRequirement}
            token={token}
            user={user}
            onHide={onHide}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement:
        return (
          <ACTAccessRequirementComponent
            //@ts-ignore
            accessRequirement={accessRequirement}
            token={token}
            user={user}
            onHide={onHide}
          />
        )
      // case not supported yet
      default:
        return undefined
    }
  }

  const SignedIn = () => {
    if (token) {
      return (
        <p>
          You have signed in as <b>{` @${user?.userName}`}</b>
        </p>
      )
    } else {
      return (
        <p>
          If you do not have a Sage Account, you can
          <a
            className="register-text-link bold-text"
            href="https://www.synapse.org/#!RegisterAccount:0"
          >
            &nbsp;Register for free.
          </a>
        </p>
      )
    }
  }

  return (
    <ReactBootstrap.Modal
      onHide={() => onHide?.()}
      show={true}
      animation={false}
    >
      <ReactBootstrap.Modal.Header closeButton={true}>
        <ReactBootstrap.Modal.Title>
          Data Access Request
        </ReactBootstrap.Modal.Title>
      </ReactBootstrap.Modal.Header>
      <ReactBootstrap.Modal.Body>
        <h4 className="uppercase-text bold-text">Access For:</h4>
        <a
          className="register-text-link bold-text"
          href={`https://www.synapse.org/#!Synapse:${entityId}`}
        >
          &nbsp;{entityInformation[0]?.name}
        </a>
        <h4 className="data-access-requirement-title uppercase-text bold-text">
          What do I need to do?
        </h4>
        <div className="requirement-container">
          <AccessApprovalCheckMark isCompleted={isSignedIn} />
          <div>
            <p className="bold-text">
              <button
                className={`${
                  SynapseConstants.SRC_SIGN_IN_CLASS
                } sign-in-btn access-requirement ${
                  isSignedIn ? 'default' : 'blue'
                }`}
              >
                Sign in
              </button>
              with a Sage Platform (Synapse) user account.
            </p>
            <SignedIn />
          </div>
        </div>
        {isLoading && <span className="spinner" />}
        {accessRequirements.map((req) => {
          return renderAccessRequirement(req)
        })}
      </ReactBootstrap.Modal.Body>
    </ReactBootstrap.Modal>
  )
}

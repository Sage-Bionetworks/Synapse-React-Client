import React, { useState, useEffect } from 'react'
import { AccessRequirement } from '../../utils/synapseTypes/AccessRequirement/AccessRequirement'
import { getAllAccessRequirements } from '../../utils/SynapseClient'
import { SynapseConstants, SynapseClient } from '../../utils/'
import Modal from 'react-bootstrap/Modal'
import SelfSignAccessRequirementComponent from './SelfSignAccessRequirement'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import TermsOfUseAccessRequirementComponent from './TermsOfUseAccessRequirement'
import { UserProfile } from '../../utils/synapseTypes'
import useGetEntityHeaders, {
  UseGetEntityHeaderProps,
} from '../../utils/hooks/useGetEntityHeaders'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'

library.add(faCircle)

type Props = {
  entityId: string
  token: string | undefined
  onHide?: Function
}

export enum SUPPORTED_ACCESS_REQUIREMENTS {
  SelfSignAccessRequirement = 'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
  TermsOfUseAccessRequirement = 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
}

export default function AccessRequirementList({
  entityId,
  token,
  onHide,
}: Props) {
  const [accessRequirements, setAccessRequirements] = useState<
    Array<AccessRequirement>
  >([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState<UserProfile | undefined>(undefined)

  const entityHeaderProps: UseGetEntityHeaderProps = {
    references: [
      {
        targetId: entityId,
      },
    ],
    token: token,
  }

  const entityInformation = useGetEntityHeaders(entityHeaderProps)

  useEffect(() => {
    const getAccessRequirements = async () => {
      setIsLoading(true)
      try {
        const incomingAccessRequirements = await getAllAccessRequirements(
          token,
          entityId,
        )

        const userProfile = await SynapseClient.getUserProfile(token)
        setUser(userProfile)

        // we use a functional update below https://reactjs.org/docs/hooks-reference.html#functional-updates
        // because we want react hooks to update without a dependency on accessRequirements
        setAccessRequirements(prevAcessRequirements =>
          prevAcessRequirements.concat(incomingAccessRequirements),
        )
      } catch (err) {
        console.error('Error on get access requirements: ', err)
      } finally {
        setIsLoading(false)
      }
    }

    getAccessRequirements()
  }, [token, entityId])

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
      default:
        // case not supported yet, go to synapse
        return (
          <div className="case-not-supporeted-container">
            {/* <a 
              href={`https://www.synapse.org/#!AccessRequirements:ID=${entityId}&TYPE=ENTITY`}
            >
              See Requirements on synapse.org
            </a> */}
          </div>
        )
    }
  }

  const SignedIn = () => {
    if (token) {
      return (
        <p>
          You have signed in as <b>{` ${user?.userName}@synapse.org`}</b>
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
    <Modal onHide={() => onHide?.()} show={true} animation={false}>
      <Modal.Header closeButton={true}>
        <Modal.Title>Data Access Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="uppercase-text bold-text">You Requested Access For:</h4>
        <p> {entityInformation[0]?.name} </p>
        <h4 className="data-access-requirement-title uppercase-text bold-text">
          {' '}
          What do I need to do?{' '}
        </h4>
        <div className="requirement-container">
          <AccessApprovalCheckMark isCompleted={isSignedIn} />
          <div>
            <p className="bold-text">
              <button
                className={`${SynapseConstants.SRC_SIGN_IN_CLASS} sign-in-btn ${
                  isSignedIn ? 'default' : 'blue'
                }`}
              >
                Sign in
              </button>
              with a Sage Platform (synapse) user account.
            </p>
            <SignedIn />
          </div>
        </div>
        {isLoading && <span className="spinner" />}
        {accessRequirements.map(req => {
          return renderAccessRequirement(req)
        })}
      </Modal.Body>
    </Modal>
  )
}

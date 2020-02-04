import React, { useState, useEffect } from 'react'
import { AccessRequirement } from 'lib/utils/synapseTypes/AccessRequirement/AccessRequirement'
import { getAllAccessRequirements } from 'lib/utils/SynapseClient'
import { SynapseConstants } from 'lib/utils/'
import Modal from 'react-bootstrap/Modal'
import SelfSignAccessRequirement from './SelfSignAccessRequirement'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import TermsOfUseAccessRequirement from './TermsOfUseAccessRequirement'

library.add(faCircle)

type Props = {
  entityId: string
  token: string | undefined
  onHide?: Function
}

enum SUPPORTED_ACCESS_REQUIREMENTS {
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

  useEffect(() => {
    const getAccessRequirements = async () => {
      setIsLoading(true)
      try {
        const incomingAccessRequirements = await getAllAccessRequirements(
          token,
          entityId,
        )
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
          <SelfSignAccessRequirement accessRequirement={accessRequirement} />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
        return (
          <TermsOfUseAccessRequirement accessRequirement={accessRequirement} />
        )
      default:
        // case not supported yet, go to synapse
        return (
          <a
            href={`https://www.synapse.org/#!AccessRequirements:ID=${entityId}&TYPE=ENTITY`}
          >
            See Requirements on synapse.org
          </a>
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
        <p> TODO: Entity Name </p>
        <h4 className="uppercase-text bold-text"> What do I need to do? </h4>
        <div className="requirement-container">
          <div className="direction-label">1</div>
          <div>
            <p className="bold-text">
              <button
                className={`${SynapseConstants.SRC_SIGN_IN_CLASS} sign-in-btn`}
              >
                Sign in
              </button>
              with a Sage Platform (synapse) user account.
            </p>
            <p>
              If you do not have a Sage Account, you can
              <a href="https://www.synapse.org/#!RegisterAccount:0">
                &nbsp;Register for free.
              </a>
            </p>
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

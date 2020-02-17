import React, { useState, useEffect } from 'react'
import { AccessRequirement } from '../../utils/synapseTypes/AccessRequirement/AccessRequirement'
import { getAllAccessRequirements } from '../../utils/SynapseClient'
import { SynapseConstants, SynapseClient} from '../../utils/'
import Modal from 'react-bootstrap/Modal'
import SelfSignAccessRequirementComponent from './SelfSignAccessRequirement'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import TermsOfUseAccessRequirementComponent  from './TermsOfUseAccessRequirement'
import { UserProfile } from 'lib/utils/synapseTypes'
import useGetEntityHeaders, {UseGetEntityHeaderProps} from '../../utils/hooks/useGetEntityHeaders'


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
  const [accessRequirements, setAccessRequirements] = useState<Array<AccessRequirement>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState<UserProfile | undefined>(undefined)
  
  const entityHeaderProps:UseGetEntityHeaderProps = {
    references: [{
      targetId: entityId,
    }],
    token: token
  }
  
  const entityInformation = useGetEntityHeaders(entityHeaderProps)

  // console.log(entityInformation[0].name)

  useEffect(() => {
    const getAccessRequirements = async () => {
      // if (!token) {
      //   setAccessRequirements([])
      //   // this view only makes sense when the user is logged in
      //   return
      // }
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
          prevAcessRequirements.concat(incomingAccessRequirements)
        )

      } catch (err) {
        console.error('Error on get access requirements: ', err)
      } finally {
        setIsLoading(false)
      }
    }

    //*********************왜 이 함수를 호출 하고 나서 accessrequirment를 부를수 없는지 (왜 엠티인지) 만약 부를수 있다면 어떻게 부르는지
    getAccessRequirements()

  }, [token, entityId])

  const isSignedIn:boolean = token !== undefined
  // const isApproved:boolean = true

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
          <div>
              {isLoading && <span className="spinner" />}
                <SelfSignAccessRequirementComponent RequirementComponent
                  //@ts-ignore
                  accessRequirement={accessRequirement}
                  token={token}
                  user={user}
                  />    
          </div>
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
        return (
          <div>
            {isLoading && <span className="spinner" />}
            <TermsOfUseAccessRequirementComponent 
              //@ts-ignore
              accessRequirement={accessRequirement} 
              token={token}
              user={user} 
            />
          </div>
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
        <p>You have signed in as <b>{ ` ${user?.userName}@synapse.org` }</b>
        </p>
      );
    }else{
      return (
        <p>
          If you do not have a Sage Account, you can
          <a className="register-text-link bold-text" href="https://www.synapse.org/#!RegisterAccount:0">
            &nbsp;Register for free.
          </a>
        </p>
      );
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
        <h4 className="data-access-requirement-title uppercase-text bold-text"> What do I need to do? </h4>
        <div className="requirement-container"> 
          <div className={`check-mark-container ${isSignedIn ? 'green' : 'orange'}`} >
            {isSignedIn ? (          
          <div className={`check-mark ${isSignedIn ? 'signed-in' : 'unsigned'}`}/>
          ) : ( 
          <div className="lock-container">
            <span className="lock"/>
          </div>         
          )}
          </div>
          <div>
            <p className="bold-text">
              <button
                className={`${SynapseConstants.SRC_SIGN_IN_CLASS} sign-in-btn ${isSignedIn ? 'default' : 'blue'}`}
              >
                Sign in
              </button>
              with a Sage Platform (synapse) user account.
            </p>
            <SignedIn/>
          </div>
        </div>
        {isLoading && (<span className="spinner" />)}

        {accessRequirements.map(req => {
            return renderAccessRequirement(req)
          })}
        </Modal.Body>
    </Modal>
  )
}



import { SynapseClient } from '../utils'
import * as React from 'react'
import {
  RestrictionInformationResponse,
  RestrictionInformationRequest,
  RestrictableObjectType,
  RestrictionLevel,
} from '../utils/jsonResponses/RestrictionInformation'
import { getEndpoint, BackendDestinationEnum } from '../utils/getEndpoint'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUnlockAlt,
  faMinusCircle,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faUnlockAlt)
library.add(faMinusCircle)
library.add(faCircle)

export type HasAccessProps = {
  synapseId: string
  token?: string
}

type HasAccessState = {
  restrictionInformation?: RestrictionInformationResponse
}

/**
 * HasAccess shows if the user has access.  Additionally has a link to the AR list if user does not have access
 *
 * @export
 * @class HasAccess
 * @extends {React.Component<HasAccessProps, HasAccessState>}
 */
export default class HasAccess extends React.Component<
  HasAccessProps,
  HasAccessState
> {
  constructor(props: HasAccessProps) {
    super(props)
    this.state = {}
    this.getRestrictionInformation = this.getRestrictionInformation.bind(this)
  }

  componentDidMount() {
    this.getRestrictionInformation()
  }

  componentDidUpdate() {
    this.getRestrictionInformation()
  }

  getRestrictionInformation() {
    const { synapseId, token } = this.props
    if (this.state.restrictionInformation || !synapseId || !token) {
      return
    }
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: synapseId,
    }
    SynapseClient.getRestrictionInformation(request, token)
      .then(restrictionInformation => {
        this.setState({ restrictionInformation })
      })
      .catch(err => {
        console.error('Error on access requirements: ', err)
      })
  }

  render() {
    const { restrictionInformation } = this.state
    const { synapseId } = this.props
    const icon =
      restrictionInformation &&
      restrictionInformation.hasUnmetAccessRequirement ? (
        <span className="fa-layers fa-fw" style={{ marginRight: 5 }}>
          <FontAwesomeIcon
            icon={faCircle}
            className="SRC-warning-color"
            size="lg"
          />
          <FontAwesomeIcon
            icon={faMinusCircle}
            className="SRC-half-opacity"
            style={{ transform: 'translate(4%, -4%)' }}
            size="xs"
          />
        </span>
      ) : (
        <span className="fa-layers fa-fw" style={{ marginRight: 5 }}>
          <FontAwesomeIcon
            icon={faCircle}
            className="SRC-success-color"
            size="lg"
          />
          <FontAwesomeIcon
            icon={faUnlockAlt}
            className="SRC-half-opacity"
            style={{ transform: 'translate(4%, -4%)' }}
            size="xs"
          />
        </span>
      )

    let viewARsLink: React.ReactElement = <></>
    if (
      restrictionInformation &&
      RestrictionLevel.OPEN != restrictionInformation.restrictionLevel
    ) {
      const linkText: string = restrictionInformation.hasUnmetAccessRequirement
        ? 'Get Access'
        : 'View Access'
      viewARsLink = (
        <a
          style={{ fontSize: '14px', cursor: 'pointer', marginLeft: '1px' }}
          className="SRC-primary-text-color"
          href={`${getEndpoint(
            BackendDestinationEnum.PORTAL_ENDPOINT,
          )}/#!AccessRequirements:ID=${synapseId}&TYPE=ENTITY`}
        >
          {linkText}
        </a>
      )
    }
    return (
      <span style={{ whiteSpace: 'nowrap' }}>
        {icon} {viewARsLink}
      </span>
    )
  }
}

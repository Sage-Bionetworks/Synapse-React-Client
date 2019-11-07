import { SynapseClient } from '../utils'
import * as React from 'react'
import { RestrictionInformationResponse, RestrictionInformationRequest, RestrictableObjectType } from 'lib/utils/jsonResponses/RestrictionInformation'
import { getEndpoint, BackendDestinationEnum } from 'lib/utils/getEndpoint'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faCheckSquare)

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
    this.getRestrictionInfomation = this.getRestrictionInfomation.bind(this)
  }

  componentDidMount() {
    this.getRestrictionInfomation()
  }

  componentDidUpdate() {
    this.getRestrictionInfomation()
  }

  getRestrictionInfomation() {
    const { synapseId, token } = this.props
    if (this.state.restrictionInformation || !synapseId || !token) {
      return
    }
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: synapseId
    }
    SynapseClient.getRestrictionInformation(request, token).then(restrictionInformation => {
      this.setState({ restrictionInformation })
    })
  }

  render() {
    const {restrictionInformation} = this.state
    const {synapseId} = this.props
    
    // TODO: include a yellow alert icon with tooltip along with link
    const requestAccessLink = (
      <a
        style={{ fontSize: '14px', cursor: 'pointer', marginLeft: '1px' }}
        className="SRC-primary-text-color"
        href={`${getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)}/#!AccessRequirements:ID=${synapseId}&TYPE=ENTITY`}
      >
        Request Access
      </a>
    )
    const hasAccessIcon = <FontAwesomeIcon
      style={{ marginLeft: '5px' }}
      icon='check-square'
    />
    return restrictionInformation && restrictionInformation.hasUnmetAccessRequirement ? requestAccessLink : hasAccessIcon
  }
}

import { SynapseClient } from '../utils'
import * as React from 'react'
import {
  RestrictionInformationResponse,
  RestrictionInformationRequest,
  RestrictableObjectType,
  RestrictionLevel,
} from '../utils/jsonResponses/RestrictionInformation'
import {
  getEndpoint,
  BackendDestinationEnum,
} from '../utils/functions/getEndpoint'
import { library, IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faUnlockAlt,
  faMinusCircle,
  faCircle,
  faLink,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FileHandle } from '../utils/jsonResponses/FileHandle'
library.add(faUnlockAlt)
library.add(faMinusCircle)
library.add(faCircle)

export type HasAccessProps = {
  fileHandle?: FileHandle
  synapseId: string
  token?: string
  deniedAccess?: boolean
}

type HasAccessState = {
  restrictionInformation?: RestrictionInformationResponse
}

export enum ExternalFileHandleConcreteTypeEnum {
  ProxyFileHandle = 'org.sagebionetworks.repo.model.file.ProxyFileHandle',
  ExternalObjectStoreFileHandle = 'org.sagebionetworks.repo.model.file.ExternalObjectStoreFileHandle',
  ExternalFileHandle = 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
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

  getRestrictionInformation = () => {
    const { synapseId, token, deniedAccess = false } = this.props
    if (
      this.state.restrictionInformation ||
      !synapseId ||
      !token ||
      deniedAccess
    ) {
      return
    }
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: synapseId,
    }
    SynapseClient.getRestrictionInformation(request, token).then(
      restrictionInformation => {
        this.setState({ restrictionInformation })
      },
    )
  }

  formatIcon = (iconProp: IconProp, isWarning: boolean) => {
    const classColor = isWarning ? 'SRC-warning-color' : 'SRC-success-color'
    return (
      <>
        <FontAwesomeIcon icon={faCircle} className={classColor} size="lg" />
        <FontAwesomeIcon
          icon={iconProp}
          className="SRC-half-opacity"
          style={{ transform: 'translate(4%, -4%)' }}
          size="xs"
        />
      </>
    )
  }

  getIcon() {
    const { fileHandle } = this.props
    const { restrictionInformation } = this.state
    const isOpen = fileHandle || restrictionInformation &&
    RestrictionLevel.OPEN === restrictionInformation.restrictionLevel
    let icon = undefined
    if (isOpen) {
      const concreteType = fileHandle ? fileHandle.concreteType: ''
      // @ts-ignore
      const isExternalFileHandle = Object.values(ExternalFileHandleConcreteTypeEnum).includes(concreteType)
      icon = isExternalFileHandle
        ? this.formatIcon(faLink, false)
        : this.formatIcon(faUnlockAlt, false)
    } else {
      icon = this.formatIcon(faMinusCircle, true)
    }
    return (
      <span className="fa-layers fa-fw" style={{ marginRight: 5 }}>
        {icon}
      </span>
    )
  }

  render() {
    const { restrictionInformation } = this.state
    const hasUnmetAccessRequirement =  (restrictionInformation && restrictionInformation!.hasUnmetAccessRequirement) || ''
    const restrictionLevel =  (restrictionInformation && restrictionInformation!.restrictionLevel) || ''
    const { synapseId, deniedAccess } = this.props
    const icon = this.getIcon()
    let viewARsLink: React.ReactElement = <></>
    if (
      RestrictionLevel.OPEN !== restrictionLevel
    ) {
      const linkText: string = deniedAccess || hasUnmetAccessRequirement
        ? 'Get Access'
        : 'View Terms'
      viewARsLink = (
        <a
          style={{ fontSize: '14px', cursor: 'pointer', marginLeft: '1px' }}
          className="SRC-primary-text-color"
          href={`${getEndpoint(
            BackendDestinationEnum.PORTAL_ENDPOINT,
          )}#!AccessRequirements:ID=${synapseId}&TYPE=ENTITY`}
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

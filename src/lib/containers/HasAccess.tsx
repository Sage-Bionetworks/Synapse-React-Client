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
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FileHandle } from '../utils/jsonResponses/FileHandle'
import { TOOLTIP_DELAY_SHOW } from './table/SynapseTableConstants'
import ReactTooltip from 'react-tooltip'
library.add(faUnlockAlt)
library.add(faMinusCircle)
library.add(faDatabase)
library.add(faCircle)

export type HasAccessProps = {
  fileHandle?: FileHandle
  synapseId: string
  token?: string
  forceIsRestricted?: boolean
}

type HasAccessState = {
  restrictionInformation?: RestrictionInformationResponse
}

export enum ExternalFileHandleConcreteTypeEnum {
  ProxyFileHandle = 'org.sagebionetworks.repo.model.file.ProxyFileHandle',
  ExternalObjectStoreFileHandle = 'org.sagebionetworks.repo.model.file.ExternalObjectStoreFileHandle',
  ExternalFileHandle = 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
}

export enum GoogleCloudFileHandleEnum {
  GoogleCloudFileHandle = 'org.sagebionetworks.repo.model.file.GoogleCloudFileHandle',
}

export const GIGABYTE_SIZE = 2 ** 30

export enum DownloadTypeEnum {
  CloudFileHandle,
  ExternalFileHandle,
  TooLargeFile,
  NoAccess,
  IsOpenNoRestrictions,
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
  public static tooltipText = {
    [DownloadTypeEnum.NoAccess]:
      'Your list has restricted files that can’t be downloaded. You must request access to these restricted files via Access Conditions page. All files will remain in the list and can be downloaded from here once your access is granted.',
    [DownloadTypeEnum.TooLargeFile]:
      'Your list contains files that are too large to download as a package and must be downloaded manually. Click on the item to go to the manual download page.',
    [DownloadTypeEnum.ExternalFileHandle]:
      'Your list contains external links, which must be downloaded manually. Clicking on the item will take you to the download page.',
    [DownloadTypeEnum.CloudFileHandle]:
      'Your list contains files that must be downloaded manually (e.g. files in Google Cloud). Clicking on the item will take you to the download page.',
  }

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
    const { synapseId, token, forceIsRestricted = false } = this.props
    if (
      this.state.restrictionInformation ||
      !synapseId ||
      !token ||
      forceIsRestricted
    ) {
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
        console.log('Error on getRestrictionInformation: ', err)
      })
  }

  renderIconHelper = (iconProp: IconProp, classColor: string) => {
    return (
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faCircle} className={classColor} size="2x" />
        <FontAwesomeIcon
          icon={iconProp}
          className="SRC-whiteText"
          size="1x"
          transform={{ x: 6 }}
        />
      </span>
    )
  }

  renderIcon = (downloadType: DownloadTypeEnum) => {
    switch (downloadType) {
      case DownloadTypeEnum.NoAccess:
        return this.renderIconHelper(faMinusCircle, 'SRC-warning-color')
      case DownloadTypeEnum.ExternalFileHandle:
        return this.renderIconHelper(faLink, 'SRC-warning-color')
      case DownloadTypeEnum.CloudFileHandle:
        return this.renderIconHelper(faLink, 'SRC-warning-color')
      case DownloadTypeEnum.IsOpenNoRestrictions:
        return this.renderIconHelper(faUnlockAlt, 'SRC-success-color')
      case DownloadTypeEnum.TooLargeFile:
        return this.renderIconHelper(faDatabase, 'SRC-danger-color')
      default:
        throw Error('downloadTypeEnum passed incorrectly')
    }
  }

  // Utility to declare what type of download this is
  getDownloadType = () => {
    const { fileHandle } = this.props
    const { restrictionInformation } = this.state
    const isOpen =
      fileHandle ||
      (restrictionInformation &&
        RestrictionLevel.OPEN === restrictionInformation.restrictionLevel)
    const isTooLarge = fileHandle && fileHandle.contentSize >= GIGABYTE_SIZE
    if (isTooLarge) {
      return DownloadTypeEnum.TooLargeFile
    } else if (isOpen) {
      const concreteType = fileHandle ? fileHandle.concreteType : ''
      const isGoogleCloudFileHandle =
        concreteType === GoogleCloudFileHandleEnum.GoogleCloudFileHandle
      if (isGoogleCloudFileHandle) {
        return DownloadTypeEnum.CloudFileHandle
      } else {
        const isExternalFileHandle = Object.values(
          ExternalFileHandleConcreteTypeEnum,
          // @ts-ignore
        ).includes(concreteType)
        if (isExternalFileHandle) {
          return DownloadTypeEnum.ExternalFileHandle
        }
        return DownloadTypeEnum.IsOpenNoRestrictions
      }
    } else {
      return DownloadTypeEnum.NoAccess
    }
  }

  // Show Access Requirements
  renderARsLink = () => {
    const { restrictionInformation } = this.state
    const { synapseId, forceIsRestricted } = this.props
    const hasUnmetAccessRequirement =
      (restrictionInformation &&
        restrictionInformation!.hasUnmetAccessRequirement) ||
      ''
    const restrictionLevel =
      (restrictionInformation && restrictionInformation!.restrictionLevel) || ''
    let viewARsLink: React.ReactElement = <></>
    if (RestrictionLevel.OPEN !== restrictionLevel) {
      const linkText: string =
        forceIsRestricted || hasUnmetAccessRequirement
          ? 'Get Access'
          : 'View Terms'
      viewARsLink = (
        <a
          style={{ fontSize: '14px', cursor: 'pointer', marginLeft: '16px' }}
          className="SRC-primary-text-color"
          href={`${getEndpoint(
            BackendDestinationEnum.PORTAL_ENDPOINT,
          )}#!AccessRequirements:ID=${synapseId}&TYPE=ENTITY`}
        >
          {linkText}
        </a>
      )
    }
    return viewARsLink
  }

  render() {
    const downloadType = this.getDownloadType()
    const tooltipText = HasAccess.tooltipText[downloadType]
    const synapseId = this.props.synapseId
    const icon = this.renderIcon(downloadType)
    let viewARsLink: React.ReactElement = this.renderARsLink()
    return (
      <span style={{ whiteSpace: 'nowrap' }}>
        {tooltipText && (
          <>
            <span tabIndex={0} data-for={synapseId} data-tip={tooltipText}>
              {icon}
            </span>
            <ReactTooltip
              delayShow={TOOLTIP_DELAY_SHOW}
              place="top"
              type="dark"
              effect="solid"
              id={synapseId}
              className="has-access-tooltip-width"
            />
            {viewARsLink}
          </>
        )}
        {!tooltipText && (
          <>
            {icon} {viewARsLink}
          </>
        )}
      </span>
    )
  }
}

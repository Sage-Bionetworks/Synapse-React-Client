import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle,
  faDatabase,
  faLink,
  faMinusCircle,
  faUnlockAlt,
  faLock
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../utils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../utils/functions/getEndpoint'
import {
  FileHandle,
  RestrictableObjectType,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
  RestrictionLevel,
} from '../utils/synapseTypes/'
import { TOOLTIP_DELAY_SHOW } from './table/SynapseTableConstants'
library.add(faUnlockAlt)
library.add(faMinusCircle)
library.add(faDatabase)
library.add(faCircle)

export type HasAccessProps = {
  fileHandle?: FileHandle
  entityId: string
  entityVersionNumber?: string
  token?: string
}

type HasAccessState = {
  restrictionInformation?: RestrictionInformationResponse
  downloadType?: DownloadTypeEnum
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
  IsOpenNoUnmetAccessRestrictions,
  HasUnmetAccessRestrictions,
  ClosedForAnonymousDownload
}

export const getDownloadTypeForFileHandle = (fileHandle: FileHandle) => {
  const { concreteType, contentSize } = fileHandle
  // check if it's too large
  if (contentSize >= GIGABYTE_SIZE) {
    return DownloadTypeEnum.TooLargeFile
  }
  // check if it's a google cloud file handle
  if (concreteType === GoogleCloudFileHandleEnum.GoogleCloudFileHandle) {
    return DownloadTypeEnum.CloudFileHandle
  }
  // check if it's an external file handle
  const isExternalFileHandle = Object.values<string>(
    ExternalFileHandleConcreteTypeEnum,
  ).includes(concreteType)
  if (isExternalFileHandle) {
    return DownloadTypeEnum.ExternalFileHandle
  }
  // otherwise its open
  return DownloadTypeEnum.IsOpenNoUnmetAccessRestrictions
}

/**
 * HasAccess shows if the user has access to the file or not.
 *
 * The component's behavior changes whether it's passed in a FileHandle or not.
 * If passed a file handle then it will give more detailed information about the download.
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
    [DownloadTypeEnum.ClosedForAnonymousDownload]:
      'You must sign in to access this file.',
    [DownloadTypeEnum.HasUnmetAccessRestrictions]:
      'You must request access to this restricted file.',
    [DownloadTypeEnum.TooLargeFile]:
      'This file is too large to download as a package and must be downloaded manually.',
    [DownloadTypeEnum.ExternalFileHandle]:
      'This is an external link, which must be downloaded manually.',
    [DownloadTypeEnum.CloudFileHandle]:
      'This file must be downloaded manually (e.g. a file in Google Cloud).',
  }

  constructor(props: HasAccessProps) {
    super(props)
    this.getRestrictionInformation = this.getRestrictionInformation.bind(this)
    this.getFileEntityFileHandle = this.getFileEntityFileHandle.bind(this)
    
    const downloadType = props.fileHandle ? getDownloadTypeForFileHandle(props.fileHandle) : undefined
    this.state = {
      downloadType
    }
  }

  componentDidMount() {
    this.getRestrictionInformation()
    this.getFileEntityFileHandle()
  }

  componentDidUpdate() {
    this.getRestrictionInformation()
    this.getFileEntityFileHandle()
  }
  getFileEntityFileHandle = () => {
    const { entityId, entityVersionNumber, token } = this.props
    if (
      this.state.downloadType ||
      !entityId
    ) {
      return
    }
    // fileHandle was not passed to us, ask for it.
    SynapseClient.getFileEntityFileHandle(entityId, entityVersionNumber, token)
      .then(fileHandle => {
        const downloadType = getDownloadTypeForFileHandle(fileHandle)
        this.setState({
          downloadType
        })
      })
      .catch(err => {
        // could not get file handle
        const downloadType = token ? DownloadTypeEnum.HasUnmetAccessRestrictions : DownloadTypeEnum.ClosedForAnonymousDownload
        this.setState({
          downloadType
        })
      })
  }
  getRestrictionInformation = () => {
    const { entityId, token } = this.props
    if (
      this.state.restrictionInformation ||
      !entityId ||
      !token
    ) {
      return
    }
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    }
    SynapseClient.getRestrictionInformation(request, token)
      .then(restrictionInformation => {
        this.setState({
          restrictionInformation,
        })
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

  renderIcon = (downloadType: DownloadTypeEnum | string) => {
    switch (downloadType) {
      // fileHandle passed in
      case DownloadTypeEnum.ExternalFileHandle:
        return this.renderIconHelper(faLink, 'SRC-warning-color')
      case DownloadTypeEnum.CloudFileHandle:
        return this.renderIconHelper(faLink, 'SRC-warning-color')
      case DownloadTypeEnum.TooLargeFile:
        return this.renderIconHelper(faDatabase, 'SRC-danger-color')
      // no fileHandle
      case DownloadTypeEnum.HasUnmetAccessRestrictions:
        return this.renderIconHelper(faMinusCircle, 'SRC-warning-color')
      case DownloadTypeEnum.IsOpenNoUnmetAccessRestrictions:
        return this.renderIconHelper(faUnlockAlt, 'SRC-success-color')
      case DownloadTypeEnum.ClosedForAnonymousDownload:
        return this.renderIconHelper(faLock, 'SRC-warning-color')
      default:
        // nothing is rendered until access requirement is loaded
        return <></>
    }
  }

  // Show Access Requirements
  renderARsLink = () => {
    const { restrictionInformation } = this.state
    if (!restrictionInformation) {
      // loading
      return <></>
    }
    const { entityId } = this.props
    const hasUnmetAccessRequirement =
      restrictionInformation?.hasUnmetAccessRequirement
    const restrictionLevel = restrictionInformation?.restrictionLevel
    let linkText = ''
    if (hasUnmetAccessRequirement) {
      linkText = 'Request Access'
    } else if (RestrictionLevel.OPEN === restrictionLevel) {
      return <></>
    } else {
      linkText = 'View Terms'
    }
    return (
      <a
        style={{
          fontSize: '14px',
          cursor: 'pointer',
          marginLeft: '16px',
        }}
        className="SRC-primary-text-color"
        href={`${getEndpoint(
          BackendDestinationEnum.PORTAL_ENDPOINT,
        )}#!AccessRequirements:ID=${entityId}&TYPE=ENTITY`}
      >
        {linkText}
      </a>
    )
  }

  render() {
    const downloadType = this.state.downloadType
    if (!downloadType) {
      // loading
      return <></>
    }
    const tooltipText = HasAccess.tooltipText[downloadType]
    const entityId = this.props.entityId
    const icon = this.renderIcon(downloadType)
    const viewARsLink: React.ReactElement = this.renderARsLink()
    return (
      <span style={{ whiteSpace: 'nowrap' }}>
        {tooltipText && (
          <>
            <span tabIndex={0} data-for={entityId} data-tip={tooltipText}>
              {icon}
            </span>
            <ReactTooltip
              delayShow={TOOLTIP_DELAY_SHOW}
              place="top"
              type="dark"
              effect="solid"
              id={entityId}
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

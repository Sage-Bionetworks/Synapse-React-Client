import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle,
  faDatabase,
  faLink,
  faUnlockAlt,
  faLock,
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
  FileEntity,
  AccessRequirement,
} from '../utils/synapseTypes/'
import { TOOLTIP_DELAY_SHOW } from './table/SynapseTableConstants'
import AccessRequirementList, {
  checkHasUnsportedRequirement,
  AccessRequirementListProps,
} from './access_requirement_list/AccessRequirementList'

library.add(faUnlockAlt)
library.add(faDatabase)
library.add(faCircle)

export type HasAccessProps = {
  onHide?: Function
  fileHandle?: FileHandle
  entityId: string
  isInDownloadList?: boolean // set to show errors in UI about package creation
  entityVersionNumber?: string
  token?: string
  forceSamePage?: boolean
  set_arPropsFromHasAccess?: (props: AccessRequirementListProps) => void
}

type HasAccessState = {
  restrictionInformation?: RestrictionInformationResponse
  fileHandleDownloadType?: FileHandleDownloadTypeEnum
  displayAccessRequirement: boolean
  accessRequirements?: Array<AccessRequirement>
  isGettingRestrictionInformation: boolean
  isGettingEntityInformation: boolean
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

export enum FileHandleDownloadTypeEnum {
  ExternalCloudFile = 'ExternalCloudFile',
  ExternalFileLink = 'ExternalFileLink',
  TooLarge = 'TooLarge',
  Accessible = 'Accessible',
  AccessBlocked = 'AccessBlocked',
  AccessBlockedToAnonymous = 'AccessBlockedToAnonymous',
  NoFileHandle = 'NoFileHandle',
}

export const getDownloadTypeForFileHandle = (
  fileHandle: FileHandle,
  isInDownloadList?: boolean,
) => {
  if (fileHandle && !isInDownloadList) {
    return FileHandleDownloadTypeEnum.Accessible
  }
  const { concreteType, contentSize } = fileHandle
  // check if it's too large
  if (contentSize >= GIGABYTE_SIZE) {
    return FileHandleDownloadTypeEnum.TooLarge
  }
  // check if it's a google cloud file handle
  if (concreteType === GoogleCloudFileHandleEnum.GoogleCloudFileHandle) {
    return FileHandleDownloadTypeEnum.ExternalCloudFile
  }
  // check if it's an external file handle
  const isExternalFileHandle = Object.values<string>(
    ExternalFileHandleConcreteTypeEnum,
  ).includes(concreteType)
  if (isExternalFileHandle) {
    return FileHandleDownloadTypeEnum.ExternalFileLink
  }
  // otherwise its available
  return FileHandleDownloadTypeEnum.Accessible
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
    [FileHandleDownloadTypeEnum.AccessBlockedToAnonymous]:
      'You must sign in to access this file.',
    [FileHandleDownloadTypeEnum.AccessBlocked]:
      'You must request access to this restricted file.',
    [FileHandleDownloadTypeEnum.TooLarge]:
      'This file is too large to download as a package and must be downloaded manually.',
    [FileHandleDownloadTypeEnum.ExternalFileLink]:
      'This is an external link, which must be downloaded manually.',
    [FileHandleDownloadTypeEnum.ExternalCloudFile]:
      'This file must be downloaded manually (e.g. a file in Google Cloud).',
  }

  constructor(props: HasAccessProps) {
    super(props)
    this.getRestrictionInformation = this.getRestrictionInformation.bind(this)
    this.getFileEntityFileHandle = this.getFileEntityFileHandle.bind(this)
    this.updateStateFileHandleAccessBlocked = this.updateStateFileHandleAccessBlocked.bind(
      this,
    )

    const fileHandleDownloadType = props.fileHandle
      ? getDownloadTypeForFileHandle(props.fileHandle, props.isInDownloadList)
      : undefined
    this.state = {
      fileHandleDownloadType,
      displayAccessRequirement: false,
      accessRequirements: [],
      isGettingEntityInformation: false,
      isGettingRestrictionInformation: false,
    }
  }

  componentDidMount() {
    this.refresh()
  }

  componentDidUpdate(prevProps: HasAccessProps) {
    const forceRefresh =
      prevProps.token === undefined && this.props.token !== undefined
    // if there token has updated then force refresh the component state
    this.refresh(forceRefresh)
  }

  refresh = (forceRefresh?: boolean) => {
    if (
      this.state.isGettingEntityInformation ||
      this.state.isGettingRestrictionInformation
    ) {
      return
    }
    this.getRestrictionInformation(forceRefresh)
    this.getFileEntityFileHandle(forceRefresh)
  }

  getFileEntityFileHandle = (forceRefresh?: boolean) => {
    const {
      entityId,
      entityVersionNumber,
      token,
      isInDownloadList,
    } = this.props
    if (this.state.fileHandleDownloadType && !forceRefresh) {
      // already know the downloadType
      return
    }
    this.setState({
      isGettingEntityInformation: true,
    })
    // fileHandle was not passed to us, ask for it.
    // is this a FileEntity?
    return SynapseClient.getEntity(token, entityId, entityVersionNumber)
      .then((entity) => {
        if (entity.hasOwnProperty('dataFileHandleId')) {
          // looks like a FileEntity, get the FileHandle
          SynapseClient.getFileEntityFileHandle(entity as FileEntity, token)
            .then((fileHandle: FileHandle) => {
              const fileHandleDownloadType = getDownloadTypeForFileHandle(
                fileHandle,
                isInDownloadList,
              )
              this.setState({
                fileHandleDownloadType,
              })
            })
            .catch((err) => {
              console.error('Error on getFileHandle = ', err)
              // could not get the file handle
              this.updateStateFileHandleAccessBlocked()
            })
            .finally(() => {
              this.setState({
                isGettingEntityInformation: false,
              })
            })
        } else {
          // entity looks like something else.
          this.setState({
            fileHandleDownloadType: FileHandleDownloadTypeEnum.NoFileHandle,
            isGettingEntityInformation: false,
          })
        }
      })
      .catch((err) => {
        console.error('Error on get Entity = ', err)
        // could not get entity
        this.updateStateFileHandleAccessBlocked()
        this.setState({
          isGettingEntityInformation: false,
        })
      })
  }

  updateStateFileHandleAccessBlocked = () => {
    const { token } = this.props
    const fileHandleDownloadType = token
      ? FileHandleDownloadTypeEnum.AccessBlocked
      : FileHandleDownloadTypeEnum.AccessBlockedToAnonymous
    this.setState({
      fileHandleDownloadType,
    })
  }

  getRestrictionInformation = (forceRefresh?: boolean) => {
    const { entityId, token } = this.props
    if (this.state.restrictionInformation && !forceRefresh) {
      return
    }
    this.setState({
      isGettingRestrictionInformation: true,
    })
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    }
    return SynapseClient.getRestrictionInformation(request, token)
      .then((restrictionInformation) => {
        this.setState({
          restrictionInformation,
        })
      })
      .catch((err) => {
        console.error('Error on getRestrictionInformation: ', err)
      })
      .finally(() => {
        this.setState({
          isGettingRestrictionInformation: false,
        })
      })
  }

  renderIconHelper = (iconProp: IconProp, classColor: string) => {
    return (
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon
          icon={faCircle}
          className={classColor}
          size="1x"
          style={{ fontSize: '24px' }}
        />
        <FontAwesomeIcon
          icon={iconProp}
          className="SRC-whiteText"
          size="1x"
          transform={{ x: 5 }}
          style={{ fontSize: '13px' }}
        />
      </span>
    )
  }

  renderIcon = (
    downloadType: FileHandleDownloadTypeEnum | string,
    restrictionInformation?: RestrictionInformationResponse,
  ) => {
    // if there are any access restrictions
    if (restrictionInformation?.hasUnmetAccessRequirement) {
      return this.renderIconHelper(faLock, 'SRC-warning-color')
    }
    switch (downloadType) {
      // fileHandle available
      case FileHandleDownloadTypeEnum.ExternalFileLink:
      case FileHandleDownloadTypeEnum.ExternalCloudFile:
        return this.renderIconHelper(faLink, 'SRC-warning-color')
      case FileHandleDownloadTypeEnum.TooLarge:
        return this.renderIconHelper(faDatabase, 'SRC-danger-color')
      // was FileEntity, but no fileHandle was available
      case FileHandleDownloadTypeEnum.AccessBlocked:
      case FileHandleDownloadTypeEnum.AccessBlockedToAnonymous:
        return this.renderIconHelper(faLock, 'SRC-warning-color')
      // was a FileEntity, and fileHandle was available
      case FileHandleDownloadTypeEnum.Accessible:
      // or was not a FileEntity, but no unmet access restrictions
      case FileHandleDownloadTypeEnum.NoFileHandle:
        return this.renderIconHelper(faUnlockAlt, 'SRC-success-color')
      default:
        // nothing is rendered until access requirement is loaded
        return <></>
    }
  }

  handleGetAccess = () => {
    const { token, entityId, set_arPropsFromHasAccess } = this.props
    SynapseClient.getAllAccessRequirements(token, entityId).then(
      (requirements) => {
        if (checkHasUnsportedRequirement(requirements)) {
          window.open(
            `${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}#!AccessRequirements:ID=${entityId}&TYPE=ENTITY`,
            '_blank',
          )
        } else {
          if (set_arPropsFromHasAccess) {
            set_arPropsFromHasAccess({
              accessRequirementFromProps: requirements,
              entityId,
            })
          } else {
            this.setState({
              accessRequirements: requirements,
              displayAccessRequirement: true,
            })
          }
        }
      },
    )
  }

  // Show Access Requirements
  renderARsLink = () => {
    const { entityId, token } = this.props
    const {
      restrictionInformation,
      displayAccessRequirement,
      accessRequirements,
    } = this.state
    if (!restrictionInformation) {
      // loading
      return <></>
    }
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
      <>
        <button
          style={{
            fontSize: '14px',
            cursor: 'pointer',
            marginLeft: '16px',
            color: 'rgb(77, 85, 144)',
          }}
          onClick={this.handleGetAccess}
        >
          {linkText}
        </button>
        {displayAccessRequirement && (
          <AccessRequirementList
            token={token}
            entityId={entityId}
            accessRequirementFromProps={accessRequirements}
            onHide={() => {
              this.setState({ displayAccessRequirement: false })
              this.refresh()
            }}
          />
        )}
      </>
    )
  }

  render() {
    const fileHandleDownloadType = this.state.fileHandleDownloadType
    if (typeof fileHandleDownloadType === 'undefined') {
      // note, this can't be "if (!downloadType)" since DownloadTypeEnum has a 0 value (which is falsy)
      // loading
      return <></>
    }
    const tooltipText = HasAccess.tooltipText[fileHandleDownloadType]
    const entityId = this.props.entityId
    const icon = this.renderIcon(
      fileHandleDownloadType,
      this.state.restrictionInformation,
    )
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

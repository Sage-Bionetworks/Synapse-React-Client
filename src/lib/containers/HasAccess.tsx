/**
 * To be reworked so that HasAccess component doesn't need to request file handle information
 * because that information can be obtained in the parent component
 *
 * For example in SynapseTable.tsx, the variable "fileEntityHandle" is available
 * for each row Synapse id to store file handle information.
 * If the row Synapse id doesn't return a file handle, "fileEntityHandle" will contain
 * an object { success:boolean = false , message:string }
 * If the row Synapse id returns a file handle, "fileEntityHandle" will contain
 * an object { success:boolean = true, data: {fileEntity, fileHandle} }
 *
 * To set up "fileEntityHandle", the parent component should import "FileEntityHandleQueryWrapper"
 * and pass a callback function to "FileEntityHandleQueryWrapper" so that once the file handle information
 * is returned, the success for failure result can be saved in the parent state.
 * See SynapseTable.tsx as an example.
 */
import * as React from 'react'
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
  implementsExternalFileHandleInterface,
  FileResult,
} from '../utils/synapseTypes/'
import { CloudProviderFileHandleConcreteTypeEnum } from '../utils/synapseTypes/CloudProviderFileHandle'
import { TOOLTIP_DELAY_SHOW } from './table/SynapseTableConstants'
import AccessRequirementList, {
  checkHasUnsportedRequirement,
  AccessRequirementListProps,
} from './access_requirement_list/AccessRequirementList'
import { SRC_SIGN_IN_CLASS } from '../utils/SynapseConstants'
import { SynapseContext } from '../utils/SynapseContext'
import IconSvg, { Icon } from './IconSvg'
import { ThemeContext } from '../utils/hooks/useTheme'
import Tooltip from '../utils/tooltip/Tooltip'

export type HasAccessProps = {
  onHide?: () => void
  fileHandle?: FileHandle
  entityId: string
  isInDownloadList?: boolean // set to show errors in UI about package creation
  entityVersionNumber?: string
  forceSamePage?: boolean
  set_arPropsFromHasAccess?: (props: AccessRequirementListProps) => void
  className?: string
}

type HasAccessState = {
  restrictionInformation?: RestrictionInformationResponse
  fileHandleDownloadType?: FileHandleDownloadTypeEnum
  displayAccessRequirement: boolean
  accessRequirements?: Array<AccessRequirement>
  isGettingRestrictionInformation: boolean
  isGettingEntityInformation: boolean
  errorOnGetRestrictionInformation: boolean
}

export const GIGABYTE_SIZE = 2 ** 30

export enum FileHandleDownloadTypeEnum {
  ExternalCloudFile = 'ExternalCloudFile',
  ExternalFileLink = 'ExternalFileLink',
  TooLarge = 'TooLarge',
  Accessible = 'Accessible',
  AccessBlockedByRestriction = 'AccessBlockedByRestriction',
  AccessBlockedByACL = 'AccessBlockedByACL',
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
  if (
    concreteType ===
    CloudProviderFileHandleConcreteTypeEnum.GoogleCloudFileHandle
  ) {
    return FileHandleDownloadTypeEnum.ExternalCloudFile
  }
  // check if it's an external file handle
  if (implementsExternalFileHandleInterface(fileHandle)) {
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
    // Note AccessBlockedByRestriction is never explicitly set, its value is calculated
    [FileHandleDownloadTypeEnum.AccessBlockedByRestriction]:
      'You must request access to this restricted file.',
    [FileHandleDownloadTypeEnum.AccessBlockedByACL]:
      'You do not have download access for this item.',
    [FileHandleDownloadTypeEnum.TooLarge]:
      'This file is too large to download as a package and must be downloaded manually.',
    [FileHandleDownloadTypeEnum.ExternalFileLink]:
      'This is an external link, which must be downloaded manually.',
    [FileHandleDownloadTypeEnum.ExternalCloudFile]:
      'This file must be downloaded manually (e.g. a file in Google Cloud).',
  }

  static contextType = SynapseContext

  constructor(props: HasAccessProps) {
    super(props)
    this.getRestrictionInformation = this.getRestrictionInformation.bind(this)
    this.getFileEntityFileHandle = this.getFileEntityFileHandle.bind(this)
    this.updateStateFileHandleAccessBlocked =
      this.updateStateFileHandleAccessBlocked.bind(this)

    this.state = {
      fileHandleDownloadType: undefined,
      displayAccessRequirement: false,
      accessRequirements: [],
      isGettingEntityInformation: false,
      isGettingRestrictionInformation: false,
      errorOnGetRestrictionInformation: false,
    }
  }

  componentDidUpdate(prevProps: HasAccessProps) {
    // SWC-5821: If the entity ID prop changes, force refresh
    if (prevProps.entityId != this.props.entityId) {
      this.refresh(true)
    }
  }

  componentDidMount() {
    this.refresh()
  }

  refresh = (forceRefresh?: boolean) => {
    if (
      this.state.isGettingEntityInformation ||
      this.state.isGettingRestrictionInformation ||
      this.state.errorOnGetRestrictionInformation
    ) {
      return
    }
    this.getRestrictionInformation(forceRefresh)
    this.getFileEntityFileHandle(forceRefresh)
  }

  updateStateFileHandleAccessBlocked = () => {
    const fileHandleDownloadType = this.context.accessToken
      ? FileHandleDownloadTypeEnum.AccessBlockedByACL
      : FileHandleDownloadTypeEnum.AccessBlockedToAnonymous
    this.setState({
      fileHandleDownloadType,
    })
  }

  getFileEntityFileHandle = (forceRefresh?: boolean) => {
    const { entityId, entityVersionNumber, isInDownloadList, fileHandle } =
      this.props

    if (this.state.fileHandleDownloadType && !forceRefresh) {
      // already know the downloadType
      return
    }
    if (fileHandle) {
      const fileHandleDownloadType = getDownloadTypeForFileHandle(
        fileHandle,
        isInDownloadList,
      )
      this.setState({
        fileHandleDownloadType,
      })
      return
    }
    this.setState({
      isGettingEntityInformation: true,
    })
    // fileHandle was not passed to us, ask for it.
    // is this a FileEntity?
    return SynapseClient.getEntity(
      this.context.accessToken,
      entityId,
      entityVersionNumber,
    )
      .then(entity => {
        if (entity.hasOwnProperty('dataFileHandleId')) {
          // looks like a FileEntity, get the FileHandle
          return SynapseClient.getFileResult(
            entity as FileEntity,
            this.context.accessToken,
            true,
          ).then((fileHandle: FileResult) => {
            const fileHandleDownloadType = getDownloadTypeForFileHandle(
              fileHandle.fileHandle!,
              isInDownloadList,
            )
            this.setState({
              fileHandleDownloadType,
              isGettingEntityInformation: false,
            })
          })
        } else {
          // entity looks like something else.
          this.setState({
            fileHandleDownloadType: FileHandleDownloadTypeEnum.NoFileHandle,
            isGettingEntityInformation: false,
          })
          return Promise.resolve()
        }
      })
      .catch(err => {
        // this could be a self-imposed error or one from the backend, only log the latter
        if (err.reason) {
          console.error('Error on get Entity = ', err)
        }
        // could not get entity
        this.updateStateFileHandleAccessBlocked()
        this.setState({
          isGettingEntityInformation: false,
        })
      })
  }

  getRestrictionInformation = (forceRefresh?: boolean) => {
    const { entityId } = this.props
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
    return SynapseClient.getRestrictionInformation(
      request,
      this.context.accessToken,
    )
      .then(restrictionInformation => {
        this.setState({
          restrictionInformation,
        })
      })
      .catch(err => {
        console.error(
          'Error on getRestrictionInformation. This should not happen: ',
          err,
        )
        this.setState({
          errorOnGetRestrictionInformation: true,
        })
      })
      .finally(() => {
        this.setState({
          isGettingRestrictionInformation: false,
        })
      })
  }

  renderIconSvg(icon: Icon, color: string) {
    return (
      <IconSvg
        options={{
          icon: icon,
          color: color,
        }}
      />
    )
  }

  renderIcon = (
    downloadType: FileHandleDownloadTypeEnum | string,
    restrictionInformation?: RestrictionInformationResponse,
  ) => {
    // if there are any access restrictions
    if (restrictionInformation?.hasUnmetAccessRequirement) {
      return (
        <ThemeContext.Consumer>
          {theme => this.renderIconSvg('accessClosed', theme.colors.warning)}
        </ThemeContext.Consumer>
      )
    }
    switch (downloadType) {
      // fileHandle available
      case FileHandleDownloadTypeEnum.ExternalFileLink:
      case FileHandleDownloadTypeEnum.ExternalCloudFile:
        return (
          <ThemeContext.Consumer>
            {theme => this.renderIconSvg('link', theme.colors.warning)}
          </ThemeContext.Consumer>
        )
      case FileHandleDownloadTypeEnum.TooLarge:
        return (
          <ThemeContext.Consumer>
            {theme => this.renderIconSvg('database', theme.colors.error)}
          </ThemeContext.Consumer>
        )
      // was FileEntity, but no fileHandle was available
      case FileHandleDownloadTypeEnum.AccessBlockedByACL:
      case FileHandleDownloadTypeEnum.AccessBlockedToAnonymous:
        return (
          <ThemeContext.Consumer>
            {theme => this.renderIconSvg('accessClosed', theme.colors.warning)}
          </ThemeContext.Consumer>
        )
      // was a FileEntity, and fileHandle was available
      // or was not a FileEntity, but no unmet access restrictions
      case FileHandleDownloadTypeEnum.Accessible:
      case FileHandleDownloadTypeEnum.NoFileHandle:
        return (
          <ThemeContext.Consumer>
            {theme => this.renderIconSvg('accessOpen', theme.colors.success)}
          </ThemeContext.Consumer>
        )
      default:
        // nothing is rendered until access requirement is loaded
        return <></>
    }
  }

  handleGetAccess = () => {
    const { entityId, set_arPropsFromHasAccess } = this.props
    SynapseClient.getAllAccessRequirements(
      this.context.accessToken,
      entityId,
    ).then(requirements => {
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
    })
  }

  // Show Access Requirements
  renderARsLink = () => {
    const { entityId } = this.props
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
      // they need to sign in
      return <></>
    } else {
      linkText = 'View Terms'
    }
    return (
      <>
        <a
          style={{
            fontSize: '14px',
            cursor: 'pointer',
            marginLeft: '5px',
            verticalAlign: 'middle',
          }}
          className={this.props.className}
          onClick={this.handleGetAccess}
        >
          {linkText}
        </a>
        {displayAccessRequirement && (
          <AccessRequirementList
            entityId={entityId}
            accessRequirementFromProps={accessRequirements}
            renderAsModal={true}
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
    const { restrictionInformation, fileHandleDownloadType } = this.state
    if (typeof fileHandleDownloadType === 'undefined') {
      // note, this can't be "if (!downloadType)" since DownloadTypeEnum has a 0 value (which is falsy)
      // loading
      return <></>
    }
    let tooltipText = HasAccess.tooltipText[fileHandleDownloadType]
    if (
      fileHandleDownloadType ===
        FileHandleDownloadTypeEnum.AccessBlockedByACL &&
      restrictionInformation?.hasUnmetAccessRequirement
    ) {
      // If blocked by ACL check if blocked by Access Restrictions, those can be taken care of
      // though they will then be blocked by ACL afterwards.
      tooltipText =
        HasAccess.tooltipText[
          FileHandleDownloadTypeEnum.AccessBlockedByRestriction
        ]
    }
    const entityId = this.props.entityId
    const icon = this.renderIcon(fileHandleDownloadType, restrictionInformation)
    const viewARsLink: React.ReactElement = this.renderARsLink()
    const iconContainer =
      fileHandleDownloadType ===
      FileHandleDownloadTypeEnum.AccessBlockedToAnonymous ? (
        <button
          type="button"
          className={SRC_SIGN_IN_CLASS}
          onClick={ev => {
            if (ev.isTrusted) {
              /*
                There is a tricky problem - 
                The portals listens to click events for buttons with the class SRC_SIGN_IN_CLASS set, it listens to this event
                so that it can display the login modal.

                This button has an svg inside of it which is problematic because more often than not clicking this button will 
                instead click that svg. The event listener in the portals will break as a result.

                Though the svg may get the actual click event, because of event bubbling this button will get its onClick called.
                Once onClick is called we can manually dispatch an event off of this button. This does pose a problem, we end up in a 
                infinite loop because this button keeps disptaching click events, so we can use the isTrusted to recognize if onClick was
                triggered programmatically or by user click. Lastly, using { bubbles: true } ensures the event bubbles up to the document level.

              */
              const clickEvent = new MouseEvent('click', { bubbles: true })
              ev.currentTarget.dispatchEvent(clickEvent)
            }
          }}
        >
          {icon}
        </button>
      ) : (
        <Tooltip
          title={tooltipText}
          id={entityId}
          enterNextDelay={TOOLTIP_DELAY_SHOW}
          placement="top"
        >
          <span tabIndex={0} data-for={entityId}>
            {icon}
          </span>
        </Tooltip>
      )

    return (
      <span style={{ whiteSpace: 'nowrap' }}>
        {tooltipText && (
          <>
            {iconContainer}
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

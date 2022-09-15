import React, { useMemo } from 'react'
import { SynapseClient } from '../utils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../utils/functions/getEndpoint'
import { useGetRestrictionInformation } from '../utils/hooks/SynapseAPI/dataaccess/useGetAccessRequirement'
import useGetEntityBundle from '../utils/hooks/SynapseAPI/entity/useEntityBundle'
import { SynapseTheme, ThemeContext } from '../utils/hooks/useTheme'
import { SRC_SIGN_IN_CLASS } from '../utils/SynapseConstants'
import { useSynapseContext } from '../utils/SynapseContext'
import {
  AccessRequirement,
  isFileEntity,
  RestrictableObjectType,
  RestrictionInformationRequest,
  RestrictionLevel,
} from '../utils/synapseTypes/'
import AccessRequirementList, {
  checkHasUnsportedRequirement,
} from './access_requirement_list/AccessRequirementList'
import IconSvg, { Icon } from './IconSvg'

export type HasAccessProps = {
  onHide?: () => void
  entityId: string
  entityVersionNumber?: string
  className?: string
}

export const GIGABYTE_SIZE = 2 ** 30

export enum FileHandleDownloadTypeEnum {
  Accessible = 'Accessible',
  AccessBlockedByRestriction = 'AccessBlockedByRestriction',
  AccessBlockedByACL = 'AccessBlockedByACL',
  AccessBlockedToAnonymous = 'AccessBlockedToAnonymous',
  NoFileHandle = 'NoFileHandle',
}

const iconConfiguration: Record<
  FileHandleDownloadTypeEnum,
  { icon: Icon; color: (theme: SynapseTheme) => string; tooltipText: string }
> = {
  [FileHandleDownloadTypeEnum.AccessBlockedToAnonymous]: {
    icon: 'accessClosed',
    color: theme => theme.colors.warning,
    tooltipText: 'You must sign in to access this file.',
  },
  [FileHandleDownloadTypeEnum.AccessBlockedByRestriction]: {
    icon: 'accessClosed',
    color: theme => theme.colors.warning,
    tooltipText: 'You must request access to this restricted file.',
  },
  [FileHandleDownloadTypeEnum.AccessBlockedByACL]: {
    icon: 'accessClosed',
    color: theme => theme.colors.warning,
    tooltipText: 'You do not have download access for this item.',
  },

  [FileHandleDownloadTypeEnum.Accessible]: {
    icon: 'accessOpen',
    color: theme => theme.colors.success,
    tooltipText: '',
  },

  [FileHandleDownloadTypeEnum.NoFileHandle]: {
    icon: 'accessOpen',
    color: theme => theme.colors.success,
    tooltipText: '',
  },
}

function AccessIcon(props: { downloadType: FileHandleDownloadTypeEnum }) {
  const { downloadType } = props
  if (downloadType) {
    const configuration = iconConfiguration[downloadType]
    return (
      <ThemeContext.Consumer>
        {theme => (
          <IconSvg
            options={{
              icon: configuration.icon,
              color: configuration.color(theme),
              label: configuration.tooltipText,
            }}
          />
        )}
      </ThemeContext.Consumer>
    )
  }
  // nothing is rendered until downloadType is determined
  return <></>
}

/**
 * Determines whether an Entity is accessible for download, or if it is blocked by the ACL or unmet Access Requirements.
 *
 * To make download available, and determine if the file is downloadable via the web, see {@link DirectDownload.tsx}
 * @param entityId
 * @param entityVersionNumber
 * @returns
 */
export function useGetFileHandleDownloadType(
  entityId: string,
  entityVersionNumber?: string,
) {
  const [fileHandleDownloadType, setFileHandleDownloadType] =
    React.useState<FileHandleDownloadTypeEnum>()

  const { accessToken } = useSynapseContext()
  const { data: entityBundle, error: entityFetchError } = useGetEntityBundle(
    entityId,
    {
      includeEntity: true,
      includePermissions: true,
    },
    parseInt(entityVersionNumber ?? ''),
  )

  const restrictionInformationRequest: RestrictionInformationRequest =
    React.useMemo(
      () => ({
        restrictableObjectType: RestrictableObjectType.ENTITY,
        objectId: entityId,
      }),
      [entityId],
    )

  const { data: restrictionInformation } = useGetRestrictionInformation(
    restrictionInformationRequest,
  )

  const entity = entityBundle?.entity
  const permissions = entityBundle?.permissions

  React.useEffect(() => {
    if (
      restrictionInformation &&
      restrictionInformation.hasUnmetAccessRequirement
    ) {
      setFileHandleDownloadType(
        FileHandleDownloadTypeEnum.AccessBlockedByRestriction,
      )
    } else if (entity && permissions?.canDownload) {
      if (isFileEntity(entity) && entity.dataFileHandleId) {
        setFileHandleDownloadType(FileHandleDownloadTypeEnum.Accessible)
      } else {
        setFileHandleDownloadType(FileHandleDownloadTypeEnum.NoFileHandle)
      }
    } else if (permissions && !permissions.canDownload) {
      setFileHandleDownloadType(
        accessToken
          ? FileHandleDownloadTypeEnum.AccessBlockedByACL
          : FileHandleDownloadTypeEnum.AccessBlockedToAnonymous,
      )
    }
  }, [
    accessToken,
    entity,
    entityFetchError,
    permissions,
    restrictionInformation,
  ])

  return fileHandleDownloadType
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
export function HasAccessV2(props: HasAccessProps) {
  const [displayAccessRequirement, setDisplayAccessRequirement] =
    React.useState(false)
  const [accessRequirements, setAccessRequirements] = React.useState<
    AccessRequirement[]
  >([])

  const { entityId, entityVersionNumber } = props

  const fileHandleDownloadType = useGetFileHandleDownloadType(
    entityId,
    entityVersionNumber,
  )

  const { accessToken } = useSynapseContext()

  const restrictionInformationRequest: RestrictionInformationRequest =
    React.useMemo(
      () => ({
        restrictableObjectType: RestrictableObjectType.ENTITY,
        objectId: entityId,
      }),
      [entityId],
    )

  const { data: restrictionInformation } = useGetRestrictionInformation(
    restrictionInformationRequest,
  )

  const handleGetAccess = () => {
    // TODO: The fetch should really happen in the AR List component.
    // If we need to open the AR page in synapse, the logic should be in the modal and it should just close itself right away
    SynapseClient.getAllAccessRequirements(accessToken, entityId).then(
      requirements => {
        if (checkHasUnsportedRequirement(requirements)) {
          window.open(
            `${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}#!AccessRequirements:ID=${entityId}&TYPE=ENTITY`,
            '_blank',
          )
        } else {
          setAccessRequirements(requirements)
          setDisplayAccessRequirement(true)
        }
      },
    )
  }

  // Show Access Requirements
  const accessRequirementsJsx = useMemo(() => {
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
          className={props.className}
          onClick={handleGetAccess}
        >
          {linkText}
        </a>
        {displayAccessRequirement && (
          <AccessRequirementList
            entityId={entityId}
            accessRequirementFromProps={accessRequirements}
            renderAsModal={true}
            onHide={() => {
              setDisplayAccessRequirement(false)
            }}
          />
        )}
      </>
    )
  }, [
    entityId,
    restrictionInformation,
    accessRequirements,
    displayAccessRequirement,
  ])

  if (fileHandleDownloadType === undefined) {
    // note, this can't be "if (!downloadType)" since DownloadTypeEnum has a 0 value (which is falsy)
    // loading
    return <></>
  }
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
        <AccessIcon downloadType={fileHandleDownloadType} />
      </button>
    ) : (
      <AccessIcon downloadType={fileHandleDownloadType} />
    )

  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      {iconContainer}
      {accessRequirementsJsx}
    </span>
  )
}

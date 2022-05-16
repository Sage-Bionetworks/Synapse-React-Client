import React, { useEffect, useState } from 'react'
import { Icon } from './row_renderers/utils'
import {
  BatchFileRequest,
  FileEntity,
  FileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
  implementsExternalFileHandleInterface,
} from '../utils/synapseTypes'
import { getFiles, getFileResult, getEntity } from '../utils/SynapseClient'
import IconSvg from './IconSvg'
import { useInView } from 'react-intersection-observer'
import { useSynapseContext } from '../utils/SynapseContext'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from './table/SynapseTableConstants'
import { UAParser } from 'ua-parser-js'

export type DirectFileDownloadProps = {
  associatedObjectId: string
  entityVersionNumber?: string
  associatedObjectType?: FileHandleAssociateType
  fileHandleId?: string
  displayFileName?: boolean
  onClickCallback?: (isExternalLink: boolean) => void // callback if you want to know when the link was clicked
}

const DirectDownload: React.FunctionComponent<
  DirectFileDownloadProps
> = props => {
  const { accessToken } = useSynapseContext()
  const {
    associatedObjectId,
    entityVersionNumber,
    associatedObjectType,
    fileHandleId,
    displayFileName,
    onClickCallback,
  } = props
  const { ref, inView } = useInView()
  const [isExternalFile, setIsExternalFile] = useState<boolean>(false)
  const [hasFileAccess, setHasFileAccess] = useState<boolean>(false)
  const [fileEntity, setFileEntity] = useState<FileEntity>()
  const [externalURL, setExternalURL] = useState<string>()
  const [fileName, setFileName] = useState<string>('')
  let mounted = true

  useEffect(() => {
    if (mounted && inView) {
      getFileEntityFileHandle()
    }
    return () => {
      mounted = false
    }
  }, [accessToken, inView])

  const getDownloadLink = async () => {
    let preSignedURL
    // SWC-5907: opening in the file must be strictly done in the same click event process (Safari only).
    // https://stackoverflow.com/questions/6628949/window-open-popup-getting-blocked-during-click-event
    const parser = new UAParser()
    const isSafari = parser.getBrowser().name == 'Safari'
    let safariDownloadWindow: Window | null = null
    if (isSafari) {
      safariDownloadWindow = window.open(
        '',
        'Safari Download',
        'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,popup,width=600,height=200',
      )
      safariDownloadWindow!.document.body.innerHTML =
        'Downloading file on Safari...'
    }
    try {
      if (associatedObjectType === FileHandleAssociateType.TableEntity) {
        const files = await getTableEntityFileHandle(true)
        preSignedURL = files.requestedFiles[0].preSignedURL!
      } else {
        const file = await getFileResult(fileEntity!, accessToken, false, true)
        preSignedURL = file.preSignedURL
      }
    } catch (e) {
      console.log('Fail to get file download link: ', e)
    }

    if (!preSignedURL) {
      safariDownloadWindow?.close()
      console.log('Fail to get file download link')
    } else {
      if (isSafari && safariDownloadWindow) {
        safariDownloadWindow.location = preSignedURL
        setTimeout(() => {
          if (safariDownloadWindow) {
            safariDownloadWindow.close()
          }
        }, 10000)
      } else {
        window.open(preSignedURL)
      }
      if (onClickCallback) {
        onClickCallback(isExternalFile)
      }
    }
  }

  const hasFileHandle = (fh: FileHandle) => {
    if (fh && !fh['isPreview']) {
      setHasFileAccess(true)
      return true
    } else {
      setHasFileAccess(false)
      return false
    }
  }

  const getTableEntityFileHandle = (includePreSignedURLs: boolean = false) => {
    const fileHandleAssociationList: FileHandleAssociation[] = [
      {
        associateObjectId: associatedObjectId!,
        associateObjectType: associatedObjectType!,
        fileHandleId: fileHandleId!,
      },
    ]
    const batchFileRequest: BatchFileRequest = {
      includeFileHandles: true,
      includePreSignedURLs: includePreSignedURLs,
      includePreviewPreSignedURLs: false,
      requestedFiles: fileHandleAssociationList,
    }
    return getFiles(batchFileRequest, accessToken)
  }

  const getFileEntityFileHandle = () => {
    return getEntity(accessToken, associatedObjectId, entityVersionNumber)
      .then(async entity => {
        // From file view
        if (entity.hasOwnProperty('dataFileHandleId')) {
          // looks like a FileEntity, get the FileHandle
          setFileEntity(entity as FileEntity)
          return getFileResult(
            // TODO: Why can we just use getFiles here?
            entity as FileEntity,
            accessToken,
            true,
          )
            .then(data => {
              const fh = data.fileHandle
              if (fh && hasFileHandle(fh)) {
                // have file access and not file preview
                if (implementsExternalFileHandleInterface(fh)) {
                  setIsExternalFile(true)
                  setExternalURL(fh['externalURL'])
                }
              }
            })
            .catch(err => {
              console.log('Error on getFileEntityFileHandle = ', err)
            })
        } else if (
          associatedObjectType === FileHandleAssociateType.TableEntity
        ) {
          const files = await getTableEntityFileHandle()
          const fh: FileHandle = files.requestedFiles[0].fileHandle!
          if (displayFileName && fh && hasFileHandle(fh)) {
            setFileName(fh.fileName)
          }
        }

        return Promise.resolve()
      })
      .catch(err => {
        console.log('Error on getEntity = ', err)
      })
  }

  const getIcon = () => {
    if (isExternalFile) {
      return (
        <button
          className={'btn-download-icon'}
          onClick={() => {
            if (onClickCallback) {
              onClickCallback(isExternalFile)
            }
          }}
        >
          <a
            className="ignoreLink"
            rel="noreferrer"
            href={externalURL}
            target="_blank"
          >
            <Icon type="externallink" />
          </a>
        </button>
      )
    }
    if (hasFileAccess) {
      return (
        <button className={'btn-download-icon'} onClick={getDownloadLink}>
          <IconSvg options={{ icon: 'download' }} />
          {displayFileName && fileName ? fileName : ''}
        </button>
      )
    }
    return <></>
  }

  return (
    <span
      ref={ref}
      data-for={`${associatedObjectId}-direct-download-tooltip`}
      data-tip={
        isExternalFile
          ? 'Navigate to external link'
          : 'Download this file individually'
      }
    >
      <ReactTooltip
        delayShow={TOOLTIP_DELAY_SHOW}
        place="left"
        type="dark"
        effect="solid"
        id={`${associatedObjectId}-direct-download-tooltip`}
      />
      {getIcon()}
    </span>
  )
}

export default DirectDownload

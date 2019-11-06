import { getEntity, getFileHandleContent, getFiles } from './SynapseClient'
import { FileEntity } from './jsonResponses/FileEntity'
import { Entity } from './jsonResponses/Entity'
import { BatchFileResult } from './jsonResponses/BatchFileResult'
import { FileHandle } from './jsonResponses/FileHandle'

const ESTIMATED_CORS_TIME_MS: number = 200
const ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME_KEY: string = 'ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME'
const ESTIMATED_DOWNLOAD_SPEED_KEY: string = 'ESTIMATED_DOWNLOAD_SPEED'
/**
 * Return the estimated download speed (bytes/second).  Result is cached.
 * Result is crude estimate since it's a single test file (small sample, only ~2MB), but is a valid test (since it's a Synapse file on s3).
 * The intent is to let the user know if the package download will take many hours to download.
 * @param sessionToken 
 */
export const testDownloadSpeed = (
  sessionToken: string
): Promise<number> => {
  
  const entityId = 'syn12600511'
  return new Promise((resolve, reject) => {
    // check cache
    const cachedSpeedExpireTime = localStorage.getItem(ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME_KEY)
    const cachedSpeed = localStorage.getItem(ESTIMATED_DOWNLOAD_SPEED_KEY)
    if (cachedSpeedExpireTime && cachedSpeed) {
      // is this value expired?
      const now:number = new Date().getTime()
      if (now < Number(cachedSpeedExpireTime)) {
        resolve(Number(cachedSpeed))
        return
      }
    }

    /**
     * 1.  Get the test File Entity
     * 2.  Get the file handle and presigned URL associated to the latest version of the test File Entity
     * 3.  Start the timer and fetch the file content using that presigned URL
     */
    getEntity(sessionToken, entityId).then((entity: Entity) => {
      const fileEntity:FileEntity = entity as FileEntity
      const fileHandleAssociationList = [
        {
          associateObjectId: fileEntity.id,
          associateObjectType: 'FileEntity',
          fileHandleId: fileEntity.dataFileHandleId,
        },
      ]
      const request: any = {
        includeFileHandles: true,
        includePreSignedURLs: true,
        includePreviewPreSignedURLs: false,
        requestedFiles: fileHandleAssociationList,
      }
      getFiles(request, sessionToken)
        .then((data: BatchFileResult) => {
          const presignedUrl: string = data.requestedFiles[0].preSignedURL
          const fileHandle: FileHandle = data.requestedFiles[0].fileHandle
          // start test!
          const startMs = new Date().getTime()
          return getFileHandleContent(fileHandle, presignedUrl).then(
            () => {
              // bytes/second
              console.log(`Transferred ${fileHandle.contentSize/1000000} MB in ${((new Date().getTime() - startMs - ESTIMATED_CORS_TIME_MS)/1000)} seconds`)
              let result = (fileHandle.contentSize / ((new Date().getTime() - startMs - ESTIMATED_CORS_TIME_MS)/1000))
              // save result in cache (for 5 minutes)
              const now:number = new Date().getTime()
              localStorage.setItem(ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME_KEY, (now + (1000*60*5)).toString())
              localStorage.setItem(ESTIMATED_DOWNLOAD_SPEED_KEY, (result).toString())
              resolve(result)
            },
          )
        })
    }).catch(err => reject(err))
  })
}
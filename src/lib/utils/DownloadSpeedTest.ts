import { getEntity, getFileHandleContent, getFiles } from './SynapseClient'
import { FileEntity } from './jsonResponses/FileEntity'
import { Entity } from './jsonResponses/Entity'
import { BatchFileResult } from './jsonResponses/BatchFileResult'
import { FileHandle } from './jsonResponses/FileHandle'

export const ESTIMATED_CORS_TIME_MS: number = 200
/**
 * Return the estimated download speed (bytes/second).  Result is cached.
 * @param sessionToken 
 */
export const testDownloadSpeed = (
  sessionToken: string
): Promise<number> => {
  
  const entityId = 'syn12600511'
  return new Promise((resolve, reject) => {
    // check cache
    const cachedSpeedExpireTime = localStorage.getItem('ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME')
    const cachedSpeed = localStorage.getItem('ESTIMATED_DOWNLOAD_SPEED')
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
              localStorage.setItem('ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME', (now + (1000*60*5)).toString())
              localStorage.setItem('ESTIMATED_DOWNLOAD_SPEED', (result).toString())
              resolve(result)
            },
          )
        })
    }).catch(err => reject(err))
  })
}
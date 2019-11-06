import { getEntity, getFileEntityContent, getFileHandleById } from './SynapseClient'
import { FileEntity } from './jsonResponses/FileEntity'
import { FileHandle } from './jsonResponses/FileHandle'
import { resolve } from 'path'

export const testSpeed = (
  sessionToken: string | undefined
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

    getEntity(sessionToken, entityId).then((fileEntity: FileEntity) => {
      getFileHandleById(fileEntity.dataFileHandleId, sessionToken).then((fileHandle: FileHandle) => {
        // start time
        const startMs = new Date().getTime()
        getFileEntityContent(
          sessionToken,
          fileEntity
        ).then(data => {
          let result = (fileHandle.contentSize / (new Date().getTime() - startMs))
          result /= 1000
          // save result in cache
          const now:number = new Date().getTime()
          localStorage.setItem('ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME', (now + (1000*60*10)).toString())
          localStorage.setItem('ESTIMATED_DOWNLOAD_SPEED', (result).toString())
          resolve(result)
        })
      })
    }).catch(err => reject(err))
  })
}
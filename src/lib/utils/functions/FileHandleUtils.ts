import {
  ExternalFileHandle,
  ExternalObjectStoreFileHandle,
  FileHandle,
  ProxyFileHandle,
  GoogleCloudFileHandle,
  S3FileHandle,
  PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
} from '../synapseTypes'

/**
 * Gets the friendly name of a bucket/storage location using the file handle.
 *
 * @param fileHandle
 * @returns
 */
export function getLocationName(fileHandle: FileHandle) {
  switch (fileHandle.concreteType) {
    case PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      return (fileHandle as ProxyFileHandle).filePath
    case EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      return (fileHandle as ExternalObjectStoreFileHandle).bucket
    case EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      return (fileHandle as ExternalFileHandle).externalURL
    case S3_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      if ((fileHandle as S3FileHandle).storageLocationId === 1) {
        return 'Synapse Storage'
      } else {
        return `s3://${(fileHandle as S3FileHandle).bucketName}`
      }
    case GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE:
      return `gs://${(fileHandle as GoogleCloudFileHandle).bucketName}`
    default:
      throw new Error(
        `Couldn't determine location name for file handle: ${JSON.stringify(
          fileHandle,
        )}`,
      )
  }
}

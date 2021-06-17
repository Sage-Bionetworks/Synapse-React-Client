import {
  ExternalFileHandle,
  ExternalFileHandleConcreteTypeEnum,
  ExternalObjectStoreFileHandle,
  FileHandle,
  ProxyFileHandle,
} from '../synapseTypes'
import {
  CloudProviderFileHandleConcreteTypeEnum,
  GoogleCloudFileHandle,
  S3FileHandle,
} from '../synapseTypes/CloudProviderFileHandle'

/**
 * Gets the friendly name of a bucket/storage location using the file handle.
 *
 * @param fileHandle
 * @returns
 */
export function getLocationName(fileHandle: FileHandle) {
  switch (fileHandle.concreteType) {
    case ExternalFileHandleConcreteTypeEnum.ProxyFileHandle:
      return (fileHandle as ProxyFileHandle).filePath
    case ExternalFileHandleConcreteTypeEnum.ExternalObjectStoreFileHandle:
      return (fileHandle as ExternalObjectStoreFileHandle).bucket
    case ExternalFileHandleConcreteTypeEnum.ExternalFileHandle:
      return (fileHandle as ExternalFileHandle).externalURL
    case CloudProviderFileHandleConcreteTypeEnum.S3FileHandle:
      if ((fileHandle as S3FileHandle).storageLocationId === 1) {
        return 'Synapse Storage'
      } else {
        return `s3://${(fileHandle as S3FileHandle).bucketName}`
      }
    case CloudProviderFileHandleConcreteTypeEnum.GoogleCloudFileHandle:
      return `gs://${(fileHandle as GoogleCloudFileHandle).bucketName}`
    default:
      throw new Error(
        `Couldn't determine location name for file handle: ${JSON.stringify(
          fileHandle,
        )}`,
      )
  }
}

import { FileHandle } from './FileHandle'
import { AssertionError } from 'assert'

export enum ExternalFileHandleConcreteTypeEnum {
  ProxyFileHandle = 'org.sagebionetworks.repo.model.file.ProxyFileHandle',
  ExternalObjectStoreFileHandle = 'org.sagebionetworks.repo.model.file.ExternalObjectStoreFileHandle',
  ExternalFileHandle = 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
}

/*
https://docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ExternalObjectStoreFileHandle.html
Represents a file stored in an S3 Bucket to which Synapse cannot access. 
Together with ExternalObjectStorageLocationSetting, this object provides the information the client requires to access the S3 file.

*/
export type ExternalObjectStoreFileHandle = ExternalFileHandleInterface & {
  concreteType: ExternalFileHandleConcreteTypeEnum.ExternalObjectStoreFileHandle // This is used to indicate the implementation of this interface. For example, an S3FileHandle should be set to: org.sagebionetworks.repo.model.file.S3FileHandle
  filePath: string //	STRING	The relative path of this file within the proxy.
}

export function assertIsExternalFileHandle(
  x?: FileHandle,
): asserts x is ExternalFileHandle {
  if (
    x?.concreteType !== ExternalFileHandleConcreteTypeEnum.ExternalFileHandle
  ) {
    throw new AssertionError({
      message: 'This is not an External File Handle!',
    })
  }
}

/*
  https://docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ExternalFileHandle.html
  An ExternalFileHandle represents a file that is not stored in Synapse. Instead, ExternalFileHandles reside somewhere accessible via a URL. Synapse will attempt to generate a preview for any external URL that can be publicly read.
*/
export type ExternalFileHandle = ExternalFileHandleInterface & {
  concreteType: ExternalFileHandleConcreteTypeEnum.ExternalFileHandle // This is used to indicate the implementation of this interface. For example, an S3FileHandle should be set to: org.sagebionetworks.repo.model.file.S3FileHandle
  externalURL: string //	The external URL of this file.
}

/*
 https://docs.synapse.org/rest/org/sagebionetworks/repo/model/file/ProxyFileHandle.html
 Reference to a file that accessible via a proxy server. Each ProxyFileHandle must reference a ProxyStorageLocationSettings that defines how the files are accessed.
*/
export type ProxyFileHandle = ExternalFileHandleInterface & {
  concreteType: ExternalFileHandleConcreteTypeEnum.ProxyFileHandle // This is used to indicate the implementation of this interface. For example, an S3FileHandle should be set to: org.sagebionetworks.repo.model.file.S3FileHandle
  filePath: string //	STRING	The relative path of this file within the proxy.
}

// https://www.typescriptlang.org/docs/handbook/advanced-types.html#typeof-type-guards
export function implementsExternalFileHandleInterface(
  x: ExternalFileHandleInterface,
): x is ExternalFileHandleInterface {
  return Object.values(ExternalFileHandleConcreteTypeEnum).includes(
    x.concreteType,
  )
}

/* 
  Defines FileHandles for files that are stored externally and can not be controlled by Synapse. 
  All file access authentication and download/upload/delete operations are delegated the client.

  Note - while the interface is empty this keeps parity between the backend and frontend types.
*/
export interface ExternalFileHandleInterface extends FileHandle {}

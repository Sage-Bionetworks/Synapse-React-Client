// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/FileHandle.html

import { CloudProviderFileHandleConcreteTypeEnum } from './CloudProviderFileHandle'
import { ExternalFileHandleConcreteTypeEnum } from './ExternalFileHandleInterface'

export interface FileHandle {
  id: string // The ID of this FileHandle. All references to this FileHandle will use this ID. Synapse will generate this ID when the FileHandle is created.
  etag: string // FileHandles are immutable from the perspective of the API. The only field that can be change is the previewId. When a new previewId is set, the etag will change.
  createdBy: string // The ID Of the user that created this file.
  createdOn: string // The date when this file was uploaded.
  readonly concreteType: // This is used to indicate the implementation of this interface. For example, an S3FileHandle should be set to: org.sagebionetworks.repo.model.file.S3FileHandle
  ExternalFileHandleConcreteTypeEnum | CloudProviderFileHandleConcreteTypeEnum
  contentType: string // Must be: http://en.wikipedia.org/wiki/Internet_media_type
  contentMd5: string // The file's content MD5.
  fileName: string // The short, user visible name for this file.
  storageLocationId: number // The optional storage location descriptor
  contentSize: number // The size of the file in bytes.
}

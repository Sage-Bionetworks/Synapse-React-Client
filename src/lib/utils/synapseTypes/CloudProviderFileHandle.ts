import { FileHandle } from './FileHandle'

/*
  https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/CloudProviderFileHandleInterface.html
  Defines the common fields of FileHandles that are uploaded to cloud providers such as AWS S3 and Google Cloud Storage.
 */
export enum CloudProviderFileHandleConcreteTypeEnum {
  S3FileHandle = 'org.sagebionetworks.repo.model.file.S3FileHandle',
  GoogleCloudFileHandle = 'org.sagebionetworks.repo.model.file.GoogleCloudFileHandle',
}

interface CloudProviderFileHandleInterface extends FileHandle {
  readonly bucketName: string
  readonly key: string
  readonly previewId?: string
  readonly isPreview: boolean
}

/*
  https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/S3FileHandle.html
  An S3FileHandle represents a file stored in AWS S3.
 */
export interface S3FileHandle extends CloudProviderFileHandleInterface {
  readonly concreteType: CloudProviderFileHandleConcreteTypeEnum.S3FileHandle
}

export interface GoogleCloudFileHandle
  extends CloudProviderFileHandleInterface {
  readonly concreteType: CloudProviderFileHandleConcreteTypeEnum.GoogleCloudFileHandle
}

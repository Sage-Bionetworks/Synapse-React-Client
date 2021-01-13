import { FileHandle } from './FileHandle'

/*
  https://docs.synapse.org/rest/org/sagebionetworks/repo/model/file/CloudProviderFileHandleInterface.html
  Defines the common fields of FileHandles that are uploaded to cloud providers such as AWS S3 and Google Cloud Storage.
 */
export enum CloudProviderFileHandleConcreteTypeEnum {
  S3FileHandle = 'org.sagebionetworks.repo.model.file.S3FileHandle',
  GoogleCloudFileHandle = 'org.sagebionetworks.repo.model.file.GoogleCloudFileHandle',
}

/*
  https://docs.synapse.org/rest/org/sagebionetworks/repo/model/file/S3FileHandle.html
  An S3FileHandle represents a file stored in AWS S3.
 */
export type S3FileHandle = FileHandle & {
  concreteType: CloudProviderFileHandleConcreteTypeEnum.S3FileHandle
  bucketName: string
  key: string
  previewId: string
  isPreview: boolean
}

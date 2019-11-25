import { FileHandleAssociation } from './FileHandleAssociation'

export type DownloadList = {
  tag: 'c57433e3-65b5-4aa8-888b-215da8585351'
  filesToDownload: FileHandleAssociation[]
  ownerId: string
  updatedOn: string
}

//https://docs.synapse.org/rest/org/sagebionetworks/repo/model/file/FileHandleAssociateType.html
export type AddFilesToDownloadListResponse = {
  concreteType: string //
  downloadList: DownloadList
}

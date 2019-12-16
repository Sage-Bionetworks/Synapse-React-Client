import { FileHandleAssociation } from './FileHandleAssociation'

export type DownloadList = {
  tag: string
  filesToDownload: FileHandleAssociation[]
  ownerId: string
  updatedOn: string
}

//https://docs.synapse.org/rest/org/sagebionetworks/repo/model/file/AddFileToDownloadListResponse.html
export type AddFilesToDownloadListResponse = {
  concreteType: 'org.sagebionetworks.repo.model.file.AddFileToDownloadListResponse'
  downloadList: DownloadList
}

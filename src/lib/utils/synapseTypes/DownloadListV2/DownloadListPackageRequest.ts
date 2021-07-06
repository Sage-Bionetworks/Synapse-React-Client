// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/DownloadListPackageRequest.html
// Request to package files from a user's download list.
export type DownloadListPackageRequest = {
  concreteType: 'org.sagebionetworks.repo.model.download.DownloadListPackageRequest'
  zipFileName?: string //Optional parameter to set the name of the resulting zip file.
}

import {
  AddFilesToDownloadListRequest,
  AddFilesToDownloadListResponse,
  DownloadFromTableRequest,
  DownloadFromTableResult,
  EntityBundle,
  EntityBundleRequest,
  EntityHeader,
  EntityPath,
  FileHandle,
  FileHandleAssociateType,
  PaginatedResults,
  SynapseVersion,
} from './synapseTypes/'

export interface ISynapseClient {
  /**
   * Start an asynchronous job to add files to a user's download list.
   * https://rest-docs.synapse.org/rest/POST/download/list/add/async/start.html
   */
  addFilesToDownloadList: (
    request: AddFilesToDownloadListRequest,
    accessToken: string,
    updateParentState?: any,
  ) => Promise<AddFilesToDownloadListResponse>

  getDownloadFromTableRequest: (
    request: DownloadFromTableRequest,
    accessToken?: string | undefined,
    updateParentState?: any,
  ) => Promise<DownloadFromTableResult>

  /**
   * https://rest-docs.synapse.org/rest/GET/fileHandle/handleId.html
   * Get a FileHandle using its ID.
   * Note: Only the user that created the FileHandle can access it directly.
   * @return FileHandle
   **/
  getFileHandleById: (
    handleId: string,
    accessToken?: string | undefined,
  ) => Promise<FileHandle>

  getFileHandleContentFromID: (
    fileHandleId: string,
    accessToken: string,
  ) => Promise<string>

  getVersion: () => Promise<SynapseVersion>

  /**
   * http://rest-docs.synapse.org/rest/GET/file/id.html
   * Get the actual URL of the file from with an associated object .
   * @return a short lived presignedURL to be redirected with
   **/
  getActualFileHandleByIdURL: (
    handleId: string,
    accessToken: string | undefined,
    fileAssociateType: FileHandleAssociateType,
    fileAssociateId: string,
    redirect?: boolean,
  ) => Promise<string>

  /**
   * Returns synapse user favorites list given their access token
   * https://rest-docs.synapse.org/rest/GET/favorite.html
   */
  getUserFavorites: (
    accessToken: string | undefined,
    offset?: number,
    limit?: number,
  ) => Promise<PaginatedResults<EntityHeader>>

  getEntityPath: (
    entityId: string,
    accessToken?: string | undefined,
  ) => Promise<EntityPath>

  getEntityHeader: (
    entityId: string,
    accessToken?: string | undefined,
  ) => Promise<EntityHeader>

  getEntityBundleV2: (
    entityId: string | number,
    requestObject: EntityBundleRequest,
    version?: number | undefined,
    accessToken?: string | undefined,
  ) => Promise<EntityBundle>
}

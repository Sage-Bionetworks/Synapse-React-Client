import { FileHandleAssociation } from './FileHandleAssociation'

export type BatchFileRequest = {
  requestedFiles: FileHandleAssociation[] // Defines the files to get.
  includePreSignedURLs: boolean //	Set to true to request a pre-signed URL for each file.
  includeFileHandles: boolean //	Set to true to request a FileHandle for each file.
  includePreviewPreSignedURLs: boolean //	Set to true to request a preview's pre-signed URL for each file.
}

import { FileHandle } from './FileHandle'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/FileHandleResults.html

export type FileHandleResults = {
  list: FileHandle[]
}

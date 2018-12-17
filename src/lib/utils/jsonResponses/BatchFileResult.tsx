import { FileResult } from "./FileResult"

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/file/BatchFileResult.html
export type BatchFileResult = {
    requestedFiles: FileResult []
}

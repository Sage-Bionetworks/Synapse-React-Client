import { PartPresignedUrl } from './PartPresignedUrl'

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/file/BatchPresignedUploadUrlResponse.html

export type BatchPresignedUploadUrlResponse = {
  partPresignedUrls: PartPresignedUrl[]
}

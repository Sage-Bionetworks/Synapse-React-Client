
export type AttachmentData = {
    name: string       // 	The name of this attachment.
    tokenId: string    // 	This token is used to get a pre-signed URL that can be used to download this attachment.
    previewId: string  // This token is used to get a pre-signed URL that can
                       // be used to download this attachment's preview.
    url: string        // 	When provided, the URL can be used to directly download this attachment.
    contentType: string
    md5: string
    previewState: "FAILED" | "PREVIEW_EXISTS" | "NOT_COMPATIBLE" // The state of the preview for this attachment
}

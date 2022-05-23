// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/discussion/DiscussionReplyBundle.html
export type DiscussionReplyBundle = {
  id: string
  threadId: string
  forumId: string
  projectId: string
  createdOn: string
  createdBy: string
  modifiedOn: string
  etag: string
  messageKey: string
  isEdited: boolean
  isDeleted: boolean
}

export type DiscussionThreadBundle = {
  id: string
  forumId: string
  projectId: string
  title: string
  createdOn: string
  createdBy: string
  modifiedOn: string
  etag: string
  messageKey: string
  numberOfViews: number
  numberOfReplies: number
  lastActivity: string
  activeAuthors: string[]
  isEdited: boolean
  isDeleted: boolean
  isPinned: boolean
}

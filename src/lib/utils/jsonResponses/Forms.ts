//https://docs.synapse.org/rest/org/sagebionetworks/repo/model/form/FormGroup.html
export type FormGroup = {
  groupId?: string
  name: string
  createdBy?: string
  createdOn?: string
}

// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/form/FormData.html
export type FormData = {
  formDataId?: string
  groupId: string
  name: string
  createdBy?: string
  createdOn?: string
  modifiedOn?: string
  dataFileHandleId:string
}

// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/form/FormDataStatus.html
export type FormDataStatus = {
  formDataId: string,
  submittedOn: string,
  reviewedOn: string,
  reviewedBy: string,
  status: StatusEnum,
  rejectionMessage: string
}

// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/form/StatusResult.html
export type StatusResult = {
  data: FormData,
  status: FormDataStatus
}
// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/form/StatusEnum.html
export enum StatusEnum {
  WAITING_FOR_SUBMISSION = 'WAITING_FOR_SUBMISSION',
  SUBMITTED_WAITING_FOR_REVIEW = 'SUBMITTED_WAITING_FOR_REVIEW',
  ACCEPTED = 'ACCEPTED', 
  REJECTED = 'REJECTED'
}

// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/form/ListRequest.html
export type ListRequest = {
  filterByStatus?: StatusEnum[],
  groupId: string,
  nextPageToken?: string
}

// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/form/ListResponse.html
export type ListResponse = {
  page: StatusResult[],
  nextPageToken: string
}

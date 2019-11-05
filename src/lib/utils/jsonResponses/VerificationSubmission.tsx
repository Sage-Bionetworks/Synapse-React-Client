export type VerificationSubmission = {
  id: string // The ID of this object
  createdOn: string // The date and time this object was created
  createdBy: string // The principal ID of the user requesting verification
  firstName: string // This person's given name (forename)
  lastName: string // This person's family name (surname)
  emails: string[] //  The list of user email addresses registered to this user.
  location: string // This person's location
  company: string // This person's current affiliation
  orcid: string // The user's ORCID URI
  stateHistory: any // List of state changes the submission has passed through, ordered by time. The last in the list contains the current state of the submission.
  attachments: any // Metadata of Files attached to the submission
}

// This is not a real object in Synapse,  merely a collection of potential string values to represent the "concreteType" field on Entities
export type ConcreteEntityType =
  | 'org.sagebionetworks.repo.model.Project'
  | 'org.sagebionetworks.repo.model.Folder'
  | 'org.sagebionetworks.repo.model.FileEntity'
  | 'org.sagebionetworks.repo.model.Link'
  | 'org.sagebionetworks.repo.model.table.TableEntity'
  | 'org.sagebionetworks.repo.model.table.EntityView'
  | 'org.sagebionetworks.repo.model.table.SubmissionView'
  | 'org.sagebionetworks.repo.model.docker.DockerRepository'

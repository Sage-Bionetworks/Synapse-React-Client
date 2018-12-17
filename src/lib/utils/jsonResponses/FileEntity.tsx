import {Entity} from "./Entity"

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/FileEntity.html
type FileEntitySpec = {
    versionNumber:	number              // 	The version number issued to this version on the object.
    versionLabel:	string              // 	The version label for this entity
    versionComment:	string              // 	The version comment for this entity
    versionUrl:	string                  // 	The full URL of this exect version. This URL is provided by Synapse.
    versions:	string                  // 	The URL to get all versions of this entity. This URL is provided by Synapse.
    dataFileHandleId:	string          // 	ID of the file associated with this entity.
    fileNameOverride:	string          // 	An optional replacement for the name of the uploaded file. This is distinct from the entity name. If omitted the file will retain its original name.
}

export type FileEntity = FileEntitySpec & Entity

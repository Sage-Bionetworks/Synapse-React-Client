import * as SynapseClient from '../utils/SynapseClient'

function getUserProfileData (principalIds, token) {
    return SynapseClient.getUserProfiles(principalIds).then(data => {
        // people will either have a profile pic file handle id
        // or they won't. Have to break this down into two groups.
        let withProfilePic = data.list.filter(value => {
            return value.profilePicureFileHandleId !== undefined;
        });
        let fileHandleAssociationList = withProfilePic.map(value => {
            return {
                fileHandleId: value.profilePicureFileHandleId,
                associateObjectId: value.ownerId,
                associateObjectType: "UserProfileAttachment"
            };
        });
        let request = {
            requestedFiles: fileHandleAssociationList,
            includePreSignedURLs: true,
            includeFileHandles: false,
            includePreviewPreSignedURLs: false
        };
        return SynapseClient.getFiles(request, token).then(fileHandleList => {
            // we retrieve all the persons with profile pic file handles
            // so we next loop through them, find the original person in the data.list
            // and add a field with their pre-signed url
            fileHandleList.requestedFiles.forEach(fileHandle => {
                let matchingPersonIndex = data.list.findIndex(el => { return fileHandle.fileHandleId === el.profilePicureFileHandleId; });
                data.list[matchingPersonIndex].preSignedURL = fileHandle.preSignedURL;
            });
            return Promise.resolve(data)
        }).catch(err => {
            console.log({ err });
        });
    });
}
export default getUserProfileData
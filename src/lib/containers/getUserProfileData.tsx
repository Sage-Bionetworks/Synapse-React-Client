import { SynapseClient } from '../utils/'

function getUserProfileData(principalIds: number [], token?: string) {
  return SynapseClient.getUserProfiles(principalIds).then(
    (data: any) => {
      // people will either have a profile pic file handle id
      // or they won't. Have to break this down into two groups.
      const withProfilePic = data.list.filter(
        (value: any) => {
          return value.profilePicureFileHandleId !== undefined
        }
      )
      if (withProfilePic.length === 0) {
        return data
      }
      const fileHandleAssociationList = withProfilePic.map(
        (value: any) => {
          return {
            associateObjectId: value.ownerId,
            associateObjectType: 'UserProfileAttachment',
            fileHandleId: value.profilePicureFileHandleId
          }
        })
      const request: any = {
        includeFileHandles: false,
        includePreSignedURLs: true,
        includePreviewPreSignedURLs: false,
        requestedFiles: fileHandleAssociationList
      }
      return SynapseClient.getFiles(request, token)
        .then(
          (fileHandleList: any) => {
            // we retrieve all the persons with profile pic file handles
            // so we next loop through them, find the original person in the data.list
            // and add a field with their pre-signed url
            fileHandleList.requestedFiles.forEach(
              (fileHandle: any) => {
                const matchingPersonIndex = data.list.findIndex(
                  (el: any) => {
                    return fileHandle.fileHandleId === el.profilePicureFileHandleId
                  }
                )
                data.list[matchingPersonIndex].preSignedURL = fileHandle.preSignedURL
              })
            return Promise.resolve(data)
          })
        .catch((err) => {
          console.log({ err })
        })
    })
}
export default getUserProfileData

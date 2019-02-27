import { SynapseClient } from '../utils'

function getUserProfile(principalIds: number [], token?: string) {
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

function getUserBundle(ownerId: string, mask: number, token?: string) {
  return SynapseClient.getUserBundle(ownerId, mask, token).then(
    (data: any) => {
      const { userProfile } = data
      // people will either have a profile pic file handle id
      // or they won't. Have to break this down into two groups.
      if (!userProfile.profilePicureFileHandleId) {
        return data
      }

      const fileHandleAssociationList = [{
        associateObjectId: ownerId,
        associateObjectType: 'UserProfileAttachment',
        fileHandleId: userProfile.profilePicureFileHandleId
      }]

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
            const firstElement = fileHandleList.requestedFiles[0]
            if (firstElement.fileHandleId === userProfile.profilePicureFileHandleId) {
              userProfile.preSignedURL = firstElement.preSignedURL
            }
            return Promise.resolve(data)
          })
        .catch((err) => {
          console.log({ err })
        })
    })
}

export { getUserProfile, getUserBundle }

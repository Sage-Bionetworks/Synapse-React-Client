import { SynapseClient } from '../utils'
import { UserProfile } from '../utils/jsonResponses/UserProfile'

/*
  Utility functions for UserCards
*/

function getUserProfileWithProfilePicAttached(principalIds: string [], token?: string) {
  return SynapseClient.getUserProfiles(principalIds).then(
    (data) => {
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
        (value) => {
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
          (fileHandleList) => {
            // we retrieve all the persons with profile pic file handles
            // so we next loop through them, find the original person in the data.list
            // and add a field with their pre-signed url
            fileHandleList.requestedFiles.forEach(
              (fileHandle) => {
                const matchingPersonIndex = data.list.findIndex(
                  (el) => {
                    return fileHandle.fileHandleId === el.profilePicureFileHandleId
                  }
                )
                data.list[matchingPersonIndex].clientPreSignedURL = fileHandle.preSignedURL
              })
            return Promise.resolve(data)
          })
        .catch((err) => {
          return err
        })
    })
}

type UserProfileAndImg = {
  userProfile: UserProfile
  preSignedURL: string
}
function getUserProfileWithProfilePic(ownerId: string, token?: string): Promise<UserProfileAndImg> {
  return SynapseClient.getUserProfileById(token, ownerId).then(
    (userProfile: UserProfile) => {
      // people will either have a profile pic file handle id
      // or they won't. Have to break this down into two groups.
      if (!userProfile.profilePicureFileHandleId) {
        return Promise.resolve({ userProfile }) as any
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
          (fileHandleList) => {
            // we retrieve all the persons with profile pic file handles
            // so we next loop through them, find the original person in the data.list
            // and add a field with their pre-signed url
            const firstElement = fileHandleList.requestedFiles[0]
            return Promise.resolve({
              userProfile,
              preSignedURL: firstElement.preSignedURL
            })
          })
        .catch((err) => {
          console.log({ err })
        })
    })
}

const COLORS: string[] = [
  'chocolate',
  'black',
  'firebrick',
  'maroon',
  'olive',
  'green',
  'forestgreen',
  'darkturquoise',
  'teal',
  'blue',
  'navy',
  'darkmagenta',
  'purple',
  'blue',
  'orangered',
  'blueviolet'
]

const hash = (userName: string) => {
  const val = userName
  .split('')
  .reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0)
  return Math.abs(val)
}

const getColor = (userName: string) => {
  const hashedUserName = hash(userName)
  return COLORS[hashedUserName % COLORS.length]
}

export { getUserProfileWithProfilePicAttached, getColor, getUserProfileWithProfilePic }

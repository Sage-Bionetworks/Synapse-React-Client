import { SynapseClient } from '..'
import { UserProfile } from '../synapseTypes/'
import { BackendDestinationEnum, getEndpoint } from './getEndpoint'

/*
  Utility functions for UserCards
*/

async function getUserProfileWithProfilePicAttached(principalIds: string[]) {
  const userProfiles = await SynapseClient.getUserProfiles(principalIds)
  const profilesWithPictures = userProfiles.list.map(profile => {
    if (profile.profilePicureFileHandleId) {
      return {
        ...profile,
        clientPreSignedURL: `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/userProfile/${profile.ownerId}/image/preview?redirect=true`,
      }
    } else {
      return profile
    }
  })
  return { list: profilesWithPictures }
}

export type UserProfileAndImg = {
  userProfile: UserProfile
  preSignedURL?: string
}

function getProfilePic(userProfile: UserProfile): UserProfileAndImg {
  if (!userProfile.profilePicureFileHandleId) {
    return { userProfile }
  } else {
    return {
      userProfile,
      preSignedURL: `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}/repo/v1/userProfile/${
        userProfile.ownerId
      }/image/preview?redirect=true`,
    }
  }
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
  'blueviolet',
]

const hash = (userName: string) => {
  const val = userName
    .split('')
    .reduce(
      (prevHash, currVal) =>
        ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
      0,
    )
  return Math.abs(val)
}

const getColor = (userName: string) => {
  const hashedUserName = hash(userName)
  return COLORS[hashedUserName % COLORS.length]
}

export { getUserProfileWithProfilePicAttached, getColor, getProfilePic }
export default {
  getUserProfileWithProfilePicAttached,
  getColor,
  getProfilePic,
}

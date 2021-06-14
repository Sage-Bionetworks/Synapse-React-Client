import {
  UserBundle,
  UserGroupHeader,
  UserProfile,
} from '../../lib/utils/synapseTypes'

export const MOCK_USER_ID = 999

export const mockUserProfileData: UserProfile = {
  summary: 'My summary bio',
  firstName: 'First',
  lastName: 'Last',
  location: 'Seattle,WA,USA',
  industry: '',
  company: 'Researcher',
  position: '',
  ownerId: `${MOCK_USER_ID}`,
  userName: 'myUserName',
  createdOn: '2018-06-18T21:42:48.000Z',
  url: '',
}

export const mockUserBundle: UserBundle = {
  userId: `${MOCK_USER_ID}`,
  userProfile: {
    ownerId: `${MOCK_USER_ID}`,
    firstName: 'First',
    lastName: 'Last',
    userName: 'myUserName',
    summary: 'A summary of my profile is here.',
    position: 'My Job Title',
    location: 'Seattle, WA, USA',
    industry: 'Biotechnology',
    company: 'Sage Bionetworks',
    profilePicureFileHandleId: '555555',
    url: 'https://sagebase.org',
    createdOn: '2017-01-23T15:02:05.000Z',
  },
  ORCID: 'https://orcid.org/0000-0000-0000-0000',
  isCertified: true,
  isVerified: true,
  isACTMember: false,
}

export const mockUserGroupHeader: UserGroupHeader = {
  ownerId: `${MOCK_USER_ID}`,
  firstName: 'First',
  lastName: 'Last',
  userName: 'myUserName',
  email: 'test-user-email@sagebase.org',
  displayName: 'Display Name',
  isIndividual: true,
}

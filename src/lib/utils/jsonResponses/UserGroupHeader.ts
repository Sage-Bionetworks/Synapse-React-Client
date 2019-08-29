export type UserGroupHeader = {
  ownerId:	string //	A foreign key to the ID of the 'principal' object for the user.
  firstName:	string //	First Name
  lastName:	string //	Last Name
  userName:	string //	A name chosen by the user that uniquely identifies them.
  email:	string //	User's current email address
  displayName:	string //	This is deprecated and will always be null
  isIndividual:	boolean //	True if this is a user, false if it is a group
}
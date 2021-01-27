Displays a Synapse user. Must log in to view these cards.

Small:
```jsx
<UserCard size={SMALL_USER_CARD} ownerId={currentUserProfile.ownerId}/>
```

Medium:
```jsx
<UserCard size={MEDIUM_USER_CARD} ownerId={currentUserProfile.ownerId}/>
```

Large:
```jsx
<UserCard size={LARGE_USER_CARD} ownerId={currentUserProfile.ownerId}/>
```

### Props

To display a user, specify one of `userProfile`, `alias`, or `ownerId`.

| Props | Type | Explanation |
| ---------|--------------------------- | ---------------------------------------- |
| userProfile | [UserProfile](https://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html) | A [userProfile](https://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html) object can get passed in for the component to use as its data |
| hideEmail | boolean | If set, will hide the user's email address |
| preSignedURL | string | If set, show the corresponding image for the user |
| alias | string | An alias that resolves the ownerId for the UserProfile |
| ownerId | string | The ownerId of the UserProfile |
| size | string | Either SynapseConstants.SMALL_USER_CARD, SynapseConstants.MEDIUM_USER_CARD, SynapseConstants.LARGE_USER_CARD, specifying the card size. |
| hideText | boolean | Hides the text next the user profile image. Only applies to small user card. |
| hideTooltip | boolean | Hides the tooltip shown when hovering over the card. Only applies to small user card. |
| menuActions | Array of MenuActions[], where MenuAction is an object of the form - {field:string, callback?: (userProfile `|` UserProfile) => void} |Specifies the dropdown menu functionality for the ellipsis on medium/large cards. If field === 'SEPERATOR' then a break will occur in the menu. NOTE: If left undefined the menu will not render to the screen. |
| link | string | The link to point to on the user name, defaults to https://www.synapse.org/#!Profile:${userProfile.ownerId} |
| token | string | Auth token |
| disableLink | boolean | Disables linking the user's name to their Synapse profile. Only applies to medium user card. |
| extraSmall | boolean | Displays extra small card with image height matching text height. Only applies to small user card. |
| isCertified | boolean | Displays whether the user's profile is certified. Only applies to large user card. |
| isValidated | boolean | Displays whether the user's profile is validated. Only applies to medium and large user cards.  |

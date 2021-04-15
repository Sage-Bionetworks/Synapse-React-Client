Must log in to view these cards.

Small Avatar:
```jsx
currentUserProfile ? <UserCard size={AVATAR} ownerId={currentUserProfile.ownerId} avatarSize="SMALL"/> : <UserCard size={AVATAR} ownerId={273950} avatarSize="SMALL"/>
```

Large Avatar:
```jsx
currentUserProfile ? <UserCard size={AVATAR} ownerId={currentUserProfile.ownerId} avatarSize="LARGE"/> : <UserCard size={AVATAR} ownerId={273950} avatarSize="LARGE"/>
```


Small:
```jsx
currentUserProfile ? <UserCard size={SMALL_USER_CARD} ownerId={currentUserProfile.ownerId}/> : <UserCard size={SMALL_USER_CARD} ownerId={273950}/>
```

Medium:
```jsx
currentUserProfile ? <UserCard size={MEDIUM_USER_CARD} ownerId={currentUserProfile.ownerId}/> : <UserCard size={MEDIUM_USER_CARD} ownerId={273950}/>
```

Large:
```jsx
currentUserProfile ? <UserCard size={LARGE_USER_CARD} ownerId={currentUserProfile.ownerId}/> : <UserCard size={LARGE_USER_CARD} ownerId={273950}/>
```
Must log in to view these cards.

Avatar:
```jsx
currentUserProfile ? <UserCard size={AVATAR} ownerId={currentUserProfile.ownerId}/> : <UserCard size={AVATAR} ownerId={273950}/>
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
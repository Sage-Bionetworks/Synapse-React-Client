import React from 'react'
const uuidv4 = require("uuid/v4")

const UserBadgeView = ({data, loadingBar}) => {
    if (data.length === 0) {
        return loadingBar || false
    } else {
        return data.list.map(
            userProfile => {
                if (userProfile.preSignedURL) {
                    return (<img key={uuidv4()} className="userProfileImage" alt="User Profile" src={userProfile.preSignedURL}>
                            </img>)
                } else {
                    return (<p key={uuidv4()}> {userProfile.firstName} </p>)
                }
            }
        )
    }
}

export default UserBadgeView
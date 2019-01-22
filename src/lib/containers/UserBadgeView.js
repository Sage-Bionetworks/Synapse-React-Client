// FILE NOT EXPORTED - DEMO ONLY
import React from 'react'
import { uuidv4 } from '../utils/modules'

const UserBadgeView = ({data, loadingBar = (<div></div>)}) => {
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
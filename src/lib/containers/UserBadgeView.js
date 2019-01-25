// FILE NOT EXPORTED - DEMO ONLY
import React from 'react'
import { uuidv4 } from '../utils/modules'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCircle)

const COLORS = 	['chocolate',
    'black',
    'firebrick',
    'maroon',
    'olive',
    'limegreen',
    'forestgreen',
    'darkturquoise',
    'teal',
    'blue',
    'navy',
    'darkmagenta',
    'purple',
    'stateblue',
    'orangered',
    'forestblue',
    'blueviolet'
]


const getColor = (number) => {
    return COLORS[number % COLORS.length]
}

const hash = (userName) => {
    return userName.split('').reduce((prevHash,
         currVal) =>
        (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0,
         0)
}

const UserBadgeView = ({data, loadingBar = (<div></div>)}) => {
    if (!data) {
        return loadingBar || false
    } else {
        return data && data.list.map(
            userProfile => {
                if (userProfile.preSignedURL) {
                    return (<img key={uuidv4()} className='userProfileImage' alt='User Profile' src={userProfile.preSignedURL}>
                            </img>)
                } else {
                    const hashedUserName = hash(userProfile.userName)
                    const color = getColor(hashedUserName)

                    return (
                        <span className="fa-layers fa-fw">
                            <strong className="SRC-whiteText">M</strong>
                            <FontAwesomeIcon style={{color}} icon={'circle'}/>
                        </span>
                    )
                }
            }
        ) || (<div>failed to load</div>)
    }
}

export default UserBadgeView
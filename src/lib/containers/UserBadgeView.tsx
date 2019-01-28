// FILE NOT EXPORTED - DEMO ONLY
import * as React from 'react'
import { uuidv4 } from '../utils/modules'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCircle)

const COLORS: string[] = [
  'chocolate',
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

const getColor = (hash: number) => {
  return COLORS[hash % COLORS.length]
}

const hash = (userName: string) => {
  const val = userName
                .split('')
                .reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0)
  return Math.abs(val)
}

const openLink = (link: string) => {
  window.open(link, '_blank')
}

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  data: any
}

const UserBadgeView: React.SFC<UserBadgeViewProps> = ({ data, loadingBar = (<div/>) }) => {
  if (!data) {
    return loadingBar || false
  }
  return data && data.list.map((userProfile: any) => {
    if (userProfile.preSignedURL) {
      return <img key={uuidv4()} className="userProfileImage" alt="User Profile" src={userProfile.preSignedURL} />
    }
    const hashedUserName = hash(userProfile.userName)
    const color = getColor(hashedUserName)
    const link = `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
    return (
        <React.Fragment>
            {/* tslint:disable-next-line:jsx-no-lambda */}
            <span onClick={() => openLink(link)} className="fa-layers fa-fw">
                <FontAwesomeIcon className="fa-stack-2x" color={color} icon={'circle'} />
                <strong style={{ top: '-5px', right: '-10px' }} className="fa-stack-1x SRC-whiteText">
                M
            </strong>
            </span>
            <a style={{ marginLeft: '16px' }} href={link}>
                {userProfile.firstName} {userProfile.lastName} ({userProfile.userName})
            </a>
        </React.Fragment> || <div>failed to load</div>
    )
  })
}

export default UserBadgeView

import * as React from 'react'
import { ReactComponent as MaintenanceSvg } from '../assets/icons/error_page/maintenance.svg'
import { ReactComponent as NoAccessSvg } from '../assets/icons/error_page/no-access.svg'
import { ReactComponent as UnavailableSvg } from '../assets/icons/error_page/unavailable.svg'

export type ErrorPageProps = {
  image: string
  title: string
  message: string
}

const getImage = (image:string) => {
  switch (image) {
    case "maintenance":
      return <MaintenanceSvg />
    case "noAccess":
      return <NoAccessSvg />
    case "unavailable":
      return <UnavailableSvg />
    default:
      return <></>
  }
}

const ErrorPage: React.FunctionComponent<ErrorPageProps> = (props) => {
  const {image, title, message} = props

  return (
    <div className={"error-page-wrapper"}>
      <div className={"error-page-content"}>
        <div className={"error-page-image"}>{getImage(image)}</div>
        <div className={"error-page-message"}>
          <h2>{title}</h2>
          <p>{message}</p>
          <hr />
          <ul>
            <li><a href={"https://www.synapse.org/"}>Synapse Home</a></li>
            <li><a href={"mailto:synapseInfo@sagebionetworks.org"}>Contact Us</a></li>
            <li><a href={""}>Help</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
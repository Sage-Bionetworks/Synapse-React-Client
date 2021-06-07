import React from 'react'
import { Button } from 'react-bootstrap'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'

export type ProjectCardProps = {
  projectName: string
  projectDescription: string
  synId: string
  image?: JSX.Element
}

export const ProjectViewCard: React.FunctionComponent<
  ProjectCardProps & React.HTMLAttributes<HTMLDivElement>
> = ({ projectName, projectDescription, synId, image, ...domProps }) => {
  return (
    <div
      {...domProps}
      className={`cardContainer ProjectViewCard bootstrap-4-backport ${
        domProps.className ?? ''
      }`}
    >
      {image ? image : <div className={'ProjectViewCard__ImagePlaceholder'} />}
      <div>
        <div className="ProjectViewCard__ProjectName">{projectName}</div>
        <div className="ProjectViewCard__ProjectDescription">
          {projectDescription}
        </div>
      </div>
      <Button
        variant="primary"
        className="ProjectViewCard__ViewProjectButton"
        onClick={() =>
          window.open(
            `${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}#!Synapse:${synId}`,
            '_blank',
            'noopener',
          )
        }
      >
        View Project
      </Button>
    </div>
  )
}

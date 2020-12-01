import { SynapseClient, SynapseConstants } from '../../../utils'
import { getFieldIndex } from '../../../utils/functions/queryUtils'
import useGetQueryResultBundle from '../../../utils/hooks/useGetQueryResultBundle'
import {
  BatchFileRequest,
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryBundleRequest,
} from '../../../utils/synapseTypes'
import React, { useState, useEffect } from 'react'
import CardCarousel from '../../carousel/CardCarousel'
import { ProjectViewCard } from './ProjectViewCard'
import { Error } from '../../Error'

export type ProjectViewCarouselProps = {
  token?: string
  entityId: string
}

type ProjectData = {
  projectName: string
  projectDescription: string
  entityId: string
  imageFileHandle?: string
  imageUrl?: string
}

enum ExpectedColumns {
  ID = 'id',
  PROJECT_DISPLAY_NAME = 'projectDisplayName',
  NAME = 'name', // fallback
  PROJECT_DESCRIPTION = 'projectDescription',
  PROJECT_IMAGE = 'projectImage',
}

export const ProjectViewCarousel: React.FunctionComponent<ProjectViewCarouselProps> = ({
  token,
  entityId,
}) => {
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `select * from ${entityId}`,
    },
  }

  const [projects, setProjects] = useState<ProjectData[]>([])
  const [error, setError] = useState<Error>()
  const { queryResultBundle, error: queryError } = useGetQueryResultBundle({
    token,
    queryBundleRequest,
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const entityIdIndex = getFieldIndex(
          ExpectedColumns.ID,
          queryResultBundle,
        )
        const displayNameColumnIndex = getFieldIndex(
          ExpectedColumns.PROJECT_DISPLAY_NAME,
          queryResultBundle,
        )
        const descriptionColumnIndex = getFieldIndex(
          ExpectedColumns.PROJECT_DESCRIPTION,
          queryResultBundle,
        )
        const nameColumnIndex = getFieldIndex(
          ExpectedColumns.NAME,
          queryResultBundle,
        )
        const imageColumnIndex = getFieldIndex(
          ExpectedColumns.PROJECT_IMAGE,
          queryResultBundle,
        )

        const projects: ProjectData[] =
          queryResultBundle?.queryResult.queryResults.rows.map(row => {
            return {
              projectName:
                row.values[displayNameColumnIndex] ??
                row.values[nameColumnIndex],
              projectDescription: row.values[descriptionColumnIndex],
              imageFileHandle: row.values[imageColumnIndex],
              entityId: row.values[entityIdIndex],
            }
          }) ?? []
        if (queryError) {
          throw queryError
        }
        if (projects.length === 0) {
          // wait for data to load
          return
        }

        // Retrieve the associated images
        const fileHandleAssociationList: FileHandleAssociation[] = projects
          .filter(project => project.imageFileHandle)
          .map(project => {
            return {
              associateObjectId: entityId!,
              associateObjectType: FileHandleAssociateType.TableEntity,
              fileHandleId: project.imageFileHandle!,
            }
          })

        if (fileHandleAssociationList.length > 0) {
          const batchFileRequest: BatchFileRequest = {
            includeFileHandles: true,
            includePreSignedURLs: true,
            includePreviewPreSignedURLs: false,
            requestedFiles: fileHandleAssociationList,
          }

          const files = await SynapseClient.getFiles(batchFileRequest, token)

          projects.forEach(p => {
            if (p.imageFileHandle) {
              p.imageUrl = files.requestedFiles.filter(
                rf => rf.fileHandleId === p.imageFileHandle,
              )[0].preSignedURL
            }
          })
        }

        setProjects(projects)
      } catch (error) {
        console.error(error)
        setError(error)
      }
    }
    getData()
  }, [entityId, token, queryResultBundle, queryError])

  return error ? (
    <Error error={error}></Error>
  ) : (
    <CardCarousel>
      {projects.map(project => {
        return (
          <ProjectViewCard
            key={project.entityId}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            synId={project.entityId}
            image={
              project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={`Logo for ${project.projectName}`}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : undefined
            }
          />
        )
      })}
    </CardCarousel>
  )
}

export default ProjectViewCarousel

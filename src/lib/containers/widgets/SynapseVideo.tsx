import * as React from 'react'
import { useEffect, useState } from 'react'
import { getEntity, getFiles } from '../../utils/SynapseClient'
import {
  FileEntity,
  FileHandleAssociateType,
  FileHandleAssociation,
  BatchFileRequest,
  BatchFileResult,
} from '../../utils/synapseTypes'

export type Props = {
  params: any
  wikiId?: string
  synapseId?: string
  sessionToken?: string
  reactKey?: any
}

export default function SynapseVideo({
  params,
  wikiId,
  synapseId,
  sessionToken,
  reactKey,
}: Props) {
  const [video, setVideo] = useState<string>()
  const [videoUrl, setVideoUrl] = useState<string>()
  const [videoWidth, setVideoWidth] = useState<string>()
  const [videoHeight, setVideoHeight] = useState<string>()

  useEffect(() => {
    const getVideo = () => {
      if (params.videoId)
        setVideo(`https://www.youtube.com/embed/${params.videoId}`)
      else if (params.vimeoId)
        setVideo(`https://player.vimeo.com/video/${params.vimeoId}`)
      else {
        const videoKey =
          params.oggSynapseId || params.mp4SynapseId || params.webmSynapseId

        getEntity<FileEntity>(sessionToken, videoKey).then(
          (data: FileEntity) => {
            const fileHandleAssociationList: FileHandleAssociation[] = [
              {
                associateObjectId: videoKey,
                associateObjectType: FileHandleAssociateType.FileEntity,
                fileHandleId: data.dataFileHandleId,
              },
            ]
            getSynapseFiles(fileHandleAssociationList, data.dataFileHandleId)
          },
        )
      }
    }

    const getSynapseFiles = (
      fileHandleAssociationList: FileHandleAssociation[],
      id: string,
    ) => {
      // overload the method for two different use cases, one where
      // the image is attached to an entity and creates a list on the spot,
      // the other where list is passed in from componentDidMount in MarkdownSynapse
      const request: BatchFileRequest = {
        includeFileHandles: false,
        includePreSignedURLs: true,
        includePreviewPreSignedURLs: false,
        requestedFiles: fileHandleAssociationList,
      }

      getFiles(request, sessionToken)
        .then((data: BatchFileResult) => {
          const { preSignedURL } = data.requestedFiles.filter(
            el => el.fileHandleId === id,
          )[0]
          setVideoUrl(preSignedURL)
        })
        .catch(err => {
          console.error('Error on getting video ', err)
        })
    }
    const getVideoSize = () => {
      if (params.weight) setVideoHeight(params.weight)
      if (params.width) setVideoWidth(params.width)
    }
    getVideo()
    getVideoSize()
  }, [video, params, sessionToken])

  return (
    <div>
      {videoUrl ? (
        <video controls src={videoUrl} width={videoWidth} height={videoHeight}>
          Your user agent does not support the HTML5 Video element.
        </video>
      ) : (
        <iframe
          title="video frame"
          src={video}
          width={videoWidth}
          height={videoHeight}
        ></iframe>
      )}
    </div>
  )
}
